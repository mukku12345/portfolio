import { useEffect, useState } from 'react';
import './App.css';

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.2-.25 6.8 5.37 6.8-5.37H5.2Zm13.3 1.28-5.88 4.65a1 1 0 0 1-1.24 0L5.5 7.78v9.47c0 .14.11.25.25.25h12.5c.14 0 .25-.11.25-.25V7.78Z" />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v9m0 0 3.5-3.5M12 13 8.5 9.5M5 16.5v1A2.5 2.5 0 0 0 7.5 20h9a2.5 2.5 0 0 0 2.5-2.5v-1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.2A9.8 9.8 0 0 0 3.7 17.2L2.2 21.8l4.8-1.4A9.8 9.8 0 1 0 12 2.2Zm0 17.7c-1.5 0-3-.4-4.2-1.1l-.3-.2-2.8.8.9-2.7-.2-.3a7.7 7.7 0 1 1 6.6 3.5Zm4.3-5.7c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.7.9-.1.1-.3.2-.5.1-1.4-.7-2.3-1.3-3.2-3-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1 0-.3 0-.4 0-.1-.5-1.2-.7-1.7-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.1 1.6 2.5 3.9 3.5.5.2 1 .4 1.3.5.6.2 1.1.2 1.6.1.5-.1 1.3-.5 1.5-1 .2-.5.2-.9.1-1 0-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.2-3.37-1.2-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.49.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.33 4.8-4.56 5.06.36.31.68.93.68 1.88 0 1.36-.01 2.45-.01 2.78 0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55A1.96 1.96 0 1 0 3.24 5a1.96 1.96 0 0 0 3.92-.05ZM20 12.86c0-3.46-1.85-5.07-4.33-5.07-1.99 0-2.88 1.11-3.38 1.89V8.5H8.92c.04.79 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.68.13-.92.27-.68.89-1.38 1.93-1.38 1.36 0 1.9 1.05 1.9 2.58V20H20v-7.14Z" />
    </svg>
  );
}

function IconFrontend() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v8.5A2.75 2.75 0 0 1 18.25 17H5.75A2.75 2.75 0 0 1 3 14.25v-8.5Zm2.75-.25a.25.25 0 0 0-.25.25v8.5c0 .14.11.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25H5.75ZM8.22 20.25c0-.69.56-1.25 1.25-1.25h5.06a1.25 1.25 0 1 1 0 2.5H9.47c-.69 0-1.25-.56-1.25-1.25Z" />
    </svg>
  );
}

function IconBackend() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3c-4.56 0-8 1.5-8 3.5V17.5C4 19.5 7.44 21 12 21s8-1.5 8-3.5V6.5C20 4.5 16.56 3 12 3Zm0 2c3.84 0 6 .99 6 1.5S15.84 8 12 8 6 7.01 6 6.5 8.16 5 12 5Zm0 6c3.84 0 6 .99 6 1.5S15.84 14 12 14s-6-.99-6-1.5S8.16 11 12 11Zm0 8c-3.84 0-6-.99-6-1.5v-2.28c1.46.96 3.85 1.53 6 1.53s4.54-.57 6-1.53v2.28c0 .51-2.16 1.5-6 1.5Z" />
    </svg>
  );
}

function IconFullStack() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5.5 4A2.5 2.5 0 0 0 3 6.5v3A2.5 2.5 0 0 0 5.5 12h3A2.5 2.5 0 0 0 11 9.5v-3A2.5 2.5 0 0 0 8.5 4h-3Zm10 0A2.5 2.5 0 0 0 13 6.5v3a2.5 2.5 0 0 0 2.5 2.5h3A2.5 2.5 0 0 0 21 9.5v-3A2.5 2.5 0 0 0 18.5 4h-3Zm-10 10A2.5 2.5 0 0 0 3 16.5v3A2.5 2.5 0 0 0 5.5 22h3a2.5 2.5 0 0 0 2.5-2.5v-3A2.5 2.5 0 0 0 8.5 14h-3Zm7.75 1a1 1 0 0 1 1-1h4.25a1 1 0 1 1 0 2h-4.25a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h4.25a1 1 0 1 1 0 2h-4.25a1 1 0 0 1-1-1Z" />
    </svg>
  );
}

function SkillChipIcon({ label, tone }) {
  return (
    <span className={`skill-chip-icon ${tone}`} aria-hidden="true">
      {label}
    </span>
  );
}

function TechReact() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="1.9" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
}

