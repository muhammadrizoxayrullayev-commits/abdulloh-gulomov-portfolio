/**
 * KRYTO™ STUDIO — Interactive Portfolio Controller
 * Full Cyberpunk Logic: WebGL Particles, Web Audio FX, i18n, AI Prompt Bar, Modals & 3D Tilt
 */

// ==========================================
// 1. PROJECT DATA STORE
// ==========================================
const PROJECTS_DATA = {
  p1: {
    id: 'p1',
    category: 'crypto',
    title: {
      uz: 'Nexus Exchange — Decentralized Web3 Trading Terminal',
      en: 'Nexus Exchange — Decentralized Web3 Trading Terminal'
    },
    client: 'Nexus Protocol (USA / Singapore)',
    year: '2026',
    metric: '+340% Savdo Hajmi',
    image: '/assets/project-crypto-dex.jpg',
    challenge: {
      uz: 'Foydalanuvchilar murakkab DeFi operatsiyalarida adashib qolmasligi va sub-sekund buyurtmalarni minimal kechikish bilan bajarishi talab etilgan edi. An\'anaviy kripto birjalarning xira va chalkash dizayni yangi treyderlarni cho\'chitardi.',
      en: 'Traders struggled with convoluted DeFi interfaces and needed sub-second transaction routing with near-zero latency. Traditional DEXs suffered from high bounce rates due to cluttered charts and unintuitive order books.'
    },
    solution: {
      uz: 'Biz qorong\'u cyberpunk neon estetikasini professional TradingView chuqurlik grafikasi, bitta bosishda multi-chain svap va real vaqtda likvidlik tahlili bilan birlashtirdik. Natijada foydalanuvchilar konversiyasi bir oyda 340% ga oshdi.',
      en: 'Engineered a modular dark cyberpunk interface with integrated TradingView depth charts, single-click multi-chain swaps, and micro-animated feedback. Conversion surged by 340% in month one.'
    },
    tech: ['React 18', 'Ethers.js', 'TradingView API', 'WebSockets', 'Tailwind CSS', 'Figma Prototyping']
  },
  p2: {
    id: 'p2',
    category: 'ai',
    title: {
      uz: 'Synergy 3D — Generative AI Spatial Workstation',
      en: 'Synergy 3D — Generative AI Spatial Workstation'
    },
    client: 'Synergy Labs (Zurich / London)',
    year: '2026',
    metric: '8K Realtime Render',
    image: '/assets/project-ai-canvas.jpg',
    challenge: {
      uz: '3D rassomlar va generativ mualliflar uchun real vaqtda sun\'iy intellekt orqali geometriya va teksturalarni boshqarishga imkon beruvchi yagona, tezkor interfeys yaratish.',
      en: 'Empowering 3D artists to manipulate generative AI geometry, nodal workflows, and parametric shaders in real-time within a clean, distraction-free spatial desktop layout.'
    },
    solution: {
      uz: 'WebGL va WebGPU imkoniyatlaridan to\'liq foydalanib, foydalanuvchi matn yoki ovozli buyruq kiritishi bilan soniyalar ichida 3D modellarni jonlantiruvchi interaktiv ish stoli ishlab chiqdik.',
      en: 'Harnessed WebGL and WebGPU pipelines with interactive node graphs, prompt-to-mesh rendering, and electric lime telemetry meters, earning FWA of the Day.'
    },
    tech: ['Three.js', 'WebGL 2.0', 'WebGPU', 'Python AI Backend', 'Node.js', 'GLSL Shaders']
  },
  p3: {
    id: 'p3',
    category: 'mobile',
    title: {
      uz: 'Aether Pay — Cyberpunk Crypto Debit & Neo-Bank',
      en: 'Aether Pay — Cyberpunk Crypto Debit & Neo-Bank'
    },
    client: 'Aether Financial Services',
    year: '2025',
    metric: '4.9 ★ App Store',
    image: '/assets/project-fintech-mobile.jpg',
    challenge: {
      uz: 'Kundalik to\'lovlar (qahva, taksi, xaridlar) uchun kriptovalyutani an\'anaviy VISA karta bilan birlashtirish va buni eng zamonaviy mobil dizaynda taqdim etish.',
      en: 'Bridging everyday fiat purchases with decentralized crypto balances into a seamless, high-security mobile card management application.'
    },
    solution: {
      uz: 'Biometrik FaceID, bir tegish bilan kartani bloklash, oylik tahlillar va virtual VISA kartasi ko\'rinishidagi neomorfik neon interfeys. Ilova App Storeda 4.9 yulduzcha oldi.',
      en: 'Crafted an ergonomic dark neon glass UI with instant virtual card generation, biometric authentication, and live portfolio telemetry, gaining 4.9 stars on the App Store.'
    },
    tech: ['React Native', 'Swift', 'FinTech Security', 'TypeScript', 'Redux Toolkit', 'Figma']
  },
  p4: {
    id: 'p4',
    category: 'brand',
    title: {
      uz: 'Aether Visuals — High-Fashion Chrome & Neon Identity',
      en: 'Aether Visuals — High-Fashion Chrome & Neon Identity'
    },
    client: 'Aether Brand Worldwide',
    year: '2025',
    metric: 'Awwwards Nominee',
    image: '/assets/project-brand-identity.jpg',
    challenge: {
      uz: 'Raqamli kiberpank modasi va yuqori texnologiyalar uyg\'unlashgan jahon darajasidagi 3D vizual identifikatsiya va tipografika yaratish.',
      en: 'Establishing a rebellious yet ultra-luxurious visual brand language bridging cyber-culture and high fashion typography.'
    },
    solution: {
      uz: 'Xrom metall, shaffof shisha sinishi va neon yashil nur effektlari asosida to\'liq logotip tizimi, 3D modellar to\'plami va brend kitobi ishlab chiqildi.',
      en: 'Designed an iconic custom typography mark, reflective octane-rendered chrome assets, and complete brand guidelines celebrated across Behance and Awwwards.'
    },
    tech: ['Cinema 4D', 'Octane Render', 'Custom Typography', 'Brand Architecture', 'Motion Design']
  },
  p5: {
    id: 'p5',
    category: 'spatial',
    title: {
      uz: 'Replicant OS — Holographic Spatial UI for Vision Pro',
      en: 'Replicant OS — Holographic Spatial UI for Vision Pro'
    },
    client: 'Replicant Spatial Tech (Tokyo / Austin)',
    year: '2026',
    metric: 'VisionOS Ready',
    image: '/assets/project-spatial-vr.jpg',
    challenge: {
      uz: 'Apple Vision Pro fazoviy muhitida robot qo\'llari va telemetriyani havoda qo\'l imo-ishoralari orqali boshqarish tizimini loyihalash.',
      en: 'Designing an intuitive holographic floating workspace for spatial computing to control complex robotics with mid-air gestures and eye tracking.'
    },
    solution: {
      uz: 'Foydalanuvchi ko\'rish maydoniga xalaqit bermaydigan, yorqin kiber-yashil simli ramkalar (wireframe) va fazoviy tovush effektlariga ega holo-panel yaratildi.',
      en: 'Built an Apple visionOS native UI layer with spatial depth cues, wireframe holographic previews, and contextual audio feedback.'
    },
    tech: ['visionOS', 'SwiftUI', 'RealityKit', 'Spatial Audio', 'Metal API']
  }
};

