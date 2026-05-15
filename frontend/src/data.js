export const COURSES = [
  { id:"ai",      title:"AI Learning for Work and Productivity",      desc:"Master practical AI tools — prompting, communication, research workflows, and responsible AI use.",                duration:"8–12 hrs", modules:4, badge:"In progress" },
  { id:"hygiene", title:"Digital Hygiene for Work and Everyday Life", desc:"Build safe digital habits for accounts, devices, files, communication, and professional online behaviour.",     duration:"8–10 hrs", modules:4, badge:null         },
  { id:"scam",    title:"Scam Awareness for Work and Everyday Life",  desc:"Recognise and respond to scams in Southeast Asia — from phishing and social engineering to AI-powered fraud.", duration:"8–10 hrs", modules:4, badge:"Popular"    },
];

export const MODS = {
  ai: [
    { id:1, title:"AI Basics and Responsible Use",         lessons:6, status:"complete", score:90 },
    { id:2, title:"Prompting 101",                         lessons:6, status:"active"             },
    { id:3, title:"AI for Productivity and Communication", lessons:6, status:"locked"             },
    { id:4, title:"AI for Research, Content and Workflow", lessons:6, status:"locked"             },
  ],
  hygiene: [
    { id:1, title:"Digital Hygiene Basics",                           lessons:5, status:"available" },
    { id:2, title:"Accounts, Passwords and Device Safety",            lessons:5, status:"locked"    },
    { id:3, title:"Digital Organisation and Information Management",  lessons:5, status:"locked"    },
    { id:4, title:"Professional Digital Behaviour and Communication", lessons:5, status:"locked"    },
  ],
  scam: [
    { id:1, title:"Understanding Scams in Southeast Asia",             lessons:5, status:"available" },
    { id:2, title:"Spotting Scam Messages, Links, Calls and Websites", lessons:5, status:"locked"    },
    { id:3, title:"Financial, Shopping, Job and Investment Scams",     lessons:5, status:"locked"    },
    { id:4, title:"AI Scams, Scam Response and Protection Habits",    lessons:5, status:"locked"    },
  ],
};

export const LESSONS_DATA = {
  ai: {
    1: [
      { id:1, title:"What Is AI?",                        type:"Reading + deep reading"          },
      { id:2, title:"What Is Generative AI?",             type:"Reading"                         },
      { id:3, title:"What Can AI Help With?",             type:"Reading + examples"              },
      { id:4, title:"What AI Cannot Do Reliably",         type:"Reading + scenarios"             },
      { id:5, title:"Responsible AI Use",                 type:"Reading + checklist"             },
      { id:6, title:"Human Advantage in the Age of AI",  type:"Reading"                         },
    ],
    2: [
      { id:1, title:"What Is a Prompt?",               type:"Reading"               },
      { id:2, title:"The Basic Prompt Formula",        type:"Reading + Activity"    },
      { id:3, title:"Weak Prompts vs Strong Prompts",  type:"Reading + Activity"    },
      { id:4, title:"Follow-Up Prompts and Iteration", type:"Reading + Activity"    },
      { id:5, title:"Prompting for Different Outputs", type:"Reading + Prompt Bank" },
      { id:6, title:"Reviewing AI Outputs",            type:"Reading + Checklist"   },
    ],
    3: [
      { id:1, title:"AI for Emails and Messages",                   type:"Reading + examples"  },
      { id:2, title:"AI for Summaries and Reports",                 type:"Reading + examples"  },
      { id:3, title:"AI for Meetings and Admin Work",               type:"Reading + examples"  },
      { id:4, title:"AI for Planning and Time Management",          type:"Reading + examples"  },
      { id:5, title:"Editing AI Output for Clarity and Tone",       type:"Reading + checklist" },
      { id:6, title:"Building a Simple AI Productivity System",     type:"Reading + prompt bank"},
    ],
    4: [
      { id:1, title:"AI for Research and Learning",                 type:"Reading + examples"        },
      { id:2, title:"AI for Source Checking and Fact Review",       type:"Reading + checklist"       },
      { id:3, title:"AI for Presentations",                         type:"Reading + examples"        },
      { id:4, title:"AI for Content Creation and Repurposing",      type:"Reading + prompt bank"     },
      { id:5, title:"AI Workflow Design",                           type:"Reading + workflow examples"},
      { id:6, title:"Final Responsible AI Checklist",               type:"Reading + checklist"       },
    ],
  },
  hygiene: {
    1: [
      { id:1, title:"What Is Digital Hygiene?",             type:"Reading + examples"        },
      { id:2, title:"Why Digital Hygiene Matters",          type:"Reading + scenarios + MCQ" },
      { id:3, title:"Personal Data and Privacy",            type:"Reading + checklist"       },
      { id:4, title:"Digital Footprints",                   type:"Reading + matching activity"},
      { id:5, title:"Everyday Digital Responsibility",      type:"Reading + decision game"   },
    ],
    2: [
      { id:1, title:"Password Safety",                            type:"Reading + activity"  },
      { id:2, title:"Multi-Factor Authentication",               type:"Reading + MCQ"       },
      { id:3, title:"Account Recovery and Login Habits",         type:"Reading + checklist" },
      { id:4, title:"Device Safety Basics",                      type:"Reading + mission"   },
      { id:5, title:"App Permissions, Updates, and Backups",     type:"Reading + game"      },
    ],
    3: [
      { id:1, title:"Digital Clutter and Why It Matters",              type:"Reading + examples"  },
      { id:2, title:"File Naming and Folder Systems",                  type:"Reading + activity"  },
      { id:3, title:"Email and Inbox Hygiene",                         type:"Reading + mission"   },
      { id:4, title:"Cloud Storage, Sharing, and Version Control",     type:"Reading + game"      },
      { id:5, title:"Building a Digital Organisation Routine",         type:"Reading + workflow"  },
    ],
    4: [
      { id:1, title:"Digital Behaviour in Work and School",                      type:"Reading + examples" },
      { id:2, title:"Workplace Messaging and Group Chat Etiquette",              type:"Reading + activity" },
      { id:3, title:"Tone, Timing, and Digital Boundaries",                      type:"Reading + game"     },
      { id:4, title:"Social Media Hygiene and Online Reputation",               type:"Reading + activity" },
      { id:5, title:"Screenshots, Recordings, AI Outputs, and Responsible Sharing", type:"Reading + challenge"},
    ],
  },
  scam: {
    1: [
      { id:1, title:"What Is a Scam?",                              type:"Reading + quick quiz"      },
      { id:2, title:"Why Scams Work",                               type:"Reading + scenario activity"},
      { id:3, title:"Types of Scams in Southeast Asia",             type:"Reading + sorting activity" },
      { id:4, title:"Phishing, Hacking, and Social Engineering",    type:"Reading + matching activity"},
      { id:5, title:"The Scam Pause Method",                        type:"Reading + decision game"   },
    ],
    2: [
      { id:1, title:"Scam Messages and Phishing",                   type:"Reading + examples"   },
      { id:2, title:"Suspicious Links and Fake Websites",           type:"Reading + checklist"  },
      { id:3, title:"Scam Calls, Voice Tricks, and Impersonation",  type:"Reading + scenarios"  },
      { id:4, title:"QR Codes, Attachments, and Downloads",         type:"Reading + matching"   },
      { id:5, title:"Safe Verification Habits",                     type:"Reading + game"       },
    ],
    3: [
      { id:1, title:"Online Shopping and Marketplace Scams",  type:"Reading + examples"   },
      { id:2, title:"Job, Task, and Side Income Scams",       type:"Reading + scenarios"  },
      { id:3, title:"Investment and Loan Scams",              type:"Reading + checklist"  },
      { id:4, title:"Bank, E-Wallet, and Payment Scams",      type:"Reading + matching"   },
      { id:5, title:"Mule Accounts and Money Movement Risks", type:"Reading + game"       },
    ],
    4: [
      { id:1, title:"What Are AI Scams?",                                       type:"Reading + examples"  },
      { id:2, title:"Voice Cloning, Face Cloning, and Deepfake Impersonation",  type:"Reading + scenarios" },
      { id:3, title:"AI-Generated Phishing, Fake Profiles, and Fake Documents", type:"Reading + checklist" },
      { id:4, title:"What to Do If You Are Targeted or Scammed",               type:"Reading + steps"     },
      { id:5, title:"Long-Term Scam Protection Habits",                         type:"Reading + plan"      },
    ],
  },
};

