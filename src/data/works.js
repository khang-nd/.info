import { Logo, Icon } from "../assets";

export default {
  Careers: [
    {
      title: "Bosch",
      logo: Logo.Bosch,
      timeline: "Aug 2019 - Present",
      description: `A multinational technology company based in Germany,
        whose major business sector is mobility`,
      remark: `A company I have been working for after having finished my service for the country.
        I was able to learn a lot about processes, new techs and best practices, and apply to my daily work.
        And prominently, I could utilize my English in daily communications and formal meetings.`,
      activities: [
        "Develop tools on top of the $1 to support an internal business unit",
        "Follow the Scrum framework's principles to engage in the software development process",
        "Define, apply and continously improve the software development process to adapt and overcome challenges",
        "Actively review and improve individual skills competency over the time",
        "Tools used: Visual Studio Code, IBM ELM tools, Balsamiq Mockups, MS Office, Skype",
      ],
      techs: "HTML, CSS, Sass, JS, jQuery, ReactJS, $2, $3, $4, $5, $6",
      links: {
        $1: ["IBM ELM toolsuite", "https://jazz.net/products/elm/"],
        $2: ["DXL", "https://en.wikipedia.org/wiki/DOORS_Extension_Language"],
        $3: ["OSLC", "https://open-services.net/"],
        $4: ["OpenSocial", "https://en.wikipedia.org/wiki/OpenSocial"],
        $5: ["ag-Grid", "https://www.ag-grid.com/"],
        $6: [
          "vis-network",
          "https://visjs.github.io/vis-network/docs/network/",
        ],
      },
    },
    {
      title: "Cathay Life",
      logo: Logo.Cathay,
      timeline: "Feb 2017 - Apr 2017",
      description: "A Taiwanese life insurance company",
      remark: `This is the first company I joined after my graduation.
        I was able to experience a professional working environment and learned from my seniors.`,
      activities: [
        "Develop software utilities to support internal users",
        "Engage in a robust, long-standing system",
        "Tools used: WebSphere, ClearCase",
      ],
      techs: "HTML, Bootstrap, JS, Java, JSP, XML, DB2 JDBC",
    },
  ],
  "Side Works": [
    {
      title: "Fandom",
      logo: Logo.Fandom,
      timeline: "2016 - 2018",
      description: `A company providing wiki hosting and domain service for users
      and offering content created by users`,
      remark: `Fandom (formerly Wikia) is the platform that I started as a volunteering helper during my time at college.
        I was able to engage in my very first international environment,
        where I could communicate with a lot of people from various countries.`,
      activities: [
        "Monitor $1's activities",
        "Provide user support services",
        "Content translations (blogs, help pages, articles)",
        "Tools used: Slack, Jira, Crowdin, Google Docs",
      ],
      links: {
        $1: [
          "Vietnamese Community Central",
          "https://community.fandom.com/vi/wiki/Trang_Ch%C3%ADnh",
        ],
      },
    },
    {
      title: "Fandom Developers",
      logo: Logo.FandomDev,
      timeline: "2016 - present",
      description: "A community of Fandom volunteering developers",
      remark: `This is more or less my first code playground when I started to love front-end development.
      As a part of this community, I could learn and collaborate with the others to improve my coding skill.
      My favorite works: $2, $3.`,
      activities: [
        "Develop extensions on top of the $1 platform (the core of every Fandom wiki)",
        "Cross-review, improve existing scripts",
        "Tool used: Fandom's code editor",
      ],
      techs: "HTML, CSS, JS, jQuery, $4",
      links: {
        $1: ["MediaWiki", "https://www.mediawiki.org/wiki/MediaWiki"],
        $2: ["ArticleRating", "https://dev.fandom.com/wiki/ArticleRating"],
        $3: ["FloatingToc", "https://dev.fandom.com/wiki/FloatingToc"],
        $4: [
          "MediaWiki API",
          "https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api",
        ],
      },
    },
    {
      title: "Win7 Simu",
      logo: Logo.Win7,
      timeline: "2019 - present",
      description: "A simulator of Windows 7 on mobile",
      remark: `This is the biggest side project that I have started with a lot of time and effort invested.
      At first, it was simply made for me to apply things I have learned, something I would have fun building,
      but apparently it has some unforeseen potential, as it is surprisingly well-received
      and gets a lot of positive feedback and encouragement to advance it futher.
      Here is a link to its $1.`,
      activities: [
        "Simulate the functionalities and features of Windows 7 through web technologies",
        "Integrate with Android's JS Interface, build and deploy to app store",
        "Actively engage in user's experience and collect feedback",
        "Tools used: Visual Studio Code, Android Studio, Crowdin",
      ],
      techs:
        "HTML, Sass, JS, VueJS, Vuex, Vue-i18n, axios, Firebase, FabricJS, Java",
      links: {
        $1: [
          "app page",
          "https://play.google.com/store/apps/details?id=com.visnalize.win7simu",
        ],
      },
    },
    {
      title: "Winport",
      logo: Icon("about"),
      timeline: "2020",
      description: "A window-styled, multi-theming portfolio",
      remark: `What you are seeing right now is my first website portfolio.
      The core design is inspired by Microsoft's Windows, with icons provided by $1.
      Feel free to check out the source code I made publicly available on $2,
      and do not hesitate to put a star if you like it.`,
      techs: "HTML, Sass, JS, ReactJS, React Router",
      links: {
        $1: ["Freepik", "https://www.freepik.com/"],
        $2: ["Github", "https://github.com/khang-nd/khang-nd.github.io"],
      },
    },
    {
      title: "Lucky Draw",
      logo: "",
      timeline: "2020",
      description: "A web tool for organizing lucky drawing events",
      remark: `A side project in collaboration with my colleague,
      this tool was built to support a customer organizing his special event.`,
      techs: "HTML, Bootstrap, ReactJS, React-i18n",
    },
    {
      title: "Wikiu",
      logo: "",
      timeline: "2020",
      description: "A utility collection for Fandom wikis",
      remark: `Another side project in an attempt to apply what I have learned.
      The idea is to build a collection of utilities from what the $1 could offer,
      using a more advanced JS library to ease development and lift certain limitations of jQuery.
      It is still an in-progress project, but feel free to check out the source code on $2.`,
      techs: "HTML, CSS, JS, ReactJS, React Router, MediaWiki API",
      links: {
        $1: [
          "MediaWiki API",
          "https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api",
        ],
        $2: [
          "Github",
          "https://github.com/khang-nd/wikiu/tree/master/src/services",
        ],
      },
    },
  ],
};
