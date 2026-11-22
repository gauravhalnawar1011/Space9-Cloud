
import { j as e } from "./vendor-react-Ux0UbkiD.js";
import { N as Navbar, F as Footer } from "./index-BuW3eo45.js";

function ContactIcon({ type }) {
  const common = {
    width: 25,
    height: 25,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };

  let children = [];

  if (type === "mail") {
    children = [
      e.jsx("rect", { x: 3, y: 5, width: 18, height: 14, rx: 2 }),
      e.jsx("path", { d: "m3 7 9 6 9-6" })
    ];
  } else if (type === "phone") {
    children = [
      e.jsx("path", {
        d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.7L7.2 10a16 16 0 0 0 6 6l1.6-1.8a2 2 0 0 1 1.7-.6l3 .5a2 2 0 0 1 1.5 1.8Z"
      })
    ];
  } else if (type === "location") {
    children = [
      e.jsx("path", { d: "M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" }),
      e.jsx("circle", { cx: 12, cy: 10, r: 2.5 })
    ];
  } else if (type === "send") {
    children = [
      e.jsx("path", { d: "m22 2-7 20-4-9-9-4Z" }),
      e.jsx("path", { d: "M22 2 11 13" })
    ];
  } else {
    children = [
      e.jsx("path", { d: "M5 12h14" }),
      e.jsx("path", { d: "m12 5 7 7-7 7" })
    ];
  }

  return e.jsx("svg", {
    ...common,
    children
  });
}

// CONTACT INFORMATION CARD
function ContactCard({ icon, title, description, detail }) {
  return e.jsxs("div", {
    className: "group flex flex-col items-center justify-center rounded-2xl border border-white/[0.07] bg-db-surface text-center transition-all duration-300 hover:-translate-y-2 hover:border-db-accent/40",
    style: {
      padding: "60px 35px",
      minHeight: "360px"
    },
    children: [
      e.jsx("div", {
        className: "mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-db-accent/10 text-db-accent transition-all duration-300 group-hover:bg-db-accent group-hover:text-white",
        children: e.jsx(ContactIcon, { type: icon })
      }),
      e.jsx("h3", {
        className: "mb-4 text-xl font-bold text-db-text",
        children: title
      }),
      e.jsx("p", {
        className: "mb-3 break-words font-semibold text-db-accent",
        children: detail
      }),
      e.jsx("p", {
        className: "max-w-xs text-sm leading-7 text-db-muted",
        children: description
      })
    ]
  });
}

