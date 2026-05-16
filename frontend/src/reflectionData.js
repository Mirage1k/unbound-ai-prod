// Keywords + feedback for Aria's reflection evaluation per module
// ≥2 keyword matches in a response ≥40 chars → goodResponse; else → hintResponse
export const REFLECTION_DATA = {
  ai: {
    1: {
      keywords: ["ai", "artificial intelligence", "hallucination", "verify", "responsible", "bias", "generative", "human", "judgement", "check", "tool", "data", "accuracy", "reliable"],
      goodResponse: "Great reflection! You're already thinking critically about how AI fits into your work and where human judgement still matters. That's the foundation of responsible AI use.",
      hintResponse: "Think about what surprised you most — maybe how AI can produce wrong information (hallucinations), or how important it is to verify outputs before using them. Try sharing a specific example.",
    },
    2: {
      keywords: ["prompt", "context", "tone", "task", "output", "instruction", "specific", "format", "follow-up", "iterate", "vague", "clear", "result", "refine"],
      goodResponse: "Excellent! You've clearly understood that better prompts produce better results — and that prompting is a skill you can practise and improve with every interaction.",
      hintResponse: "Think about the difference between a vague prompt like 'write an email' and a detailed one with context, tone, and format. How would that change what the AI gives you? Try to describe a specific prompt you'd use.",
    },
    3: {
      keywords: ["draft", "email", "summary", "productivity", "review", "edit", "tone", "communication", "ai", "output", "message", "report", "meeting", "efficient"],
      goodResponse: "Well done! You're thinking about AI as a real productivity tool — one that speeds up drafts and summaries while still requiring your review and judgement.",
      hintResponse: "Think about a specific work task — writing emails, summarising reports, or preparing for meetings. How could AI save you time? And what would you still need to check yourself?",
    },
    4: {
      keywords: ["research", "source", "verify", "fact", "content", "workflow", "repurpose", "knowledge", "cutoff", "credible", "citation", "reliable", "check", "ai"],
      goodResponse: "Excellent thinking! You understand that AI is a research accelerator — not a source of truth. Verifying and cross-checking is what separates reliable AI use from risky shortcuts.",
      hintResponse: "Think about what could go wrong if you trusted AI research without checking it — wrong statistics, outdated facts, or made-up citations. How would you verify an AI-generated fact before using it?",
    },
  },

  hygiene: {
    1: {
      keywords: ["digital hygiene", "footprint", "personal data", "privacy", "safe", "habit", "responsible", "data", "online", "protect", "information", "device"],
      goodResponse: "Great reflection! You're connecting digital hygiene to your real daily habits — that's how good digital practice actually happens, one small decision at a time.",
      hintResponse: "Think about something specific in your digital life — an old account you never use, a password you've had for years, or a privacy setting you've never changed. What would better digital hygiene look like there?",
    },
    2: {
      keywords: ["password", "mfa", "authentication", "account", "secure", "update", "device", "phishing", "strong", "manager", "login", "protect", "backup"],
      goodResponse: "Excellent! You've identified practical steps to protect your accounts — strong passwords, MFA, and regular updates are the three most impactful security habits anyone can build.",
      hintResponse: "Think about your own password habits. Do you reuse passwords? Have you enabled MFA on your most important accounts? Try to name one specific account you'll secure differently after this lesson.",
    },
    3: {
      keywords: ["file", "folder", "naming", "organise", "cloud", "storage", "inbox", "email", "clutter", "backup", "version", "clean", "system", "sort"],
      goodResponse: "Well organised thinking! Building a consistent file system and clean inbox takes effort to set up — but saves enormous time and stress in the long run.",
      hintResponse: "Think about a time when you couldn't find a file or email when you needed it. What was the cost? How would a better naming system or folder structure have helped? Try describing what your ideal system would look like.",
    },
    4: {
      keywords: ["etiquette", "reputation", "sharing", "professional", "boundary", "screenshot", "tone", "online", "communication", "responsible", "digital", "message", "post"],
      goodResponse: "Excellent reflection! You're thinking about how digital behaviour shapes professional reputation — and that's a habit that separates people who advance from those who don't.",
      hintResponse: "Think about a time a message was misread or something was shared without context. How did it affect the situation? What would responsible digital communication have looked like instead?",
    },
  },

  scam: {
    1: {
      keywords: ["scam", "social engineering", "phishing", "urgency", "verify", "trust", "trick", "pause", "suspicious", "fake", "fraud", "money", "personal data"],
      goodResponse: "Great awareness! Recognising that scams work by exploiting emotion and urgency — not just technology — is the most important mindset shift for staying safe.",
      hintResponse: "Think about why scams are so effective — they don't target stupidity, they target emotions. Fear, greed, urgency, and trust. Can you describe a scam tactic that might catch you off guard and why?",
    },
    2: {
      keywords: ["red flag", "link", "url", "fake", "website", "call", "qr code", "verify", "suspicious", "message", "sender", "spoofing", "check", "bank"],
      goodResponse: "Excellent spotting! You're building the habit of pausing and checking before clicking — that habit alone stops the majority of scam attempts.",
      hintResponse: "Think about the last suspicious message or email you received. What felt off? Could you describe the red flags — the tone, the link, the request? Naming the signals helps you spot them faster next time.",
    },
    3: {
      keywords: ["marketplace", "job", "investment", "loan", "mule", "scam", "fake", "upfront", "payment", "money", "fraud", "bank", "promise", "high return"],
      goodResponse: "Strong critical thinking! You're connecting the pattern behind financial scams — promises that are too good, pressure tactics, and requests for upfront payment or personal data.",
      hintResponse: "Think about what makes an investment or job offer feel too good to be true. Is it the promise of guaranteed returns? Easy money for minimal work? Try describing a specific red flag that would make you stop and verify.",
    },
    4: {
      keywords: ["ai", "deepfake", "voice cloning", "scam", "verify", "protect", "mfa", "response", "bank", "report", "habit", "awareness", "fake", "impersonation"],
      goodResponse: "Excellent! You understand that AI is being weaponised to make scams more convincing — and that verification habits, not just technology, are what protect you.",
      hintResponse: "Imagine receiving a voice message from a 'family member' in distress asking for money. How would you verify it's really them? Think about what habits or checks would help you pause before acting.",
    },
  },
};