// ==========================================
// 2. I18N DICTIONARY (Uzbek & English)
// ==========================================
const TRANSLATIONS = {
  uz: {
    'nav.status': '24/7 ISH REJIMIDA',
    'nav.projects': 'Loyihalar',
    'nav.achievements': 'Yutuqlarimiz',
    'nav.services': 'Xizmatlar',
    'nav.about': 'Biz Haqimizda',
    'nav.reviews': 'Fikrlar',
    'nav.contact': 'Bog\'lanish',
    'nav.bookCall': 'Aloqa',
    'hero.subtitle': 'ABDULLOH G\'ULOMOV • 16 YOSHLI CREATIVE DEVELOPER & DESIGNER',
    'hero.category': 'GRAPHIC DESIGN • NEXT-GEN WEB',
    'prompt.placeholder': 'Portfeliya kolleksiyasini yaratish (masalan: Web3, 3D, Mobile)...',
    'prompt.cancel': 'Bekor qilish',
    'prompt.generate': 'Generatsiya',
    'prompt.quick': 'Tezkor filtrlar:',
    'hero.scroll': 'Pastga suring',
    'stats.volume': 'Savdo aylanmasi / Tranzaksiyalar',
    'stats.projects': 'Yetkazib berilgan loyihalar',
    'stats.uptime': '24/7 Uzluksiz xizmat kafolati',
    'stats.awards': 'Xalqaro mukofotlar',
    'projects.tag': 'SARALANGAN ISHLARIMIZ',
    'projects.title1': 'Biz Yaratgan',
    'projects.title2': 'Nodir Loyihalar',
    'projects.desc': 'Har bir loyiha — ilg\'or texnologiya, estetik cyberpunk dizayn va biznes uchun yuksak konversiya timsoli.',
    'projects.view': 'Batafsil Ko\'rish',
    'projects.p1Desc': 'Multi-chain svaplar, likvidlik chuqurligi grafikasi va sub-sekund buyurtma kitobiga ega professional kripto-birja interfeysi.',
    'projects.p2Desc': 'Raqamli rassomlar va 3D modellashtiruvchilar uchun sun\'iy intellekt orqali real vaqtda generatsiya qiluvchi to\'liq UI ekotizimi.',
    'projects.p3Desc': 'Zamonaviy VISA kripto kartasi, real vaqtda portfel tahlili va biometrik xavfsizlikka asoslangan mobil bank ilovasi.',
    'projects.p4Desc': 'Xrom metall va neon yorug\'lik sintezi asosida yaratilgan to\'liq 3D brending, tipografika va raqamli identifikatsiya paketi.',
    'projects.p5Desc': 'Havo bo\'ylab fazoviy imo-ishoralar bilan boshqariladigan robototexnika diagnostikasi va telemetriya holo-paneli.',
    'filter.all': 'Barchasi (5)',
    'filter.crypto': 'Web3 & Kripto',
    'filter.ai': 'AI & Generativ 3D',
    'filter.mobile': 'Mobile FinTech',
    'filter.brand': 'Brand Identity',
    'filter.spatial': 'Spatial AR/VR',
    'achieve.tag': 'XALQARO E\'TIROF VA YUTUQLAR',
    'achieve.title1': 'Bizning Rasmiy',
    'achieve.title2': 'G\'alaba va Mukofotlarimiz',
    'achieve.desc': 'Dizayn va dasturlash sohasidagi eng nufuzli platformalar tomonidan berilgan yuksak baholar.',
    'achieve.a1': '"Nexus Exchange" loyihasi innovatsion Web3 foydalanuvchi tajribasi va 60fps silliq animatsiyalari uchun xalqaro hakamlar tomonidan e\'tirof etildi.',
    'achieve.a2': '"Synergy 3D AI Workstation" loyihasi interaktiv WebGL va ilg\'or generativ texnologiyalari uchun "Favourite Website Awards" mukofotini qo\'lga kiritdi.',
    'achieve.a3': '"Graphic Design & Cyberpunk Visuals" kuratorlar tomonidan Behance platformasining bosh sahifasiga taqdim etildi va 150K+ ko\'rish yig\'di.',
    'achieve.a4': 'Dubaydagi yillik Kripto & Web3 Forumida eng qulay va xavfsiz mobil tranzaksiya interfeysi nominatsiyasi bo\'yicha 1-o\'rin sohibi bo\'ldik.',
    'achieve.m1': 'Abdulloh G\'ulomov — Ilk IT va Web loyihalari',
    'achieve.m2': '$10M+ hajmli loyihalar ishga tushirildi',
    'achieve.m3': 'AQSH va Yevropa bozoriga chiqildi',
    'achieve.m4': '24/7 Global ishlab chiqish & AI integratsiya',
    'services.tag': 'IMKONIYAT VA XIZMATLAR',
    'services.title1': 'Sizning Loyihangiz Uchun',
    'services.title2': '24/7 Yechimlar',
    'services.desc': 'Biz shunchaki chiroyli rasm chizmaymiz — biz mahsulotingizni dunyo darajasiga olib chiqamiz.',
    'services.s1Title': 'Web3 & Kripto UX/UI Dizayn',
    'services.s1Desc': 'DEX birjalari, DeFi platformalari, Staking dasturlari va NFT bozorlari uchun mukammal xavfsiz va tushunarli interfeyslar.',
    'services.s2Title': 'Yuqori Tezlikdagi Web Dasturlash',
    'services.s2Desc': 'Zamonaviy texnologiyalar (Vite, React, Next.js, Node.js) yordamida har bir soniyada millionlab foydalanuvchiga xizmat qiluvchi tizimlar.',
    'services.s3Title': '3D Interaktiv Grafika & WebGL',
    'services.s3Desc': 'Mijozlarni hayratga soladigan 3D modellar, fazoviy animatsiyalar, shader effektlar va brending elementlari.',
    'services.s4Title': 'Mobil Ilovalar (iOS & Android)',
    'services.s4Desc': 'App Store va Google Play uchun tayyor FinTech, E-commerce va shaxsiy xizmat mobil ilovalari arxitekturasi.',
    'services.s5Title': 'AI Agentlar & Avtomatlashtirish',
    'services.s5Desc': 'Biznesingizga sun\'iy intellekt modellarini o\'rnatish, chatbotlar, avtomatlashgan kontent yaratish va ma\'lumot tahlili.',
    'services.s6Title': '24/7 Texnik Qo\'llab-quvvatlash',
    'services.s6Desc': 'Saytingiz va dasturingiz tun-u kun barqaror ishlashini ta\'minlash, xatoliklarni soniyalar ichida bartaraf etish kafolati.',
    'about.tag': 'ABDULLOH G\'ULOMOV HAQIDA',
    'about.title1': '16 Yoshda —',
    'about.title2': 'Kelajak Texnologiyalari Sari',
    'about.p1': 'Salom! Men Abdulloh G\'ulomov, 16 yoshdaman. Zamonaviy Web3, Kriptovalyuta birjalari, interaktiv UI/UX dizayn va yuqori tezlikdagi frontend dasturlash bo\'yicha ixtisoslashganman.',
    'about.p2': 'Mening falsafam: yosh shunchaki raqam, eng asosiysi — kod sifati, zamonaviy fikrlash va har bir pikselga berilgan yuksak e\'tibor. Har bir loyiha foydalanuvchida chinakam hayrat (WOW-effect) uyg\'otishi va biznesga real natija keltirishi shart.',
    'about.quote': '16 yoshimda yaratayotgan har bir mahsulotim orqali texnologiyalar kelajagini bugun barpo etish va eng yuqori jahon talablariga javob berish — mening bosh maqsadimdir.',
    'reviews.tag': 'MIJOZLAR ISHONCHI',
    'reviews.title1': 'Hamkorlarimiz Biz Haqimizda',
    'reviews.title2': 'Nima Deyishadi?',
    'reviews.r1': '"Abdulloh 16 yoshda bo\'lishiga qaramay, bizning Web3 DEX birjamiz interfeysini 0 dan ishlab chiqdi. 24/7 aloqada bo\'ldi, telefon uchun moslashuvi va tezligi aqlbovar qilmas darajada yuqori. Ishga tushgan birinchi oyidayoq konversiya 340% ga oshdi!"',
    'reviews.r2': '"3D interfeyslar va cyberpunk estetika bo\'yicha Abdullohga teng keladigani yo\'q. Yosh bo\'lishiga qaramay, o\'z ishining mutlaq ustasi. Behance va Awwwards mukofotlari mutlaqo haqli berilgan."',
    'reviews.r3': '"Telefon uchun qilingan qismi shunchalik qulay va chiroyliki, odamlar saytdan chiqishni xohlamaydi. 24/7 rejimda doim qo\'llab-quvvatlashadi. Barcha topshiriqlar vaqtidan oldin yetkazib berildi!"',
    'contact.tag': 'ALOQA VA BUYURTMALAR',
    'contact.title1': 'Keling, Birgalikda',
    'contact.title2': 'Kelajakni Quramiz',
    'contact.desc': 'Sizga portfolio, kripto platforma yoki mobil veb sayt kerakmi? Biz 24/7 rejimda sizning g\'oyangizni eshitishga va uni eng yuqori darajada amalga oshirishga tayyormiz.',
    'contact.liveStatus': 'Hozirgi Holatimiz',
    'contact.available': 'Yangi buyurtmalar uchun ochiq',
    'contact.formTitle': 'Loyiha Buyurtma Qilish',
    'contact.nameLabel': 'Ismingiz yoki Kompaniya *',
    'contact.contactLabel': 'Telegram yoki Telefon Raqamingiz *',
    'contact.typeLabel': 'Loyiha Turi',
    'contact.msgLabel': 'Loyiha Haqida Qisqacha *',
    'contact.submitBtn': 'Yuborish & Boshlash',
    'contact.privacyNotice': '🔒 Ma\'lumotlaringiz to\'liq maxfiy saqlanadi. 15 daqiqa ichida javob beramiz.',
    'footer.motto': 'Abdulloh G\'ulomov — 16 yoshli Creative Developer & UI/UX Designer. 24/7 Global xizmat.',
    'footer.navTitle': 'Navigatsiya',
    'footer.socialTitle': 'Ijtimoiy Tarmoqlar'
  },
  en: {
    'nav.status': '24/7 OPERATIONAL',
    'nav.projects': 'Projects',
    'nav.achievements': 'Awards',
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    'nav.bookCall': 'Connect',
    'hero.subtitle': 'ABDULLOH G\'ULOMOV • 16 Y.O. CREATIVE DEVELOPER & DESIGNER',
    'hero.category': 'GRAPHIC DESIGN • NEXT-GEN WEB',
    'prompt.placeholder': 'Create a collection of works for portfolio (e.g. Web3, 3D, Mobile)...',
    'prompt.cancel': 'Cancel',
    'prompt.generate': 'Generate',
    'prompt.quick': 'Quick Filters:',
    'hero.scroll': 'Scroll Down',
    'stats.volume': 'Total Trading Volume Designed',
    'stats.projects': 'Shipped Projects Globally',
    'stats.uptime': '24/7 Continuous Service Guarantee',
    'stats.awards': 'International Awards Won',
    'projects.tag': 'FEATURED SHOWCASE',
    'projects.title1': 'Masterpieces',
    'projects.title2': 'We Crafted',
    'projects.desc': 'Every single project fuses cutting-edge performance, aesthetic cyberpunk visuals, and business conversion.',
    'projects.view': 'View Case Study',
    'projects.p1Desc': 'Institutional Web3 exchange interface featuring sub-second order book matching and deep liquidity visualization.',
    'projects.p2Desc': 'Real-time generative AI 3D spatial workstation for digital artists and procedural world builders.',
    'projects.p3Desc': 'Cyberpunk crypto debit card and neo-banking mobile application with biometrics and instant asset swapping.',
    'projects.p4Desc': 'High-fashion chrome typography, 3D identity, and digital luxury brand guidelines for worldwide rollout.',
    'projects.p5Desc': 'Apple Vision Pro spatial computing UI with holographic mid-air gesture telemetry for robotics.',
    'filter.all': 'All Works (5)',
    'filter.crypto': 'Web3 & Crypto',
    'filter.ai': 'AI & 3D Spatial',
    'filter.mobile': 'Mobile FinTech',
    'filter.brand': 'Brand Identity',
    'filter.spatial': 'Spatial AR/VR',
    'achieve.tag': 'GLOBAL HONORS & RECOGNITION',
    'achieve.title1': 'Official Awards &',
    'achieve.title2': 'Industry Trophies',
    'achieve.desc': 'Recognized by the world\'s leading design and engineering institutions.',
    'achieve.a1': '"Nexus Exchange" was celebrated by the international jury for revolutionary Web3 UX and 60fps animations.',
    'achieve.a2': '"Synergy 3D AI Workstation" earned Favourite Website Awards for groundbreaking WebGL spatial rendering.',
    'achieve.a3': 'Curated on Behance\'s main homepage under Graphic Design & Interaction, gathering over 150K views.',
    'achieve.a4': 'Awarded 1st place for safest and most intuitive mobile transaction architecture at Dubai Web3 Summit.',
    'achieve.m1': 'Abdulloh G\'ulomov — First Digital & Web Works',
    'achieve.m2': 'Shipped $10M+ transaction platforms',
    'achieve.m3': 'Expanded to US and European markets',
    'achieve.m4': '24/7 Global engineering & AI workflows',
    'services.tag': 'CAPABILITIES & STACK',
    'services.title1': 'Engineered For Your Vision',
    'services.title2': '24/7 Solutions',
    'services.desc': 'We do not just draw pretty pictures — we architect global category leaders.',
    'services.s1Title': 'Web3 & Crypto UX/UI',
    'services.s1Desc': 'Flawless and secure trading platforms, DEXs, staking dashboards, and Web3 interfaces.',
    'services.s2Title': 'Ultra-Fast Web Engineering',
    'services.s2Desc': 'Modern performance tech (Vite, React, Next.js, WebGL) serving millions with zero delay.',
    'services.s3Title': '3D Interactive & WebGL',
    'services.s3Desc': 'Jaw-dropping 3D models, spatial animations, cyber aesthetics, and custom shader work.',
    'services.s4Title': 'Mobile Apps (iOS & Android)',
    'services.s4Desc': 'High-performance FinTech and consumer mobile architectures ready for App Store launch.',
    'services.s5Title': 'AI Agents & Automation',
    'services.s5Desc': 'Integrating LLMs, custom autonomous agents, automated workflows, and predictive analytics.',
    'services.s6Title': '24/7 Technical Support',
    'services.s6Desc': 'Round-the-clock uptime monitoring, dedicated engineering team, and zero-downtime SLA.',
    'about.tag': 'ABOUT ABDULLOH G\'ULOMOV',
    'about.title1': 'At Age 16 —',
    'about.title2': 'Pioneering The Future',
    'about.p1': 'Hello! I am Abdulloh G\'ulomov, a 16-year-old creative frontend developer and UI/UX designer. I specialize in Web3, crypto platforms, interactive interfaces, and high-speed web apps.',
    'about.p2': 'My philosophy: age is just a number — mastery lies in relentless ambition, pristine code quality, and obsessive attention to detail. Every interface must create an unforgettable WOW effect.',
    'about.quote': 'At age 16, my mission is to architect world-class digital products that push the limits of modern web technologies and inspire the global creator community.',
    'reviews.tag': 'CLIENT TESTIMONIALS',
    'reviews.title1': 'What Global Partners',
    'reviews.title2': 'Say About Us',
    'reviews.r1': '"Abdulloh is only 16, yet he engineered our Web3 DEX platform interface from the ground up. 24/7 responsiveness and flawless execution!"',
    'reviews.r2': '"Unrivaled in 3D cyberpunk visuals and modern UX. Abdulloh G\'ulomov proves that age does not limit world-class craftsmanship."',
    'reviews.r3': '"The mobile responsive experience is so buttery-smooth people never want to leave. Delivered ahead of schedule with 24/7 dedication!"',
    'contact.tag': 'CONNECT & COMMISSION',
    'contact.title1': 'Let Us Build',
    'contact.title2': 'The Future Together',
    'contact.desc': 'Need a bespoke portfolio, crypto trading terminal, or high-performance web app? We are ready 24/7 to turn your ambition into reality.',
    'contact.liveStatus': 'Current Availability',
    'contact.available': 'Open for Select Contracts',
    'contact.formTitle': 'Commission a Project',
    'contact.nameLabel': 'Your Name or Company *',
    'contact.contactLabel': 'Telegram or Phone Number *',
    'contact.typeLabel': 'Project Scope',
    'contact.msgLabel': 'Project Overview *',
    'contact.submitBtn': 'Submit & Initiate',
    'contact.privacyNotice': '🔒 Your inquiry is strictly confidential. Guaranteed response within 15 mins.',
    'footer.motto': 'Abdulloh G\'ulomov — 16 y.o. Creative Developer & UI/UX Designer. 24/7 Global Delivery.',
    'footer.navTitle': 'Navigation',
    'footer.socialTitle': 'Social Channels'
  }
};

