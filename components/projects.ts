export interface Project {
    id: number;
    name: string;
    languages: string[];
    frameworks: string[];
    long_des: string;
    short_des: string;
    year: number;
    repo: string | null;
    link: string;
    openSource: boolean;
  }
  
  export const projects: Array<Project> = [
    {
      id: 1,
      name: "Image Reader AI app",
      languages: ["Typescript", "Laravel"],
      frameworks: ["React", "typescript", "Tailwind", "Remix js"],
      short_des:
        "A generative AI image to text app that reads,extracta text from image and interprets  images using Google Gemini AI",
      long_des: `A prototype photo sharing web application that allows users to create accounts, add photo albums and associate the albums with photos. Users can edit their own photos but can share any photo on the platform. Uses a laravel backend to map albums,images to users.`,
      year: 2024,
      repo: "",
      link: "",
      openSource: false,
    },
    {
      id: 1.5,
      name: "Sky developers website",
      languages: ["Typescript", "react"],
      frameworks: ["React", "typescript", "Tailwind", "Remix js"],
      short_des:
        "A a website showcasing the projects and services offered by Sky developers, an engineering and construction company based in Kenya",
      long_des: `A minimalistic single page applicaton of Sky developers co, about section,vision & mission as well as  listing the services offered by Sky developers including its completed and ongoing projects.`,
      year: 2025,
      repo: "",
      link: "http://skydevelopers.co.ke",
      openSource: false,
    },
    {
      id: 1.4,
      name: "Savon web app ",
      languages: ["Typescript"],
      frameworks: ["React", "typescript", "Tailwind", "AI"],
      short_des:
        "A photo sharing web application that allows users to sign up accounts, create and share photo albums.",
      long_des: `An Artificial Intelligence web app powered by Google Gemini API to read and interpret images to text using multi modal models.
  
  The app can also compare upto 2 images and return the comparison in text format.`,
      year: 2024,
      repo: "https://github.com/kipyegonline/savon",
      link: "https://savon-one.vercel.app/",
      openSource: false,
    },
    {
      id: 1.3,
      name: "Greenhub  app",
      languages: ["Typescript"],
      frameworks: ["React", "typescript", "Tailwind", "AWS"],
      short_des:
        "A web application for sharing climate change statistics, insights and climate change based job listings",
      long_des: ` A next js web application that serves  as a repository for climate change related statistics files, interactive charts and sign in section for organisations and institutions to create accounts. It has a climate change jobs listing section that is powered by Elastic  search and jobs scrapped and served via AWS DynamoDB. The app is hosted on AWS amplify.`,
      year: 2024,
      repo: "",
      link: "https://staging.d1pm6odae4jkvy.amplifyapp.com/",
      openSource: false,
    },
    {
      id: 1.2,
      name: "Trifit web app",
      languages: ["Typescript"],
      frameworks: ["React", "typescript", "Tailwind", "AI"],
      short_des:
        " interactive official web application for Trifit, a sports and wellness company",
      long_des: `A responsive web application created using next js app router version to showcase the company profile, activities and an e-commerce shop platform for buying merchandise by Trifit.`,
      year: 2024,
      repo: "https://github.com/fourbic/trifit",
      link: "https://test.teamtrifit.co.ke",
      openSource: false,
    },
    {
      id: 1.1,
      name: "Fourbic company website",
      languages: ["Typescript"],
      frameworks: ["React", "typescript", "Tailwind", "AI"],
      short_des:
        "Interactive official Company website showcasing the work of Fourbic, a Kenyan based start up specializing data management and visualization",
      long_des: `A responsive web application created using next js app router version.`,
      year: 2024,
      repo: "https://github.com/fourbic/fourbic-website",
      link: "https://fourbic.com",
      openSource: false,
    },
  
    {
      id: 18,
      name: "Agroecological app",
      languages: ["Typescript"],
      frameworks: ["svelte", "svelte kit"],
      short_des:
        "Information site for agroecology; priniples,elements,examples and blogs.Agroecology focuses on sustainable use of environment for the mutual benefit of human beings, animals and soil.",
      long_des: `This app showcases agroecology, a field in agriculture that focuses on sustatinable use of environmemt for the mutual benefit of human beings,animals and soil.`,
      year: 2024,
      repo: "https://github.com/kipyegonline/agroecology-app",
      link: "https://agroecology-app.vercel.app/",
      openSource: false,
    },
    {
      id: 2,
      name: "Civisec web app ",
      languages: ["Typescript"],
      frameworks: ["React", "typescript", "next js", "Tailwind"],
      short_des:
        "An interactive cyber security tool designed to help organisations measure and surface vulnerabilities in cybersecurity approach.",
  
      long_des: `The web application is designed to help organisation gauge cybercurity vulnerabilities. The four part assesments will then provide a summary insights of the results and the recommendations on areas of identified improvement`,
      year: 2023,
      repo: null,
      link: "https://civisec.io ",
      openSource: false,
    },
    {
      id: 3,
      name: "Umzima app ",
      languages: ["Typescript"],
      frameworks: ["React", "typescript", "next js", "headless ui"],
      short_des:
        "A landing page for Umzima mobile app, a health recording and appointment app for small hospitals and clinic in Kenya track the medical recordds of their patients.",
  
      long_des: `The web application  basically has 2 functionalities, displaying information about Umzima mobile app and a fuctionality to allow user to sign up for early access of the mobile app.`,
      year: 2023,
      repo: null,
      link: "https://umzima.com ",
      openSource: false,
    },
    {
      id: 4,
      name: "Umzima Provider app ",
      languages: ["Typescript"],
      frameworks: [
        "Redwod js",
        "Ant design",
        "typescript",
        "GraphQL",
        "AWS cognito & DynamoDB",
      ],
      short_des:
        "A web application dashboard for hospital providers in Kenya to view patients appointments",
  
      long_des: `This web app uses AWS cognito to sign up and login users (hospital providers) to the backend portal to view patients who have booked appointments via Umzima app`,
      year: 2023,
      repo: null,
      link: "http://civisec.io ",
      openSource: false,
    },
    {
      id: 5,
      name: "Freeshow Worship",
      languages: ["Typescript"],
      frameworks: ["Svelte", "typescript"],
      short_des:
        "An open source software for presenting show and sermons in church, customizing it for my church in Nairobi Kenya.",
  
      long_des: `I forked and contributed to the application by improving the PWA part of it so that it can cache correctly. The website is built using svelte,Typescript and Electron`,
      year: 2023,
      repo: "https://github.com/kipyegonline/FreeShow-worship-tool",
      link: "",
      openSource: !false,
    },
    {
      id: 6,
      name: "Open MRS ",
      languages: ["Typescript"],
      frameworks: ["React", "Carbon UI", "typescript"],
      short_des:
        "An  open Medical Records System for hospitals and clinics to registers patients,search patients,dispaly patients lists book appointments and active visits for outpatient and inpatient list. We are customizing  it for small hospitals and clinics in Kenya",
  
      long_des: `The open MRS is a monorepo with 6 modules for patient management; registering patients, booking appointments,patient search,active visits,outpatient and patients list. I contributed and customized the patient registration module. `,
      year: 2023,
      repo: null,
      link: "",
      openSource: !false,
    },
    {
      id: 7,
      name: "Finwit App ",
      languages: ["Typescript"],
      frameworks: [
        "React",
        "Next js",
        "typescript",
        "Tailwind css",
        "Material UI",
        "Laravel",
      ],
      short_des:
        "A one-stop platform of financial products and  services listing web application. The application seeks to address the financial literacy gap among Kenyans seeking financial services on financial institutions in Kenya",
  
      long_des: `The web app has 6 services including: loans,bank accounts,investments,forex and property financeand  a section listing financial institutions (Banks & Saccos) in Kenya. I also developed financial calculators for calculating interests across this services `,
      year: 2022,
      repo: null,
      link: "https://finwit.co ",
      openSource: false,
    },
    {
      id: 8.5,
      name: "Mentor Sacco web app",
      languages: ["javascript"],
      frameworks: [
        "create-react-app",
        "react",
        "bootstrap",
        "typescript",
        "redux",
      ],
      short_des:
        "A web application for Mentor Sacco Society Limited, a Savings and credit financial institutions based in Muranga, Kenya. It helps thousands of people to open savings accounts virtually using their mobile phones, computers and apply for the the products and services offered by Mentor Sacco. The products and services include savings accounts,insurance,loan d and investments products",
  
      long_des: `It includes its website,oline membership application sections, a membership portal, products and service applications and listing section. Plugged in Google Analytics ,web performance and SEO. `,
      year: 2022,
      repo: null,
      link: "https://mentorsacco.co.ke ",
      openSource: false,
    },
    {
      id: 8,
      name: "Elections Tracking app",
      languages: ["Typescript"],
      frameworks: ["Next js", "Material UI", "typescript", "Tailwind", "react"],
      short_des:
        "I created this app to help Kenyans follow the  2022 presidential elections results in Kenya via visuals with data streaming from a REST API owned by Nation Media Group, Kenya's leading newspaper. The app relayed real time provisional elections results independetly tallied by the media house. The app received a huge traffic during the election period.",
  
      long_des: `The app used REST API to fetch realtime election updates from Nation Media Group API`,
      year: 2022,
      repo: "https://github.com/kipyegonline/electionsKe",
      link: "https://electionske.netlify.app/ ",
      openSource: false,
    },
    {
      id: 9,
      name: "Farmer Record Keeping App",
      languages: ["javascript"],
      frameworks: ["Next js", "Typescript", "react", "Material UI"],
      short_des:
        "I created this inventory web app to help farmers keep track of inputs and output their short term crops in the farm from planting to harvesting period. ",
  
      long_des: `The app  uses Laravel backend to store farmer records`,
      year: 2022,
      repo: "https://github.com/kipyegonline/farmer-records",
      link: "",
      openSource: false,
    },
    {
      id: 10,
      name: "Blood pressure tracking app",
      languages: ["javascript"],
      frameworks: [
        "React",
        "react",
        "redux",
        "D3 js",
        "redux",
        "Laravel",
        "javascript",
      ],
      short_des:
        "A blood pressure record keeping app for patients living with hypertension to record their daily BP readings",
  
      long_des: `An interactive visualization web app where BP patients can add their daily BP readings , sent to database and the doctor can interpret the readings  on interactive charts.`,
      year: 2021,
      repo: "https://github.com/kipyegonline/bp-app ",
      link: "",
      openSource: false,
    },
    {
      id: 11,
      name: "Corona Virus tracking App ",
      languages: ["javascript"],
      frameworks: ["react", "redux", "D3 js", "redux", "Laravel", "javascript"],
      short_des:
        "An interactive data visualization  react app for tracking the corona virus cases  in Kenya, Africa and globally. ",
  
      long_des: `It uses  REST API and AJAX  to fetch data via fetch API from John Hopkin University database`,
      year: 2020,
      repo: "https://bitbucket.org/kipyegonline/corona-virus-visualisation/src/react/",
      link: "https://corona-kenya.netlify.app/",
      openSource: false,
    },
    {
      id: 12,
      name: "Eastern College Website development  ",
      languages: ["javascript"],
      frameworks: ["React", "javascript", "Material UI", "Gatsby", "javascript"],
      short_des:
        "A gatsby js website redesign and portal management for Eastern College, Somalia.  ",
  
      long_des: `Decoupling the front-end and the backe-end of an MVC website in order to manage scalability.`,
      year: 2021,
      repo: "https://github.com/kipyegonline/easterncollege",
      link: "https://easterncollege.netlify.app/",
      openSource: false,
    },
    {
      id: 13,
      name: "Church web app  ",
      languages: ["javascript"],
      frameworks: ["React", "javascript", "Material UI", "Gatsby"],
      short_des:
        "A   church website for lakeview AGC Nakuru, The website a one-stop platform for church-going residents of Nakuru to access information about the church events, services and other pertinent information relating to the church activities.  ",
  
      long_des: `The app has a backend for adding events, sermons and church based sessions such as prayer and fasting weeks. The backend is based on PHP and MySQL where these events and sessions are persisted`,
      year: 2020,
      repo: " https://github.com/kipyegonline/lakeview-gatsby",
      link: "http://lakeviewagc.net",
      openSource: false,
    },
    {
      id: 14,
      name: "Accidents visualization app  ",
      languages: ["javascript"],
      frameworks: ["React", "javascript", "Material UI", "Gatsby"],
      short_des:
        "A visualization app showing road accidents in Kenya, according accident statistics by the National Transport and Safety Authority.The application targets data analysts seeking to analyse the transport systems in Kenya  ",
  
      long_des: `The app uses D3 Js charting library to display interactive charts for accidents that occor across the road transpor system. The monthly data is downloaded from NTSA website `,
      year: 2020,
      repo: " https://github.com/kipyegonline/accidentsStatsy",
      link: "",
      openSource: false,
    },
    {
      id: 15,
      name: "A correspondence management  react app  ",
      languages: ["javascript"],
      frameworks: ["React", "javascript", "Material UI", "Next Js", "Laravel"],
      short_des:
        "This is a RESTFUL web  application for tracking communications (customer care, dispatch,documents ) within an organisation.  ",
  
      long_des: `The app receives dispatch or documents entering an organisation, assigns the department or person responsible  for the dispatch then ensures the receiver accepts receipt. `,
      year: 2019,
      repo: "https://commsapp.netlify.app/",
      link: "https://github.com/kipyegonline/commsApp",
      openSource: false,
    },
    {
      id: 16,
      name: "Membership database react  application ",
      languages: ["javascript"],
      frameworks: [
        "React ",
        "react",
        "redux",
        "Fetch api",
        "Jquery ajax",
        "PHP",
        "javascript",
        "mysql",
      ],
      short_des:
        "An AJAX driven  utility web application for performing  CRUD of over 2000 members of professional body in Kenya  ",
  
      long_des: `The app allows the secretariat of the body to access a list of their members, create and update the member records. The app has  a birthday picker for checking membership birthdays  and interactive visuals. `,
      year: 2019,
      repo: "https://bitbucket.org/kipyegonline/prsk-portal",
      link: "",
      openSource: false,
    },
    {
      id: 17,
      name: "Deforestation app ",
      languages: ["javascript"],
      frameworks: [
        "React",
        "react redux",
        "Fetch api",
        "Jquery ajax",
        "PHP",
        "MySQL",
        "javascript",
      ],
      short_des:
        "An interactive map app showing deforestation in Kenya over the period between 2012 and 2018 ",
  
      long_des: `The app fetches data from a REST API then displays them on an interactive map of Kenya. `,
      year: 2019,
      repo: "https://github.com/kipyegonline/ke_deforestation",
      link: "",
      openSource: false,
    },
  ];
  
  