function TechNext() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="currentColor" />
      <path d="M8 16V8l8 8V8" fill="none" stroke="#07111f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TechJS() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" />
      <path d="M9.4 8.4v5.8c0 1.6-.8 2.7-2.5 3.1" fill="none" stroke="#07111f" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13.6 14.7c.5.8 1.2 1.1 2 1.1.9 0 1.6-.4 1.6-1.1 0-.8-.6-1.1-1.8-1.6-1.3-.5-2.3-1.1-2.3-2.6 0-1.4 1.1-2.4 2.8-2.4 1.2 0 2.1.4 2.7 1.4" fill="none" stroke="#07111f" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function TechHTML() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 3h14l-1.4 16.2L12 21l-5.6-1.8L5 3Z" fill="currentColor" />
      <path d="m8 8 1 8 3 1 3-1 1-8H8Z" fill="#07111f" opacity="0.22" />
      <path d="m8.2 7.2 1.2 0 1 1.6 1-1.6h1.2l-1.6 2.5 1.7 2.7h-1.2L10.4 11l-1.1 1.4H8.1l1.7-2.7-1.6-2.5Zm5.1 0h3.6v1H15.8v1h1.1v1h-1.1v1.1h1.1v1h-2.5V7.2Z" fill="#07111f" />
    </svg>
  );
}

function TechCSS() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 3h14l-1.4 16.2L12 21l-5.6-1.8L5 3Z" fill="currentColor" />
      <path d="M12 5v14l4.5-1.4L17.7 5H12Z" fill="#fff" opacity="0.18" />
      <path d="M8.2 7.3h7.6l-.2 1.1H9.4l.2 1h5.8l-.6 4.4-2.6.9-2.6-.9-.2-1.6h1.3l.1.7 1.4.5 1.4-.5.2-1.4H8.9l-.7-4.8Z" fill="#07111f" />
    </svg>
  );
}

function TechJQuery() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 16c1.7 1.7 4.7 2 7 .6 1-.6 1.8-1.4 2.4-2.4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8.3 12.8c1.2 1.2 3.3 1.4 4.9.5.7-.4 1.3-1 1.7-1.7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" opacity="0.8" />
      <path d="M9.6 9.8c.7.7 1.8.8 2.8.3.4-.2.8-.6 1-1" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function TechExpress() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5.5 9.5h7M5.5 12h5.5M5.5 14.5H12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m14.5 9.4 4 5.2m0-5.2-4 5.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function TechNode() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3.2 7 4v9.6l-7 4-7-4V7.2l7-4Z" fill="currentColor" />
      <path d="M10 9v6m0-6 4 6V9" fill="none" stroke="#07111f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TechNest() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 6.2 8.1l2.2 9.1L12 21l3.6-3.8 2.2-9.1L12 3Z" fill="currentColor" />
      <path d="M9.2 16V8.8l5.6 7.2V8.8" fill="none" stroke="#07111f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TechMySQL() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 15c1.2-3.7 4.2-6.5 8.7-8.1-.8 1-.9 1.7-.6 2.4 1.3.2 2.2.9 2.9 2-1.5-.5-2.8-.4-4 .3.8.7 1.4 1.6 1.6 2.8-.9-.8-1.8-1.3-2.9-1.4-.8 1.2-2 2-3.7 2.3.5-.7.8-1.5 1-2.3-1 .3-1.9.9-3 2Z" fill="currentColor" />
    </svg>
  );
}

function TechMongo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3c1.9 2.1 3 4.8 3 7.7 0 4.2-1.3 7.8-3 10.3-1.7-2.5-3-6.1-3-10.3C9 7.8 10.1 5.1 12 3Z" fill="currentColor" />
      <path d="M12 5.2c.8 1.4 1.3 3.2 1.3 5.4 0 2.8-.5 5.3-1.3 7.2-.8-1.9-1.3-4.4-1.3-7.2 0-2.2.5-4 1.3-5.4Z" fill="#07111f" opacity="0.2" />
    </svg>
  );
}

function TechPostgres() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.8 7.5c0-2 1.4-3.5 3.2-3.5 2.5 0 4.8 2 4.8 5.6 0 3.7-1.6 6.2-3.9 6.2-.6 0-1.2-.2-1.7-.5v3.2l-1.9-1.1v-8c0-1 .7-1.9 1.8-1.9h.8c.5 0 1 .1 1.4.4-.3-.9-.9-1.5-1.7-1.5-.9 0-1.5.7-1.5 1.8v2.1l-1.3.6V7.5Z" fill="currentColor" />
    </svg>
  );
}

