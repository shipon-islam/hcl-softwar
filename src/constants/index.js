import gaston from "../assets/images/notify-man.webp";
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
        photo: gaston,
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
