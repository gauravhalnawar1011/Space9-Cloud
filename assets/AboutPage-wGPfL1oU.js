import {j as e} from "./vendor-react-Ux0UbkiD.js";
import {u as l, N as c, s as d, g as t, f as s, d as x, e as m, F as p} from "./index-BuW3eo45.js";
import {m as a} from "./vendor-animation-BmeQzH7S.js";
import {a4 as h, H as b, q as u} from "./vendor-lucide-OsCWqxzU.js";
import "./vendor-supabase-2rm18Nxb.js";
const f = [{
    title: "Practicality First",
    description: "Decabyte focuses on what actually happens in production, not just theoretical concepts.",
    icon: h
}, {
    title: "Expert Mentorship",
    description: "Learn from veterans who have built and scaled real-world cloud and security infrastructure.",
    icon: b
}, {
    title: "Integrity & Ethics",
    description: "Decabyte believes in transparent learning and building responsible technology practices.",
    icon: u
}];
function w() {
    l(.1);
    const i = l(.1)
      , r = l(.1);
    return e.jsxs("div", {
        className: "min-h-screen bg-db-bg flex flex-col font-body",
        children: [e.jsx(c, {}), e.jsxs("main", {
            className: "flex-grow pt-[72px]",
            children: [e.jsxs("section", {
                className: "py-20 relative overflow-hidden",
                children: [e.jsx("div", {
                    className: "absolute top-0 right-0 w-[600px] h-[600px] bg-db-accent/[0.03] rounded-full blur-[120px] pointer-events-none"
                }), e.jsx("div", {
                    className: "max-w-[1280px] mx-auto px-5 sm:px-8",
                    children: e.jsxs("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                        children: [e.jsxs(a.div, {
                            variants: d,
                            initial: "hidden",
                            animate: "visible",
                            children: [e.jsx(a.p, {
                                variants: s,
                                transition: t,
                                className: "text-xs font-semibold tracking-[0.2em] uppercase text-db-accent mb-4",
                                children: "Our Mission"
                            }), e.jsxs(a.h1, {
                                variants: s,
                                transition: {
                                    ...t,
                                    delay: .1
                                },
                                className: "font-display text-display-lg text-db-text mb-8",
                                children: ["We bridge the gap between", " ", e.jsx("span", {
                                    className: "text-db-accent",
                                    children: "Education"
                                }), " and", " ", e.jsx("span", {
                                    className: "text-db-accent",
                                    children: "Execution"
                                }), "."]
                            }), e.jsx(a.p, {
                                variants: s,
                                transition: {
                                    ...t,
                                    delay: .2
                                },
                                className: "text-lg text-db-muted leading-relaxed max-w-xl",
                                children: "Decabyte was founded in 2024 to tackle the growing skills gap in Cloud, Cyber Security, and DevOps. We don't just teach concepts; we build job-ready IT professionals."
                            })]
                        }), e.jsxs(a.div, {
                            initial: {
                                opacity: 0,
                                scale: .95,
                                x: 40
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                x: 0
                            },
                            transition: {
                                duration: .8,
                                ease: [.22, 1, .36, 1],
                                delay: .3
                            },
                            className: "relative rounded-2xl overflow-hidden border border-white/[0.06]",
                            children: [e.jsx("img", {
                                src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
                                className: "w-full aspect-video object-cover",
                                alt: "Team working",
                                loading: "lazy"
                            }), e.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-db-bg/60 to-transparent"
                            })]
                        })]
                    })
                })]
            }), e.jsx("section", {
                ref: i.ref,
                className: "py-24 overflow-hidden",
                children: e.jsx("div", {
                    className: "max-w-[1280px] mx-auto px-5 sm:px-8",
                    children: e.jsxs("div", {
                        className: "flex flex-col lg:flex-row items-center gap-16",
                        children: [e.jsx(a.div, {
                            variants: x,
                            initial: "hidden",
                            animate: i.isVisible ? "visible" : "hidden",
                            transition: {
                                duration: .8,
                                ease: [.22, 1, .36, 1]
                            },
                            className: "lg:w-1/2 relative rounded-2xl overflow-hidden border border-white/[0.06]",
                            children: e.jsx("img", {
                                src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
                                className: "w-full aspect-square object-cover",
                                alt: "Our Office",
                                loading: "lazy"
                            })
                        }), e.jsxs(a.div, {
                            variants: m,
                            initial: "hidden",
                            animate: i.isVisible ? "visible" : "hidden",
                            transition: {
                                duration: .8,
                                ease: [.22, 1, .36, 1],
                                delay: .2
                            },
                            className: "lg:w-1/2",
                            children: [e.jsx("h2", {
                                className: "font-display text-2xl font-bold text-db-text mb-8 border-b border-db-accent/30 inline-block pb-2",
                                children: "Our Story"
                            }), e.jsxs("div", {
                                className: "space-y-6 text-db-muted leading-relaxed",
                                children: [e.jsx("p", {
                                    children: "The tech industry moves at light speed. Traditional education struggles to keep pace with cloud infrastructure, zero-trust security models, and modern DevOps practices."
                                }), e.jsx("p", {
                                    children: "Our founders realized that while there were many training platforms, few actually prepared engineers for the specific demands of enterprise IT roles."
                                }), e.jsx("p", {
                                    className: "font-semibold text-db-text",
                                    children: "Today, Decabyte is a launchpad for careers in Cloud, Security, AI DevOps and more."
                                })]
                            })]
                        })]
                    })
                })
            }), e.jsx("section", {
                ref: r.ref,
                className: "py-24 border-t border-white/[0.06]",
                children: e.jsxs("div", {
                    className: "max-w-[1280px] mx-auto px-5 sm:px-8",
                    children: [e.jsxs(a.div, {
                        variants: d,
                        initial: "hidden",
                        animate: r.isVisible ? "visible" : "hidden",
                        className: "mb-16",
                        children: [e.jsx(a.h2, {
                            variants: s,
                            transition: t,
                            className: "font-display text-display-md text-db-text mb-4",
                            children: "Values We Live By"
                        }), e.jsx(a.p, {
                            variants: s,
                            transition: t,
                            className: "text-db-muted text-lg",
                            children: '"Infrastructure is poetry, but execution is everything."'
                        })]
                    }), e.jsx(a.div, {
                        variants: d,
                        initial: "hidden",
                        animate: r.isVisible ? "visible" : "hidden",
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: f.map( (n, o) => e.jsxs(a.div, {
                            variants: s,
                            transition: {
                                duration: .6,
                                ease: [.22, 1, .36, 1],
                                delay: o * .12
                            },
                            className: "p-8 rounded-2xl bg-db-surface border border-white/[0.06] hover:border-db-accent/15 transition-all duration-500 group",
                            children: [e.jsx(n.icon, {
                                className: "w-7 h-7 text-db-accent mb-6"
                            }), e.jsx("h3", {
                                className: "text-lg font-bold text-db-text mb-3",
                                children: n.title
                            }), e.jsx("p", {
                                className: "text-sm text-db-muted leading-relaxed",
                                children: n.description
                            })]
                        }, o))
                    })]
                })
            })]
        }), e.jsx(p, {})]
    })
}
export {w as AboutPage};