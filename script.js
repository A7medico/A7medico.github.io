// ============================================
// AHMAD ISMAIL — PORTFOLIO SCRIPT v5.0
// Modern Dark · Bilingual (EN/AR)
// ============================================

// ===== TRANSLATIONS =====
const translations = {
  en: {
    "nav.about": "About",
    "nav.strengths": "Strengths",
    "nav.expertise": "Expertise",
    "nav.solutions": "Solutions",
    "nav.projects": "Projects",
    "nav.journey": "Journey",
    "nav.stack": "Stack",
    "nav.contact": "Contact",
    "hero.boot1": "",
    "hero.boot2": "",
    "hero.boot3": "",
    "hero.boot4": "",
    "hero.greeting": '<span class="badge-prefix">Portfolio ·</span> Ahmad Ismail',
    "hero.available": "Available for Contracts & Roles",
    "hero.name": "Ahmad Ismail",
    "hero.desc": "Engineering resilient digital systems where <strong>Full-Stack Software</strong>, <strong>Machine Learning</strong>, and <strong>Enterprise Cybersecurity</strong> converge into mission-critical products.",
    "chip.ml": "Machine Learning",
    "chip.sec": "IoT Intrusion Defense",
    "chip.net": "Network Infrastructure",
    "chip.dev": "Full-Stack Systems",
    "btn.projects": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg> Explore Projects',
    "btn.hire": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 11l-3-3m0 0l-3 3m3-3v8"/></svg> Hire / Inquire',
    "btn.cv": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download CV',
    "btn.contact": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> Get in Touch',
    "cmd.about": "about",
    "about.eyebrow": "About Me",
    "about.title": "Turning Raw Flows & Complex Data into Resilient Engineering",
    "about.p1": "I'm a <strong>Computer Engineer</strong> driven by the challenge of designing resilient, high-performance systems. My work bridges algorithmic intelligence and physical network infrastructure — from training ensemble ML models on millions of packet flows to building real-time dashboards.",
    "about.p2": "Whether constructing <strong>IoTGuard</strong> to combat DDoS threats with automated responses or building production web apps with <strong>Next.js</strong> and <strong>WebSockets</strong>, I focus on clean architecture, verifiable security, and great interfaces.",
    "stat.auc": "Model ROC-AUC",
    "stat.auc_sub": "LightGBM IDS",
    "stat.samples": "Network Flows",
    "stat.samples_sub": "Trained & Validated",
    "stat.tests": "Unit & Int Tests",
    "stat.tests_sub": "Passing 100%",
    "stat.years": "Years Engineering",
    "stat.years_sub": "Hardware & Software",
    "cmd.strengths": "strengths",
    "strengths.eyebrow": "Core Strengths",
    "strengths.title": "Beyond Code — What Drives My Engineering",
    "bento.systems_title": "Systems Thinking & Architecture Design",
    "bento.systems_desc": "I don't just write code — I architect complete systems. From packet capture pipelines to real-time dashboards, every component is designed to work harmoniously at scale.",
    "bento.precision_title": "Precision-Driven ML",
    "bento.precision_desc": "Models that explain their reasoning through SHAP values and transparent decision boundaries.",
    "bento.security_title": "Security-First Mindset",
    "bento.security_desc": "From automated firewall enforcement to zero-trust verification and JWT authentication — security is always first-class.",
    "bento.network_title": "Deep Network Expertise",
    "bento.network_desc": "Multi-area OSPF, VLAN segmentation, ACLs, NAT/PAT, and Wireshark forensics across enterprise topologies.",
    "bento.fullstack_title": "End-to-End Builder",
    "bento.fullstack_desc": "From Python ML backends to React frontends, Docker to Vercel — I own the entire lifecycle.",
    "bento.collab_title": "Collaborative & Bilingual",
    "bento.collab_desc": "Fluent in English and Arabic, comfortable in cross-functional teams, passionate about clear documentation.",
    "cmd.services": "capabilities_matrix",
    "expertise.eyebrow": "Engineering Matrix & Live Simulation",
    "expertise.title": "Four Domains of Technical Rigor — Tested Live",
    "expertise.subtitle": "Select an engineering domain on the left to inspect its live reactive testbed on the right. Experience real-time latency simulations, dynamic ROC threshold sweeps, and automated cyber defense execution.",
    "studio.badge_fullstack": "REAL-TIME ENGINE",
    "studio.badge_ml": "AUC: 96.1%",
    "studio.badge_cyber": "AUTOMATED MITIGATION",
    "studio.badge_net": "L2/L3 HARDENED",
    "exp.ml_title": "Machine Learning & AI Systems",
    "exp.ml_desc": "Designing, training, and deploying production-grade ML pipelines with ensemble models, feature engineering, and model explainability.",
    "exp.ml_point1": "✦ High-accuracy ensembles (LightGBM, XGBoost, IsolationForest)",
    "exp.ml_point2": "✦ Explainable AI (XAI) using SHAP values",
    "exp.ml_point3": "✦ End-to-end preprocessing, ROC-AUC, hyperparameter tuning",
    "exp.sec_title": "IoT & Network Cyber Defense",
    "exp.sec_desc": "Architecting intrusion detection and automated mitigation systems. Securing IoT perimeters against zero-day threats, SYN floods, and botnets.",
    "exp.sec_point1": "✦ Real-time packet capture, flow inspection, anomaly detection",
    "exp.sec_point2": "✦ Automated firewall with dynamic nftables rule injection",
    "exp.sec_point3": "✦ Suricata IDS integration, threat intel, log correlation",
    "exp.dev_title": "Full-Stack & Real-Time Systems",
    "exp.dev_desc": "Building responsive web apps and distributed microservices. WebSocket data feeds, analytics dashboards, and RESTful APIs.",
    "exp.dev_point1": "✦ WebSocket live streaming and real-time telemetry",
    "exp.dev_point2": "✦ Production apps with Next.js, React, Flask, Node.js",
    "exp.dev_point3": "✦ Docker deployment, CI/CD, and JWT security",
    "exp.net_title": "Enterprise Network Architecture",
    "exp.net_desc": "Deep expertise in architecting and hardening complex enterprise networks across Layer 2 and Layer 3 topologies.",
    "exp.net_point1": "✦ Multi-area OSPFv2/v3, metric tuning, route convergence",
    "exp.net_point2": "✦ VLAN segmentation, 802.1Q trunking, Inter-VLAN routing",
    "exp.net_point3": "✦ IPv4/IPv6 VLSM, STP/RSTP/PortFast, EtherChannel",
    "exp.net_point4": "✦ ACLs, NAT/PAT, DHCP Snooping, Port Security",
    "exp.net_point5": "✦ Wireshark forensics and diagnostic packet analysis",
    "cmd.solutions": "solutions",
    "solutions.eyebrow": "Engineered for High-Stakes Impact",
    "solutions.title": "Why Work With Me · Enterprise Value Proposition",
    "sol.item1_badge": "TURNKEY ARCHITECTURE",
    "sol.item1_title": "End-to-End Full-Stack Execution",
    "sol.item1_desc": "From data schemas and high-throughput Python/FastAPI microservices to pixel-perfect, accessible Next.js frontends with 60fps responsive animation. You get zero handoff friction and a cohesive, shippable product.",
    "sol.item1_kpi": "Full-Cycle Ownership",
    "sol.item2_badge": "ALGORITHMIC SPEED",
    "sol.item2_title": "Sub-Millisecond Inference & Streaming",
    "sol.item2_desc": "Trained on millions of samples, optimized for real-time WebSocket pipelines and low-latency inference (&lt;1.2ms). Algorithms engineered for instant response without bloat or server bottlenecks.",
    "sol.item2_kpi": "Inference Latency",
    "sol.item3_badge": "CYBER DEFENSE",
    "sol.item3_title": "Zero-Trust & Hardened Infrastructure",
    "sol.item3_desc": "Built with defense-in-depth principles: automated firewall enforcement (nftables), Suricata IDS flow correlation, rigorous input sanitization, and strict L2/L3 network isolation against attacks.",
    "sol.item3_kpi": "Attack Detection AUC",
    "sol.item4_badge": "CLIENT COLLABORATION",
    "sol.item4_title": "Bilingual Delivery & Transparent Comms",
    "sol.item4_desc": "Seamless bilingual communication in English and Arabic. Fast iterations, transparent architecture diagrams, thorough documentation, and rapid turnaround for international clients.",
    "sol.item4_kpi": "Response & Iteration",
    "sol.cta_badge": "HIRING & CONTRACTS",
    "sol.cta_title": "Have an ambitious project or a role to fill?",
    "sol.cta_desc": "Whether you need an end-to-end full-stack SaaS platform, an intelligent ML pipeline, or hardened network defense, I bring senior engineering rigor to your mission.",
    "btn.hire_discuss": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Discuss Your Project',
    "btn.review_code": '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85 0 1.7.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg> Review GitHub Code',
    "cmd.projects": "projects",
    "projects.eyebrow": "Featured Work",
    "projects.title": "Featured Systems & Live Deployments",
    "badge.featured": "SENIOR CAPSTONE",
    "iotguard.tagline": "AI-Powered Intrusion Detection & Mitigation System",
    "iotguard.desc": "A production-grade cyber-defense framework protecting IoT ecosystems from DDoS, SYN floods, and port scans. Ensemble of LightGBM and IsolationForest trained on 2.1M+ flows, achieving 96.1% AUC with SHAP explainability and automated firewall enforcement.",
    "iotguard.point1": "✦ <strong>Real-Time Pipeline:</strong> Scapy + Suricata for microsecond classification.",
    "iotguard.point2": "✦ <strong>Explainable AI:</strong> SHAP values pinpoint triggering features.",
    "iotguard.point3": "✦ <strong>Automated Response:</strong> nftables rule injection to isolate threats.",
    "badge.portal": "LIVE PORTAL",
    "unipath.tagline": "Australian & Oceania Higher Education Admissions Hub",
    "unipath.desc": "Interactive portal for international scholars navigating admissions across Australia's Group of Eight and NZ universities. ATAR/IELTS conversion, Subclass 485 visa calculators, and Kanban trackers.",
    "unipath.point1": "✦ <strong>Eligibility Engine:</strong> GPA, ATAR, IELTS multi-tier matching.",
    "unipath.point2": "✦ <strong>Visa Calculators:</strong> Post-study visa & CRICOS compliance.",
    "unipath.point3": "✦ <strong>Dynamic UI:</strong> Client-side Kanban and interactive charts.",
    "badge.concept": "CONCEPT SHOWCASE",
    "aureum.tagline": "Exclusive Art Deco Digital Experience & Collection Curation",
    "aureum.desc": "A single-page digital masterpiece embodying 1920s Art Deco grandeur and contemporary digital engineering. Built to showcase ultra-high-end UI/UX capabilities: custom geometric sunbursts, gold foil shimmer shaders, interactive collection vaults, and refined typography.",
    "aureum.point1": "✦ <strong>Art Deco Design System:</strong> Handcrafted sunburst geometry, chevron motifs, and jewel-tone palette.",
    "aureum.point2": "✦ <strong>Curated Capabilities:</strong> Bespoke animations, interactive catalog filtering, and theatrical narrative.",
    "aureum.point3": "✦ <strong>Performance & Craft:</strong> Zero-dependency vanilla architecture achieving 60fps animations.",
    "badge.netlab": "ARCH LAB",
    "ospf.point1": "✦ <strong>Dynamic Routing:</strong> Multi-area OSPFv2/v3 convergence & cost tuning.",
    "ospf.point2": "✦ <strong>VLAN & Trunking:</strong> 802.1Q encapsulation, SVIs, Router-on-a-Stick.",
    "ospf.point3": "✦ <strong>Packet Forensics:</strong> Wireshark deep inspection, ACLs, NAT/PAT.",
    "badge.security": "OPEN LAB",
    "sec.point1": "✦ <strong>Packet Crafting:</strong> Scapy raw frame generation & protocol dissection.",
    "sec.point2": "✦ <strong>Zero-Trust Engine:</strong> Automated port inspection & CVE heuristics.",
    "sec.point3": "✦ <strong>Intelligent Triage:</strong> Lightweight ML triage for anomaly categorization.",
    "tools.used": "Technologies & Tools:",
    "btn.git_clone": "View Code",
    "btn.open_site": "Live Demo",
    "proj3.title": "Multi-Area OSPF & Inter-VLAN Infrastructure",
    "proj3.tagline": "Enterprise Routing & Packet Forensics",
    "proj3.desc": "Production-grade multi-tier enterprise network infrastructure featuring multi-area OSPFv2/v3, 802.1Q trunking, inter-VLAN routing, and hardened perimeter ACLs with deep Wireshark packet forensics.",
    "proj4.title": "Security Tooling & AI Algorithms",
    "proj4.tagline": "Open-Source Contributions & Research",
    "proj4.desc": "Advanced security tooling and machine learning heuristics suite. Packet parsing with Scapy, zero-trust perimeter verification, dynamic nftables enforcement, and automated vulnerability scanning.",
    "cmd.journey": "journey",
    "journey.eyebrow": "Experience & Education",
    "journey.title": "Academic & Engineering Trajectory",
    "milestone.degree_title": "B.Sc. in Computer Engineering",
    "milestone.degree_org": "Faculty of Engineering · Graduated 2025",
    "milestone.degree_desc": "4-year curriculum covering algorithms, OS, networking, digital systems, databases, and ML fundamentals.",
    "milestone.capstone_title": "IoTGuard — Senior Capstone Project",
    "milestone.capstone_org": "Final Year Research & Engineering Defense",
    "milestone.capstone_desc": "Led research, architecture, model training, and deployment of AI-driven IDS. Defended with high honors showcasing real-time DDoS mitigation.",
    "milestone.infra_title": "Enterprise Network Lab & Full-Stack Systems",
    "milestone.infra_org": "Production Deployments & Continuous Mastery",
    "milestone.infra_desc": "OSPF topologies, 802.1Q trunking, inter-VLAN routing. Built and launched UniPath portal. Active GitHub development.",
    "cmd.skills": "stack",
    "skills.eyebrow": "Technology Stack",
    "skills.title": "Every Tool & Framework in My Arsenal",
    "skills.subtitle": "Everything I use to design, build, test, and protect intelligent systems.",
    "tab.all": "All Stack",
    "tab.ml": "ML & AI",
    "tab.net": "Networking",
    "tab.sec": "Security",
    "tab.dev": "Full-Stack",
    "tab.tools": "DevOps",
    "cat.ml": "Machine Learning & AI",
    "cat.net": "Networking & Infrastructure",
    "cat.sec": "Cybersecurity & Defense",
    "cat.dev": "Full-Stack & Web",
    "cat.tools": "DevOps & Tools",
    "cmd.contact": "contact",
    "contact.eyebrow": "Get In Touch",
    "contact.title": "Have an Idea? Let's Connect.",
    "contact.info_title": "Available for Opportunities",
    "contact.info_desc": "Open to engineering roles, ML research, network architecture consultations, and freelance collaborations.",
    "contact.guarantee": "Response within 24h · Direct to inbox",
    "form.name": "Your Name",
    "form.email": "Email Address",
    "form.message": "Your Message",
    "form.submit": "Send Message",
    "footer.copyright": "© 2026 Ahmad Ismail — Computer Engineering & Intelligent Systems"
  },
  ar: {
    "nav.about": "نبذة عني",
    "nav.strengths": "نقاط القوة",
    "nav.expertise": "الخبرات",
    "nav.solutions": "الحلول",
    "nav.projects": "المشاريع",
    "nav.journey": "المسار",
    "nav.stack": "التقنيات",
    "nav.contact": "تواصل",
    "hero.boot1": "",
    "hero.boot2": "",
    "hero.boot3": "",
    "hero.boot4": "",
    "hero.greeting": '<span class="badge-prefix">الملف الهندسي ·</span> أحمد إسماعيل',
    "hero.available": "متاح للتعاقد والفرص الهندسية",
    "hero.name": "أحمد إسماعيل",
    "hero.desc": "هندسة أنظمة رقمية متينة تجمع بين <strong>البرمجيات المتكاملة</strong>، و<strong>تعلم الآلة</strong>، و<strong>الأمن السيبراني</strong> في منتجات برمجية جاهزة للإنتاج والمهام الحرجة.",
    "chip.ml": "تعلم الآلة",
    "chip.sec": "أمن IoT",
    "chip.net": "البنية التحتية",
    "chip.dev": "أنظمة متكاملة",
    "btn.projects": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg> استعراض المشاريع',
    "btn.hire": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 11l-3-3m0 0l-3 3m3-3v8"/></svg> توظيف / استفسار',
    "btn.cv": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> تحميل السيرة',
    "btn.contact": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> تواصل معي',
    "cmd.about": "نبذة",
    "about.eyebrow": "من أنا",
    "about.title": "تحويل البيانات المعقدة إلى أنظمة هندسية ذكية",
    "about.p1": "أنا <strong>مهندس حاسوب</strong> شغوف بتصميم أنظمة عالية الأداء. يجمع عملي بين الذكاء الخوارزمي والبنية التحتية للشبكات — من تدريب نماذج تعلم الآلة على ملايين التدفقات إلى بناء لوحات تحكم تفاعلية لحظية.",
    "about.p2": "سواء عبر بناء <strong>IoTGuard</strong> للتصدي لهجمات DDoS أو تطوير تطبيقات باستخدام <strong>Next.js</strong> و <strong>WebSockets</strong>، أركز على المعمارية النظيفة والأمان والواجهات الجذابة.",
    "stat.auc": "دقة النموذج",
    "stat.auc_sub": "نظام كشف التسلل",
    "stat.samples": "تدفق شبكي",
    "stat.samples_sub": "تدريب وتحقق",
    "stat.tests": "اختبار برمجي",
    "stat.tests_sub": "ناجحة 100%",
    "stat.years": "سنوات هندسة",
    "stat.years_sub": "عتاد وبرمجيات",
    "cmd.strengths": "نقاط_القوة",
    "strengths.eyebrow": "نقاط القوة",
    "strengths.title": "أكثر من كود — ما يحرك هندستي",
    "bento.systems_title": "التفكير المنظومي",
    "bento.systems_desc": "لا أكتب كود فقط — أصمم أنظمة متكاملة. كل مكوّن مصمم ليعمل بتناغم على نطاق واسع.",
    "bento.precision_title": "تعلم آلة دقيق",
    "bento.precision_desc": "نماذج تشرح منطقها عبر قيم SHAP وحدود قرار شفافة.",
    "bento.security_title": "أمن أولاً",
    "bento.security_desc": "من أتمتة جدار الحماية إلى Zero Trust وتوثيق JWT.",
    "bento.network_title": "خبرة شبكات عميقة",
    "bento.network_desc": "OSPF متعدد المناطق، VLANs، ACLs، NAT/PAT، وتحليل Wireshark.",
    "bento.fullstack_title": "بنّاء شامل",
    "bento.fullstack_desc": "من Python إلى React، Docker إلى Vercel — أملك دورة التطوير الكاملة.",
    "bento.collab_title": "تعاوني ثنائي اللغة",
    "bento.collab_desc": "إتقان للعربية والإنجليزية وشغف بالتوثيق ومشاركة المعرفة.",
    "cmd.services": "مصفوفة_القدرات",
    "expertise.eyebrow": "مصفوفة هندسية ومحاكاة حية",
    "expertise.title": "أربعة مجالات من الدقة الهندسية — اختبار حي",
    "expertise.subtitle": "اختر مجالك الهندسي من اليسار لمعاينة بيئة الاختبار التفاعلية على اليمين. اختبر محاكاة زمن الاستجابة، وضبط عتبة ROC، وتفعيل الدفاع السيبراني الآلي.",
    "studio.badge_fullstack": "محرك فوري",
    "studio.badge_ml": "دقة: 96.1%",
    "studio.badge_cyber": "استجابة آلية",
    "studio.badge_net": "حماية L2/L3",
    "exp.ml_title": "تعلم الآلة والذكاء الاصطناعي",
    "exp.ml_desc": "تصميم وتدريب ونشر خطوط معالجة تعلم الآلة الجاهزة للإنتاج.",
    "exp.ml_point1": "✦ نماذج تجميعية (LightGBM, XGBoost, IsolationForest)",
    "exp.ml_point2": "✦ ذكاء اصطناعي قابل للتفسير باستخدام SHAP",
    "exp.ml_point3": "✦ معالجة مسبقة، ROC-AUC، ضبط المعاملات",
    "exp.sec_title": "أمن إنترنت الأشياء",
    "exp.sec_desc": "أنظمة كشف التسلل والاستجابة الآلية.",
    "exp.sec_point1": "✦ التقاط الحزم وفحص التدفقات واكتشاف الشذوذ",
    "exp.sec_point2": "✦ استجابة آلية عبر nftables / iptables",
    "exp.sec_point3": "✦ تكامل Suricata واستخبارات التهديدات",
    "exp.dev_title": "أنظمة متكاملة ولحظية",
    "exp.dev_desc": "تطبيقات ويب سريعة وخدمات خلفية موزعة.",
    "exp.dev_point1": "✦ بث WebSockets وقياسات لحظية",
    "exp.dev_point2": "✦ Next.js, React, Flask, Node.js",
    "exp.dev_point3": "✦ Docker, CI/CD, JWT",
    "exp.net_title": "معمارية شبكات المؤسسات",
    "exp.net_desc": "خبرة في تصميم وحماية شبكات معقدة.",
    "exp.net_point1": "✦ OSPFv2/v3 متعدد المناطق",
    "exp.net_point2": "✦ VLANs, 802.1Q, Inter-VLAN routing",
    "exp.net_point3": "✦ VLSM, STP/RSTP, EtherChannel",
    "exp.net_point4": "✦ ACLs, NAT/PAT, أمان المنافذ",
    "exp.net_point5": "✦ تحليل Wireshark الجنائي",
    "cmd.solutions": "الحلول",
    "solutions.eyebrow": "هندسة تصنع الفارق",
    "solutions.title": "لماذا توظفني · القيمة الهندسية للمؤسسات",
    "sol.item1_badge": "معمارية متكاملة",
    "sol.item1_title": "تنفيذ برمجيات متكاملة شاملة",
    "sol.item1_desc": "من قواعد البيانات والخدمات السحابية السريعة بـ Python وFastAPI إلى واجهات Next.js تفاعلية بسرعة 60 إطاراً في الثانية بدون أي تعقيد في التسليم.",
    "sol.item1_kpi": "تحكم شامل بالمنتج",
    "sol.item2_badge": "سرعة خوارزمية",
    "sol.item2_title": "استدلال خوارزمي وبث فائق السرعة",
    "sol.item2_desc": "نماذج مدربة على ملايين العينات، مهيأة لبث WebSockets اللحظي واستدلال فائق السرعة أقل من 1.2ms لتفادي أي اختناق في الخوادم.",
    "sol.item2_kpi": "زمن استدلال النموذج",
    "sol.item3_badge": "دفاع سيبراني",
    "sol.item3_title": "بنية تحتية بمبدأ Zero-Trust",
    "sol.item3_desc": "مبنية وفق مبادئ الدفاع العميق: حقن آلي لقواعد جدار الحماية (nftables)، مراقبة Suricata، وتأمين منافذ L2/L3 ضد التهديدات.",
    "sol.item3_kpi": "دقة رصد الهجمات",
    "sol.item4_badge": "تواصل سلس وشامل",
    "sol.item4_title": "تنفيذ ثنائي اللغة وتواصل شفاف",
    "sol.item4_desc": "تواصل سلس باللغتين العربية والإنجليزية. سرعة في التنفيذ، وتوثيق تقني دقيق، وتقارير دورية واضحة للعملاء وفرق العمل الدولية.",
    "sol.item4_kpi": "زمن الاستجابة والتنفيذ",
    "sol.cta_badge": "التوظيف والتعاقد",
    "sol.cta_title": "هل لديك مشروع طموح أو منصب هندسي شاغر؟",
    "sol.cta_desc": "سواء كنت بحاجة إلى منصة SaaS متكاملة، أو خط معالجة ذكاء اصطناعي، أو حماية لشبكتك، سأمنح مشروعك الجودة الهندسية التي يستحقها.",
    "btn.hire_discuss": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> ناقش مشروعك معي',
    "btn.review_code": '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85 0 1.7.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg> راجع الكود على GitHub',
    "cmd.projects": "المشاريع",
    "projects.eyebrow": "الأنظمة المنشورة",
    "projects.title": "أبرز الأنظمة والمشاريع",
    "badge.featured": "مشروع التخرج",
    "iotguard.tagline": "نظام ذكي لكشف التسلل والتعامل مع الهجمات",
    "iotguard.desc": "منظومة دفاع سيبراني تحمي شبكات IoT من الهجمات الكثيفة. نموذجي LightGBM وIsolationForest على أكثر من 2.1 مليون تدفق بدقة 96.1%.",
    "iotguard.point1": "✦ <strong>معالجة لحظية:</strong> Scapy + Suricata.",
    "iotguard.point2": "✦ <strong>ذكاء قابل للتفسير:</strong> قيم SHAP.",
    "iotguard.point3": "✦ <strong>استجابة تلقائية:</strong> حقن قواعد nftables.",
    "badge.portal": "منصة حية",
    "unipath.tagline": "بوابة القبول الجامعي لأستراليا ونيوزيلندا",
    "unipath.desc": "بوابة تفاعلية للطلاب الدوليين مع حواسب ATAR وIELTS وحساب تأشيرة 485 ولوحة كانبان.",
    "unipath.point1": "✦ <strong>محرك الأهلية:</strong> مطابقة المعدلات.",
    "unipath.point2": "✦ <strong>حاسبة التأشيرة:</strong> مدد العمل بعد التخرج.",
    "unipath.point3": "✦ <strong>واجهة ديناميكية:</strong> كانبان ورسوم تفاعلية.",
    "badge.concept": "مشروع مفاهيمي",
    "aureum.tagline": "تجربة رقمية فاخرة بنمط الآرت ديكو لإدارة المقتنيات الفنية",
    "aureum.desc": "تحفة رقمية تجسد فخامة الآرت ديكو الكلاسيكي في العشرينيات بأسلوب هندسي معاصر. صُممت لاستعراض أحدث قدرات تصميم وتطوير الواجهات الفاخرة (UI/UX): رسومات هندسية متقدمة، لمعان ذهبي تفاعلي، وتنسيق بصري متقن.",
    "aureum.point1": "✦ <strong>نظام تصميم آرت ديكو:</strong> هندسة شعاعية، نقوش شيفرون، وألوان زمردية وذهبية فاخرة.",
    "aureum.point2": "✦ <strong>استعراض القدرات:</strong> تحريك سلس ومؤثرات تفاعلية وسرد بصري استثنائي.",
    "aureum.point3": "✦ <strong>أداء فائق:</strong> كود أصلي 100% بدون مكتبات ثقيلة بسرعة 60 إطاراً في الثانية.",
    "badge.netlab": "مختبر معمارية الشبكات",
    "ospf.point1": "✦ <strong>توجيه ديناميكي:</strong> OSPFv2/v3 متعدد المناطق وضبط المسارات.",
    "ospf.point2": "✦ <strong>تجزئة الشبكات:</strong> 802.1Q وSVIs وتوجيه Inter-VLAN.",
    "ospf.point3": "✦ <strong>تحليل الحزم:</strong> تشخيص متقدم بـ Wireshark وACLs وNAT/PAT.",
    "badge.security": "أبحاث وأدوات أمنية",
    "sec.point1": "✦ <strong>تشكيل الحزم:</strong> Scapy لتوليد وتحليل الإطارات المباشرة.",
    "sec.point2": "✦ <strong>محرك Zero-Trust:</strong> فحص المنافذ واكتشاف الثغرات آلياً.",
    "sec.point3": "✦ <strong>فرز ذكي:</strong> تصنيف الشذوذ بخوارزميات ذكاء اصطناعي خفيفة.",
    "tools.used": "التقنيات المستخدمة:",
    "btn.git_clone": "كود المشروع",
    "btn.open_site": "معاينة حية",
    "proj3.title": "OSPF متعدد المناطق وInter-VLAN",
    "proj3.tagline": "محاكاة شبكات المؤسسات",
    "proj3.desc": "شبكات متقدمة مع OSPF و802.1Q وACLs وNAT/PAT وWireshark.",
    "proj4.title": "أدوات الأمن وخوارزميات AI",
    "proj4.tagline": "مساهمات مفتوحة المصدر",
    "proj4.desc": "تجارب Python وScapy ونماذج ذكاء اصطناعي.",
    "cmd.journey": "المسار",
    "journey.eyebrow": "المسار المهني والأكاديمي",
    "journey.title": "المسار الأكاديمي والهندسي",
    "milestone.degree_title": "بكالوريوس هندسة حاسوب",
    "milestone.degree_org": "كلية الهندسة · تخرج 2025",
    "milestone.degree_desc": "منهج شامل يغطي الخوارزميات ونظم التشغيل والشبكات وقواعد البيانات وتعلم الآلة.",
    "milestone.capstone_title": "IoTGuard — مشروع التخرج",
    "milestone.capstone_org": "بحث ومناقشة التخرج",
    "milestone.capstone_desc": "قيادة بحث وتصميم ونشر نظام كشف التسلل بالذكاء الاصطناعي. مناقشة بامتياز.",
    "milestone.infra_title": "مختبر الشبكات والأنظمة",
    "milestone.infra_org": "مشاريع حية وتطوير مستمر",
    "milestone.infra_desc": "تصميم طوبولوجيا OSPF وإطلاق UniPath والنشر المستمر على GitHub.",
    "cmd.skills": "التقنيات",
    "skills.eyebrow": "حزمة التقنيات",
    "skills.title": "كل الأدوات والأطر في ترسانتي",
    "skills.subtitle": "كل ما أستخدمه لتصميم وبناء واختبار وحماية الأنظمة الذكية.",
    "tab.all": "الكل",
    "tab.ml": "تعلم الآلة",
    "tab.net": "الشبكات",
    "tab.sec": "الأمن",
    "tab.dev": "التطوير",
    "tab.tools": "الأدوات",
    "cat.ml": "تعلم الآلة والذكاء الاصطناعي",
    "cat.net": "الشبكات والبنية التحتية",
    "cat.sec": "الأمن السيبراني",
    "cat.dev": "التطوير المتكامل",
    "cat.tools": "أدوات التطوير",
    "cmd.contact": "تواصل",
    "contact.eyebrow": "تواصل معي",
    "contact.title": "لديك فكرة؟ دعنا نتحدث.",
    "contact.info_title": "متاح للفرص المتميزة",
    "contact.info_desc": "متاح للوظائف الهندسية وبحوث تعلم الآلة واستشارات الشبكات والتعاون التقني.",
    "contact.guarantee": "الرد خلال 24 ساعة",
    "form.name": "الاسم الكامل",
    "form.email": "البريد الإلكتروني",
    "form.message": "نص الرسالة",
    "form.submit": "إرسال الرسالة",
    "footer.copyright": "© 2026 أحمد إسماعيل — هندسة الحاسوب والأنظمة الذكية"
  }
};

