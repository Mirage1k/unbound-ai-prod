# UnBound Malaysia — LMS Build Brief for Claude Code

Paste this entire document into Claude Code after running `claude` in your project folder.

---

## What you are building

A full web-based Learning Management System (LMS) for **UnBound Malaysia** — a digital skills education platform. The system must be fully functional and runnable on a local machine. Students can browse courses, register their interest, and the data is stored in a local database.

---

## Tech stack

- **Frontend:** React + Vite (TypeScript is fine, plain JS also fine)
- **Backend:** Node.js + Express
- **Database:** SQLite (via `better-sqlite3`) — no setup required, just a file
- **Styling:** Inline styles only (no Tailwind, no CSS modules) — the existing component uses this approach
- **Icons:** `lucide-react`
- **Font:** Plus Jakarta Sans from Google Fonts

No authentication system needed yet. No payment system. No external database.

---

## Project structure to create

```
unbound-lms/
├── frontend/
│   ├── src/
│   │   ├── App.jsx              ← main app (provided below)
│   │   ├── main.jsx
│   │   └── pages/               ← split into page components if needed
│   ├── public/
│   │   ├── UB_Black.png         ← client logo (user will add this file)
│   │   └── UB_White__1_.png     ← client logo white version (user will add)
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── backend/
│   ├── server.js                ← Express API
│   ├── db.js                    ← SQLite setup
│   └── package.json
├── data/
│   └── unbound.db               ← SQLite file (auto-created on first run)
└── README.md                    ← setup and run instructions
```

---

## Backend API to build

### Registration of Interest endpoint

`POST /api/register-interest`

Accepts:
```json
{
  "name": "string",
  "email": "string",
  "organisation": "string",
  "course_interest": "string"
}
```

Saves to SQLite. Returns `{ success: true, id: number }`.

### View registrations endpoint (admin use)

`GET /api/registrations`

Returns all rows from the registrations table as JSON.

### Database schema

```sql
CREATE TABLE IF NOT EXISTS registrations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organisation TEXT,
  course_interest TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### CORS

Enable CORS for `http://localhost:5173` (Vite dev server).

---

## Frontend — use this existing component as the base

The following is the complete current React app. Use it as `frontend/src/App.jsx`. Wire the registration form to `POST /api/register-interest`.

> **Note to Claude Code:** The logo images (`UB_Black.png`, `UB_White__1_.png`) will be placed in `frontend/public/` by the client. The code already references `/UB_Black.png` and `/UB_White__1_.png`.

```jsx
// PASTE THE CONTENTS OF lms-dashboard.jsx HERE
// (The file is in the same folder as this brief — read it directly)
```

> **Claude Code instruction:** Read the file `lms-dashboard.jsx` from the same directory as this brief and use it as the full content of `frontend/src/App.jsx`. Do not rewrite it from scratch — use it exactly, then wire the registration form's submit button to call `POST http://localhost:3001/api/register-interest`.

---

## Full course content to build into the LMS

Replace the placeholder course data in the React app with the full content below. Each module should have all its lessons as separate navigable pages/views. Each lesson page should show: lesson title, key terms (where listed), reading content, any activities, and quiz questions.

---

### COURSE 1: AI Learning for Work and Productivity
**Duration:** 1 month | **Modules:** 4 | **Estimated time:** 8–12 hours

**Course description:** This course introduces learners to practical AI use for everyday productivity. Learners will understand what AI can and cannot do, how to write better prompts, how to use AI for communication, research, planning, content creation, and basic decision support, and how to use AI responsibly with human judgement.

**Course outcomes:**
- Write and improve everyday communication
- Summarise and organise information
- Create better prompts
- Plan tasks and workflows
- Support research and learning
- Create basic content and presentation outlines
- Check AI outputs for accuracy, privacy, bias, and usefulness
- Build a simple AI-supported productivity workflow

---

#### Module 1: AI Basics and Responsible Use
**Estimated time:** 2–3 hours | **Lessons:** 6

**Lessons:**
1. Lesson 1.1 — What Is AI? *(Reading + deep reading)*
2. Lesson 1.2 — What Is Generative AI? *(Reading)*
3. Lesson 1.3 — What Can AI Help With? *(Reading + examples)*
4. Lesson 1.4 — What AI Cannot Do Reliably *(Reading + scenarios + deep reading)*
5. Lesson 1.5 — Responsible AI Use *(Reading + checklist)*
6. Lesson 1.6 — Human Advantage in the Age of AI *(Reading)*

