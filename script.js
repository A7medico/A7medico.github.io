// ============================================
// AHMAD ISMAIL — PORTFOLIO SCRIPT
// Bilingual Engine (EN/AR), Themes, 3D Tilt,
// Skills Filtering, and Dynamic Terminal Telemetry
// ============================================

// ===== TRANSLATIONS DICTIONARY =====
const translations = {
  en: {
    // Navigation
    "nav.about": "about",
    "nav.expertise": "expertise",
    "nav.projects": "projects",
    "nav.journey": "journey",
    "nav.stack": "stack",
    "nav.contact": "contact",

    // Hero Section
    "hero.boot1": "GNU/Portfolio v2.4.0 — Kernel Boot Completed",
    "hero.boot2": '[  <span class="ok-tag">OK</span>  ] Network interfaces & telemetry listeners mounted.',
    "hero.boot3": "[  <span class=\"ok-tag\">OK</span>  ] Loading engineer profile: Ahmad Ismail.",
    "hero.boot4": "[  <span class=\"ok-tag\">OK</span>  ] Neural & Security pipelines active. Welcome.",
    "hero.greeting": '<span class="badge-prefix">// sys.init() :</span> Ahmad Ismail 👋',
    "hero.available": "Open to High-Impact Opportunities",
    "hero.response_time": "⚡ Response &lt; 24h",
    "hero.name": "Ahmad Ismail",
    "hero.desc": "Engineering intelligent systems where <strong>Machine Learning</strong>, <strong>IoT Threat Detection</strong>, and <strong>Enterprise Networking</strong> converge into resilient, production-ready software.",
    "chip.ml": "Machine Learning",
    "chip.sec": "IoT Intrusion Defense",
    "chip.net": "Network Infrastructure",
    "chip.dev": "Full-Stack Systems",
    "btn.projects": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg> ./projects',
    "btn.cv": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> wget cv.pdf',
    "btn.contact": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> ./contact.sh',

    // About Section
    "cmd.about": "cat about.txt",
    "about.eyebrow": "// who_i_am_and_what_i_build",
    "about.title": "Turning Raw Flows & Complex Data into Resilient Engineering",
    "about.p1": "I'm a <strong>Computer Engineer</strong> driven by the challenge of designing resilient, high-performance systems. My work bridges the gap between algorithmic intelligence and physical network infrastructure — from training ensemble machine learning models on millions of packet flows to configuring dynamic enterprise routing and real-time interactive dashboards.",
    "about.p2": "Whether constructing <strong>IoTGuard</strong> to combat distributed denial-of-service threats with millisecond automated responses or building production web applications with <strong>Next.js</strong> and <strong>WebSockets</strong>, I focus on clean architecture, verifiable security, and interfaces that humans enjoy using.",
    "stat.auc": "Model ROC-AUC",
    "stat.auc_sub": "LightGBM IDS",
    "stat.samples": "Network Flows",
    "stat.samples_sub": "Trained & Validated",
    "stat.tests": "Unit & Int Tests",
    "stat.tests_sub": "Passing 100%",
    "stat.years": "Years Engineering",
    "stat.years_sub": "Hardware & Software",

    // Expertise Section
    "cmd.services": "ls -la ./expertise/",
    "expertise.eyebrow": "// core_competencies",
    "expertise.title": "Four Pillars of Engineering Precision",
    "exp.ml_title": "Machine Learning & AI Systems",
    "exp.ml_desc": "Designing, training, and deploying production-grade ML pipelines. Transforming high-velocity real-world data into actionable intelligence with state-of-the-art ensemble models, feature engineering, and model explainability.",
    "exp.ml_point1": "✦ High-accuracy ensemble architectures (LightGBM, XGBoost, IsolationForest)",
    "exp.ml_point2": "✦ Explainable AI (XAI) using SHAP values for transparent decision boundaries",
    "exp.ml_point3": "✦ End-to-end data preprocessing, ROC-AUC validation, and hyperparameter tuning",
    "exp.sec_title": "IoT & Network Cyber Defense",
    "exp.sec_desc": "Architecting robust intrusion detection and automated mitigation systems. Securing vulnerable IoT perimeters against zero-day threats, SYN floods, botnets, and anomalous traffic.",
    "exp.sec_point1": "✦ Real-time packet capture, flow inspection, and protocol anomaly detection",
    "exp.sec_point2": "✦ Automated firewall response with dynamic nftables / iptables rule injection",
    "exp.sec_point3": "✦ Suricata IDS rule integration, threat intelligence feeds, and log correlation",
    "exp.dev_title": "Full-Stack & Real-Time Systems",
    "exp.dev_desc": "Building responsive, accessible web applications and distributed backend microservices. Integrating WebSocket data feeds, interactive analytics dashboards, and resilient RESTful APIs.",
    "exp.dev_point1": "✦ High-speed WebSocket live streaming and real-time telemetry charting",
    "exp.dev_point2": "✦ Production web applications with Next.js, React, Flask, and Node.js",
    "exp.dev_point3": "✦ Containerized deployment with Docker, CI/CD pipelines, and JWT security",
    "exp.net_title": "Enterprise Network Architecture & Protocols",
    "exp.net_desc": "Deep operational expertise in architecting, configuring, and hardening complex enterprise networks across Layer 2 and Layer 3 topologies. Rigorous hands-on practice in routing protocols, traffic segregation, and security filtering.",
    "exp.net_point1": "✦ Dynamic Routing with single & multi-area OSPFv2/v3, metric tuning, and route convergence",
    "exp.net_point2": "✦ VLAN segmentation, 802.1Q trunking, Inter-VLAN routing (Router-on-a-Stick & L3 Switch SVIs)",
    "exp.net_point3": "✦ IPv4/IPv6 VLSM addressing schemes, Spanning Tree (STP/RSTP/PortFast), and EtherChannel bonding",
    "exp.net_point4": "✦ Traffic filtering with Standard/Extended ACLs, NAT/PAT translation, DHCP Snooping, and Port Security",
    "exp.net_point5": "✦ Packet dissection, protocol forensics, and diagnostic packet analysis via Wireshark",

    // Projects Section
    "cmd.projects": "cat ./projects/README.md",
    "projects.eyebrow": "// deployed_engineering",
    "projects.title": "Featured Systems & Live Deployments",
    "badge.featured": "★ SENIOR CAPSTONE",
    "iotguard.tagline": "// AI-Powered Intrusion Detection & Mitigation System",
    "iotguard.desc": "A production-grade cyber-defense framework that protects heterogeneous IoT ecosystems from high-volume attacks (DDoS, SYN floods, port scans). Harnesses an ensemble of LightGBM and IsolationForest trained on 2.1M+ network flows, achieving 96.1% AUC with real-time SHAP explainability and automated firewall enforcement.",
    "iotguard.point1": "✦ <strong>Real-Time Pipeline:</strong> Scapy packet capture + Suricata rule integration for microsecond packet classification.",
    "iotguard.point2": "✦ <strong>Explainable AI (XAI):</strong> SHAP values pinpoint the exact network features triggering security alerts.",
    "iotguard.point3": "✦ <strong>Automated Response:</strong> Instantaneous Linux nftables rule injection to isolate malicious endpoints.",
    "badge.portal": "★ LIVE PORTAL",
    "unipath.tagline": "// Australian & Oceania Higher Education Admissions & Visa Hub",
    "unipath.desc": "A comprehensive, interactive web portal engineered for international scholars navigating admissions across Australia's prestigious Group of Eight (Go8) and premier New Zealand universities. Features automated ATAR/IELTS conversion matrices, Subclass 485 post-study visa calculators, and Kanban application trackers.",
    "unipath.point1": "✦ <strong>Automated Eligibility Engine:</strong> Algorithmic GPA, ATAR, and IELTS multi-tier qualification matching.",
    "unipath.point2": "✦ <strong>Visa & Work Policy Calculators:</strong> Real-time post-study visa duration & CRICOS compliance mapping.",
    "unipath.point3": "✦ <strong>Dynamic UI Architecture:</strong> Client-side Kanban state management and responsive interactive charts.",
    "tools.used": "// tools_and_stack:",
    "btn.git_clone": "git clone",
    "btn.open_site": "open live demo",
    "proj3.title": "Multi-Area OSPF & Inter-VLAN Infrastructure",
    "proj3.tagline": "// Enterprise Routing & Packet Forensics Simulation",
    "proj3.desc": "Engineered simulated multi-tier enterprise networks featuring dynamic multi-area OSPF routing, 802.1Q trunking, Inter-VLAN routing on Layer 3 switches, and security hardening via standard & extended ACLs, NAT/PAT, and Wireshark packet stream analysis.",
    "proj4.title": "Security Tooling & AI Algorithms",
    "proj4.tagline": "// Open-Source Contributions & Applied Research",
    "proj4.desc": "Personal experiments and tools in Python, Scapy, and machine learning models. Exploring lightweight packet parsing, zero-trust network verification, and automated vulnerability scanning pipelines.",

    // Journey Section
    "cmd.journey": "history --milestones",
    "journey.eyebrow": "// how_i_got_here",
    "journey.title": "Academic & Engineering Trajectory",
    "milestone.degree_title": "B.Sc. in Computer Engineering",
    "milestone.degree_org": "Faculty of Engineering · Graduated 2025",
    "milestone.degree_desc": "Rigorous 4-year curriculum covering algorithms & data structures, operating systems, computer networking & protocols, digital system design, database management, and machine learning fundamentals. Built a strong theoretical and practical engineering baseline.",
    "milestone.capstone_title": "IoTGuard — Senior Capstone Project",
    "milestone.capstone_org": "Final Year Research & Engineering Defense",
    "milestone.capstone_desc": "Led the research, architectural design, model training, and end-to-end deployment of an AI-driven intrusion detection system. Successfully presented and defended the project with high honors, showcasing real-time DDoS mitigation on 2.1M+ network flows and explainable AI insights.",
    "milestone.infra_title": "Enterprise Network Lab & Full-Stack Systems",
    "milestone.infra_org": "Production Deployments & Continuous Mastery",
    "milestone.infra_desc": "Designed multi-area OSPF network topologies, 802.1Q trunking, inter-VLAN routing, and ACL packet filters. Concurrently built and launched client & student portals like UniPath, maintaining active development on GitHub and experimenting with novel AI defense models.",

    // Skills Section
    "cmd.skills": "printenv SKILLS --all",
    "skills.eyebrow": "// technology_stack",
    "skills.title": "Every Tool, Protocol & Framework in My Arsenal",
    "skills.subtitle": "Everything I use to design, build, test, and protect modern intelligent systems.",
    "tab.all": "All Stack",
    "tab.ml": "Machine Learning & AI",
    "tab.net": "Networking & Infrastructure",
    "tab.sec": "Security & Systems",
    "tab.dev": "Full-Stack & Web",
    "tab.tools": "DevOps & Tools",
    "cat.ml": "Machine Learning & AI",
    "cat.net": "Networking & Infrastructure",
    "cat.sec": "Cybersecurity & Defense",
    "cat.dev": "Full-Stack & Web Systems",
    "cat.tools": "DevOps & Development Tools",

    // Contact Section
    "cmd.contact": "./contact.sh",
    "contact.eyebrow": "// establish_connection",
    "contact.title": "Have an Idea or Challenge? Let's Connect.",
    "contact.info_title": "# Available for Opportunities",
    "contact.info_desc": "I'm currently open to engineering roles, machine learning research projects, network architecture consultations, and freelance collaborations. Send a message through the terminal form or reach out directly.",
    "contact.guarantee": "Typical response within 24 hours · Direct to inbox",
    "form.name": "sender_name",
    "form.email": "return_email",
    "form.message": "transmission_payload",
    "form.submit": "$ transmit_message",

    // Footer
    "footer.copyright": "© 2026 Ahmad Ismail — Computer Engineering & Intelligent Systems"
  },

  ar: {
    // Navigation
    "nav.about": "نبذة عني",
    "nav.expertise": "الخبرات",
    "nav.projects": "المشاريع",
    "nav.journey": "المسار الأكاديمي",
    "nav.stack": "التقنيات",
    "nav.contact": "تواصل معي",

    // Hero Section
    "hero.boot1": "GNU/Portfolio v2.4.0 — اكتمل إقلاع النظام بنجاح",
    "hero.boot2": '[  <span class="ok-tag">OK</span>  ] تم تشغيل واجهات الشبكة ومستشعرات القياس عن بُعد.',
    "hero.boot3": "[  <span class=\"ok-tag\">OK</span>  ] جاري تحميل ملف المهندس: أحمد إسماعيل.",
    "hero.boot4": "[  <span class=\"ok-tag\">OK</span>  ] خطوط معالجة الذكاء الاصطناعي والأمن السيبراني نشطة. مرحباً بك.",
    "hero.greeting": '<span class="badge-prefix">// sys.init() :</span> مرحباً! أنا أحمد إسماعيل 👋',
    "hero.available": "متاح للفرص والمشاريع المتميزة",
    "hero.response_time": "⚡ الرد خلال أقل من 24 ساعة",
    "hero.name": "أحمد إسماعيل",
    "hero.desc": "هندسة أنظمة ذكية تجمع بين <strong>تعلم الآلة</strong>، و<strong>أمن إنترنت الأشياء</strong>، و<strong>شبكات المؤسسات</strong> في برمجيات متينة وجاهزة للإنتاج.",
    "chip.ml": "تعلم الآلة",
    "chip.sec": "أمن إنترنت الأشياء",
    "chip.net": "البنية التحتية للشبكات",
    "chip.dev": "الأنظمة المتكاملة",
    "btn.projects": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg> ./المشاريع',
    "btn.cv": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> تحميل السيرة الذاتية',
    "btn.contact": '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> ./تواصل_معي',

    // About Section
    "cmd.about": "cat نبذة_عني.txt",
    "about.eyebrow": "// من_أنا_وماذا_أبني",
    "about.title": "تحويل تدفقات البيانات المعقدة إلى أنظمة هندسية ذكية ومرنة",
    "about.p1": "أنا <strong>مهندس حاسوب</strong> شغوف بتصميم أنظمة عالية الأداء والكفاءة. يجمع عملي بين الذكاء الخوارزمي والبنية التحتية الفيزيائية للشبكات — من تدريب نماذج تعلم الآلة التجميعية على ملايين تدفقات البيانات إلى بناء شبكات المؤسسات الديناميكية ولوحات التحكم التفاعلية اللحظية.",
    "about.p2": "سواء كان ذلك عبر بناء <strong>IoTGuard</strong> للتصدي لهجمات حجب الخدمة الموزعة باستجابة آلية فورية، أو تطوير تطبيقات ويب احترافية باستخدام <strong>Next.js</strong> و <strong>WebSockets</strong>، أركز دائماً على المعمارية النظيفة، والأمان المثبت، والواجهات الجذابة وسهلة الاستخدام.",
    "stat.auc": "دقة النموذج ROC-AUC",
    "stat.auc_sub": "نظام كشف التسلل",
    "stat.samples": "تدفق شبكي",
    "stat.samples_sub": "تم التدريب والتحقق",
    "stat.tests": "اختبارات برمجية",
    "stat.tests_sub": "ناجحة بنسبة 100%",
    "stat.years": "سنوات في الهندسة",
    "stat.years_sub": "عتاد وبرمجيات",

    // Expertise Section
    "cmd.services": "ls -la ./الخبرات/",
    "expertise.eyebrow": "// مجالات_الخبرة_الرئيسية",
    "expertise.title": "أربعة محاور من الدقة الهندسية",
    "exp.ml_title": "تعلم الآلة وأنظمة الذكاء الاصطناعي",
    "exp.ml_desc": "تصميم وتدريب ونشر خطوط معالجة تعلم الآلة الجاهزة للإنتاج. تحويل البيانات الضخمة اللحظية إلى معلومات قابلة للتنفيذ عبر نماذج تجميعية متطورة، وهندسة الميزات، وقابلية التفسير.",
    "exp.ml_point1": "✦ معمارية نماذج تجميعية فائقة الدقة (LightGBM, XGBoost, IsolationForest)",
    "exp.ml_point2": "✦ ذكاء اصطناعي قابل للتفسير (XAI) باستخدام قيم SHAP لشفافية القرارات",
    "exp.ml_point3": "✦ معالجة مسبقة متكاملة للبيانات، وتحقق عبر ROC-AUC، وضبط دقيق للمعاملات",
    "exp.sec_title": "أمن إنترنت الأشياء والدفاع السيبراني",
    "exp.sec_desc": "هندسة أنظمة متينة لكشف التسلل والاستجابة الآلية للتهديدات. تأمين أجهزة وشبكات إنترنت الأشياء ضد الهجمات غير المعروفة، وهجمات SYN Flood، وشبكات البوتنت.",
    "exp.sec_point1": "✦ التقاط الحزم اللحظي، وفحص تدفقات البيانات، واكتشاف الشذوذ البروتوكولي",
    "exp.sec_point2": "✦ استجابة آلية لجدار الحماية عبر حقن القواعد الديناميكية في nftables / iptables",
    "exp.sec_point3": "✦ تكامل قواعد Suricata IDS، وتغذية استخبارات التهديدات، وربط السجلات",
    "exp.dev_title": "الأنظمة المتكاملة والأنظمة اللحظية",
    "exp.dev_desc": "بناء تطبيقات ويب سريعة ومتاحة للجميع مع خدمات خلفية مصغرة وموزعة. دمج تدفقات WebSocket اللحظية، ولوحات التحليل التفاعلية، وواجهات RESTful متينة.",
    "exp.dev_point1": "✦ بث فوري عالي السرعة عبر WebSockets ورسم بياني لحظي للقياسات",
    "exp.dev_point2": "✦ تطبيقات ويب جاهزة للإنتاج باستخدام Next.js و React و Flask و Node.js",
    "exp.dev_point3": "✦ نشر بالحاويات عبر Docker، وخطوط تكامل ونشر مستمر CI/CD، وتوثيق JWT",
    "exp.net_title": "معمارية وبروتوكولات شبكات المؤسسات",
    "exp.net_desc": "خبرة تطبيقية متعمقة في تصميم وتكوين وحماية شبكات المؤسسات المعقدة عبر الطبقتين الثانية والثالثة (Layer 2 & 3). ممارسة عملية دقيقة لبروتوكولات التوجيه، وعزل تدفقات البيانات، والتصفية الأمنية.",
    "exp.net_point1": "✦ توجيه ديناميكي باستخدام OSPFv2/v3 في مناطق متعددة مع ضبط المقاييس وسرعة التقارب",
    "exp.net_point2": "✦ تقسيم شبكات VLAN، وتوصيل 802.1Q Trunking، والتوجيه بين الشبكات (Router-on-a-Stick و L3 SVIs)",
    "exp.net_point3": "✦ مخططات عنونة VLSM لـ IPv4/IPv6، وبروتوكول شجرة الامتداد (STP/RSTP)، وتجميع الروابط EtherChannel",
    "exp.net_point4": "✦ تصفية الحزم عبر قوائم ACL القياسية والموسعة، وترجمة العناوين NAT/PAT، وأمان المنافذ",
    "exp.net_point5": "✦ تفكيك الحزم، والتحليل الجنائي للبروتوكولات، والتشخيص المتقدم للشبكات عبر Wireshark",

    // Projects Section
    "cmd.projects": "cat ./المشاريع/README.md",
    "projects.eyebrow": "// الأنظمة_والتطبيقات_المنشورة",
    "projects.title": "أبرز الأنظمة والمشاريع المنشورة",
    "badge.featured": "★ مشروع التخرج المتميز",
    "iotguard.tagline": "// نظام ذكي لكشف التسلل والحد من التهديدات في شبكات إنترنت الأشياء",
    "iotguard.desc": "منظومة دفاع سيبراني متقدمة تحمي شبكات إنترنت الأشياء المتنوعة من الهجمات الكثيفة (DDoS، فيضانات SYN، ومسح المنافذ). تجمع بين نموذجي LightGBM و IsolationForest بعد تدريبهما على أكثر من 2.1 مليون تدفق شبكي، محققة دقة 96.1% AUC مع تفسير فوري للقرارات باستخدام SHAP وحجب آلي فوري عبر جدار الحماية.",
    "iotguard.point1": "✦ <strong>معالجة لحظية:</strong> التقاط الحزم عبر Scapy وتكامل قواعد Suricata لتصنيف فوري خلال أجزاء من الثانية.",
    "iotguard.point2": "✦ <strong>ذكاء اصطناعي قابل للتفسير:</strong> قيم SHAP توضح بدقة الخصائص الشبكية المسؤولة عن إطلاق التنبيهات.",
    "iotguard.point3": "✦ <strong>استجابة تلقائية:</strong> حقن فوري لقواعد nftables في نظام Linux لعزل الأجهزة المهاجمة فوراً.",
    "badge.portal": "★ منصة حية منشورة",
    "unipath.tagline": "// بوابة القبول الجامعي وحاسبة التأشيرات لأستراليا ونيوزيلندا",
    "unipath.desc": "بوابة ويب تفاعلية شاملة مصممة لمساعدة الطلاب الدوليين في استكشاف شروط القبول في جامعات النخبة الأسترالية (Group of Eight) وأفضل جامعات نيوزيلندا. تتضمن حواسب آلية لمعادلة درجات ATAR و IELTS، وحساب مدة تأشيرة العمل بعد الدراسة Subclass 485، ولوحة كانبان لتتبع الطلبات.",
    "unipath.point1": "✦ <strong>محرك تقييم الأهلية الآلي:</strong> خوارزميات لمطابقة المعدلات التراكمية، ومكافئات ATAR ودرجات IELTS.",
    "unipath.point2": "✦ <strong>حاسبة سياسات التأشيرة:</strong> احتساب لحظي لمدد تأشيرة العمل بعد التخرج ومطابقة برامج CRICOS.",
    "unipath.point3": "✦ <strong>واجهة تفاعلية ديناميكية:</strong> إدارة حالة لوحة كانبان محلياً مع رسوم بيانية تفاعلية متجاوبة.",
    "tools.used": "// الأدوات_وحزمة_التقنيات:",
    "btn.git_clone": "استعراض الكود",
    "btn.open_site": "فتح المنصة الحية",
    "proj3.title": "بنية OSPF متعددة المناطق والتوجيه بين شبكات VLAN",
    "proj3.tagline": "// محاكاة توجيه شبكات المؤسسات والتحليل الجنائي للحزم",
    "proj3.desc": "تصميم شبكات مؤسسية متقدمة بمستويات متعددة تتضمن توجيهاً ديناميكياً عبر OSPF في مناطق متعددة، وتوصيل 802.1Q، وتوجيه Inter-VLAN على محولات الطبقة الثالثة، وتأميناً شاملاً بقوائم ACL و NAT/PAT وتحليل Wireshark.",
    "proj4.title": "أدوات الأمن السيبراني وخوارزميات الذكاء الاصطناعي",
    "proj4.tagline": "// مساهمات برمجية مفتوحة المصدر وبحوث تطبيقية",
    "proj4.desc": "تجارب وأدوات برمجية متخصصة بلغة Python و Scapy ونماذج الذكاء الاصطناعي. استكشاف تفكيك الحزم الخفيف، والتحقق الشبكي بمبدأ Zero Trust، وأتمتة مسارات فحص الثغرات.",

    // Journey Section
    "cmd.journey": "history --المسار_المهني",
    "journey.eyebrow": "// كيف_وصلت_إلى_هنا",
    "journey.title": "المسار الأكاديمي والهندسي",
    "milestone.degree_title": "بكالوريوس في هندسة الحاسوب",
    "milestone.degree_org": "كلية الهندسة · تخرج 2025",
    "milestone.degree_desc": "منهج دراسي شامل لمدة 4 سنوات يغطي الخوارزميات وهياكل البيانات، نظم التشغيل، شبكات الحاسوب وبروتوكولاتها، تصميم النظم الرقمية، إدارة قواعد البيانات، وأساسيات تعلم الآلة.",
    "milestone.capstone_title": "IoTGuard — مشروع التخرج المتميز",
    "milestone.capstone_org": "بحث التخرج والمناقشة الهندسية النهائية",
    "milestone.capstone_desc": "قيادة البحث، والتصميم المعماري، وتدريب النماذج، والنشر الكامل لنظام كشف التسلل بالذكاء الاصطناعي. تم تقديم ومناقشة المشروع بامتياز مع عرض حي للتصدي لهجمات DDoS على أكثر من 2.1 مليون تدفق وتفسير قرارات النموذج.",
    "milestone.infra_title": "مختبر شبكات المؤسسات والأنظمة المتكاملة",
    "milestone.infra_org": "إطلاق مشاريع حية وتطوير مستمر",
    "milestone.infra_desc": "تصميم طوبولوجيا شبكات OSPF متعددة المناطق، وتوصيل 802.1Q، وتوجيه Inter-VLAN، وفلاتر ACL. بالتوازي مع بناء وإطلاق بوابات متقدمة مثل UniPath والاستمرار في نشر المشاريع المفتوحة على GitHub.",

    // Skills Section
    "cmd.skills": "printenv التقنيات_والمهارات --all",
    "skills.eyebrow": "// حزمة_التقنيات",
    "skills.title": "كل الأدوات والبروتوكولات وأطر العمل في ترسانتي البرمجية",
    "skills.subtitle": "كل ما أستخدمه لتصميم وبناء واختبار وحماية الأنظمة الذكية الحديثة.",
    "tab.all": "الكل",
    "tab.ml": "تعلم الآلة والذكاء الاصطناعي",
    "tab.net": "الشبكات والبنية التحتية",
    "tab.sec": "الأمن السيبراني والأنظمة",
    "tab.dev": "الأنظمة المتكاملة والويب",
    "tab.tools": "الأدوات والتطوير",
    "cat.ml": "تعلم الآلة والذكاء الاصطناعي",
    "cat.net": "الشبكات والبنية التحتية",
    "cat.sec": "الأمن السيبراني والدفاع",
    "cat.dev": "الأنظمة المتكاملة والويب",
    "cat.tools": "أدوات التطوير والنشر",

    // Contact Section
    "cmd.contact": "./تواصل_معي.sh",
    "contact.eyebrow": "// إنشاء_الاتصال",
    "contact.title": "لديك فكرة مشروع أو تحدٍ هندسي؟ دعنا نتحدث.",
    "contact.info_title": "# متاح للفرص والمشاريع",
    "contact.info_desc": "أنا متاح حالياً للوظائف الهندسية، وبحوث تعلم الآلة، واستشارات معمارية الشبكات، والتعاون في المشاريع التقنية. أرسل رسالة عبر نموذج الطرفية أدناه أو تواصل معي مباشرة.",
    "contact.guarantee": "الرد المعتاد خلال 24 ساعة · مباشرة إلى البريد",
    "form.name": "اسم_المرسل",
    "form.email": "البريد_الإلكتروني",
    "form.message": "نص_الرسالة_أو_الفكرة",
    "form.submit": "$ إرسال_الرسالة",

    // Footer
    "footer.copyright": "© 2026 أحمد إسماعيل — هندسة الحاسوب والأنظمة الذكية"
  }
};

