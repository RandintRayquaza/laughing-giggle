#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import chalk from 'chalk';
import prompts from 'prompts';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SKILLS_ROOT = path.join(__dirname, '..');

async function main() {
  const logo = `
 ${chalk.cyan('██╗')}${chalk.magenta('███████╗')}${chalk.cyan('████████╗')}${chalk.magenta('███╗   ███╗')}
 ${chalk.cyan('██║')}${chalk.magenta('██╔════╝')}╚══${chalk.cyan('██╔')}══╝${chalk.magenta('████╗ ████║')}
 ${chalk.cyan('██║')}${chalk.magenta('███████╗')}   ${chalk.cyan('██║')}   ${chalk.magenta('██╔████╔██║')}
 ${chalk.cyan('██║')}╚════${chalk.magenta('██║')}   ${chalk.cyan('██║')}   ${chalk.magenta('██║')}╚██╔╝${chalk.cyan('██║')}
 ${chalk.cyan('██║')}${chalk.magenta('███████║')}   ${chalk.cyan('██║')}   ${chalk.magenta('██║')} ╚═╝ ${chalk.cyan('██║')}
 ╚═╝╚══════╝   ╚═╝   ╚═╝     ╚═╝
   ${chalk.bold.white('S   K   I   L   L   S')}
  `;
  
  console.log(logo);
  console.log(chalk.dim('   The master context orchestrator for AI coding agents.\n'));

  // Step 1: Harness Detection (Auto-detect default)
  const cwd = process.cwd();
  let autoDetectedHarness = '.cursorrules';
  try {
    const files = await fs.readdir(cwd);
    if (files.includes('.gemini')) autoDetectedHarness = 'GEMINI.md';
    if (files.includes('.claude')) autoDetectedHarness = 'CLAUDE.md';
    if (files.includes('.windsurf')) autoDetectedHarness = '.windsurfrules';
  } catch (err) {}

  // Step 2: The Core Interview
  const response = await prompts([
    {
      type: 'select',
      name: 'targetHarness',
      message: 'Which AI Agent Harness are you targeting?',
      choices: [
        { title: `Auto-Detect (${autoDetectedHarness})`, value: 'auto' },
        { title: 'Cursor', description: '.cursorrules', value: '.cursorrules' },
        { title: 'Windsurf', description: '.windsurfrules', value: '.windsurfrules' },
        { title: 'Claude Code', description: 'CLAUDE.md', value: 'CLAUDE.md' },
        { title: 'Gemini CLI', description: 'GEMINI.md', value: 'GEMINI.md' },
        { title: 'Roo Code / Cline', description: '.clinerules', value: '.clinerules' },
        { title: 'GitHub Copilot', description: 'copilot-instructions.md', value: '.github/copilot-instructions.md' }
      ]
    },
    {
      type: 'select',
      name: 'strategy',
      message: 'How should we initialize the architecture?',
      choices: [
        { title: 'Greenfield', description: 'Start fresh from a prompt (Interactive)', value: 'greenfield' },
        { title: 'Brownfield', description: 'Reverse-engineer the existing codebase', value: 'brownfield' }
      ]
    },
    {
      type: prev => prev === 'greenfield' ? 'text' : null,
      name: 'projectName',
      message: 'What is the name of this project?',
      initial: 'My App'
    },
    {
      type: 'confirm',
      name: 'installWorkflow',
      message: 'Install Day-to-Day Workflow Commands (/audit, /debug)?',
      initial: true
    }
  ]);

  if (!response.strategy) {
    console.log(chalk.red('Installation cancelled.'));
    process.exit(1);
  }

  console.log(chalk.cyan('\n⚙ Installing blueprints...'));

  const targetDir = cwd;
  const contextDir = path.join(targetDir, '.istm-context');
  
  // Step 3: Inject the Orchestrator
  console.log(chalk.green(`✓ Injecting Master Orchestrator into ${chalk.bold(harness)}`));
  const skillPath = path.join(SKILLS_ROOT, 'istm-architecture', 'SKILL.md');
  const targetHarnessPath = path.join(targetDir, harness);
  try {
    await fs.copyFile(skillPath, targetHarnessPath);
  } catch (err) {
    console.log(chalk.yellow(`  ⚠ Could not copy SKILL.md. Ensure it exists in the package.`));
  }

  // Step 4: Inject the 4 Pillars
  console.log(chalk.green(`✓ Scaffolding .istm-context/`));
  try {
    await fs.mkdir(contextDir, { recursive: true });
  } catch (err) {}

  const templatesDir = path.join(SKILLS_ROOT, 'istm-architecture', 'templates');
  const pillars = ['project-overview.md', 'architecture.md', 'design.md', 'agents.md'];

  for (const pillar of pillars) {
    console.log(chalk.dim(`  - Hydrating ${pillar}`));
    try {
      const templatePath = path.join(templatesDir, pillar);
      let content = await fs.readFile(templatePath, 'utf-8');
      
      // Simple variable replacement
      if (response.projectName) {
        content = content.replace(/{project_name}/g, response.projectName);
      }
      
      await fs.writeFile(path.join(contextDir, pillar), content);
    } catch (err) {
      console.log(chalk.red(`  ✗ Failed to hydrate ${pillar}: ${err.message}`));
    }
  }

  // Step 5: Workflow Injection
  if (response.installWorkflow) {
    console.log(chalk.green(`✓ Installing workflow commands (/audit, /debug)`));
    const workflowSource = path.join(SKILLS_ROOT, 'istm-workflow');
    const workflowTarget = path.join(targetDir, '.istm-workflow');
    try {
      // Basic directory copy (Node 16.7+)
      await fs.cp(workflowSource, workflowTarget, { recursive: true });
    } catch (err) {
      console.log(chalk.yellow(`  ⚠ Workflow directory not copied (make sure istm-workflow exists).`));
    }
  }

  console.log(chalk.bold.magenta('\n✨ Initialization Complete!'));
  console.log(`Your AI is now operating under the ${chalk.bold('istmX')} architecture.\n`);
}

main().catch(err => {
  console.error(chalk.red('Error during installation:'), err);
  process.exit(1);
});
