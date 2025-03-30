import football from '../../assets/images/about/footbal.jpeg';
import delhi from '../../assets/images/about/delhi.jpg';
import bike from '../../assets/images/about/bike.jpg';
import random from '../../assets/images/about/random.jpg';
import backside from '../../assets/images/about/backside.jpg';


export interface PhotoGridItem {
  date: string;
  img: string;
  name: string;
  backside: string;
}

const photoGridData: PhotoGridItem[] = [
  {
    date: '19-1-2024',
    img: football, // Directly assign the image import
    name: 'Football',
    backside: backside
  },
  {
    date: '14-11-2024',
    img: delhi,
    name: 'Delhi - Bangla Sahib',
    backside: backside
  },
  {
    date: '23-06-2024',
    img: bike,
    name: 'Bike Ride',
    backside: backside
  },
  {
    date: '14-11-2024',
    img: random,
    name: 'Random Image',
    backside: backside
  },
];

export default photoGridData;
