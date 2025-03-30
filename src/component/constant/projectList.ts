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