// Roles for Typewriter Effect
const ROLES = {
  en: ['Computer Engineer', 'ML & AI Developer', 'IoT Security Researcher', 'Network Architect', 'Full-Stack Engineer'],
  ar: ['مهندس حاسوب', 'مطور تعلم الآلة والذكاء الاصطناعي', 'باحث أمن إنترنت الأشياء', 'معماري شبكات', 'مهندس برمجيات متكاملة']
};

let currentLang = localStorage.getItem('portfolio-lang') || 'en';

// ===== LANGUAGE SWITCH ENGINE =====
function applyLanguage(lang) {
  if (lang !== 'en' && lang !== 'ar') lang = 'en';
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);

  const html = document.documentElement;
  const body = document.body;
  const langLabel = document.getElementById('lang_label');

  if (lang === 'ar') {
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');
    body.classList.add('lang-ar');
    if (langLabel) langLabel.textContent = 'EN';
  } else {
    html.setAttribute('lang', 'en');
    html.setAttribute('dir', 'ltr');
    body.classList.remove('lang-ar');
    if (langLabel) langLabel.textContent = 'عربي';
  }

  // Update all elements with data-i18n
  const dict = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Reset typewriter with new language roles
  resetTypewriter();
}

// Language switch button listener
const langToggleBtn = document.getElementById('lang_toggle');
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'en' ? 'ar' : 'en';
    applyLanguage(nextLang);
  });
}