let currentLang = localStorage.getItem('kryto_lang') || 'uz';
let audioEnabled = localStorage.getItem('kryto_audio') !== 'false';

// ==========================================
// 3. SYNTHETIC WEB AUDIO ENGINE
// ==========================================
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx && typeof window !== 'undefined') {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playSound(type) {
  if (!audioEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'hover') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(240, now + 0.08);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'generate') {
      // Futuristic chime
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
      osc.frequency.setValueAtTime(1046.50, now + 0.24); // C6
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc.start(now);
      osc.stop(now + 0.45);
    } else if (type === 'success') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    }
  } catch {
    // Ignore audio errors gracefully
  }
}

// ==========================================
// 4. HERO PARTICLE CANVAS
// ==========================================
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const PARTICLE_COUNT = 45;
  let mouse = { x: -1000, y: -1000 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.size = Math.random() * 2 + 1;
      this.alpha = Math.random() * 0.5 + 0.2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interactivity
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        this.x -= (dx / dist) * 1.5;
        this.y -= (dy / dist) * 1.5;
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(204, 255, 0, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(204, 255, 0, ${0.15 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(loop);
  }
  loop();
}

// ==========================================
// 5. CUSTOM NEON CURSOR (DESKTOP)
// ==========================================
function initCustomCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(renderRing);
  }
  renderRing();

  // Enlarge ring on interactive elements
  const hoverables = document.querySelectorAll('a, button, input, textarea, select, [data-tilt]');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width = '48px';
      ring.style.height = '48px';
      ring.style.borderColor = '#ccff00';
      ring.style.background = 'rgba(204, 255, 0, 0.08)';
      playSound('hover');
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width = '32px';
      ring.style.height = '32px';
      ring.style.borderColor = 'rgba(204, 255, 0, 0.5)';
      ring.style.background = 'transparent';
    });
  });
}

