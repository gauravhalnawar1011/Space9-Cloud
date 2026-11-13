import { r as j, j as e } from "./vendor-react-Ux0UbkiD.js";
import {
  N,
  s as S,
  g as n,
  f as l,
  h as c,
  b as p,
  F as A,
  B as k,
} from "./index-BuW3eo45.js";
import { m as s } from "./vendor-animation-BmeQzH7S.js";
import {
  ad as u,
  A as d,
  a as f,
  a2 as m,
  ak as w,
  F as P,
  Z as I,
  H as U,
  q as M,
  ap as B,
} from "./vendor-lucide-OsCWqxzU.js";
import "./vendor-supabase-2rm18Nxb.js";
function O() {
  const [y, i] = j.useState(!1),
    g = [
      {
        name: "Amazon Web Services (AWS)",
        category: "Cloud",
        logoUrl: "https://cdn.simpleicons.org/amazonaws/FF9900",
      },
      {
        name: "Microsoft Azure",
        category: "Cloud",
        logoUrl: "https://cdn.simpleicons.org/microsoftazure/0089D6",
      },
      {
        name: "Google Cloud Platform (GCP)",
        category: "Cloud",
        logoUrl: "https://cdn.simpleicons.org/googlecloud/4285F4",
      },
      {
        name: "Cisco Systems",
        category: "Networking",
        logoUrl: "https://cdn.simpleicons.org/cisco/1BA0D7",
      },
      {
        name: "CompTIA Security+",
        category: "CyberSecurity",
        logoUrl: "https://cdn.simpleicons.org/comptia/FF0000",
      },
      {
        name: "VMware Cloud",
        category: "Infrastructure",
        logoUrl: "https://cdn.simpleicons.org/vmware/607078",
      },
      {
        name: "Salesforce Certified",
        category: "CRM",
        logoUrl: "https://cdn.simpleicons.org/salesforce/00A1E0",
      },
      {
        name: "Oracle Cloud Infrastructure",
        category: "Database",
        logoUrl: "https://cdn.simpleicons.org/oracle/F80000",
      },
      {
        name: "Snowflake Data Cloud",
        category: "Analytics",
        logoUrl: "https://cdn.simpleicons.org/snowflake/29B5E8",
      },
      {
        name: "Linux Foundation (CKA/LFCS)",
        category: "DevOps",
        logoUrl: "https://cdn.simpleicons.org/linux/FCC624",
      },
      {
        name: "HashiCorp Terraform",
        category: "IaC",
        logoUrl: "https://cdn.simpleicons.org/terraform/844FBA",
      },
      {
        name: "Palo Alto Networks",
        category: "Security",
        logoUrl: "https://cdn.simpleicons.org/paloaltonetworks/FA5821",
      },
      {
        name: "Fortinet Network Security",
        category: "Security",
        logoUrl: "https://cdn.simpleicons.org/fortinet/C01818",
      },
      {
        name: "Juniper Networks",
        category: "Networking",
        logoUrl: "https://cdn.simpleicons.org/junipernetworks/840029",
      },
      {
        name: "Citrix Systems",
        category: "VDI",
        logoUrl: "https://cdn.simpleicons.org/citrix/000000",
      },
      {
        name: "Alibaba Cloud",
        category: "Cloud",
        logoUrl: "https://cdn.simpleicons.org/alibabacloud/FF6A00",
      },
    ],
    x = [
      {
        name: "CEH - EC-Council",
        category: "Security",
        logoUrl: "https://cdn.simpleicons.org/kalilinux/557CDA",
      },
      {
        name: "OSCP - Offensive Security",
        category: "Pentesting",
        logoUrl: "https://cdn.simpleicons.org/offensivesecurity/000000",
      },
      {
        name: "OSWE - Web Expert",
        category: "Pentesting",
        logoUrl: "https://cdn.simpleicons.org/offensivesecurity/000000",
      },
      {
        name: "OSEP - Pentesting",
        category: "Pentesting",
        logoUrl: "https://cdn.simpleicons.org/offensivesecurity/000000",
      },
      {
        name: "OSWP - Wireless",
        category: "Security",
        logoUrl: "https://cdn.simpleicons.org/offensivesecurity/000000",
      },
      {
        name: "PNPT - TCM Security",
        category: "Pentesting",
        logoUrl: "https://cdn.simpleicons.org/tryhackme/212C42",
      },
      {
        name: "CRTO - Red Team Operator",
        category: "Red Team",
        logoUrl: "https://cdn.simpleicons.org/hackthebox/9FEF00",
      },
      {
        name: "CRTP - Red Team Professional",
        category: "Red Team",
        logoUrl: "https://cdn.simpleicons.org/hackthebox/9FEF00",
      },
      {
        name: "eCPPT - eLearnSecurity",
        category: "Security",
        logoUrl: "https://cdn.simpleicons.org/kalilinux/557CDA",
      },
      {
        name: "eWPT - Web Pentesting",
        category: "AppSec",
        logoUrl: "https://cdn.simpleicons.org/portswigger/FF6600",
      },
      {
        name: "Blue Team Level 1 (BTL1)",
        category: "Defensive",
        logoUrl: "https://cdn.simpleicons.org/splunk/F05A28",
      },
      {
        name: "Burp Suite Practitioner",
        category: "AppSec",
        logoUrl: "https://cdn.simpleicons.org/portswigger/FF6600",
      },
      {
        name: "CND - Network Defender",
        category: "Security",
        logoUrl: "https://cdn.simpleicons.org/wireshark/1679A7",
      },
      {
        name: "CHFI - Hacking Investigator",
        category: "Forensics",
        logoUrl: "https://cdn.simpleicons.org/metasploit/000000",
      },
      {
        name: "CCISO - Security Officer",
        category: "Executive",
        logoUrl: "https://cdn.simpleicons.org/crowdstrike/FC0000",
      },
      {
        name: "CTIA - Threat Intelligence",
        category: "Cyber",
        logoUrl: "https://cdn.simpleicons.org/checkmarx/0052CC",
      },
    ],
    b = [
      {
        name: "ITIL v4 Foundation",
        category: "ITSM",
        logoUrl: "https://cdn.simpleicons.org/servicenow/81B5A1",
      },
      {
        name: "PRINCE2 Practitioner",
        category: "PMP",
        logoUrl: "https://cdn.simpleicons.org/pmi/0073E6",
      },
      {
        name: "PMP - PMI Certified",
        category: "Management",
        logoUrl: "https://cdn.simpleicons.org/pmi/0073E6",
      },
      {
        name: "CAPM - Agile Project",
        category: "Management",
        logoUrl: "https://cdn.simpleicons.org/pmi/0073E6",
      },
      {
        name: "PMI-ACP Agile",
        category: "Agile",
        logoUrl: "https://cdn.simpleicons.org/scrumalliance/009CDA",
      },
      {
        name: "CISA - ISACA Auditor",
        category: "Audit",
        logoUrl: "https://cdn.simpleicons.org/isaca/004B87",
      },
      {
        name: "CISM - ISACA Manager",
        category: "Management",
        logoUrl: "https://cdn.simpleicons.org/isaca/004B87",
      },
      {
        name: "CRISC - Risk Control",
        category: "Risk",
        logoUrl: "https://cdn.simpleicons.org/isaca/004B87",
      },
      {
        name: "Six Sigma Green/Black Belt",
        category: "Quality",
        logoUrl: "https://cdn.simpleicons.org/leanpub/1A1A1A",
      },
      {
        name: "ISTQB Software Testing",
        category: "QA",
        logoUrl: "https://cdn.simpleicons.org/selenium/43B02A",
      },
      {
        name: "ServiceNow CSA / CAD",
        category: "SaaS",
        logoUrl: "https://cdn.simpleicons.org/servicenow/81B5A1",
      },
      {
        name: "Splunk Core Power User",
        category: "SIEM",
        logoUrl: "https://cdn.simpleicons.org/splunk/F05A28",
      },
      {
        name: "Tableau Desktop Specialist",
        category: "BI",
        logoUrl: "https://cdn.simpleicons.org/tableau/E97627",
      },
      {
        name: "UiPath RPA Developer",
        category: "Automation",
        logoUrl: "https://cdn.simpleicons.org/uipath/FA4616",
      },
      {
        name: "Databricks Data Engineer",
        category: "Data",
        logoUrl: "https://cdn.simpleicons.org/databricks/FF3621",
      },
      {
        name: "SAP Certified Associate",
        category: "ERP",
        logoUrl: "https://cdn.simpleicons.org/sap/008FD3",
      },
      {
        name: "SAFe Agilist",
        category: "Agile",
        logoUrl: "https://cdn.simpleicons.org/scaledagile/00529B",
      },
      {
        name: "Scrum.org PSM I / PSPO",
        category: "Scrum",
        logoUrl: "https://cdn.simpleicons.org/scrumorg/003366",
      },
      {
        name: "CyberArk Security",
        category: "IAM",
        logoUrl: "https://cdn.simpleicons.org/cyberark/002B49",
      },
      {
        name: "MuleSoft Integration",
        category: "Middleware",
        logoUrl: "https://cdn.simpleicons.org/mulesoft/00A1E0",
      },
    ],
    v = [
      {
        category: "Amazon Web Services (AWS)",
        badge: "AWS Certified",
        image: "/images/Cloud & DevOps/AWS Cloud Engineer Program.webp",
        floatingBadges: [
          "Solutions Architect",
          "DevOps DOP-C02",
          "AWS Certified",
        ],
        exams: [
          "AWS Certified Solutions Architect – Associate (SAA-C03)",
          "AWS Certified Cloud Practitioner (CLF-C02)",
          "AWS Certified Security – Specialty (SCS-C02)",
          "AWS Certified DevOps Engineer – Professional (DOP-C02)",
          "AWS Certified SysOps Administrator",
        ],
        color: "from-amber-500/20 to-orange-500/20",
        borderColor: "border-amber-500/30",
        textColor: "text-amber-400",
      },
      {
        category: "Microsoft Azure & Cloud",
        badge: "Microsoft Certified",
        image: "/images/Cloud & DevOps/Azure Cloud Engineer Program.webp",
        floatingBadges: ["AZ-104 Admin", "AZ-305 Architect", "SC-200 Analyst"],
        exams: [
          "Azure Fundamentals (AZ-900)",
          "Azure Administrator Associate (AZ-104)",
          "Azure Solutions Architect Expert (AZ-305)",
          "Azure Security Technologies (AZ-500)",
          "Microsoft Security Operations Analyst (SC-200)",
        ],
        color: "from-blue-500/20 to-cyan-500/20",
        borderColor: "border-blue-500/30",
        textColor: "text-blue-400",
      },
      {
        category: "Cyber Security & CompTIA",
        badge: "CompTIA & Security",
        image: "/images/Cyber security/comptia.jpeg",
        floatingBadges: ["Security+ SY0-701", "CySA+ Analyst", "CEH v12"],
        exams: [
          "CompTIA Security+ (SY0-701)",
          "CompTIA CySA+ Cybersecurity Analyst (CS0-003)",
          "CompTIA Network+ (N10-008)",
          "Certified Ethical Hacker (CEH v12)",
          "Certified Information Systems Security Professional (CISSP)",
        ],
        color: "from-emerald-500/20 to-teal-500/20",
        borderColor: "border-emerald-500/30",
        textColor: "text-emerald-400",
      },
      {
        category: "Cisco Networking & Infrastructure",
        badge: "Cisco Certified",
        image: "/images/cisco.jpeg",
        floatingBadges: ["CCNA 200-301", "ENCOR 350-401", "DevNet"],
        exams: [
          "Cisco Certified Network Associate (CCNA 200-301)",
          "Cisco Enterprise Network Core (ENCOR 350-401)",
          "Cisco Security Core (SCOR 350-701)",
          "Cisco DevNet Associate (200-901)",
        ],
        color: "from-purple-500/20 to-indigo-500/20",
        borderColor: "border-purple-500/30",
        textColor: "text-purple-400",
      },
      {
        category: "ServiceNow Ecosystem",
        badge: "ServiceNow Certified",
        image: "/images/ServiceNow/ServiceNow Administrator Program.webp",
        floatingBadges: [
          "System Admin (CSA)",
          "App Developer (CAD)",
          "CIS-ITSM",
        ],
        exams: [
          "Certified System Administrator (CSA)",
          "Certified Application Developer (CAD)",
          "Certified Implementation Specialist – ITSM (CIS-ITSM)",
          "Certified Implementation Specialist – Security Operations (CIS-SecOps)",
        ],
        color: "from-green-500/20 to-emerald-500/20",
        borderColor: "border-green-500/30",
        textColor: "text-green-400",
      },
      {
        category: "Agile & Project Management",
        badge: "PMI & Scrum Alliance",
        image: "/images/Project Management/PMP Certification Program.webp",
        floatingBadges: ["PMP Certified", "ScrumMaster (CSM)", "PMI-ACP"],
        exams: [
          "Project Management Professional (PMP)",
          "Certified ScrumMaster (CSM)",
          "Professional Scrum Master (PSM I / PSM II)",
          "PMI Agile Certified Practitioner (PMI-ACP)",
        ],
        color: "from-rose-500/20 to-pink-500/20",
        borderColor: "border-rose-500/30",
        textColor: "text-rose-400",
      },
    ],
    C = [
      {
        title: "Real Exam Dumps & Practice Questions",
        stepBadge: "Verified Question Bank",
        tag: "Updated Exam Scenarios",
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
        floatingBadges: ["Verified Scenarios", "98.6% Pass Rate"],
        desc: "Access verified, up-to-date practice question banks matching real exam scenarios with detailed explanations.",
        stat: "98.6%",
        statLabel: "First-Time Pass Rate",
        icon: P,
      },
      {
        title: "Hands-on Lab Environment",
        stepBadge: "Interactive Sandbox",
        tag: "Guided Practical Labs",
        image:
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        floatingBadges: ["Live Cloud Sandbox", "Performance Labs"],
        desc: "Guided practical labs matching real-world scenarios required for performance-based exam questions.",
        stat: "50+",
        statLabel: "Real-World Lab Scenarios",
        icon: I,
      },
      {
        title: "1-on-1 Certified Mentor Guidance",
        stepBadge: "Personalized Coaching",
        tag: "Certified Practitioners",
        image:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
        floatingBadges: ["1-on-1 Sessions", "Certified Mentors"],
        desc: "Direct study sessions with professionals who have already passed the exact certification exam.",
        stat: "1-on-1",
        statLabel: "Direct Mentor Guidance",
        icon: U,
      },
      {
        title: "Voucher & Booking Support",
        stepBadge: "Seamless Scheduling",
        tag: "Pearson VUE & Kryterion",
        image:
          "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
        floatingBadges: ["Pearson VUE Booking", "30% Discount"],
        desc: "Assistance with discounted exam vouchers, Pearson VUE / Kryterion scheduling, and online proctoring rules.",
        stat: "Up to 30%",
        statLabel: "Exam Voucher Savings",
        icon: u,
      },
      {
        title: "Exam Readiness Guarantee Check",
        stepBadge: "Mock Diagnostic",
        tag: "Readiness Assessment",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
        floatingBadges: ["Mock Diagnostic", "100% Readiness"],
        desc: "Mock exam diagnostic to score your readiness before you spend money booking your official exam.",
        stat: "100%",
        statLabel: "Preparation Guarantee",
        icon: M,
      },
      {
        title: "LinkedIn Badge & Resume Support",
        stepBadge: "Career Placement",
        tag: "ATS Resume Optimization",
        image:
          "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
        floatingBadges: ["LinkedIn Badge", "ATS Resume Audit"],
        desc: "Guidance on adding your official certification badge to LinkedIn and highlighting it on your ATS resume.",
        stat: "24 Hours",
        statLabel: "Credential Verification",
        icon: B,
      },
    ];
  return e.jsxs("div", {
    className:
      "min-h-screen bg-db-bg flex flex-col font-body selection:bg-db-accent selection:text-db-bg",
    children: [
      e.jsx(N, {}),
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
                  "absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3",
              }),
              e.jsx("div", {
                className: "max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10",
                children: e.jsx("div", {
                  className: "max-w-4xl mx-auto text-center",
                  children: e.jsxs(s.div, {
                    variants: S,
                    initial: "hidden",
                    animate: "visible",
                    className: "space-y-6 flex flex-col items-center",
                    children: [
                      e.jsx(s.div, {
                        variants: l,
                        transition: n,
                        children: e.jsxs("div", {
                          className:
                            "inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)] text-xs font-bold text-slate-800 tracking-wider",
                          children: [
                            e.jsx(u, { className: "w-4 h-4 text-[#7C3AED]" }),
                            e.jsx("span", {
                              children:
                                "Global IT Certification Support & Assistance",
                            }),
                          ],
                        }),
                      }),
                      e.jsxs(s.h1, {
                        variants: l,
                        transition: { ...n, delay: 0.1 },
                        className:
                          "text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-slate-900 tracking-tight leading-[1.1]",
                        children: [
                          "Get Certified With Dedicated ",
                          e.jsx("br", { className: "hidden sm:inline" }),
                          e.jsx("span", {
                            className: "text-[#7C3AED]",
                            children: "Global Certification Support",
                          }),
                        ],
                      }),
                      e.jsx(s.p, {
                        variants: l,
                        transition: { ...n, delay: 0.2 },
                        className:
                          "text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed",
                        children:
                          "Pass your AWS, Azure, CompTIA, Cisco, ServiceNow, and Cyber Security certifications on your first attempt with expert guidance, practice labs, exam vouchers, and personalized 1-on-1 support.",
                      }),
                      e.jsx(s.div, {
                        variants: l,
                        transition: { ...n, delay: 0.3 },
                        className: "pt-3",
                        children: e.jsxs("button", {
                          onClick: () => i(!0),
                          className:
                            "px-9 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-xl border-2 border-blue-500 hover:border-blue-400 hover:bg-blue-500/10 text-slate-900 dark:text-white rounded-full text-base font-bold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-2.5 group cursor-pointer",
                          children: [
                            e.jsx("span", {
                              children: "Book a Free Consultation",
                            }),
                            e.jsx(d, {
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
                      children: "Top Industry Certifications",
                    }),
                    e.jsx("h2", {
                      className:
                        "text-3xl sm:text-5xl font-display font-bold text-db-text tracking-tighter leading-tight mb-4",
                      children: "Certifications We Help You Master",
                    }),
                    e.jsx("p", {
                      className:
                        "text-db-muted text-base sm:text-lg font-medium",
                      children:
                        "Comprehensive prep & 100% exam readiness support across leading global technology providers.",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                  children: v.map((t, r) =>
                    e.jsxs(
                      s.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0 },
                        transition: { delay: r * 0.05, duration: 0.5 },
                        onClick: () => i(!0),
                        className:
                          "bg-gradient-to-br from-[#0B0D14]/95 via-[#0F172A]/90 to-[#1E1B4B]/80 border-2 border-blue-500/70 hover:border-blue-400 p-6 sm:p-8 rounded-3xl backdrop-blur-2xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.25)] flex flex-col justify-between cursor-pointer",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute -bottom-16 -right-16 w-60 h-60 bg-gradient-to-br from-blue-500/30 via-indigo-600/20 to-purple-600/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500 pointer-events-none",
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
                                    children: ["Step 0", r + 1, " : ", t.badge],
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "w-10 h-10 rounded-full bg-blue-600/20 group-hover:bg-blue-600 border-2 border-blue-400/60 group-hover:border-blue-300 flex items-center justify-center text-white transition-all duration-300 group-hover:rotate-45 shadow-[0_0_15px_rgba(59,130,246,0.4)] shrink-0",
                                    children: e.jsx(f, {
                                      className: "w-5 h-5",
                                    }),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-3.5 mb-4",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-10 h-10 rounded-xl bg-blue-900/30 border border-blue-400/40 p-2 flex items-center justify-center shrink-0",
                                    children: e.jsx(c, {
                                      name: t.category,
                                      className: "w-6 h-6 object-contain",
                                    }),
                                  }),
                                  e.jsx("h3", {
                                    className:
                                      "text-xl font-bold text-white font-display group-hover:text-db-accent transition-colors leading-snug",
                                    children: t.category,
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "space-y-3 my-4",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 border-2 border-blue-500/40 group-hover:border-blue-400/80 transition-all duration-300 shadow-xl",
                                    children: e.jsx("img", {
                                      src: p(t.image),
                                      alt: t.category,
                                      className:
                                        "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                      onError: (o) => {
                                        const a = o.target,
                                          h = t.image
                                            .replace(/\+/g, "")
                                            .replace(/\.(jpg|jpeg)$/, ".webp");
                                        a.src !== p(h) && (a.src = p(h));
                                      },
                                    }),
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "flex flex-wrap items-center gap-2",
                                    children: t.floatingBadges.map((o, a) =>
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
                                        a,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                              e.jsx("ul", {
                                className: "space-y-2.5 mb-6",
                                children: t.exams.map((o, a) =>
                                  e.jsxs(
                                    "li",
                                    {
                                      className:
                                        "flex items-start gap-2.5 text-xs sm:text-sm font-medium text-white transition-colors",
                                      children: [
                                        e.jsx(m, {
                                          className:
                                            "w-4 h-4 text-db-accent shrink-0 mt-0.5",
                                        }),
                                        e.jsx("span", {
                                          className: "text-white",
                                          children: o,
                                        }),
                                      ],
                                    },
                                    a,
                                  ),
                                ),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "pt-5 border-t border-white/10 flex items-center justify-between",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-xs font-bold text-db-accent uppercase tracking-wider",
                                children: "100% Exam Readiness",
                              }),
                              e.jsxs("span", {
                                className:
                                  "text-xs font-bold text-white flex items-center gap-1.5 group-hover:text-db-accent transition-colors",
                                children: [
                                  "Get Assistance ",
                                  e.jsx(d, {
                                    className:
                                      "w-4 h-4 group-hover:translate-x-1 transition-transform",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      r,
                    ),
                  ),
                }),
              ],
            }),
          }),
          e.jsxs("section", {
            className:
              "py-16 lg:py-20 bg-gradient-to-b from-db-bg via-db-surface/30 to-db-bg border-t border-white/[0.06] relative overflow-hidden",
            children: [
              e.jsxs("div", {
                className:
                  "max-w-[1280px] mx-auto px-5 sm:px-8 mb-10 text-center relative z-10",
                children: [
                  e.jsxs("span", {
                    className:
                      "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-db-accent/10 border border-db-accent/20 text-xs font-extrabold text-db-accent uppercase tracking-widest mb-3",
                    children: [
                      e.jsx(w, { className: "w-3.5 h-3.5" }),
                      " 100+ Global Certifications Supported",
                    ],
                  }),
                  e.jsx("h3", {
                    className:
                      "text-2xl sm:text-4xl font-display font-bold text-db-text tracking-tight",
                    children: "Supported Certification Ecosystem",
                  }),
                  e.jsx("p", {
                    className:
                      "text-sm sm:text-base text-db-muted mt-2 font-medium max-w-xl mx-auto",
                    children:
                      "From Cloud & Security to Project Management, Governance, and Enterprise Systems.",
                  }),
                ],
              }),
              e.jsx("div", {
                className:
                  "relative w-full overflow-hidden py-3 mb-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 sm:before:w-36 before:bg-gradient-to-r before:from-db-bg before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 sm:after:w-36 after:bg-gradient-to-l after:from-db-bg after:to-transparent after:z-10",
                children: e.jsx("div", {
                  className:
                    "flex gap-4 w-max animate-ticker hover:[animation-play-state:paused]",
                  children: [...g, ...g].map((t, r) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "px-5 py-3.5 rounded-2xl bg-white/[0.05] dark:bg-white/[0.03] backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-lg shadow-black/5 hover:border-db-accent/50 hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center gap-3 shrink-0 group cursor-default",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-9 h-9 rounded-xl bg-white/10 dark:bg-white/5 border border-white/20 p-2 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform",
                            children: e.jsx(c, {
                              name: t.name,
                              className: "w-5 h-5 object-contain",
                            }),
                          }),
                          e.jsxs("div", {
                            className: "text-left",
                            children: [
                              e.jsx("div", {
                                className:
                                  "text-xs font-bold text-db-text group-hover:text-db-accent transition-colors whitespace-nowrap",
                                children: t.name,
                              }),
                              e.jsx("div", {
                                className:
                                  "text-[10px] font-semibold text-db-muted uppercase tracking-wider",
                                children: t.category,
                              }),
                            ],
                          }),
                        ],
                      },
                      r,
                    ),
                  ),
                }),
              }),
              e.jsx("div", {
                className:
                  "relative w-full overflow-hidden py-3 mb-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 sm:before:w-36 before:bg-gradient-to-r before:from-db-bg before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 sm:after:w-36 after:bg-gradient-to-l after:from-db-bg after:to-transparent after:z-10",
                children: e.jsx("div", {
                  className:
                    "flex gap-4 w-max animate-ticker-reverse hover:[animation-play-state:paused]",
                  children: [...x, ...x].map((t, r) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "px-5 py-3.5 rounded-2xl bg-white/[0.05] dark:bg-white/[0.03] backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-lg shadow-black/5 hover:border-cyan-500/50 hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center gap-3 shrink-0 group cursor-default",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-9 h-9 rounded-xl bg-white/10 dark:bg-white/5 border border-white/20 p-2 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform",
                            children: e.jsx(c, {
                              name: t.name,
                              className: "w-5 h-5 object-contain",
                            }),
                          }),
                          e.jsxs("div", {
                            className: "text-left",
                            children: [
                              e.jsx("div", {
                                className:
                                  "text-xs font-bold text-db-text group-hover:text-cyan-400 transition-colors whitespace-nowrap",
                                children: t.name,
                              }),
                              e.jsx("div", {
                                className:
                                  "text-[10px] font-semibold text-db-muted uppercase tracking-wider",
                                children: t.category,
                              }),
                            ],
                          }),
                        ],
                      },
                      r,
                    ),
                  ),
                }),
              }),
              e.jsx("div", {
                className:
                  "relative w-full overflow-hidden py-3 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 sm:before:w-36 before:bg-gradient-to-r before:from-db-bg before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 sm:after:w-36 after:bg-gradient-to-l after:from-db-bg after:to-transparent after:z-10",
                children: e.jsx("div", {
                  className:
                    "flex gap-4 w-max animate-ticker hover:[animation-play-state:paused]",
                  children: [...b, ...b].map((t, r) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "px-5 py-3.5 rounded-2xl bg-white/[0.05] dark:bg-white/[0.03] backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-lg shadow-black/5 hover:border-emerald-500/50 hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center gap-3 shrink-0 group cursor-default",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-9 h-9 rounded-xl bg-white/10 dark:bg-white/5 border border-white/20 p-2 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform",
                            children: e.jsx(c, {
                              name: t.name,
                              className: "w-5 h-5 object-contain",
                            }),
                          }),
                          e.jsxs("div", {
                            className: "text-left",
                            children: [
                              e.jsx("div", {
                                className:
                                  "text-xs font-bold text-db-text group-hover:text-emerald-400 transition-colors whitespace-nowrap",
                                children: t.name,
                              }),
                              e.jsx("div", {
                                className:
                                  "text-[10px] font-semibold text-db-muted uppercase tracking-wider",
                                children: t.category,
                              }),
                            ],
                          }),
                        ],
                      },
                      r,
                    ),
                  ),
                }),
              }),
            ],
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
                      children: "Comprehensive Support Package",
                    }),
                    e.jsx("h2", {
                      className:
                        "text-3xl sm:text-5xl font-display font-bold text-db-text tracking-tighter leading-tight mb-4",
                      children:
                        "What You Get With space9 Certification Support",
                    }),
                    e.jsx("p", {
                      className:
                        "text-db-muted text-base sm:text-lg font-medium",
                      children:
                        "We remove the stress and uncertainty from IT certification exams with end-to-end support.",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                  children: C.map((t, r) =>
                    e.jsxs(
                      s.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0 },
                        transition: { delay: r * 0.05, duration: 0.5 },
                        onClick: () => i(!0),
                        className:
                          "bg-[#0B0D14] border border-white/15 hover:border-db-accent/60 p-6 sm:p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 shadow-2xl flex flex-col justify-between cursor-pointer",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute -bottom-16 -right-16 w-60 h-60 bg-gradient-to-br from-db-accent/25 via-blue-600/10 to-transparent rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500 pointer-events-none",
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between gap-3 mb-5",
                                children: [
                                  e.jsxs("span", {
                                    className:
                                      "px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold text-white tracking-wide",
                                    children: [
                                      "Step 0",
                                      r + 1,
                                      " : ",
                                      t.stepBadge,
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "w-10 h-10 rounded-full bg-white/10 group-hover:bg-db-accent border border-white/15 group-hover:border-db-accent flex items-center justify-center text-white transition-all duration-300 group-hover:rotate-45 shadow-lg shrink-0",
                                    children: e.jsx(f, {
                                      className: "w-5 h-5",
                                    }),
                                  }),
                                ],
                              }),
                              e.jsx("h3", {
                                className:
                                  "text-xl font-bold text-white font-display mb-3 leading-snug group-hover:text-db-accent transition-colors",
                                children: t.title,
                              }),
                              e.jsx("div", {
                                className: "flex flex-wrap gap-2 mb-4",
                                children: e.jsxs("span", {
                                  className:
                                    "px-3.5 py-1.5 rounded-full bg-db-accent/20 border border-db-accent/35 text-xs font-semibold text-purple-200 inline-flex items-center gap-2 shadow-sm",
                                  children: [
                                    e.jsx(t.icon, {
                                      className: "w-3.5 h-3.5 text-db-accent",
                                    }),
                                    t.tag,
                                  ],
                                }),
                              }),
                              e.jsxs("div", {
                                className: "space-y-3 my-4",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 border border-white/15 group-hover:border-db-accent/50 transition-all duration-300 shadow-xl",
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
                                    children: t.floatingBadges.map((o, a) =>
                                      e.jsxs(
                                        "span",
                                        {
                                          className:
                                            "px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-bold text-white/90 flex items-center gap-1.5 shadow-sm",
                                          children: [
                                            e.jsx("span", {
                                              className:
                                                "w-1.5 h-1.5 rounded-full bg-db-accent animate-pulse",
                                            }),
                                            o,
                                          ],
                                        },
                                        a,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                              e.jsx("p", {
                                className:
                                  "text-sm text-white/90 leading-relaxed font-medium mb-6",
                                children: t.desc,
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
                                      "text-[11px] font-semibold text-db-muted uppercase tracking-wider",
                                    children: t.statLabel,
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-db-accent/30 group-hover:border-db-accent/50 transition-all",
                                children: e.jsx(d, {
                                  className:
                                    "w-4 h-4 group-hover:translate-x-0.5 transition-transform",
                                }),
                              }),
                            ],
                          }),
                        ],
                      },
                      r,
                    ),
                  ),
                }),
              ],
            }),
          }),
          e.jsx("section", {
            className:
              "py-20 lg:py-28 bg-db-bg relative overflow-hidden border-t border-white/[0.06]",
            children: e.jsx("div", {
              className: "max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10",
              children: e.jsxs("div", {
                className:
                  "bg-gradient-to-br from-db-surface/80 via-db-bg to-db-surface/60 border border-white/15 rounded-3xl p-8 sm:p-16 lg:p-20 text-center max-w-5xl mx-auto shadow-2xl backdrop-blur-2xl relative overflow-hidden group",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute -top-24 -left-24 w-80 h-80 bg-db-accent/20 rounded-full blur-[120px] pointer-events-none group-hover:bg-db-accent/30 transition-all duration-700",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute -bottom-24 -right-24 w-80 h-80 bg-blue-500/15 rounded-full blur-[120px] pointer-events-none group-hover:bg-blue-500/25 transition-all duration-700",
                  }),
                  e.jsxs("div", {
                    className: "relative z-10 space-y-8",
                    children: [
                      e.jsx("div", {
                        className: "flex justify-center",
                        children: e.jsxs("span", {
                          className:
                            "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-2xl border border-white/40 dark:border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_10px_25px_-5px_rgba(0,0,0,0.12)] text-xs font-bold text-db-text uppercase tracking-widest",
                          children: [
                            e.jsx(w, { className: "w-4 h-4 text-db-accent" }),
                            "Start Preparing Today",
                          ],
                        }),
                      }),
                      e.jsxs("h2", {
                        className:
                          "text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-db-text tracking-tighter leading-[1.15]",
                        children: [
                          "Ready To Get Certified? ",
                          e.jsx("br", { className: "hidden sm:inline" }),
                          e.jsx("span", {
                            className: "text-db-accent",
                            children: "Talk To Our Certification Experts.",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className:
                          "text-base sm:text-xl text-db-muted max-w-2xl mx-auto font-medium leading-relaxed",
                        children:
                          "Get a personalized study roadmap, discounted exam vouchers, and 1-on-1 mentor guidance to pass your exam on the first attempt.",
                      }),
                      e.jsxs("div", {
                        className:
                          "flex flex-wrap items-center justify-center gap-3 pt-2",
                        children: [
                          e.jsxs("span", {
                            className:
                              "px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs sm:text-sm font-semibold text-db-text flex items-center gap-2 shadow-sm",
                            children: [
                              e.jsx(m, {
                                className: "w-4 h-4 text-db-accent shrink-0",
                              }),
                              "100% Exam Readiness Guarantee",
                            ],
                          }),
                          e.jsxs("span", {
                            className:
                              "px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs sm:text-sm font-semibold text-db-text flex items-center gap-2 shadow-sm",
                            children: [
                              e.jsx(m, {
                                className: "w-4 h-4 text-db-accent shrink-0",
                              }),
                              "1-on-1 Certified Mentors",
                            ],
                          }),
                          e.jsxs("span", {
                            className:
                              "px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs sm:text-sm font-semibold text-db-text flex items-center gap-2 shadow-sm",
                            children: [
                              e.jsx(m, {
                                className: "w-4 h-4 text-db-accent shrink-0",
                              }),
                              "Verified Practice Exam Dumps",
                            ],
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "pt-4",
                        children: e.jsxs("button", {
                          onClick: () => i(!0),
                          className:
                            "w-full sm:w-auto px-10 py-5 bg-white/10 dark:bg-white/5 backdrop-blur-xl border-2 border-blue-500 hover:border-blue-400 hover:bg-blue-500/10 text-slate-900 dark:text-white rounded-full text-lg font-bold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 active:scale-95 transition-all inline-flex items-center justify-center gap-3 group/btn cursor-pointer",
                          children: [
                            e.jsx("span", {
                              children: "Book Your Free Certification Call",
                            }),
                            e.jsx(d, {
                              className:
                                "w-6 h-6 text-blue-500 group-hover/btn:translate-x-1.5 transition-transform",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      e.jsx(A, {}),
      e.jsx(k, {
        isOpen: y,
        onClose: () => i(!1),
        defaultCourse: "Certification Support",
      }),
    ],
  });
}
export { O as CertificationSupportPage };
