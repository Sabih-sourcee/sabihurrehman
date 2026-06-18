export type CurriculumDay = {
  day: number
  title: string
  topics: string[]
}

export type CurriculumWeek = {
  week: number
  mode: string
  subtitle: string
  days: CurriculumDay[]
}

export const corePrinciples = [
  'You are the director — AI is the crew.',
  'Never paste an error into Google. Paste it to Claude first.',
  'Ship ugly, iterate fast, never stop prompting.',
  'Design in Stitch, think in Claude, build in your IDE.',
  'Context + Task + Format — every prompt, every time.',
]

export const curriculum: CurriculumWeek[] = [
  {
    week: 1,
    mode: 'Think Mode',
    subtitle: 'Understanding the Stack & Thinking in AI',
    days: [
      {
        day: 1,
        title: 'What Even Is Vibe Coding?',
        topics: [
          'What is an LLM / Claude (no tech jargon)',
          'Why the old way of coding is dying',
          "The new mental model: you're the director, AI is the crew",
          'Tour of the full stack: Claude → Stitch → AI Studio → IDE',
          'Homework: Make a Claude account, send 10 prompts, see what breaks',
        ],
      },
      {
        day: 2,
        title: 'Claude Mastery (The Core Skill)',
        topics: [
          'How Claude thinks (context window, memory, roles)',
          "Writing prompts that actually work vs ones that don't",
          'The 3-part prompt formula: Context + Task + Format',
          'System prompts — what they are and why they matter',
          'Practice: Describe an app idea to Claude 5 different ways, compare outputs',
        ],
      },
      {
        day: 3,
        title: 'Stitch Deep Dive (UI First)',
        topics: [
          'What Stitch does (turns prompts → UI designs)',
          'How to describe a UI you have in your head',
          'Iterating on designs with follow-up prompts',
          'Exporting from Stitch (what you get, what to do with it)',
          'Practice: Build the UI for a to-do app, a landing page, a dashboard',
        ],
      },
      {
        day: 4,
        title: 'AI Studio (Logic + Backend Thinking)',
        topics: [
          'What Google AI Studio is for (prototyping, testing prompts at scale)',
          'System prompt playground — building AI-powered features',
          'Testing your app\'s "brain" before building the body',
          'Connecting AI Studio ideas back to Claude',
          'Practice: Build a mini chatbot system prompt for a food ordering assistant',
        ],
      },
      {
        day: 5,
        title: 'IDEs: Windsurf / Cursor / Claude Code',
        topics: [
          'Why you need an AI-native IDE (vs VS Code alone)',
          'Windsurf vs Cursor vs Claude Code — when to use what',
          'How to open a project, give it context, let it code',
          "Reading AI-generated code (you don't need to write it, but understand it)",
          'Practice: Open Stitch export in Cursor, ask it to add a button',
        ],
      },
      {
        day: 6,
        title: 'Mini Project #1',
        topics: [
          'Build a landing page for a fake product from scratch',
          'Design in Stitch',
          'Logic/copy help from Claude',
          'Polish + deploy with Cursor or Windsurf',
          'No hand-holding — figure it out with AI',
        ],
      },
      {
        day: 7,
        title: 'Review + Reflection',
        topics: [
          'What broke, what worked',
          'Debugging with AI (how to describe errors to Claude)',
          'The golden rule: never paste an error into Google, always paste it to Claude first',
        ],
      },
    ],
  },
  {
    week: 2,
    mode: 'Build Mode',
    subtitle: 'Building Real Things End to End',
    days: [
      {
        day: 8,
        title: 'App Architecture Thinking',
        topics: [
          'How to break any app idea into pieces (screens, features, data)',
          'PRD (Product Requirements Doc) — let Claude write it for you',
          'File structure basics — what goes where and why',
          'Practice: Give Claude your app idea, have it spit out a full PRD',
        ],
      },
      {
        day: 9,
        title: 'Building a Web App',
        topics: [
          'React basics (just enough — components, props, state in plain English)',
          'Claude Code / Cursor doing the heavy lifting',
          'How to chain prompts: design → logic → connect → test',
          'Practice: Build a simple expense tracker UI with fake data',
        ],
      },
      {
        day: 10,
        title: 'Adding Real Features',
        topics: [
          'Forms, buttons, navigation between pages',
          'Connecting to a simple backend (Supabase or Firebase — no server coding)',
          'Storing and reading data',
          'Practice: Make your expense tracker actually save data',
        ],
      },
      {
        day: 11,
        title: 'Browser Extensions',
        topics: [
          'What an extension is made of (manifest, popup, content script)',
          'How to describe one to Claude and get working code',
          'Loading it in Chrome unpacked',
          'Practice: Build an extension that highlights every price on a webpage',
        ],
      },
      {
        day: 12,
        title: 'Desktop Software Basics',
        topics: [
          'Electron / Tauri in plain English (web tech → desktop app)',
          'When to build desktop vs web vs extension',
          'Claude Code handling the boilerplate',
          'Practice: Wrap your web app into a desktop window',
        ],
      },
      {
        day: 13,
        title: 'Mini Project #2 (Capstone)',
        topics: [
          "Build something you'd actually use or sell",
          'Full app or tool — their own idea',
          'Uses at least: Claude (for prompting), Stitch (for UI), an IDE (for building)',
          'Must be shareable (link, install, or demo)',
        ],
      },
      {
        day: 14,
        title: 'Ship & Learn to Iterate',
        topics: [
          'How to deploy (Vercel, Netlify — literally 2 clicks)',
          'Getting feedback and using Claude to implement it',
          'How to keep learning after this (what to follow, what to build next)',
          'The vibe coder mindset: ship ugly, iterate fast, never stop prompting',
        ],
      },
    ],
  },
]