// ==========================================
// 6. 24/7 LIVE CLOCK
// ==========================================
function initLiveClock() {
  const clockEl = document.getElementById('liveClock');
  const mobileClockEl = document.getElementById('mobileClock');

  function update() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-GB', { hour12: false });
    if (clockEl) clockEl.textContent = timeStr;
    if (mobileClockEl) mobileClockEl.textContent = timeStr;
  }
  setInterval(update, 1000);
  update();
}

// ==========================================
// 7. I18N LANGUAGE SWITCHER
// ==========================================
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('kryto_lang', lang);

  const dict = TRANSLATIONS[lang] || TRANSLATIONS.uz;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.setAttribute('placeholder', dict[key]);
  });

  const currEl = document.getElementById('currentLang');
  const altEl = document.getElementById('altLang');
  if (currEl && altEl) {
    currEl.textContent = lang.toUpperCase();
    altEl.textContent = (lang === 'uz' ? 'en' : 'uz').toUpperCase();
  }
}

// ==========================================
// 8. 3D CARD TILT EFFECT
// ==========================================
function init3DTilt() {
  const tiltCards = document.querySelectorAll('[data-tilt]');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

// ==========================================
// 9. ANIMATED NUMBER COUNTERS (SCROLL TRIGGER)
// ==========================================
function initCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(el => {
          const target = parseFloat(el.getAttribute('data-target'));
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          let current = 0;
          const step = target / 40;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            const displayVal = target % 1 === 0 ? Math.floor(current) : current.toFixed(1);
            el.textContent = `${prefix}${displayVal}${suffix}`;
          }, 35);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats');
  if (statsSection) observer.observe(statsSection);
}