export const KEY_TERMS_DATA = {
  ai: {
    1: [
      { term:"Artificial Intelligence", def:"Computer systems that perform tasks usually associated with human intelligence, such as recognising patterns or understanding language." },
      { term:"Generative AI",           def:"AI that creates new content such as text, images, summaries, ideas, or code." },
      { term:"Prompt",                  def:"The instruction, question, or request given to an AI tool." },
      { term:"Machine Learning",        def:"A type of AI where systems learn patterns from data to make predictions or decisions." },
      { term:"Large Language Model",    def:"An AI model trained on large amounts of text to understand and generate language." },
      { term:"Hallucination",           def:"When AI produces information that sounds real but is false, inaccurate, or invented." },
      { term:"Bias",                    def:"Unfair or incomplete patterns that may appear in AI outputs because of the data or assumptions behind the system." },
      { term:"Responsible AI Use",      def:"Using AI safely, ethically, and with human judgement." },
      { term:"Privacy",                 def:"Protecting personal, confidential, or sensitive information from unauthorised access." },
      { term:"Verification",            def:"Checking whether information is accurate using reliable sources." },
      { term:"Human Judgement",         def:"The ability to apply context, ethics, experience, and responsibility when deciding whether to use AI output." },
      { term:"AI Literacy",             def:"The ability to understand, use, question, and evaluate AI tools responsibly." },
    ],
    2: [
      { term:"Prompt",           def:"The instruction or question given to an AI tool."                       },
      { term:"Prompting",        def:"The skill of giving clear instructions to AI to get better outputs."    },
      { term:"Task",             def:"What you want AI to do — write, summarise, explain, or plan."          },
      { term:"Context",          def:"Background information that helps AI understand the situation."         },
      { term:"Format",           def:"How the output should be presented — bullets, table, or email."        },
      { term:"Tone",             def:"How the response should sound — formal, friendly, or professional."    },
      { term:"Constraints",      def:"Limits given to AI such as word count or audience level."              },
      { term:"Follow-Up Prompt", def:"An additional prompt used to improve or refine the first AI response." },
    ],
    3: [
      { term:"Productivity",    def:"Accomplishing more meaningful work in less time with less friction." },
      { term:"AI-Assisted Draft", def:"A first version of content generated by AI that a human then reviews and edits." },
      { term:"Tone Editing",    def:"Adjusting the emotional register of a piece of writing — formal, friendly, urgent." },
      { term:"Summarisation",   def:"Condensing longer content into its key points without losing meaning." },
    ],
    4: [
      { term:"Source Verification", def:"Checking that a claim or statistic comes from a reliable, authoritative source." },
      { term:"Content Repurposing", def:"Taking existing content and adapting it for a different format or audience." },
      { term:"AI Workflow",         def:"A defined sequence of steps that incorporates AI tools at specific points to improve efficiency." },
      { term:"Knowledge Cutoff",    def:"The date after which an AI model has no information about world events." },
    ],
  },
  hygiene: {
    1: [
      { term:"Digital Hygiene",   def:"Practices that keep your digital life safe, clean, organised, and responsible." },
      { term:"Personal Data",     def:"Any information that can identify you, such as your name, IC number, phone, or email." },
      { term:"Digital Footprint", def:"The trail of data left behind when you use the internet or digital devices." },
      { term:"Privacy Setting",   def:"Controls that limit who can see your information or activity online." },
    ],
    2: [
      { term:"Password Manager",         def:"A tool that securely stores and autofills passwords so you don't need to remember them." },
      { term:"Multi-Factor Authentication", def:"A login method requiring two or more verification steps, such as a password plus an OTP." },
      { term:"Phishing",                 def:"A scam attempt that tricks you into revealing login credentials or personal information." },
      { term:"Software Update",          def:"A release from an app developer that patches security vulnerabilities and adds improvements." },
    ],
    3: [
      { term:"File Naming Convention", def:"A consistent system for naming files so they are easy to find and sort." },
      { term:"Cloud Storage",          def:"Online storage that lets you access files from any device connected to the internet." },
      { term:"Version Control",        def:"Tracking and managing changes to a file over time so earlier versions can be recovered." },
      { term:"Digital Declutter",      def:"Removing unnecessary files, apps, and data to keep your digital environment organised." },
    ],
    4: [
      { term:"Digital Etiquette",    def:"Respectful and professional behaviour in digital communication." },
      { term:"Online Reputation",    def:"The impression others form of you based on your digital activity and posts." },
      { term:"Digital Boundary",     def:"A personal rule about when and how you engage with digital communication." },
      { term:"Responsible Sharing",  def:"Thinking carefully before forwarding, posting, or publishing digital content." },
    ],
  },
  scam: {
    1: [
      { term:"Scam",               def:"A deceptive scheme designed to trick you into giving away money or personal information." },
      { term:"Social Engineering", def:"Manipulating people psychologically to get them to reveal information or take an action." },
      { term:"Phishing",           def:"Fraudulent messages that impersonate trusted entities to steal credentials or money." },
      { term:"Urgency Tactic",     def:"A scam technique that creates artificial time pressure to stop you thinking clearly." },
    ],
    2: [
      { term:"Red Flag",           def:"A warning sign that a message, link, or website may be a scam." },
      { term:"URL Spoofing",       def:"Creating a fake web address that looks similar to a legitimate one." },
      { term:"Caller ID Spoofing", def:"Displaying a fake phone number to make a scam call appear to come from a trusted source." },
      { term:"QR Code Scam",       def:"A fake QR code that redirects to a malicious website when scanned." },
    ],
    3: [
      { term:"Investment Scam", def:"A fraudulent scheme promising high returns to steal your money." },
      { term:"Mule Account",    def:"A bank account used (knowingly or unknowingly) to move stolen money on behalf of scammers." },
      { term:"Marketplace Scam",def:"A fraudulent listing or buyer/seller interaction on an online platform designed to steal money or goods." },
      { term:"Loan Scam",       def:"A fake loan offer that charges upfront fees and then disappears without providing any loan." },
    ],
    4: [
      { term:"AI Scam",        def:"A scam that uses artificial intelligence to generate more convincing fake content, voices, or identities." },
      { term:"Deepfake",       def:"AI-generated video or audio that realistically impersonates a real person." },
      { term:"Voice Cloning",  def:"Using AI to replicate someone's voice from audio samples to impersonate them in calls or messages." },
      { term:"Scam Response",  def:"The steps to take immediately after realising you have been targeted by or fallen victim to a scam." },
    ],
  },
};