const ROLES = {
  en: [
    'Full-Stack Systems Architect',
    'Machine Learning Engineer',
    'Cyber Defense Specialist',
    'Computer Engineer',
    'Enterprise Network Builder'
  ],
  ar: [
    'معماري برمجيات متكاملة',
    'مهندس تعلم آلة وذكاء اصطناعي',
    'أخصائي أمن سيبراني ودفاع',
    'مهندس حاسوب',
    'معماري شبكات المؤسسات'
  ]
};

// ===== HERO ARCHITECTURE DECK TABS =====
(function initHeroDeckTabs() {
  const tabs = document.querySelectorAll('.deck-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const view = tab.getAttribute('data-deck-view');
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.deck-view-content').forEach(v => v.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById('deck_view_' + view);
      if (target) {
        target.classList.add('active');
      }
    });
  });
})();

let currentLang = localStorage.getItem('portfolio-lang') || 'en';

// ===== LANGUAGE SWITCH =====
function applyLanguage(lang) {
  if (lang !== 'en' && lang !== 'ar') lang = 'en';
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  const html = document.documentElement;
  const langLabel = document.getElementById('lang_label');

  if (lang === 'ar') {
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');
    document.body.classList.add('lang-ar');
    if (langLabel) langLabel.textContent = 'EN';
  } else {
    html.setAttribute('lang', 'en');
    html.setAttribute('dir', 'ltr');
    document.body.classList.remove('lang-ar');
    if (langLabel) langLabel.textContent = 'عربي';
  }

  const dict = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerHTML = dict[key];
  });

  resetTypewriter();
}

