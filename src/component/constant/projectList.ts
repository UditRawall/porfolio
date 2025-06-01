import Piclure from "../../assets/images/piclure.png";
import medical from "../../assets/images/medical.png";
import eikomp from "../../assets/images/eikomp_assets/desktop.png";
import neurobridge from "../../assets/images/projectList/neurobridge.png";
import bloodbank from "../../assets/images/projectList/bloodbank.png";
import tula from "../../assets/images/projectList/tula.png";
import instructor from "../../assets/images/projectList/instructor.png";

export interface PhotoGridItem {
  name: string;
  description: string;
  image: string;
  path: string;
}

export const projectList: PhotoGridItem[] = [
  {
    name: "Piclure",
    description:
      "Our app is a dynamic and interactive social media platform designed to connect people from all walks of life.",
    image: Piclure,
    path: "/piclure",
  },
  {
    name: "Blood Bank App",
    description:
      "Our app is a dynamic and interactive social media platform designed to connect people from all walks of life.",
    image: medical,
    path: "/blood-bank",
  },
  {
    name: "Eikomp App Dev",
    description:
      "Our app is a dynamic and interactive social media platform designed to connect people from all walks of life.",
    image: eikomp,
    path: "/eikomp",
  },
];

// projects main

// constants/projects.ts

export interface IProject {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  link: string;
  image?: string; // Add this property to your project interface
  offerText?: string;
  isAffiliate: boolean;
}

export const projects: IProject[] = [
  {
    id: "1",
    name: "NeuroBridge",
    description:
      "Neurobridge Tech is where AI meets real-world data—transforming it into real-time, actionable insights for smarter decision-making.",
    category: "SaaS",
    icon: "🧠", // Brain icon for neuro/AI theme
    link: "https://neurobridge.vercel.app/",
    isAffiliate: true,
    offerText: "Freelance Project",
    image: neurobridge, // Replace with your actual image path
  },
  {
    id: "2",
    name: "Piclure",
    description:
      "The quickest way to get things done on your Mac. Using Raycast daily.",
    category: "Apps",
    icon: "📷", // Camera icon for picture-related app
    link: "https://piclure.vercel.app/",
    isAffiliate: false,
    image: Piclure,
  },
  {
    id: "3",
    name: "Blood Bank App",
    description:
      "A donor-recipient blood management system with secure login and real-time donor matching. Designed to support hospitals and NGOs.",
    category: "Apps",
    icon: "🩸", // Blood drop icon for blood bank
    link: "https://client-phi-sable.vercel.app/login",
    isAffiliate: true,
    image: bloodbank,
    offerText: "1 Month Free",
  },
  {
    id: "4",
    name: "Tula Institute",
    description:
      "Revamped the official site of Tula Institute with a responsive design and SEO optimization, resulting in better traffic and engagement.",
    category: "Apps",
    icon: "🎓", // Graduation cap for institute/education
    link: "https://magenta-tanuki-acb694.netlify.app/",
    isAffiliate: true,
    image: tula,
    offerText: "2 Months FREE",
  },
  {
    id: "5",
    name: "Our Instructor",
    description:
      "An educational tool to manage course modules, instructors, and content in one place. Built for institutions and e-learning platforms.",
    category: "Productivity",
    icon: "📋", // Clipboard icon for organization/productivity
    link: "https://our-instructor-frontend-master.vercel.app/",
    image: instructor,
    isAffiliate: false,
  },
  {
    id: "6",
    name: "MacroFactor",
    description:
      "code 'brianruiz' for extended trial. I use this to stay on top of my diet.",
    category: "Apps",
    icon: "🥗", // Salad icon for diet/nutrition app
    link: "https://macrofactor.app",
    isAffiliate: true,
    image:
      "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=400&h=300&fit=crop&crop=center",
    offerText: "Extended Trial",
  },
  {
    id: "7", // Fixed duplicate ID
    name: "Notion",
    description:
      "My second brain for organizing everything. From notes to project management.",
    category: "Productivity",
    icon: "📋", // Clipboard icon for organization/productivity
    link: "https://notion.so",
    image: instructor,
    isAffiliate: false,
  },
];

export const categories = [
  "All",
  "Apps",
  "Productivity",
  "Design",
  "Development",
];