function ContactPage() {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");

    if (!name || !email || !subject || !message) {
      alert("Please complete all the required fields.");
      return;
    }

    alert("Thank you for contacting Space9-Cloud! Your enquiry has been received in this demo.");
    form.reset();
  }

  return e.jsxs("div", {
    className: "min-h-screen bg-db-bg font-body text-db-text flex flex-col",
    children: [
      e.jsx(Navbar, {}),

      e.jsxs("main", {
        className: "flex-grow pt-[72px]",

        children: [

          // HERO SECTION
          e.jsxs("section", {
            className: "relative overflow-hidden py-24 md:py-32",
            children: [
              e.jsx("div", {
                className: "pointer-events-none absolute -top-20 right-0 h-[500px] w-[500px] rounded-full bg-db-accent/[0.06] blur-[120px]"
              }),
              e.jsx("div", {
                className: "pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-db-accent/[0.04] blur-[120px]"
              }),
              e.jsxs("div", {
                className: "relative mx-auto max-w-[1280px] px-5 text-center sm:px-8",
                children: [
                  e.jsx("p", {
                    className: "mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-db-accent",
                    children: "CONTACT SPACE9"
                  }),
                  e.jsxs("h1", {
                    className: "mx-auto mb-7 max-w-4xl font-display text-4xl font-bold leading-tight text-db-text md:text-6xl",
                    children: [
                      "Let's Turn Your ",
                      e.jsx("span", {
                        className: "text-db-accent",
                        children: "Ideas"
                      }),
                      " Into Reality."
                    ]
                  }),
                  e.jsx("p", {
                    className: "mx-auto max-w-2xl text-base leading-8 text-db-muted md:text-lg",
                    children: "Have a question about Cloud, Cyber Security, DevOps or AI? Our team is here to help you take the next step in your technology journey."
                  }),
                  e.jsx("a", {
                    href: "#contact-form",
                    className: "mt-9 inline-flex items-center gap-3 rounded-lg bg-db-accent px-10 py-6 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:opacity-90",
                    children: [
                      "Start a Conversation",
                      e.jsx(ContactIcon, { type: "arrow" })
                    ]
                  })
                ]
              })
            ]
          }),

          // CONTACT INFORMATION SECTION
          e.jsxs("section", {
            className: "border-t border-white/[0.06] py-24 md:py-28",
            children: [
              e.jsxs("div", {
                className: "mx-auto max-w-[1400px] px-5 sm:px-10",
                children: [
                  e.jsxs("div", {
                    className: "mb-16 text-center",
                    children: [
                      e.jsx("p", {
                        className: "mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-db-accent",
                        children: "GET IN TOUCH"
                      }),
                      e.jsx("h2", {
                        className: "mb-5 font-display text-3xl font-bold text-db-text md:text-4xl",
                        children: "We're Here to Help"
                      }),
                      e.jsx("p", {
                        className: "mx-auto max-w-2xl leading-7 text-db-muted",
                        children: "Connect with our team for enquiries, technical assistance and collaboration opportunities."
                      })
                    ]
                  }),

                  e.jsxs("div", {
                    className: "grid grid-cols-1 gap-7 md:grid-cols-3",
                    children: [
                      e.jsx(ContactCard, {
                        icon: "mail",
                        title: "Email Support",
                        detail: "Add Official Email",
                        description: "Reach out to us for general enquiries, information and support."
                      }),
                      e.jsx(ContactCard, {
                        icon: "phone",
                        title: "Phone Support",
                        detail: "Add Official Phone",
                        description: "Connect with our team for direct assistance and enquiries."
                      }),
                      e.jsx(ContactCard, {
                        icon: "location",
                        title: "Our Location",
                        detail: "India",
                        description: "Get in touch with Space9-Cloud and explore our technology community."
                      })
                    ]
                  })
                ]
              })
            ]
          }),

          // CONTACT FORM SECTION
          e.jsxs("section", {
            id: "contact-form",
            className: "border-t border-white/[0.06] bg-db-surface/30 py-24 md:py-28",
            children: [
              e.jsxs("div", {
                className: "mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-5 lg:grid-cols-2 sm:px-10",

                children: [

                  // LEFT SIDE CONTENT
                  e.jsxs("div", {
                    className: "mx-auto w-full max-w-xl",
                    children: [
                      e.jsx("p", {
                        className: "mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-db-accent",
                        children: "LET'S CONNECT"
                      }),
                      e.jsx("h2", {
                        className: "mb-6 font-display text-3xl font-bold leading-tight text-db-text md:text-5xl",
                        children: "Have a Project or Question in Mind?"
                      }),
                      e.jsx("p", {
                        className: "mb-10 text-base leading-8 text-db-muted",
                        children: "Whether you're exploring cloud technologies, building your skills in cybersecurity, or looking for expert guidance, we'd love to hear from you."
                      }),

                      e.jsxs("div", {
                        className: "space-y-8",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-start gap-5",
                            children: [
                              e.jsx("div", {
                                className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-db-accent/10 text-db-accent",
                                children: "01"
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("h3", {
                                    className: "mb-2 font-semibold text-db-text",
                                    children: "Cloud & DevOps"
                                  }),
                                  e.jsx("p", {
                                    className: "text-sm leading-7 text-db-muted",
                                    children: "Questions about cloud infrastructure, automation and DevOps."
                                  })
                                ]
                              })
                            ]
                          }),

                          e.jsxs("div", {
                            className: "flex items-start gap-5",
                            children: [
                              e.jsx("div", {
                                className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-db-accent/10 text-db-accent",
                                children: "02"
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("h3", {
                                    className: "mb-2 font-semibold text-db-text",
                                    children: "Cyber Security"
                                  }),
                                  e.jsx("p", {
                                    className: "text-sm leading-7 text-db-muted",
                                    children: "Get in touch regarding security learning and technical guidance."
                                  })
                                ]
                              })
                            ]
                          }),

                          e.jsxs("div", {
                            className: "flex items-start gap-5",
                            children: [
                              e.jsx("div", {
                                className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-db-accent/10 text-db-accent",
                                children: "03"
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("h3", {
                                    className: "mb-2 font-semibold text-db-text",
                                    children: "Partnerships"
                                  }),
                                  e.jsx("p", {
                                    className: "text-sm leading-7 text-db-muted",
                                    children: "Discuss business enquiries and collaboration opportunities."
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),

                  // RIGHT SIDE CONTACT FORM
                  e.jsxs("form", {
                    onSubmit: handleSubmit,
                    className: "w-full rounded-2xl border border-white/[0.08] bg-db-surface shadow-2xl",
                    style: {
                      padding: "60px",
                      width: "100%",
                      maxWidth: "100%",
                      boxSizing: "border-box"
                    },
                    children: [
                      e.jsx("h3", {
                        className: "mb-3 text-center text-2xl font-bold text-db-text md:text-3xl",
                        children: "Send Us a Message"
                      }),

                      e.jsx("p", {
                        className: "mb-10 text-center text-sm leading-7 text-db-muted",
                        children: "Complete the form below and tell us how we can help."
                      }),

                      // NAME AND EMAIL
                      e.jsxs("div", {
                        className: "mb-7 grid grid-cols-1 gap-6 sm:grid-cols-2",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("label", {
                                htmlFor: "contact-name",
                                className: "mb-3 block text-sm font-medium text-db-text",
                                children: "Full Name"
                              }),
                              e.jsx("input", {
                                id: "contact-name",
                                name: "name",
                                type: "text",
                                placeholder: "Your name",
                                autoComplete: "name",
                                required: true,
                                className: "w-full rounded-lg border border-white/10 bg-db-bg px-4 py-4 text-db-text outline-none transition placeholder:text-db-muted focus:border-db-accent focus:ring-2 focus:ring-db-accent/20"
                              })
                            ]
                          }),

                          e.jsxs("div", {
                            children: [
                              e.jsx("label", {
                                htmlFor: "contact-email",
                                className: "mb-3 block text-sm font-medium text-db-text",
                                children: "Email Address"
                              }),
                              e.jsx("input", {
                                id: "contact-email",
                                name: "email",
                                type: "email",
                                placeholder: "you@example.com",
                                autoComplete: "email",
                                required: true,
                                className: "w-full rounded-lg border border-white/10 bg-db-bg px-4 py-4 text-db-text outline-none transition placeholder:text-db-muted focus:border-db-accent focus:ring-2 focus:ring-db-accent/20"
                              })
                            ]
                          })
                        ]
                      }),

                      // SUBJECT
                      e.jsxs("div", {
                        className: "mb-7",
                        children: [
                          e.jsx("label", {
                            htmlFor: "contact-subject",
                            className: "mb-3 block text-sm font-medium text-db-text",
                            children: "Subject"
                          }),
                          e.jsx("input", {
                            id: "contact-subject",
                            name: "subject",
                            type: "text",
                            placeholder: "What would you like to discuss?",
                            required: true,
                            className: "w-full rounded-lg border border-white/10 bg-db-bg px-4 py-4 text-db-text outline-none transition placeholder:text-db-muted focus:border-db-accent focus:ring-2 focus:ring-db-accent/20"
                          })
                        ]
                      }),

                      // MESSAGE
                      e.jsxs("div", {
                        className: "mb-8",
                        children: [
                          e.jsx("label", {
                            htmlFor: "contact-message",
                            className: "mb-3 block text-sm font-medium text-db-text",
                            children: "Your Message"
                          }),
                          e.jsx("textarea", {
                            id: "contact-message",
                            name: "message",
                            rows: 6,
                            placeholder: "Tell us more about your enquiry...",
                            required: true,
                            className: "w-full resize-y rounded-lg border border-white/10 bg-db-bg px-4 py-4 text-db-text outline-none transition placeholder:text-db-muted focus:border-db-accent focus:ring-2 focus:ring-db-accent/20"
                          })
                        ]
                      }),

                      // SUBMIT BUTTON
                      e.jsx("button", {
                        type: "submit",
                        className: "flex w-full items-center justify-center gap-3 rounded-lg bg-db-accent px-6 py-5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:opacity-90",
                        children: [
                          "Submit Enquiry",
                          e.jsx(ContactIcon, { type: "send" })
                        ]
                      }),

                      e.jsx("p", {
                        className: "mt-6 text-center text-xs leading-6 text-db-muted",
                        children: "Thank you for your interest in Space9-Cloud."
                      })
                    ]
                  })
                ]
              })
            ]
          }),

          // FINAL SECTION
          e.jsxs("section", {
            className: "relative overflow-hidden border-t border-white/[0.06] py-24 text-center",
            children: [
              e.jsx("div", {
                className: "pointer-events-none absolute inset-0 bg-db-accent/[0.025]"
              }),
              e.jsxs("div", {
                className: "relative mx-auto max-w-3xl px-5",
                children: [
                  e.jsx("h2", {
                    className: "mb-5 font-display text-3xl font-bold text-db-text md:text-4xl",
                    children: "Let's Build the Future Together."
                  }),
                  e.jsx("p", {
                    className: "leading-8 text-db-muted",
                    children: "From Cloud and Cyber Security to DevOps and AI, start a conversation with Space9-Cloud and take your next step."
                  })
                ]
              })
            ]
          })
        ]
      }),

      e.jsx(Footer, {})
    ]
  });
}

export { ContactPage };
