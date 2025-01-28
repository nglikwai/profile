import { url } from "inspector";
import TMALogo from "public/images/tma.svg";
import TMA1 from "public/images/tma1.svg";
import TMA2 from "public/images/tma2.svg";
import TMA3 from "public/images/tma3.svg";

export type ProjectDataType = (typeof projectData.en)[2];

export const projectData = {
  en: [
    {
      projectName: "TMA",
      type: "Frontend",
      mainImage: TMALogo,
      height: "130px",

      projectDescription:
        "TMA was incorporated through institutionalisation of the Treasury Markets Forum of HK",
      details: {
        url: "https://benchmark.tma.org.hk/",
        screencaps: [
          {
            image: TMA1,
            description:
              "Seminar page list out all the course, exam, seminar that the member can join",
          },
          {
            image: TMA2,
            description:
              "Registration page for the member to register the course, exam, seminar and pay the fee as well",
          },
          {
            image: TMA3,
            description:
              "Home Page of the TMA website, with the latest news and event",
          },
        ],
      },
    },
    {
      projectName: "DSE00 exam",
      type: "Full Stack",
      mainImage: "/images/projects/dse00-exam/icon.png",
      isCircleIcon: true,
      projectDescription:
        "An question bank for student to prepare public exam.",

      details: {
        url: "https://exam.dse00.com",
        screencaps: [
          {
            image: "/images/projects/dse00-exam/1.png",
            description:
              "This is a free service for students to manage their study and reviewion progress.",
          },
          {
            image: "/images/projects/dse00-exam/6.png",
            description: "An AI Chatbot is provided to help student to study.",
          },
          {
            image: "/images/projects/dse00-exam/2.png",
            description:
              "The app provide exam materials with different topic and difficulty.",
          },
          {
            image: "/images/projects/dse00-exam/3.png",
            description:
              "It allows the submission and discussion of the answer.",
          },
          {
            image: "/images/projects/dse00-exam/4.png",
            description:
              "User can manage the answer record and the progress of study.",
          },
          {
            image: "/images/projects/dse00-exam/5.png",
            description:
              "Admin can monitor the usage of the app in a customer CMS system.",
          },
        ],
      },
    },
    {
      projectName: "KDP eSHOP",
      type: "Frontend",
      mainImage:
        "https://res.cloudinary.com/nglikwai/image/upload/v1707623436/project/kdpeshop/logo_ic5m1y.svg",
      projectDescription:
        "eShop to allow customer to buy and bid the goods by using K Dollar Point.",
      details: {
        screencaps: [
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1707623431/project/kdpeshop/landing_rq9cl5.png",
            description:
              "user land the page through a native mobile app with token passed",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1707623417/project/kdpeshop/detail_uyukz9.png",
            description:
              "Each user has theis own tier and only products of the tier are shown to them.",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1707623439/project/kdpeshop/place-bid_kq8itt.png",
            description: "User can place bid for the product they want to buy.",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1707623441/project/kdpeshop/success_kripjk.jpg",
            description:
              "User can check the status of their bid and the product they have bought.",
          },
        ],
      },
    },
    {
      projectName: "TUTOR",
      type: "Full Stack",
      mainImage:
        "https://res.cloudinary.com/nglikwai/image/upload/v1689335184/project/dse00/dse00-main_hqnhuh.png",
      projectDescription:
        "TUTOR is a tutorial plateform aims to match students with tutors by free.",
      details: {
        url: "https://www.dse00.com",
        screencaps: [
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689335185/project/tutor/tutor-1_wya69e.png",
            description:
              "Registered user post their tutorial request and other user can apply for it.",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689335184/project/tutor/tutor-2_pgevrq.png",
            description:
              "Students can have deeper look on tutor's profile before decision is made.",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689335184/project/tutor/tutor-3_p3zyhx.png",
            description: "Multiple search criteria and filter",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689335184/project/tutor/tutor-4_iukxsg.png",
            description:
              "Skeleton loading, responsive and user friendly design",
          },
        ],
      },
    },
    {
      projectName: "TOGL",
      type: "Frontend",
      mainImage:
        "https://res.cloudinary.com/nglikwai/image/upload/v1689335183/project/togl/togl-main_dlgmup.svg",
      projectDescription:
        "It is a government system offer organization to book venue for their events.",
      details: {
        url: "https://streetcounterpass.landsd.gov.hk/",
        screencaps: [
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689335188/project/togl/togl-1_uuhfji.png",
            description:
              "The venue booking system for organization to hold their events.",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689335185/project/togl/togl-2_izqkl9.png",
            description:
              "The government admin can manage the venue and the booking.",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689335185/project/togl/togl-3_kthtgo.png",
            description:
              "The applicant can check the status of their application.",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689335183/project/togl/togl-4_en1idr.png",
            description: "The frondend of the system is built with VueJS.",
          },
        ],
      },
    },
    {
      projectName: "K DOLLAR Portal",
      type: "Backend",
      mainImage:
        "https://res.cloudinary.com/nglikwai/image/upload/v1689335183/project/kdppp/kdppp-main_tix96z.png",
      height: "130px",
      projectDescription:
        "K Dollar Control Padal is a system for administrative staff to manage the K Dollar Point.",
      details: {
        url: "https://kdpppweb.sampras.cn",
        screencaps: [
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689335183/project/kdppp/kdppp-1_cnigps.png",
            description:
              "The K Dollar Staff administrate the K Dollar Point and users via the system.",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689335183/project/kdppp/kdppp-2_v8rrvu.png",
            description:
              "API is built with Laravel with swagger as API documentation.",
          },
        ],
      },
    },
    {
      projectName: "CIMS2",
      type: "Full Stack",
      mainImage:
        "https://res.cloudinary.com/nglikwai/image/upload/v1689335183/project/cims2/cims2-main_q7txjp.png",
      height: "130px",
      projectDescription:
        "CIMS2 is a system for doctors to manage their patients and their medical records.",
      details: {
        screencaps: [
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689348633/project/cims2/cims-1_cgd0sv.png",
            description:
              "CIMS2 allow clinic staff to manage the patient's data",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689348633/project/cims2/cims-2_wlw7fa.png",
            description:
              "The system manage for appointment making, health assessment, registration...",
          },
        ],
      },
    },
    {
      projectName: "ONEMEMO",
      type: "Full Stack",
      mainImage:
        "https://res.cloudinary.com/nglikwai/image/upload/v1689354287/project/onememo/icon_letfs8.png",
      projectDescription:
        "A note taking app for user to take note and share with others.",
      details: {
        url: "https://onememo.vercel.app",
        screencaps: [
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689356892/project/onememo/onememo-1_w2fcpn.png",
            description: "A PWA Web, a app-liked website.",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689355959/project/onememo/onememo-2.png",
            description: "Jot down the pending task and mark it as done.",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689356998/project/onememo/onememo-3_kyiz4t.png",
            description: "Customize the theme of the app.",
          },
        ],
      },
    },
  ],
  zh: [
    {
      projectName: "TMA",
      type: "前端",
      mainImage: TMALogo,
      height: "130px",

      projectDescription: "TMA 透過香港財資市場論壇的製度化而成立",
      details: {
        url: "https://benchmark.tma.org.hk/",
        screencaps: [
          {
            image: TMA1,
            description:
              "研討會頁面列出了會員可以參加的所有課程、 考試、研討會",
          },
          {
            image: TMA2,
            description: "用戶可以註冊課程、 考試、 研討會並支付費用",
          },
          {
            image: TMA3,
            description: "TMA 網站的主頁，顯示最新消息和活動",
          },
        ],
      },
    },
    {
      projectName: "DSE00 exam",
      type: "前後端",
      mainImage: "/images/projects/dse00-exam/icon.png",
      isCircleIcon: true,
      projectDescription: "一個供學生準備公開考試的題庫。",
      details: {
        url: "https://exam.dse00.com",
        screencaps: [
          {
            image: "/images/projects/dse00-exam/1.png",
            description: "這是一個供學生管理他們的學習和復習進度的免費服務。",
          },
          {
            image: "/images/projects/dse00-exam/6.png",
            description: "提供 AI 聊天機器人幫助學生學習。",
          },
          {
            image: "/images/projects/dse00-exam/2.png",
            description: "應用程序提供不同主題和難度的考試材料。",
          },
          {
            image: "/images/projects/dse00-exam/3.png",
            description: "允許提交和討論答案。",
          },
          {
            image: "/images/projects/dse00-exam/4.png",
            description: "用戶可以管理答案記錄和學習進度。",
          },
          {
            image: "/images/projects/dse00-exam/5.png",
            description: "管理員可以在客戶 CMS 系統中監控應用程序的使用情況。",
          },
        ],
      },
    },
    {
      projectName: "KDP eSHOP",
      type: "前端",
      mainImage:
        "https://res.cloudinary.com/nglikwai/image/upload/v1707623436/project/kdpeshop/logo_ic5m1y.svg",
      projectDescription:
        "TUTOR is a tutorial plateform aims to match students with tutors by free.",
      details: {
        screencaps: [
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1707623431/project/kdpeshop/landing_rq9cl5.png",
            description:
              "eShop to allow customer to buy and bid the goods by using K Dollar Point.",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1707623417/project/kdpeshop/detail_uyukz9.png",
            description:
              "Each user has theis own tier and only products of the tier are shown to them.",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1707623439/project/kdpeshop/place-bid_kq8itt.png",
            description: "User can place bid for the product they want to buy.",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1707623441/project/kdpeshop/success_kripjk.jpg",
            description:
              "User can check the status of their bid and the product they have bought.",
          },
        ],
      },
    },
    {
      projectName: "導師",
      type: "前後端",
      mainImage:
        "https://res.cloudinary.com/nglikwai/image/upload/v1689335184/project/dse00/dse00-main_hqnhuh.png",
      projectDescription: "TUTOR是一個輔導平台，旨在為學生免費匹配導師。",
      details: {
        url: "https://www.dse00.com",
        screencaps: [
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689335185/project/tutor/tutor-1_wya69e.png",
            description: "註冊用戶發布教程請求，其他用戶可以申請。",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689335184/project/tutor/tutor-2_pgevrq.png",
            description: "學生在做出決定之前可以更深入地了解導師的個人資料。",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689335184/project/tutor/tutor-3_p3zyhx.png",
            description: "多個搜索條件和過濾器",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689335184/project/tutor/tutor-4_iukxsg.png",
            description: "骨架加載、響應式且用戶友好的設計",
          },
        ],
      },
    },
    {
      projectName: "TOGL",
      type: "前端",
      mainImage:
        "https://res.cloudinary.com/nglikwai/image/upload/v1689335183/project/togl/togl-main_dlgmup.svg",
      projectDescription: "這是一個政府系統提供組織為其活動預訂場地。",
      details: {
        url: "https://streetcounterpass.landsd.gov.hk/",
        screencaps: [
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689335188/project/togl/togl-1_uuhfji.png",
            description: "組織舉辦活動的場地預訂系統。",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689335185/project/togl/togl-2_izqkl9.png",
            description: "jupas 數據系統允許學生與其他學生分享他們的入學分數。",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689335185/project/togl/togl-3_kthtgo.png",
            description: "jupas 數據系統允許學生與其他學生分享他們的入學分數。",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689335183/project/togl/togl-4_en1idr.png",
            description: "系統的前端是用 VueJS 構建的。",
          },
        ],
      },
    },
    {
      projectName: "K DOLLAR Portal",
      type: "後端",
      mainImage:
        "https://res.cloudinary.com/nglikwai/image/upload/v1689335183/project/kdppp/kdppp-main_tix96z.png",
      height: "130px",
      projectDescription:
        "K Dollar Control Padal是行政人員管理K Dollar Point的系統。",
      details: {
        url: "https://kdpppweb.sampras.cn",
        screencaps: [
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689335183/project/kdppp/kdppp-1_cnigps.png",
            description: "K Dollar工作人員通過系統管理K Dollar積分和用戶。",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689335183/project/kdppp/kdppp-2_v8rrvu.png",
            description:
              "API 是使用 Laravel 構建的，並以 swagger 作為 API 文檔。",
          },
        ],
      },
    },
    {
      projectName: "CIMS2",
      type: "前後端",
      mainImage:
        "https://res.cloudinary.com/nglikwai/image/upload/v1689335183/project/cims2/cims2-main_q7txjp.png",
      height: "130px",
      projectDescription: "CIMS2 是醫生管理患者及其醫療記錄的系統。",
      details: {
        screencaps: [
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689348633/project/cims2/cims-1_cgd0sv.png",
            description: "CIMS2 允許診所工作人員管理患者的數據",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689348633/project/cims2/cims-2_wlw7fa.png",
            description: "系統管理預約、健康評估、掛號……",
          },
        ],
      },
    },
    {
      projectName: "ONEMEMO",
      type: "前後端",
      mainImage:
        "https://res.cloudinary.com/nglikwai/image/upload/v1689354287/project/onememo/icon_letfs8.png",
      projectDescription: "一個記筆記應用程序，供用戶記筆記並與他人分享。",
      details: {
        url: "https://onememo.vercel.app",
        screencaps: [
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689356892/project/onememo/onememo-1_w2fcpn.png",
            description: "PWA Web，一個類似應用程序的網站。",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689355959/project/onememo/onememo-2.png",
            description: "記下待處理的任務並將其標記為已完成。",
          },
          {
            image:
              "https://res.cloudinary.com/nglikwai/image/upload/v1689356998/project/onememo/onememo-3_kyiz4t.png",
            description: "自定義應用程序的主題。",
          },
        ],
      },
    },
  ],
};
