// ============================================================
// data.js  -  Yahan sirf numbers badalne hain (GitHub par Edit karke)
// Pending post ke liye numbers ki jagah null likho.
// Jab numbers aa jayen to null ko number se badal do aur status "Published" kar do.
// ============================================================

const campaign = {
  title: "LinkedIn Content Strategy & Growth",
  subtitle: "Week 5 Campaign Report: AiLif Digital & EchoMind AI",
  lastUpdated: "30 Oct 2026"
};

const brands = [
  {
    name: "AiLif Digital",
    focus: "Enterprise AI for manufacturing",
    audience:
      "Manufacturing professionals, business leaders, technology decision-makers and professionals interested in enterprise AI",
    pillars: ["Education", "Technology", "Industry Insights"]
  },
  {
    name: "EchoMind AI",
    focus: "Practical AI adoption for businesses",
    audience:
      "Business professionals, entrepreneurs, technology decision-makers and organizations interested in practical AI adoption",
    pillars: ["Industry Insights", "Education", "Technology"]
  }
];

const posts = [
  {
    brand: "AiLif Digital",
    no: 1,
    date: "26 Oct 2026",
    topic: "How AI Can Support Predictive Maintenance in Manufacturing",
    pillar: "Education",
    format: "Educational text post",
    status: "Published",
    impressions: 32,
    clicks: 1,
    ctr: 3.13,
    reactions: 1,
    comments: 0,
    reposts: 0,
    engagement: 6.25
  },
  {
    brand: "AiLif Digital",
    no: 2,
    date: "28 Oct 2026",
    topic: "How AI Can Support Better Quality Decisions in Manufacturing",
    pillar: "Technology",
    format: "Educational text post",
    status: "Published",
    impressions: 18,
    clicks: 4,
    ctr: 22.22,
    reactions: 1,
    comments: 0,
    reposts: 0,
    engagement: 27.78
  },
  {
    brand: "AiLif Digital",
    no: 3,
    date: "30 Oct 2026",
    topic: "The Role of AI in the Future of Manufacturing",
    pillar: "Industry Insights",
    format: "Discussion / insight post",
    status: "Published (early data)",
    impressions: 1,
    clicks: 0,
    ctr: 0,
    reactions: 0,
    comments: 0,
    reposts: 0,
    engagement: 0
  },
  {
    brand: "EchoMind AI",
    no: 1,
    date: "27 Oct 2026",
    topic: "How AI Is Changing the Way Businesses Work",
    pillar: "Industry Insights",
    format: "Insight text post",
    status: "Published",
    impressions: 23,
    clicks: 5,
    ctr: 21.74,
    reactions: 2,
    comments: 0,
    reposts: 0,
    engagement: 30.43
  },
  {
    brand: "EchoMind AI",
    no: 2,
    date: "29 Oct 2026",
    topic: "3 Practical Ways Businesses Can Start Using AI",
    pillar: "Education",
    format: "Educational tips post",
    status: "Published",
    impressions: 16,
    clicks: 1,
    ctr: 6.25,
    reactions: 1,
    comments: 0,
    reposts: 0,
    engagement: 12.5
  },
  {
    brand: "EchoMind AI",
    no: 3,
    date: "31 Oct 2026",
    topic: "What Businesses Should Consider Before Adopting AI",
    pillar: "Technology",
    format: "Discussion / educational post",
    status: "Scheduled",
    impressions: null,
    clicks: null,
    ctr: null,
    reactions: null,
    comments: null,
    reposts: null,
    engagement: null
  }
];

const learnings = {
  continue: [
    "Educational posts with a clear business question (EchoMind Post 1 had the best engagement rate, 30.43%).",
    "Short, practical topics on quality management (AiLif Post 2 had the best engagement rate for AiLif, 27.78%).",
    "Ending every post with a clear, easy-to-answer CTA question.",
    "Bold hook and bold CTA line to make the post easy to scan."
  ],
  change: [
    "Reactions are low and comments are 0 on all posts, so CTAs should be even easier to answer (for example, give 2-3 options).",
    "Posts are long. Test shorter versions to see if more people reach the CTA.",
    "Keep posting time consistent and note it, so timing can be compared."
  ],
  test: [
    "AiLif Post 3: new hook and a CTA with options (production, quality, maintenance or something else). Needs more time before judging.",
    "Text post vs. carousel or image post for the same topic.",
    "Question-style hook vs. statement-style hook."
  ]
};

const note =
  "Note: Follower reach is still small, so these numbers are a small sample. Results show early trends only, not final conclusions.";