const langToggleBtn = document.getElementById('lang_toggle');
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'ar' : 'en');
  });
}

// ===== INTERACTIVE CYBER MESH & PARTICLE CANVAS =====
(function initCyberMeshCanvas() {
  const canvas = document.getElementById('bg_canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false };
  window.addEventListener('mousemove', e => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
    mouse.active = true;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
    mouse.targetX = -1000;
    mouse.targetY = -1000;
  });

  const nodeCount = Math.floor(Math.min(width, 1400) / 26);
  const nodes = [];
  const colors = [
    { r: 99, g: 102, b: 241 },
    { r: 129, g: 140, b: 248 },
    { r: 56, g: 189, b: 248 },
    { r: 168, g: 85, b: 247 }
  ];

  for (let i = 0; i < nodeCount; i++) {
    const col = colors[Math.floor(Math.random() * colors.length)];
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.5 + 1.2,
      col: col,
      alpha: Math.random() * 0.35 + 0.35,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.01
    });
  }

  const packets = [];
  function spawnPacket() {
    if (packets.length >= 8) return;
    const a = Math.floor(Math.random() * nodes.length);
    let closest = -1;
    let minD = 135;
    for (let j = 0; j < nodes.length; j++) {
      if (a === j) continue;
      const dx = nodes[a].x - nodes[j].x;
      const dy = nodes[a].y - nodes[j].y;
      const d = Math.hypot(dx, dy);
      if (d < minD) {
        minD = d;
        closest = j;
      }
    }
    if (closest !== -1) {
      packets.push({
        from: a,
        to: closest,
        progress: 0,
        speed: 0.012 + Math.random() * 0.016,
        col: Math.random() > 0.5 ? '#38bdf8' : '#818cf8'
      });
    }
  }
  setInterval(spawnPacket, 900);

  let isRunning = true;
  document.addEventListener('visibilitychange', () => {
    isRunning = !document.hidden;
  });

  const maxDist = 135;

  function render() {
    if (!isRunning) {
      requestAnimationFrame(render);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    mouse.x += (mouse.targetX - mouse.x) * 0.1;
    mouse.y += (mouse.targetY - mouse.y) * 0.1;

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      n.pulse += n.pulseSpeed;

      if (n.x < 10) { n.x = 10; n.vx *= -1; }
      else if (n.x > width - 10) { n.x = width - 10; n.vx *= -1; }
      if (n.y < 10) { n.y = 10; n.vy *= -1; }
      else if (n.y > height - 10) { n.y = height - 10; n.vy *= -1; }

      if (mouse.active) {
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 150 && dist > 1) {
          const force = (150 - dist) / 150;
          n.x += (dx / dist) * force * 1.6;
          n.y += (dy / dist) * force * 1.6;
        }
      }
    }

    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.22;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${a.col.r}, ${a.col.g}, ${a.col.b}, ${alpha})`;
          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      }
    }

    for (let k = packets.length - 1; k >= 0; k--) {
      const p = packets[k];
      p.progress += p.speed;
      if (p.progress >= 1) {
        packets.splice(k, 1);
        continue;
      }
      const n1 = nodes[p.from];
      const n2 = nodes[p.to];
      if (!n1 || !n2) { packets.splice(k, 1); continue; }
      const px = n1.x + (n2.x - n1.x) * p.progress;
      const py = n1.y + (n2.y - n1.y) * p.progress;

      ctx.beginPath();
      ctx.arc(px, py, 2.2, 0, Math.PI * 2);
      ctx.fillStyle = p.col;
      ctx.shadowColor = p.col;
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      const currentRadius = n.radius + Math.sin(n.pulse) * 0.4;
      ctx.beginPath();
      ctx.arc(n.x, n.y, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${n.col.r}, ${n.col.g}, ${n.col.b}, ${n.alpha})`;
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
})();

