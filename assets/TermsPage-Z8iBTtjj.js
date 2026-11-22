import { j as e } from "./vendor-react-Ux0UbkiD.js";
import { N as Navbar, F as Footer } from "./index-BuW3eo45.js";

const sections = [
  ["general", "General Terms", [
    "Welcome to Space9-Cloud. By accessing or using this website and its services, you agree to follow these Terms and Conditions.",
    "These terms explain the rules, responsibilities and conditions that apply when you use our platform. Please read them carefully before proceeding.",
    "If you do not agree with these terms, please discontinue use of the website."
  ]],
  ["accounts", "Enrollment & Accounts", [
    "Some features may require you to create an account or provide information during enrollment.",
    "You are responsible for providing accurate information and keeping your login credentials confidential. Notify the website administrator if you become aware of unauthorized access to your account.",
    "You are responsible for activity carried out through your account, subject to applicable law."
  ]],
  ["intellectual", "Intellectual Property", [
    "Unless otherwise stated, the website design, branding, text, graphics and other original materials are protected by applicable intellectual property laws.",
    "You may use website materials for personal and permitted purposes. You must not reproduce, distribute, modify or commercially exploit protected materials without appropriate authorization."
  ]],
  ["payments", "Payments & Refunds", [
    "Where paid services are offered, applicable fees and payment conditions will be communicated before purchase.",
    "Refunds, cancellations and payment disputes will be handled according to the specific policy communicated for the relevant service and applicable law."
  ]],
  ["conduct", "Student Conduct", [
    "Users are expected to interact respectfully and responsibly while using the platform.",
    "Harassment, abusive communication, impersonation, cheating, misuse of learning resources or conduct that disrupts the experience of others is not permitted."
  ]],
  ["acceptable", "Acceptable Use", [
    "You agree not to misuse the website, attempt unauthorized access, interfere with its operation or introduce malicious code.",
    "You must not use the platform for unlawful activities, fraudulent purposes or activities that infringe the rights of others."
  ]],
  ["privacy", "Privacy & Personal Information", [
    "Information submitted through the website should be handled in accordance with the applicable privacy practices and policies.",
    "Please avoid sharing passwords or sensitive personal information through public channels. Read the applicable Privacy Policy to understand how personal information is collected and used."
  ]],
  ["third-party", "Third-Party Services & Links", [
    "The website may contain links to external websites or use third-party services for additional functionality.",
    "External services are governed by their own terms and privacy policies. We are not responsible for the content, availability or practices of independent third-party websites."
  ]],
  ["liability", "Disclaimers & Limitation of Liability", [
    "We aim to keep the website useful, accurate and available. However, uninterrupted or error-free operation cannot be guaranteed.",
    "To the extent permitted by applicable law, the website is not responsible for indirect or consequential losses arising from the use of the platform.",
    "Nothing in these terms excludes liability that cannot legally be excluded."
  ]],
  ["termination", "Suspension & Termination", [
    "Access to some or all website features may be suspended or restricted where there is a reasonable concern about misuse, security, legal compliance or violation of these terms.",
    "Where appropriate, users may be informed of the reason for such action."
  ]],
  ["changes", "Changes to These Terms", [
    "These Terms and Conditions may be updated from time to time to reflect changes in services, website features or applicable requirements.",
    "Updated terms will be published on this page with a revised update date. Continued use of the website after changes take effect means you acknowledge the updated terms."
  ]],
  ["contact", "Contact Information", [
    "If you have questions or concerns about these Terms and Conditions, please contact the website team through the official contact channel provided on this website.",
    "We recommend including enough detail about your query so that it can be reviewed appropriately."
  ]]
];

