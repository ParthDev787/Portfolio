/**
 * config.js
 * ─────────────────────────────────────────────────────────────
 * Single source of truth for all portfolio content.
 * Edit this file to update skills, projects, and hero copy.
 * No other JS file should hard-code display content.
 * ─────────────────────────────────────────────────────────────
 */

const CONFIG = Object.freeze({

  /* ── Hero ──────────────────────────────────────────────── */
  hero: {
    /** Roles cycled through the typing animation */
    typingRoles: [
      '.NET Developer',
      'Angular Engineer',
      'Full-Stack Dev',
      'SQL Specialist',
      'Problem Solver',
    ],
  },

  /* ── Skills ────────────────────────────────────────────── */
  skills: [
    { name: 'C#',         icon: '⚙️',  pct: 90, sub: 'OOP · LINQ · Async'         },
    { name: '.NET',       icon: '🔷',  pct: 88, sub: 'ASP.NET Core · Web API'      },
    { name: 'SQL',        icon: '🗄️',  pct: 85, sub: 'MSSQL · Stored Procs'        },
    { name: 'Angular',    icon: '🅰️',  pct: 82, sub: 'RxJS · NgRx · Angular 17+'  },
    { name: 'TypeScript', icon: '🔷',  pct: 83, sub: 'Generics · Decorators'       },
    { name: 'JavaScript', icon: '🌐',  pct: 80, sub: 'ES6+ · DOM · Fetch API'      },
    { name: 'HTML',       icon: '🏷️',  pct: 92, sub: 'Semantic · Accessibility'    },
    { name: 'CSS',        icon: '🎨',  pct: 88, sub: 'Flexbox · Grid · Animations' },
    { name: 'CSS',        icon: '🎨',  pct: 88, sub: 'Flexbox · Grid · Animations' },
  ],

  /* ── Projects ──────────────────────────────────────────── */
  projects: [
    {
      title:    'Hospital Management System',
      thumb:    '🏥',
      tags:     ['C#', '.NET', 'SQL', 'Angular'],
      eyebrow:  'HEALTHCARE',
      desc:     'A comprehensive HMS covering patient registration, doctor scheduling, appointment booking, billing, and pharmacy management. Designed for large-scale hospital environments with role-based access control.',
      features: [
        'Real-time appointment scheduling',
        'Role-based access (Admin, Doctor, Patient)',
        'Billing & invoice generation',
        'Pharmacy inventory tracking',
      ],
      stack:  [['C#','blue'], ['ASP.NET Core','purple'], ['Angular 17','blue'], ['SQL Server','green'], ['JWT Auth','purple']],
      role:   'Full-Stack Developer — designed database schema, REST API, and Angular frontend.',
      status: '🟢 Live in Production',
    },
    {
      title:    'E-Commerce Platform',
      thumb:    '🛒',
      tags:     ['.NET', 'Angular', 'SQL'],
      eyebrow:  'E-COMMERCE',
      desc:     'Feature-rich e-commerce solution with product catalog, cart management, order tracking, Stripe payment integration, and a real-time admin dashboard with sales analytics.',
      features: [
        'Stripe payment gateway',
        'Real-time order tracking',
        'Admin analytics dashboard',
        'Product variant management',
      ],
      stack:  [['.NET 8','purple'], ['Angular','blue'], ['SQL Server','green'], ['Stripe API','blue'], ['SignalR','purple']],
      role:   'Lead Developer — architecture, API design, and frontend implementation.',
      status: '🟢 Live',
    },
    {
      title:    'HR & Payroll System',
      thumb:    '👥',
      tags:     ['C#', 'SQL', 'TypeScript'],
      eyebrow:  'ENTERPRISE',
      desc:     'End-to-end HR platform handling employee onboarding, leave management, payroll calculation (with tax slabs), attendance tracking, and automated payslip generation.',
      features: [
        'Automated payroll & tax calculation',
        'Leave approval workflow',
        'Attendance via biometric API',
        'PDF payslip generation',
      ],
      stack:  [['C#','blue'], ['ASP.NET MVC','purple'], ['TypeScript','blue'], ['SQL Server','green'], ['ReportViewer','purple']],
      role:   'Backend Developer — business logic, stored procedures, payroll engine.',
      status: '🟡 In Development',
    },
    {
      title:    'Real-Time Chat App',
      thumb:    '💬',
      tags:     ['SignalR', 'Angular', 'TypeScript'],
      eyebrow:  'COMMUNICATION',
      desc:     'Scalable real-time messaging application with private/group chats, file sharing, read receipts, and push notifications — built with SignalR and Angular.',
      features: [
        'Real-time messaging (SignalR)',
        'Group & private channels',
        'File & image sharing',
        'Push notifications',
      ],
      stack:  [['SignalR','blue'], ['Angular','purple'], ['TypeScript','blue'], ['SQL Server','green'], ['.NET 7','purple']],
      role:   'Full-Stack — real-time hub design, Angular chat UI, auth flow.',
      status: '✅ Completed',
    },
    {
      title:    'Inventory Management',
      thumb:    '📦',
      tags:     ['C#', '.NET', 'SQL', 'JS'],
      eyebrow:  'INVENTORY',
      desc:     'Multi-warehouse inventory system with barcode scanning, stock level alerts, purchase order management, and detailed reporting dashboards.',
      features: [
        'Barcode scanner integration',
        'Low-stock alerts & email',
        'Purchase order workflow',
        'Multi-warehouse support',
      ],
      stack:  [['C#','blue'], ['MVC .NET','purple'], ['JavaScript','blue'], ['SQL Server','green'], ['Bootstrap','purple']],
      role:   'Full-Stack Developer',
      status: '✅ Completed',
    },
    {
      title:    'Portfolio & Blog CMS',
      thumb:    '✍️',
      tags:     ['Angular', 'CSS', 'HTML'],
      eyebrow:  'PERSONAL',
      desc:     'A headless CMS-powered portfolio and blog platform with markdown editor, category tagging, SEO optimisation, and a clean reader-friendly theme.',
      features: [
        'Markdown-based editor',
        'SEO meta management',
        'Tag & category system',
        'Responsive reading experience',
      ],
      stack:  [['Angular 17','blue'], ['TypeScript','purple'], ['REST API','blue'], ['SCSS','green'], ['Node.js','purple']],
      role:   'Frontend Developer — full Angular implementation.',
      status: '🟢 Live',
    },
  ],

});