// ===== LOADER =====
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
      startBootSequence();
    }, 500);
  }
});

function startBootSequence() {
  document.querySelectorAll('#boot_sequence .boot-line').forEach(line => {
    const delay = parseInt(line.dataset.delay, 10) || 0;
    setTimeout(() => line.classList.add('visible'), delay);
  });
}

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== MOBILE MENU =====
const menuToggle = document.getElementById('menu_toggle');
const navLinks = document.getElementById('nav_links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = menuToggle.querySelectorAll('span');
    if (navLinks.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });
}

// ===== TYPEWRITER =====
const typingEl = document.getElementById('typing_text');
let roleIdx = 0, charIdx = 0, deleting = false, typeTimeout = null;

function resetTypewriter() {
  if (typeTimeout) clearTimeout(typeTimeout);
  roleIdx = 0; charIdx = 0; deleting = false;
  typeEffect();
}

function typeEffect() {
  if (!typingEl) return;
  const roles = ROLES[currentLang] || ROLES.en;
  const current = roles[roleIdx % roles.length];

  if (!deleting) {
    typingEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) {
      typeTimeout = setTimeout(() => { deleting = true; typeEffect(); }, 2400);
      return;
    }
  } else {
    typingEl.textContent = current.substring(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
    }
  }
  typeTimeout = setTimeout(typeEffect, deleting ? 28 : 60);
}
setTimeout(typeEffect, 1200);

