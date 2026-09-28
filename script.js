// ============================================
// AHMAD ISMAIL — PORTFOLIO SCRIPT v4.0
// Clean Hacker Terminal · Matrix Rain · Live Elements
// Single Green Theme · Bilingual (EN/AR)
// ============================================

// ===== TRANSLATIONS =====
const translations = {
  en: {
    "nav.about": "about",
    "nav.strengths": "strengths",
    "nav.expertise": "expertise",
    "nav.projects": "projects",
    "nav.journey": "journey",
    "nav.stack": "stack",
    "nav.contact": "contact",
    "hero.boot1": "GNU/Portfolio v4.0.0 — Kernel Boot Completed",
    "hero.boot2": '[  <span class="ok-tag">OK</span>  ] Network interfaces & telemetry listeners mounted.',
    "hero.boot3": "[  <span class=\"ok-tag\">OK</span>  ] Loading engineer profile: Ahmad Ismail.",
    "hero.boot4": "[  <span class=\"ok-tag\">OK</span>  ] Neural & Security pipelines active. Welcome.",
    "hero.greeting": '<span class="badge-prefix">// sys.init() :</span> Ahmad Ismail',
    "hero.available": "Open to Opportunities",
    "hero.name": "Ahmad Ismail",
    "hero.desc": "Engineering intelligent systems where <strong>Machine Learning</strong>, <strong>IoT Threat Detection</strong>, and <strong>Enterprise Networking</strong> converge into resilient, production-ready software.",
    "chip.ml": "Machine Learning",
    "chip.sec": "IoT Intrusion Defense",
    "chip.net": "Network Infrastructure",
    "chip.dev": "Full-Stack Systems",
    "btn.projects": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg> ./projects',
    "btn.cv": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> wget cv.pdf',
    "btn.contact": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> ./contact.sh',
    "cmd.about": "cat about.txt",
    "about.eyebrow": "// who_i_am",
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
    "cmd.strengths": "ls -la ./strengths/",
    "strengths.eyebrow": "// what_i_bring",
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
    "cmd.services": "ls -la ./expertise/",
    "expertise.eyebrow": "// core_competencies",
    "expertise.title": "Four Pillars of Engineering Precision",
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
    "cmd.projects": "cat ./projects/README.md",
    "projects.eyebrow": "// deployed_engineering",
    "projects.title": "Featured Systems & Live Deployments",
    "badge.featured": "SENIOR CAPSTONE",
    "iotguard.tagline": "// AI-Powered Intrusion Detection & Mitigation",
    "iotguard.desc": "A production-grade cyber-defense framework protecting IoT ecosystems from DDoS, SYN floods, and port scans. Ensemble of LightGBM and IsolationForest trained on 2.1M+ flows, achieving 96.1% AUC with SHAP explainability and automated firewall enforcement.",
    "iotguard.point1": "✦ <strong>Real-Time Pipeline:</strong> Scapy + Suricata for microsecond classification.",
    "iotguard.point2": "✦ <strong>Explainable AI:</strong> SHAP values pinpoint triggering features.",
    "iotguard.point3": "✦ <strong>Automated Response:</strong> nftables rule injection to isolate threats.",
    "badge.portal": "LIVE PORTAL",
    "unipath.tagline": "// Australian & Oceania Higher Education Admissions Hub",
    "unipath.desc": "Interactive portal for international scholars navigating admissions across Australia's Group of Eight and NZ universities. ATAR/IELTS conversion, Subclass 485 visa calculators, and Kanban trackers.",
    "unipath.point1": "✦ <strong>Eligibility Engine:</strong> GPA, ATAR, IELTS multi-tier matching.",
    "unipath.point2": "✦ <strong>Visa Calculators:</strong> Post-study visa & CRICOS compliance.",
    "unipath.point3": "✦ <strong>Dynamic UI:</strong> Client-side Kanban and interactive charts.",
    "badge.concept": "CONCEPT SHOWCASE",
    "aureum.tagline": "// Exclusive Art Deco Digital Experience & Collection Curation",
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
    "tools.used": "// tools_and_stack:",
    "btn.git_clone": "git clone",
    "btn.open_site": "open live",
    "proj3.title": "Multi-Area OSPF & Inter-VLAN Infrastructure",
    "proj3.tagline": "// Enterprise Routing & Packet Forensics",
    "proj3.desc": "Production-grade multi-tier enterprise network infrastructure featuring multi-area OSPFv2/v3, 802.1Q trunking, inter-VLAN routing, and hardened perimeter ACLs with deep Wireshark packet forensics.",
    "proj4.title": "Security Tooling & AI Algorithms",
    "proj4.tagline": "// Open-Source Contributions & Research",
    "proj4.desc": "Advanced security tooling and machine learning heuristics suite. Packet parsing with Scapy, zero-trust perimeter verification, dynamic nftables enforcement, and automated vulnerability scanning.",
    "cmd.journey": "history --milestones",
    "journey.eyebrow": "// how_i_got_here",
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
    "cmd.skills": "printenv SKILLS --all",
    "skills.eyebrow": "// technology_stack",
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
    "cmd.contact": "./contact.sh",
    "contact.eyebrow": "// establish_connection",
    "contact.title": "Have an Idea? Let's Connect.",
    "contact.info_title": "# Available for Opportunities",
    "contact.info_desc": "Open to engineering roles, ML research, network architecture consultations, and freelance collaborations.",
    "contact.guarantee": "Response within 24h · Direct to inbox",
    "form.name": "sender_name",
    "form.email": "return_email",
    "form.message": "transmission_payload",
    "form.submit": "$ transmit_message",
    "footer.copyright": "© 2026 Ahmad Ismail — Computer Engineering & Intelligent Systems"
  },
  ar: {
    "nav.about": "نبذة عني",
    "nav.strengths": "نقاط القوة",
    "nav.expertise": "الخبرات",
    "nav.projects": "المشاريع",
    "nav.journey": "المسار",
    "nav.stack": "التقنيات",
    "nav.contact": "تواصل",
    "hero.boot1": "GNU/Portfolio v4.0.0 — اكتمل الإقلاع بنجاح",
    "hero.boot2": '[  <span class="ok-tag">OK</span>  ] تم تشغيل واجهات الشبكة.',
    "hero.boot3": "[  <span class=\"ok-tag\">OK</span>  ] تحميل ملف المهندس: أحمد إسماعيل.",
    "hero.boot4": "[  <span class=\"ok-tag\">OK</span>  ] خطوط الذكاء الاصطناعي والأمن نشطة. مرحباً.",
    "hero.greeting": '<span class="badge-prefix">// sys.init() :</span> أحمد إسماعيل',
    "hero.available": "متاح للفرص المتميزة",
    "hero.name": "أحمد إسماعيل",
    "hero.desc": "هندسة أنظمة ذكية تجمع بين <strong>تعلم الآلة</strong>، و<strong>أمن إنترنت الأشياء</strong>، و<strong>شبكات المؤسسات</strong> في برمجيات متينة وجاهزة للإنتاج.",
    "chip.ml": "تعلم الآلة",
    "chip.sec": "أمن IoT",
    "chip.net": "البنية التحتية",
    "chip.dev": "أنظمة متكاملة",
    "btn.projects": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg> ./المشاريع',
    "btn.cv": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> تحميل السيرة',
    "btn.contact": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> ./تواصل',
    "cmd.about": "cat نبذة.txt",
    "about.eyebrow": "// من_أنا",
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
    "cmd.strengths": "ls -la ./نقاط_القوة/",
    "strengths.eyebrow": "// ما_أضيفه",
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
    "cmd.services": "ls -la ./الخبرات/",
    "expertise.eyebrow": "// مجالات_الخبرة",
    "expertise.title": "أربعة محاور هندسية",
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
    "cmd.projects": "cat ./المشاريع/README.md",
    "projects.eyebrow": "// الأنظمة_المنشورة",
    "projects.title": "أبرز الأنظمة والمشاريع",
    "badge.featured": "مشروع التخرج",
    "iotguard.tagline": "// نظام ذكي لكشف التسلل",
    "iotguard.desc": "منظومة دفاع سيبراني تحمي شبكات IoT من الهجمات الكثيفة. نموذجي LightGBM وIsolationForest على أكثر من 2.1 مليون تدفق بدقة 96.1%.",
    "iotguard.point1": "✦ <strong>معالجة لحظية:</strong> Scapy + Suricata.",
    "iotguard.point2": "✦ <strong>ذكاء قابل للتفسير:</strong> قيم SHAP.",
    "iotguard.point3": "✦ <strong>استجابة تلقائية:</strong> حقن قواعد nftables.",
    "badge.portal": "منصة حية",
    "unipath.tagline": "// بوابة القبول الجامعي لأستراليا ونيوزيلندا",
    "unipath.desc": "بوابة تفاعلية للطلاب الدوليين مع حواسب ATAR وIELTS وحساب تأشيرة 485 ولوحة كانبان.",
    "unipath.point1": "✦ <strong>محرك الأهلية:</strong> مطابقة المعدلات.",
    "unipath.point2": "✦ <strong>حاسبة التأشيرة:</strong> مدد العمل بعد التخرج.",
    "unipath.point3": "✦ <strong>واجهة ديناميكية:</strong> كانبان ورسوم تفاعلية.",
    "badge.concept": "مشروع مفاهيمي",
    "aureum.tagline": "// تجربة رقمية فاخرة بنمط الآرت ديكو لإدارة المقتنيات الفنية",
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
    "tools.used": "// الأدوات:",
    "btn.git_clone": "استعراض الكود",
    "btn.open_site": "فتح المنصة",
    "proj3.title": "OSPF متعدد المناطق وInter-VLAN",
    "proj3.tagline": "// محاكاة شبكات المؤسسات",
    "proj3.desc": "شبكات متقدمة مع OSPF و802.1Q وACLs وNAT/PAT وWireshark.",
    "proj4.title": "أدوات الأمن وخوارزميات AI",
    "proj4.tagline": "// مساهمات مفتوحة المصدر",
    "proj4.desc": "تجارب Python وScapy ونماذج ذكاء اصطناعي.",
    "cmd.journey": "history --المسار",
    "journey.eyebrow": "// كيف_وصلت",
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
    "cmd.skills": "printenv التقنيات --all",
    "skills.eyebrow": "// حزمة_التقنيات",
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
    "cmd.contact": "./تواصل.sh",
    "contact.eyebrow": "// إنشاء_اتصال",
    "contact.title": "لديك فكرة؟ دعنا نتحدث.",
    "contact.info_title": "# متاح للفرص",
    "contact.info_desc": "متاح للوظائف الهندسية وبحوث تعلم الآلة واستشارات الشبكات والتعاون التقني.",
    "contact.guarantee": "الرد خلال 24 ساعة",
    "form.name": "اسم_المرسل",
    "form.email": "البريد_الإلكتروني",
    "form.message": "نص_الرسالة",
    "form.submit": "$ إرسال_الرسالة",
    "footer.copyright": "© 2026 أحمد إسماعيل — هندسة الحاسوب والأنظمة الذكية"
  }
};