// ===== LOADING SCREEN & BOOT SEQUENCE =====
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
      startBootSequence();
    }, 550);
  }
});

function startBootSequence() {
  const bootLines = document.querySelectorAll('#boot_sequence .boot-line');
  bootLines.forEach((line) => {
    const delay = parseInt(line.dataset.delay, 10) || 0;
    setTimeout(() => {
      line.classList.add('visible');
    }, delay);
  });
}

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
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
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.querySelectorAll('span').forEach(s => {
        s.style.transform = '';
        s.style.opacity = '';
      });
    });
  });
}

// ===== MULTI-THEME COLOR SYSTEM =====
const THEMES = ['cyan', 'violet', 'emerald', 'amber', 'rose'];
const THEME_NAMES = {
  cyan: 'CYBERPUNK',
  violet: 'SYNTHWAVE',
  emerald: 'CYBERDECK',
  amber: 'SOLAR FLARE',
  rose: 'AURORA ROSE'
};
const themePicker = document.getElementById('theme_picker');
const themePickerBtn = document.getElementById('theme_picker_btn');
const themeLabel = document.getElementById('theme_label');
const themeOpts = document.querySelectorAll('.theme-opt');

function applyTheme(name) {
  if (!THEMES.includes(name)) name = 'cyan';
  THEMES.forEach(t => document.body.classList.remove(`theme-${t}`));
  if (name !== 'cyan') {
    document.body.classList.add(`theme-${name}`);
  }
  
  localStorage.setItem('portfolio-theme', name);
  if (themeLabel) themeLabel.textContent = THEME_NAMES[name] || name.toUpperCase();

  themeOpts.forEach(opt => {
    opt.classList.toggle('active', opt.dataset.theme === name);
  });
}

