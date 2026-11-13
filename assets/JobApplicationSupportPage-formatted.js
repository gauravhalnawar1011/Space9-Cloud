import { r as j, j as e } from "./vendor-react-Ux0UbkiD.js";
import {
  N as y,
  s as N,
  g as l,
  f as d,
  H as k,
  F as S,
  B as A,
} from "./index-BuW3eo45.js";
import { m as i } from "./vendor-animation-BmeQzH7S.js";
import {
  ak as C,
  A as c,
  Z as D,
  a4 as p,
  e as J,
  y as b,
  al as R,
  U as T,
  am as m,
  I as h,
  an as z,
  a2 as s,
  H as W,
  a as Y,
  ao as u,
} from "./vendor-lucide-OsCWqxzU.js";
import "./vendor-supabase-2rm18Nxb.js";
function F() {
  const [g, n] = j.useState(!1),
    f = [
      {
        title: "10–15 Targeted Applications Daily",
        desc: "Consistent daily applications tailored specifically to your target roles and preferences.",
        icon: p,
      },
      {
        title: "Job Discovery Based on Skills",
        desc: "Smart matching of jobs that align perfectly with your technical skill set and career goals.",
        icon: J,
      },
      {
        title: "Resume Customized for Every Job",
        desc: "ATS-optimized resume adjustments matching job description keywords for maximum callback rate.",
        icon: b,
      },
      {
        title: "Cover Letter Customization",
        desc: "Personalized cover letters highlighting your exact relevance to each prospective employer.",
        icon: R,
      },
      {
        title: "Human Review Before Submission",
        desc: "Every application is thoroughly inspected by real domain experts to eliminate errors.",
        icon: T,
      },
      {
        title: "Application Tracking & Status Updates",
        desc: "Clear, real-time tracking of every application without complicated spreadsheet upkeep.",
        icon: m,
      },
      {
        title: "Interview Preparation & Support",
        desc: "Role-specific mock interviews, company research, and technical Q&A coaching.",
        icon: h,
      },
      {
        title: "Ongoing Career Guidance",
        desc: "Continuous strategic feedback to optimize response rates and salary negotiations.",
        icon: z,
      },
    ],
    v = [
      {
        number: "01",
        title: "10–15 Applications Every Day",
        subtitle: "More targeted applications. Less time spent searching.",
        description:
          "Our team works on your job search every working day, targeting 10–15 relevant opportunities per day based on your profile and preferences. You don't have to spend hours searching, copying information, or tracking where you applied. We handle the application process. You focus on getting ready for interviews.",
        icon: p,
        image: "/images/Job Ready Program/Job support.png",
        floatingBadges: ["10-15 Daily Apps", "ATS-Optimized", "No Manual Work"],
        tag: "Daily Consistency",
        stat: "10–15",
        statLabel: "Applications Submitted Daily",
      },
      {
        number: "02",
        title: "Your Dedicated Job Application Team",
        subtitle: "Real people working behind your applications.",
        description:
          "Your applications aren't left on autopilot. A dedicated team member helps manage your application workflow, reviews customized documents, monitors application progress, and keeps your job search moving forward. Human support at every important stage.",
        icon: W,
        image: "/images/Job Ready Program/Job Support-1.png",
        floatingBadges: [
          "Dedicated Specialist",
          "Human Audit",
          "No Bots / Spam",
        ],
        tag: "Human Expertise",
        stat: "1-on-1",
        statLabel: "Dedicated Human Support",
      },
      {
        number: "03",
        title: "Interview Support Doesn't Stop After Applying",
        subtitle: "Getting applications out is only the beginning.",
        description:
          "When interview opportunities start coming in, space9 helps you prepare thoroughly to turn interviews into job offers with role-specific technical & behavioral coaching.",
        bullets: [
          "Interview preparation & strategy",
          "Role-specific technical Q&A",
          "Company research & insider tips",
          "Mock interview coaching sessions",
          "Salary negotiation advice",
        ],
        icon: h,
        image: "/images/Job Ready Program/Job Support-2.png",
        floatingBadges: ["Mock Interviews", "Salary Negotiation", "Q&A Prep"],
        tag: "Interview Coaching",
        stat: "88%",
        statLabel: "Interview Call Conversion",
      },
      {
        number: "04",
        title: "Track Your Job Search in One Place",
        subtitle: "Know exactly what's happening with your applications.",
        description:
          "Stay organized with transparent application tracking. Easily see where every application stands without maintaining complicated spreadsheets.",
        pipeline: ["Applied", "In Review", "Interview", "Follow-Up", "Outcome"],
        icon: m,
        image: "/images/Job Ready Program/Job Support-3.png.png",
        floatingBadges: ["Live Pipeline", "Status Alerts", "Zero Spreadsheets"],
        tag: "Live Tracking",
        stat: "24/7",
        statLabel: "Real-Time Pipeline Tracking",
      },
    ],
    x = [
      {
        feature: "Job Finding Effort",
        traditional: "Spend hours searching job boards manually",
        space9: "We find and vet relevant opportunities daily",
      },
      {
        feature: "Resume Strategy",
        traditional: "Apply with the exact same static resume",
        space9: "Resume tailored & ATS-optimized for each role",
      },
      {
        feature: "Cover Letters",
        traditional: "Write repetitive or generic cover letters",
        space9: "Personalized cover letters for every application",
      },
      {
        feature: "Application Consistency",
        traditional: "Apply sporadically when you find free time",
        space9: "10–15 high-quality targeted applications daily",
      },
      {
        feature: "Application Management",
        traditional: "Track everything manually in spreadsheets",
        space9: "Centralized dashboard tracking & status updates",
      },
      {
        feature: "Interview Preparation",
        traditional: "Prepare alone without feedback or guidance",
        space9: "Dedicated 1-on-1 mock interviews & guidance",
      },
      {
        feature: "Resume Optimization",
        traditional: "Guess whether your resume passes ATS filters",
        space9: "Expert resume audit + continuous keyword optimization",
      },
    ],
    w = [
      {
        step: "01",
        title: "Resume Audit",
        desc: "Get a comprehensive expert review and ATS score analysis before applications begin.",
      },
      {
        step: "02",
        title: "Job Discovery",
        desc: "We identify active openings matching your technical expertise and career goals.",
      },
      {
        step: "03",
        title: "Daily Applications",
        desc: "10–15 customized applications submitted on your behalf every single working day.",
      },
      {
        step: "04",
        title: "Resume Customization",
        desc: "Your resume keywords and highlights are tailored to each specific job description.",
      },
      {
        step: "05",
        title: "Application Management",
        desc: "Real-time tracking of submissions, recruiter views, and interview invites.",
      },
      {
        step: "06",
        title: "Interview Support",
        desc: "Comprehensive preparation sessions when interview calls start arriving.",
      },
    ];
  return e.jsxs("div", {
    className:
      "min-h-screen bg-db-bg flex flex-col font-body selection:bg-db-accent selection:text-db-bg",
    children: [
      e.jsx(y, {}),
      e.jsxs("main", {
        className: "flex-grow pt-20",
        children: [
          e.jsxs("section", {
            className:
              "relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-db-bg via-db-bg to-db-surface/20",
            children: [
              e.jsx("div", {
                className:
                  "absolute top-0 right-0 w-[600px] h-[600px] bg-db-accent/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2 translate-x-1/3",
              }),
              e.jsx("div", {
                className:
                  "absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3",
              }),
              e.jsx("div", {
                className: "max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10",
                children: e.jsx("div", {
                  className: "max-w-4xl mx-auto text-center",
                  children: e.jsxs(i.div, {
                    variants: N,
                    initial: "hidden",
                    animate: "visible",
                    className: "space-y-6 flex flex-col items-center",
                    children: [
                      e.jsx(i.div, {
                        variants: d,
                        transition: l,
                        children: e.jsxs("div", {
                          className:
                            "inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-xs font-bold text-slate-800 tracking-wider",
                          children: [
                            e.jsx(C, { className: "w-4 h-4 text-[#7C3AED]" }),
                            e.jsx("span", {
                              children:
                                "AI + Human Associate for Job Application",
                            }),
                          ],
                        }),
                      }),
                      e.jsxs(i.h1, {
                        variants: d,
                        transition: { ...l, delay: 0.1 },
                        className:
                          "text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-slate-900 tracking-tight leading-[1.1]",
                        children: [
                          "Get Hired With Dedicated ",
                          e.jsx("br", { className: "hidden sm:inline" }),
                          e.jsx("span", {
                            className: "text-[#7C3AED]",
                            children: "Job Application Support",
                          }),
                        ],
                      }),
                      e.jsxs(i.p, {
                        variants: d,
                        transition: { ...l, delay: 0.2 },
                        className:
                          "text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed",
                        children: [
                          "space9 helps you find relevant jobs, customize your application for each role, and submit",
                          " ",
                          e.jsx("strong", {
                            className: "text-slate-900 font-bold",
                            children: "10–15 targeted applications every day",
                          }),
                          ", while our team supports you throughout the interview process.",
                        ],
                      }),
                      e.jsx(i.div, {
                        variants: d,
                        transition: { ...l, delay: 0.3 },
                        className: "pt-3",
                        children: e.jsxs("button", {
                          onClick: () => n(!0),
                          className:
                            "px-9 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-xl border-2 border-blue-500 hover:border-blue-400 hover:bg-blue-500/10 text-slate-900 dark:text-white rounded-full text-base font-bold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-2.5 group cursor-pointer",
                          children: [
                            e.jsx("span", {
                              children: "Book a Free 15-Minute Call",
                            }),
                            e.jsx(c, {
                              className:
                                "w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          e.jsx(k, {}),
          e.jsx("section", {
            className:
              "py-16 lg:py-24 bg-db-bg border-t border-white/[0.06] relative",
            children: e.jsx("div", {
              className: "max-w-[1280px] mx-auto px-5 sm:px-8",
              children: e.jsxs("div", {
                className:
                  "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("span", {
                        className:
                          "text-xs font-extrabold uppercase tracking-[0.25em] text-db-accent mb-4 block",
                        children: "End-to-End Service",
                      }),
                      e.jsxs("h2", {
                        className:
                          "text-3xl sm:text-5xl font-display font-bold text-db-text mb-6 tracking-tighter leading-tight",
                        children: [
                          "Your Job Search, ",
                          e.jsx("br", {}),
                          e.jsx("span", {
                            className: "text-db-accent",
                            children: "Managed For You",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className:
                          "text-lg text-db-muted leading-relaxed font-medium mb-6",
                        children: e.jsx("strong", {
                          className: "text-db-text font-bold",
                          children:
                            "You focus on preparing for interviews. We handle the application workload.",
                        }),
                      }),
                      e.jsx("p", {
                        className:
                          "text-base text-db-muted leading-relaxed font-medium",
                        children:
                          "From finding the right opportunities to customizing your resume and submitting applications, space9 provides end-to-end job application support designed around your career goals.",
                      }),
                      e.jsx("div", {
                        className:
                          "mt-8 pt-8 border-t border-white/[0.08] flex items-center gap-6",
                        children: e.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-12 h-12 rounded-xl bg-db-accent/10 border border-db-accent/20 flex items-center justify-center text-db-accent font-bold text-xl",
                              children: "🇺🇸",
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("div", {
                                  className: "text-sm font-bold text-db-text",
                                  children: "United States Coverage",
                                }),
                                e.jsx("div", {
                                  className: "text-xs text-db-muted",
                                  children:
                                    "Supporting tech & non-tech roles across US & Global",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "bg-gradient-to-br from-db-surface/60 to-db-surface/20 border border-db-border/60 rounded-3xl p-8 shadow-2xl relative overflow-hidden group",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute top-0 right-0 w-32 h-32 bg-db-accent/10 rounded-full blur-2xl group-hover:bg-db-accent/20 transition-all",
                      }),
                      e.jsxs("h3", {
                        className:
                          "text-xl font-bold text-db-text mb-6 flex items-center gap-3",
                        children: [
                          e.jsx(D, { className: "w-6 h-6 text-db-accent" }),
                          "What You Get",
                        ],
                      }),
                      e.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                        children: f
                          .slice(0, 6)
                          .map((t, a) =>
                            e.jsxs(
                              "div",
                              {
                                className:
                                  "flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]",
                                children: [
                                  e.jsx(s, {
                                    className:
                                      "w-5 h-5 text-db-accent shrink-0 mt-0.5",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-sm font-semibold text-db-text",
                                    children: t.title,
                                  }),
                                ],
                              },
                              a,
                            ),
                          ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          e.jsx("section", {
            className:
              "py-16 lg:py-24 bg-db-bg border-t border-white/[0.06] relative",
            children: e.jsxs("div", {
              className: "max-w-[1280px] mx-auto px-5 sm:px-8",
              children: [
                e.jsxs("div", {
                  className: "text-center max-w-3xl mx-auto mb-16",
                  children: [
                    e.jsx("span", {
                      className:
                        "text-xs font-extrabold uppercase tracking-[0.25em] text-db-accent mb-4 block",
                      children: "Human-Driven Execution",
                    }),
                    e.jsx("h2", {
                      className:
                        "text-3xl sm:text-5xl font-display font-bold text-db-text tracking-tighter leading-tight mb-4",
                      children: "How space9 Gets You Job-Ready",
                    }),
                    e.jsx("p", {
                      className: "text-lg sm:text-xl font-bold text-db-accent",
                      children:
                        "Real people behind every application. No bots. No bulk spam. No guesswork.",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-db-muted mt-2 font-medium",
                      children: "Supporting careers across 🇺🇸 United States.",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                  children: v.map((t, a) =>
                    e.jsxs(
                      i.div,
                      {
                        initial: { opacity: 0, y: 30 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0 },
                        transition: { duration: 0.5, delay: a * 0.1 },
                        onClick: () => n(!0),
                        className:
                          "bg-gradient-to-br from-[#0B0D14]/95 via-[#0F172A]/90 to-[#1E1B4B]/80 border-2 border-blue-500/70 hover:border-blue-400 p-6 sm:p-8 rounded-3xl backdrop-blur-2xl relative overflow-hidden group hover:scale-[1.01] transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.25)] flex flex-col justify-between cursor-pointer",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute -bottom-16 -right-16 w-72 h-72 bg-gradient-to-br from-blue-500/30 via-indigo-600/20 to-purple-600/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500 pointer-events-none",
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between gap-3 mb-5",
                                children: [
                                  e.jsxs("span", {
                                    className:
                                      "px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/30 to-indigo-600/30 backdrop-blur-md border border-blue-400/50 text-xs font-bold text-white tracking-wide shadow-inner",
                                    children: ["Step ", t.number, " : ", t.tag],
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "w-10 h-10 rounded-full bg-blue-600/20 group-hover:bg-blue-600 border-2 border-blue-400/60 group-hover:border-blue-300 flex items-center justify-center text-white transition-all duration-300 group-hover:rotate-45 shadow-[0_0_15px_rgba(59,130,246,0.4)] shrink-0",
                                    children: e.jsx(Y, {
                                      className: "w-5 h-5",
                                    }),
                                  }),
                                ],
                              }),
                              e.jsx("h3", {
                                className:
                                  "text-2xl font-bold text-white font-display mb-1.5 leading-snug group-hover:text-db-accent transition-colors",
                                children: t.title,
                              }),
                              e.jsx("p", {
                                className:
                                  "text-xs font-bold text-db-accent uppercase tracking-wider mb-4",
                                children: t.subtitle,
                              }),
                              t.image &&
                                e.jsxs("div", {
                                  className: "space-y-3 my-4",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 border-2 border-blue-500/40 group-hover:border-blue-400/80 transition-all duration-300 shadow-xl",
                                      children: e.jsx("img", {
                                        src: t.image,
                                        alt: t.title,
                                        className:
                                          "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                      }),
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "flex flex-wrap items-center gap-2",
                                      children: t.floatingBadges.map((o, r) =>
                                        e.jsxs(
                                          "span",
                                          {
                                            className:
                                              "px-3 py-1 rounded-full bg-gradient-to-r from-blue-900/40 to-slate-900/40 backdrop-blur-md border border-blue-400/40 text-[11px] font-bold text-white/90 flex items-center gap-1.5 shadow-sm",
                                            children: [
                                              e.jsx("span", {
                                                className:
                                                  "w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse",
                                              }),
                                              o,
                                            ],
                                          },
                                          r,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                              e.jsx("p", {
                                className:
                                  "text-sm text-white leading-relaxed font-medium mb-5",
                                children: t.description,
                              }),
                              t.bullets &&
                                e.jsx("div", {
                                  className:
                                    "mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-white/10",
                                  children: t.bullets.map((o, r) =>
                                    e.jsxs(
                                      "div",
                                      {
                                        className:
                                          "flex items-center gap-2 text-xs font-semibold text-white",
                                        children: [
                                          e.jsx(s, {
                                            className:
                                              "w-4 h-4 text-db-accent shrink-0",
                                          }),
                                          e.jsx("span", {
                                            className: "text-white",
                                            children: o,
                                          }),
                                        ],
                                      },
                                      r,
                                    ),
                                  ),
                                }),
                              t.pipeline &&
                                e.jsxs("div", {
                                  className:
                                    "mb-6 pt-4 border-t border-white/10",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "text-[11px] font-extrabold text-white/70 uppercase tracking-wider mb-2.5",
                                      children: "Live Status Pipeline:",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "flex flex-wrap items-center gap-1.5",
                                      children: t.pipeline.map((o, r) =>
                                        e.jsxs(
                                          "div",
                                          {
                                            className:
                                              "flex items-center gap-1.5",
                                            children: [
                                              e.jsx("span", {
                                                className:
                                                  "px-3 py-1 bg-white/10 border border-white/15 rounded-xl text-xs font-bold text-white",
                                                children: o,
                                              }),
                                              r < t.pipeline.length - 1 &&
                                                e.jsx(c, {
                                                  className:
                                                    "w-3.5 h-3.5 text-db-accent shrink-0",
                                                }),
                                            ],
                                          },
                                          r,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "pt-5 border-t border-white/10 flex items-center justify-between",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-2xl font-bold text-white font-display tracking-tight group-hover:text-db-accent transition-colors",
                                    children: t.stat,
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "text-[11px] font-semibold text-white/70 uppercase tracking-wider",
                                    children: t.statLabel,
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-db-accent/30 group-hover:border-db-accent/50 transition-all",
                                children: e.jsx(c, {
                                  className:
                                    "w-5 h-5 group-hover:translate-x-1 transition-transform",
                                }),
                              }),
                            ],
                          }),
                        ],
                      },
                      a,
                    ),
                  ),
                }),
              ],
            }),
          }),
          e.jsx("section", {
            className:
              "py-16 lg:py-24 bg-db-surface/20 border-t border-white/[0.06] relative",
            children: e.jsxs("div", {
              className: "max-w-[1280px] mx-auto px-5 sm:px-8",
              children: [
                e.jsxs("div", {
                  className: "text-center max-w-3xl mx-auto mb-16",
                  children: [
                    e.jsx("span", {
                      className:
                        "text-xs font-extrabold uppercase tracking-[0.25em] text-db-accent mb-4 block",
                      children: "Side-By-Side Comparison",
                    }),
                    e.jsx("h2", {
                      className:
                        "text-3xl sm:text-5xl font-display font-bold text-db-text tracking-tighter leading-tight mb-4",
                      children: "Why Job Seekers Choose space9",
                    }),
                    e.jsx("p", {
                      className:
                        "text-db-muted text-base sm:text-lg font-medium",
                      children:
                        "Compare the manual, stressful traditional job search with our streamlined dedicated support system.",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "hidden md:block bg-db-bg border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl",
                  children: e.jsx("div", {
                    className: "overflow-x-auto",
                    children: e.jsxs("table", {
                      className: "w-full text-left min-w-[700px]",
                      children: [
                        e.jsx("thead", {
                          children: e.jsxs("tr", {
                            className:
                              "border-b border-white/[0.08] bg-white/[0.02]",
                            children: [
                              e.jsx("th", {
                                className:
                                  "py-5 px-6 text-xs font-extrabold uppercase tracking-widest text-db-muted",
                                children: "Job Search Aspect",
                              }),
                              e.jsx("th", {
                                className:
                                  "py-5 px-6 text-xs font-extrabold uppercase tracking-widest text-red-400/90 bg-red-500/5",
                                children: "Traditional Job Search",
                              }),
                              e.jsx("th", {
                                className:
                                  "py-5 px-6 text-xs font-extrabold uppercase tracking-widest text-db-accent bg-db-accent/5",
                                children: "With space9 Support",
                              }),
                            ],
                          }),
                        }),
                        e.jsx("tbody", {
                          className: "divide-y divide-white/[0.06]",
                          children: x.map((t, a) =>
                            e.jsxs(
                              "tr",
                              {
                                className:
                                  "hover:bg-white/[0.01] transition-colors",
                                children: [
                                  e.jsx("td", {
                                    className:
                                      "py-4 px-6 text-sm font-bold text-db-text",
                                    children: t.feature,
                                  }),
                                  e.jsx("td", {
                                    className:
                                      "py-4 px-6 text-sm text-db-muted bg-red-500/[0.02]",
                                    children: e.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        e.jsx(u, {
                                          className:
                                            "w-4 h-4 text-red-400 shrink-0",
                                        }),
                                        e.jsx("span", {
                                          children: t.traditional,
                                        }),
                                      ],
                                    }),
                                  }),
                                  e.jsx("td", {
                                    className:
                                      "py-4 px-6 text-sm font-semibold text-db-text bg-db-accent/[0.02]",
                                    children: e.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        e.jsx(s, {
                                          className:
                                            "w-4 h-4 text-db-accent shrink-0",
                                        }),
                                        e.jsx("span", { children: t.space9 }),
                                      ],
                                    }),
                                  }),
                                ],
                              },
                              a,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
                e.jsx("div", {
                  className: "block md:hidden space-y-4",
                  children: x.map((t, a) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "bg-db-bg border border-white/[0.08] rounded-2xl p-5 shadow-xl space-y-3",
                        children: [
                          e.jsxs("div", {
                            className:
                              "text-sm font-bold text-db-text border-b border-white/[0.06] pb-2.5 flex items-center justify-between",
                            children: [
                              e.jsx("span", { children: t.feature }),
                              e.jsx("span", {
                                className:
                                  "text-[10px] font-extrabold uppercase tracking-wider text-db-accent bg-db-accent/10 px-2.5 py-0.5 rounded-full border border-db-accent/20",
                                children: "Aspect",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "p-3.5 rounded-xl bg-red-500/[0.04] border border-red-500/15 space-y-1.5",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "text-[11px] font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5",
                                children: [
                                  e.jsx(u, {
                                    className: "w-4 h-4 shrink-0 text-red-400",
                                  }),
                                  e.jsx("span", {
                                    children: "Traditional Job Search",
                                  }),
                                ],
                              }),
                              e.jsx("p", {
                                className:
                                  "text-xs text-db-muted font-medium pl-5 leading-relaxed",
                                children: t.traditional,
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "p-3.5 rounded-xl bg-db-accent/[0.06] border border-db-accent/25 space-y-1.5",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "text-[11px] font-bold text-db-accent uppercase tracking-wider flex items-center gap-1.5",
                                children: [
                                  e.jsx(s, {
                                    className:
                                      "w-4 h-4 shrink-0 text-db-accent",
                                  }),
                                  e.jsx("span", {
                                    children: "With space9 Support",
                                  }),
                                ],
                              }),
                              e.jsx("p", {
                                className:
                                  "text-xs font-semibold text-db-text pl-5 leading-relaxed",
                                children: t.space9,
                              }),
                            ],
                          }),
                        ],
                      },
                      a,
                    ),
                  ),
                }),
              ],
            }),
          }),
          e.jsx("section", {
            className:
              "py-16 lg:py-20 bg-db-bg border-t border-white/[0.06] relative",
            children: e.jsx("div", {
              className: "max-w-[1280px] mx-auto px-5 sm:px-8",
              children: e.jsxs("div", {
                className:
                  "bg-gradient-to-r from-db-accent/10 via-purple-500/10 to-db-accent/10 border border-db-accent/30 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden",
                children: [
                  e.jsx("div", {
                    className:
                      "w-16 h-16 rounded-2xl bg-db-accent/20 border border-db-accent/40 flex items-center justify-center text-db-accent mx-auto mb-6",
                    children: e.jsx(b, { className: "w-8 h-8" }),
                  }),
                  e.jsx("h2", {
                    className:
                      "text-2xl sm:text-4xl font-display font-bold text-db-text mb-4 tracking-tight",
                    children: "Your Career Deserves More Than a Generic Resume",
                  }),
                  e.jsx("p", {
                    className:
                      "text-base sm:text-lg text-db-muted max-w-2xl mx-auto font-medium leading-relaxed mb-6",
                    children:
                      "Recruiters don't see your potential first—they see your resume and application. That's why every application should clearly communicate why you are relevant for that specific role.",
                  }),
                  e.jsxs("p", {
                    className: "text-base font-bold text-db-text",
                    children: [
                      "space9 combines ",
                      e.jsx("span", {
                        className: "text-db-accent",
                        children: "AI-powered optimization",
                      }),
                      " with ",
                      e.jsx("span", {
                        className: "text-db-accent",
                        children: "human expertise",
                      }),
                      " to help position your experience more effectively.",
                    ],
                  }),
                ],
              }),
            }),
          }),
          e.jsx("section", {
            className:
              "py-16 lg:py-24 bg-db-surface/20 border-t border-white/[0.06] relative",
            children: e.jsxs("div", {
              className: "max-w-[1280px] mx-auto px-5 sm:px-8",
              children: [
                e.jsxs("div", {
                  className: "text-center max-w-3xl mx-auto mb-16",
                  children: [
                    e.jsx("span", {
                      className:
                        "text-xs font-extrabold uppercase tracking-[0.25em] text-db-accent mb-4 block",
                      children: "Simple 6-Step Workflow",
                    }),
                    e.jsx("h2", {
                      className:
                        "text-3xl sm:text-5xl font-display font-bold text-db-text tracking-tighter leading-tight mb-4",
                      children: "One Service. Your Complete Job Search.",
                    }),
                    e.jsx("p", {
                      className:
                        "text-db-muted text-base sm:text-lg font-medium",
                      children:
                        "From initial Resume Audit to final Interview Support.",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                  children: w.map((t, a) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "bg-db-bg border border-white/[0.08] rounded-2xl p-6 relative group hover:border-db-accent/40 transition-all shadow-md",
                        children: [
                          e.jsx("div", {
                            className:
                              "text-4xl font-display font-black text-db-accent/20 group-hover:text-db-accent/40 transition-colors mb-3",
                            children: t.step,
                          }),
                          e.jsx("h3", {
                            className:
                              "text-xl font-bold text-db-text mb-2 group-hover:text-db-accent transition-colors",
                            children: t.title,
                          }),
                          e.jsx("p", {
                            className:
                              "text-sm text-db-muted leading-relaxed font-medium",
                            children: t.desc,
                          }),
                        ],
                      },
                      a,
                    ),
                  ),
                }),
              ],
            }),
          }),
          e.jsxs("section", {
            className:
              "py-20 lg:py-28 bg-gradient-to-b from-db-bg to-db-surface/40 border-t border-white/[0.06] relative overflow-hidden",
            children: [
              e.jsx("div", {
                className:
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-db-accent/10 rounded-full blur-[150px] pointer-events-none",
              }),
              e.jsx("div", {
                className:
                  "max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10 text-center",
                children: e.jsxs("div", {
                  className: "max-w-3xl mx-auto space-y-6",
                  children: [
                    e.jsx("span", {
                      className:
                        "px-4 py-1.5 rounded-full bg-db-accent/10 border border-db-accent/20 text-xs font-extrabold text-db-accent uppercase tracking-widest",
                      children: "Take The First Step Today",
                    }),
                    e.jsxs("h2", {
                      className:
                        "text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-db-text tracking-tighter leading-tight",
                      children: [
                        "Stop Applying Alone. ",
                        e.jsx("br", {}),
                        e.jsx("span", {
                          className: "text-db-accent",
                          children: "Let space9 Manage Your Job Search.",
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className:
                        "text-base sm:text-lg text-db-muted font-medium leading-relaxed",
                      children:
                        "You shouldn't have to spend your entire day searching for jobs and filling out applications.",
                    }),
                    e.jsxs("div", {
                      className:
                        "grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto text-left py-4",
                      children: [
                        e.jsxs("div", {
                          className:
                            "flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]",
                          children: [
                            e.jsx(s, {
                              className: "w-5 h-5 text-db-accent shrink-0",
                            }),
                            e.jsx("span", {
                              className: "text-sm font-bold text-db-text",
                              children: "We'll find the opportunities",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]",
                          children: [
                            e.jsx(s, {
                              className: "w-5 h-5 text-db-accent shrink-0",
                            }),
                            e.jsx("span", {
                              className: "text-sm font-bold text-db-text",
                              children: "We'll customize your application",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]",
                          children: [
                            e.jsx(s, {
                              className: "w-5 h-5 text-db-accent shrink-0",
                            }),
                            e.jsx("span", {
                              className: "text-sm font-bold text-db-text",
                              children: "We'll submit the applications",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]",
                          children: [
                            e.jsx(s, {
                              className: "w-5 h-5 text-db-accent shrink-0",
                            }),
                            e.jsx("span", {
                              className: "text-sm font-bold text-db-text",
                              children: "We'll help you prepare for interviews",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-lg font-bold text-db-text pt-2",
                      children:
                        "You focus on your career. We focus on getting your applications in front of employers.",
                    }),
                    e.jsx("div", {
                      className: "pt-6",
                      children: e.jsxs("button", {
                        onClick: () => n(!0),
                        className:
                          "px-10 py-5 bg-white/10 dark:bg-white/5 backdrop-blur-xl border-2 border-blue-500 hover:border-blue-400 hover:bg-blue-500/10 text-slate-900 dark:text-white rounded-full text-lg font-bold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 active:scale-95 transition-all inline-flex items-center gap-3 group cursor-pointer",
                        children: [
                          e.jsx("span", {
                            children: "Book Your Free 15-Minute Call",
                          }),
                          e.jsx(c, {
                            className:
                              "w-6 h-6 text-blue-500 group-hover:translate-x-1 transition-transform",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      e.jsx(S, {}),
      e.jsx(A, {
        isOpen: g,
        onClose: () => n(!1),
        defaultCourse: "Job Application Support",
      }),
    ],
  });
}
export { F as JobApplicationSupportPage };