// ==========================================
// 10. PROJECT FILTERING & AI PROMPT BAR
// ==========================================
function filterProjects(category) {
  const cards = document.querySelectorAll('.project-card');
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === category);
  });

  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'flex';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      }, 50);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.95)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 250);
    }
  });
}

function initPromptBar() {
  const input = document.getElementById('aiPromptInput');
  const generateBtn = document.getElementById('promptGenerateBtn');
  const clearBtn = document.getElementById('promptClearBtn');
  const pills = document.querySelectorAll('.sug-pill');

  function triggerGeneration() {
    playSound('generate');
    const query = input.value.trim().toLowerCase();
    
    // Add glowing animation to prompt bar
    const bar = document.querySelector('.prompt-bar-glass');
    if (bar) {
      bar.style.boxShadow = '0 0 45px rgba(204, 255, 0, 0.9)';
      setTimeout(() => {
        bar.style.boxShadow = '';
      }, 800);
    }

    // Determine category based on prompt query
    let cat = 'all';
    if (query.includes('crypto') || query.includes('web3') || query.includes('dex') || query.includes('kripto')) {
      cat = 'crypto';
    } else if (query.includes('ai') || query.includes('3d') || query.includes('spatial') || query.includes('generative')) {
      cat = 'ai';
    } else if (query.includes('mobile') || query.includes('bank') || query.includes('fintech') || query.includes('telefon')) {
      cat = 'mobile';
    } else if (query.includes('brand') || query.includes('identity') || query.includes('brend')) {
      cat = 'brand';
    } else if (query.includes('vr') || query.includes('ar') || query.includes('vision')) {
      cat = 'spatial';
    }

    filterProjects(cat);

    // Scroll to projects
    const projSection = document.getElementById('projects');
    if (projSection) {
      projSection.scrollIntoView({ behavior: 'smooth' });
    }

    showToast(`⚡ AI filtri qo'llanildi: "${input.value}"`);
  }

  if (generateBtn) {
    generateBtn.addEventListener('click', triggerGeneration);
  }

  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') triggerGeneration();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      playSound('click');
      input.value = '';
      input.focus();
    });
  }

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      playSound('click');
      const cat = pill.getAttribute('data-filter');
      input.value = pill.textContent.replace(/^[^\w\s]+/, '').trim();
      filterProjects(cat);
      const projSection = document.getElementById('projects');
      if (projSection) projSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Filter Buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      playSound('click');
      filterProjects(btn.getAttribute('data-filter'));
    });
  });
}