if (themePicker && themePickerBtn) {
  themePickerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    themePicker.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!themePicker.contains(e.target)) {
      themePicker.classList.remove('open');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') themePicker.classList.remove('open');
  });
}

themeOpts.forEach(opt => {
  opt.addEventListener('click', () => {
    const chosen = opt.dataset.theme;
    applyTheme(chosen);
    if (themePicker) themePicker.classList.remove('open');
  });
});

// Load saved theme
let activeTheme = localStorage.getItem('portfolio-theme') || 'cyan';
if (activeTheme === 'green') activeTheme = 'emerald';
applyTheme(activeTheme);

// Initialize saved language
applyLanguage(currentLang);

// ===== DYNAMIC TYPEWRITER EFFECT =====
const typingEl = document.getElementById('typing_text');
let roleIdx = 0, charIdx = 0, deleting = false, typeTimeout = null;

function resetTypewriter() {
  if (typeTimeout) clearTimeout(typeTimeout);
  roleIdx = 0;
  charIdx = 0;
  deleting = false;
  typeEffect();
}

function typeEffect() {
  if (!typingEl) return;
  const currentRoles = ROLES[currentLang] || ROLES.en;
  const current = currentRoles[roleIdx % currentRoles.length];

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
      roleIdx = (roleIdx + 1) % currentRoles.length;
    }
  }
  typeTimeout = setTimeout(typeEffect, deleting ? 30 : 65);
}
setTimeout(typeEffect, 1200);