// ===== ANIMATED COUNTERS =====
const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting && !e.target.dataset.counted) {
      e.target.dataset.counted = 'true';
      const target = parseFloat(e.target.dataset.count);
      const suffix = e.target.dataset.suffix || '';
      const isFloat = target % 1 !== 0;
      let current = 0;
      const step = target / 40;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        e.target.textContent = (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;
      }, 18);
    }
  });
}, { threshold: 0.3 });
counters.forEach(el => counterObserver.observe(el));

// ===== 3D CARD TILT (RESPONSIVE MOUSE MOVEMENT ON ALL PROJECT CARDS) =====
document.querySelectorAll('[data-tilt]').forEach(card => {
  let rafId = null;

  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.08s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.25s ease';
    card.style.transitionDelay = '0s';
  });

  card.addEventListener('mousemove', e => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-5px)`;
    });
  });

  card.addEventListener('mouseleave', () => {
    if (rafId) cancelAnimationFrame(rafId);
    card.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
    card.style.transitionDelay = '0s';
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    setTimeout(() => {
      if (!card.matches(':hover')) {
        card.style.transition = '';
        card.style.transitionDelay = '';
      }
    }, 450);
  });
});

// ===== SKILLS FILTER =====
document.querySelectorAll('.skill-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter;
    document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    document.querySelectorAll('.skill-category').forEach(cat => {
      cat.classList.toggle('hidden', filter !== 'all' && cat.dataset.category !== filter);
    });
  });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// ===== ACTIVE NAV HIGHLIGHTING =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a:not(.nav-cta)');
function updateActiveNav() {
  const scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollPos >= top && scrollPos < top + height) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${id}`) item.classList.add('active');
      });
    }
  });
}
window.addEventListener('scroll', updateActiveNav);

