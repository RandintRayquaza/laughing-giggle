import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllDocs, getDocBySlug } from '@/lib/mdx';
import Navbar from '@/features/landing/ui/Navbar';
import Footer from '@/features/landing/ui/Footer';
import Link from 'next/link';

// Map standard HTML to our custom Awwwards-tier UI tokens
const mdxComponents = {
  h1: (props: any) => <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8" {...props} />,
  h2: (props: any) => <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mt-16 mb-6 pb-4 border-b border-white/10" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold text-white mt-10 mb-4" {...props} />,
  p: (props: any) => <p className="text-white/70 text-lg leading-relaxed mb-6" {...props} />,
  a: (props: any) => <a className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 decoration-white/20 transition-colors" {...props} />,
  strong: (props: any) => <strong className="font-bold text-white" {...props} />,
  code: (props: any) => (
    <code className="px-1.5 py-0.5 rounded-md bg-white/10 text-emerald-400 font-mono text-sm border border-white/5" {...props} />
  ),
  pre: (props: any) => (
    <pre className="p-6 rounded-xl bg-[#111] text-white/90 font-mono text-sm border border-white/10 overflow-x-auto shadow-[0_0_30px_rgba(255,255,255,0.02)] mb-8" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 my-8 bg-emerald-500/5 rounded-r-xl italic text-white/60" {...props} />
  ),
  ul: (props: any) => <ul className="list-disc list-outside ml-6 mb-8 text-white/70 space-y-3" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-outside ml-6 mb-8 text-white/70 space-y-3" {...props} />,
  li: (props: any) => <li className="pl-2 leading-relaxed" {...props} />,
};

export default function DocPage({ params }: { params: { slug?: string[] } }) {
  const allDocs = getAllDocs();
  
  // Resolve current slug
  const slug = params.slug ? params.slug.join('/') : allDocs[0]?.slug;
  
  if (!slug) {
    return <div className="min-h-screen bg-black text-white p-20">No documentation found.</div>;
  }
  
  const doc = getDocBySlug(slug);

  return (
    <main className="relative min-h-screen w-full bg-[#0a0a0a] flex flex-col selection:bg-white/20">
      <Navbar />
      
      <div className="flex-1 w-full max-w-[1400px] mx-auto pt-32 px-6 pb-24 flex flex-col lg:flex-row gap-12 relative">
        
        {/* LEFT SIDEBAR (Navigation) */}
        <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-32 h-fit glassmorphic p-6 rounded-2xl border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md z-20">
          <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Documentation</h4>
          <nav className="flex flex-col gap-2">
            {allDocs.map((item) => {
              const isActive = item.slug === slug;
              return (
                <Link
                  key={item.slug}
                  href={`/docs/${item.slug}`}
                  className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive ? 'text-white bg-white/10 border border-white/10' : 'text-white/40 hover:text-white/80'}`}
                >
                  <span className="relative z-10">{item.meta.title}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* CENTER PANE (MDX Content) */}
        <div className="flex-1 max-w-3xl flex flex-col">
          <div className="flex flex-col gap-4 mb-12">
            <div className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] uppercase font-bold tracking-widest w-fit">
              {doc.meta.title}
            </div>
            {doc.meta.description && (
              <p className="text-white/50 text-xl font-medium leading-relaxed mt-4">
                {doc.meta.description}
              </p>
            )}
          </div>
          
          <article className="prose prose-invert max-w-none w-full">
            <MDXRemote source={doc.content} components={mdxComponents} />
          </article>
        </div>

      </div>

      <Footer />
    </main>
  );
}

// Generate static params for all docs
export async function generateStaticParams() {
  const docs = getAllDocs();
  return docs.map((doc) => ({
    slug: [doc.slug],
  }));
}