// ===== ANIMATED TELEMETRY COUNTERS =====
const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting && !e.target.dataset.counted) {
      e.target.dataset.counted = 'true';
      const target = parseFloat(e.target.dataset.count);
      const suffix = e.target.dataset.suffix || '';
      const isFloat = target % 1 !== 0;
      let current = 0;
      const step = target / 35;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        e.target.textContent = (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;
      }, 20);
    }
  });
}, { threshold: 0.3 });
counters.forEach(el => counterObserver.observe(el));

// ===== 3D CARD TILT EFFECT (TURAN DYNAMICS) =====
const tiltCards = document.querySelectorAll('[data-tilt]');
tiltCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4.5;
    const rotateY = ((x - centerX) / centerX) * 4.5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ===== INTERACTIVE SKILLS FILTER TABS =====
const skillTabs = document.querySelectorAll('.skill-tab');
const skillCategories = document.querySelectorAll('.skill-category');

skillTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter;

    skillTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    skillCategories.forEach(cat => {
      if (filter === 'all' || cat.dataset.category === filter) {
        cat.classList.remove('hidden');
      } else {
        cat.classList.add('hidden');
      }
    });
  });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== CONTACT FORM SUBMISSION =====
const contactForm = document.getElementById('contact_form');
const formFeedback = document.getElementById('form_feedback');
const submitBtn = document.getElementById('submit_btn');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-submit-text').textContent = currentLang === 'ar' ? '$ جاري الإرسال...' : '$ sending transmission...';
    submitBtn.querySelector('.btn-submit-icon').textContent = '⏳';

    formFeedback.className = 'form-feedback';
    formFeedback.textContent = '';

    try {
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formFeedback.textContent = currentLang === 'ar' 
          ? '[OK] تم إرسال الرسالة بنجاح. سأتواصل معك قريباً!' 
          : '[OK] Transmission dispatched successfully. Will reply shortly!';
        formFeedback.className = 'form-feedback success show';
        contactForm.reset();
      } else {
        throw new Error('Server error');
      }
    } catch (err) {
      formFeedback.textContent = currentLang === 'ar' 
        ? '[ERR] فشل الإرسال. يمكنك مراسلتي مباشرة عبر البريد الإلكتروني.' 
        : '[ERR] Transmission failed. Please contact directly via email.';
      formFeedback.className = 'form-feedback error show';
    } finally {
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-submit-text').textContent = currentLang === 'ar' ? '$ إرسال_الرسالة' : '$ transmit_message';
      submitBtn.querySelector('.btn-submit-icon').textContent = '⏎';
    }
  });
}

// Terminal Header Glitch Effect
document.querySelectorAll('.cmd-header').forEach(header => {
  header.addEventListener('mouseenter', () => {
    header.style.animation = 'glitch-1 0.25s ease';
    setTimeout(() => { header.style.animation = ''; }, 250);
  });
});

console.log('%c╔══════════════════════════════════════════════╗', 'color: #00f0ff');
console.log('%c║  Ahmad Ismail — Portfolio v2.4.0 (Bilingual)  ║', 'color: #00f0ff; font-weight: bold');
console.log('%c║  github.com/A7medico                         ║', 'color: #ff2a85');
console.log('%c╚══════════════════════════════════════════════╝', 'color: #00f0ff');
