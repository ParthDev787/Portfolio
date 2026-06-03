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
  ],

  /* ── Projects ──────────────────────────────────────────── */
  projects: [
    {
      title:    'Diamond Audit Book Management System',
      thumb:    '💎',
      tags:     ['C#', '.NET MVC', 'SQL Server', 'JavaScript'],
      eyebrow:  'DIAMOND INDUSTRY',
      desc:     'A comprehensive Diamond Audit Book Management System designed for diamond trading and inventory operations. The system manages diamond stock, employee assignments, pricing calculations, company records, and role-based permissions. It provides real-time tracking of diamond inventory, employee performance, and audit records through an interactive dashboard.',
      features: [
        'Role-based access control (Admin, Super Admin, User)',
        'Diamond stock management and inventory tracking',
        'Employee assignment and performance monitoring',
        'Diamond pricing based on piece and weight calculations',
        'Dashboard with real-time statistics and analytics',
        'Department and menu permission management',
        'Employee salary and audit tracking',
        'Backup and system administration tools',
      ],
      stack: [
        ['C#','blue'],
        ['ASP.NET MVC','purple'],
        ['SQL Server','green'],
        ['JavaScript','yellow'],
        ['jQuery','blue'],
        ['Bootstrap','purple'],
        ['Role-Based Security','green']
      ],
      role:   'Full-Stack Developer — designed database architecture, developed inventory management modules, implemented role-based authorization, built dashboard analytics, and created employee assignment and stock tracking features.',
      status: '🟢 Completed Project',
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
      stack:  [['SignalR','blue'], ['Angular','purple'], ['TypeScript','blue'], ['SQL Server','green'], ['.NET 9','purple']],
      role:   'Full-Stack — real-time hub design, Angular chat UI, auth flow.',
      status: '🚧 Work In Progress',
    }
  ],

});
