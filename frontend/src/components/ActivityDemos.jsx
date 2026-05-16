import { useState, useEffect, useRef } from "react";
import { Check, X, Clock } from "lucide-react";

const BTN = (extra = {}) => ({
  fontFamily: "inherit", border: "none", cursor: "pointer", borderRadius: 8,
  fontSize: 13, fontWeight: 600, ...extra,
});

const CARD = { background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "16px" };

function Result({ correct, explanation }) {
  return (
    <div style={{ marginTop: 10, padding: "9px 12px", borderRadius: 8, background: correct ? "#f0fdf4" : "#fef2f2" }}>
      <p style={{ margin: 0, fontSize: 13, color: correct ? "#16a34a" : "#dc2626", lineHeight: 1.5 }}>
        {correct ? "✓ Correct! " : "✗ Not quite. "}{explanation}
      </p>
    </div>
  );
}

export function DemoMCQ({ col }) {
  const [sel, setSel] = useState(null);
  const q = {
    q: "Which of the following best describes a prompt?",
    opts: ["A software update notification", "An instruction or question given to an AI tool", "A type of internet connection", "An AI-generated image"],
    correct: 1,
    explanation: "A prompt is the input you give to an AI — the instruction or question that guides its response.",
  };
  return (
    <div style={CARD}>
      <p style={{ margin: "0 0 12px", fontSize: 14, color: "#0f172a", fontWeight: 500, lineHeight: 1.6 }}>{q.q}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {q.opts.map((opt, i) => {
          const selected = sel === i; const correct = i === q.correct; const show = sel != null;
          return (
            <button key={i} onClick={() => !sel && setSel(i)}
              style={{ ...BTN(), padding: "9px 14px", textAlign: "left", background: show && correct ? "#f0fdf4" : show && selected && !correct ? "#fef2f2" : selected ? (col?.light || "#eef2ff") : "#fff", border: `1.5px solid ${show && correct ? "#16a34a" : show && selected && !correct ? "#dc2626" : selected ? (col?.accent || "#4f46e5") : "#e2e8f0"}`, color: show && correct ? "#16a34a" : show && selected && !correct ? "#dc2626" : "#374151", cursor: sel != null ? "default" : "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              {opt}
              {show && correct && <Check size={13} color="#16a34a" />}
              {show && selected && !correct && <X size={13} color="#dc2626" />}
            </button>
          );
        })}
      </div>
      {sel != null && <Result correct={sel === q.correct} explanation={q.explanation} />}
      {sel != null && <button onClick={() => setSel(null)} style={{ ...BTN({ padding: "5px 12px", background: "#fff", border: "1px solid #e2e8f0", color: "#64748b", marginTop: 8 }) }}>Reset</button>}
    </div>
  );
}

export function DemoMultiSelect({ col }) {
  const [sel, setSel] = useState([]);
  const [done, setDone] = useState(false);
  const q = {
    q: "Which of the following are examples of generative AI? Select all that apply.",
    opts: ["ChatGPT", "A spam filter", "DALL-E image generator", "A GPS navigation app", "Midjourney"],
    correct: [0, 2, 4],
    explanation: "ChatGPT, DALL-E, and Midjourney all generate new content. A spam filter classifies existing content, and GPS uses routing algorithms — neither is generative.",
  };
  const toggle = i => { if (done) return; setSel(s => s.includes(i) ? s.filter(x => x !== i) : [...s, i]); };
  const isCorrect = JSON.stringify([...sel].sort()) === JSON.stringify([...q.correct].sort());
  return (
    <div style={CARD}>
      <p style={{ margin: "0 0 12px", fontSize: 14, color: "#0f172a", fontWeight: 500, lineHeight: 1.6 }}>{q.q}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {q.opts.map((opt, i) => {
          const selected = sel.includes(i); const correct = q.correct.includes(i);
          return (
            <button key={i} onClick={() => toggle(i)}
              style={{ ...BTN({ padding: "9px 14px", textAlign: "left", display: "flex", alignItems: "center", gap: 10, cursor: done ? "default" : "pointer" }), background: done && correct ? "#f0fdf4" : done && selected && !correct ? "#fef2f2" : selected ? (col?.light || "#eef2ff") : "#fff", border: `1.5px solid ${done && correct ? "#16a34a" : done && selected && !correct ? "#dc2626" : selected ? (col?.accent || "#4f46e5") : "#e2e8f0"}`, color: "#374151" }}>
              <div style={{ width: 16, height: 16, borderRadius: 4, border: `2px solid ${selected ? (col?.accent || "#4f46e5") : "#d1d5db"}`, background: selected ? (col?.accent || "#4f46e5") : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {selected && <Check size={10} color="#fff" />}
              </div>
              {opt}
            </button>
          );
        })}
      </div>
      {!done && sel.length > 0 && <button onClick={() => setDone(true)} style={{ ...BTN({ padding: "7px 16px", background: col?.accent || "#4f46e5", color: "#fff", marginTop: 10 }) }}>Check answers</button>}
      {done && <Result correct={isCorrect} explanation={q.explanation} />}
      {done && <button onClick={() => { setSel([]); setDone(false); }} style={{ ...BTN({ padding: "5px 12px", background: "#fff", border: "1px solid #e2e8f0", color: "#64748b", marginTop: 8 }) }}>Reset</button>}
    </div>
  );
}

export function DemoTrueFalse({ col }) {
  const [ans, setAns] = useState(null);
  const q = {
    statement: "AI can produce information that sounds real but is completely made up.",
    answer: true,
    explanation: "This is called 'hallucination' — AI can generate false information with high confidence. Always verify AI outputs before using them.",
  };
  return (
    <div style={CARD}>
      <p style={{ margin: "0 0 16px", fontSize: 14, color: "#0f172a", fontWeight: 500, lineHeight: 1.65, background: "#fff", padding: "12px 16px", borderRadius: 8, border: "1px solid #e2e8f0" }}>
        "{q.statement}"
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        {[true, false].map(val => {
          const selected = ans === val; const correct = val === q.answer; const show = ans != null;
          return (
            <button key={String(val)} onClick={() => !ans && setAns(val)}
              style={{ ...BTN({ padding: "10px 24px", flex: 1, fontSize: 14, cursor: ans != null ? "default" : "pointer" }), background: show && selected && correct ? "#f0fdf4" : show && selected && !correct ? "#fef2f2" : show && correct ? "#f0fdf4" : selected ? (col?.light || "#eef2ff") : "#fff", border: `1.5px solid ${show && correct ? "#16a34a" : show && selected && !correct ? "#dc2626" : selected ? (col?.accent || "#4f46e5") : "#e2e8f0"}`, color: show && correct ? "#16a34a" : show && selected && !correct ? "#dc2626" : "#374151" }}>
              {val ? "True" : "False"}
            </button>
          );
        })}
      </div>
      {ans != null && <Result correct={ans === q.answer} explanation={q.explanation} />}
      {ans != null && <button onClick={() => setAns(null)} style={{ ...BTN({ padding: "5px 12px", background: "#fff", border: "1px solid #e2e8f0", color: "#64748b", marginTop: 8 }) }}>Reset</button>}
    </div>
  );
}

export function DemoFillBlanks({ col }) {
  const [val, setVal] = useState("");
  const [done, setDone] = useState(false);
  const answer = "prompt";
  const isCorrect = val.trim().toLowerCase() === answer;
  return (
    <div style={CARD}>
      <p style={{ margin: "0 0 12px", fontSize: 13, color: "#64748b" }}>Fill in the blank with the correct word.</p>
      <p style={{ margin: "0 0 14px", fontSize: 15, color: "#0f172a", lineHeight: 1.8, display: "flex", alignItems: "center", flexWrap: "wrap", gap: 6 }}>
        A{" "}
        <span style={{ display: "inline-block" }}>
          <input
            value={done ? val : val}
            onChange={e => { if (!done) setVal(e.target.value); }}
            onKeyDown={e => e.key === "Enter" && val.trim() && setDone(true)}
            placeholder="________"
            style={{ width: 120, padding: "4px 10px", border: `1.5px solid ${done ? isCorrect ? "#16a34a" : "#dc2626" : "#6366f1"}`, borderRadius: 6, fontSize: 15, fontFamily: "inherit", outline: "none", background: done ? isCorrect ? "#f0fdf4" : "#fef2f2" : "#fff", color: done ? isCorrect ? "#16a34a" : "#dc2626" : "#0f172a", textAlign: "center" }}
          />
        </span>
        {" "}is the instruction or question given to an AI tool to guide its response.
      </p>
      {!done && <button onClick={() => val.trim() && setDone(true)} disabled={!val.trim()} style={{ ...BTN({ padding: "7px 16px", background: val.trim() ? col?.accent || "#4f46e5" : "#e2e8f0", color: val.trim() ? "#fff" : "#94a3b8" }) }}>Check</button>}
      {done && <Result correct={isCorrect} explanation={isCorrect ? `"Prompt" is correct!` : `The answer is "prompt" — the instruction you give to an AI tool.`} />}
      {done && <button onClick={() => { setVal(""); setDone(false); }} style={{ ...BTN({ padding: "5px 12px", background: "#fff", border: "1px solid #e2e8f0", color: "#64748b", marginTop: 8 }) }}>Reset</button>}
    </div>
  );
}

export function DemoCompleteTable({ col }) {
  const [vals, setVals] = useState({ b: "", d: "" });
  const [done, setDone] = useState(false);
  const answers = { b: "hallucination", d: "responsible" };
  const check = k => vals[k].trim().toLowerCase().includes(answers[k]);
  return (
    <div style={CARD}>
      <p style={{ margin: "0 0 12px", fontSize: 13, color: "#64748b" }}>Complete the missing cells in the table.</p>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr style={{ background: "#f1f5f9" }}>
            <th style={{ padding: "8px 12px", textAlign: "left", fontWeight: 600, color: "#374151", border: "1px solid #e2e8f0" }}>Term</th>
            <th style={{ padding: "8px 12px", textAlign: "left", fontWeight: 600, color: "#374151", border: "1px solid #e2e8f0" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Prompt", "An instruction or question given to an AI tool", null],
            [null, "When AI produces information that sounds real but is false", "b"],
            ["Bias", "Unfair patterns in AI outputs due to training data", null],
            [null, "Using AI safely, ethically, and with human judgement", "d"],
          ].map(([term, desc, blankKey], i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
              <td style={{ padding: "8px 12px", border: "1px solid #e2e8f0", color: "#374151" }}>
                {term || (
                  <input value={vals[blankKey]} onChange={e => setVals(v => ({ ...v, [blankKey]: e.target.value }))}
                    disabled={done}
                    style={{ width: "100%", padding: "4px 8px", border: `1px solid ${done ? check(blankKey) ? "#16a34a" : "#dc2626" : "#6366f1"}`, borderRadius: 5, fontSize: 13, fontFamily: "inherit", outline: "none", background: done ? check(blankKey) ? "#f0fdf4" : "#fef2f2" : "#fff", color: done ? check(blankKey) ? "#16a34a" : "#dc2626" : "#0f172a" }}
                    placeholder="Type term…"
                  />
                )}
              </td>
              <td style={{ padding: "8px 12px", border: "1px solid #e2e8f0", color: "#64748b" }}>{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!done && <button onClick={() => setDone(true)} style={{ ...BTN({ padding: "7px 16px", background: col?.accent || "#4f46e5", color: "#fff", marginTop: 10 }) }}>Check answers</button>}
      {done && (
        <div style={{ marginTop: 10, padding: "9px 12px", borderRadius: 8, background: "#f0fdf4" }}>
          <p style={{ margin: 0, fontSize: 13, color: "#374151" }}>
            Answers: <strong>hallucination</strong> (AI producing false info) · <strong>responsible</strong> (responsible AI use)
          </p>
        </div>
      )}
      {done && <button onClick={() => { setVals({ b: "", d: "" }); setDone(false); }} style={{ ...BTN({ padding: "5px 12px", background: "#fff", border: "1px solid #e2e8f0", color: "#64748b", marginTop: 8 }) }}>Reset</button>}
    </div>
  );
}

export function DemoMatching({ col }) {
  const [leftSel, setLeftSel] = useState(null);
  const [matches, setMatches] = useState({});
  const [done, setDone] = useState(false);
  const pairs = [
    { left: "Hallucination", right: "AI producing false information" },
    { left: "Prompt", right: "Instruction given to AI" },
    { left: "Generative AI", right: "AI that creates new content" },
    { left: "Bias", right: "Unfair patterns in AI outputs" },
  ];
  const matchedRights = Object.values(matches);

  const clickLeft = (i) => { if (done) return; setLeftSel(leftSel === i ? null : i); };
  const clickRight = (j) => {
    if (done || leftSel == null) return;
    setMatches(m => ({ ...m, [leftSel]: j }));
    setLeftSel(null);
  };

  const allDone = Object.keys(matches).length === pairs.length;
  const allCorrect = pairs.every((_, i) => matches[i] === i);

  return (
    <div style={CARD}>
      <p style={{ margin: "0 0 4px", fontSize: 13, color: "#64748b" }}>Click a term on the left, then click its matching definition on the right.</p>
      <p style={{ margin: "0 0 12px", fontSize: 11, color: "#94a3b8" }}>{leftSel != null ? `"${pairs[leftSel].left}" selected — now click a definition` : "Click a term to start"}</p>
      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
          {pairs.map((p, i) => {
            const matched = matches[i] != null;
            const correct = done && matches[i] === i;
            const wrong = done && matched && matches[i] !== i;
            return (
              <button key={i} onClick={() => clickLeft(i)}
                style={{ ...BTN({ padding: "9px 12px", textAlign: "left", fontSize: 13, cursor: done ? "default" : "pointer" }), background: correct ? "#f0fdf4" : wrong ? "#fef2f2" : leftSel === i ? (col?.light || "#eef2ff") : matched ? "#f8fafc" : "#fff", border: `1.5px solid ${correct ? "#16a34a" : wrong ? "#dc2626" : leftSel === i ? (col?.accent || "#4f46e5") : matched ? "#94a3b8" : "#e2e8f0"}`, color: "#0f172a" }}>
                {p.left}
              </button>
            );
          })}
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
          {pairs.map((p, j) => {
            const isMatched = matchedRights.includes(j);
            const matchedBy = Object.entries(matches).find(([, v]) => v === j)?.[0];
            const correct = done && matchedBy != null && parseInt(matchedBy) === j;
            const wrong = done && isMatched && !correct;
            return (
              <button key={j} onClick={() => clickRight(j)}
                style={{ ...BTN({ padding: "9px 12px", textAlign: "left", fontSize: 13, cursor: done || leftSel == null ? "default" : "pointer" }), background: correct ? "#f0fdf4" : wrong ? "#fef2f2" : isMatched ? "#f8fafc" : leftSel != null ? (col?.light || "#eef2ff") : "#fff", border: `1.5px solid ${correct ? "#16a34a" : wrong ? "#dc2626" : isMatched ? "#94a3b8" : leftSel != null ? (col?.accent || "#4f46e5") : "#e2e8f0"}`, color: "#374151", opacity: isMatched && leftSel != null && !done ? 0.5 : 1 }}>
                {p.right}
              </button>
            );
          })}
        </div>
      </div>
      {allDone && !done && <button onClick={() => setDone(true)} style={{ ...BTN({ padding: "7px 16px", background: col?.accent || "#4f46e5", color: "#fff", marginTop: 10 }) }}>Check matches</button>}
      {done && <Result correct={allCorrect} explanation={allCorrect ? "All matches correct!" : "Some matches are off. Each term has exactly one correct definition."} />}
      {done && <button onClick={() => { setMatches({}); setLeftSel(null); setDone(false); }} style={{ ...BTN({ padding: "5px 12px", background: "#fff", border: "1px solid #e2e8f0", color: "#64748b", marginTop: 8 }) }}>Reset</button>}
    </div>
  );
}

export function DemoShortAnswer({ col }) {
  const [val, setVal] = useState("");
  const [done, setDone] = useState(false);
  return (
    <div style={CARD}>
      <p style={{ margin: "0 0 12px", fontSize: 14, color: "#0f172a", fontWeight: 500, lineHeight: 1.65 }}>
        In your own words: what is one benefit and one risk of using AI at work?
      </p>
      <textarea value={val} onChange={e => !done && setVal(e.target.value)} rows={3} placeholder="Write your answer here…"
        style={{ width: "100%", padding: "9px 12px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 13, fontFamily: "inherit", resize: "vertical", outline: "none", background: done ? "#f8fafc" : "#fff", color: "#374151", boxSizing: "border-box" }} />
      {!done && <button onClick={() => val.trim().length >= 20 && setDone(true)} disabled={val.trim().length < 20}
        style={{ ...BTN({ padding: "7px 16px", background: val.trim().length >= 20 ? col?.accent || "#4f46e5" : "#e2e8f0", color: val.trim().length >= 20 ? "#fff" : "#94a3b8", marginTop: 8 }) }}>
        Submit
      </button>}
      {done && (
        <div style={{ marginTop: 10, padding: "9px 12px", borderRadius: 8, background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
          <p style={{ margin: 0, fontSize: 13, color: "#16a34a" }}>✓ Response submitted. Short answer questions are reviewed for understanding — there's no single correct answer here.</p>
        </div>
      )}
    </div>
  );
}

export function DemoReflectionBox({ col }) {
  const [val, setVal] = useState("");
  const [done, setDone] = useState(false);
  const wordCount = val.trim() ? val.trim().split(/\s+/).length : 0;
  const target = 40;
  const progress = Math.min((wordCount / target) * 100, 100);
  return (
    <div style={CARD}>
      <p style={{ margin: "0 0 12px", fontSize: 14, color: "#0f172a", fontWeight: 500, lineHeight: 1.65 }}>
        Reflect: Describe a time when you had to make a decision without complete information. What did you do?
      </p>
      <textarea value={val} onChange={e => !done && setVal(e.target.value)} rows={4} placeholder="Write your reflection here — aim for at least 40 words…"
        style={{ width: "100%", padding: "9px 12px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 13, fontFamily: "inherit", resize: "vertical", outline: "none", background: "#fff", color: "#374151", boxSizing: "border-box" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 6 }}>
        <div style={{ flex: 1, height: 4, background: "#e2e8f0", borderRadius: 4, overflow: "hidden" }}>
          <div style={{ width: `${progress}%`, height: "100%", background: progress === 100 ? "#16a34a" : col?.accent || "#4f46e5", borderRadius: 4, transition: "width .3s" }} />
        </div>
        <span style={{ fontSize: 11, color: wordCount >= target ? "#16a34a" : "#94a3b8", fontWeight: 600, whiteSpace: "nowrap" }}>{wordCount} / {target} words</span>
      </div>
      {!done && <button onClick={() => wordCount >= target && setDone(true)} disabled={wordCount < target}
        style={{ ...BTN({ padding: "7px 16px", background: wordCount >= target ? col?.accent || "#4f46e5" : "#e2e8f0", color: wordCount >= target ? "#fff" : "#94a3b8", marginTop: 8 }) }}>
        Save reflection
      </button>}
      {done && (
        <div style={{ marginTop: 8, padding: "9px 12px", borderRadius: 8, background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
          <p style={{ margin: 0, fontSize: 13, color: "#16a34a" }}>✓ Reflection saved. This is your private journal — it stays in your browser.</p>
        </div>
      )}
    </div>
  );
}

export function DemoPolls({ col }) {
  const [voted, setVoted] = useState(null);
  const baseVotes = [18, 24, 31, 27];
  const total = baseVotes.reduce((a, b) => a + b, 0) + (voted != null ? 1 : 0);
  const opts = [
    "Daily — I already use AI tools regularly",
    "Weekly — a few times a week",
    "Occasionally — I've tried it a few times",
    "Rarely — I'm just getting started",
  ];
  return (
    <div style={CARD}>
      <p style={{ margin: "0 0 14px", fontSize: 14, color: "#0f172a", fontWeight: 500, lineHeight: 1.65 }}>
        How often do you currently use AI tools?
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {opts.map((opt, i) => {
          const votes = baseVotes[i] + (voted === i ? 1 : 0);
          const pct = Math.round((votes / total) * 100);
          return (
            <div key={i}>
              <button onClick={() => setVoted(i)}
                style={{ ...BTN({ width: "100%", padding: "9px 14px", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13, cursor: voted != null ? "default" : "pointer" }), background: voted === i ? (col?.light || "#eef2ff") : "#fff", border: `1.5px solid ${voted === i ? (col?.accent || "#4f46e5") : "#e2e8f0"}`, color: "#374151", marginBottom: 3 }}>
                <span>{opt}</span>
                {voted != null && <span style={{ fontSize: 12, fontWeight: 600, color: col?.accent || "#4f46e5" }}>{pct}%</span>}
              </button>
              {voted != null && (
                <div style={{ height: 4, background: "#e2e8f0", borderRadius: 4, overflow: "hidden", marginBottom: 2 }}>
                  <div style={{ width: `${pct}%`, height: "100%", background: voted === i ? (col?.accent || "#4f46e5") : "#c7d2fe", borderRadius: 4 }} />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {voted != null && <p style={{ margin: "8px 0 0", fontSize: 11, color: "#94a3b8" }}>{total} responses</p>}
    </div>
  );
}

export function DemoTimedQuiz({ col }) {
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [sel, setSel] = useState(null);
  const [done, setDone] = useState(false);
  const timer = useRef(null);
  const q = {
    q: "What does 'hallucination' mean in the context of AI?",
    opts: ["AI becoming self-aware", "AI producing false information that sounds real", "AI refusing to answer a question", "AI running out of computing power"],
    correct: 1,
    explanation: "Hallucination is when AI generates content that sounds plausible but is factually wrong or invented.",
  };

  useEffect(() => {
    if (started && !done) {
      timer.current = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) { clearInterval(timer.current); setDone(true); return 0; }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer.current);
  }, [started, done]);

  const answer = (i) => {
    if (!started || done || sel != null) return;
    setSel(i); setDone(true); clearInterval(timer.current);
  };

  const reset = () => { setStarted(false); setTimeLeft(30); setSel(null); setDone(false); clearInterval(timer.current); };

  const pct = (timeLeft / 30) * 100;
  const timerColor = timeLeft > 15 ? "#16a34a" : timeLeft > 8 ? "#d97706" : "#dc2626";

  return (
    <div style={CARD}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <Clock size={14} color={started && !done ? timerColor : "#94a3b8"} />
        <span style={{ fontSize: 13, fontWeight: 600, color: started && !done ? timerColor : "#94a3b8" }}>
          {started ? `${timeLeft}s remaining` : "30-second timed question"}
        </span>
        {started && (
          <div style={{ flex: 1, height: 4, background: "#e2e8f0", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ width: `${pct}%`, height: "100%", background: timerColor, borderRadius: 4, transition: "width 1s linear" }} />
          </div>
        )}
      </div>
      <p style={{ margin: "0 0 12px", fontSize: 14, color: "#0f172a", fontWeight: 500, lineHeight: 1.6 }}>{q.q}</p>
      {!started ? (
        <button onClick={() => setStarted(true)} style={{ ...BTN({ padding: "10px 20px", background: col?.accent || "#4f46e5", color: "#fff" }) }}>
          Start timer & answer
        </button>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {q.opts.map((opt, i) => {
            const selected = sel === i; const correct = i === q.correct; const show = done;
            return (
              <button key={i} onClick={() => answer(i)} disabled={done}
                style={{ ...BTN({ padding: "9px 14px", textAlign: "left", cursor: done ? "default" : "pointer" }), background: show && correct ? "#f0fdf4" : show && selected && !correct ? "#fef2f2" : selected ? (col?.light || "#eef2ff") : "#fff", border: `1.5px solid ${show && correct ? "#16a34a" : show && selected && !correct ? "#dc2626" : selected ? (col?.accent || "#4f46e5") : "#e2e8f0"}`, color: show && correct ? "#16a34a" : show && selected && !correct ? "#dc2626" : "#374151", display: "flex", justifyContent: "space-between" }}>
                {opt}
                {show && correct && <Check size={13} color="#16a34a" />}
              </button>
            );
          })}
          {done && timeLeft === 0 && !sel && <p style={{ margin: "8px 0 0", fontSize: 13, color: "#dc2626" }}>⏱ Time's up!</p>}
          {done && <Result correct={sel === q.correct} explanation={q.explanation} />}
          {done && <button onClick={reset} style={{ ...BTN({ padding: "5px 12px", background: "#fff", border: "1px solid #e2e8f0", color: "#64748b", marginTop: 8 }) }}>Try again</button>}
        </div>
      )}
    </div>
  );
}

export const ACTIVITY_DEMOS = {
  "Multiple choice":    DemoMCQ,
  "Multiple select":   DemoMultiSelect,
  "True or false":     DemoTrueFalse,
  "Fill in the blanks": DemoFillBlanks,
  "Complete the table": DemoCompleteTable,
  "Matching":          DemoMatching,
  "Short answer":      DemoShortAnswer,
  "Reflection box":    DemoReflectionBox,
  "Polls":             DemoPolls,
  "Timed quiz":        DemoTimedQuiz,
};