**Practice activity:** Personal AI Use Map (downloadable worksheet)
**Reflection:** 5 discussion questions
**Final quiz:** 10 questions (answers below)
**Downloadable worksheet:** AI Use Map Template

**Key terms for Module 1:**
| Term | Meaning |
|------|---------|
| Artificial Intelligence | Computer systems that can perform tasks usually associated with human intelligence, such as recognising patterns, understanding language, or making predictions. |
| Generative AI | AI that can create new content such as text, images, summaries, ideas, code, or plans. |
| Prompt | The instruction, question, or request given to an AI tool. |
| AI Tool | A software or platform that uses AI to help users complete tasks. |
| Machine Learning | A type of AI where systems learn patterns from data to make predictions or decisions. |
| Large Language Model | An AI model trained on large amounts of text to understand and generate language. |
| Hallucination | When AI produces information that sounds real but is false, inaccurate, or invented. |
| Bias | Unfair or incomplete patterns that may appear in AI outputs because of the data or assumptions behind the system. |
| Human Review | The process of checking AI output before using, sharing, or submitting it. |
| Privacy | Protecting personal, confidential, or sensitive information. |
| Responsible AI Use | Using AI safely, ethically, and with human judgement. |
| Sensitive Information | Information that should be protected, such as passwords, identity numbers, financial details, medical records, or confidential documents. |
| Verification | Checking whether information is accurate using reliable sources. |
| Human Judgement | The ability to apply context, ethics, experience, and responsibility when deciding whether to use AI output. |
| AI Literacy | The ability to understand, use, question, and evaluate AI tools responsibly. |

**Module 1 Final Quiz (10 questions):**
1. What is artificial intelligence? → **B. A computer system that can perform tasks usually associated with human intelligence**
2. What is generative AI mainly used for? → **A. Creating new content such as text, images, summaries, or ideas**
3. What is a prompt? → **B. An instruction or question given to an AI tool**
4. Which of the following is a good use of AI? → **B. Asking AI to brainstorm presentation ideas**
5. What is an AI hallucination? → **A. When AI produces information that sounds real but is false or invented**
6. Which information should you avoid uploading into a public AI tool? → **C. A customer's personal identity number**
7. Why should AI-generated content be reviewed before use? → **A. Because AI can make mistakes or miss context**
8. Which task should not be fully delegated to AI without human judgement? → **C. Making a final hiring decision**
9. Which is the safer way to use AI with sensitive information? → **B. Remove names and private details before asking for general help**
10. Which statement best describes the role of humans when using AI? → **C. Humans provide judgement, context, ethics, and final responsibility**

**Module 1 Reflection questions:**
1. Which tasks do you feel most comfortable using AI for?
2. Which tasks require careful human review?
3. What type of information should you avoid sharing with AI?
4. What is one personal rule you will follow when using AI?
5. How can AI help you without replacing your judgement?

**Further reading links:**
- IBM: What Is Artificial Intelligence? — https://www.ibm.com/think/topics/artificial-intelligence
- IBM: What Is Generative AI? — https://www.ibm.com/think/topics/generative-ai
- Harvard University IT: AI use cases — https://www.huit.harvard.edu/news/ai-use-cases
- OECD.AI: Generative AI Risks and Unknowns — https://oecd.ai/en/genai/issues/risks-and-unknowns
- OpenAI ChatGPT Privacy Settings — https://openai.com/consumer-privacy/
- UNESCO AI Competency Framework for Students — https://www.unesco.org/en/articles/ai-competency-framework-students

---

#### Module 2: Prompting 101
**Estimated time:** 2–3 hours | **Lessons:** 6

**Lessons:**
1. Lesson 2.1 — What Is a Prompt? *(Reading)*
2. Lesson 2.2 — The Basic Prompt Formula *(Reading + examples)*
3. Lesson 2.3 — Weak Prompts vs Strong Prompts *(Reading + examples)*
4. Lesson 2.4 — Follow-Up Prompts and Iteration *(Reading + examples)*
5. Lesson 2.5 — Prompting for Different Outputs *(Reading + prompt bank)*
6. Lesson 2.6 — Reviewing AI Outputs *(Reading + checklist)*

**Practice activity:** Prompt Practice Sheet
**Reflection:** Discussion questions
**Final quiz:** 10 questions
**Downloadable worksheet:** Prompt Builder Template

