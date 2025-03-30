import { Link } from "react-router-dom";
import "./ProfileCard.css";
import logo from '../../../public/images/logo.png'

const ProfileCard = ({ projectLink }: { projectLink?: string }) => {
  return (
    <div className="profile-card">
      <img src={logo} alt="avatar" className="profile-card-image" />
      <div className="profile-card-info">
        <span className="p-tag-profilecard">Udit Rawal</span>
        <p className="p-tag-profilecard">
          2023-2024 &middot;{" "}
          {projectLink && (
            <Link to={projectLink} className="profile-card-underline">
              Visit Project
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