// ===== LIVE TERMINAL STATUS BAR =====
(function initLiveTerminal() {
  const startTime = Date.now();
  const uptimeEl = document.getElementById('live_uptime');
  const packetsEl = document.getElementById('live_packets');
  const threatsEl = document.getElementById('live_threats');
  const logTextEl = document.getElementById('terminal_log_text');
  const clockEl = document.getElementById('nav_clock');
  let packetCount = 0;
  let threatCount = 0;

  const logMessages = [
    'systems nominal · telemetry stream active',
    'monitoring live network flows & endpoints',
    'LightGBM + IsolationForest inference ready',
    'OSPF multi-area topology converged',
    'zero-trust network access verified',
    'real-time WebSocket data stream synced',
    'automated firewall mitigation rules synced',
    'low-latency full-stack pipeline active',
    '112 automated unit & integration tests passing'
  ];
  let logIdx = 0;

  function pad(n) { return n.toString().padStart(2, '0'); }

  function updateUptime() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const h = Math.floor(elapsed / 3600);
    const m = Math.floor((elapsed % 3600) / 60);
    const s = elapsed % 60;
    if (uptimeEl) uptimeEl.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
  }

  function updateClock() {
    const now = new Date();
    if (clockEl) clockEl.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  }

  function updatePackets() {
    packetCount += Math.floor(Math.random() * 47) + 8;
    if (packetsEl) packetsEl.textContent = (2148920 + packetCount).toLocaleString();
  }

  function updateThreats() {
    if (Math.random() > 0.7) {
      threatCount += 1;
    }
    if (threatsEl) threatsEl.textContent = `${threatCount} BLOCKED`;
  }

  function cycleLog() {
    if (logTextEl) {
      logTextEl.style.opacity = '0';
      setTimeout(() => {
        logTextEl.textContent = logMessages[logIdx % logMessages.length];
        logTextEl.style.opacity = '1';
        logIdx++;
      }, 300);
    }
  }

  // Update intervals
  setInterval(updateUptime, 1000);
  setInterval(updateClock, 1000);
  setInterval(updatePackets, 2000);
  if (threatsEl) setInterval(updateThreats, 5000);
  setInterval(cycleLog, 4000);

  // Initial
  updateUptime();
  updateClock();
})();

// ===== TERMINAL HEADER HOVER =====
// Clean subtle interaction without glitch
document.querySelectorAll('.cmd-header').forEach(header => {
  header.addEventListener('mouseenter', () => {
    header.style.transition = 'color 0.2s ease';
  });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contact_form');
const formFeedback = document.getElementById('form_feedback');
const submitBtn = document.getElementById('submit_btn');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-submit-text').textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
    submitBtn.querySelector('.btn-submit-icon').textContent = '...';
    formFeedback.className = 'form-feedback';
    formFeedback.textContent = '';

    try {
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: 'POST', body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        formFeedback.textContent = currentLang === 'ar'
          ? 'تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.'
          : 'Message sent successfully! I will reply shortly.';
        formFeedback.className = 'form-feedback success show';
        contactForm.reset();
      } else { throw new Error('Server error'); }
    } catch {
      formFeedback.textContent = currentLang === 'ar'
        ? 'تعذر الإرسال. يرجى مراسلتي عبر البريد الإلكتروني مباشرة.'
        : 'Failed to send message. Please contact me directly via email.';
      formFeedback.className = 'form-feedback error show';
    } finally {
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-submit-text').textContent = currentLang === 'ar' ? 'إرسال الرسالة' : 'Send Message';
      submitBtn.querySelector('.btn-submit-icon').innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>';
    }
  });
}

// Initialize language
applyLanguage(currentLang);

// ===== RANDOM SKILL GLOW EFFECT =====
// Every 3 seconds, a random skill pill glows green
(function initSkillGlow() {
  const skillItems = document.querySelectorAll('.skill-item');
  if (skillItems.length === 0) return;

  function glowRandom() {
    const idx = Math.floor(Math.random() * skillItems.length);
    const item = skillItems[idx];
    item.classList.add('glow-active');
    setTimeout(() => item.classList.remove('glow-active'), 2000);
  }
  setInterval(glowRandom, 3000);
  setTimeout(glowRandom, 1500);
})();

// ===== LIVE PROJECT FEED CYCLING =====
// Cycles through telemetry log lines in all project visual cards
(function initFeedCycling() {
  const feedConfigs = [
    {
      feed: document.querySelector('.module-terminal-feed[data-feed="iotguard"]') || document.querySelectorAll('.module-terminal-feed')[0],
      lines: [
        '<span class="f-green">[NET_INT]</span> enp3s0: PROMISCUOUS_MODE ACTIVE',
        '<span class="f-warn">[SCAN]</span> 192.168.1.105:44321 → 10.0.0.1:80 [SYN_FLOOD]',
        '<span class="f-danger">[ALERT]</span> LightGBM + IsolationForest: 98.4% ANOMALY',
        '<span class="f-cyan">[NFTABLES]</span> Rule #412: DROP IP 192.168.1.105 [BLOCKED]',
        '<span class="f-green">[CAPTURE]</span> 847 packets/sec on enp3s0',
        '<span class="f-warn">[SCAN]</span> 10.0.0.42:8080 → 172.16.0.1:443 [PORT_SCAN]',
        '<span class="f-danger">[ALERT]</span> Ensemble score: 0.974 — THREAT CONFIRMED',
        '<span class="f-cyan">[NFTABLES]</span> Rule #413: DROP IP 10.0.0.42 [BLOCKED]',
        '<span class="f-green">[STATUS]</span> Model inference: 1.2ms avg latency',
        '<span class="f-warn">[SCAN]</span> 192.168.2.88:53 → 10.0.0.1:53 [DNS_AMPLIFICATION]',
        '<span class="f-danger">[SHAP]</span> Top features: pkt_len, flow_duration, fwd_pkt_count',
        '<span class="f-cyan">[SYSTEM]</span> 2.1M+ flows processed | 0 false negatives'
      ],
      idx: 4
    },
    {
      feed: document.querySelector('.module-terminal-feed[data-feed="unipath"]') || document.querySelectorAll('.module-terminal-feed')[1],
      lines: [
        '<span class="f-cyan">[CALC]</span> ATAR 91.5 + IELTS 7.5 → <span class="f-green">ELIGIBLE</span>',
        '<span class="f-green">[VISA]</span> Subclass 485 Post-Study: 4-5 YRS',
        '<span class="f-warn">[CRICOS]</span> Group of Eight & Top NZ Data Mapped',
        '<span class="f-cyan">[KANBAN]</span> Application Workflow: Offer Received',
        '<span class="f-green">[MATCH]</span> Uni Melbourne · Master of Computer Science',
        '<span class="f-cyan">[CONVERT]</span> WAM 82.4 → High Distinction Standard',
        '<span class="f-warn">[DEADLINE]</span> S1 Intake Closing in 18 Days',
        '<span class="f-green">[SYNC]</span> 50+ Universities Live Tuition Indexed'
      ],
      idx: 4
    },
    {
      feed: document.querySelector('.module-terminal-feed[data-feed="aureum"]') || document.querySelectorAll('.module-terminal-feed')[2],
      lines: [
        '<span class="f-gold">[CURATION]</span> Provenance Verified: 1928 Bronze Sculpture',
        '<span class="f-cyan">[ACQUIRE]</span> Private Treaty: Paris Salon Retrospective',
        '<span class="f-green">[VALUATION]</span> Portfolio Index: +18.4% YoY Appreciation',
        '<span class="f-gold">[ADVISORY]</span> Tier-1 Vault Allocation: Geneva Freeport',
        '<span class="f-cyan">[SHIMMER]</span> 60FPS Art Deco Shader Pipeline Active',
        '<span class="f-green">[MEMBER]</span> Exclusive Patron Dossier Confirmed',
        '<span class="f-gold">[AUCTION]</span> Impressionist & Modern Masterworks Cataloged',
        '<span class="f-cyan">[ENCLAVE]</span> Encrypted Client Acquisition Portal Online'
      ],
      idx: 4
    }
  ];

  feedConfigs.forEach((cfg, delayOffset) => {
    if (!cfg.feed) return;
    const lines = cfg.feed.querySelectorAll('.feed-line');
    if (lines.length === 0) return;

    function cycle() {
      for (let i = 0; i < lines.length - 1; i++) {
        lines[i].innerHTML = lines[i + 1].innerHTML;
      }
      lines[lines.length - 1].innerHTML = cfg.lines[cfg.idx % cfg.lines.length];
      lines[lines.length - 1].style.animation = 'fade-in 0.4s ease';
      setTimeout(() => { lines[lines.length - 1].style.animation = ''; }, 400);
      cfg.idx++;
    }

    setTimeout(() => {
      setInterval(cycle, 3600);
    }, delayOffset * 700);
  });
})();