**The Basic Prompt Formula (Lesson 2.2 — already built in existing UI):**
`Task + Context + Format + Tone + Constraints`

---

#### Module 3: AI for Productivity and Communication
**Estimated time:** 2–3 hours | **Lessons:** 6

**Lessons:**
1. Lesson 3.1 — AI for Emails and Messages *(Reading + examples)*
2. Lesson 3.2 — AI for Summaries and Reports *(Reading + examples)*
3. Lesson 3.3 — AI for Meetings and Admin Work *(Reading + examples)*
4. Lesson 3.4 — AI for Planning and Time Management *(Reading + examples)*
5. Lesson 3.5 — Editing AI Output for Clarity and Tone *(Reading + checklist)*
6. Lesson 3.6 — Building a Simple AI Productivity System *(Reading + prompt bank)*

**Practice activity:** AI Productivity Toolkit
**Reflection:** Discussion questions
**Final quiz:** 10 questions
**Downloadable worksheet:** AI Productivity Toolkit Template

---

#### Module 4: AI for Research, Content, and Workflow
**Estimated time:** 2–3 hours | **Lessons:** 6

**Lessons:**
1. Lesson 4.1 — AI for Research and Learning *(Reading + examples)*
2. Lesson 4.2 — AI for Source Checking and Fact Review *(Reading + checklist)*
3. Lesson 4.3 — AI for Presentations *(Reading + examples)*
4. Lesson 4.4 — AI for Content Creation and Repurposing *(Reading + prompt bank)*
5. Lesson 4.5 — AI Workflow Design *(Reading + workflow examples)*
6. Lesson 4.6 — Final Responsible AI Checklist *(Reading + checklist)*

**Practice activity:** Final AI Workflow Plan
**Reflection:** Discussion questions
**Final quiz:** 10 questions
**Downloadable worksheet:** AI Workflow Plan Template

---

### COURSE 2: Digital Hygiene for Work and Everyday Life
**Duration:** 4 weeks | **Modules:** 4 | **Estimated time:** 8–10 hours

**Course description:** This course teaches learners to keep their digital life safe, clean, organised, and responsible. It covers personal data protection, digital footprints, responsible sharing, online reputation, account safety, device security, file organisation, and professional digital behaviour.

---

#### Module 1: Digital Hygiene Basics
**Estimated time:** 2–3 hours | **Lessons:** 5

**Lessons:**
1. Lesson 1.1 — What Is Digital Hygiene? *(Reading + examples + fill in the blanks)*
2. Lesson 1.2 — Why Digital Hygiene Matters *(Reading + scenarios + MCQ)*
3. Lesson 1.3 — Personal Data and Privacy *(Reading + checklist + short answer)*
4. Lesson 1.4 — Digital Footprints *(Reading + matching activity)*
5. Lesson 1.5 — Everyday Digital Responsibility *(Reading + decision game)*

**Practice activity:** Personal Digital Hygiene Audit
**Reflection:** Discussion questions
**Final quiz:** 10 questions
**Downloadable worksheet:** Digital Hygiene Self-Check Template

**Learning objectives:**
- Explain what digital hygiene means in simple language
- Identify common examples of good and poor digital hygiene
- Understand why digital hygiene matters for work, study, privacy, and reputation
- Recognise what personal data and sensitive information are
- Explain how digital footprints are created
- Make better decisions before sharing, storing, or posting digital information
- Complete a basic personal digital hygiene self-check

---

#### Module 2: Accounts, Passwords and Device Safety
**Estimated time:** 2–3 hours | **Lessons:** 5

**Lessons:**
1. Lesson 2.1 — Password Safety *(Reading + examples + password strength activity)*
2. Lesson 2.2 — Multi-Factor Authentication *(Reading + scenario MCQ)*
3. Lesson 2.3 — Account Recovery and Login Habits *(Reading + checklist + short answer)*
4. Lesson 2.4 — Device Safety Basics *(Reading + device safety mission)*
5. Lesson 2.5 — App Permissions, Updates, and Backups *(Reading + sorting game)*

**Practice activity:** Account and Device Safety Audit
**Reflection:** Discussion questions
**Final quiz:** 10 questions
**Downloadable worksheet:** Account and Device Safety Checklist

**Learning objectives:**
- Explain why strong and unique passwords matter
- Identify weak password habits and replace them with safer habits
- Understand what multi-factor authentication is and why it adds protection
- Review account recovery details and login alerts
- Apply basic device safety habits such as screen locks, updates, and antivirus protection
- Review app permissions before granting access
- Explain why backups protect important files