const ROLES = {
  en: ['Computer Engineer', 'ML & AI Developer', 'IoT Security Researcher', 'Network Architect', 'Full-Stack Engineer'],
  ar: ['مهندس حاسوب', 'مطور تعلم الآلة', 'باحث أمن IoT', 'معماري شبكات', 'مهندس برمجيات']
};

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

// ===== MATRIX RAIN BACKGROUND =====
(function initMatrixRain() {
  const canvas = document.getElementById('matrix_canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]|/\\=+-_@#$%&';
  const charArray = chars.split('');
  const fontSize = 14;
  let columns = Math.floor(canvas.width / fontSize);
  let drops = Array(columns).fill(1);

  window.addEventListener('resize', () => {
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);
  });

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.07)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = charArray[Math.floor(Math.random() * charArray.length)];
      // Brighten the "head" of each column
      const brightness = Math.random() > 0.95 ? '#fff' : '#00ff41';
      ctx.fillStyle = brightness;
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      ctx.fillStyle = '#00ff41';
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    requestAnimationFrame(draw);
  }
  draw();
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

// ===== 3D CARD TILT =====
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -4;
    const rotateY = ((x - rect.width / 2) / rect.width) * 4;
    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-3px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
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
    'visitor connected from remote...',
    'loading portfolio modules...',
    'scanning network interfaces...',
    'all systems nominal...',
    'neural pipeline healthy...',
    'firewall rules synced...',
    'monitoring active connections...',
    'IDS signatures updated...',
    'packet capture running...',
    'secure tunnel established...',
    'TLS handshake complete...',
    'session encryption verified...',
    'heartbeat OK | latency < 2ms...',
    'ML model warm, ready for inference...',
    'git pull: portfolio up-to-date...',
    'running integrity checks...',
    'memory: 42% | CPU: 12%...',
    'no anomalies detected...'
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
    if (packetsEl) packetsEl.textContent = packetCount.toLocaleString();
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
  setInterval(updateThreats, 5000);
  setInterval(cycleLog, 4000);

  // Initial
  updateUptime();
  updateClock();
})();