// ===== MOUSE GLOW FOLLOWER (DISABLED FOR MODERN MINIMAL LOOK) =====
(function initMouseGlow() {
  /* Disabled for clean modern design */
})();

// ===== SCROLL PROGRESS INDICATOR =====
(function initScrollProgress() {
  const bar = document.createElement('div');
  bar.style.cssText = `
    position: fixed;
    top: 56px;
    left: 0;
    height: 2px;
    width: 0%;
    background: #6366f1;
    box-shadow: 0 0 8px rgba(99, 102, 241, 0.4);
    z-index: 1001;
    transition: width 0.1s linear;
    pointer-events: none;
  `;
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = progress + '%';
  });
})();

// ===== ANIMATED CMD HEADERS ON SCROLL =====
// When cmd-header scrolls into view, simulate typing the command
(function initCmdTyping() {
  const cmdHeaders = document.querySelectorAll('.cmd-header .cmd-action');
  const cmdObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.typed) {
        e.target.dataset.typed = 'true';
        const fullText = e.target.textContent;
        e.target.textContent = '';
        e.target.style.borderRight = '2px solid #6366f1';
        e.target.style.animation = 'typing-cursor 1s step-end infinite';
        let ci = 0;
        const typeInterval = setInterval(() => {
          e.target.textContent += fullText[ci];
          ci++;
          if (ci >= fullText.length) {
            clearInterval(typeInterval);
            setTimeout(() => {
              e.target.style.borderRight = '';
              e.target.style.animation = '';
            }, 800);
          }
        }, 40);
      }
    });
  }, { threshold: 0.5 });
  cmdHeaders.forEach(el => cmdObserver.observe(el));
})();

// ===== HOVER EFFECT ON SECTION TITLES =====
document.querySelectorAll('.section-big-title').forEach(title => {
  title.addEventListener('mouseenter', () => {
    title.style.transition = 'transform 0.3s ease';
  });
});

// ===== LIVE VISITOR COUNTER (simulated) =====
(function initVisitorCount() {
  const sessionEl = document.getElementById('live_session');
  if (!sessionEl) return;
  const base = 1 + Math.floor(Math.random() * 3);
  sessionEl.textContent = `${base} ACTIVE`;
  setInterval(() => {
    const jitter = Math.random() > 0.8 ? 1 : 0;
    sessionEl.textContent = `${base + jitter} ACTIVE`;
  }, 8000);
})();

// ===== PARALLAX HERO ON SCROLL =====
(function initHeroParallax() {
  const hero = document.querySelector('.hero-content');
  if (!hero) return;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      hero.style.transform = `translateY(${scrollY * 0.12}px)`;
      hero.style.opacity = Math.max(0, 1 - scrollY / (window.innerHeight * 0.7));
    }
  });
})();