function TechArchitecture() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="6" height="6" rx="1.4" fill="currentColor" />
      <rect x="14" y="4" width="6" height="6" rx="1.4" fill="currentColor" />
      <rect x="9" y="14" width="6" height="6" rx="1.4" fill="currentColor" />
      <path d="M10 7h4m-2 0v4m0 0v3" fill="none" stroke="#07111f" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function TechApi() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 8h4v8H7m7-8h3a2 2 0 0 1 0 4h-3m0-4v8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TechDatabase() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <ellipse cx="12" cy="6.5" rx="6.5" ry="2.8" fill="currentColor" />
      <path d="M5.5 6.5v4.5c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8V6.5" fill="currentColor" opacity="0.82" />
      <path d="M5.5 11v4.5c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8V11" fill="currentColor" opacity="0.62" />
    </svg>
  );
}

function IconCollege() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4 3 8.2 12 12l7-3.1v5.2h2V8.2L12 4Z" fill="currentColor" />
      <path d="M6.2 10.2v4.1c0 1.6 2.6 3 5.8 3s5.8-1.4 5.8-3v-4.1L12 13l-5.8-2.8Z" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

function IconSchool() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 10.5 12 4l8 6.5V20H4v-9.5Z" fill="currentColor" />
      <path d="M9 20v-5h6v5M9.5 9h1.5v1.5H9.5Zm3.5 0h1.5v1.5H13Z" fill="#07111f" />
    </svg>
  );
}

function IconCommerceProject() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 6h12l-1.4 6.5H9L7 6Z" fill="currentColor" />
      <path d="M5 4H3m2 0 1.2 2.2M10 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM9 17h6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconLegalProject() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v16M7 8h10" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8 8 5.5 12h5L8 8Zm8 0L13.5 12h5L16 8Z" fill="currentColor" />
      <path d="M9 20h6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconStoryProject() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 5.5A2.5 2.5 0 0 1 8.5 3H19v15.5A2.5 2.5 0 0 0 16.5 16H6V5.5Z" fill="currentColor" />
      <path d="M6 16v1.5A2.5 2.5 0 0 0 8.5 20H19" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 7.5h6M9 10h5" fill="none" stroke="#07111f" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconHrProject() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.5 6a5.5 5.5 0 0 1 11 0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M18 6.5h3M19.5 5v3" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconExternalLink() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 5h5v5M10 14l9-9M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const profile = {
  name: 'Mukesh Kushwaha',
  intro:
    'I am a full stack web developer with more than one year of hands-on experience building responsive products using React, Node.js, Express.js, MongoDB, MySQL, Redux, HTML, CSS, and JavaScript.',
  location: 'India',
  availability: 'Open to internships, freelance work, and full-time opportunities',
  resumeUrl: '/Mukesh-Kushwaha-resume.pdf',
  email: 'mukeshkushwaha.sp@gmail.com',
  phone: '+91 8299192531',
  whatsapp: 'https://wa.me/918299192531',
  github: 'https://github.com/mukku12345',
  linkedin: 'https://www.linkedin.com/in/mukesh-kushwaha-b82936182',
  tagline: 'Building elegant interfaces that feel fast, useful, and memorable.',
};

const rotatingRoles = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'];

const focusAreas = [
  {
    title: 'Frontend Craft',
    description:
      'Responsive layouts, polished UI systems, and small details that make products feel confident.',
  },
  {
    title: 'React Workflow',
    description:
      'Component-driven development with reusable structure, clean state handling, and maintainable code.',
  },
  {
    title: 'Visual Storytelling',
    description:
      'Landing pages and portfolios that communicate personality instead of looking like generic templates.',
  },
];

const highlights = [
  'Responsive portfolio development',
  'React application structure',
  'Modern CSS styling and layout systems',
  'Performance-minded UI decisions',
  'Clean component organization',
  'User-focused design thinking',
];

const skills = [
  {
    title: 'Frontend Developer',
    Icon: IconFrontend,
    items: [
      { name: 'React', label: <TechReact />, tone: 'tone-react' },
      { name: 'Next.js', label: <TechNext />, tone: 'tone-next' },
      { name: 'JavaScript', label: <TechJS />, tone: 'tone-js' },
      { name: 'HTML', label: <TechHTML />, tone: 'tone-html' },
      { name: 'CSS', label: <TechCSS />, tone: 'tone-css' },
      { name: 'jQuery', label: <TechJQuery />, tone: 'tone-jquery' },
    ],
  },
  {
    title: 'Backend Developer',
    Icon: IconBackend,
    items: [
      { name: 'Express.js', label: <TechExpress />, tone: 'tone-express' },
      { name: 'Node.js', label: <TechNode />, tone: 'tone-node' },
      { name: 'NestJS', label: <TechNest />, tone: 'tone-nest' },
      { name: 'MySQL', label: <TechMySQL />, tone: 'tone-mysql' },
      { name: 'MongoDB', label: <TechMongo />, tone: 'tone-mongo' },
      { name: 'PostgreSQL', label: <TechPostgres />, tone: 'tone-postgres' },
    ],
  },
  {
    title: 'Full Stack Developer',
    Icon: IconFullStack,
    items: [
      { name: 'Frontend + backend architecture', label: <TechArchitecture />, tone: 'tone-fullstack' },
      { name: 'API integration', label: <TechApi />, tone: 'tone-api' },
      { name: 'Database-driven apps', label: <TechDatabase />, tone: 'tone-db' },
    ],
  },
];

