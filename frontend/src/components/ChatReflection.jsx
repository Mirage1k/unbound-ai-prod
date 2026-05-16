import { useState, useRef, useEffect } from "react";
import { REFLECTION_DATA } from "../reflectionData";

const ARIA_AVATAR = (
  <div style={{
    width: 36, height: 36, borderRadius: "50%",
    background: "linear-gradient(135deg, #6c3bff 0%, #a78bfa 100%)",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 16, flexShrink: 0, fontWeight: 700, color: "#fff",
    letterSpacing: -0.5,
  }}>A</div>
);

function TypingDots() {
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center", padding: "4px 0" }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          width: 7, height: 7, borderRadius: "50%", background: "#a78bfa",
          animation: "ariaDot 1.2s ease-in-out infinite",
          animationDelay: `${i * 0.2}s`,
        }} />
      ))}
      <style>{`
        @keyframes ariaDot {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

function Bubble({ role, text, isTyping }) {
  const isAria = role === "aria";
  return (
    <div style={{
      display: "flex", gap: 10, alignItems: "flex-start",
      flexDirection: isAria ? "row" : "row-reverse",
      marginBottom: 12,
    }}>
      {isAria && ARIA_AVATAR}
      <div style={{
        maxWidth: "78%", padding: "10px 14px", borderRadius: isAria ? "4px 16px 16px 16px" : "16px 4px 16px 16px",
        background: isAria ? "#1e1b4b" : "#312e81",
        border: isAria ? "1px solid #4338ca" : "1px solid #6c3bff",
        color: "#e0e7ff", fontSize: 14, lineHeight: 1.6,
      }}>
        {isTyping ? <TypingDots /> : text}
      </div>
    </div>
  );
}

export default function ChatReflection({ course, mod, mode = "reflection", discussionLabel }) {
  const data = REFLECTION_DATA[course]?.[mod] || {};
  const { keywords = [], goodResponse = "", hintResponse = "" } = data;

  const getAriaGreeting = () => {
    if (mode === "discussion") {
      return discussionLabel
        ? `Hi, I'm Aria. This is your space to discuss: "${discussionLabel}". Share your thoughts — I'm here to listen and respond.`
        : "Hi, I'm Aria. This is your discussion space. Share your thoughts and I'll respond.";
    }
    return "Hi, I'm Aria — your learning companion. Take a moment to reflect on what you've just learned. Write your thoughts below and I'll give you feedback.";
  };

  const [messages, setMessages] = useState([
    { role: "aria", text: getAriaGreeting() }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [done, setDone] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const evaluate = (text) => {
    if (mode === "discussion") {
      if (text.trim().length < 10) return "Could you share a bit more? I'd love to hear your thoughts!";
      const encouragements = [
        "That's a really thoughtful perspective! What made you think of it that way?",
        "Great point — it's good to think critically about these topics. Is there anything you'd like to explore further?",
        "I appreciate you sharing that. This kind of reflection is exactly what builds lasting awareness.",
        "Interesting take! Everyone comes to this with different experiences, and yours adds real value here.",
        "Well said. Keep that mindset — it's what separates informed people from those who get caught off guard.",
      ];
      return encouragements[Math.floor(Math.random() * encouragements.length)];
    }

    const lower = text.toLowerCase();
    const matched = keywords.filter(k => lower.includes(k));
    if (text.trim().length < 40) {
      return "Can you tell me a bit more? Try to share a specific example or thought — even a sentence or two helps.";
    }
    if (matched.length >= 2) return goodResponse;
    return hintResponse;
  };

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed || typing) return;
    const userMsg = { role: "user", text: trimmed };
    setInput("");
    setMessages(prev => [...prev, userMsg]);
    setTyping(true);

    const delay = 900 + Math.random() * 600;
    setTimeout(() => {
      const reply = evaluate(trimmed);
      setTyping(false);
      setMessages(prev => [...prev, { role: "aria", text: reply }]);
      if (mode === "reflection") setDone(true);
    }, delay);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  return (
    <div style={{
      background: "#0f0c29", border: "1px solid #312e81", borderRadius: 12,
      overflow: "hidden", display: "flex", flexDirection: "column",
    }}>
      {/* Header */}
      <div style={{
        padding: "10px 16px", background: "#1e1b4b",
        borderBottom: "1px solid #312e81",
        display: "flex", alignItems: "center", gap: 10,
      }}>
        {ARIA_AVATAR}
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, color: "#e0e7ff" }}>Aria</div>
          <div style={{ fontSize: 11, color: "#818cf8" }}>AI Learning Companion</div>
        </div>
      </div>

      {/* Messages */}
      <div style={{
        padding: "16px", minHeight: 160, maxHeight: 320, overflowY: "auto",
        display: "flex", flexDirection: "column",
      }}>
        {messages.map((m, i) => (
          <Bubble key={i} role={m.role} text={m.text} />
        ))}
        {typing && <Bubble role="aria" isTyping />}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      {(!done || mode === "discussion") && (
        <div style={{
          padding: "12px 16px", borderTop: "1px solid #312e81",
          display: "flex", gap: 8, alignItems: "flex-end",
        }}>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder={mode === "discussion" ? "Join the discussion…" : "Share your reflection…"}
            rows={2}
            style={{
              flex: 1, background: "#1e1b4b", border: "1px solid #4338ca",
              borderRadius: 8, padding: "8px 12px", color: "#e0e7ff",
              fontSize: 14, resize: "none", fontFamily: "inherit",
              outline: "none",
            }}
          />
          <button
            onClick={send}
            disabled={!input.trim() || typing}
            style={{
              background: input.trim() && !typing ? "#6c3bff" : "#312e81",
              color: "#fff", border: "none", borderRadius: 8,
              padding: "8px 16px", cursor: input.trim() && !typing ? "pointer" : "default",
              fontSize: 14, fontWeight: 600, whiteSpace: "nowrap",
              transition: "background 0.2s",
            }}
          >Send</button>
        </div>
      )}

      {done && mode === "reflection" && (
        <div style={{
          padding: "10px 16px", borderTop: "1px solid #312e81",
          background: "#1e1b4b", color: "#818cf8", fontSize: 13, textAlign: "center",
        }}>
          Reflection complete — Aria has reviewed your response.
        </div>
      )}
    </div>
  );
}
