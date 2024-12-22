import avatar from "../assets/png/avatar.png";
import {
  DashboardIcon,
  EventIcon,
  HomeIcon,
  MeetingIcon,
  NetworkingIcon,
  PeopleIcon,
  SettingsIcon,
} from "../components/Hcl_Icons";
export const navItems = [
  {
    name: "Home",
    href: "/",
    Icon: HomeIcon,
  },
  {
    name: "Album",
    href: "/album",
    Icon: DashboardIcon,
  },
  {
    name: "Networking",
    href: "/networking",
    Icon: NetworkingIcon,
  },
  {
    name: "Profile",
    href: "/profile",
    Icon: PeopleIcon,
  },
  {
    name: "Settings",
    href: "/settings",
    Icon: SettingsIcon,
  },
];
export const events_home = [
  {
    id: 1,
    title: "Abu Dhabi Grand Prix",
    photo: "/images/dubai_white_noise.png",
    date: "December 5th, 2024",
  },
  {
    id: 2,
    title: "Austin Grand Prix",
    photo: "/images/austin.jpg",
    date: "October 20th, 2024",
  },
  {
    id: 3,
    title: "Monza Grand Prix",
    photo: "/images/jonathan.jpg",
    date: "October 22th, 2024",
  },
];
export const notificationApi = [
  {
    timestamp: "today",
    notifications: [
      {
        id: 1,
        Icon: EventIcon,
        title: `Your event
          <bold>Abu Dhabi Grand Prix</bold>
          starts in 1 week`,
      },
      {
        id: 2,
        Icon: MeetingIcon,
        title: `Your meeting with<bold>David Williams</bold>has been booked`,
      },
    ],
  },
  {
    timestamp: "yesterday",
    notifications: [
      {
        id: 1,
        photo: "/images/notify-man.webp",
        title: `<bold>Gaston Goyret</bold>wants to join your network`,
      },
    ],
  },
  {
    timestamp: "Last week",
    notifications: [
      {
        id: 1,
        Icon: EventIcon,
        title: `Your event
          <bold>Abu Dhabi Grand Prix</bold>
          starts in 1 week`,
      },
    ],
  },
  {
    timestamp: "Previous",
    notifications: [
      {
        id: 1,
        Icon: EventIcon,
        title: `Your event
          <bold>Abu Dhabi Grand Prix</bold>
          starts in 1 week`,
      },
    ],
  },
];
export const policies = [
  {
    id: 1,
    ques: "Who are We?",
    answer:
      'We are HCLSoftware (a division of HCL Technologies Ltd) and HCLSoftware’s subsidiaries and affiliated entities (hereinafter “HCLSoftware,” "We," “Our,” or "Us"). HCLSoftware is the Data Controller of your Personal Data as described in this Privacy Statement, unless otherwise specified. HCLSoftware is committed to protecting your Personal Data and respecting your privacy and your rights, and this statement is intended to provide you with information about how your Personal Data is processed.',
    isOpen: true,
    isSeemore: false,
  },
  {
    id: 2,
    ques: "What does this Privacy Statement cover?",
    answer:
      "This Privacy Statement applies to any Personal Data that HCLSoftware processes about you that may be collected directly from you when you interact with Us or from third parties, such as when you:",
    isOpen: true,
    isSeemore: true,
  },
  {
    id: 3,
    ques: "Personal Data do We process?",
    answer:
      'We are HCLSoftware (a division of HCL Technologies Ltd) and HCLSoftware’s subsidiaries and affiliated entities (hereinafter “HCLSoftware,” "We," “Our,” or "Us"). HCLSoftware is the Data Controller of your Personal Data as described in this Privacy Statement, unless otherwise specified. HCLSoftware is committed to protecting your Personal Data and respecting your privacy and your rights, and this statement is intended to provide you with information about how your Personal Data is processed.',
    isOpen: false,
    isSeemore: false,
  },
  {
    id: 4,
    ques: "Interactions Where Personal Data is CollectedTypes of Personal Data Processed",
    answer:
      'We are HCLSoftware (a division of HCL Technologies Ltd) and HCLSoftware’s subsidiaries and affiliated entities (hereinafter “HCLSoftware,” "We," “Our,” or "Us"). HCLSoftware is the Data Controller of your Personal Data as described in this Privacy Statement, unless otherwise specified. HCLSoftware is committed to protecting your Personal Data and respecting your privacy and your rights, and this statement is intended to provide you with information about how your Personal Data is processed.',
    isOpen: false,
    isSeemore: false,
  },
  {
    id: 5,
    ques: "How will We update this Privacy Statement?",
    answer:
      "We may amend this Privacy Statement from time to time. If We materially change Our Privacy Statement, We will update the “Effective Date” at the top of the Privacy Statement and We may provide notice prior to the update taking effect by posting a notice on Our website or, where required by law, by providing you with notice of such updates.",
    isOpen: false,
    isSeemore: false,
  },
];
export const cookies = [
  {
    id: 1,
    ques: "Essential Cookies",
    answer:
      "These cookies enable core functionality such as security, verification of identity and network management. These cookies can’t be disabled.",
    isOpen: true,
  },
  {
    id: 2,
    ques: "Enable Marketing Cookies",
    answer:
      "These cookies enable core functionality such as security, verification of identity and network management. These cookies can’t be disabled.",
    isOpen: false,
  },
  {
    id: 3,
    ques: "Enable Functional Cookies",
    answer:
      "These cookies enable core functionality such as security, verification of identity and network management. These cookies can’t be disabled.",
    isOpen: false,
  },
  {
    id: 4,
    ques: "Enable Analytics Cookies",
    answer:
      "These cookies enable core functionality such as security, verification of identity and network management. These cookies can’t be disabled.",
    isOpen: false,
  },
  {
    id: 5,
    ques: "How will We update this Privacy Statement?",
    answer:
      "We may amend this Privacy Statement from time to time. If We materially change Our Privacy Statement, We will update the “Effective Date” at the top of the Privacy Statement and We may provide notice prior to the update taking effect by posting a notice on Our website or, where required by law, by providing you with notice of such updates.",
    isOpen: false,
  },
];
export const faqs = [
  {
    id: 1,
    ques: "How do I access the MyEvents portal?",
    answer:
      "To access the MyEvents portal, use the credentials provided in your invitation email. Visit the URL specified, and log in with your username and password. This portal will provide all the information you need regarding the event, including schedules, locations, and updates.",
    isOpen: true,
  },
  {
    id: 2,
    ques: "What can I find in the MyEvents portal?",
    answer:
      "The MyEvents portal is designed to provide you with everything you need for the event. This includes the event schedule, session details, hotel information, venue maps, and real-time updates. You can also contact the event support team through the portal for any assistance.",
    isOpen: true,
  },
  {
    id: 3,
    ques: "What should I do if I forget my login credentials?",
    answer:
      "If you forget your login credentials, please click on the 'Forgot Password' link on the login page of the MyEvents portal. Follow the instructions to reset your password. If you continue to have issues, contact our event support team for assistance.",
    isOpen: true,
  },
];
export const network_peoples = [
  {
    id: 1,
    name: "Gaston Goyret",
    company: "HCL Software",
    title: "AVP",
    photo: "/images/notify-man.webp",
  },
  {
    id: 2,
    name: "Rodrigo Plumari G.",
    company: "Bineo",
    title: "CIO",
    photo: avatar,
  },
  {
    id: 3,
    name: "Rommel Flores",
    company: "Grupo Comercial Control",
    title: "VP e-commerce",
    photo: avatar,
  },
  {
    id: 4,
    name: "Nocolas Geronimo",
    company: "Dportenis",
    title: "Director AI",
    photo: avatar,
  },
  {
    id: 5,
    name: "Karlo Mondragon",
    company: "Grupo Salinas",
    title: "CHRO",
    photo: avatar,
  },
  {
    id: 6,
    name: "Antonio Antunez",
    company: "Grupo Comercial Control",
    title: "Director General",
    photo: avatar,
  },
  {
    id: 7,
    name: "Rodrigo Plumari G.",
    company: "Bineo",
    title: "CIO",
    photo: avatar,
  },
  {
    id: 8,
    name: "Rommel Flores",
    company: "Grupo Comercial Control",
    title: "VP e-commerce",
    photo: avatar,
  },
  {
    id: 9,
    name: "Nocolas Geronimo",
    company: "Dportenis",
    title: "Director AI",
    photo: avatar,
  },
  {
    id: 10,
    name: "Karlo Mondragon",
    company: "Grupo Salinas",
    title: "CHRO",
    photo: avatar,
  },

  {
    id: 11,
    name: "Karlo Mondragon",
    company: "Grupo Salinas",
    title: "CHRO",
    photo: avatar,
  },
];
export const event_flags_gellery = [
  {
    id: 1,
    name: "Mexico Grand Prix",
    photo: "/images/mexico-flag.jpg",
    date: "October 26, 2024",
  },
  {
    id: 2,
    name: "Austin Grand Prix",
    photo: "/images/austin-flag.jpg",
    date: "October 15, 2024",
  },
  {
    id: 3,
    name: "Singapore Grand Prix",
    photo: "/images/singapore-flag.jpg",
    date: "September 22, 2024",
  },
  {
    id: 4,
    name: "Monza Grand Prix",
    photo: "/images/monza-flag.jpg",
    date: "Agust 12, 2024",
  },
  {
    id: 5,
    name: "Abu Dhabi Grand Prix",
    photo: "/images/abu-dhabi.jpg",
    date: "December 5, 2024",
  },
];
export const gallery_posts = [
  {
    id: 1,
    photo: {
      type: "verticle",
      url: "/images/verticle-1.jpg",
    },
    tagged_members: [
      "Evelyn Hawke",
      "Maxwell Sterling",
      "Ethan Carrington",
      "Oliver Hayes",
      "Jasper Blackwell",
      "Dylan Hawthorne",
      "Leo Sinclair",
      "Nathaniel Storm",
    ],
    likes: 12,
    owner: "Mateo Pautasso",
    date: "oct 26",
  },
  {
    id: 2,
    photo: {
      type: "verticle",
      url: "/images/verticle-2.jpg",
    },
    tagged_members: [],
    likes: 12,
    owner: "Mateo Pautasso",
    date: "oct 26",
  },
  {
    id: 3,
    photo: {
      type: "horizontal",
      url: "/images/horizontal-3.png",
    },
    tagged_members: [],
    likes: 12,
    owner: "Mateo Pautasso",
    date: "oct 26",
  },
  {
    id: 4,
    photo: {
      type: "verticle",
      url: "/images/verticle-2.jpg",
    },
    tagged_members: [],
    likes: 12,
    owner: "Mateo Pautasso",
    date: "oct 26",
  },
  {
    id: 5,
    photo: {
      type: "verticle",
      url: "/images/verticle-4.jpg",
    },
    tagged_members: [],
    likes: 12,
    owner: "Mateo Pautasso",
    date: "oct 26",
  },
  {
    id: 6,
    photo: {
      type: "verticle",
      url: "/images/verticle-5.png",
    },
    tagged_members: [],
    likes: 12,
    owner: "Mateo Pautasso",
    date: "oct 26",
  },
  {
    id: 7,
    photo: {
      type: "verticle",
      url: "/images/horizontal-3.png",
    },
    tagged_members: [],
    likes: 12,
    owner: "Mateo Pautasso",
    date: "oct 26",
  },
  {
    id: 8,
    photo: {
      type: "verticle",
      url: "/images/verticle-4.jpg",
    },
    tagged_members: [],
    likes: 12,
    owner: "Mateo Pautasso",
    date: "oct 26",
  },
  {
    id: 9,
    photo: {
      type: "verticle",
      url: "/images/verticle-5.png",
    },
    tagged_members: [],
    likes: 12,
    owner: "Mateo Pautasso",
    date: "oct 26",
  },
  {
    id: 10,
    photo: {
      type: "verticle",
      url: "/images/horizontal-3.png",
    },
    tagged_members: [],
    likes: 12,
    owner: "Mateo Pautasso",
    date: "oct 26",
  },
  {
    id: 11,
    photo: {
      type: "verticle",
      url: "/images/verticle-2.jpg",
    },
    tagged_members: [],
    likes: 12,
    owner: "Mateo Pautasso",
    date: "oct 26",
  },
];