const education = [
  {
    period: '2016 - 2020',
    title: 'Bachelor of Technology',
    subtitle: 'Electronics and Communication Engineering',
    place: 'Dr. AITH Government College, Kanpur, Uttar Pradesh',
    score: 'Grade: 73.0%',
    Icon: IconCollege,
    tone: 'education-college',
  },
  {
    period: '2012 - 2014',
    title: 'Intermediate (Class XII)',
    subtitle: 'Higher Secondary Education',
    place: 'Mahatma Gandhi Inter College, Gorakhpur',
    score: 'Grade: 84.0%',
    Icon: IconSchool,
    tone: 'education-school',
  },
  {
    period: '2011 - 2012',
    title: 'Matriculation (Class X)',
    subtitle: 'Secondary Education',
    place: 'Smt. Chandrawati Devi Sikshan High School, Deoria, Uttar Pradesh',
    score: 'Grade: 78.0%',
    Icon: IconSchool,
    tone: 'education-school',
  },
];

const projects = [
  {
    title: 'Eurocharged',
    Icon: IconCommerceProject,
    tone: 'project-commerce',
    demo: 'https://dev.eurocharged.com/',
    summary:
      'Vehicle e-commerce platform where I worked on both sides of the product: the customer side for browsing cars, checking specifications, and placing orders, and the admin side for managing users, products, pricing, SEO, blogs, visibility, and analytics.',
    stack: 'React, JavaScript, JSX, Node.js, MySQL, Bootstrap, CSS',
  },
  {
    title: 'Borhan',
    Icon: IconLegalProject,
    tone: 'project-legal',
    demo: 'https://legal.borhans.com/',
    summary:
      'Legal services platform that helps users find lawyers in their area, explore law colleges, and stay updated with legal news and resources.',
    stack: 'MongoDB, Express.js, React, Node.js, HTML, CSS',
  },
  {
    title: 'EndlessTales',
    Icon: IconStoryProject,
    tone: 'project-story',
    demo: 'https://www.endless-tales.com/',
    summary:
      'AI-based storytelling platform for kids with login, chapter-based story creation, sharing, playlists, archives, reviews, audio listening, and trending stories.',
    stack: 'React, Node.js, Express.js, MySQL, HTML, CSS',
  },
  {
    title: 'HiHelloHR',
    Icon: IconHrProject,
    tone: 'project-hr',
    demo: 'https://dev.hihellohr.com/app/login.php',
    summary:
      'Employee management system for HR teams with hiring, payroll, attendance, and check-in/check-out workflows using face recognition, thumbprint, and metallic card technology.',
    stack: 'React, JavaScript, jQuery, PHP, MySQL, HTML, CSS, Bootstrap',
  },
];

const journey = [
  {
    label: 'Current Direction',
    value: 'Growing as a frontend developer with React and modern web design.',
  },
  {
    label: 'What I Enjoy',
    value: 'Transforming simple ideas into visually engaging and usable interfaces.',
  },
  {
    label: 'What I Bring',
    value: 'Consistency, curiosity, and a strong eye for presentation.',
  },
];

