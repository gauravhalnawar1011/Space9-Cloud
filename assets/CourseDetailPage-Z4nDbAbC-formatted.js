import {
  j as e,
  r as h,
  d as D,
  N as Y,
  L as N,
} from "./vendor-react-Ux0UbkiD.js";
import { a as W, N as S, b as m, F as T, B as C } from "./index-BuW3eo45.js";
import { m as r, A as f } from "./vendor-animation-BmeQzH7S.js";
import {
  H as P,
  ac as E,
  y as R,
  ad as q,
  I as H,
  q as O,
  ae as z,
  A as B,
  a2 as b,
  af as L,
  ag as M,
  ah as F,
  ai as I,
  $ as _,
} from "./vendor-lucide-OsCWqxzU.js";
import "./vendor-supabase-2rm18Nxb.js";
const G = [
    {
      title: "Live 1-on-1 Personalized Training",
      description:
        "Get expert-led sessions tailored to your learning style, pace, and career goals.",
      icon: P,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Industry Tools Implementation",
      description:
        "Work with practical tools and platforms used by professionals in real-world roles.",
      icon: E,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Job-Oriented Curriculum",
      description:
        "Learn through a career-focused curriculum designed to build employable skills, not just academic knowledge.",
      icon: R,
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "Globally Recognized Certifications",
      description:
        "We provide complete support to clear any 2 globally recognized certifications like AWS, Azure, CompTIA etc.",
      icon: q,
      color: "from-orange-500/20 to-amber-500/20",
    },
    {
      title: "3 Months Job Application Support",
      description:
        "We handle job applications with a proven strategy- applying, tracking, and optimizing to land more interviews.",
      icon: H,
      color: "from-rose-500/20 to-red-500/20",
    },
    {
      title: "Resume, LinkedIn & Interview Preparation",
      description:
        "We help you stand out with a ATS resume, optimized LinkedIn, and interview coaching.",
      icon: O,
      color: "from-indigo-500/20 to-violet-500/20",
    },
  ],
  U = () => {
    const o = G;
    return e.jsx("section", {
      className: "pt-8 pb-16 bg-db-bg overflow-hidden relative",
      children: e.jsxs("div", {
        className: "max-w-7xl mx-auto px-5 sm:px-10 relative z-10",
        children: [
          e.jsxs(r.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            className: "text-center mb-12",
            children: [
              e.jsxs("div", {
                className: "flex-1 space-y-6 lg:space-y-10",
                children: [
                  e.jsx("span", {
                    className:
                      "text-[11px] font-bold tracking-[0.2em] uppercase text-db-accent mb-4 block underline underline-offset-8 decoration-db-accent/30",
                    children: "Program Benefits",
                  }),
                  e.jsxs("h2", {
                    className:
                      "text-4xl md:text-5xl lg:text-6xl font-display font-bold text-db-text leading-tight tracking-tighter",
                    children: [
                      "Everything you need to ",
                      e.jsx("span", {
                        className: "text-db-muted/20 italic",
                        children: "Succeed",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("p", {
                className:
                  "text-db-muted text-base sm:text-lg lg:text-xl max-w-3xl mx-auto font-medium leading-relaxed mt-6 lg:mt-8",
                children:
                  "Not just another course. A complete career transition program designed to turn beginners into highly-skilled security professionals.",
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8",
            children: o.map((t, n) =>
              e.jsxs(
                r.div,
                {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: {
                    delay: n * 0.1,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  className:
                    "group relative flex flex-col p-5 sm:p-8 lg:p-10 rounded-2xl lg:rounded-[2rem] border border-db-border/40 bg-gradient-to-br from-db-surface/40 to-db-bg/50 backdrop-blur-xl hover:border-db-accent/40 transition-all duration-500 hover:shadow-[0_40px_80px_-30px_rgba(45,212,191,0.15)]",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 text-2xl sm:text-3xl lg:text-4xl font-bold text-white/5 group-hover:text-db-accent/10 transition-colors duration-500",
                      children: String(n + 1).padStart(2, "0"),
                    }),
                    e.jsx("div", {
                      className: `w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-br ${t.color} border border-white/5 flex items-center justify-center text-db-accent mb-4 sm:mb-8 lg:mb-10 group-hover:scale-110 group-hover:shadow-[0_20px_40px_-10px_rgba(45,212,191,0.3)] transition-all duration-500 shadow-xl`,
                      children: e.jsx(t.icon, {
                        className: "w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9",
                      }),
                    }),
                    e.jsxs("div", {
                      className: "flex-1",
                      children: [
                        e.jsx("h3", {
                          className:
                            "text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-db-text mb-2 sm:mb-4 leading-tight group-hover:text-db-accent transition-colors duration-300",
                          children: t.title,
                        }),
                        e.jsx("p", {
                          className:
                            "text-db-muted leading-relaxed font-semibold text-[11px] sm:text-sm md:text-base",
                          children: t.description,
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "mt-6 lg:mt-10 h-1 w-0 bg-db-accent/40 rounded-full group-hover:w-full transition-all duration-700",
                    }),
                  ],
                },
                n,
              ),
            ),
          }),
        ],
      }),
    });
  },
  J = ({ projects: o, courseId: t }) => {
    const n = h.useRef(null),
      c = (a) => {
        if (n.current) {
          const { scrollLeft: l, clientWidth: u } = n.current,
            p = a === "left" ? l - u * 0.8 : l + u * 0.8;
          n.current.scrollTo({ left: p, behavior: "smooth" });
        }
      };
    return !o || o.length === 0
      ? null
      : e.jsx("section", {
          className: "pt-8 pb-24 bg-db-bg overflow-hidden relative",
          children: e.jsxs("div", {
            className: "container mx-auto px-6",
            children: [
              e.jsxs("div", {
                className:
                  "flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-10",
                children: [
                  e.jsxs("div", {
                    className: "max-w-3xl",
                    children: [
                      e.jsxs("span", {
                        className:
                          "inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-db-accent mb-6 leading-none",
                        children: [
                          e.jsx("span", {
                            className:
                              "w-1.5 h-1.5 rounded-full bg-db-accent animate-pulse",
                          }),
                          " Industrial Expertise",
                        ],
                      }),
                      e.jsxs("h2", {
                        className:
                          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-db-text mb-6 lg:mb-8 tracking-tighter leading-tight",
                        children: [
                          t.toUpperCase(),
                          " ",
                          e.jsx("span", {
                            className: "text-db-muted/30 italic",
                            children: "Real-Time Projects",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className:
                          "text-db-muted text-base lg:text-xl font-medium leading-relaxed",
                        children:
                          "Master industrial grade projects designed and reviewed by top security professionals. Real-world scenarios with zero hand-holding.",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                      e.jsx("button", {
                        onClick: () => c("left"),
                        className:
                          "w-14 h-14 rounded-full border border-db-border/40 flex items-center justify-center text-db-text hover:bg-db-accent/20 hover:text-db-accent hover:border-db-accent/40 transition-all duration-500 shadow-xl",
                        "aria-label": "Scroll Left",
                        children: e.jsx(z, { size: 24 }),
                      }),
                      e.jsx("button", {
                        onClick: () => c("right"),
                        className:
                          "w-14 h-14 rounded-full border border-db-border/40 flex items-center justify-center text-db-text hover:bg-db-accent/20 hover:text-db-accent hover:border-db-accent/40 transition-all duration-500 shadow-xl",
                        "aria-label": "Scroll Right",
                        children: e.jsx(B, { size: 24 }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                ref: n,
                className:
                  "flex overflow-x-auto pb-12 gap-6 no-scrollbar snap-x snap-mandatory scroll-smooth px-2",
                children: o.map((a, l) => {
                  var p;
                  const u = a.icon;
                  return e.jsxs(
                    r.div,
                    {
                      initial: { opacity: 0, x: 50 },
                      whileInView: { opacity: 1, x: 0 },
                      viewport: { once: !0 },
                      transition: {
                        delay: l * 0.1,
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      },
                      className:
                        "min-w-[280px] sm:min-w-[440px] snap-center relative h-auto min-h-[460px] sm:min-h-[520px] rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 flex flex-col bg-db-surface/40 border border-slate-200 shadow-sm transition-all duration-300",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute top-10 right-10 text-db-accent/20",
                          children: u && e.jsx(u, { size: 48 }),
                        }),
                        e.jsxs("div", {
                          className: "mt-12 flex-grow",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-3 mb-6",
                              children: [
                                e.jsxs("span", {
                                  className:
                                    "text-[9px] font-bold uppercase tracking-widest text-slate-500 px-2 py-0.5 border border-slate-300 rounded-full",
                                  children: ["Project ", l + 1],
                                }),
                                e.jsx("span", {
                                  className:
                                    "w-2 h-2 rounded-full bg-db-accent",
                                }),
                              ],
                            }),
                            e.jsx("h3", {
                              className:
                                "text-2xl sm:text-3xl font-bold text-db-text mb-4 sm:mb-6 leading-tight transition-colors duration-500",
                              children: a.title,
                            }),
                            e.jsx("p", {
                              className:
                                "text-db-muted text-base sm:text-lg font-semibold leading-relaxed mb-6 sm:mb-10 overflow-hidden line-clamp-4",
                              children: a.description,
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            e.jsx("div", {
                              className: "h-[1px] w-full bg-db-border/20",
                            }),
                            e.jsx("div", {
                              className: "flex flex-wrap gap-2",
                              children:
                                (p = a.tech) == null
                                  ? void 0
                                  : p.map((w, g) =>
                                      e.jsx(
                                        "span",
                                        {
                                          className:
                                            "text-[9px] font-bold text-slate-600 uppercase tracking-tighter px-2.5 py-1 bg-white rounded-xl border border-slate-200 transition-all duration-300",
                                          children: w,
                                        },
                                        g,
                                      ),
                                    ),
                            }),
                          ],
                        }),
                      ],
                    },
                    l,
                  );
                }),
              }),
            ],
          }),
        });
  },
  $ = "/assets/certficate-8BTQGTDA.jpeg";
function V() {
  return e.jsxs("section", {
    className: "py-16 lg:py-24 bg-db-bg overflow-hidden relative",
    id: "certificate",
    children: [
      e.jsx("div", {
        className:
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-db-accent/10 rounded-full blur-[120px] md:blur-[150px] -z-10 animate-pulse",
      }),
      e.jsx("div", {
        className: "max-w-7xl mx-auto px-5 sm:px-10",
        children: e.jsxs("div", {
          className: "flex flex-col lg:flex-row items-center gap-12 lg:gap-24",
          children: [
            e.jsxs(r.div, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              className:
                "flex-1 space-y-6 lg:space-y-8 text-center lg:text-left z-10",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("span", {
                      className:
                        "text-[11px] font-bold tracking-[0.2em] uppercase text-db-accent mb-2 lg:mb-4 inline-block underline underline-offset-8 decoration-db-accent/30",
                      children: "Official Recognition",
                    }),
                    e.jsxs("h2", {
                      className:
                        "text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-db-text mt-4 mb-4 lg:mb-6 leading-tight tracking-tighter",
                      children: [
                        "Earn Your Professional ",
                        e.jsx("span", {
                          className: "text-db-accent",
                          children: "Certificate",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "flex items-center gap-3 mb-6 justify-center lg:justify-start",
                      children: [
                        e.jsx("div", {
                          className: "h-[1px] w-8 bg-db-accent/30",
                        }),
                        e.jsx("span", {
                          className:
                            "text-db-accent font-bold tracking-[0.15em] uppercase text-[10px] sm:text-xs",
                          children: "With Industry Recognition",
                        }),
                        e.jsx("div", {
                          className: "h-[1px] w-8 bg-db-accent/30",
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className:
                        "text-db-muted text-sm sm:text-base lg:text-lg tracking-wide leading-relaxed max-w-2xl mx-auto lg:mx-0",
                      children:
                        "Receive an official space9 Course Completion Certificate after successfully finishing the program, validating your skills as a job-ready professional.",
                    }),
                  ],
                }),
                e.jsx("ul", {
                  className:
                    "grid grid-cols-2 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-6 pt-4",
                  children: [
                    { icon: b, text: "LinkedIn Shareable" },
                    { icon: b, text: "Digital Copy" },
                    { icon: L, text: "Global Recognition" },
                    { icon: q, text: "Career Milestone" },
                  ].map((o, t) =>
                    e.jsxs(
                      "li",
                      {
                        className:
                          "flex flex-col sm:flex-row items-center sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-db-surface/20 border border-db-border/20 backdrop-blur-sm group hover:border-db-accent/30 transition-all duration-300 text-center sm:text-left",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-colors shrink-0 bg-db-accent/10 border border-db-accent/20 text-db-accent group-hover:bg-db-accent group-hover:text-db-bg",
                            children: e.jsx(o.icon, {
                              size: 18,
                              className: "sm:w-5 sm:h-5",
                            }),
                          }),
                          e.jsx("span", {
                            className:
                              "text-db-text font-medium tracking-tight sm:tracking-wide text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight",
                            children: o.text,
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
            e.jsxs(r.div, {
              initial: { opacity: 0, scale: 0.95 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: !0 },
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              className: "flex-1 w-full relative group",
              children: [
                e.jsxs("div", {
                  className:
                    "relative aspect-[1.4/1] w-full max-w-2xl mx-auto bg-db-surface/30 backdrop-blur-xl border border-db-border/40 rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl shadow-black/40 group-hover:shadow-db-accent/20 transition-all duration-700",
                  children: [
                    e.jsx("img", {
                      src: $,
                      alt: "Professional Certificate",
                      className:
                        "w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-[1.02]",
                    }),
                    e.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-br from-db-accent/10 via-transparent to-db-gold/5 pointer-events-none",
                    }),
                    e.jsx("div", {
                      className:
                        "absolute bottom-6 right-6 lg:bottom-10 lg:right-10 w-12 h-12 lg:w-20 lg:h-20 bg-gradient-to-br from-db-gold via-db-accent to-db-gold rounded-full opacity-10 blur-xl group-hover:opacity-30 transition-opacity pointer-events-none",
                    }),
                  ],
                }),
                e.jsxs(r.div, {
                  animate: { y: [0, -10, 0] },
                  transition: { duration: 4, repeat: 1 / 0, ease: "easeInOut" },
                  className:
                    "absolute -top-4 -right-2 md:-right-4 bg-db-surface border border-db-border/40 p-2 lg:p-4 rounded-xl lg:rounded-2xl shadow-xl backdrop-blur-xl flex items-center gap-2 lg:gap-4 group-hover:border-db-accent/30 transition-all duration-500 z-20",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-teal-500/10 flex items-center justify-center",
                      children: e.jsx(b, {
                        className: "w-5 h-5 lg:w-6 lg:h-6 text-teal-400",
                      }),
                    }),
                    e.jsxs("div", {
                      className: "pr-2",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-[10px] lg:text-xs font-bold text-db-text whitespace-nowrap",
                          children: "Verified Badge",
                        }),
                        e.jsx("p", {
                          className: "text-[8px] lg:text-[10px] text-db-muted",
                          children: "Blockchain Secured",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Q({ items: o }) {
  const n = o || [
      "SOC Analyst Training",
      "Real-World Projects",
      "Job Ready Program",
      "1:1 Career Support",
      "Live Mentorship",
      "Infrastructure Mastery",
      "Global Recognition",
      "Enterprise Security",
    ],
    c = [...n, ...n, ...n];
  return e.jsx("section", {
    className:
      "py-12 bg-db-surface/30 overflow-hidden border-y border-db-border/40 relative",
    children: e.jsx("div", {
      className: "flex relative overflow-hidden",
      children: e.jsx(r.div, {
        initial: { x: "-33.333%" },
        animate: { x: "0%" },
        transition: { repeat: 1 / 0, duration: 18, ease: "linear" },
        className: "flex whitespace-nowrap items-center gap-12 sm:gap-24",
        children: c.map((a, l) =>
          e.jsxs(
            "div",
            {
              className: "flex items-center gap-6",
              children: [
                e.jsx("span", {
                  className:
                    "text-xl md:text-3xl font-display font-bold tracking-[0.1em] text-db-accent/40 uppercase",
                  children: a,
                }),
                e.jsx("div", {
                  className: "w-2 h-2 rounded-full bg-db-accent/20",
                }),
              ],
            },
            l,
          ),
        ),
      }),
    }),
  });
}
function K({ faqItems: o }) {
  const [t, n] = h.useState(0);
  return e.jsx("section", {
    className: "py-16 sm:py-24 bg-db-bg overflow-hidden",
    children: e.jsxs("div", {
      className: "max-w-4xl mx-auto px-5 sm:px-10",
      children: [
        e.jsxs(r.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          className: "text-center mb-16",
          children: [
            e.jsx("h2", {
              className:
                "text-3xl md:text-5xl lg:text-6xl font-display font-bold text-db-text mb-6 tracking-tighter leading-tight",
              children: "Frequently Asked Questions",
            }),
            e.jsx("p", {
              className:
                "text-db-muted text-base lg:text-xl font-medium max-w-2xl mx-auto",
              children:
                "Everything you need to know about starting your journey with us.",
            }),
          ],
        }),
        e.jsx("div", {
          className: "space-y-4",
          children: o.map((c, a) =>
            e.jsxs(
              r.div,
              {
                initial: { opacity: 0, y: 10 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { delay: a * 0.05 },
                className: "group",
                children: [
                  e.jsxs("button", {
                    onClick: () => n(t === a ? null : a),
                    className: `w-full flex items-center justify-between p-4 sm:p-6 rounded-2xl border transition-all duration-300 text-left ${t === a ? "bg-db-surface border-db-accent/30 shadow-[0_10px_30px_-10px_rgba(45,212,191,0.1)]" : "bg-db-surface/50 border-db-border/40 hover:border-db-accent/20"}`,
                    children: [
                      e.jsx("span", {
                        className: `text-sm sm:text-lg font-bold transition-colors duration-300 ${t === a ? "text-db-accent" : "text-db-text/90"}`,
                        children: c.question,
                      }),
                      e.jsx("div", {
                        className: `w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${t === a ? "bg-db-accent/10 text-db-accent rotate-180" : "bg-db-bg text-db-muted"}`,
                        children:
                          t === a
                            ? e.jsx(M, { size: 18 })
                            : e.jsx(F, { size: 18 }),
                      }),
                    ],
                  }),
                  e.jsx(f, {
                    children:
                      t === a &&
                      e.jsx(r.div, {
                        initial: { height: 0, opacity: 0 },
                        animate: { height: "auto", opacity: 1 },
                        exit: { height: 0, opacity: 0 },
                        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                        className: "overflow-hidden",
                        children: e.jsx("div", {
                          className:
                            "p-5 sm:p-8 pb-6 sm:pb-10 text-db-muted/90 text-sm sm:text-base leading-relaxed tracking-wide",
                          children: c.answer,
                        }),
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
  });
}
const X = [
    {
      question: "Do I need prior knowledge?",
      answer:
        "No, most of our programs start from basics and take you to an advanced level. We assume you are starting from scratch.",
    },
    {
      question: "How long is the program?",
      answer:
        "The duration depends on the specific course and batch, typically ranging from 6 to 12 weeks with intensive training sessions.",
    },
    {
      question: "Will I work on real projects?",
      answer:
        "Yes, all our programs include hands-on experience with industry tools and real-world project simulations.",
    },
    {
      question: "Do you provide job support?",
      answer:
        "Yes, we provide comprehensive job application support, including resume building, LinkedIn optimization, and interview preparation.",
    },
  ],
  Z = {
    "jrp-soc": [
      {
        question: "Do I need prior cybersecurity knowledge?",
        answer:
          "No, this program starts from basics and takes you to an advanced level.",
      },
      {
        question: "How long is the program?",
        answer:
          "The duration depends on the batch, typically 8 weeks with intensive training.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, you will work on live SOC scenarios, real SIEM tools, and actual attack simulations.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Absolutely. Even if you're from a non-technical background, you can start.",
      },
    ],
    "jrp-cloud-engineer": [
      {
        question: "Do I need prior cloud knowledge?",
        answer:
          "No, even if you are new to IT, we start from the basics of networking and cloud infrastructure.",
      },
      {
        question: "What cloud platforms will I learn?",
        answer:
          "You will primarily learn AWS and Microsoft Azure, as these are the most in-demand platforms.",
      },
      {
        question: "Will I learn automation?",
        answer:
          "Yes, the program includes Infrastructure as Code (IaC) with Terraform and basics of CI/CD pipelines.",
      },
      {
        question: "Are there real-world projects?",
        answer:
          "Yes, you will deploy live servers, manage databases, and automate cloud infrastructure.",
      },
    ],
    "jrp-cyber-security": [
      {
        question: "Who is this program for?",
        answer:
          "This program is for anyone wanting to build a career in cybersecurity, from freshers to IT professionals.",
      },
      {
        question: "Do I need a coding background?",
        answer:
          "No, cybersecurity requires more logic and understanding of systems than hardcore coding.",
      },
      {
        question: "What tools will I master?",
        answer:
          "You will get hands-on experience with tools like Nmap, Burp Suite, Wireshark, Metasploit, and Nessus.",
      },
      {
        question: "Does this include penetration testing?",
        answer:
          "Yes, the program covers both defensive (SOC) and offensive (VAPT) cybersecurity aspects.",
      },
    ],
    "jrp-it-audit-grc": [
      {
        question: "What is GRC?",
        answer:
          "GRC stands for Governance, Risk, and Compliance. It's about ensuring IT systems are secure, follow laws, and meet industry standards.",
      },
      {
        question: "Do I need technical skills?",
        answer:
          "You don't need to be a programmer. You need a good understanding of IT processes.",
      },
      {
        question: "What frameworks will I learn?",
        answer:
          "You will learn industry-standard frameworks like ISO 27001, NIST, and GDPR.",
      },
      {
        question: "Is there high demand for GRC roles?",
        answer:
          "Yes, with increasing data laws and cyber threats, every major company needs IT Auditors and GRC specialists.",
      },
    ],
    "jrp-project-management": [
      {
        question: "Do I need prior project management knowledge?",
        answer:
          "No, this program starts from basics and takes you to advanced level.",
      },
      {
        question: "How long is the program?",
        answer:
          "The duration depends on the batch, typically 8 weeks with intensive training.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, you will work on live project scenarios and case studies.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Absolutely. Even if you're from a non-technical background, you can start.",
      },
    ],
    "jrp-scrum-master": [
      {
        question: "Do I need prior Agile or Scrum knowledge?",
        answer:
          "No, this program starts from basics and takes you to an advanced level.",
      },
      {
        question: "How long is the program?",
        answer:
          "The duration depends on the batch, typically 8 weeks with intensive training.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, you will work on real Agile projects and sprint simulations.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Absolutely. Even if you're from a non-technical background, you can start.",
      },
    ],
    "jrp-ai-ml": [
      {
        question: "Do I need prior coding knowledge?",
        answer:
          "No, this program starts from basics and takes you to advanced level.",
      },
      {
        question: "How long is the program?",
        answer:
          "The duration depends on the batch, typically 8 weeks with intensive training.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, you will work on real-world datasets and AI-based applications.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Absolutely. Even if you're from a non-technical background, you can start.",
      },
    ],
    "cyber-soc-analyst": [
      {
        question: "Do I need prior cybersecurity knowledge?",
        answer:
          "No, this program starts from basics and takes you to an advanced level.",
      },
      {
        question: "How long is the program?",
        answer:
          "The duration depends on the batch, typically 8-10 weeks with intensive training.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, you will work on real-time attack simulations and SOC scenarios.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Absolutely. Even if you're from a non-technical background, you can start.",
      },
    ],
    "cyber-ethical-hacking": [
      {
        question: "Do I need prior cybersecurity knowledge?",
        answer:
          "No, this program starts from basics and progresses to advanced concepts.",
      },
      {
        question: "How long is the program?",
        answer: "Typically 8-10 weeks depending on training pace.",
      },
      {
        question: "Will I work on real attacks?",
        answer: "Yes, in controlled lab environments and simulations.",
      },
      {
        question: "Is this beginner-friendly?",
        answer: "Yes, even non-technical learners can start.",
      },
    ],
    "cyber-cloud-security": [
      {
        question: "Do I need cloud knowledge?",
        answer: "Basic understanding helps, but fundamentals are covered.",
      },
      {
        question: "Is this program practical?",
        answer: "Yes, focused heavily on real-world cloud scenarios.",
      },
      {
        question: "Will I learn AWS security?",
        answer: "Yes, along with concepts applicable to Azure & GCP.",
      },
      {
        question: "Is it beginner-friendly?",
        answer: "Yes, structured for gradual learning.",
      },
    ],
    "cyber-it-audit-grc": [
      {
        question: "Is technical knowledge required?",
        answer: "No, this is more process and compliance-focused.",
      },
      {
        question: "Is this good for non-coders?",
        answer: "Yes, ideal for non-technical roles in cybersecurity.",
      },
      {
        question: "What roles can I apply for?",
        answer: "GRC Analyst, IT Auditor, Risk Analyst.",
      },
      {
        question: "Is this beginner-friendly?",
        answer: "Yes, structured from basics to advanced.",
      },
    ],
    "cyber-comptia-sec": [
      {
        question: "Do I need prior cybersecurity knowledge?",
        answer:
          "No, this program starts from basics and takes you to advanced level.",
      },
      {
        question: "How long is the program?",
        answer: "The duration is typically 8-10 weeks with intensive training.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, you will work on live security labs and real-world scenarios.",
      },
      {
        question: "Is this suitable for beginners?",
        answer: "Absolutely. Beginners can start and build strong foundations.",
      },
    ],
    "cyber-comptia-cysa": [
      {
        question: "Do I need prior experience?",
        answer: "Basic cybersecurity knowledge is recommended.",
      },
      {
        question: "How long is the program?",
        answer: "Typically 8-10 weeks depending on training pace.",
      },
      {
        question: "Will I work on real SOC tools?",
        answer: "Yes, you will gain hands-on experience with industry tools.",
      },
      {
        question: "Is this job-oriented?",
        answer: "Yes, it is focused on SOC Analyst and Blue Team roles.",
      },
    ],
    "cyber-app-sec": [
      {
        question: "Do I need coding knowledge?",
        answer: "Basic understanding helps but is not mandatory.",
      },
      { question: "How long is the program?", answer: "Typically 8-10 weeks." },
      {
        question: "Will I perform real attacks?",
        answer: "Yes, in a controlled lab environment.",
      },
      {
        question: "Is this suitable for beginners?",
        answer: "Yes, but basic IT knowledge is recommended.",
      },
    ],
    "cyber-network-engineer": [
      {
        question: "Do I need prior networking knowledge?",
        answer:
          "No. This program starts with networking fundamentals and progressively takes you into advanced enterprise networking and infrastructure concepts.",
      },
      {
        question: "How long is the program?",
        answer:
          "The duration depends on the batch, typically 8–10 weeks with intensive practical training.",
      },
      {
        question: "Will I work on practical projects?",
        answer:
          "Yes. You’ll work on enterprise network design, routing, switching, security, monitoring, troubleshooting, and complete capstone projects.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Absolutely. The program is designed to take learners from networking fundamentals to practical, job-ready Network Engineering skills.",
      },
      {
        question: "What roles can I target after completing the program?",
        answer:
          "You can prepare for roles such as Network Engineer, Network Administrator, NOC Engineer, Network Support Engineer, Infrastructure Engineer, and Junior Network Security Engineer.",
      },
    ],
    "networking-engineer": [
      {
        question: "Do I need prior networking knowledge?",
        answer:
          "No. This program starts with networking fundamentals and progressively takes you into advanced enterprise networking and infrastructure concepts.",
      },
      {
        question: "How long is the program?",
        answer:
          "The duration depends on the batch, typically 8–10 weeks with intensive practical training.",
      },
      {
        question: "Will I work on practical projects?",
        answer:
          "Yes. You’ll work on enterprise network design, routing, switching, security, monitoring, troubleshooting, and complete capstone projects.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Absolutely. The program is designed to take learners from networking fundamentals to practical, job-ready Network Engineering skills.",
      },
      {
        question: "What roles can I target after completing the program?",
        answer:
          "You can prepare for roles such as Network Engineer, Network Administrator, NOC Engineer, Network Support Engineer, Infrastructure Engineer, and Junior Network Security Engineer.",
      },
    ],
    "it-support-sysadmin": [
      {
        question: "Is this program good for starting an IT career?",
        answer:
          "Yes! IT Support and System Administration is one of the most accessible and in-demand career entry points in technology.",
      },
      {
        question: "Will I learn Windows Server and Active Directory?",
        answer:
          "Yes, you will configure Active Directory, Group Policies, Domain Controllers, DNS, DHCP, and Office 365.",
      },
      {
        question: "Does this cover Linux and ticketing systems?",
        answer:
          "Yes, you will get practical exposure to Linux system administration as well as Jira Service Desk and ServiceNow.",
      },
    ],
    "fullstack-developer": [
      {
        question: "Do I need prior programming experience?",
        answer:
          "No prior experience is required. We start from basic web fundamentals and build up to full stack architecture.",
      },
      {
        question: "What tech stack will I learn?",
        answer:
          "You will master React, Next.js, Node.js, Express, TypeScript, PostgreSQL, MongoDB, Docker, and AWS.",
      },
      {
        question: "Will I build real portfolio projects?",
        answer:
          "Yes, you will build full-stack web applications, e-commerce systems, APIs, and a live production capstone SaaS.",
      },
    ],
    "python-programming": [
      {
        question: "Is Python easy to learn for beginners?",
        answer:
          "Python is known for its clean syntax and readability, making it ideal for beginners.",
      },
      {
        question: "What can I build with Python?",
        answer:
          "You can build automation scripts, web scrapers, REST APIs with FastAPI, data processing pipelines, and CLI tools.",
      },
      {
        question: "Does this cover web frameworks?",
        answer:
          "Yes, you will learn FastAPI, Flask, web scraping tools, and database integration.",
      },
    ],
    "salesforce-admin-dev": [
      {
        question: "Does this program cover both Admin and Developer roles?",
        answer:
          "Yes! It covers Salesforce Administration (Sales Cloud, Service Cloud, Flow Builder) and Development (Apex, LWC, SOQL).",
      },
      {
        question: "Will this help me prepare for Salesforce certifications?",
        answer:
          "Yes, it aligns with ADM-201 (Administrator) and PD1 (Platform Developer 1) exam objectives.",
      },
      {
        question: "Do I need coding experience for Salesforce Development?",
        answer:
          "We start from Salesforce Admin concepts before teaching Apex and Lightning Web Components (LWC) step-by-step.",
      },
    ],
    "ai-engineer": [
      {
        question: "Do I need prior coding knowledge?",
        answer: "Basic programming helps, but we cover fundamentals.",
      },
      {
        question: "How long is the program?",
        answer: "Typically 8-10 weeks depending on pace.",
      },
      {
        question: "Will I build real AI projects?",
        answer: "Yes, hands-on projects are a core part.",
      },
      {
        question: "Is this beginner-friendly?",
        answer: "Yes, designed for beginners to advanced learners.",
      },
    ],
    "ai-data-science-analytics": [
      {
        question: "Do I need prior coding knowledge?",
        answer:
          "No, we start from basics and gradually move to advanced concepts.",
      },
      {
        question: "How long is the program?",
        answer: "The duration is typically 8-10 weeks with intensive training.",
      },
      {
        question: "Will I work on real datasets?",
        answer: "Yes, you will work on real-world datasets and projects.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Yes, even non-technical learners can start and grow step-by-step.",
      },
    ],
    "ai-python-ds": [
      {
        question: "Do I need prior programming knowledge?",
        answer:
          "No, we start from scratch and build your Python skills step-by-step.",
      },
      {
        question: "How long is the program?",
        answer: "The duration is typically 6-8 weeks depending on the batch.",
      },
      {
        question: "Will I build projects?",
        answer: "Yes, you will work on practical Python-based projects.",
      },
      {
        question: "Is this course enough for Data Science?",
        answer:
          "This program builds a strong foundation required to move into full Data Science roles.",
      },
    ],
    "ai-governance": [
      {
        question: "Do I need prior AI knowledge?",
        answer:
          "No, this program starts from basics and takes you to advanced level.",
      },
      {
        question: "How long is the program?",
        answer:
          "The duration depends on the batch, typically 8-10 weeks with intensive training.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, you will work on real-world AI governance scenarios and case studies.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Absolutely. Even if you're from a non-technical background, you can start.",
      },
    ],
    "pm-pmp": [
      {
        question: "Do I need prior experience in project management?",
        answer:
          "No, this program starts from fundamentals and builds up to advanced concepts.",
      },
      {
        question: "How long is the program?",
        answer: "Typically 8-10 weeks depending on the training pace.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, you'll handle real-world case studies and project simulations.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Yes, even non-technical learners can start and grow into project management roles.",
      },
    ],
    "pm-scrum": [
      {
        question: "Do I need prior Agile knowledge?",
        answer:
          "No, the program starts from basics and builds to advanced Scrum practices.",
      },
      {
        question: "How long is the program?",
        answer: "Typically 6-8 weeks depending on the training schedule.",
      },
      {
        question: "Will I work on real Agile projects?",
        answer:
          "Yes, you will simulate real Agile environments and sprint cycles.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Yes, beginners and professionals both can benefit from this program.",
      },
    ],
    "pm-agile": [
      {
        question: "Do I need prior project management knowledge?",
        answer:
          "No, this program starts from basics and takes you to advanced level.",
      },
      {
        question: "How long is the program?",
        answer: "Typically 6-8 weeks depending on the batch.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, you will simulate real Agile workflows and project execution.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Yes, even non-technical learners can start and grow in this field.",
      },
    ],
    "test-career": [
      {
        question: "Do I need coding knowledge?",
        answer:
          "No, manual testing does not require coding. Basic automation will be taught step by step.",
      },
      {
        question: "How long is the program?",
        answer: "Typically 8-10 weeks depending on the batch.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, you will test real applications and work on real scenarios.",
      },
      {
        question: "Is this suitable for beginners?",
        answer: "Yes, beginners can easily start and build a QA career.",
      },
    ],
    "test-automation": [
      {
        question: "Do I need prior coding knowledge?",
        answer:
          "Basic programming knowledge is helpful but not mandatory. We cover fundamentals from scratch.",
      },
      {
        question: "How long is the program?",
        answer: "Typically 8-10 weeks depending on the batch.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, you will build automation frameworks and work on real-world testing scenarios.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Yes, even beginners can start and gradually move to advanced automation.",
      },
    ],
    "test-api-perf": [
      {
        question: "Do I need prior testing knowledge?",
        answer:
          "No, we start from basics and gradually move to advanced concepts.",
      },
      {
        question: "How long is the program?",
        answer: "Typically 8-10 weeks depending on the batch.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, you will test real APIs and simulate performance scenarios.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Yes, beginners and manual testers can both benefit from this program.",
      },
    ],
    "snow-admin": [
      {
        question: "Do I need prior ServiceNow knowledge?",
        answer:
          "No, this program starts from basics and takes you to advanced level.",
      },
      {
        question: "How long is the program?",
        answer:
          "The duration depends on the batch, typically 8-10 weeks with intensive training.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, you will work on live ServiceNow implementations and real-world scenarios.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Absolutely. Even if you're from a non-technical background, you can start.",
      },
    ],
    "snow-dev": [
      {
        question: "Do I need coding knowledge?",
        answer:
          "Basic understanding of JavaScript is helpful but not mandatory.",
      },
      {
        question: "How long is the program?",
        answer:
          "The duration depends on the batch, typically 8-10 weeks with intensive training.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, you will build real applications and automation workflows.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Yes, but having basic technical knowledge will help you learn faster.",
      },
    ],
    "snow-itsm": [
      {
        question: "Do I need prior ITSM knowledge?",
        answer:
          "No, this program starts from basics and takes you to advanced level.",
      },
      {
        question: "How long is the program?",
        answer:
          "The duration depends on the batch, typically 8-10 weeks with intensive training.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, you will work on live ITSM workflows and real-world scenarios.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Absolutely. Even if you're from a non-technical background, you can start.",
      },
    ],
    "snow-fundamentals": [
      {
        question: "Do I need prior coding knowledge?",
        answer:
          "No, this program is beginner-friendly and starts from scratch.",
      },
      {
        question: "How long is the program?",
        answer: "The duration depends on the batch, typically 6-8 weeks.",
      },
      {
        question: "Will I work on real projects?",
        answer: "Yes, you will build and deploy real ServiceNow applications.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Yes, this is designed specifically for beginners entering the ServiceNow ecosystem.",
      },
    ],
    "cloud-aws-engineer": [
      {
        question: "Do I need prior cloud knowledge?",
        answer:
          "No, this program starts from basics and takes you to advanced level.",
      },
      {
        question: "How long is the program?",
        answer:
          "The duration depends on the batch, typically 8-10 weeks with intensive training.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, you will work on live cloud deployments and real-world scenarios.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Absolutely. Even if you're from a non-technical background, you can start.",
      },
    ],
    "cloud-azure-engineer": [
      {
        question: "Do I need prior cloud knowledge?",
        answer:
          "No, this program starts from basics and takes you to advanced level.",
      },
      {
        question: "How long is the program?",
        answer:
          "The duration depends on the batch, typically 8-10 weeks with intensive training.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, you will work on live cloud deployments and real-world scenarios.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Absolutely. Even if you're from a non-technical background, you can start.",
      },
    ],
    "cloud-solutions-architect": [
      {
        question: "Do I need prior cloud knowledge?",
        answer:
          "No, this program starts from basics and takes you to advanced multi-cloud architecture level.",
      },
      {
        question: "How long is the program?",
        answer:
          "The duration depends on the batch, typically 10-12 weeks with intensive training.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, you will design and deploy real-world cloud architectures across AWS and Azure.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Yes, even beginners can start and gradually move towards advanced architecture concepts.",
      },
    ],
    "cloud-devops-engineer": [
      {
        question: "Do I need prior DevOps knowledge?",
        answer:
          "No, this program starts from basics and takes you to advanced level.",
      },
      {
        question: "How long is the program?",
        answer:
          "The duration depends on the batch, typically 8-10 weeks with intensive training.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, you will work on live DevOps pipelines and real-world deployment scenarios.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Absolutely. Even if you're from a non-technical background, you can start.",
      },
    ],
    "cloud-docker-k8s": [
      {
        question: "Do I need prior DevOps knowledge?",
        answer:
          "No, this program starts from basics and takes you to advanced level.",
      },
      {
        question: "How long is the program?",
        answer:
          "The duration depends on the batch, typically 8-10 weeks with intensive training.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, you will work on live container deployments and real-world DevOps scenarios.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Absolutely. Even if you're from a non-technical background, you can start.",
      },
    ],
    "cloud-devops-integrated": [
      {
        question: "Do I need prior DevOps knowledge?",
        answer:
          "No, this program starts from basics and takes you to advanced level.",
      },
      {
        question: "How long is the program?",
        answer:
          "The duration depends on the batch, typically 8-10 weeks with intensive training.",
      },
      {
        question: "Will I work on real projects?",
        answer:
          "Yes, you will work on live DevOps pipelines and real-world deployment scenarios.",
      },
      {
        question: "Is this suitable for beginners?",
        answer:
          "Absolutely. Even if you're from a non-technical background, you can start.",
      },
    ],
  };
function re() {
  var g, y, v, j, k;
  const { courseId: o } = D(),
    t = W.find((i) => i.id === o),
    [n, c] = h.useState(0),
    [a, l] = h.useState(!1),
    u = (i) => {
      const s = document.createElement("a");
      s.href = i;
      const d = decodeURIComponent(i.split("/").pop() || "Syllabus.pdf");
      ((s.download = d),
        document.body.appendChild(s),
        s.click(),
        document.body.removeChild(s));
    };
  if (!t) return e.jsx(Y, { to: "/programs", replace: !0 });
  const w = [...(Z[t.id] || []), ...X].filter(
    (i, s, d) => s === d.findIndex((x) => x.question === i.question),
  );
  return e.jsxs("div", {
    className:
      "min-h-screen bg-db-bg flex flex-col font-body selection:bg-db-accent selection:text-db-bg",
    children: [
      e.jsx(S, {}),
      e.jsxs("main", {
        className: "flex-grow pt-20 pb-12 lg:pb-20",
        children: [
          e.jsxs("section", {
            className:
              "relative pt-4 pb-12 lg:pt-8 lg:pb-24 overflow-hidden bg-gradient-to-b from-db-bg via-db-bg to-db-surface/5",
            children: [
              e.jsx("div", {
                className:
                  "absolute top-0 right-0 w-[800px] h-[800px] bg-db-accent/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/2",
              }),
              e.jsx("div", {
                className:
                  "absolute bottom-0 left-0 w-[500px] h-[500px] bg-db-gold/3 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2",
              }),
              e.jsx("div", {
                className: "max-w-7xl mx-auto px-5 sm:px-10 relative z-10",
                children: e.jsxs("div", {
                  className:
                    "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
                  children: [
                    e.jsxs("div", {
                      className: "relative",
                      children: [
                        e.jsxs(r.div, {
                          initial: { opacity: 0, y: 20 },
                          animate: { opacity: 1, y: 0 },
                          className:
                            "lg:hidden bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden p-4 mb-4",
                          children: [
                            e.jsxs("div", {
                              className: "relative mb-12",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "aspect-[16/10] rounded-[2rem] overflow-hidden",
                                  children: e.jsx("img", {
                                    src: m(t.image),
                                    alt: t.title,
                                    className: "w-full h-full object-cover",
                                    onError: (i) => {
                                      const s = i.target,
                                        d = t.image
                                          .replace(/\.jpg$/, ".webp")
                                          .replace(/\+/g, "")
                                          .replace(/\s\s+/g, " ");
                                      s.src.endsWith(".webp") || (s.src = m(d));
                                    },
                                  }),
                                }),
                                e.jsx("div", {
                                  className:
                                    "absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2",
                                  children: e.jsx("div", {
                                    className:
                                      "inline-flex items-center px-6 py-2.5 bg-white border border-purple-100 text-db-accent rounded-[1rem] text-[11px] font-bold tracking-tight shadow-md whitespace-nowrap",
                                    children:
                                      t.category === "Job Ready Programs"
                                        ? "Job Ready Program"
                                        : t.category,
                                  }),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "px-3 pb-4",
                              children: [
                                e.jsx("h1", {
                                  className:
                                    "text-[2rem] font-display font-bold text-slate-900 mb-4 leading-[1.15] tracking-tight",
                                  children: t.title.includes("Job Ready")
                                    ? e.jsxs(e.Fragment, {
                                        children: [
                                          t.title
                                            .replace("Job Ready Program", "")
                                            .trim(),
                                          " ",
                                          e.jsx("br", {}),
                                          e.jsx("span", {
                                            className: "text-slate-900",
                                            children: "Job Ready Program",
                                          }),
                                        ],
                                      })
                                    : t.title,
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-slate-500 text-[14px] leading-relaxed mb-10 font-medium",
                                  children: t.description,
                                }),
                                e.jsxs("div", {
                                  className: "flex flex-col gap-3",
                                  children: [
                                    e.jsx("button", {
                                      onClick: () => l(!0),
                                      className:
                                        "w-full h-14 bg-db-accent text-white rounded-2xl font-bold text-[13px] tracking-widest transition-all active:scale-[0.98] shadow-xl shadow-db-accent/20",
                                      children: "BOOK YOUR FREE DEMO",
                                    }),
                                    t.joinPath &&
                                      e.jsxs(N, {
                                        to: t.joinPath,
                                        className:
                                          "w-full h-14 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white rounded-2xl font-bold text-[13px] tracking-widest flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-xl shadow-emerald-600/10",
                                        children: [
                                          e.jsx("svg", {
                                            className: "w-5 h-5 fill-current",
                                            viewBox: "0 0 24 24",
                                            children: e.jsx("path", {
                                              d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
                                            }),
                                          }),
                                          e.jsx("span", {
                                            children: "JOIN WHATSAPP GROUP",
                                          }),
                                        ],
                                      }),
                                    e.jsxs("button", {
                                      onClick: () => {
                                        t.syllabusUrl && u(t.syllabusUrl);
                                      },
                                      disabled: !t.syllabusUrl,
                                      className: `w-full h-14 bg-[#F5F3FF] border border-purple-100 text-db-accent rounded-2xl font-bold text-[13px] tracking-widest flex items-center justify-center gap-3 active:scale-[0.98] transition-all ${t.syllabusUrl ? "" : "opacity-50 cursor-not-allowed"}`,
                                      title: t.syllabusUrl
                                        ? void 0
                                        : "Syllabus not available",
                                      children: [
                                        e.jsx("span", {
                                          children: "DOWNLOAD SYLLABUS",
                                        }),
                                        e.jsx(I, {
                                          className: "w-5 h-5 text-db-accent",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "hidden lg:block",
                          children: e.jsxs(r.div, {
                            initial: { opacity: 0, x: -30 },
                            animate: { opacity: 1, x: 0 },
                            transition: { duration: 0.6 },
                            children: [
                              e.jsx("span", {
                                className:
                                  "px-3 py-1 rounded-full bg-db-accent/10 border border-db-accent/20 text-[9px] font-extrabold text-db-accent uppercase tracking-[0.25em] mb-6 inline-block",
                                children: t.category,
                              }),
                              e.jsx("h1", {
                                className:
                                  "text-5xl lg:text-7xl font-display font-bold text-db-text mb-6 tracking-tighter leading-[1.05]",
                                children: t.title,
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-6 mb-8",
                                children: [
                                  t.duration &&
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 text-db-muted font-bold text-xs uppercase",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-1.5 h-1.5 rounded-full bg-db-accent",
                                        }),
                                        t.duration,
                                      ],
                                    }),
                                  t.lessons &&
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 text-db-muted font-bold text-xs uppercase",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-1.5 h-1.5 rounded-full bg-db-gold",
                                        }),
                                        t.lessons,
                                        " Lessons",
                                      ],
                                    }),
                                ],
                              }),
                              e.jsx("p", {
                                className:
                                  "text-db-muted text-lg max-w-xl font-medium leading-relaxed mb-10",
                                children: t.description,
                              }),
                              e.jsxs("div", {
                                className: "flex items-center flex-wrap gap-4",
                                children: [
                                  e.jsx("button", {
                                    onClick: () => l(!0),
                                    className:
                                      "btn-grad px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl shadow-db-accent/30 hover:shadow-db-accent/40 active:scale-95 transition-all text-white",
                                    children: "Book Free Demo",
                                  }),
                                  t.joinPath &&
                                    e.jsxs(N, {
                                      to: t.joinPath,
                                      className:
                                        "px-8 py-5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white rounded-2xl text-lg font-bold shadow-2xl shadow-emerald-600/20 active:scale-95 transition-all flex items-center justify-center gap-2.5",
                                      children: [
                                        e.jsx("svg", {
                                          className: "w-5 h-5 fill-current",
                                          viewBox: "0 0 24 24",
                                          children: e.jsx("path", {
                                            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
                                          }),
                                        }),
                                        e.jsx("span", {
                                          children: "Join WhatsApp Group",
                                        }),
                                      ],
                                    }),
                                  e.jsxs("button", {
                                    onClick: () => {
                                      t.syllabusUrl && u(t.syllabusUrl);
                                    },
                                    disabled: !t.syllabusUrl,
                                    className: `px-8 py-5 bg-white text-db-text rounded-2xl text-lg font-bold border-2 border-slate-200 hover:border-db-accent/30 hover:bg-slate-50 transition-all flex items-center justify-center gap-3 ${t.syllabusUrl ? "" : "opacity-50 cursor-not-allowed"}`,
                                    title: t.syllabusUrl
                                      ? void 0
                                      : "Syllabus not available",
                                    children: [
                                      e.jsx(I, { className: "w-6 h-6" }),
                                      "Download Syllabus",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    e.jsxs(r.div, {
                      initial: { opacity: 0, scale: 0.9, rotateY: 5 },
                      animate: { opacity: 1, scale: 1, rotateY: 0 },
                      transition: {
                        duration: 0.8,
                        delay: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      },
                      className: "relative hidden lg:block group",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute -inset-10 bg-purple-500/10 rounded-full blur-[100px] group-hover:bg-purple-500/20 transition-all duration-1000 opacity-50",
                        }),
                        e.jsx("div", {
                          className:
                            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-db-accent/5 rounded-full blur-[120px] mix-blend-multiply",
                        }),
                        e.jsxs("div", {
                          className:
                            "relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white group-hover:shadow-purple-500/10 transition-shadow",
                          children: [
                            e.jsx("img", {
                              src: m(t.image),
                              alt: t.title,
                              className:
                                "w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[2000ms]",
                              onError: (i) => {
                                const s = i.target,
                                  d = t.image
                                    .replace(/\.jpg$/, ".webp")
                                    .replace(/\+/g, "")
                                    .replace(/\s\s+/g, " ");
                                s.src.endsWith(".webp") || (s.src = m(d));
                              },
                            }),
                            e.jsx("div", {
                              className:
                                "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsx(f, {
            mode: "wait",
            children:
              (((g = t.benefits) == null ? void 0 : g.length) ||
                ((y = t.projects) == null ? void 0 : y.length)) &&
              e.jsxs(
                r.div,
                {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: !0 },
                  children: [
                    ((v = t.benefits) == null ? void 0 : v.length) &&
                      e.jsx(U, { benefits: t.benefits }),
                    ((j = t.projects) == null ? void 0 : j.length) &&
                      e.jsx(J, { projects: t.projects, courseId: t.id }),
                  ],
                },
                "course-extras",
              ),
          }),
          e.jsxs("div", {
            className: "py-16 lg:py-24 bg-db-bg relative overflow-hidden",
            children: [
              e.jsx("div", {
                className: "max-w-7xl mx-auto px-5 sm:px-10 mb-10 lg:mb-16",
                children: e.jsx("div", {
                  className: "text-center",
                  children: e.jsx("h2", {
                    className:
                      "text-3xl md:text-5xl lg:text-6xl font-display font-bold text-db-text tracking-tighter",
                    children: "Tools We Mastered",
                  }),
                }),
              }),
              e.jsx(Q, { items: t.learningTools }),
            ],
          }),
          e.jsx("section", {
            id: "curriculum",
            className: "py-16 lg:py-24 bg-db-bg relative overflow-hidden",
            children: e.jsxs("div", {
              className: "max-w-7xl mx-auto px-5 sm:px-10",
              children: [
                e.jsxs(r.div, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  className: "mb-16",
                  children: [
                    e.jsxs("span", {
                      className:
                        "flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-db-accent mb-6 leading-none",
                      children: [
                        e.jsx("span", {
                          className:
                            "w-1.5 h-1.5 rounded-full bg-db-accent animate-pulse",
                        }),
                        " Strategic Learning Path",
                      ],
                    }),
                    e.jsxs("h2", {
                      className:
                        "text-3xl md:text-5xl lg:text-6xl font-display font-bold text-db-text mb-6 tracking-tighter leading-tight",
                      children: [
                        "Curriculum Built for ",
                        e.jsx("span", {
                          className: "text-db-muted/30 italic",
                          children: "Real Career Growth",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "max-w-4xl mx-auto",
                  children: e.jsx("div", {
                    className: "space-y-4",
                    children:
                      (k = t.modules) == null
                        ? void 0
                        : k.map((i, s) => {
                            var d;
                            return e.jsx(
                              r.div,
                              {
                                initial: { opacity: 0, y: 20 },
                                whileInView: { opacity: 1, y: 0 },
                                viewport: { once: !0 },
                                transition: { delay: s * 0.05 },
                                className: "relative",
                                children: e.jsxs("div", {
                                  className: `group border rounded-xl sm:rounded-2xl lg:rounded-[2rem] overflow-hidden transition-all duration-500 ${n === s ? "border-db-accent/40 bg-db-surface/40 shadow-xl" : "border-db-border/40 bg-db-surface/20 hover:border-db-accent/20"}`,
                                  children: [
                                    e.jsxs("button", {
                                      onClick: () => c(n === s ? null : s),
                                      className:
                                        "w-full flex items-center justify-between p-5 lg:p-8 text-left group gap-4",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "flex items-center gap-4 lg:gap-6",
                                          children: [
                                            e.jsx("div", {
                                              className: `shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-105 ${n === s ? "bg-db-accent text-db-bg shadow-md" : "bg-db-bg border border-db-border/40 text-db-muted/40"}`,
                                              children: e.jsx("span", {
                                                className:
                                                  "text-xs lg:text-sm font-bold",
                                                children: String(
                                                  s + 1,
                                                ).padStart(2, "0"),
                                              }),
                                            }),
                                            e.jsx("div", {
                                              children: e.jsx("h3", {
                                                className: `text-lg lg:text-2xl font-bold leading-tight group-hover:text-db-accent transition-colors ${n === s ? "text-db-accent" : "text-db-text"}`,
                                                children: i.title.replace(
                                                  /^Module\s+\d+:\s*/i,
                                                  "",
                                                ),
                                              }),
                                            }),
                                          ],
                                        }),
                                        e.jsx("div", {
                                          className: `shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-db-border/40 flex items-center justify-center transition-all duration-500 ${n === s ? "bg-db-accent border-db-accent text-db-bg" : "text-db-muted group-hover:border-db-accent/40"}`,
                                          children: e.jsx(_, {
                                            size: 16,
                                            className: `transition-transform duration-500 ${n === s ? "rotate-180" : ""}`,
                                          }),
                                        }),
                                      ],
                                    }),
                                    e.jsx(f, {
                                      children:
                                        n === s &&
                                        e.jsx(r.div, {
                                          initial: { height: 0, opacity: 0 },
                                          animate: {
                                            height: "auto",
                                            opacity: 1,
                                          },
                                          exit: { height: 0, opacity: 0 },
                                          transition: {
                                            duration: 0.5,
                                            ease: [0.22, 1, 0.36, 1],
                                          },
                                          children: e.jsxs("div", {
                                            className:
                                              "px-5 lg:px-8 pb-6 lg:pb-10 pt-0",
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "h-[1px] w-full bg-db-border/20 mb-6 lg:mb-8",
                                              }),
                                              e.jsx("div", {
                                                className:
                                                  "grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-x-10 lg:gap-y-5",
                                                children:
                                                  (d = i.items) == null
                                                    ? void 0
                                                    : d.map((x, A) =>
                                                        e.jsxs(
                                                          "div",
                                                          {
                                                            className:
                                                              "flex items-start gap-3 lg:gap-4 text-db-muted group/item hover:text-db-text transition-colors cursor-default",
                                                            children: [
                                                              e.jsx(b, {
                                                                size: 16,
                                                                className:
                                                                  "shrink-0 mt-1 text-db-border/40 group-hover/item:text-db-accent transition-colors",
                                                              }),
                                                              e.jsx("span", {
                                                                className:
                                                                  "text-sm lg:text-lg font-medium leading-relaxed",
                                                                children: x,
                                                              }),
                                                            ],
                                                          },
                                                          A,
                                                        ),
                                                      ),
                                              }),
                                            ],
                                          }),
                                        }),
                                    }),
                                  ],
                                }),
                              },
                              s,
                            );
                          }),
                  }),
                }),
              ],
            }),
          }),
          e.jsx("section", {
            className: "bg-db-bg relative z-10",
            children: e.jsx(V, {}),
          }),
          e.jsx("section", {
            className: "bg-db-surface/10",
            children: e.jsx(K, { faqItems: w }),
          }),
        ],
      }),
      e.jsx(T, {}),
      e.jsx(C, { isOpen: a, onClose: () => l(!1), defaultCourse: t.category }),
    ],
  });
}
export { re as CourseDetailPage };
