export const languages = {
  en: "English",
  it: "Italiano",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const translations = {
  en: {
    // Nav
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.resume": "Resume",

    // Hero
    "hero.role": "CS Student & Network Enthusiast",
    "hero.greeting": "Hi, I'm",
    "hero.tagline":
      "A Computer Science student passionate about Networks, Linux, and Web Development. I build things that connect, automate, and just work.",
    "hero.cta": "Get in Touch",
    "hero.cta2": "View Work",

    // About
    "about.label": "About Me",
    "about.title": "Background & Skills",
    "about.bio1":
      "I'm a Computer Science student with a great passion for Networks, Linux, and Web Development. I love designing and troubleshooting network infrastructures — from campus LANs and data center fabrics to WAN and cloud interconnects.",
    "about.bio2":
      "On the dev side, I build web applications, automation tools, and infrastructure-as-code pipelines. I'm always eager to learn new technologies and turn complex problems into clean, elegant solutions.",
    "about.skills_label": "Core Technologies",

    // Experience
    "experience.label": "Experience",
    "experience.title": "Work Experience",

    // Projects
    "projects.label": "Projects",
    "projects.title": "Selected Work",

    // Footer
    "footer.label": "Get in Touch",
    "footer.title": "Let's Work Together",
    "footer.subtitle":
      "Have a project in mind or just want to chat? Feel free to reach out.",
    "footer.copyright": "All rights reserved.",
  },
  it: {
    // Nav
    "nav.about": "Chi Sono",
    "nav.experience": "Esperienze",
    "nav.projects": "Progetti",
    "nav.contact": "Contatti",
    "nav.resume": "Curriculum",

    // Hero
    "hero.role": "Studente di Informatica & Appassionato di Reti",
    "hero.greeting": "Ciao, sono",
    "hero.tagline":
      "Studente di Informatica appassionato di Reti, Linux e Sviluppo Web. Costruisco cose che connettono, automatizzano e funzionano.",
    "hero.cta": "Contattami",
    "hero.cta2": "Vedi i Progetti",

    // About
    "about.label": "Chi Sono",
    "about.title": "Background & Competenze",
    "about.bio1":
      "Sono uno studente di Informatica con una grande passione per le Reti, Linux e lo Sviluppo Web. Mi piace progettare e risolvere problemi di infrastrutture di rete — dalle LAN di campus ai data center, fino alle WAN e interconnessioni cloud.",
    "about.bio2":
      "Sul lato sviluppo, creo applicazioni web, tool di automazione e pipeline infrastructure-as-code. Sono sempre desideroso di imparare nuove tecnologie e trasformare problemi complessi in soluzioni eleganti.",
    "about.skills_label": "Tecnologie Principali",

    // Experience
    "experience.label": "Esperienze",
    "experience.title": "Esperienze Lavorative",

    // Projects
    "projects.label": "Progetti",
    "projects.title": "Lavori Selezionati",

    // Footer
    "footer.label": "Contattami",
    "footer.title": "Lavoriamo Insieme",
    "footer.subtitle":
      "Hai un progetto in mente o vuoi semplicemente fare due chiacchiere? Scrivimi!",
    "footer.copyright": "Tutti i diritti riservati.",
  },
} as const;

export function t(lang: Lang, key: keyof (typeof translations)["en"]): string {
  return translations[lang][key] ?? translations.en[key] ?? key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in translations) return lang as Lang;
  return defaultLang;
}

export function getLocalizedPath(lang: Lang, path: string = ""): string {
  return `/${lang}${path ? `/${path}` : ""}`;
}