// ===== INTERACTIVE CARD SPOTLIGHT TRACKING =====
(function initCardSpotlight() {
  const cards = document.querySelectorAll('.bento-card, .service-card, .project-card, .solution-card, .hero-deck-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
})();

// ===== BACK TO TOP SMOOTH SCROLL =====
(function initBackToTop() {
  const btn = document.getElementById('back_to_top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
})();

// ===== COPY EMAIL INTERACTION & TOAST =====
(function initCopyEmail() {
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach(link => {
    link.addEventListener('click', () => {
      const email = link.getAttribute('href').replace('mailto:', '');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(document.body.classList.contains('lang-ar') ? 'تم نسخ البريد الإلكتروني إلى الحافظة!' : 'Email copied to clipboard!');
        }).catch(() => {});
      }
    });
  });

  function showToast(msg) {
    let toast = document.getElementById('copy_toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'copy_toast';
      toast.style.cssText = `
        position: fixed;
        bottom: 32px;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        background: rgba(18, 20, 29, 0.95);
        color: #fff;
        border: 1px solid rgba(99, 102, 241, 0.4);
        padding: 10px 22px;
        border-radius: 100px;
        font-family: var(--font-body);
        font-size: 0.84rem;
        font-weight: 500;
        z-index: 10000;
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        box-shadow: 0 10px 35px rgba(0,0,0,0.5), 0 0 20px rgba(99,102,241,0.25);
        pointer-events: none;
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        display: flex;
        align-items: center;
        gap: 8px;
      `;
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>${msg}</span>`;
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
    }, 2400);
  }
})();

// ===== CAPABILITIES STUDIO & SYSTEMS MATRIX INTERACTION =====
(function initCapabilitiesStudio() {
  const channelBtns = document.querySelectorAll('.studio-channel-btn');
  const panes = document.querySelectorAll('.sandbox-pane');
  const sandboxTitle = document.getElementById('sandbox_title');
  const sandboxConn = document.getElementById('sandbox_conn_status');

  const fileTitles = {
    fullstack: 'realtime_stream.ts',
    ml: 'model_eval.py',
    cyber: 'firewall_engine.c',
    net: 'topology_core.conf'
  };

  const statusTexts = {
    fullstack: 'ONLINE · 60 FPS',
    ml: 'CALIBRATED · 96.1% AUC',
    cyber: 'SURICATA ACTIVE · ZERO-TRUST',
    net: 'OSPF ADJACENCY FULL · 0ms'
  };

  channelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const channel = btn.getAttribute('data-channel');
      if (!channel) return;

      channelBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      panes.forEach(pane => {
        pane.classList.remove('active');
        if (pane.getAttribute('data-pane') === channel) {
          pane.classList.add('active');
        }
      });

      if (sandboxTitle && fileTitles[channel]) {
        sandboxTitle.textContent = fileTitles[channel];
      }
      if (sandboxConn && statusTexts[channel]) {
        sandboxConn.textContent = statusTexts[channel];
      }
    });
  });

  // 1. Full-Stack Dispatch Payload Simulator
  const btnSendPayload = document.getElementById('btn_send_payload');
  const fullstackTerm = document.getElementById('fullstack_terminal');
  const livePingVal = document.getElementById('live_ping_val');
  let frameCounter = 10493;

  if (btnSendPayload && fullstackTerm) {
    btnSendPayload.addEventListener('click', () => {
      const randomPing = (0.72 + Math.random() * 0.28).toFixed(2);
      if (livePingVal) livePingVal.textContent = `${randomPing} ms`;

      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');
      frameCounter += Math.floor(Math.random() * 5) + 1;

      const newLine = document.createElement('div');
      newLine.className = 'term-line success';
      newLine.innerHTML = `[${timeStr}] <span class="c-fn">DISPATCH</span> Frame #${frameCounter} ACK | Ingest: ${randomPing}ms | Status: HTTP/2 200 OK`;
      fullstackTerm.appendChild(newLine);
      fullstackTerm.scrollTop = fullstackTerm.scrollHeight;

      btnSendPayload.style.transform = 'scale(0.95)';
      setTimeout(() => { btnSendPayload.style.transform = ''; }, 150);
    });
  }

  // 2. ML ROC Decision Threshold Slider
  const rocSlider = document.getElementById('roc_slider');
  const thresholdVal = document.getElementById('threshold_val');
  const metricTpr = document.getElementById('metric_tpr');
  const metricFpr = document.getElementById('metric_fpr');
  const rocPointMarker = document.getElementById('roc_point_marker');

  if (rocSlider) {
    rocSlider.addEventListener('input', (e) => {
      const th = parseFloat(e.target.value);
      if (thresholdVal) thresholdVal.textContent = th.toFixed(2);

      const tpr = Math.max(88.0, 99.2 - (th * 7.5));
      const fpr = Math.max(0.2, (0.01 + Math.pow(1 - th, 2.2) * 4.8));

      if (metricTpr) metricTpr.textContent = `${tpr.toFixed(1)}%`;
      if (metricFpr) metricFpr.textContent = `${fpr.toFixed(1)}%`;

      if (rocPointMarker) {
        const xPos = 40 + (fpr / 5.0) * 340 * 0.4;
        const yPos = 140 - (tpr / 100.0) * 120;
        rocPointMarker.setAttribute('cx', Math.min(370, Math.max(45, xPos.toFixed(1))));
        rocPointMarker.setAttribute('cy', Math.min(135, Math.max(22, yPos.toFixed(1))));
      }
    });
  }

  // 3. Cyber Threat Mitigation Simulator
  const btnSimAttack = document.getElementById('btn_simulate_attack');
  const cyberTerm = document.getElementById('cyber_terminal');
  const firewallPill = document.getElementById('firewall_state_pill');
  const activeRulesVal = document.getElementById('active_rules_val');
  let attackCount = 0;

  if (btnSimAttack && cyberTerm) {
    btnSimAttack.addEventListener('click', () => {
      attackCount++;
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');
      const spoofIp = `185.${Math.floor(Math.random() * 200 + 10)}.${Math.floor(Math.random() * 254)}.${Math.floor(Math.random() * 254)}`;

      if (firewallPill) {
        firewallPill.className = 'stat-accent';
        firewallPill.style.color = '#ef4444';
        firewallPill.textContent = 'ATTACK_DETECTED';
      }

      const alertLine = document.createElement('div');
      alertLine.className = 'term-line danger';
      alertLine.innerHTML = `[${timeStr}] <span class="c-keyword">[ALERT]</span> SYN FLOOD BURST: ${spoofIp}:443 → 42,000 pps`;
      cyberTerm.appendChild(alertLine);

      setTimeout(() => {
        const mitLine = document.createElement('div');
        mitLine.className = 'term-line success';
        mitLine.innerHTML = `[${timeStr}] <span class="c-fn">[NFTABLES]</span> Rule #${410 + attackCount}: DROP IP ${spoofIp} [MITIGATED in 0.32ms]`;
        cyberTerm.appendChild(mitLine);
        cyberTerm.scrollTop = cyberTerm.scrollHeight;

        if (firewallPill) {
          firewallPill.style.color = '#38bdf8';
          firewallPill.textContent = 'THREAT_NEUTRALIZED';
        }
        if (activeRulesVal) {
          activeRulesVal.textContent = `${14 + attackCount} Active (${attackCount} Mitigated)`;
        }

        setTimeout(() => {
          if (firewallPill) {
            firewallPill.style.color = '#4ade80';
            firewallPill.textContent = 'PERIMETER_SECURE';
          }
        }, 1800);
      }, 350);

      cyberTerm.scrollTop = cyberTerm.scrollHeight;
    });
  }

  // 4. Network Topology Node Inspector
  const topoNodes = document.querySelectorAll('.topo-node-g');
  const topoDetails = document.getElementById('topo_node_details');

  const nodeSpecs = {
    R1: `
      <span class="c-keyword">[NODE: R1]</span> Cisco IOS-XE / OSPF Area Border Router (ABR) · RID 10.255.255.1<br>
      <span class="c-fn">INTERFACES:</span> Gi0/0/0 (Area 0 Backbone), Gi0/0/1 (Area 1 Sensors) · MTU: 1500 · 802.1Q Active<br>
      <span class="c-string">SECURITY:</span> ACL Ingress Filter: 10.0.0.0/8 PERMIT · Spoof Prevention Enabled · Cost: 10
    `,
    R2: `
      <span class="c-keyword">[NODE: R2]</span> Cisco IOS-XE / OSPF Area 0 Core Router · RID 10.255.255.2<br>
      <span class="c-fn">CONVERGENCE:</span> BFD (Bidirectional Forwarding Detection) active · Sub-second failover (&lt;150ms)<br>
      <span class="c-string">ROUTING:</span> CEF Switching Engine · Multi-Area Route Summarization Enabled · Cost: 10
    `,
    SW1: `
      <span class="c-keyword">[NODE: SW1]</span> Catalyst L3 Distribution Switch · VLAN 10 (Prod) &amp; VLAN 20 (Telemetry)<br>
      <span class="c-fn">SEGMENTATION:</span> 802.1Q Encapsulation · DHCP Snooping &amp; Dynamic ARP Inspection Active<br>
      <span class="c-string">SECURITY:</span> Port Security (Sticky MAC, max 2 devices) · Storm Control: 1% limit
    `,
    SW2: `
      <span class="c-keyword">[NODE: SW2]</span> Enterprise Edge Switch · VLAN 30 (DMZ) &amp; VLAN 40 (Management)<br>
      <span class="c-fn">AGGREGATION:</span> 802.3ad LACP EtherChannel (2 Gbps bonded link to Core)<br>
      <span class="c-string">HARDENING:</span> Rapid PVST+ · PortFast + BPDU Guard enabled on all edge ports
    `
  };

  topoNodes.forEach(node => {
    node.addEventListener('click', () => {
      const nodeName = node.getAttribute('data-node');
      if (!nodeName || !nodeSpecs[nodeName]) return;

      topoNodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      if (topoDetails) {
        topoDetails.innerHTML = nodeSpecs[nodeName].trim();
      }
    });

    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        node.click();
      }
    });
  });
})();

console.log('%c╔══════════════════════════════════════════╗', 'color: #6366f1');
console.log('%c║  Ahmad Ismail — Portfolio v5.0 (Modern)  ║', 'color: #6366f1; font-weight: bold');
console.log('%c║  github.com/A7medico                     ║', 'color: #6366f1');
console.log('%c╚══════════════════════════════════════════╝', 'color: #6366f1');

