export interface Screencap {
  image: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  type: string;
  icon: string;
  description: string;
  url: string | null;
  screencaps: Screencap[];
}

export const PROJECTS: Project[] = [
  {
    id: "tma",
    name: "TMA",
    type: "Frontend",
    icon: "/images/tma.svg",
    description:
      "TMA was incorporated through institutionalisation of the Treasury Markets Forum of HK.",
    url: "https://benchmark.tma.org.hk/",
    screencaps: [
      {
        image: "/images/tma1.svg",
        description:
          "Seminar page list out all the course, exam, seminar that the member can join.",
      },
      {
        image: "/images/tma2.svg",
        description:
          "Registration page for the member to register the course, exam, seminar and pay the fee as well.",
      },
      {
        image: "/images/tma3.svg",
        description: "Home Page of the TMA website, with the latest news and event.",
      },
    ],
  },
  {
    id: "dse00-exam",
    name: "DSE00 Exam",
    type: "Full Stack",
    icon: "/images/projects/dse00-exam/icon.png",
    description: "A question bank for students to prepare public exam.",
    url: "https://exam.dse00.com",
    screencaps: [
      {
        image: "/images/projects/dse00-exam/1.png",
        description:
          "This is a free service for students to manage their study and revision progress.",
      },
      {
        image: "/images/projects/dse00-exam/6.png",
        description: "An AI Chatbot is provided to help student to study.",
      },
      {
        image: "/images/projects/dse00-exam/2.png",
        description: "The app provide exam materials with different topic and difficulty.",
      },
      {
        image: "/images/projects/dse00-exam/3.png",
        description: "It allows the submission and discussion of the answer.",
      },
      {
        image: "/images/projects/dse00-exam/4.png",
        description: "User can manage the answer record and the progress of study.",
      },
      {
        image: "/images/projects/dse00-exam/5.png",
        description: "Admin can monitor the usage of the app in a custom CMS system.",
      },
    ],
  },
  {
    id: "kdp-eshop",
    name: "KDP eSHOP",
    type: "Frontend",
    icon: "/images/projects/kdpeshop/logo_ic5m1y.svg",
    description:
      "eShop to allow customer to buy and bid the goods by using K Dollar Point.",
    url: null,
    screencaps: [
      {
        image: "/images/projects/kdpeshop/landing_rq9cl5.png",
        description: "User land the page through a native mobile app with token passed.",
      },
      {
        image: "/images/projects/kdpeshop/detail_uyukz9.png",
        description:
          "Each user has their own tier and only products of the tier are shown to them.",
      },
      {
        image: "/images/projects/kdpeshop/place-bid_kq8itt.png",
        description: "User can place bid for the product they want to buy.",
      },
      {
        image: "/images/projects/kdpeshop/success_kripjk.jpg",
        description:
          "User can check the status of their bid and the product they have bought.",
      },
    ],
  },
  {
    id: "tutor",
    name: "TUTOR",
    type: "Full Stack",
    icon: "/images/projects/dse00/dse00-main_hqnhuh.png",
    description: "TUTOR is a tutorial platform aims to match students with tutors for free.",
    url: "https://www.dse00.com",
    screencaps: [
      {
        image: "/images/projects/tutor/tutor-1_wya69e.png",
        description:
          "Registered user post their tutorial request and other user can apply for it.",
      },
      {
        image: "/images/projects/tutor/tutor-2_pgevrq.png",
        description:
          "Students can have deeper look on tutor's profile before decision is made.",
      },
      {
        image: "/images/projects/tutor/tutor-3_p3zyhx.png",
        description: "Multiple search criteria and filter.",
      },
      {
        image: "/images/projects/tutor/tutor-4_iukxsg.png",
        description: "Skeleton loading, responsive and user friendly design.",
      },
    ],
  },
  {
    id: "togl",
    name: "TOGL",
    type: "Frontend",
    icon: "/images/projects/togl/togl-main_dlgmup.svg",
    description:
      "It is a government system offer organization to book venue for their events.",
    url: "https://streetcounterpass.landsd.gov.hk/",
    screencaps: [
      {
        image: "/images/projects/togl/togl-1_uuhfji.png",
        description: "The venue booking system for organization to hold their events.",
      },
      {
        image: "/images/projects/togl/togl-2_izqkl9.png",
        description: "The government admin can manage the venue and the booking.",
      },
      {
        image: "/images/projects/togl/togl-3_kthtgo.png",
        description: "The applicant can check the status of their application.",
      },
      {
        image: "/images/projects/togl/togl-4_en1idr.png",
        description: "The frontend of the system is built with VueJS.",
      },
    ],
  },
  {
    id: "kdp-portal",
    name: "K DOLLAR Portal",
    type: "Backend",
    icon: "/images/projects/kdppp/kdppp-main_tix96z.png",
    description:
      "K Dollar Control Panel is a system for administrative staff to manage the K Dollar Point.",
    url: "https://kdpppweb.sampras.cn",
    screencaps: [
      {
        image: "/images/projects/kdppp/kdppp-1_cnigps.png",
        description:
          "The K Dollar staff administrate the K Dollar Point and users via the system.",
      },
      {
        image: "/images/projects/kdppp/kdppp-2_v8rrvu.png",
        description: "API is built with Laravel with swagger as API documentation.",
      },
    ],
  },
  {
    id: "cims2",
    name: "CIMS2",
    type: "Full Stack",
    icon: "/images/projects/cims2/cims2-main_q7txjp.png",
    description:
      "CIMS2 is a system for doctors to manage their patients and their medical records.",
    url: null,
    screencaps: [
      {
        image: "/images/projects/cims2/cims-1_cgd0sv.png",
        description: "CIMS2 allow clinic staff to manage the patient's data.",
      },
      {
        image: "/images/projects/cims2/cims-2_wlw7fa.png",
        description:
          "The system manage for appointment making, health assessment, registration...",
      },
    ],
  },
  {
    id: "onememo",
    name: "ONEMEMO",
    type: "Full Stack",
    icon: "/images/projects/onememo/icon_letfs8.png",
    description: "A note taking app for user to take note and share with others.",
    url: "https://onememo.vercel.app",
    screencaps: [
      {
        image: "/images/projects/onememo/onememo-1_w2fcpn.png",
        description: "A PWA Web, an app-liked website.",
      },
      {
        image: "/images/projects/onememo/onememo-2.png",
        description: "Jot down the pending task and mark it as done.",
      },
      {
        image: "/images/projects/onememo/onememo-3_kyiz4t.png",
        description: "Customize the theme of the app.",
      },
    ],
  },
];
