import photoGridData from "../constant/photoGridData";
import "./PhotoGrid.css";

export type IPhotoGrid = {
  date: string;
  img: string;
  name: string;
};

const PhotoGrid = () => {
  return (
    <section className="photo-main">
        {photoGridData.map((item, index) => {
            return (
              <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={item.img} alt="image-about"/>
              </div>
              <div className="flip-card-back">
                <img src={item.backside} alt="backside"/>
                <h3>{item.name}</h3>
                <p>{item.date}</p>
              </div>
            </div>
      </div>
          );
        })}
    </section>
  );
};

export default PhotoGrid;