function App() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveRoleIndex((current) => (current + 1) % rotatingRoles.length);
    }, 2200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="portfolio-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <main className="portfolio">
        <header className="site-header">
          <a className="brand-mark" href="#top">
            <span className="brand-dot" />
            <span>{profile.name}</span>
          </a>

          <nav className="site-nav" aria-label="Portfolio sections">
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="header-cta" href={profile.resumeUrl} target="_blank" rel="noreferrer">
            Resume
          </a>
        </header>

        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio 2026</p>
            <h1>{profile.name}</h1>
            <p className="hero-role" key={rotatingRoles[activeRoleIndex]}>
              <span className="hero-role-text">{rotatingRoles[activeRoleIndex]}</span>
            </p>
            <p className="hero-text">{profile.intro}</p>

            <div className="hero-actions">
              <a className="button button-primary" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                View Resume
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="hero-meta">
              <span>{profile.location}</span>
              <span>{profile.availability}</span>
            </div>

            <div className="profile-links">
              <a className="profile-link-card" href={profile.github} target="_blank" rel="noreferrer">
                <span className="contact-icon">
                  <IconGithub />
                </span>
                <span>
                  <strong>GitHub</strong>
                  <small>See my code and projects</small>
                </span>
              </a>

              <a className="profile-link-card" href={profile.linkedin} target="_blank" rel="noreferrer">
                <span className="contact-icon">
                  <IconLinkedIn />
                </span>
                <span>
                  <strong>LinkedIn</strong>
                  <small>View my professional profile</small>
                </span>
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="profile-photo-wrap">
              <img className="profile-photo" src="/mukesh-profile.png" alt="Mukesh Kushwaha portrait" />
            </div>

            <div className="hero-panel-copy">
              <p className="panel-label">Profile Snapshot</p>
              <h2>{profile.tagline}</h2>
              <p>
                I enjoy building interfaces that are visually strong, easy to understand, and ready to leave a good
                first impression.
              </p>
            </div>

            <div className="stat-grid">
              <div>
                <strong>01</strong>
                <span>Creative direction</span>
              </div>
              <div>
                <strong>02</strong>
                <span>React-first builds</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Responsive layouts</span>
              </div>
              <div>
                <strong>04</strong>
                <span>Clean presentation</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">What I Do</p>
            <h2>Frontend work with design energy</h2>
          </div>

          <div className="card-grid">
            {focusAreas.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section">
          <div className="section-heading">
            <p className="eyebrow">Strengths</p>
            <h2>Skills that shape the way I build</h2>
          </div>

          <div className="split-grid">
            <div className="skills-cloud">
              {highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="journey-list">
              {journey.map((item) => (
                <article key={item.label}>
                  <p>{item.label}</p>
                  <h3>{item.value}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Tech Stack</p>
            <h2>Skills across frontend, backend, and full stack development</h2>
          </div>

          <div className="card-grid skills-grid">
            {skills.map((skill) => (
              <article className="info-card skill-card" key={skill.title}>
                <div className="skill-heading">
                  <span className="skill-icon" aria-hidden="true">
                    <skill.Icon />
                  </span>
                  <h3>{skill.title}</h3>
                </div>
                <div className="skills-cloud">
                  {skill.items.map((item) => (
                    <span key={item.name} className="skill-chip">
                      <SkillChipIcon label={item.label} tone={item.tone} />
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2>Projects and practice that keep sharpening my craft</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <p className="project-stack">{project.stack}</p>
                <div className="project-title-row">
                  <span className={`project-icon ${project.tone}`} aria-hidden="true">
                    <project.Icon />
                  </span>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.summary}</p>
                <a className="project-link" href={project.demo} target="_blank" rel="noreferrer">
                  <span className="project-link-icon">
                    <IconExternalLink />
                  </span>
                  <span>Live Project</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2>The academic foundation behind my development journey</h2>
          </div>

          <div className="education-grid">
            {education.map((item) => (
              <article className="info-card education-card" key={`${item.title}-${item.period}`}>
                <div className="education-top">
                  <span className={`education-icon ${item.tone}`} aria-hidden="true">
                    <item.Icon />
                  </span>
                  <p className="project-stack">{item.period}</p>
                </div>
                <h3>{item.title}</h3>
                <p className="education-subtitle">{item.subtitle}</p>
                <p>{item.place}</p>
                <p className="education-score">{item.score}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <p className="eyebrow">Let&apos;s Connect</p>
            <h2>Interested in working together?</h2>
            <p>
              I&apos;m currently building my frontend journey and would love to connect for internships, freelance
              projects, collaborations, or full-time roles.
            </p>
          </div>

          <div className="contact-details">
            <a href={`mailto:${profile.email}`}>
              <span className="contact-icon contact-mail">
                <IconMail />
              </span>
              <span>{profile.email}</span>
            </a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer">
              <span className="contact-icon contact-whatsapp">
                <IconWhatsApp />
              </span>
              <span>WhatsApp: {profile.phone}</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="contact-icon contact-linkedin">
                <IconLinkedIn />
              </span>
              <span>LinkedIn: Mukesh Kushwaha</span>
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
              <span className="contact-icon contact-resume">
                <IconDownload />
              </span>
              <span>Download Resume</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
