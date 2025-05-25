// import axios from "axios";
import { INavLink } from "../share/Navbar";
import ProjectList from "../share/ProjectList";
import "./Home.css";
// import { useEffect } from "react";
// import { useEffect } from "react";

const links = [
  { name: "LinkedIn", path: "https://www.linkedin.com/" },
  { name: "Instagram", path: "linkedIn.com" },
  { name: "Discord", path: "linkedIn.com" },
  { name: "Gmail", path: "linkedIn.com" },
];

const Home = () => {
  const arrowSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
      style={{ height: "1rem", width: "1rem", verticalAlign: "middle" }}
    >
      <path
        fill-rule="evenodd"
        d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );

  // const blogApi = async() => {
  //   try {
  //     const res = await axios.get('https://article-extractor2.p.rapidapi.com/article/parse?url=https%3A%2F%2Fcss-tricks.com%2Fempathetic-animation%2F&word_per_minute=300&desc_truncate_len=210&desc_len_min=180&content_len_min=200',{
  //       headers:{
  //         'x-rapidapi-key': '21cea513b7mshbd65264e75dff77p1a6f3ajsnef07c6c65bb0',
  //         'x-rapidapi-host': 'article-extractor2.p.rapidapi.com'
  //       }
  //     });

  //     console.log(res.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // blogApi();

  // useEffect(()=>{
  //   blogApi();
  // }, [])

  return (
    <div className="home-main">
      <div className="home-container">
        <div className="home-intro">
          <div className="home-intro-data">
            <h1>hey, Udit here!</h1>
            <p>
              I create lightning-fast,
              responsive web apps with a design-first mindset—turning complex
              ideas into seamless user experiences.
            </p>
          </div>
          <div className="home-intro-links">
            {links.map((link: INavLink, index) => (
              <a href={link.path} key={index}>
                {link.name} {arrowSvg}
              </a>
            ))}
          </div>
        </div>

        {/* project */}
        <div className="home-project-section">
          <p>Pinned</p>

          <ProjectList />
        </div>

        {/* Latest Blog */}

        <div className="home-blog-section">
          <p>
            Latest Blog {""}
            {arrowSvg}
          </p>

          <p>
            I occasionally write about programming, productivity, and more.
            Check me out and subscribe to stay up to date.
          </p>

          <div>{/* blog navs */}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
