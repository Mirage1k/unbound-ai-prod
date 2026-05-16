import { useState, useEffect } from "react";
import { Heart, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { MODS, COURSES } from "../data.js";

const COLORS = {
  ai:      { accent: "#4f46e5", light: "#eef2ff" },
  hygiene: { accent: "#059669", light: "#ecfdf5" },
  scam:    { accent: "#ea580c", light: "#fff7ed" },
};

const SEEDS = {
  "ai-1": [
    { id:"ai-1-a", author:"Nurul Ain", ini:"NA", text:"I never realised how much AI is already in my daily life — Gmail suggestions, YouTube recommendations, autocorrect. This module helped me see it's not whether to use AI but how to use it responsibly.", likes:8, ts:Date.now()-172800000 },
    { id:"ai-1-b", author:"Rajan Kumar", ini:"RK", text:"The hallucination topic hit close to home. I once used an AI-generated statistic in a report without verifying — it was completely made up. Always check before you cite anything AI gives you.", likes:11, ts:Date.now()-86400000 },
  ],
  "ai-2": [
    { id:"ai-2-a", author:"Farah Hana", ini:"FH", text:"I tested the difference between a vague prompt and a detailed one on the same task — the quality difference was huge. Context and tone really do matter a lot more than I expected.", likes:6, ts:Date.now()-259200000 },
    { id:"ai-2-b", author:"Wei Liang", ini:"WL", text:"I work in HR and started using follow-up prompts for job descriptions. Iterating with AI rather than accepting the first draft makes everything so much better. Takes less time too.", likes:9, ts:Date.now()-43200000 },
  ],
  "ai-3": [
    { id:"ai-3-a", author:"Siti Rohani", ini:"SR", text:"I was spending 20 minutes on every client email. Now I draft with AI and spend 5 minutes editing for tone. The time saving is real — but I always make sure it sounds like me, not generic.", likes:14, ts:Date.now()-345600000 },
    { id:"ai-3-b", author:"Arjun S.", ini:"AS", text:"The key insight for me was that AI gives you a starting point, not a finished product. People who treat the output as final are the ones who get into trouble professionally.", likes:7, ts:Date.now()-129600000 },
  ],
  "ai-4": [
    { id:"ai-4-a", author:"Nurul Ain", ini:"NA", text:"The knowledge cutoff point surprised me. I asked ChatGPT about a recent news story and it confidently gave me outdated information. I didn't realise models don't know about recent events.", likes:10, ts:Date.now()-432000000 },
    { id:"ai-4-b", author:"Daniel Lim", ini:"DL", text:"I used AI to repurpose a 30-minute webinar script into social posts, a summary email, and a FAQ document. Took 20 minutes instead of half a day. Content repurposing is genuinely a superpower.", likes:13, ts:Date.now()-216000000 },
  ],
  "hygiene-1": [
    { id:"hyg-1-a", author:"Priya M.", ini:"PM", text:"I went through my phone privacy settings after this lesson and was shocked — apps I haven't used in years still had access to my location and camera. Spent an hour cleaning that up.", likes:17, ts:Date.now()-518400000 },
    { id:"hyg-1-b", author:"Hafiz Z.", ini:"HZ", text:"My digital footprint concept was new to me. I googled myself for the first time and found posts from 10 years ago I had completely forgotten about. Not embarrassing, but a good reminder that things persist.", likes:9, ts:Date.now()-259200000 },
  ],
  "hygiene-2": [
    { id:"hyg-2-a", author:"Mei Ling", ini:"ML", text:"Finally set up a password manager after this module. I had been using the same 3 passwords for everything. It felt risky just typing them out to migrate — eye-opening to see how exposed I was.", likes:22, ts:Date.now()-604800000 },
    { id:"hyg-2-b", author:"Karim A.", ini:"KA", text:"Enabled MFA on my email, bank, and work apps this week. Took 15 minutes total. Can't believe I wasn't doing this already — especially for email since everything else resets through it.", likes:15, ts:Date.now()-172800000 },
  ],
  "hygiene-3": [
    { id:"hyg-3-a", author:"Siti Rohani", ini:"SR", text:"Our team had 6 versions of the same document with names like 'Final', 'Final2', 'FinalFINAL'. After this lesson I proposed a naming convention and everyone adopted it in a week. Huge difference.", likes:19, ts:Date.now()-691200000 },
    { id:"hyg-3-b", author:"Derrick T.", ini:"DT", text:"Inbox zero felt impossible before, but the email hygiene strategies here are practical. Unsubscribed from 40+ newsletters, set up 3 folders, now I can actually find things.", likes:12, ts:Date.now()-345600000 },
  ],
  "hygiene-4": [
    { id:"hyg-4-a", author:"Farah Hana", ini:"FH", text:"The workplace group chat etiquette section was relevant — I had no idea how many messages I was sending at odd hours. I now schedule messages to send during work hours instead of immediately.", likes:8, ts:Date.now()-432000000 },
    { id:"hyg-4-b", author:"Jonathan C.", ini:"JC", text:"I found old political comments on my Facebook from years ago that I'd totally forgotten. Cleaned everything up. Employers really do search for candidates online — I've done it myself as a hiring manager.", likes:16, ts:Date.now()-86400000 },
  ],
  "scam-1": [
    { id:"scam-1-a", author:"Azizi R.", ini:"AR", text:"The social engineering point shifted my thinking. Scammers aren't targeting stupid people — they're targeting emotions like fear, urgency, and trust. That can happen to anyone in a stressful moment.", likes:21, ts:Date.now()-777600000 },
    { id:"scam-1-b", author:"Chloe Ng", ini:"CN", text:"My mum nearly fell for a phone scam last year. She's smart but the 'your account will be suspended' urgency made her panic. After sharing this module with her, she said the Scam Pause Method is exactly what she needed.", likes:18, ts:Date.now()-259200000 },
  ],
  "scam-2": [
    { id:"scam-2-a", author:"Hafiz Z.", ini:"HZ", text:"I received a WhatsApp from a 'friend' asking me to vote for their kid in a contest. Clicked the link before I thought — it asked for my phone number and password. Caught myself, but barely. Always check the URL.", likes:13, ts:Date.now()-864000000 },
    { id:"scam-2-b", author:"Priya M.", ini:"PM", text:"I never thought about QR code risks before this. We scan them everywhere — restaurants, parking, events. Now I always preview the URL before proceeding. Takes 2 seconds and could save a lot.", likes:10, ts:Date.now()-432000000 },
  ],
  "scam-3": [
    { id:"scam-3-a", author:"Rajan Kumar", ini:"RK", text:"Investment scams are everywhere on WhatsApp and Telegram in Malaysia. My rule now: if someone I barely know is sharing a 'can't lose' investment opportunity, that's my signal to ignore and block.", likes:24, ts:Date.now()-950400000 },
    { id:"scam-3-b", author:"Wei Liang", ini:"WL", text:"A friend was almost recruited as a 'remote data entry' worker — turned out to be a mule account operation. He didn't know he'd be committing a crime. This module should be required for everyone job hunting online.", likes:31, ts:Date.now()-518400000 },
  ],
  "scam-4": [
    { id:"scam-4-a", author:"Daniel Lim", ini:"DL", text:"The voice cloning demo examples genuinely scared me. Someone could clone my voice from a 10-second Instagram story and call my parents pretending to be me in an emergency. I've told my family to set up a safe word.", likes:27, ts:Date.now()-1036800000 },
    { id:"scam-4-b", author:"Azizi R.", ini:"AR", text:"After this module I reviewed my bank app, enabled all alerts, set transaction limits, and checked login history. Took 30 minutes and now I have real visibility over my accounts. Everyone should do this.", likes:19, ts:Date.now()-345600000 },
  ],
};

function timeAgo(ts) {
  const diff = Date.now() - ts;
  const m = Math.floor(diff / 60000);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

function initials(name) {
  return name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
}

const AVATAR_COLORS = ["#4f46e5","#059669","#ea580c","#0891b2","#7c3aed","#d97706","#dc2626"];
function avatarColor(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) & 0xffffffff;
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}

function PostCard({ post, onLike, liked }) {
  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replyName, setReplyName] = useState("");
  const [replies, setReplies] = useState(post.replies || []);

  const submitReply = () => {
    if (!replyText.trim()) return;
    const r = {
      id: Date.now() + Math.random(),
      author: replyName.trim() || "Anonymous",
      text: replyText.trim(),
      ts: Date.now(),
    };
    setReplies(prev => [...prev, r]);
    setReplyText("");
    setReplyName("");
    setShowReply(false);
  };

  const ac = avatarColor(post.author);

  return (
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "16px 18px", marginBottom: 10 }}>
      <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: ac, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
          {post.ini || initials(post.author)}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#0f172a" }}>{post.author}</span>
            <span style={{ fontSize: 11, color: "#94a3b8" }}>{timeAgo(post.ts)}</span>
          </div>
          <p style={{ margin: "0 0 10px", fontSize: 14, color: "#374151", lineHeight: 1.65 }}>{post.text}</p>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <button onClick={() => onLike(post.id)} style={{ display: "flex", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", padding: 0, color: liked ? "#e11d48" : "#94a3b8", fontSize: 12, fontFamily: "inherit" }}>
              <Heart size={13} fill={liked ? "#e11d48" : "none"} color={liked ? "#e11d48" : "#94a3b8"} />
              {post.likes + (liked ? 0 : 0)}
            </button>
            <button onClick={() => setShowReply(v => !v)} style={{ display: "flex", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", padding: 0, color: "#94a3b8", fontSize: 12, fontFamily: "inherit" }}>
              <MessageCircle size={13} />
              {replies.length > 0 ? `${replies.length} ${replies.length === 1 ? "reply" : "replies"}` : "Reply"}
            </button>
          </div>
        </div>
      </div>

      {/* Replies */}
      {replies.length > 0 && (
        <div style={{ marginTop: 12, paddingLeft: 46, display: "flex", flexDirection: "column", gap: 8 }}>
          {replies.map(r => (
            <div key={r.id} style={{ background: "#f8fafc", borderRadius: 8, padding: "10px 12px", display: "flex", gap: 8 }}>
              <div style={{ width: 26, height: 26, borderRadius: "50%", background: avatarColor(r.author), color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>
                {initials(r.author)}
              </div>
              <div>
                <div style={{ display: "flex", gap: 6, alignItems: "baseline", marginBottom: 3 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#374151" }}>{r.author}</span>
                  <span style={{ fontSize: 10, color: "#94a3b8" }}>{timeAgo(r.ts)}</span>
                </div>
                <p style={{ margin: 0, fontSize: 13, color: "#374151", lineHeight: 1.55 }}>{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {showReply && (
        <div style={{ marginTop: 10, paddingLeft: 46, display: "flex", flexDirection: "column", gap: 6 }}>
          <input
            placeholder="Your name (optional)"
            value={replyName}
            onChange={e => setReplyName(e.target.value)}
            style={{ padding: "7px 10px", border: "1px solid #e2e8f0", borderRadius: 7, fontSize: 12, fontFamily: "inherit", outline: "none", background: "#f8fafc", color: "#374151" }}
          />
          <div style={{ display: "flex", gap: 6 }}>
            <textarea
              placeholder="Write a reply…"
              value={replyText}
              onChange={e => setReplyText(e.target.value)}
              rows={2}
              style={{ flex: 1, padding: "7px 10px", border: "1px solid #e2e8f0", borderRadius: 7, fontSize: 13, fontFamily: "inherit", resize: "none", outline: "none", background: "#f8fafc", color: "#374151" }}
            />
            <button onClick={submitReply} style={{ padding: "0 14px", borderRadius: 7, border: "none", background: "#4f46e5", color: "#fff", fontWeight: 600, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>
              Reply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ModuleForum({ courseId, modId, forum, setForum }) {
  const key = `${courseId}-${modId}`;
  const [likedPosts, setLikedPosts] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem("unbound_liked") || "[]")); }
    catch { return new Set(); }
  });
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const posts = forum[key] || SEEDS[key] || [];

  const handleLike = (postId) => {
    const liked = new Set(likedPosts);
    const isLiked = liked.has(postId);
    if (isLiked) {
      liked.delete(postId);
    } else {
      liked.add(postId);
    }
    setLikedPosts(liked);
    localStorage.setItem("unbound_liked", JSON.stringify([...liked]));

    setForum(f => {
      const cur = f[key] || SEEDS[key] || [];
      return {
        ...f,
        [key]: cur.map(p => p.id === postId ? { ...p, likes: p.likes + (isLiked ? -1 : 1) } : p)
      };
    });
  };

  const addPost = () => {
    if (!text.trim()) return;
    const author = name.trim() || "Anonymous";
    const post = {
      id: `user-${Date.now()}`,
      author,
      ini: initials(author),
      text: text.trim(),
      likes: 0,
      ts: Date.now(),
      replies: [],
    };
    setForum(f => {
      const cur = f[key] || SEEDS[key] || [];
      return { ...f, [key]: [post, ...cur] };
    });
    setName("");
    setText("");
  };

  useEffect(() => {
    if (!forum[key]) {
      setForum(f => ({ ...f, [key]: SEEDS[key] || [] }));
    }
  }, [key]);

  return (
    <div>
      {/* Add post */}
      <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: "16px", marginBottom: 16 }}>
        <p style={{ margin: "0 0 10px", fontSize: 13, fontWeight: 600, color: "#0f172a" }}>Share your thoughts</p>
        <input
          placeholder="Your name (leave blank for Anonymous)"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ width: "100%", padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 13, fontFamily: "inherit", outline: "none", background: "#fff", color: "#374151", boxSizing: "border-box", marginBottom: 8 }}
        />
        <textarea
          placeholder="What did you learn, or what questions do you have about this module?"
          value={text}
          onChange={e => setText(e.target.value)}
          rows={3}
          style={{ width: "100%", padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 13, fontFamily: "inherit", resize: "vertical", outline: "none", background: "#fff", color: "#374151", boxSizing: "border-box", marginBottom: 8 }}
        />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={addPost}
            disabled={!text.trim()}
            style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: text.trim() ? "#0f172a" : "#e2e8f0", color: text.trim() ? "#fff" : "#94a3b8", fontWeight: 600, fontSize: 13, cursor: text.trim() ? "pointer" : "default", fontFamily: "inherit" }}>
            Post
          </button>
        </div>
      </div>

      {/* Posts */}
      <p style={{ margin: "0 0 10px", fontSize: 12, color: "#94a3b8" }}>{posts.length} {posts.length === 1 ? "post" : "posts"}</p>
      {posts.map(p => (
        <PostCard
          key={p.id}
          post={p}
          liked={likedPosts.has(p.id)}
          onLike={handleLike}
        />
      ))}
    </div>
  );
}

export default function ForumDiscussions({ forum, setForum }) {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", padding: "32px 40px", maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 700, color: "#0f172a" }}>Discussions</h1>
      <p style={{ margin: "0 0 28px", color: "#64748b", fontSize: 14 }}>
        Share your thoughts, ask questions, and learn from other learners. No login required.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {COURSES.map(c => {
          const cl = COLORS[c.id];
          return (
            <div key={c.id}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, paddingBottom: 8, borderBottom: "1px solid #f1f5f9" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: cl.accent }} />
                <h2 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#374151" }}>{c.title}</h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {(MODS[c.id] || []).map(m => {
                  const key = `${c.id}-${m.id}`;
                  const isOpen = open === key;
                  const postCount = (forum[key] || SEEDS[key] || []).length;
                  return (
                    <div key={m.id} style={{ background: "#fff", border: `1px solid ${isOpen ? cl.accent : "#e2e8f0"}`, borderRadius: 12, overflow: "hidden", transition: "border-color .2s" }}>
                      <button
                        onClick={() => setOpen(isOpen ? null : key)}
                        style={{ width: "100%", padding: "13px 16px", border: "none", background: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, fontFamily: "inherit", textAlign: "left" }}>
                        <div style={{ width: 30, height: 30, borderRadius: 8, background: isOpen ? cl.accent : cl.light, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background .2s" }}>
                          <span style={{ fontSize: 12, fontWeight: 700, color: isOpen ? "#fff" : cl.accent }}>M{m.id}</span>
                        </div>
                        <div style={{ flex: 1 }}>
                          <span style={{ fontSize: 13, fontWeight: 600, color: "#0f172a" }}>{m.title}</span>
                          <span style={{ fontSize: 11, color: "#94a3b8", marginLeft: 8 }}>{postCount} posts</span>
                        </div>
                        {isOpen ? <ChevronUp size={14} color="#94a3b8" /> : <ChevronDown size={14} color="#94a3b8" />}
                      </button>
                      {isOpen && (
                        <div style={{ borderTop: "1px solid #f1f5f9", padding: "16px" }}>
                          <ModuleForum courseId={c.id} modId={m.id} forum={forum} setForum={setForum} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