// ==========================================
// 11. PROJECT CASE STUDY MODAL
// ==========================================
function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (!modal) return;

  function openModal(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    playSound('click');
    document.getElementById('modalBadgeCategory').textContent = data.category.toUpperCase();
    document.getElementById('modalBadgeYear').textContent = data.year;
    document.getElementById('modalTitle').textContent = data.title[currentLang] || data.title.uz;
    document.getElementById('modalClient').textContent = data.client;
    document.getElementById('modalResult').textContent = data.metric;
    document.getElementById('modalImg').src = data.image;
    document.getElementById('modalImg').alt = data.title[currentLang] || data.title.uz;
    document.getElementById('modalChallenge').textContent = data.challenge[currentLang] || data.challenge.uz;
    document.getElementById('modalSolution').textContent = data.solution[currentLang] || data.solution.uz;

    // Render Tech Tags
    const tagsContainer = document.getElementById('modalTechTags');
    tagsContainer.innerHTML = '';
    data.tech.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tech-tag';
      span.textContent = t;
      tagsContainer.appendChild(span);
    });

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    playSound('click');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Bind Quick View Buttons
  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(btn.getAttribute('data-project'));
    });
  });

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      openModal(card.getAttribute('data-project-id'));
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  const modalCta = document.getElementById('modalCtaBtn');
  if (modalCta) {
    modalCta.addEventListener('click', closeModal);
  }
}

