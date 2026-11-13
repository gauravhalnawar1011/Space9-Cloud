import { r as i, j as e } from "./vendor-react-Ux0UbkiD.js";
import {
  a as c,
  N as g,
  s as u,
  g as r,
  f as o,
  c as y,
  C as f,
  F as j,
  B as w,
} from "./index-BuW3eo45.js";
import { m as a, A as v } from "./vendor-animation-BmeQzH7S.js";
import { a3 as N } from "./vendor-lucide-OsCWqxzU.js";
import "./vendor-supabase-2rm18Nxb.js";
function P() {
  const [s, l] = i.useState("All"),
    [x, n] = i.useState(!1),
    [m, p] = i.useState(""),
    d = s === "All" ? c : c.filter((t) => t.category === s);
  return e.jsxs("div", {
    className: "min-h-screen bg-db-bg flex flex-col font-body",
    children: [
      e.jsx(g, {}),
      e.jsxs("main", {
        className: "flex-grow",
        children: [
          e.jsxs("section", {
            className: "pt-32 pb-8 relative overflow-hidden",
            children: [
              e.jsx("div", {
                className:
                  "absolute top-0 right-0 w-[600px] h-[600px] bg-db-accent/[0.03] rounded-full blur-[120px] pointer-events-none",
              }),
              e.jsx("div", {
                className: "max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10",
                children: e.jsxs(a.div, {
                  variants: u,
                  initial: "hidden",
                  animate: "visible",
                  className: "max-w-2xl",
                  children: [
                    e.jsx(a.p, {
                      variants: o,
                      transition: r,
                      className:
                        "text-xs font-semibold tracking-[0.2em] uppercase text-db-accent mb-4",
                      children: "All Programs",
                    }),
                    e.jsx(a.h1, {
                      variants: o,
                      transition: { ...r, delay: 0.1 },
                      className:
                        "font-display text-display-lg text-db-text mb-6",
                      children: "Explore Our Programs",
                    }),
                    e.jsx(a.p, {
                      variants: o,
                      transition: { ...r, delay: 0.2 },
                      className: "text-lg text-db-muted leading-relaxed",
                      children:
                        "Comprehensive training programs designed by industry experts. From cloud computing to cybersecurity, find the perfect path for your career.",
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsx(a.section, {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.3 },
            className:
              "border-y border-white/[0.06] py-3 sticky top-[72px] z-30 bg-db-bg/80 backdrop-blur-md",
            children: e.jsx("div", {
              className: "max-w-[1280px] mx-auto px-5 sm:px-8",
              children: e.jsxs("div", {
                className:
                  "flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar flex-nowrap sm:justify-start",
                children: [
                  e.jsx(a.button, {
                    onClick: () => l("All"),
                    className: `flex-shrink-0 px-4 py-2 rounded-lg text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${s === "All" ? "bg-db-accent text-white shadow-lg shadow-db-accent/20" : "bg-white/[0.03] text-db-muted border border-white/10 hover:border-db-accent/30 hover:text-db-text"}`,
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    children: "All Programs",
                  }),
                  y.map((t) =>
                    e.jsx(
                      a.button,
                      {
                        onClick: () => l(t),
                        className: `flex-shrink-0 px-4 py-2 rounded-lg text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${s === t ? "bg-db-accent text-white shadow-lg shadow-db-accent/20" : "bg-white/[0.03] text-db-muted border border-white/10 hover:border-db-accent/30 hover:text-db-text"}`,
                        whileHover: { scale: 1.02 },
                        whileTap: { scale: 0.98 },
                        children: t,
                      },
                      t,
                    ),
                  ),
                ],
              }),
            }),
          }),
          e.jsx("section", {
            className: "pt-4 pb-12",
            children: e.jsxs("div", {
              className: "max-w-[1280px] mx-auto px-5 sm:px-8",
              children: [
                e.jsx(v, {
                  mode: "wait",
                  children: e.jsx(
                    a.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -20 },
                      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
                      children: d.map((t, b) =>
                        e.jsx(
                          a.div,
                          {
                            initial: { opacity: 0, y: 30 },
                            animate: { opacity: 1, y: 0 },
                            transition: {
                              delay: b * 0.03,
                              duration: 0.5,
                              ease: [0.22, 1, 0.36, 1],
                            },
                            children: e.jsx(f, {
                              id: t.id,
                              title: t.title,
                              category: t.category,
                              description: t.description,
                              image: t.image,
                              icon: t.icon,
                              onBookDemo: (h) => {
                                (p(h), n(!0));
                              },
                            }),
                          },
                          t.id,
                        ),
                      ),
                    },
                    s,
                  ),
                }),
                d.length === 0 &&
                  e.jsxs(a.div, {
                    initial: { opacity: 0, scale: 0.9 },
                    animate: { opacity: 1, scale: 1 },
                    className: "text-center py-20",
                    children: [
                      e.jsx(N, {
                        className: "w-12 h-12 text-db-muted/30 mx-auto mb-4",
                      }),
                      e.jsx("p", {
                        className: "text-db-muted text-lg",
                        children: "No programs found in this category.",
                      }),
                    ],
                  }),
              ],
            }),
          }),
          e.jsx("section", {
            className: "py-10 border-t border-white/[0.06]",
            children: e.jsx("div", {
              className: "max-w-[1280px] mx-auto px-5 sm:px-8 text-center",
              children: e.jsx("p", {
                className: "text-sm text-db-muted/60",
                children:
                  "All programs include hands-on labs, certification preparation, and dedicated career support.",
              }),
            }),
          }),
        ],
      }),
      e.jsx(j, {}),
      e.jsx(w, { isOpen: x, onClose: () => n(!1), defaultCourse: m }),
    ],
  });
}
export { P as CoursesPage };