export const LESSON_CONTENT = {
  ai: {
    1: {
      1: {
        reading: [
          "Artificial Intelligence (AI) refers to computer systems designed to perform tasks that normally require human intelligence — such as recognising patterns, understanding language, making predictions, and solving problems. AI systems are not conscious or self-aware; they are sophisticated tools trained on large amounts of data.",
          "Modern AI includes voice assistants like Siri and Google Assistant, recommendation engines on Netflix and Spotify, email spam filters, and large language models like ChatGPT, Claude, and Gemini. AI has existed as a research field since the 1950s but has advanced rapidly due to improvements in computing power and the availability of massive datasets.",
          "Today, AI tools are accessible to anyone with an internet connection. This makes AI literacy — understanding what AI is, how it works, and how to use it responsibly — an essential skill for the modern workplace.",
        ],
        mcq: { q:"What is artificial intelligence?", opts:["A robot that thinks like a human","A computer system that can perform tasks usually associated with human intelligence","A database that stores human knowledge","A type of internet connection"], correct:1, explanation:"AI is a computer system that performs tasks normally requiring human intelligence — it is not a robot, a database, or an internet type." },
        reflectionPrompt:"Which AI tools have you already used? What did you use them for?",
        furtherReading:["IBM: What Is Artificial Intelligence? — https://www.ibm.com/think/topics/artificial-intelligence","UNESCO AI Competency Framework — https://www.unesco.org/en/articles/ai-competency-framework-students"],
      },
      2: {
        reading: [
          "Generative AI is a type of artificial intelligence that creates new content — including text, images, audio, video, code, and more. Unlike earlier AI that only classified or analysed existing data, generative AI produces original outputs based on patterns it learned during training.",
          "Examples include ChatGPT, Claude, and Gemini for text; DALL-E and Midjourney for images; and GitHub Copilot for code. When you ask a generative AI tool to write an email or summarise a document, it predicts the most useful response based on its training data.",
          "Understanding that generative AI creates content through pattern prediction — not genuine understanding — is critical. This is why AI can sometimes produce confident-sounding but completely incorrect information.",
        ],
        mcq: { q:"What is generative AI mainly used for?", opts:["Creating new content such as text, images, summaries, or ideas","Storing and retrieving files","Connecting computers to the internet","Running antivirus checks"], correct:0, explanation:"Generative AI is defined by its ability to create new content — text, images, code, and more." },
        reflectionPrompt:"What kind of content could generative AI help you create in your own work or studies?",
        furtherReading:["IBM: What Is Generative AI? — https://www.ibm.com/think/topics/generative-ai","OECD.AI: Generative AI Risks — https://oecd.ai/en/genai/issues/risks-and-unknowns"],
      },
      3: {
        reading: [
          "AI tools can genuinely help with a wide range of everyday work tasks. For communication, AI can draft emails, improve tone and clarity, and translate languages. For research, AI can summarise long documents and explain complex topics simply. For content creation, AI can brainstorm ideas and write first drafts for you to refine.",
          "AI also assists with administration — scheduling, checklists, and organising information — and professional development, such as practising for interviews or summarising industry articles.",
          "The key is knowing when a task is a good fit for AI: drafts, brainstorming, summarisation, and formatting work well. Tasks requiring verified facts, ethical judgement, or final decisions should always involve a human.",
        ],
        mcq: { q:"Which of the following is a good use of AI?", opts:["Letting AI make a final decision on a job application","Asking AI to brainstorm presentation ideas","Using AI to write a medical diagnosis","Submitting AI content without reviewing it"], correct:1, explanation:"Brainstorming is an ideal AI task. Final hiring decisions, medical diagnoses, and unreviewed outputs all require human judgement." },
        reflectionPrompt:"List three tasks in your daily work or study where AI assistance could save you time.",
        furtherReading:["Harvard University IT: AI Use Cases — https://www.huit.harvard.edu/news/ai-use-cases"],
      },
      4: {
        reading: [
          "While AI is powerful, it has important limitations. The most significant is hallucination — AI can produce text that sounds completely authoritative but is actually false or invented. This happens because AI generates content by predicting plausible text, not by checking facts against a verified database.",
          "AI also struggles with tasks requiring genuine understanding of nuance, cultural sensitivity, and real-world consequences. Its knowledge has a cutoff date, meaning it may not know about recent events. AI also reflects biases in its training data, so outputs can be unfair or incomplete in non-obvious ways.",
          "Always treat AI outputs as a starting point that requires your verification and judgement — not as a final authoritative source. If something matters, check it.",
        ],
        mcq: { q:"What is an AI hallucination?", opts:["When AI produces information that sounds real but is false or invented","When AI refuses to answer a question","When AI responds too slowly","When AI produces an image instead of text"], correct:0, explanation:"Hallucination is when AI confidently generates false information. It is one of the most important limitations to understand." },
        reflectionPrompt:"Describe a scenario where accepting AI output without checking could cause a real problem at work or school.",
        furtherReading:["OECD.AI: Generative AI Risks — https://oecd.ai/en/genai/issues/risks-and-unknowns"],
      },
      5: {
        reading: [
          "Using AI responsibly starts with privacy: never enter personal, confidential, or sensitive information into a public AI tool. This includes passwords, IC numbers, medical records, financial details, client data, and confidential business documents.",
          "The second principle is verification: always check AI outputs before acting on them, especially for factual claims, statistics, names, and dates. The third principle is transparency: be honest when AI helped with your work.",
          "A simple checklist before submitting AI-assisted work: Is the information accurate? Have I removed sensitive data? Does this reflect my genuine judgement? Would I be comfortable disclosing that AI helped?",
        ],
        mcq: { q:"Which information should you avoid uploading into a public AI tool?", opts:["A publicly available article","A list of project ideas","A customer's personal identity number","A general question about grammar"], correct:2, explanation:"A customer's identity number is sensitive personal data and must never be entered into a public AI tool." },
        reflectionPrompt:"Write one personal rule you will follow when using AI at work or school.",
        furtherReading:["OpenAI ChatGPT Privacy Settings — https://openai.com/consumer-privacy/"],
      },
      6: {
        reading: [
          "As AI becomes more capable, your competitive advantage is not avoiding AI — it is using AI intelligently, critically, and responsibly. AI can draft an email, but you decide whether the tone is right for the relationship. AI can suggest a decision, but you weigh the ethical implications and take responsibility.",
          "The things AI cannot replicate are exactly what make humans valuable: judgement, emotional intelligence, ethical reasoning, creativity rooted in lived experience, and accountability. These are the skills to develop alongside AI literacy.",
          "People who understand both what AI can do and what it cannot do will be more effective and more trusted than those who either avoid AI or over-rely on it without critical thinking.",
        ],
        mcq: { q:"Which statement best describes the role of humans when using AI?", opts:["Humans should only check AI outputs when something looks wrong","AI is replacing human judgement in most professional tasks","Humans provide judgement, context, ethics, and final responsibility","Humans should avoid AI tools to protect job security"], correct:2, explanation:"Humans remain responsible for context, ethics, and final decisions. AI is a tool that assists — not a replacement for human judgement." },
        reflectionPrompt:"How can you use AI to handle routine tasks while keeping your own judgement and creativity at the centre of your work?",
        furtherReading:["UNESCO AI Competency Framework — https://www.unesco.org/en/articles/ai-competency-framework-students"],
      },
    },
    2: {
      1: {
        reading: [
          "A prompt is the instruction, question, or request you give to an AI tool. Everything AI produces starts with a prompt — the quality of your prompt directly determines the quality of the output you get back.",
          "Prompting is a skill. A vague prompt produces a vague result. A clear, detailed prompt produces a targeted, useful result. Think of prompting like briefing a capable assistant: the more context and direction you give, the better they can help you.",
          "You don't need to be technical to write good prompts. You just need to be clear about what you want, why you want it, and how you want it delivered.",
        ],
        mcq: { q:"What is a prompt in the context of AI?", opts:["A reminder notification from your phone","An instruction or question given to an AI tool","A type of computer programme","A setting in an AI application"], correct:1, explanation:"A prompt is the instruction or question you give to an AI tool to guide what it produces." },
        reflectionPrompt:"Think of a task you did this week. How would you write a one-sentence prompt to ask AI to help with it?",
        furtherReading:["Prompt Engineering Guide — https://www.promptingguide.ai","OpenAI: Best Practices for Prompting — https://platform.openai.com/docs/guides/prompt-engineering"],
      },
      2: {
        reading: [
          "A strong prompt gives AI enough information to understand exactly what you want. Use this five-part formula: Task + Context + Format + Tone + Constraints.",
          "Task is what you want AI to do. Context is the background information AI needs. Format is how the output should look — email, bullet list, table. Tone is how it should sound — formal, friendly, professional. Constraints are the limits — word count, audience level, things to avoid.",
          "Not every prompt needs all five parts. But the more relevant parts you include, the better your output. Start with Task and Context as your minimum — then add Format, Tone, and Constraints to refine.",
        ],
        mcq: { q:"In the prompt \"Write a friendly reminder to students about submitting their assignment by Friday,\" what is the tone?", opts:["Friday","Students","Friendly","Assignment"], correct:2, explanation:"'Friendly' describes how the message should sound — that is the tone component of the prompt formula." },
        reflectionPrompt:"Rewrite this weak prompt using the formula: \"Write an email.\" Add task, context, format, tone, and a constraint.",
        furtherReading:["Microsoft: Learn About Copilot Prompts — https://support.microsoft.com/en-us/topic/how-to-write-effective-prompts-for-microsoft-copilot-for-microsoft-365"],
      },
      3: {
        reading: [
          "Weak prompts are vague, missing context, or incomplete. They produce generic, unfocused responses. Strong prompts are specific, contextual, and clearly formatted — they produce targeted, useful outputs.",
          "Weak: \"Write something about the meeting.\" Strong: \"Write a 150-word follow-up email to a client after our product demo meeting, confirming next steps and our timeline. Use a professional but warm tone.\"",
          "The difference is not complexity — it is specificity. When reviewing AI output that missed the mark, ask yourself: what context or instruction did I leave out? Then add it in your next prompt.",
        ],
        mcq: { q:"Which prompt is stronger?", opts:["Write a report","Write a 1-page summary of our Q2 sales performance for the management team, using bullet points and a professional tone","Tell me about sales","Give me something about our business"], correct:1, explanation:"The second prompt specifies the topic, length, audience, format, and tone — all components of a strong prompt." },
        reflectionPrompt:"Find a weak prompt you have used before and rewrite it using the five-part formula.",
        furtherReading:["Prompt Engineering Guide — https://www.promptingguide.ai"],
      },
      4: {
        reading: [
          "AI conversation is iterative. Your first prompt rarely needs to be perfect — you can improve the output through follow-up prompts. This is called prompt iteration.",
          "Common follow-up instructions include: 'Make it shorter', 'Use a more formal tone', 'Add an example', 'Rewrite the third paragraph', 'Give me three alternative versions'. Each follow-up refines the output without starting over.",
          "Think of your conversation with AI as a collaborative draft process. The first response is a starting point. Your follow-up prompts steer it toward what you actually need.",
        ],
        mcq: { q:"What is a follow-up prompt used for?", opts:["To start a completely new topic","To improve or refine the previous AI response","To log out of an AI tool","To copy the AI output to clipboard"], correct:1, explanation:"Follow-up prompts refine and improve the previous AI response — they are a core part of getting great results." },
        reflectionPrompt:"Take an AI response you found unsatisfying and write three follow-up prompts you could use to improve it.",
        furtherReading:["OpenAI: Best Practices — https://platform.openai.com/docs/guides/prompt-engineering"],
      },
      5: {
        reading: [
          "Different tasks need different types of prompts. For emails: specify recipient, purpose, tone, and length. For summaries: specify source material, length, and audience. For brainstorming: specify the topic, how many ideas, and any constraints.",
          "Some useful prompt patterns: 'Act as a [role]...', 'Give me [number] ideas for...', 'Summarise this in [format] for [audience]...', 'Rewrite this to sound more [tone]...'",
          "Building your own personal prompt bank — a saved collection of prompts that work well for your regular tasks — will save significant time over the long run.",
        ],
        mcq: { q:"Which prompt pattern is most useful for getting structured ideas?", opts:["Write something about marketing","Give me 5 ideas for a social media campaign promoting our new course, targeting working adults in Malaysia","Tell AI about my project","Ask for help"], correct:1, explanation:"The second prompt specifies quantity, task, product, and target audience — producing structured, targeted ideas." },
        reflectionPrompt:"Write three prompt templates you could reuse weekly in your own work.",
        furtherReading:["Prompt Engineering Guide — https://www.promptingguide.ai"],
      },
      6: {
        reading: [
          "Reviewing AI output is not optional — it is a professional responsibility. Before using any AI-generated content, run through this checklist: Is the information accurate? (verify facts, names, dates). Is the tone appropriate for your audience? Is the format correct? Has any sensitive information been included accidentally?",
          "AI outputs often need editing for accuracy, tone, naturalness of language, and alignment with your actual knowledge. A response that is technically well-structured can still be factually wrong.",
          "Develop the habit of treating every AI response as a first draft written by a capable but fallible assistant — one that always needs a human review before it is used.",
        ],
        mcq: { q:"Why should you always review AI-generated content before using it?", opts:["Because AI always writes in the wrong format","Because AI can make mistakes, miss context, or produce inaccurate information","Because AI outputs are always too long","Because organisations ban AI tools"], correct:1, explanation:"AI can produce confident-sounding but inaccurate content. Human review catches errors before they cause problems." },
        reflectionPrompt:"Describe your personal review process for AI-generated content. What do you check, and in what order?",
        furtherReading:["OpenAI: Best Practices — https://platform.openai.com/docs/guides/prompt-engineering"],
      },
    },
    3: {
      1: {
        reading: [
          "AI tools can dramatically speed up email and message drafting. Instead of staring at a blank screen, give AI the key points and let it produce a first draft you then edit and personalise.",
          "Prompt example: 'Write a professional email to a client explaining that our project deadline has moved by one week due to scope changes. Keep it under 150 words, apologetic but confident in tone.'",
          "Always edit AI-drafted emails before sending. Add personal touches, ensure the tone matches your relationship with the recipient, and verify any facts or commitments mentioned.",
        ],
        mcq: { q:"What should you always do before sending an AI-drafted email?", opts:["Send it immediately to save time","Review, edit, and personalise it","Add more formatting","Ask AI to send it for you"], correct:1, explanation:"AI drafts are starting points. Always review for tone, accuracy, and personal appropriateness before sending." },
        reflectionPrompt:"Draft a prompt you could use to get AI to help write a common email you send regularly.",
        furtherReading:["Microsoft Copilot for Email — https://support.microsoft.com/en-us/copilot"],
      },
      2: {
        reading: [
          "AI excels at summarising long content — reports, articles, meeting transcripts, and research documents. A good summarisation prompt specifies the source content, the desired length, and the audience.",
          "Example: 'Summarise this 10-page report into 5 bullet points for a non-technical management audience. Focus on key findings and recommended actions.'",
          "Use AI summaries as a starting point, then add your own commentary and context. An AI summary captures main points but may miss the nuance that comes from your direct experience with the topic.",
        ],
        mcq: { q:"What makes a good AI summarisation prompt?", opts:["Just saying 'summarise this'","Specifying the source, desired length, and audience","Asking AI to be brief","Uploading the document without instructions"], correct:1, explanation:"Specifying source content, length, and audience gives AI the context it needs to produce a useful summary." },
        reflectionPrompt:"Identify a document you read regularly. Write a prompt to get AI to summarise it in a format that would save you time.",
        furtherReading:["Microsoft Copilot — https://copilot.microsoft.com"],
      },
      3: {
        reading: [
          "AI can help before, during, and after meetings. Before: generate an agenda from a list of discussion topics. During: structure live notes if you paste them in. After: turn raw notes into formatted action item lists with owners and deadlines.",
          "Example post-meeting prompt: 'Turn these meeting notes into a structured list of action items with responsible person, deadline, and priority. Format as a table.'",
          "AI cannot attend your meeting for you — but it can significantly reduce the time you spend on meeting administration.",
        ],
        mcq: { q:"How can AI best help with meeting administration?", opts:["By attending the meeting instead of you","By generating agendas, structuring notes, and formatting action items","By recording meetings automatically","By scheduling meetings without your input"], correct:1, explanation:"AI assists with the administrative wrap-around of meetings — agendas, note structuring, and action items — saving time and improving clarity." },
        reflectionPrompt:"Write an AI prompt to convert a set of rough meeting notes into a clean action item list.",
        furtherReading:["Notion AI for Meetings — https://www.notion.so/product/ai"],
      },
      4: {
        reading: [
          "AI can help with planning by breaking down goals into tasks, suggesting timelines, and creating structured schedules. It is especially useful when you have a complex project and need to think through the steps.",
          "Example prompt: 'I need to run a team training session in 3 weeks. Give me a week-by-week action plan with specific tasks for each week, including preparation, logistics, and follow-up.'",
          "AI-generated plans are a starting point — adjust them based on your actual constraints, resources, and priorities. AI does not know your calendar or your team's capacity.",
        ],
        mcq: { q:"What is the most important thing to do with an AI-generated plan?", opts:["Follow it exactly as written","Submit it without changes","Adjust it based on your actual constraints, knowledge, and priorities","Print it out for your manager"], correct:2, explanation:"AI plans are intelligent starting points. You must adapt them to your real situation — AI doesn't know your constraints." },
        reflectionPrompt:"Use AI to create a simple 5-step plan for a project or goal you are currently working on. Then adjust it to fit reality.",
        furtherReading:["Trello AI Features — https://trello.com/en/blog/trello-ai"],
      },
      5: {
        reading: [
          "AI often produces technically correct content that still sounds robotic, too formal, or off-tone for your purpose. Editing AI output for clarity and tone is a core skill.",
          "When reviewing AI content, ask: Does this sound like a real person? Is the formality level right for this audience? Are there unnecessary filler phrases or excessive hedging? Is the key point clear and early?",
          "A useful technique: paste AI output and prompt 'Edit this to sound more natural and direct. Remove any phrases that feel corporate or filler. Keep it under [X] words.'",
        ],
        mcq: { q:"Which element most often needs editing in AI-generated content?", opts:["Font size","Tone — AI often sounds robotic or overly formal","The colour of headings","The file format"], correct:1, explanation:"AI outputs frequently sound overly formal, hedged, or robotic. Editing for natural tone is one of the most common post-AI tasks." },
        reflectionPrompt:"Take an AI-generated paragraph and rewrite it to sound more natural and human. What did you change and why?",
        furtherReading:["Grammarly AI — https://www.grammarly.com"],
      },
      6: {
        reading: [
          "A personal AI productivity system is a set of consistent prompts and workflows you use for your recurring tasks. Instead of starting from scratch each time, you maintain a prompt library — saved prompts that work well — and a defined workflow for common tasks like drafting, summarising, and planning.",
          "A simple system might be: (1) Weekly planning prompt every Monday, (2) Email draft template for common message types, (3) Meeting summary prompt after every key meeting, (4) End-of-week review prompt on Fridays.",
          "The key is consistency. The more consistently you apply AI at the right points, the more time you save without losing quality or human oversight.",
        ],
        mcq: { q:"What is a personal prompt library?", opts:["A list of AI tools you pay for","A saved collection of prompts that work well for your regular tasks","An AI-generated autobiography","A database of AI responses"], correct:1, explanation:"A prompt library is your personal collection of reusable prompts that consistently produce good results for your recurring work tasks." },
        reflectionPrompt:"Design a basic personal AI workflow for your own role. What are the three tasks where AI would save you the most time each week?",
        furtherReading:["Notion AI — https://www.notion.so/product/ai","Microsoft Copilot — https://copilot.microsoft.com"],
      },
    },
    4: {
      1: {
        reading: [
          "AI can act as a research assistant — helping you explore topics, identify key concepts, and understand new fields quickly. It is especially useful for getting orientated in an unfamiliar subject before doing deeper, verified research.",
          "A good research prompt: 'Explain the key principles of supply chain management in simple language. Then list five questions a beginner should explore to understand the topic more deeply.'",
          "Always verify AI research outputs against authoritative sources. AI may confuse details, misattribute quotes, or present outdated information with equal confidence to current facts.",
        ],
        mcq: { q:"What is the most important caution when using AI for research?", opts:["AI research is always up to date","You must verify AI research outputs against authoritative sources","AI cannot help with research at all","AI research is always correct if you use a good prompt"], correct:1, explanation:"AI can be wrong, outdated, or hallucinate sources. Verification against authoritative sources is always required." },
        reflectionPrompt:"Use AI to research a topic relevant to your work. Then find one fact AI stated and verify it with an independent source.",
        furtherReading:["Google Scholar — https://scholar.google.com","OECD.AI — https://oecd.ai"],
      },
      2: {
        reading: [
          "Because AI can hallucinate facts, source checking is an essential skill. When AI cites a statistic, names a study, or makes a specific factual claim — treat it as unverified until you have checked it yourself.",
          "A practical approach: ask AI to list its sources, then verify those sources actually exist and say what AI claims. A surprising number of AI-cited sources turn out to be misquoted, distorted, or entirely fabricated.",
          "For critical decisions, always trace claims back to primary sources — the original report, study, or official publication — rather than relying on AI's summary of them.",
        ],
        mcq: { q:"What should you do when AI cites a statistic or study?", opts:["Trust it because AI is well-trained","Verify the source independently before using the information","Share it immediately on social media","Ask AI to confirm it is correct"], correct:1, explanation:"AI can fabricate or misrepresent sources. Independent verification is always required before using AI-cited facts." },
        reflectionPrompt:"Ask an AI tool a factual question and request sources. Then try to verify one of those sources. What did you find?",
        furtherReading:["Full Fact (fact checking) — https://fullfact.org","Google Scholar — https://scholar.google.com"],
      },
      3: {
        reading: [
          "AI is excellent at helping structure presentations. Given a topic and audience, AI can generate an outline, suggest key points per slide, and even draft speaker notes.",
          "Prompt example: 'Create a 10-slide presentation outline on digital safety for non-technical employees at a Malaysian SME. Include a title, key message per slide, and one talking point each.'",
          "AI creates structure — you bring the substance. Supplement AI outlines with your own knowledge, real examples from your context, and data relevant to your specific audience.",
        ],
        mcq: { q:"What does AI most usefully contribute to presentation creation?", opts:["Designing slide animations","Generating structure, outlines, and speaker note drafts","Presenting to the audience","Printing the slides"], correct:1, explanation:"AI excels at creating structure — outlines, key points, and draft notes. The substance, examples, and delivery remain human responsibilities." },
        reflectionPrompt:"Use AI to create an outline for a presentation you need to give soon. What did it get right? What did you need to change?",
        furtherReading:["Microsoft Copilot for PowerPoint — https://support.microsoft.com/en-us/copilot"],
      },
      4: {
        reading: [
          "Content repurposing means taking existing content and adapting it for a different format or audience. AI is a powerful tool for this: blog post → social media captions, report → email summary, presentation → FAQ document.",
          "Prompt example: 'Take this 500-word report and turn it into three LinkedIn posts, each under 150 words, written for working professionals interested in digital skills.'",
          "Repurposing with AI saves significant time while maintaining consistent messaging. Always review repurposed content to ensure it is accurate and appropriate for the new format and audience.",
        ],
        mcq: { q:"What is content repurposing?", opts:["Deleting old content","Taking existing content and adapting it for a different format or audience","Copying someone else's content","Making content shorter"], correct:1, explanation:"Repurposing means adapting existing content — changing format, length, or audience — rather than creating from scratch." },
        reflectionPrompt:"Take a piece of content you have already created and write an AI prompt to repurpose it in a new format.",
        furtherReading:["Buffer Blog — https://buffer.com/resources","Canva AI — https://www.canva.com/ai-features"],
      },
      5: {
        reading: [
          "An AI workflow is a defined sequence of steps where AI tools are used at specific points to improve efficiency. Rather than using AI randomly, you map out where AI adds the most value in a regular process and build it in consistently.",
          "Example workflow for content creation: (1) AI brainstorms topics → (2) Human selects and refines → (3) AI drafts outline → (4) Human adds expertise and examples → (5) AI polishes language → (6) Human final review and publishes.",
          "Good workflow design keeps humans in control of the strategic and judgement-heavy steps while delegating repetitive drafting and formatting tasks to AI.",
        ],
        mcq: { q:"What distinguishes a good AI workflow from random AI use?", opts:["Using more AI tools","Spending more time on AI","Having defined steps where AI is applied consistently at the right points","Using the most expensive AI tools"], correct:2, explanation:"A workflow is intentional and systematic — AI is applied at defined points where it adds value, with humans controlling strategy and judgement." },
        reflectionPrompt:"Map out one regular work process and identify exactly where in that process AI could help without reducing quality.",
        furtherReading:["Zapier AI Workflows — https://zapier.com/ai","Make.com — https://www.make.com"],
      },
      6: {
        reading: [
          "Before finishing this course, review the core responsible AI checklist: (1) I do not enter personal, confidential, or sensitive information into public AI tools. (2) I verify AI outputs before using them, especially facts, statistics, and sources. (3) I edit AI content to ensure it is accurate, appropriately toned, and genuinely reflects my judgement. (4) I am transparent about AI assistance in professional contexts. (5) I maintain human responsibility for all final decisions.",
          "AI is a tool — a powerful one — but you are the professional. Your knowledge, your ethics, and your accountability cannot be delegated to AI.",
          "Congratulations on completing Module 4. You now have the foundations of AI literacy: what AI is, how to prompt it effectively, how to use it for productivity, and how to use it responsibly.",
        ],
        mcq: { q:"Which of these is part of responsible AI use?", opts:["Submitting AI content without reading it","Entering client data into public AI tools to save time","Verifying AI outputs and maintaining human responsibility for final decisions","Using AI only for personal tasks, never work"], correct:2, explanation:"Responsible AI use always includes verifying outputs and keeping humans accountable for final decisions — these are non-negotiable principles." },
        reflectionPrompt:"Write your own personal AI use policy in 3–5 bullet points. What will you always do? What will you never do?",
        furtherReading:["UNESCO AI Ethics — https://www.unesco.org/en/artificial-intelligence/recommendation-ethics","OECD AI Principles — https://oecd.ai/en/ai-principles"],
      },
    },
  },
  hygiene: {
    1: {
      1: {
        reading: [
          "Digital hygiene refers to the practices and habits that keep your digital life safe, clean, organised, and responsible. Just as personal hygiene prevents illness, digital hygiene prevents data breaches, identity theft, disorganisation, and professional damage.",
          "Good digital hygiene includes using strong passwords, keeping software updated, being careful about what you share online, organising your files, and behaving professionally in digital communication.",
          "Poor digital hygiene — weak passwords, clicking unknown links, sharing sensitive files carelessly — creates risks for yourself, your organisation, and the people whose data you handle.",
        ],
        mcq: { q:"What is the best description of digital hygiene?", opts:["Cleaning your physical devices with a cloth","Practices that keep your digital life safe, clean, organised, and responsible","Deleting old photos from your phone","Only using approved websites at work"], correct:1, explanation:"Digital hygiene is about the habits and practices that protect your digital life — not just keeping devices physically clean." },
        reflectionPrompt:"List three digital habits you currently practise and three you think you should improve.",
        furtherReading:["StaySafeOnline — https://staysafeonline.org","CyberSecurity Malaysia — https://www.cybersecurity.my"],
      },
      2: {
        reading: [
          "Digital hygiene matters because our personal and professional lives now depend on digital systems. A single data breach can expose your personal information, financial accounts, and identity to criminals. A careless social media post can damage your professional reputation permanently.",
          "For organisations, poor digital hygiene by even one employee can result in large-scale data breaches, financial loss, regulatory penalties, and loss of customer trust.",
          "In Malaysia and Southeast Asia, cybercrime cases have grown significantly year on year. Building good digital hygiene habits is not optional — it is a baseline professional responsibility.",
        ],
        mcq: { q:"Why does digital hygiene matter at the organisational level?", opts:["Only individuals are affected by poor digital habits","One employee's poor digital habits can cause organisational data breaches and financial loss","Organisations have IT teams to handle all security issues","Digital hygiene only applies to social media use"], correct:1, explanation:"A single employee's careless action — clicking a phishing link, using a weak password — can compromise an entire organisation." },
        reflectionPrompt:"Can you think of a time when poor digital hygiene — yours or someone else's — caused a problem? What happened?",
        furtherReading:["CyberSecurity Malaysia — https://www.cybersecurity.my","StaySafeOnline — https://staysafeonline.org"],
      },
      3: {
        reading: [
          "Personal data is any information that can identify you — your name, IC number, phone number, email, home address, financial details, and medical records. Sensitive personal data includes additional categories such as religious beliefs, political views, and biometric data.",
          "Once personal data is shared online, you have limited control over where it goes or how it is used. Always ask: does this person or platform actually need this information? Is this a legitimate and trusted request?",
          "Malaysia's Personal Data Protection Act (PDPA) provides legal protections for personal data, but your own habits remain your first line of defence.",
        ],
        mcq: { q:"Which of these is an example of sensitive personal data?", opts:["Your favourite colour","Your IC (identity card) number","The name of your city","Your job title"], correct:1, explanation:"An IC number is sensitive personal data that can be used for identity theft. It should be shared only when legally required and with trusted parties." },
        reflectionPrompt:"Review which platforms and apps currently hold your personal data. Are there any you should remove access from or review?",
        furtherReading:["PDPA Malaysia — https://www.pdp.gov.my","Privacy Rights Clearinghouse — https://privacyrights.org"],
      },
      4: {
        reading: [
          "A digital footprint is the trail of data you leave behind when you use the internet. Active footprints include things you deliberately post — social media updates, forum comments, profile information. Passive footprints include data collected without your active input — browsing history, location data, app usage.",
          "Your digital footprint is permanent and searchable. Employers, clients, and colleagues may research your digital footprint when making judgements about you.",
          "Managing your digital footprint means being intentional about what you post, reviewing your privacy settings regularly, and considering the long-term implications of what you share online.",
        ],
        mcq: { q:"What is the difference between an active and passive digital footprint?", opts:["Active footprints are larger","Active footprints are things you deliberately post; passive footprints are data collected without your active input","Passive footprints are more dangerous","They are the same thing"], correct:1, explanation:"Active footprints are things you consciously share. Passive footprints are collected in the background by platforms, apps, and services." },
        reflectionPrompt:"Search your own name online. What does your current digital footprint look like to a stranger?",
        furtherReading:["Digital Footprint — https://www.staysafeonline.org/stay-safe-online/keep-a-clean-machine/digital-footprint"],
      },
      5: {
        reading: [
          "Everyday digital responsibility means applying consistent, thoughtful habits across all your digital interactions. Before sharing anything — a message, a file, a post, a link — pause and ask: Is this accurate? Is this appropriate? Could this harm someone?",
          "Responsible digital behaviour includes not forwarding unverified information, protecting others' data with the same care you'd want for your own, and maintaining professional standards in all digital communication.",
          "Small daily decisions compound into your digital reputation. The habit of pausing before posting, sharing, or clicking is one of the most valuable digital skills you can develop.",
        ],
        mcq: { q:"What is the single most useful habit for everyday digital responsibility?", opts:["Using only government-approved websites","Pausing to consider consequences before sharing, posting, or clicking","Never using social media","Changing your password every day"], correct:1, explanation:"The pause habit — stopping to consider accuracy, appropriateness, and consequences — is the foundation of responsible digital behaviour." },
        reflectionPrompt:"Describe one digital habit you will commit to changing or adding this week based on what you have learned in this module.",
        furtherReading:["StaySafeOnline — https://staysafeonline.org"],
      },
    },
    2: {
      1: {
        reading: [
          "Passwords are the first line of defence for your accounts. A strong password is long (at least 12 characters), uses a mix of letters, numbers, and symbols, and is unique to each account. A weak password is short, predictable, or reused across multiple sites.",
          "The most dangerous password habit is reuse — using the same password across multiple accounts means one breach exposes all of them. A password manager solves this by generating and storing unique passwords for every account.",
          "Common weak passwords include names, birthdays, 'password123', and sequential numbers. If your password could be guessed by someone who knows you, it is not strong enough.",
        ],
        mcq: { q:"What is the biggest risk of reusing the same password across multiple accounts?", opts:["It makes passwords easier to remember","One breach exposes all your accounts at once","It violates password policy","Reusing passwords is actually recommended"], correct:1, explanation:"Password reuse means a single breach at any service instantly compromises every other account using the same password." },
        reflectionPrompt:"How many of your accounts use the same password? What is your plan for making them all unique?",
        furtherReading:["Have I Been Pwned — https://haveibeenpwned.com","Bitwarden Password Manager — https://bitwarden.com"],
      },
      2: {
        reading: [
          "Multi-factor authentication (MFA) adds a second verification step when you log in — beyond just your password. Common second factors include a one-time code sent by SMS, an authenticator app code, a fingerprint, or a physical security key.",
          "Even if a scammer steals your password, MFA prevents them from accessing your account without the second factor. This single step dramatically reduces the risk of account takeover.",
          "Enable MFA on every important account: email, banking, work systems, cloud storage, and social media. Authenticator apps (like Google Authenticator or Microsoft Authenticator) are more secure than SMS codes.",
        ],
        mcq: { q:"Why is multi-factor authentication important even if you have a strong password?", opts:["It makes logging in faster","It is required by Malaysian law","It prevents access even if your password is stolen","It creates a backup password"], correct:2, explanation:"MFA means a stolen password alone is not enough to access your account — the attacker also needs the second factor." },
        reflectionPrompt:"Which of your important accounts do not yet have MFA enabled? What is stopping you from enabling it?",
        furtherReading:["Google 2-Step Verification — https://myaccount.google.com/signinoptions/two-step-verification","Microsoft Authenticator — https://www.microsoft.com/en-us/security/mobile-authenticator-app"],
      },
      3: {
        reading: [
          "Account recovery options — backup email, phone number, recovery codes — are what you rely on when you lose access to an account. Keeping these up to date is critical because outdated recovery details can lock you out permanently.",
          "Check your recovery details for all important accounts at least once a year. Ensure your recovery email and phone number are active and accessible.",
          "Login alerts — notifications when someone signs in to your account from a new device — are a valuable early warning system. Enable them on all important accounts.",
        ],
        mcq: { q:"How often should you review your account recovery details?", opts:["Never — only set them once","At least once a year","Only when you lose access","Every day"], correct:1, explanation:"Account recovery details (backup email, phone) can become outdated. Reviewing them annually ensures you can always regain access when needed." },
        reflectionPrompt:"Log in to your three most important accounts and check whether the recovery details are still accurate.",
        furtherReading:["Google Account Security — https://myaccount.google.com/security"],
      },
      4: {
        reading: [
          "Device safety is about protecting the physical devices that hold your data. Core habits include: always using a screen lock (PIN, fingerprint, or face ID), keeping your operating system and apps updated, and installing reputable antivirus software on computers.",
          "Software updates are not just new features — they contain security patches that fix vulnerabilities scammers actively exploit. Delaying updates leaves known security holes open.",
          "When disposing of old devices, always perform a factory reset and — for computers — securely wipe the drive. Simply deleting files is not enough; data can still be recovered.",
        ],
        mcq: { q:"Why are software updates important for device security?", opts:["They only add new features","They contain security patches that fix vulnerabilities criminals exploit","They make devices faster","They are optional enhancements"], correct:1, explanation:"Security patches in updates close known vulnerabilities. Delaying updates leaves your device exposed to threats that have already been identified." },
        reflectionPrompt:"Check how many software updates are pending on your current devices. Are any of them security updates you have been postponing?",
        furtherReading:["Microsoft Update — https://support.microsoft.com/en-us/windows/windows-update-faq","Apple Security Updates — https://support.apple.com/en-us/HT201222"],
      },
      5: {
        reading: [
          "App permissions are requests by apps to access parts of your device — your camera, microphone, contacts, location, and files. Many apps request far more access than they need. Review and restrict permissions to only what an app genuinely requires.",
          "Regular backups are your safety net against ransomware, device theft, or accidental deletion. Follow the 3-2-1 rule: three copies of important data, on two different media types, with one stored off-site (such as cloud backup).",
          "Uninstall apps you no longer use. Unused apps can still collect data in the background, receive security vulnerabilities, and clutter your device.",
        ],
        mcq: { q:"What should you do before granting an app access to your microphone?", opts:["Always grant all permissions to avoid problems","Check whether the app genuinely needs microphone access for its core function","Deny all permissions always","Ask a friend whether it is safe"], correct:1, explanation:"Only grant permissions that the app's core function actually requires. A torch app does not need microphone access; question any request that seems unnecessary." },
        reflectionPrompt:"Review the app permissions on your phone. Are there any apps with access to your camera, microphone, or contacts that do not need it?",
        furtherReading:["Android App Permissions — https://support.google.com/android/answer/9431959","Apple App Privacy — https://support.apple.com/en-us/HT212614"],
      },
    },
    3: {
      1: {
        reading: [
          "Digital clutter — disorganised files, overcrowded inboxes, hundreds of unorganised photos, unused apps — creates friction, wastes time, and increases the risk of losing important information.",
          "Studies show that people spend an average of 18 minutes searching for a document. A well-organised digital environment eliminates this wasted time and reduces stress.",
          "Digital decluttering is not a one-time task — it requires regular maintenance. Build a short weekly habit of filing, deleting, and organising to stay on top of digital accumulation.",
        ],
        mcq: { q:"What is the main practical cost of digital clutter?", opts:["It makes your screen look messy","It wastes time searching for information and increases the risk of losing important files","It uses up device storage only","It has no real impact on productivity"], correct:1, explanation:"Digital clutter primarily costs time — wasted searching — and increases the risk of misplacing or losing important information." },
        reflectionPrompt:"How long did you spend searching for a file or email this week? What would a better organisation system have saved you?",
        furtherReading:["Todoist Productivity — https://todoist.com/productivity-methods"],
      },
      2: {
        reading: [
          "A file naming convention is a consistent system for naming files so they are easy to find and sort. A good naming system includes: date (YYYY-MM-DD format for easy sorting), document type, and a brief description. Example: 2025-05-01_Invoice_ClientName.pdf",
          "A folder structure should mirror how you think about your work: by project, client, year, or department. The key is consistency — everyone on a team should follow the same structure.",
          "Avoid vague file names like 'Document1', 'Final', 'Final2', or 'FinalFINAL'. These become impossible to navigate as collections grow.",
        ],
        mcq: { q:"Which file name is best organised?", opts:["Document1.docx","Final version.docx","2025-05-01_ProjectReport_ClientABC.docx","report new.docx"], correct:2, explanation:"The third option includes date (sortable), document type, and client — making it easy to find, sort, and identify at a glance." },
        reflectionPrompt:"Create a folder naming convention for your most important type of work. Write it out as a simple rule you could share with a colleague.",
        furtherReading:["File Management Best Practices — https://www.lifewire.com/filing-system-2260059"],
      },
      3: {
        reading: [
          "An unmanaged inbox is a source of stress and missed information. Key inbox hygiene practices: unsubscribe from newsletters you do not read, use folders or labels to categorise important emails, and aim for a processed inbox — not necessarily empty, but organised.",
          "Use the four-D method for each email: Delete it, Do it (if under 2 minutes), Delegate it, or Defer it (move to a follow-up folder). Do not leave emails in your inbox as a to-do list.",
          "Turn off non-essential email notifications. Constant interruptions for low-priority emails significantly reduce focus and productivity.",
        ],
        mcq: { q:"What is the four-D method for email management?", opts:["Draft, Delete, Defer, Discuss","Delete, Do, Delegate, Defer","Download, Distribute, Display, Discard","Direct, Deny, Delay, Distribute"], correct:1, explanation:"Delete, Do, Delegate, Defer — these four actions ensure every email is processed rather than left to accumulate as mental clutter." },
        reflectionPrompt:"Apply the four-D method to your inbox today. How many emails did you delete, do, delegate, or defer?",
        furtherReading:["Inbox Zero — https://www.43folders.com/izero"],
      },
      4: {
        reading: [
          "Cloud storage (Google Drive, OneDrive, Dropbox) allows you to access files from any device. But it also introduces sharing risks — files shared with 'anyone with the link' can be accessed by unintended recipients.",
          "Review sharing settings regularly. Use 'specific people only' sharing for sensitive documents. Revoke access when a project ends or a team member leaves.",
          "Version control — either through cloud storage version history or a formal system — ensures you can always recover an earlier version of a document if something goes wrong.",
        ],
        mcq: { q:"What sharing setting should you use for sensitive documents in cloud storage?", opts:["Anyone with the link","Public","Specific people only","Shared with your entire organisation"], correct:2, explanation:"Sensitive documents should only be shared with specific, named people who need access. 'Anyone with the link' creates uncontrolled access." },
        reflectionPrompt:"Review the sharing settings on your three most important cloud documents. Are any shared more broadly than they should be?",
        furtherReading:["Google Drive Sharing — https://support.google.com/drive/answer/2494822","OneDrive Sharing — https://support.microsoft.com/en-us/onedrive"],
      },
      5: {
        reading: [
          "A digital organisation routine is a set of consistent habits applied on a regular schedule to keep your digital environment functional. Think of it as a weekly digital maintenance checklist.",
          "A simple weekly routine: Monday — clear your downloads folder and process your inbox. Wednesday — check and organise active project files. Friday — back up important work and plan for next week.",
          "The goal is not perfection — it is preventing accumulation. Small regular maintenance is always more manageable than large periodic cleanups.",
        ],
        mcq: { q:"Why is a regular digital organisation routine better than occasional large cleanups?", opts:["Large cleanups are more efficient","Regular maintenance prevents accumulation and is always more manageable than dealing with months of backlog","You only need to organise files once","Digital files do not need organising"], correct:1, explanation:"Regular small maintenance prevents the overwhelming backlog that makes large cleanups so time-consuming and demoralising." },
        reflectionPrompt:"Design your personal weekly digital organisation routine. What will you do on which day, and for how long?",
        furtherReading:["Getting Things Done — https://gettingthingsdone.com"],
      },
    },
    4: {
      1: {
        reading: [
          "Digital behaviour in professional contexts is observed and remembered. How you communicate in work emails, group chats, and video calls shapes how colleagues and managers perceive your competence and professionalism.",
          "Professional digital behaviour includes: responding to messages within reasonable timeframes, using appropriate language and tone for the context, keeping group chats on-topic, and being respectful even in disagreement.",
          "What feels casual in person can read as rude or dismissive in text. Without tone of voice and body language, digital messages require more deliberate word choice.",
        ],
        mcq: { q:"Why does text communication require more deliberate word choice than face-to-face conversation?", opts:["Text is always more formal","Without tone of voice and body language, text can be misread as rude or dismissive","Text is less important than in-person communication","Digital messages are not read carefully"], correct:1, explanation:"The absence of nonverbal cues means digital messages rely entirely on words to convey tone — careless word choice leads to misunderstandings." },
        reflectionPrompt:"Review your last 10 work messages. Do they reflect the professional tone you intend? Is there anything you would change?",
        furtherReading:["Harvard Business Review: Digital Communication — https://hbr.org"],
      },
      2: {
        reading: [
          "Workplace group chats (WhatsApp, Teams, Slack) require specific etiquette. Keep messages relevant to the group's purpose. Avoid sending multiple single-line messages when one considered message would do. Use @mentions to direct messages to specific people rather than alerting the whole group unnecessarily.",
          "Never share confidential information in group chats unless the group is explicitly approved for that purpose. Group membership changes over time — what you share today may reach unintended audiences later.",
          "Response expectations should be clear. Not everyone is expected to reply immediately to every group message. Clarify norms with your team to reduce unnecessary stress.",
        ],
        mcq: { q:"What is the most important rule for sharing information in a workplace group chat?", opts:["Share everything so the team is informed","Never use group chats for work","Only share information appropriate for every current and future member of that group","Always use formal language"], correct:2, explanation:"Group membership changes. Information shared in a group chat may reach unintended people later, so only share what is appropriate for all members." },
        reflectionPrompt:"Review the group chats you are part of for work. Is any confidential information being shared in groups where it should not be?",
        furtherReading:["Slack Etiquette — https://slack.com/blog/collaboration/etiquette-tips-in-slack"],
      },
      3: {
        reading: [
          "Tone in digital messages is easy to misjudge. A short reply like 'OK' can read as cold or dismissive in some cultures, even if the sender meant it neutrally. Always consider how your message will be received by the specific person reading it.",
          "Timing matters too. Sending a work message at 11pm implicitly pressures colleagues to respond outside working hours. Establish and respect digital boundaries around after-hours communication.",
          "Personal digital boundaries — deciding when you will and will not be reachable — are important for sustainable professional life. Communicate these boundaries clearly so colleagues can plan accordingly.",
        ],
        mcq: { q:"Why does the timing of digital messages matter professionally?", opts:["Messages sent late at night are automatically prioritised","Timing has no effect on professional relationships","Messages sent outside working hours implicitly pressure recipients to respond off-hours","Earlier messages always get faster replies"], correct:2, explanation:"Sending messages late at night creates implicit pressure, even if you do not expect an immediate reply. Respecting work-hour boundaries is professional courtesy." },
        reflectionPrompt:"What are your personal digital boundaries around work communication? Are these boundaries clearly communicated to your colleagues?",
        furtherReading:["Microsoft WorkLab — https://www.microsoft.com/en-us/worklab"],
      },
      4: {
        reading: [
          "Your online presence — what appears when someone searches your name — forms a first impression before you meet anyone. Employers, clients, and professional contacts routinely search social media before making decisions.",
          "Social media hygiene means regularly reviewing your public profiles, removing posts that no longer represent you professionally, and ensuring your privacy settings match your intent. A post that seemed funny at 20 may be damaging at 30.",
          "A positive online reputation is built by consistent, professional, and authentic sharing over time. Contributing useful insights in your field, engaging respectfully in discussions, and maintaining a coherent professional narrative all help.",
        ],
        mcq: { q:"What is the most important social media hygiene habit?", opts:["Posting every day","Regularly reviewing your public profiles and privacy settings to ensure they represent you as intended","Deleting all social media accounts","Only following professional accounts"], correct:1, explanation:"Regular review of your public-facing content and privacy settings ensures your social media presence reflects who you are and want to be seen as professionally." },
        reflectionPrompt:"Search your name online right now. What does your current digital reputation look like to a stranger? What would you change?",
        furtherReading:["LinkedIn Profile Tips — https://www.linkedin.com/help/linkedin/answer/a554349"],
      },
      5: {
        reading: [
          "Before sharing any digital content — a screenshot, a recording, an AI-generated output, or a forwarded message — ask: Do I have permission to share this? Could sharing this harm someone? Is this information accurate?",
          "Screenshots and recordings capture private conversations that were not intended for wider audiences. Sharing them without consent violates trust and, in some contexts, may have legal implications.",
          "AI-generated content carries the same responsibility as anything you publish. If you share AI content as your own, you are responsible for its accuracy, appropriateness, and any harm it causes.",
        ],
        mcq: { q:"Before sharing a screenshot of a private conversation, what should you consider?", opts:["Whether it is funny enough to share","Whether you have permission and whether sharing could harm the people involved","Whether the image is high quality","How many likes it will receive"], correct:1, explanation:"Private conversations are shared with an expectation of privacy. Sharing screenshots without consent violates trust and can cause real harm." },
        reflectionPrompt:"Think of the last piece of digital content you forwarded or shared. Did you verify it was accurate and appropriate before sharing?",
        furtherReading:["Digital Rights Foundation Malaysia — https://digitalrightsfoundation.pk"],
      },
    },
  },
  scam: {
    1: {
      1: {
        reading: [
          "A scam is a deceptive scheme designed to trick you into giving away money, personal information, or access to your accounts. Scams can happen via phone calls, text messages, emails, social media, websites, and face-to-face encounters.",
          "Scammers are not always obvious. Modern scams are sophisticated, personalised, and designed to exploit trust, urgency, and fear. They often impersonate trusted institutions — banks, government agencies, employers, or even family members.",
          "Anyone can be targeted by a scam. Being educated, professional, or tech-savvy does not make you immune. Awareness is your best defence.",
        ],
        mcq: { q:"What is the defining characteristic of a scam?", opts:["It always involves large sums of money","It is a deceptive scheme designed to trick you into giving away money, information, or access","It only happens online","It is always easy to identify"], correct:1, explanation:"Scams are defined by deception — the intent to trick you. They vary widely in method, scale, and sophistication." },
        reflectionPrompt:"Have you or someone you know been targeted by a scam? What tactics were used? What made it convincing?",
        furtherReading:["AADK Malaysia Scam Awareness — https://www.aadk.gov.my","National Scam Response Centre — https://semakmule.rmp.gov.my"],
      },
      2: {
        reading: [
          "Scams work because they exploit basic human psychology — not stupidity. The most effective scams trigger emotional states that override rational thinking: fear (you'll be arrested), greed (you've won a prize), urgency (act now or lose this), and trust (I'm calling from your bank).",
          "When we are in a heightened emotional state, our capacity for critical thinking is reduced. Scammers deliberately create this state — and then move fast before you have time to think.",
          "The antidote is the pause. Whenever a message, call, or offer makes you feel urgency, fear, or excitement, slow down. The pause is your most powerful scam defence.",
        ],
        mcq: { q:"Why are intelligent and educated people still vulnerable to scams?", opts:["They are not actually vulnerable","Scams exploit universal human psychology — urgency, fear, and trust — that bypass critical thinking","Educated people are specifically targeted","Intelligence has nothing to do with scam vulnerability"], correct:1, explanation:"Scams exploit psychological triggers that affect everyone, regardless of education. Emotional manipulation bypasses rational thinking." },
        reflectionPrompt:"Which psychological trigger — urgency, fear, greed, or trust — do you think you are most vulnerable to? Why?",
        furtherReading:["Psychology of Scams — https://www.psychologytoday.com/us/basics/scams","Consumer Financial Protection Bureau — https://www.consumerfinance.gov/consumer-tools/fraud/"],
      },
      3: {
        reading: [
          "Southeast Asia has a distinct scam landscape shaped by local culture, communication platforms, and financial systems. Common scam types include: Macau scams (impersonating police or banks), love scams (romantic relationships built to extract money), parcel scams, investment scams, and job scams targeting people seeking work.",
          "WhatsApp, Telegram, and social media platforms are the primary delivery channels for scams in Malaysia and the region. Scammers exploit the trust people place in these familiar platforms.",
          "Scam syndicates in Southeast Asia are sophisticated, organised criminal operations. Scam scripts are tested and refined. Victims are researched before being contacted. This is not amateur crime.",
        ],
        mcq: { q:"Which platform is most commonly used to deliver scams in Malaysia?", opts:["Traditional postal mail","WhatsApp, Telegram, and social media","Television advertisements","In-person door-to-door visits"], correct:1, explanation:"WhatsApp, Telegram, and social media are the primary scam delivery channels in Malaysia — scammers exploit the trust and familiarity of these platforms." },
        reflectionPrompt:"Which type of scam do you think is most common in your community? What makes it effective there?",
        furtherReading:["PDRM Scam Awareness — https://www.rmp.gov.my","Semak Mule — https://semakmule.rmp.gov.my"],
      },
      4: {
        reading: [
          "Phishing is a scam technique where criminals send messages impersonating trusted entities — banks, government agencies, employers — to trick you into clicking a link, entering your credentials, or downloading malware.",
          "Social engineering is the broader category: manipulating people psychologically to take actions or reveal information. Phishing is one form. Others include vishing (voice calls), smishing (SMS), and impersonation in person.",
          "Hacking often follows social engineering — credentials obtained through phishing are used to break into accounts and systems. Protecting your login credentials is one of the most direct ways to prevent hacking.",
        ],
        mcq: { q:"What is the relationship between phishing and hacking?", opts:["They are completely unrelated","Phishing often obtains the credentials that hackers then use to break into accounts","Hacking always comes before phishing","Only technical experts can be phished"], correct:1, explanation:"Phishing collects credentials (passwords, PINs) that are then used in hacking attacks. Phishing is often the first step in a broader attack chain." },
        reflectionPrompt:"Have you received a phishing message recently? What red flags were present that revealed it was fake?",
        furtherReading:["Phishing Guide — https://www.phishing.org","CISA Phishing — https://www.cisa.gov/phishing"],
      },
      5: {
        reading: [
          "The Scam Pause Method is a simple decision-making habit: whenever you receive an unexpected message, call, or offer — especially one involving money or personal information — pause before responding.",
          "The pause checklist: (1) Did I initiate this contact? (2) Is there pressure to act immediately? (3) Does something feel slightly off? (4) Can I verify this through an official channel independently? (5) Would I be comfortable if someone I trust saw me doing this?",
          "If you cannot answer all five questions confidently, do not proceed. Contact the organisation directly using their official number — not the number or link provided in the suspicious message.",
        ],
        mcq: { q:"What is the first question in the Scam Pause Method checklist?", opts:["How much money is involved?","Is the message in English?","Did I initiate this contact?","Is this from someone I know?"], correct:2, explanation:"'Did I initiate this contact?' is the key first question. Legitimate organisations rarely contact you unexpectedly to request urgent action or sensitive information." },
        reflectionPrompt:"Practise the Scam Pause Method on the last unexpected message or call you received. How does it hold up to the checklist?",
        furtherReading:["National Scam Response Centre — https://semakmule.rmp.gov.my","ScamWatch — https://www.scamwatch.gov.au"],
      },
    },
    2: {
      1: {
        reading: [
          "Scam messages often impersonate trusted institutions — banks, LHDN, Pos Malaysia, Shopee, or government agencies. They typically create urgency ('your account will be suspended'), offer rewards ('you've won a prize'), or claim there is a problem requiring immediate action.",
          "Common red flags in scam messages: unexpected contact, urgent language, requests for personal information or payment, links to unofficial websites, poor grammar or spelling, and generic greetings ('Dear Customer' instead of your name).",
          "Never click links in unsolicited messages. If you receive a message claiming to be from your bank, go directly to the bank's official website or app — do not use any link or number provided in the message.",
        ],
        mcq: { q:"What should you do if you receive an unexpected message claiming to be from your bank?", opts:["Click the link provided to check your account","Reply with your account details to verify identity","Go directly to your bank's official app or website independently — do not use the link in the message","Forward it to friends to warn them"], correct:2, explanation:"Never use links or numbers provided in suspicious messages. Always contact institutions through their official, independently verified channels." },
        reflectionPrompt:"Review your recent messages. Can you identify any that contain common scam red flags — urgency, unexpected contact, requests for information?",
        furtherReading:["PDRM Scam Awareness — https://www.rmp.gov.my"],
      },
      2: {
        reading: [
          "Scam websites are designed to look identical to legitimate ones. They use similar domain names (maybank2u-secure.com instead of maybank2u.com), copy real website designs, and may even show padlock icons in the browser.",
          "Red flags for fake websites: the URL is slightly different from the official one, there is pressure to log in urgently, the site asks for unusual information, and the padlock alone does not guarantee safety — scam sites can have SSL certificates too.",
          "Before entering any login credentials or payment details, verify the URL is the official one. Type the address directly into your browser rather than clicking links.",
        ],
        mcq: { q:"Does a padlock icon in the browser guarantee a website is safe?", opts:["Yes — a padlock always means the site is legitimate","No — scam websites can also have padlock icons (SSL certificates)","Only government websites have padlock icons","Padlock icons are only on banking websites"], correct:1, explanation:"SSL certificates (shown as a padlock) only encrypt the connection — they do not verify that the site owner is legitimate. Scam sites can and do obtain them." },
        reflectionPrompt:"Find three websites you use regularly and check their URLs carefully. Do they match what you expect?",
        furtherReading:["Google Safe Browsing — https://safebrowsing.google.com","VirusTotal — https://www.virustotal.com"],
      },
      3: {
        reading: [
          "Scam calls often use caller ID spoofing to display a legitimate-looking number — sometimes the official number of a real bank or government agency. Do not trust caller ID alone as proof of identity.",
          "Legitimate organisations — banks, police, LHDN — will never call to ask for your PIN, OTP, password, or ask you to transfer money urgently. If someone asks for these over the phone, it is a scam.",
          "If you receive a suspicious call, hang up and call the organisation back using the number on their official website — not the number that called you.",
        ],
        mcq: { q:"What should you do if a caller claiming to be your bank asks for your PIN?", opts:["Provide it since they called you first","Hang up and call your bank using the number on their official website","Transfer the money they request to be safe","Ask them to prove their identity by giving your account balance"], correct:1, explanation:"No legitimate bank will ever ask for your PIN over the phone. Hang up and contact the bank independently to verify." },
        reflectionPrompt:"Have you ever received a suspicious call? What tactics did the caller use? What did you do?",
        furtherReading:["Bank Negara Malaysia Fraud Reporting — https://www.bnm.gov.my"],
      },
      4: {
        reading: [
          "QR codes have become a common scam vector. A fake QR code can redirect you to a phishing website or initiate a payment you did not intend. Scammers physically place fake QR stickers over legitimate ones in restaurants, parking facilities, and public spaces.",
          "Email attachments and downloads are another vector: files named 'Invoice.pdf.exe' or 'Photo.zip' may contain malware. Never open attachments from unknown senders, and be cautious even with known contacts if the message is unexpected.",
          "Before scanning a QR code in a public space, check whether the code looks like it may have been tampered with — a sticker placed over another sticker is a red flag.",
        ],
        mcq: { q:"What should you check before scanning a QR code in a public place?", opts:["Whether the code is a standard size","Whether the QR code sticker might have been placed over the original, indicating tampering","Whether the QR code looks modern","Whether there is free Wi-Fi nearby"], correct:1, explanation:"Scammers physically replace legitimate QR codes with fake ones. Check for signs of tampering — a sticker on top of another sticker is a clear red flag." },
        reflectionPrompt:"The next time you scan a QR code, take a moment to check the URL it leads to before entering any information. What did you find?",
        furtherReading:["CISA QR Code Safety — https://www.cisa.gov/news-events/alerts/2022/01/18/cisa-warns-malicious-qr-codes"],
      },
      5: {
        reading: [
          "Safe verification habits are the routines that protect you before you take any action involving money, personal information, or account access. The core rule: always verify through an independent, official channel before acting.",
          "Verification checklist: (1) Do not use links or numbers provided in the suspicious message. (2) Search for the organisation's official contact details independently. (3) Call or visit the official source to confirm whether the message is real. (4) Allow yourself time — genuine organisations do not require immediate action.",
          "Share these habits with family members, especially older relatives who may be less familiar with modern scam tactics. The most effective scam prevention is community-level awareness.",
        ],
        mcq: { q:"What is the core rule of safe verification?", opts:["Trust messages from people you know","Always verify through an independent, official channel before acting on any unexpected request","Call the number provided in the message to confirm","Wait 24 hours before responding to any message"], correct:1, explanation:"Independent verification — using official contact details you found yourself, not ones provided in the suspicious message — is the gold standard of scam defence." },
        reflectionPrompt:"Who in your family or circle of friends might be most vulnerable to scams? How can you share these habits with them?",
        furtherReading:["National Scam Response Centre — https://semakmule.rmp.gov.my","AADK Malaysia — https://www.aadk.gov.my"],
      },
    },
    3: {
      1: {
        reading: [
          "Online shopping scams involve fake listings, non-delivery of goods, counterfeit products, or sellers who disappear after payment. They are extremely common on Facebook Marketplace, Carousell, and Shopee/Lazada third-party sellers.",
          "Red flags: prices far below market value, sellers pushing for payment via direct bank transfer, pressure to complete the transaction outside the platform, no reviews or new accounts, and reluctance to video call to show the product.",
          "Use platforms with buyer protection where possible. Pay via the platform's protected checkout rather than direct transfer. If a deal looks too good to be true, it almost certainly is.",
        ],
        mcq: { q:"What is the safest payment method for online marketplace purchases?", opts:["Direct bank transfer to the seller","Platform's protected checkout with buyer protection","Cash on delivery always","Western Union or MoneyGram"], correct:1, explanation:"Platform-protected checkout provides buyer protection. Direct bank transfer gives you no recourse if the seller scams you." },
        reflectionPrompt:"Have you or someone you know been scammed on an online marketplace? What could have prevented it?",
        furtherReading:["Semak Mule — https://semakmule.rmp.gov.my"],
      },
      2: {
        reading: [
          "Job scams offer unusually well-paying, flexible work that requires little or no experience. Common types include: fake data entry jobs, fake social media management tasks ('like and comment to earn'), fake product reviewing jobs, and work-from-home schemes requiring an upfront fee.",
          "A key red flag: any legitimate job offer will never ask you to pay money upfront. Fees for 'training materials', 'registration', or 'equipment' are scam warning signs.",
          "Task scams — where you complete simple online tasks for escalating rewards — are especially dangerous. They are designed to hook you with small early payments before asking for a large investment that you lose.",
        ],
        mcq: { q:"What is the clearest red flag in a job or task offer?", opts:["The job is work-from-home","The salary is paid monthly","You are asked to pay an upfront fee to start working","The application process is online"], correct:2, explanation:"Legitimate employers pay you — they never ask you to pay to start working. Any upfront fee is a definitive scam warning sign." },
        reflectionPrompt:"Have you seen a job advertisement recently that seemed suspicious? What red flags were present?",
        furtherReading:["Jobstreet Malaysia — https://www.jobstreet.com.my","MDEC Digital Jobs — https://www.mdec.my"],
      },
      3: {
        reading: [
          "Investment scams promise high, guaranteed returns with little risk — the opposite of how real investments work. Common forms include: fake forex trading platforms, cryptocurrency scams, Ponzi schemes, and MLM investment schemes.",
          "Scammers often use social media influencers, fabricated testimonials, and professional-looking websites to build credibility. Some use initial 'profits' (which are your own money or money from newer victims) to build trust before stealing a large final sum.",
          "The rule: if an investment promises guaranteed high returns with no risk, it is a scam. All real investments carry risk. Verify any investment opportunity through the Securities Commission Malaysia (SC) before investing.",
        ],
        mcq: { q:"What does a legitimate investment always involve?", opts:["Guaranteed high returns","Profits paid daily","Risk — real investments always carry the possibility of loss","No fees or charges"], correct:2, explanation:"All legitimate investments carry risk. A guaranteed high-return investment with no risk is the defining characteristic of an investment scam." },
        reflectionPrompt:"Have you encountered an investment offer recently? Run it through the Securities Commission's investor alert list.",
        furtherReading:["Securities Commission Malaysia Investor Alert — https://www.sc.com.my/investor-alert","Bank Negara Malaysia — https://www.bnm.gov.my"],
      },
      4: {
        reading: [
          "Bank and e-wallet scams target your financial accounts through phishing (fake login pages), OTP theft (tricking you into sharing your one-time password), and social engineering (convincing you to transfer money to a 'safe account').",
          "No bank will ever ask you to share your OTP, PIN, or password — not over the phone, not via WhatsApp, not in an email. Your OTP is yours alone; sharing it with anyone for any reason is a scam.",
          "If you believe your account has been compromised, freeze your card immediately via your bank's app, then call the official bank number. Speed matters — money can be moved quickly.",
        ],
        mcq: { q:"What should you do if someone claiming to be from your bank asks for your OTP?", opts:["Share it since they verified your account details","Never share your OTP with anyone for any reason — hang up and call your bank directly","Share only the last two digits","Ask them to send the request in writing first"], correct:1, explanation:"Your OTP is a one-time password for your security only. No legitimate bank employee will ever ask for it. Sharing it is equivalent to giving away full account access." },
        reflectionPrompt:"Review your banking app settings. Do you have login alerts and transaction notifications enabled?",
        furtherReading:["Bank Negara Malaysia — https://www.bnm.gov.my","Maybank Security — https://www.maybank2u.com.my/security"],
      },
      5: {
        reading: [
          "A mule account is a bank account used to receive and transfer stolen money — the account owner may be a willing participant, or may have been tricked into allowing their account to be used.",
          "Scammers recruit mules through job offers: 'We just need to use your account to receive payments for our overseas business.' Allowing your account to be used this way — even unknowingly — is a criminal offence in Malaysia.",
          "If you are approached to use your account for someone else's transactions, refuse immediately. If your account has already been used, report to PDRM and your bank as soon as possible. Ignorance is not a complete legal defence.",
        ],
        mcq: { q:"Is allowing your bank account to be used for someone else's transactions illegal?", opts:["No — it is legal if you did not know about the scam","Yes — allowing your account to be used for others' transactions can make you criminally liable regardless of intent","Only if you receive payment for it","Only if it involves overseas transfers"], correct:1, explanation:"Using or allowing your account to be used as a mule account is a criminal offence in Malaysia. Verify any request involving your bank account very carefully." },
        reflectionPrompt:"Do you know anyone who has been approached to 'rent out' their bank account? What would you tell them?",
        furtherReading:["PDRM Money Mule — https://www.rmp.gov.my","Bank Negara Malaysia — https://www.bnm.gov.my"],
      },
    },
    4: {
      1: {
        reading: [
          "AI scams use artificial intelligence to generate more convincing, personalised, and scalable scam content. AI can write phishing emails without spelling errors, create realistic fake profiles with AI-generated photos, and produce professional-looking fake documents.",
          "Unlike earlier scams that could be spotted by poor language or generic messages, AI-powered scams can be highly personalised — referencing your name, recent activity, or professional background gathered from social media.",
          "AI lowers the cost and raises the quality of scam production. A single scammer with AI tools can now operate campaigns at a scale previously requiring large organised teams.",
        ],
        mcq: { q:"How does AI change the scam landscape?", opts:["AI makes scams easier to detect","AI enables scammers to produce more convincing, personalised, and scalable scam content at lower cost","AI is only used by government security agencies","AI scams only target technical people"], correct:1, explanation:"AI dramatically increases scam quality and scale — removing the tell-tale errors and enabling personalisation that makes scams more convincing." },
        reflectionPrompt:"Have you seen any scam messages recently that seem more polished and personalised than typical scam messages? What made them different?",
        furtherReading:["MIT Technology Review: AI Scams — https://www.technologyreview.com","Europol: AI Threats — https://www.europol.europa.eu"],
      },
      2: {
        reading: [
          "Voice cloning technology can replicate someone's voice from as little as a few seconds of audio. Scammers use this to impersonate family members ('Mum, I've been in an accident — send money quickly') or company executives ('This is the CEO — I need you to process an urgent transfer').",
          "Deepfake video technology can create realistic video of a person saying things they never said. In Southeast Asia, deepfake videos impersonating celebrities have been used to promote fake investment schemes.",
          "A safe word or verification question agreed in advance with family members is an effective defence against voice cloning attacks. If a 'family member' calls with an urgent money request, use your agreed word to verify.",
        ],
        mcq: { q:"What is the most effective defence against voice cloning scam calls pretending to be family members?", opts:["Always trust voices you recognise","A pre-agreed safe word or verification question that only your real family member would know","Never answer calls from unknown numbers","Using caller ID to verify identity"], correct:1, explanation:"Voice cloning can replicate any voice convincingly. A pre-agreed safe word or question — unknown to scammers — is a reliable verification method." },
        reflectionPrompt:"Have you agreed on a safe word or verification method with your immediate family for emergency contact situations?",
        furtherReading:["MIT Technology Review: Voice Cloning — https://www.technologyreview.com","Deepfake Detection — https://www.media.mit.edu/projects/detect-fakes/overview"],
      },
      3: {
        reading: [
          "AI makes phishing messages more convincing by eliminating language errors and enabling personalisation. AI can craft a phishing email that references your name, employer, and recent activity — making it look like a targeted message from someone who knows you.",
          "Fake AI-generated profiles are used on LinkedIn, Facebook, and dating apps. These profiles have realistic AI-generated photos, plausible backstories, and can maintain convincing conversations. They are used for romance scams, job scams, and investment fraud.",
          "AI can also generate convincing fake documents — invoices, employment letters, contracts — that pass basic visual inspection. Always verify documents through official channels.",
        ],
        mcq: { q:"How can you identify an AI-generated profile photo?", opts:["They are always blurry","They always have watermarks","Details like earrings, background symmetry, and teeth are often distorted in AI-generated faces — use tools like FaceCheck.ID to verify","AI photos always have perfect faces"], correct:2, explanation:"AI-generated faces often show subtle distortions — asymmetrical earrings, strange backgrounds, merged or irregular teeth. Tools like FaceCheck.ID can help verify images." },
        reflectionPrompt:"Find an unfamiliar profile photo online and run it through a reverse image search or AI detection tool. What did you find?",
        furtherReading:["FaceCheck.ID — https://facecheck.id","Google Reverse Image Search — https://images.google.com"],
      },
      4: {
        reading: [
          "If you are targeted by a scam: (1) Stop all contact with the scammer immediately. (2) Do not send any more money — additional payments claiming to 'release' your funds are always further scams. (3) If money has been transferred, contact your bank immediately to freeze the transaction. (4) Report to PDRM (police) and the National Scam Response Centre (NSRC) at 997.",
          "The NSRC hotline 997 is specifically for financial scam cases in Malaysia. The faster you report, the greater the chance of freezing funds before they are transferred out.",
          "Do not be ashamed of reporting. Scams are designed by professional criminals to exploit psychological vulnerabilities. Reporting helps prevent others from being victimised.",
        ],
        mcq: { q:"What is the first thing to do if you realise you are being scammed?", opts:["Send one more payment to get your money back","Contact your bank and report to the National Scam Response Centre (997) immediately","Wait to see if the scammer contacts you again","Delete all evidence of the scam"], correct:1, explanation:"Stop contact, contact your bank to freeze funds, and report to NSRC 997 immediately. Speed maximises the chance of recovering funds." },
        reflectionPrompt:"Save the NSRC number (997) in your phone now. Who else in your family should have this number?",
        furtherReading:["National Scam Response Centre — https://semakmule.rmp.gov.my","PDRM Report — https://www.rmp.gov.my"],
      },
      5: {
        reading: [
          "Long-term scam protection is built through habits, not just awareness. Key habits: (1) Always pause before acting on unexpected requests involving money or personal information. (2) Verify independently through official channels. (3) Never share OTPs, passwords, or login credentials with anyone. (4) Discuss scam tactics regularly with family and colleagues.",
          "Stay current: scam tactics evolve constantly. Follow official channels (PDRM, Bank Negara, NSRC) for updates on new scam types. Share new scam alerts with your network.",
          "Congratulations on completing Module 4. You now have a comprehensive understanding of how scams work, how to recognise them, and how to protect yourself and your community.",
        ],
        mcq: { q:"Which habit provides the best long-term protection against scams?", opts:["Never using the internet","Always pausing, verifying independently, and never sharing credentials — applied consistently as a daily habit","Using only cash for all transactions","Trusting only messages from people you know in person"], correct:1, explanation:"The pause-and-verify habit — applied consistently to all unexpected requests — is the most reliable long-term scam protection strategy." },
        reflectionPrompt:"Write your personal scam protection plan: three habits you will practise consistently, and one action you will take to protect someone you care about.",
        furtherReading:["National Scam Response Centre — https://semakmule.rmp.gov.my","Bank Negara Malaysia — https://www.bnm.gov.my","PDRM — https://www.rmp.gov.my"],
      },
    },
  },
};

export const ACT_TYPES = [
  { label:"Multiple choice",    color:"#4f46e5" },
  { label:"Multiple select",    color:"#7c3aed" },
  { label:"True or false",      color:"#059669" },
  { label:"Fill in the blanks", color:"#0891b2" },
  { label:"Complete the table", color:"#d97706" },
  { label:"Matching",           color:"#dc2626" },
  { label:"Short answer",       color:"#7c3aed" },
  { label:"Reflection box",     color:"#059669" },
  { label:"Polls",              color:"#0891b2" },
  { label:"Timed quiz",         color:"#ea580c" },
];
