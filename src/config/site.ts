export const site = {
  name: "Your Name",
  handle: "yourhandle",
  role: "Algorithm Engineer · RAG → LLM Post-training",
  bio: "Algorithm engineer working on RAG, self-learning post-training and reinforcement learning. Building toward LLM alignment and reasoning research.",
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
      description: "Deep-dive notes on alignment, RL and reasoning papers (ReAct, DPO, GRPO, R1, etc.).",
      href: "/notes",
      tags: ["notes", "alignment", "RL"],
    },
    {
      name: "RAG Production System",
      description: "Production retrieval-augmented generation pipeline — current day job.",
      href: "#",
      tags: ["RAG", "production"],
    },
  ],
} as const;

export type Site = typeof site;
