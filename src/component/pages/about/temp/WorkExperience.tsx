import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../../../components/ui/avatar";
import "./AboutSection.css";

const experiences = [
  {
    title: "Software Engineer",
    company: "Upwork",
    logo: "https://images.icon-icons.com/3781/PNG/512/upwork_icon_231982.png",
    duration: "2024 - Present",
  },
  {
    title: "Jr. Software Engineer",
    company: "Aicansell Pvt. Ltd.",
    logo: "data:image/jpeg;base64,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",
    duration: "2023 - 2024",
  },
  {
    title: "Frontend Developer Intern",
    company: "Eikonsem Pvt. Ltd.",
    logo: "https://eikomp.com/wp-content/uploads/2023/04/Eikomp.png",
    duration: "2023",
  },
  {
    title: "Coding Camp Mentor",
    company: "University of Delhi",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-q53zbnr7Kbxr_eBLGRrTVbyml2erOu2Ig&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RPBgR8mvk1-gGXN-YeKENbAPlJTVBKdZ7w&s",
    duration: "2023",
  },
];

export default function WorkExperience() {
  return (
    <section className="about-main" style={{ marginTop: "-1rem" }}>
      <h3>Work</h3>
      <div className="flex flex-col gap-8 w-full">
        <p style={{ color: "#fff", fontSize: "1rem" }}>
          I specialize in JavaScript, TypeScript, Java , data analytics, React, web development, UI/UX,
          and product design. But I am always learning new things. Here are some
          of the places I have worked.
        </p>
        {/* work exp list */}
        <ul className="work-list" style={{padding: "0",display: "flex",flexDirection:"column",gap: "2rem"}}>
          {experiences.map((experience) => (
            <li key={experience.title} className="work-list-item" id="work-list-main">
              <div className="xyzasd">

              
              <div style={{ display: "flex", alignItems: "center", flexDirection:"row",gap: "2rem" }}>

              
              <Avatar
                style={{
                  position: "relative",
                  display: "flex",
                  height: "3.5rem",
                  width: "3.5rem",
                  flexShrink: 0,
                  // overflow: "hidden",
                  borderRadius: "50%",
                  padding: "0",
                  margin: "0",
                }}
              >
                <AvatarImage src={experience.logo} alt="logo" style={{ height: "100%", width: "100%",borderRadius:"50%" }} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span style={{ display: "flex", alignItems: "start", flexDirection:"column",gap: "0" }}>
                <h4 className="text-lg font-semibold m-0" style={{paddingBottom:"0",margin:'0'}}>{experience.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {experience.company}
                </p>
              </span>
              </div>
                <p className="text-sm text-muted-foreground">
                  {experience.duration}
                </p>
                </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