---

#### Module 3: Digital Organisation and Information Management
**Estimated time:** 2–3 hours | **Lessons:** 5

**Lessons:**
1. Lesson 3.1 — Digital Clutter and Why It Matters *(Reading + examples + fill in the blanks)*
2. Lesson 3.2 — File Naming and Folder Systems *(Reading + fix-the-file activity)*
3. Lesson 3.3 — Email and Inbox Hygiene *(Reading + inbox mission)*
4. Lesson 3.4 — Cloud Storage, Sharing, and Version Control *(Reading + decision game)*
5. Lesson 3.5 — Building a Digital Organisation Routine *(Reading + weekly workflow)*

**Practice activity:** Digital Organisation Audit
**Reflection:** Discussion questions
**Final quiz:** 10 questions
**Downloadable worksheet:** Digital Organisation Self-Check Template

---

#### Module 4: Professional Digital Behaviour and Communication
**Estimated time:** 2–3 hours | **Lessons:** 5

**Lessons:**
1. Lesson 4.1 — Digital Behaviour in Work and School *(Reading + examples + fill in the blanks)*
2. Lesson 4.2 — Workplace Messaging and Group Chat Etiquette *(Reading + rewrite activity)*
3. Lesson 4.3 — Tone, Timing, and Digital Boundaries *(Reading + decision game)*
4. Lesson 4.4 — Social Media Hygiene and Online Reputation *(Reading + social media judgement activity)*
5. Lesson 4.5 — Screenshots, Recordings, AI Outputs, and Responsible Sharing *(Reading + sharing challenge)*

**Practice activity:** Professional Digital Behaviour Audit
**Reflection:** Discussion questions
**Final quiz:** 10 questions
**Downloadable worksheet:** Professional Digital Behaviour Self-Check Template

---

### COURSE 3: Scam Awareness for Work and Everyday Life
**Duration:** 4 weeks | **Modules:** 4 | **Estimated time:** 8–10 hours

**Course description:** This course teaches learners to recognise and respond to scams across Southeast Asia. It covers how scams work psychologically, how to spot suspicious messages, links, calls and websites, how financial scams operate, and how AI-enabled scams and deepfakes are used by scammers today.

---

#### Module 1: Understanding Scams in Southeast Asia
**Estimated time:** 2–3 hours | **Lessons:** 5

**Lessons:**
1. Lesson 1.1 — What Is a Scam? *(Reading + examples + quick quiz)*
2. Lesson 1.2 — Why Scams Work *(Reading + theory + scenario activity)*
3. Lesson 1.3 — Types of Scams in Southeast Asia *(Reading + scam sorting activity)*
4. Lesson 1.4 — Phishing, Hacking, and Social Engineering *(Reading + matching activity)*
5. Lesson 1.5 — The Scam Pause Method *(Reading + decision game)*

**Practice activity:** Scam Tactic Identification Challenge
**Reflection:** Discussion questions
**Final quiz:** 10 questions
**Downloadable worksheet:** Personal Scam Awareness Self-Check

---

#### Module 2: Spotting Scam Messages, Links, Calls and Websites
**Estimated time:** 2–3 hours | **Lessons:** 5

**Lessons:**
1. Lesson 2.1 — Scam Messages and Phishing *(Reading + examples + fill in the blanks)*
2. Lesson 2.2 — Suspicious Links and Fake Websites *(Reading + red flag checklist + MCQ)*
3. Lesson 2.3 — Scam Calls, Voice Tricks, and Impersonation *(Reading + scenario activity)*
4. Lesson 2.4 — QR Codes, Attachments, and Downloads *(Reading + matching activity)*
5. Lesson 2.5 — Safe Verification Habits *(Reading + decision game)*

**Practice activity:** Spot the Red Flags Challenge
**Reflection:** Discussion questions
**Final quiz:** 10 questions
**Downloadable worksheet:** Message, Link, and Call Safety Checklist

---

#### Module 3: Financial, Shopping, Job and Investment Scams
**Estimated time:** 2–3 hours | **Lessons:** 5

