import Piclure from '../../assets/images/piclure.png';
import medical from '../../assets/images/medical.png';
import eikomp from '../../assets/images/eikomp_assets/desktop.png';

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
    image:Piclure ,
    path:'/piclure'
  },
  {
    name: "Blood Bank App",
    description:
      "Our app is a dynamic and interactive social media platform designed to connect people from all walks of life.",
    image:medical,
    path:'/blood-bank' 
  },
  {
    name: "Eikomp App Dev",
    description:
      "Our app is a dynamic and interactive social media platform designed to connect people from all walks of life.",
    image:eikomp,
    path:'/eikomp'

  },
  
];


// projects main

// constants/projects.ts

export interface IProject {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  link: string;
  isAffiliate?: boolean;
  offerText?: string;
}

export const projects: IProject[] = [
  {
    id: "1",
    name: "Superhuman Mail",
    description: "Use link for 1 Month FREE code. The fastest email experience with cool AI features.",
    category: "Apps",
    icon: "📧",
    link: "https://superhuman.com",
    isAffiliate: true,
    offerText: "1 Month FREE"
  },
  {
    id: "2",
    name: "Raycast",
    description: "The quickest way to get things done on your Mac. Using Raycast daily.",
    category: "Apps",
    icon: "🚀",
    link: "https://raycast.com",
    isAffiliate: false
  },
  {
    id: "3",
    name: "Epidemic Sound",
    description: "1 Month Free. This is where I get 95% of the music for my videos. Skip the copyright issues.",
    category: "Apps",
    icon: "🎵",
    link: "https://epidemicsound.com",
    isAffiliate: true,
    offerText: "1 Month Free"
  },
  {
    id: "4",
    name: "Copilot Money",
    description: "'BRIANRUIZ', 2 months FREE. For all things personal finance, this is my go-to app.",
    category: "Apps",
    icon: "💰",
    link: "https://copilot.money",
    isAffiliate: true,
    offerText: "2 Months FREE"
  },
  {
    id: "5",
    name: "MacroFactor",
    description: "code 'brianruiz' for extended trial. I use this to stay on top of my diet.",
    category: "Apps",
    icon: "🍎",
    link: "https://macrofactor.app",
    isAffiliate: true,
    offerText: "Extended Trial"
  },
  {
    id: "6",
    name: "Notion",
    description: "My second brain for organizing everything. From notes to project management.",
    category: "Productivity",
    icon: "📝",
    link: "https://notion.so",
    isAffiliate: false
  },
  {
    id: "7",
    name: "Figma",
    description: "Essential design tool for UI/UX design and prototyping. Used daily for all design work.",
    category: "Design",
    icon: "🎨",
    link: "https://figma.com",
    isAffiliate: false
  },
  {
    id: "8",
    name: "Linear",
    description: "The best issue tracking tool for modern software teams. Clean and fast.",
    category: "Development",
    icon: "📊",
    link: "https://linear.app",
    isAffiliate: false
  }
];

export const categories = ["All", "Apps", "Productivity", "Design", "Development"];