// ==========================================
// 12. TOAST NOTIFICATION UTILITY
// ==========================================
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>⚡</span> <div>${message}</div>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ==========================================
// 13. CONTACT FORM HANDLER
// ==========================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    playSound('success');

    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Yuborilmoqda...</span> ⚡';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      form.reset();

      const successMsg = currentLang === 'uz'
        ? 'Rahmat! Xabaringiz qabul qilindi. 24/7 navbatchi mutaxassisimiz 15 daqiqa ichida siz bilan bog\'lanadi.'
        : 'Thank you! Your message has been received. Our 24/7 team will respond within 15 minutes.';
      showToast(successMsg);
    }, 1000);
  });
}

// ==========================================
// 14. MOBILE MENU & HEADER SCROLL
// ==========================================
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('mobileCloseBtn');
  const drawer = document.getElementById('mobileDrawer');
  const navItems = document.querySelectorAll('.mobile-nav-item, .mobile-drawer .btn');

  function openDrawer() {
    playSound('click');
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    playSound('click');
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  navItems.forEach(item => {
    item.addEventListener('click', closeDrawer);
  });

  // Header scroll class
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ==========================================
// 15. AUDIO & LANGUAGE TOGGLE BUTTONS
// ==========================================
function initHeaderControls() {
  const audioBtn = document.getElementById('audioToggle');
  const audioIcon = document.getElementById('audioIcon');
  const langBtn = document.getElementById('langToggle');

  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      audioEnabled = !audioEnabled;
      localStorage.setItem('kryto_audio', audioEnabled);
      if (audioIcon) {
        audioIcon.textContent = audioEnabled ? '🔊' : '🔇';
      }
      const tip = audioBtn.querySelector('.audio-tooltip');
      if (tip) tip.textContent = audioEnabled ? 'FX ON' : 'FX OFF';
      if (audioEnabled) playSound('click');
    });
  }

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      playSound('click');
      const nextLang = currentLang === 'uz' ? 'en' : 'uz';
      applyLanguage(nextLang);
    });
  }
}

// ==========================================
// INITIALIZATION ON DOM CONTENT LOADED
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initHeroCanvas();
  initCustomCursor();
  initLiveClock();
  init3DTilt();
  initCounters();
  initPromptBar();
  initProjectModal();
  initContactForm();
  initMobileMenu();
  initHeaderControls();
  applyLanguage(currentLang);
});
