import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDirectory = path.join(process.cwd(), 'content/docs');

export function getDocSlugs() {
  if (!fs.existsSync(docsDirectory)) return [];
  return fs.readdirSync(docsDirectory).filter(file => file.endsWith('.mdx'));
}

export function getDocBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(docsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

export function getAllDocs() {
  const slugs = getDocSlugs();
  const docs = slugs.map((slug) => getDocBySlug(slug))
    // sort docs by order in frontmatter
    .sort((doc1, doc2) => ((doc1.meta.order || 0) > (doc2.meta.order || 0) ? 1 : -1));
  return docs;
}