const css = `
.terms-page {
  background: #F5F8FF;
  color: #24213d;
  min-height: 100vh;
  font-family: inherit;
}

.terms-page * {
  box-sizing: border-box;
}

.terms-hero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    120deg,
    #102A56,
    #1D4ED8 58%,
    #2563EB
  );
  color: white;
  padding: 85px 25px 105px;
}

.terms-hero:before {
  content: "";
  position: absolute;
  width: 430px;
  height: 430px;
  border-radius: 50%;
  right: -100px;
  top: -240px;
  background: rgba(147,197,253,.22);
  box-shadow: 0 0 100px rgba(96,165,250,.18);
}

.terms-hero:after {
  content: "";
  position: absolute;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  left: 43%;
  bottom: -220px;
  background: rgba(255,255,255,.10);
}

.terms-hero-inner {
  max-width: 1160px;
  margin: auto;
  position: relative;
  z-index: 1;
}

.terms-kicker {
  display: inline-block;
  background: rgba(255,255,255,.13);
  border: 1px solid rgba(255,255,255,.27);
  color: #DBEAFE;
  border-radius: 30px;
  padding: 9px 16px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.terms-hero h1 {
  font-size: clamp(42px,6vw,68px);
  line-height: 1.08;
  letter-spacing: -2px;
  font-weight: 850;
  color: #fff;
  margin: 25px 0 17px;
}

.terms-hero p {
  max-width: 690px;
  font-size: 17px;
  line-height: 1.85;
  color: #DBEAFE;
  margin: 0;
}

.terms-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.terms-meta span {
  background: rgba(255,255,255,.11);
  border: 1px solid rgba(255,255,255,.22);
  border-radius: 9px;
  padding: 11px 15px;
  font-size: 13px;
  color: #E2E8F0;
  font-weight: 750;
}

.terms-meta span:last-child {
  color: #93C5FD;
}

.terms-layout {
  max-width: 1160px;
  margin: -38px auto 0;
  padding: 0 24px 80px;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 285px minmax(0,1fr);
  gap: 28px;
  align-items: start;
}

.terms-sidebar {
  position: sticky;
  top: 25px;
  background: #fff;
  border: 1px solid #DBEAFE;
  border-radius: 17px;
  padding: 24px 18px;
  box-shadow: 0 15px 45px rgba(37,99,235,.10);
}

.terms-sidebar small {
  color: #2563EB;
  font-size: 11px;
  font-weight: 850;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.terms-sidebar h3 {
  color: #24213e;
  font-size: 21px;
  margin: 7px 0 18px;
  font-weight: 850;
}

.terms-nav {
  display: grid;
  gap: 5px;
}

.terms-nav a {
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 10px;
  border-radius: 9px;
  color: #55536b;
  text-decoration: none;
  font-size: 13px;
  font-weight: 650;
  transition: .2s;
}

.terms-nav a:hover {
  background: #EFF6FF;
  color: #1D4ED8;
  transform: translateX(3px);
}

.terms-nav-number {
  display: grid;
  place-items: center;
  flex: 0 0 28px;
  height: 28px;
  border-radius: 8px;
  color: #2563EB;
  background: #DBEAFE;
  font-size: 11px;
  font-weight: 850;
}

.terms-content {
  display: grid;
  gap: 18px;
  min-width: 0;
}

.terms-welcome {
  background: linear-gradient(120deg,#fff,#EFF6FF);
  border: 1px solid #DBEAFE;
  border-radius: 17px;
  padding: 29px;
  box-shadow: 0 8px 25px rgba(37,99,235,.05);
}

.terms-welcome h2 {
  font-size: 23px;
  font-weight: 850;
  color: #282342;
  margin: 0 0 10px;
}

.terms-welcome p {
  font-size: 15px;
  color: #55536b;
  line-height: 1.9;
  margin: 0;
}

.terms-section {
  background: white;
  border: 1px solid #e7e5f0;
  border-radius: 16px;
  padding: 29px 31px;
  box-shadow: 0 7px 25px rgba(37,99,235,.045);
  scroll-margin-top: 25px;
  transition: .2s ease;
}

.terms-section:hover {
  border-color: #93C5FD;
  box-shadow: 0 14px 35px rgba(37,99,235,.09);
  transform: translateY(-2px);
}

.terms-heading {
  display: flex;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid #eceaf3;
  padding-bottom: 18px;
  margin-bottom: 17px;
}

.terms-number {
  display: grid;
  place-items: center;
  flex: 0 0 48px;
  height: 48px;
  color: #fff;
  border-radius: 13px;
  background: linear-gradient(135deg,#1D4ED8,#60A5FA);
  box-shadow: 0 6px 16px rgba(37,99,235,.24);
  font-size: 14px;
  font-weight: 850;
}

.terms-heading h2 {
  color: #25213e;
  font-size: 21px;
  font-weight: 850;
  line-height: 1.4;
  margin: 0;
}

.terms-section p {
  color: #555469;
  font-size: 15px;
  line-height: 1.95;
  margin: 11px 0 0;
}

.terms-contact {
  padding: 34px;
  border-radius: 17px;
  background: #ffffff;
  color: #24213d;
  border: 1px solid #DBEAFE;
  box-shadow: 0 8px 25px rgba(37,99,235,.05);
}

.terms-contact h2 {
  font-size: 25px;
  font-weight: 850;
  color: #24213d;
  margin: 0 0 10px;
}

.terms-contact p {
  max-width: 650px;
  color: #55556b;
  font-size: 15px;
  line-height: 1.85;
  margin: 0;
}

.terms-contact a {
  display: inline-block;
  margin-top: 21px;
  padding: 13px 19px;
  border-radius: 9px;
  background: linear-gradient(135deg,#1D4ED8,#2563EB);
  color: #fff;
  border: 1px solid #1D4ED8;
  text-decoration: none;
  font-size: 13px;
  font-weight: 850;
  transition: .2s;
}

.terms-contact a:hover {
  background: #102A56;
  border-color: #102A56;
  transform: translateY(-2px);
}

@media(max-width: 900px) {
  .terms-layout {
    grid-template-columns: 1fr;
  }

  .terms-sidebar {
    position: relative;
    top: auto;
  }

  .terms-nav {
    grid-template-columns: repeat(2,minmax(0,1fr));
  }
}

@media(max-width: 560px) {
  .terms-hero {
    padding: 58px 20px 76px;
  }

  .terms-hero h1 {
    font-size: 43px;
    letter-spacing: -1px;
  }

  .terms-hero p {
    font-size: 15px;
  }

  .terms-layout {
    padding: 0 14px 55px;
  }

  .terms-nav {
    grid-template-columns: 1fr;
  }

  .terms-section {
    padding: 22px 19px;
  }

  .terms-heading h2 {
    font-size: 18px;
  }

  .terms-section p {
    font-size: 14px;
  }

  .terms-welcome,
  .terms-contact {
    padding: 23px;
  }
}
`;

