export const site = {
  name: "Xinyu Wang 王新宇",
  handle: "FlashforWater",
  role: "AI Engineer",
  bio: "Math major by training. Spent a year working in Hong Kong before moving into AI, where I now build algorithm systems for a living. Currently going deeper on LLM post-training and reinforcement learning, with a growing interest in embodied intelligence — the parts of AI that feel closest to real reasoning and real action.",
  location: "Beijing, China",

  github: "FlashforWater",
  email: "xinyuwangovo@gmail.com",
  twitter: "",
  linkedin: "",

  resumeUrl: "/resume.pdf",

  focus: [
    { title: "GRPO + LoRA on Qwen2.5-7B", note: "Reproducing DeepSeek-R1 path on GSM8K", progress: 35 },
    { title: "Reading: DeepSeek-R1 paper", note: "Section 3 — RL recipe", progress: 60 },
    { title: "Course: CS336 (Stanford)", note: "Language Modeling from Scratch", progress: 20 },
  ],

  projects: [
    {
      name: "LLM + RL Learning",
      description: "End-to-end reproduction of GRPO post-training on GSM8K with Qwen2.5-7B + LoRA on a single RTX 5090.",
      href: "https://github.com/FlashforWater/llm-rl-learning",
      tags: ["GRPO", "LoRA", "Qwen2.5", "GSM8K"],
    },
    {
      name: "Paper Notes",
      description: "Deep-dive notes on alignment, RL, reasoning and embodied intelligence papers.",
      href: "/notes",
      tags: ["notes", "RL", "embodied"],
    },
  ],
} as const;

export type Site = typeof site;
