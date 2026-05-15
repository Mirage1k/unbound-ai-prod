import { useState, useEffect } from "react";
import {
  BookOpen, ChevronRight, CheckCircle, Lock, PlayCircle,
  Trophy, Clock, FileText, MessageSquare, BarChart2,
  Download, ArrowLeft, Home, Award, CheckSquare, AlignLeft,
  Shuffle, ChevronDown, ChevronUp, Check, X, Edit3, Globe,
  Zap, Shield, AlertTriangle, PenTool, List, Grid,
  GraduationCap, Target, ArrowRight, UserPlus, Sparkles, Star, Users
} from "lucide-react";

import {
  COURSES, MODS, LESSONS_DATA, KEY_TERMS_DATA, LESSON_CONTENT, ACT_TYPES
} from "./data.js";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";
const FONT = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
const S = { fontFamily: "'Plus Jakarta Sans', sans-serif" };
const LOGO_WHITE = "/UB_White__1_.png";
const LOGO_BLACK = "/UB_Black.png";

const COLORS = {
  ai:      { accent: "#4f46e5", light: "#eef2ff", muted: "#c7d2fe" },
  hygiene: { accent: "#059669", light: "#ecfdf5", muted: "#a7f3d0" },
  scam:    { accent: "#ea580c", light: "#fff7ed", muted: "#fed7aa" },
};

const COURSE_ICONS = { ai: Zap, hygiene: Shield, scam: AlertTriangle };

// ── Logo components ───────────────────────────────────────────

function LogoDark({ height = 36 }) {
  return (
    <img src={LOGO_WHITE} alt="UnBound"
      style={{ height, width: "auto", mixBlendMode: "screen", display: "block" }} />
  );
}

function LogoLight({ height = 36 }) {
  return (
    <img src={LOGO_BLACK} alt="UnBound"
      style={{ height, width: "auto", mixBlendMode: "multiply", display: "block" }} />
  );
}

// ── Landing Page ──────────────────────────────────────────────