function TermsPage() {
  return e.jsxs("div", {
    className: "terms-page",
    children: [
      e.jsx("style", {
        children: css
      }),

      e.jsx(Navbar, {}),

      e.jsx("header", {
        className: "terms-hero",
        children: e.jsxs("div", {
          className: "terms-hero-inner",
          children: [
            e.jsx("span", {
              className: "terms-kicker",
              style: {
              color: "#155ed3",
              fontWeight: 700,
              opacity: 1
              },
              children: "SPACE9-CLOUD  /  LEGAL"
            }),

            e.jsx("h1", {
              children: "Terms & Conditions"
            }),

            e.jsx("p", {
              children: "Clear guidelines. Transparent policies. A better experience. Understand the terms and responsibilities that apply when using Space9-Cloud."
            }),

            e.jsxs("div", {
              className: "terms-meta",
              children: [
                e.jsx("span", {
                  className: "terms-kicker",
                  style: {
                  color: "#1a3dd8",
                  fontWeight: 800,
                  opacity: 1
                },
                  children: "Last updated: November 18, 2026"
                }),

                e.jsx("span", {
                  className: "terms-kicker",
                  style: {
                  color: "#1a3dd8",
                  fontWeight: 800,
                  opacity: 1
                },
                  children: "12 important sections"
                })
              ]
            })
          ]
        })
      }),

      e.jsxs("main", {
        className: "terms-layout",
        children: [
          e.jsxs("aside", {
            className: "terms-sidebar",
            children: [
              e.jsx("small", {
                children: "Explore the policy"
              }),

              e.jsx("h3", {
                children: "On this page"
              }),

              e.jsx("nav", {
                className: "terms-nav",
                children: sections.map((section, index) =>
                  e.jsxs("a", {
                    href: "#" + section[0],
                    children: [
                      e.jsx("span", {
                        className: "terms-nav-number",
                        children: String(index + 1).padStart(2, "0")
                      }),

                      e.jsx("span", {
                        children: section[1]
                      })
                    ]
                  }, section[0])
                )
              })
            ]
          }),

          e.jsxs("article", {
            className: "terms-content",
            children: [
              e.jsxs("div", {
                className: "terms-welcome",
                children: [
                  e.jsx("h2", {
                    children: "Welcome to Space9-Cloud"
                  }),

                  e.jsx("p", {
                    children: "We believe in making expectations clear. Please read these Terms and Conditions carefully to understand the guidelines that apply to your use of our website and services."
                  })
                ]
              }),

              ...sections.map((section, index) =>
                e.jsxs("section", {
                  id: section[0],
                  className: "terms-section",
                  children: [
                    e.jsxs("div", {
                      className: "terms-heading",
                      children: [
                        e.jsx("span", {
                          className: "terms-number",
                          children: String(index + 1).padStart(2, "0")
                        }),

                        e.jsx("h2", {
                          children: section[1]
                        })
                      ]
                    }),

                    ...section[2].map((paragraph, paragraphIndex) =>
                      e.jsx("p", {
                        children: paragraph
                      }, paragraphIndex)
                    )
                  ]
                }, section[0])
              ),

              e.jsxs("div", {
                className: "terms-contact",
                children: [
                  e.jsx("h2", {
                    children: "Have questions? We're here to help."
                  }),

                  e.jsx("p", {
                    children: "For clarification about these Terms and Conditions, please contact our team through the official contact page."
                  }),

                  e.jsx("a", {
                    href: "/contact",
                    children: "Contact Us  →"
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

export { TermsPage };