**Lessons:**
1. Lesson 3.1 — Online Shopping and Marketplace Scams *(Reading + examples + fill in the blanks)*
2. Lesson 3.2 — Job, Task, and Side Income Scams *(Reading + scenario activity)*
3. Lesson 3.3 — Investment and Loan Scams *(Reading + red flag checklist)*
4. Lesson 3.4 — Bank, E-Wallet, and Payment Scams *(Reading + matching activity)*
5. Lesson 3.5 — Mule Accounts and Money Movement Risks *(Reading + decision game)*

**Practice activity:** Too Good to Be True Challenge
**Reflection:** Discussion questions
**Final quiz:** 10 questions
**Downloadable worksheet:** Money Safety Checklist

---

#### Module 4: AI Scams, Scam Response, Reporting and Protection Habits
**Estimated time:** 2–3 hours | **Lessons:** 5

**Lessons:**
1. Lesson 4.1 — What Are AI Scams? *(Reading + examples + fill in the blanks)*
2. Lesson 4.2 — Voice Cloning, Face Cloning, and Deepfake Impersonation *(Reading + scenario activity)*
3. Lesson 4.3 — AI-Generated Phishing, Fake Profiles, and Fake Documents *(Reading + red flag checklist)*
4. Lesson 4.4 — What to Do If You Are Targeted or Scammed *(Reading + response steps + matching activity)*
5. Lesson 4.5 — Long-Term Scam Protection Habits *(Reading + personal safety plan)*

**Practice activity:** Scam Response Simulation
**Reflection:** Discussion questions
**Final quiz:** 10 questions
**Downloadable worksheet:** AI Scam and Scam Response Action Plan

---

## LMS Features to implement (from Features.docx)

### Navigation and structure
- Landing page with registration of interest
- Course picker page (all 3 courses)
- Module list per course
- Lesson pages per module

### Per lesson page
- Lesson title and breadcrumb
- Reading content
- Key terms / glossary (expandable)
- Examples and scenarios
- Further reading links
- Self-check activities (at minimum: MCQ)
- Reflection text box (saved locally in state for now)
- Discussion prompt display (static for now — just show the prompt)
- Downloadable worksheet mention/link

### Per module page
- Module title and overview
- Lesson list with completion status (done / active / locked)
- Activities tab showing activity types available
- Module features sidebar (key terms, worksheet, discussion, badge)
- Module quiz (after all lessons complete)

### Progress tracking (frontend state only — no DB needed yet)
- Lesson completion checkboxes
- Module completion status
- Course progress bar

### Quizzes
- Multiple choice with instant feedback (green = correct, red = wrong)
- Show correct answer on submit
- Retake option

### Registration of interest
- Name, email, organisation, course interest
- Saved to SQLite via backend API
- Success confirmation shown

### Activity types to display (UI placeholders for now, fully built later)
- Multiple choice, Multiple select, True/False, Fill in the blanks
- Complete the table, Matching, Short answer, Reflection box
- Polls, Timed quiz option

---

## Colour system (keep consistent with existing component)

```js
const COLORS = {
  ai:      { accent: "#4f46e5", light: "#eef2ff", muted: "#c7d2fe" },
  hygiene: { accent: "#059669", light: "#ecfdf5", muted: "#a7f3d0" },
  scam:    { accent: "#ea580c", light: "#fff7ed", muted: "#fed7aa" },
};
// Brand: black #0a0a0a, off-white #f8f7f4
// Font: Plus Jakarta Sans (Google Fonts)
```

---

## Logo usage

Two logo files will be placed in `frontend/public/` by the client:
- `UB_White__1_.png` — white logo, use on dark/black backgrounds with `mix-blend-mode: screen`
- `UB_Black.png` — black logo, use on light backgrounds with `mix-blend-mode: multiply`

---

## What to run

After building, the README should explain:

```bash
# Install and run backend
cd backend && npm install && node server.js

# Install and run frontend (separate terminal)
cd frontend && npm install && npm run dev

# Open in browser
http://localhost:5173
```

---

## Summary of what to build

1. Scaffold the full project structure above
2. Create the Express + SQLite backend with registration and view-registrations endpoints
3. Use the provided `lms-dashboard.jsx` as the frontend base
4. Wire the registration form to the backend API
5. Expand the course data to include all 3 courses, all modules, all lessons as listed above
6. Make all lessons navigable (each lesson is its own view with its content)
7. Each lesson should show reading text, key terms, at least one MCQ, and a reflection box
8. Write a clear README.md with setup instructions
9. Test that the app runs, the registration saves to SQLite, and all navigation works

Do not add a login/auth system yet. Do not add a payment system. Keep the database simple — registrations only for now.