function LandingPage({ go }) {
  const [showReg, setShowReg] = useState(false);
  const [regDone, setRegDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", org: "", courseInterest: "" });

  async function handleSubmit() {
    if (!form.name.trim() || !form.email.trim()) {
      setError("Please enter your name and email.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/register-interest`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          organisation: form.org,
          course_interest: form.courseInterest,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setRegDone(true);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Could not reach the server. Please ensure the backend is running.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div style={{ ...S, background: "#fff", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ background: "#0a0a0a", position: "sticky", top: 0, zIndex: 50, borderBottom: "1px solid rgba(255,255,255,.08)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <LogoDark height={30} />
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <button onClick={() => go("courses")} style={{ padding: "7px 14px", border: "none", background: "none", cursor: "pointer", color: "rgba(255,255,255,.6)", fontSize: 13, fontWeight: 500, fontFamily: "inherit" }}>Courses</button>
            <button style={{ padding: "7px 14px", border: "none", background: "none", cursor: "pointer", color: "rgba(255,255,255,.6)", fontSize: 13, fontWeight: 500, fontFamily: "inherit" }}>About</button>
            <button onClick={() => setShowReg(true)} style={{ marginLeft: 8, padding: "9px 20px", borderRadius: 8, border: "1px solid rgba(255,255,255,.25)", cursor: "pointer", background: "rgba(255,255,255,.06)", color: "#fff", fontWeight: 600, fontSize: 13, fontFamily: "inherit", display: "flex", alignItems: "center", gap: 6 }}>
              <UserPlus size={14} /> Register Interest
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: "#0a0a0a", padding: "80px 24px 88px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,.04) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
            <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 20, padding: "40px 56px", borderRadius: 24, background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", backdropFilter: "blur(8px)" }}>
              <LogoDark height={72} />
              <div style={{ width: 48, height: 1, background: "rgba(255,255,255,.15)" }} />
              <p style={{ margin: 0, fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(255,255,255,.35)" }}>Digital Skills Platform</p>
            </div>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 20, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", marginBottom: 24 }}>
            <Sparkles size={12} color="rgba(255,255,255,.5)" />
            <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.5)", letterSpacing: ".4px" }}>21st Century Skills · Open to All Malaysians</span>
          </div>
          <h1 style={{ margin: "0 0 18px", fontSize: 48, fontWeight: 800, color: "#fff", lineHeight: 1.14, letterSpacing: "-1.2px" }}>
            Making Education<br />
            <span style={{ color: "rgba(255,255,255,.45)" }}>Accessible for All</span>
          </h1>
          <p style={{ margin: "0 0 36px", fontSize: 17, color: "rgba(255,255,255,.55)", lineHeight: 1.8, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
            Practical digital skills for the modern Malaysian workplace — learn at your own pace, from anywhere.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => go("courses")} style={{ padding: "14px 32px", borderRadius: 10, border: "none", cursor: "pointer", background: "#fff", color: "#0a0a0a", fontWeight: 700, fontSize: 15, fontFamily: "inherit", display: "flex", alignItems: "center", gap: 8 }}>
              Start Learning <ArrowRight size={16} />
            </button>
            <button onClick={() => setShowReg(true)} style={{ padding: "14px 32px", borderRadius: 10, cursor: "pointer", fontFamily: "inherit", background: "transparent", border: "1px solid rgba(255,255,255,.2)", color: "rgba(255,255,255,.8)", fontWeight: 600, fontSize: 15 }}>
              Register Interest
            </button>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ margin: "0 0 12px", fontSize: 32, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.5px" }}>Why UnBound?</h2>
            <p style={{ margin: 0, fontSize: 15, color: "#64748b" }}>Practical digital education — no jargon, no barriers.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {[
              [Target, "#4f46e5", "#eef2ff", "Real-world skills", "Every module is built around actual tasks — writing emails, spotting scams, using AI at work. Not just theory."],
              [Clock, "#059669", "#ecfdf5", "Learn at your own pace", "Short, focused lessons completable in 2–3 hours per module. Pause, rewind, and continue anytime, anywhere."],
              [GraduationCap, "#ea580c", "#fff7ed", "Earn a certificate", "Complete a course and receive a certificate recognising your new digital skills."],
              [Users, "#0891b2", "#e0f2fe", "Built for Malaysians", "Contextualised for daily life in Malaysia and Southeast Asia, with local examples throughout."],
              [Star, "#d97706", "#fef9c3", "Interactive & engaging", "Quizzes, fill-in-the-blanks, matching, reflection prompts, and discussions keep learning enjoyable."],
              [Globe, "#7c3aed", "#f3e8ff", "Open access", "No barriers to entry. Register and start building skills that matter for your career and everyday life."],
            ].map(([I, color, bg, title, desc]) => (
              <div key={title} style={{ background: "#f8fafc", borderRadius: 14, padding: "26px", border: "1px solid #e2e8f0" }}>
                <div style={{ width: 46, height: 46, background: bg, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <I size={22} color={color} />
                </div>
                <h3 style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 700, color: "#0f172a" }}>{title}</h3>
                <p style={{ margin: 0, fontSize: 13, color: "#64748b", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES PREVIEW */}
      <section style={{ padding: "72px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 32 }}>
            <div>
              <h2 style={{ margin: "0 0 6px", fontSize: 28, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.4px" }}>Our Courses</h2>
              <p style={{ margin: 0, fontSize: 14, color: "#64748b" }}>Three courses covering the digital skills Malaysians need most.</p>
            </div>
            <button onClick={() => go("courses")} style={{ padding: "9px 18px", borderRadius: 8, border: "1px solid #e2e8f0", background: "#fff", color: "#374151", cursor: "pointer", fontSize: 13, fontWeight: 600, fontFamily: "inherit", display: "flex", alignItems: "center", gap: 6 }}>
              View all <ChevronRight size={14} />
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {COURSES.map(c => {
              const col = COLORS[c.id]; const I = COURSE_ICONS[c.id];
              return (
                <div key={c.id} onClick={() => go("course", c.id)} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "20px 24px", display: "flex", gap: 18, alignItems: "center", cursor: "pointer" }}>
                  <div style={{ width: 50, height: 50, background: col.light, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <I size={24} color={col.accent} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#0f172a" }}>{c.title}</h3>
                      {c.badge && <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: col.light, color: col.accent, fontWeight: 600 }}>{c.badge}</span>}
                    </div>
                    <p style={{ margin: 0, fontSize: 13, color: "#64748b" }}>{c.desc}</p>
                  </div>
                  <ChevronRight size={16} color="#cbd5e1" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding: "80px 24px", background: "#0a0a0a", textAlign: "center" }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}><LogoDark height={40} /></div>
          <h2 style={{ margin: "0 0 12px", fontSize: 30, fontWeight: 800, color: "#fff", letterSpacing: "-0.4px" }}>Ready to get started?</h2>
          <p style={{ margin: "0 0 32px", fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.7 }}>Register your interest and we'll notify you when enrolment opens.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button onClick={() => setShowReg(true)} style={{ padding: "13px 28px", borderRadius: 10, border: "none", cursor: "pointer", background: "#fff", color: "#0a0a0a", fontWeight: 700, fontSize: 14, fontFamily: "inherit", display: "flex", alignItems: "center", gap: 8 }}>
              <UserPlus size={15} /> Register Interest
            </button>
            <button onClick={() => go("courses")} style={{ padding: "13px 28px", borderRadius: 10, cursor: "pointer", fontFamily: "inherit", background: "transparent", border: "1px solid rgba(255,255,255,.2)", color: "rgba(255,255,255,.8)", fontWeight: 600, fontSize: 14 }}>
              Browse Courses
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#050505", padding: "28px 24px", borderTop: "1px solid rgba(255,255,255,.06)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <LogoDark height={26} />
          <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,.2)" }}>© 2025 UnBound. All rights reserved.</p>
        </div>
      </footer>

      {/* REGISTER INTEREST MODAL */}
      {showReg && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200 }} onClick={() => { if (!submitting) { setShowReg(false); setRegDone(false); setError(""); setForm({ name: "", email: "", org: "", courseInterest: "" }); } }}>
          <div style={{ background: "#fff", borderRadius: 16, padding: "36px", width: 420, maxWidth: "92vw" }} onClick={e => e.stopPropagation()}>
            {!regDone ? (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <div>
                    <h2 style={{ margin: "0 0 6px", fontSize: 21, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.3px" }}>Register Your Interest</h2>
                    <p style={{ margin: 0, fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>Let us know you're interested and we'll be in touch when the platform launches.</p>
                  </div>
                  <button onClick={() => { setShowReg(false); setError(""); }} style={{ border: "none", background: "#f1f5f9", borderRadius: 8, width: 32, height: 32, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginLeft: 12 }}>
                    <X size={14} />
                  </button>
                </div>
                <div style={{ width: 40, height: 2, background: "#0a0a0a", borderRadius: 2, marginBottom: 24 }} />
                {[
                  ["Full name", "name", "text", "Your full name"],
                  ["Email address", "email", "email", "you@example.com"],
                  ["Organisation / School", "org", "text", "Company, school, or N/A"],
                ].map(([label, key, type, placeholder]) => (
                  <div key={key} style={{ marginBottom: 14 }}>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 5, fontFamily: "inherit" }}>{label}</label>
                    <input type={type} placeholder={placeholder} value={form[key]}
                      onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 13, fontFamily: "inherit", color: "#374151", outline: "none", boxSizing: "border-box", background: "#f8fafc" }} />
                  </div>
                ))}
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 5, fontFamily: "inherit" }}>Which course interests you most?</label>
                  <select value={form.courseInterest} onChange={e => setForm(f => ({ ...f, courseInterest: e.target.value }))}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 13, fontFamily: "inherit", color: "#374151", outline: "none", background: "#f8fafc", cursor: "pointer" }}>
                    <option value="">Select a course…</option>
                    <option>AI Learning for Work and Productivity</option>
                    <option>Digital Hygiene for Work and Everyday Life</option>
                    <option>Scam Awareness for Work and Everyday Life</option>
                    <option>All of them</option>
                  </select>
                </div>
                {error && <p style={{ margin: "0 0 12px", fontSize: 12, color: "#dc2626", background: "#fef2f2", padding: "8px 12px", borderRadius: 6 }}>{error}</p>}
                <button onClick={handleSubmit} disabled={submitting}
                  style={{ width: "100%", padding: "12px", borderRadius: 8, border: "none", background: submitting ? "#94a3b8" : "#0a0a0a", color: "#fff", fontWeight: 700, fontSize: 14, cursor: submitting ? "default" : "pointer", fontFamily: "inherit" }}>
                  {submitting ? "Submitting…" : "Submit Registration of Interest"}
                </button>
                <p style={{ margin: "10px 0 0", fontSize: 11, color: "#94a3b8", textAlign: "center" }}>We won't spam you. Your details are kept private.</p>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "8px 0" }}>
                <div style={{ width: 60, height: 60, background: "#f0fdf4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <Check size={26} color="#16a34a" />
                </div>
                <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.3px" }}>Thank you!</h3>
                <p style={{ margin: "0 0 24px", fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>
                  We've received your registration of interest.<br />We'll be in touch when the platform is ready.
                </p>
                <button onClick={() => { setShowReg(false); setRegDone(false); go("courses"); }}
                  style={{ padding: "11px 24px", borderRadius: 8, border: "none", background: "#0a0a0a", color: "#fff", fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
                  Browse Courses
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Course Picker ─────────────────────────────────────────────

function CoursePicker({ go }) {
  return (
    <div style={{ ...S, minHeight: "100vh", background: "#f8fafc" }}>
      <nav style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <button onClick={() => go("landing")} style={{ border: "none", background: "none", cursor: "pointer", padding: 0 }}>
            <LogoLight height={28} />
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, background: "#eef2ff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#4f46e5" }}>LN</div>
            <span style={{ fontSize: 13, fontWeight: 500, color: "#374151" }}>Learner</span>
          </div>
        </div>
      </nav>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "52px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <h1 style={{ margin: "0 0 10px", fontSize: 30, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.5px" }}>Choose your learning path</h1>
          <p style={{ margin: 0, fontSize: 15, color: "#64748b" }}>Three courses covering the digital skills that matter most.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {COURSES.map(c => {
            const col = COLORS[c.id]; const I = COURSE_ICONS[c.id];
            return (
              <div key={c.id} onClick={() => go("course", c.id)} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: "24px 28px", display: "flex", gap: 20, alignItems: "center", cursor: "pointer" }}>
                <div style={{ width: 56, height: 56, background: col.light, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <I size={26} color={col.accent} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#0f172a" }}>{c.title}</h2>
                    {c.badge && <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: col.light, color: col.accent, fontWeight: 600 }}>{c.badge}</span>}
                  </div>
                  <p style={{ margin: "0 0 10px", fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{c.desc}</p>
                  <div style={{ display: "flex", gap: 16 }}>
                    <span style={{ fontSize: 12, color: "#94a3b8" }}>{c.duration}</span>
                    <span style={{ fontSize: 12, color: "#94a3b8" }}>{c.modules} modules</span>
                    <span style={{ fontSize: 12, color: "#94a3b8" }}>Certificate</span>
                  </div>
                </div>
                <button style={{ padding: "10px 20px", borderRadius: 8, border: "none", background: col.accent, color: "#fff", fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "inherit", flexShrink: 0, display: "flex", alignItems: "center", gap: 6 }}>
                  Start <ArrowRight size={13} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── LMS Shell ─────────────────────────────────────────────────

function LMSShell({ view, course, mod, lesson, go, state, setState }) {
  const set = (k, v) => setState(s => ({ ...s, [k]: v }));
  const { mcqSel, mcqDone, reflect, glossOpen, tab } = state;

  const cdata = COURSES.find(c => c.id === course);
  const mdata = mod ? MODS[course]?.find(m => m.id === mod) : null;
  const col = COLORS[course] || COLORS.ai;

  const moduleLessons = (course && mod) ? (LESSONS_DATA[course]?.[mod] || []) : [];
  const currentLesson = lesson ? moduleLessons.find(l => l.id === lesson) : null;
  const currentContent = (course && mod && lesson) ? LESSON_CONTENT[course]?.[mod]?.[lesson] : null;
  const moduleTerms = (course && mod) ? (KEY_TERMS_DATA[course]?.[mod] || []) : [];

  const lessonIdx = lesson ? moduleLessons.findIndex(l => l.id === lesson) : -1;
  const prevLesson = lessonIdx > 0 ? moduleLessons[lessonIdx - 1] : null;
  const nextLesson = lessonIdx >= 0 && lessonIdx < moduleLessons.length - 1 ? moduleLessons[lessonIdx + 1] : null;

  // Sidebar
  const sidebar = (
    <div style={{ ...S, width: 220, minWidth: 220, background: "#0a0a0a", display: "flex", flexDirection: "column", height: "100vh", borderRight: "1px solid #1a1a1a", flexShrink: 0 }}>
      <div style={{ padding: "18px 16px", borderBottom: "1px solid #1a1a1a" }}>
        <button onClick={() => go("landing")} style={{ border: "none", background: "none", cursor: "pointer", padding: 0 }}>
          <LogoDark height={28} />
        </button>
      </div>
      <nav style={{ padding: "12px 8px", flex: 1 }}>
        {[
          [Home, "Dashboard", "dashboard"],
          [BookOpen, "Courses", "courses"],
          [BarChart2, "Progress", "progress"],
          [MessageSquare, "Discussions", "discuss"],
          [Award, "Certificates", "certs"],
        ].map(([I, label, v]) => {
          const isActive = view === v || (v === "dashboard" && !["progress", "discuss", "certs", "courses"].includes(view));
          return (
            <button key={v} onClick={() => go(v === "courses" ? "courses" : v)}
              style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "9px 10px", borderRadius: 8, border: "none", cursor: "pointer", background: isActive ? "rgba(255,255,255,.07)" : "transparent", fontFamily: "inherit", color: isActive ? "#fff" : "rgba(255,255,255,.4)", marginBottom: 2, textAlign: "left", fontSize: 13, fontWeight: isActive ? 600 : 400 }}>
              <I size={18} /> {label}
            </button>
          );
        })}
      </nav>
      <div style={{ padding: "12px 8px", borderTop: "1px solid #1a1a1a" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,.7)", fontSize: 12, fontWeight: 700 }}>LN</div>
          <div>
            <p style={{ margin: 0, color: "rgba(255,255,255,.8)", fontSize: 12, fontWeight: 600 }}>Learner</p>
            <p style={{ margin: 0, color: "rgba(255,255,255,.3)", fontSize: 11 }}>
              {cdata ? cdata.title.split(" ").slice(0, 2).join(" ") : "UnBound LMS"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Dashboard view
  const dashView = (
    <div style={{ ...S, padding: "32px 40px", maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 700, color: "#0f172a" }}>Good morning 👋</h1>
      <p style={{ margin: "0 0 28px", color: "#64748b", fontSize: 14 }}>Pick up where you left off, or explore a new course.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 28 }}>
        {[[BookOpen, "Courses enrolled", 1, "#4f46e5"], [CheckCircle, "Modules complete", 1, "#059669"], [Clock, "Hours logged", "2.5", "#ea580c"], [Trophy, "Certificates", 0, "#d97706"]].map(([I, l, v, c]) => (
          <div key={l} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 12, color: "#64748b" }}>{l}</span>
              <div style={{ width: 26, height: 26, background: c + "18", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <I size={13} color={c} />
              </div>
            </div>
            <p style={{ margin: 0, fontSize: 24, fontWeight: 700, color: "#0f172a" }}>{v}</p>
          </div>
        ))}
      </div>
      <h2 style={{ margin: "0 0 14px", fontSize: 15, fontWeight: 600, color: "#0f172a" }}>Your courses</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {COURSES.map(c => {
          const cl = COLORS[c.id]; const I = COURSE_ICONS[c.id];
          return (
            <div key={c.id} onClick={() => go("course", c.id)} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "18px 22px", display: "flex", gap: 14, alignItems: "center", cursor: "pointer" }}>
              <div style={{ width: 44, height: 44, background: cl.light, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <I size={20} color={cl.accent} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <h3 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#0f172a" }}>{c.title}</h3>
                  {c.badge && <span style={{ fontSize: 11, padding: "2px 7px", borderRadius: 20, background: cl.light, color: cl.accent, fontWeight: 600 }}>{c.badge}</span>}
                </div>
                {c.id === "ai" && (
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ flex: 1, maxWidth: 160, height: 4, background: "#e2e8f0", borderRadius: 4, overflow: "hidden" }}>
                      <div style={{ width: "25%", height: "100%", background: cl.accent, borderRadius: 4 }} />
                    </div>
                    <span style={{ fontSize: 12, color: cl.accent, fontWeight: 600 }}>25%</span>
                  </div>
                )}
              </div>
              <ChevronRight size={16} color="#cbd5e1" />
            </div>
          );
        })}
      </div>
    </div>
  );

  // Course (module list) view
  const courseView = cdata && (
    <div style={{ ...S, padding: "32px 40px", maxWidth: 860, margin: "0 auto" }}>
      <button onClick={() => go("courses")} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#64748b", cursor: "pointer", marginBottom: 24, padding: 0, fontSize: 13 }}>
        <ArrowLeft size={14} /> Back to courses
      </button>
      <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "22px 26px", marginBottom: 22 }}>
        <h1 style={{ margin: "0 0 6px", fontSize: 19, fontWeight: 700, color: "#0f172a" }}>{cdata.title}</h1>
        <p style={{ margin: "0 0 14px", fontSize: 13, color: "#64748b" }}>{cdata.desc}</p>
        {cdata.id === "ai" && (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ flex: 1, maxWidth: 260, height: 6, background: "#e2e8f0", borderRadius: 4, overflow: "hidden" }}>
              <div style={{ width: "25%", height: "100%", background: col.accent, borderRadius: 4 }} />
            </div>
            <span style={{ fontSize: 13, color: col.accent, fontWeight: 600 }}>25% complete</span>
          </div>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {(MODS[course] || []).map(m => {
          const locked = m.status === "locked", done = m.status === "complete";
          const active = m.status === "active" || m.status === "available";
          return (
            <div key={m.id} onClick={() => !locked && go("module", course, m.id)}
              style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "15px 20px", display: "flex", alignItems: "center", gap: 14, cursor: locked ? "default" : "pointer", opacity: locked ? .6 : 1 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: done ? col.accent : active ? col.light : "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {done ? <Check size={15} color="#fff" /> : locked ? <Lock size={13} color="#94a3b8" /> : <PlayCircle size={15} color={col.accent} />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: locked ? "#94a3b8" : "#0f172a" }}>Module {m.id}: {m.title}</span>
                  {done && m.score && <span style={{ fontSize: 11, padding: "2px 7px", borderRadius: 20, background: "#dcfce7", color: "#166534", fontWeight: 600 }}>Quiz: {m.score}%</span>}
                  {m.status === "active" && <span style={{ fontSize: 11, padding: "2px 7px", borderRadius: 20, background: col.light, color: col.accent, fontWeight: 600 }}>In progress</span>}
                </div>
                <p style={{ margin: "3px 0 0", fontSize: 12, color: "#94a3b8" }}>{m.lessons} lessons · ~2–3 hrs</p>
              </div>
              {!locked && <ChevronRight size={15} color="#cbd5e1" />}
            </div>
          );
        })}
      </div>
    </div>
  );

  // Module view
  const moduleView = mdata && (
    <div style={{ ...S, padding: "32px 40px", maxWidth: 960, margin: "0 auto" }}>
      <button onClick={() => go("course", course)} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#64748b", cursor: "pointer", marginBottom: 22, padding: 0, fontSize: 13 }}>
        <ArrowLeft size={14} /> Back to course
      </button>
      <p style={{ margin: "0 0 4px", fontSize: 11, color: col.accent, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".6px" }}>Module {mdata.id}</p>
      <h1 style={{ margin: "0 0 6px", fontSize: 21, fontWeight: 700, color: "#0f172a" }}>{mdata.title}</h1>
      <p style={{ margin: "0 0 22px", fontSize: 13, color: "#64748b" }}>{mdata.lessons} lessons · Quiz · Worksheet · Discussion</p>
      <div style={{ display: "flex", gap: 22 }}>
        <div style={{ flex: "0 0 56%" }}>
          <div style={{ display: "flex", gap: 2, marginBottom: 14, background: "#f1f5f9", borderRadius: 8, padding: 3 }}>
            {["lessons", "activities"].map(t => (
              <button key={t} onClick={() => set("tab", t)} style={{ flex: 1, padding: "7px", border: "none", borderRadius: 6, cursor: "pointer", background: tab === t ? "#fff" : "transparent", color: tab === t ? "#0f172a" : "#64748b", fontWeight: tab === t ? 600 : 400, fontSize: 13, fontFamily: "inherit", textTransform: "capitalize" }}>{t}</button>
            ))}
          </div>
          {tab === "lessons" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {moduleLessons.map((l, idx) => (
                <div key={l.id} onClick={() => go("lesson", course, mdata.id, l.id)}
                  style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10, padding: "12px 16px", display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, flexShrink: 0, background: idx === 0 ? col.accent : col.light, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {idx === 0 ? <Check size={13} color="#fff" /> : <span style={{ fontSize: 12, fontWeight: 600, color: col.accent }}>{l.id}</span>}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 500, color: "#0f172a" }}>{l.title}</p>
                    <p style={{ margin: 0, fontSize: 11, color: "#94a3b8" }}>{l.type}</p>
                  </div>
                  {idx === 1 && <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: col.light, color: col.accent, fontWeight: 600 }}>Continue</span>}
                  {idx === 0 && <CheckCircle size={14} color={col.accent} />}
                </div>
              ))}
            </div>
          )}
          {tab === "activities" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {ACT_TYPES.map(({ label, color }) => (
                <div key={label} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 8, padding: "10px 12px", display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 7, background: color + "15", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <CheckSquare size={13} color={color} />
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 500, color: "#374151" }}>{label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            [FileText, "Key terms glossary", `${moduleTerms.length} terms`],
            [BookOpen, "Reading materials", "Lessons with examples"],
            [Download, "Downloadable worksheet", "Self-check template"],
            [MessageSquare, "Discussion prompt", "1 compulsory response"],
            [PenTool, "Reflection journal", "Private or submitted"],
            [Globe, "Further reading links", "Curated sources"],
            [Award, "Module badge", "Awarded on completion"],
          ].map(([I, label, desc]) => (
            <div key={label} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10, padding: "11px 14px", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 30, height: 30, background: col.light, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <I size={14} color={col.accent} />
              </div>
              <div>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 500, color: "#0f172a" }}>{label}</p>
                <p style={{ margin: 0, fontSize: 11, color: "#94a3b8" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Lesson view
  const lessonView = currentLesson && (
    <div style={{ ...S, padding: "28px 40px", maxWidth: 800, margin: "0 auto" }}>
      <button onClick={() => go("module", course, mod)} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#64748b", cursor: "pointer", marginBottom: 22, padding: 0, fontSize: 13 }}>
        <ArrowLeft size={14} /> Back to module
      </button>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
        <div>
          <p style={{ margin: 0, fontSize: 11, color: col.accent, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".6px" }}>
            Lesson {mod}.{lesson}
          </p>
          <h1 style={{ margin: "4px 0 0", fontSize: 20, fontWeight: 700, color: "#0f172a" }}>{currentLesson.title}</h1>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {moduleLessons.map(l => (
            <div key={l.id} style={{ width: 26, height: 4, borderRadius: 4, background: l.id < lesson ? col.accent : l.id === lesson ? col.muted : "#e2e8f0" }} />
          ))}
        </div>
      </div>

      {/* Key Terms */}
      {moduleTerms.length > 0 && (
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, marginBottom: 14, overflow: "hidden" }}>
          <button onClick={() => set("glossOpen", !glossOpen)} style={{ width: "100%", padding: "12px 16px", border: "none", background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: "inherit" }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#0f172a", display: "flex", alignItems: "center", gap: 8 }}>
              <BookOpen size={14} color={col.accent} /> Key terms ({moduleTerms.length})
            </span>
            {glossOpen ? <ChevronUp size={14} color="#64748b" /> : <ChevronDown size={14} color="#64748b" />}
          </button>
          {glossOpen && (
            <div style={{ borderTop: "1px solid #f1f5f9", padding: "12px 16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {moduleTerms.map(({ term, def }) => (
                <div key={term} style={{ background: "#f8fafc", borderRadius: 8, padding: "9px 11px" }}>
                  <p style={{ margin: "0 0 3px", fontSize: 12, fontWeight: 700, color: "#0f172a" }}>{term}</p>
                  <p style={{ margin: 0, fontSize: 11, color: "#64748b", lineHeight: 1.5 }}>{def}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Reading */}
      {currentContent && (
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "18px 22px", marginBottom: 14 }}>
          <h2 style={{ margin: "0 0 12px", fontSize: 15, fontWeight: 600, color: "#0f172a" }}>{currentLesson.title}</h2>
          {currentContent.reading.map((para, i) => (
            <p key={i} style={{ margin: i < currentContent.reading.length - 1 ? "0 0 12px" : 0, fontSize: 14, color: "#374151", lineHeight: 1.75 }}>{para}</p>
          ))}
        </div>
      )}

      {/* MCQ */}
      {currentContent?.mcq && (
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "18px 22px", marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <CheckSquare size={14} color={col.accent} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#0f172a" }}>Check your understanding</span>
            <span style={{ marginLeft: "auto", fontSize: 11, color: "#94a3b8" }}>Multiple choice · 1 pt</span>
          </div>
          <p style={{ margin: "0 0 12px", fontSize: 14, color: "#374151", lineHeight: 1.6 }}>{currentContent.mcq.q}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {currentContent.mcq.opts.map((opt, i) => {
              const sel = mcqSel === i, correct = i === currentContent.mcq.correct, show = mcqDone;
              return (
                <button key={i} disabled={mcqDone} onClick={() => { set("mcqSel", i); set("mcqDone", true); }}
                  style={{ padding: "10px 14px", borderRadius: 8, fontFamily: "inherit", border: `1.5px solid ${show && correct ? "#16a34a" : show && sel && !correct ? "#dc2626" : sel ? col.accent : "#e2e8f0"}`, background: show && correct ? "#f0fdf4" : show && sel && !correct ? "#fef2f2" : sel ? col.light : "#fff", cursor: mcqDone ? "default" : "pointer", textAlign: "left", fontSize: 13, color: show && correct ? "#16a34a" : show && sel && !correct ? "#dc2626" : "#374151", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span>{opt}</span>
                  {show && correct && <Check size={13} color="#16a34a" />}
                  {show && sel && !correct && <X size={13} color="#dc2626" />}
                </button>
              );
            })}
          </div>
          {mcqDone && (
            <div style={{ marginTop: 10, padding: "9px 13px", borderRadius: 8, background: mcqSel === currentContent.mcq.correct ? "#f0fdf4" : "#fef2f2" }}>
              <p style={{ margin: 0, fontSize: 13, color: mcqSel === currentContent.mcq.correct ? "#16a34a" : "#dc2626" }}>
                {mcqSel === currentContent.mcq.correct ? `✓ Correct! ${currentContent.mcq.explanation}` : `✗ ${currentContent.mcq.explanation}`}
              </p>
            </div>
          )}
          {mcqDone && (
            <button onClick={() => { set("mcqSel", null); set("mcqDone", false); }} style={{ marginTop: 10, padding: "6px 14px", borderRadius: 6, border: "1px solid #e2e8f0", background: "#fff", color: "#64748b", cursor: "pointer", fontSize: 12, fontFamily: "inherit" }}>
              Retake
            </button>
          )}
        </div>
      )}

      {/* Reflection */}
      {currentContent?.reflectionPrompt && (
        <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "18px 22px", marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <PenTool size={14} color="#059669" />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#0f172a" }}>Reflection</span>
          </div>
          <p style={{ margin: "0 0 10px", fontSize: 14, color: "#374151" }}>{currentContent.reflectionPrompt}</p>
          <textarea value={reflect} onChange={e => set("reflect", e.target.value)}
            placeholder="Write your reflection here…"
            style={{ width: "100%", height: 80, border: "1px solid #e2e8f0", borderRadius: 8, padding: "10px 12px", fontSize: 13, fontFamily: "inherit", color: "#374151", resize: "vertical", outline: "none", background: "#f8fafc", boxSizing: "border-box" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
            <span style={{ fontSize: 11, color: "#94a3b8" }}>{reflect.length} chars</span>
            <button style={{ padding: "7px 16px", borderRadius: 8, background: col.accent, color: "#fff", border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "inherit" }}>Save</button>
          </div>
        </div>
      )}

      {/* Discussion + Further reading */}
      {currentContent && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <MessageSquare size={13} color="#7c3aed" />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#0f172a" }}>Discussion</span>
              <span style={{ marginLeft: "auto", fontSize: 10, padding: "1px 6px", borderRadius: 20, background: "#f3e8ff", color: "#7c3aed", fontWeight: 600 }}>Required</span>
            </div>
            <p style={{ margin: "0 0 10px", fontSize: 12, color: "#374151", lineHeight: 1.6 }}>
              Share your thoughts on: {currentContent.reflectionPrompt}
            </p>
            <button style={{ width: "100%", padding: "7px", borderRadius: 8, border: "1px solid #e8d5ff", background: "#faf5ff", color: "#7c3aed", cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "inherit" }}>
              Join discussion →
            </button>
          </div>
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <Globe size={13} color="#0891b2" />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#0f172a" }}>Further reading</span>
            </div>
            {(currentContent.furtherReading || ["No links available for this lesson."]).map(link => {
              const parts = link.split(" — ");
              const label = parts[0];
              const url = parts[1];
              return (
                <div key={link} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 0", borderBottom: "1px solid #f1f5f9" }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#0891b2", flexShrink: 0 }} />
                  {url ? (
                    <a href={url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: "#0891b2", textDecoration: "none" }}>{label}</a>
                  ) : (
                    <span style={{ fontSize: 11, color: "#94a3b8" }}>{label}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Prev / Next navigation */}
      <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 12, borderTop: "1px solid #f1f5f9" }}>
        <button onClick={() => prevLesson ? go("lesson", course, mod, prevLesson.id) : go("module", course, mod)}
          style={{ padding: "10px 20px", borderRadius: 8, border: "1px solid #e2e8f0", background: "#fff", color: "#374151", cursor: "pointer", fontSize: 13, fontWeight: 500, display: "flex", alignItems: "center", gap: 6, fontFamily: "inherit" }}>
          <ArrowLeft size={13} /> {prevLesson ? "Previous" : "Back to module"}
        </button>
        <button onClick={() => nextLesson ? go("lesson", course, mod, nextLesson.id) : go("module", course, mod)}
          style={{ padding: "10px 20px", borderRadius: 8, border: "none", background: col.accent, color: "#fff", cursor: "pointer", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 6, fontFamily: "inherit" }}>
          {nextLesson ? "Next" : "Complete module"} <ChevronRight size={13} />
        </button>
      </div>
    </div>
  );

  const viewMap = {
    dashboard: dashView,
    course: courseView,
    module: moduleView,
    lesson: lessonView || <div style={{ ...S, padding: "48px", color: "#94a3b8", textAlign: "center" }}>Lesson not found.</div>,
    progress: <div style={{ ...S, padding: "48px", color: "#94a3b8", textAlign: "center" }}>Progress tracker — coming soon</div>,
    discuss: <div style={{ ...S, padding: "48px", color: "#94a3b8", textAlign: "center" }}>Discussions board — coming soon</div>,
    certs: <div style={{ ...S, padding: "48px", color: "#94a3b8", textAlign: "center" }}>Certificates — coming soon</div>,
  };

  return (
    <div style={{ display: "flex", height: "100vh", background: "#f8f7f4", overflow: "hidden" }}>
      {sidebar}
      <div style={{ flex: 1, overflow: "auto" }}>{viewMap[view] || dashView}</div>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────

export default function App() {
  const [nav, setNav] = useState({ view: "landing", course: null, mod: null, lesson: null });
  const [lms, setLms] = useState({ mcqSel: null, mcqDone: false, reflect: "", glossOpen: false, tab: "lessons" });

  useEffect(() => {
    const l = document.createElement("link");
    l.rel = "stylesheet"; l.href = FONT;
    document.head.appendChild(l);
  }, []);

  const go = (view, course = null, mod = null, lesson = null) => {
    setNav({ view, course, mod, lesson });
    setLms(s => ({ ...s, mcqSel: null, mcqDone: false, reflect: "", glossOpen: false, tab: "lessons" }));
  };

  const { view, course, mod, lesson } = nav;

  if (view === "landing") return <LandingPage go={go} />;
  if (view === "courses") return <CoursePicker go={go} />;

  return (
    <LMSShell
      view={view} course={course} mod={mod} lesson={lesson}
      go={go} state={lms} setState={setLms}
    />
  );
}