// ===== TERMINAL HEADER GLITCH =====
document.querySelectorAll('.cmd-header').forEach(header => {
  header.addEventListener('mouseenter', () => {
    header.style.animation = 'glitch-1 0.25s ease';
    setTimeout(() => { header.style.animation = ''; }, 250);
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
    submitBtn.querySelector('.btn-submit-text').textContent = currentLang === 'ar' ? '$ جاري الإرسال...' : '$ sending...';
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
          ? '[OK] تم الإرسال بنجاح!'
          : '[OK] Transmission dispatched. Will reply shortly!';
        formFeedback.className = 'form-feedback success show';
        contactForm.reset();
      } else { throw new Error('Server error'); }
    } catch {
      formFeedback.textContent = currentLang === 'ar'
        ? '[ERR] فشل الإرسال. راسلني مباشرة.'
        : '[ERR] Failed. Contact directly via email.';
      formFeedback.className = 'form-feedback error show';
    } finally {
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-submit-text').textContent = currentLang === 'ar' ? '$ إرسال_الرسالة' : '$ transmit_message';
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

// ===== MOUSE GREEN GLOW FOLLOWER =====
(function initMouseGlow() {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9996;
    background: radial-gradient(circle, rgba(0, 255, 65, 0.04) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: left 0.15s ease, top 0.15s ease;
    will-change: left, top;
  `;
  document.body.appendChild(glow);

  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
})();

// ===== SCROLL PROGRESS INDICATOR =====
(function initScrollProgress() {
  const bar = document.createElement('div');
  bar.style.cssText = `
    position: fixed;
    top: 46px;
    left: 0;
    height: 2px;
    width: 0%;
    background: #00ff41;
    box-shadow: 0 0 8px rgba(0, 255, 65, 0.6);
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
        e.target.style.borderRight = '2px solid #00ff41';
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

// ===== HOVER GLITCH ON SECTION TITLES =====
document.querySelectorAll('.section-big-title').forEach(title => {
  title.addEventListener('mouseenter', () => {
    title.style.animation = 'glitch-1 0.3s ease';
    setTimeout(() => { title.style.animation = ''; }, 300);
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

console.log('%c╔══════════════════════════════════════════╗', 'color: #00ff41');
console.log('%c║  Ahmad Ismail — Portfolio v4.5 (Blacker) ║', 'color: #00ff41; font-weight: bold');
console.log('%c║  github.com/A7medico                     ║', 'color: #00ff41');
console.log('%c╚══════════════════════════════════════════╝', 'color: #00ff41');

