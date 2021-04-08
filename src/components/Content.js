import React, { useEffect, useRef, forwardRef, useState } from "react";
import posed from "react-pose";
import { withRouter } from "react-router-dom";
import Scroll from "react-scroll";
import moment from "moment";
import { Icon, Timeline, Button } from "@codedrops/react-ui";
// import ReactMapGL from 'react-map-gl';
import "./Content.scss";
import DATA from "../DATA";

const {
  basic: { name, email, website },
  work,
  skills,
  social,
} = DATA;

const { scroller } = Scroll;

const CustomDiv = posed.div({
  visible: {
    opacity: 0.8,
    transition: { duration: 2000 },
  },
  hidden: { opacity: 0 },
});

const formatDate = (date) =>
  date ? moment(date, "DD-MM-YYYY").format("MMM, YY") : "Present";

const Content = ({ location, setActiveSection, SECTIONS }) => {
  const scrollRef = useRef(null);

  const inputRefs = {
    profile: useRef(null),
    work: useRef(null),
    side_projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  const [sideProjects, setSideProjects] = useState([]);

  useEffect(() => {
    fetchSideProjects();

    scrollRef.current.addEventListener("scroll", handleScroll);
    return () => scrollRef.current.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const elementId = location.hash.slice(1);
    scroller.scrollTo(elementId, {
      duration: 1500,
      delay: 100,
      smooth: true,
      containerId: "ContainerElement",
      offset: 0,
    });
    setActiveSection(elementId);
  }, [location]);

  const fetchSideProjects = () => {
    const DATA_URL =
      "https://raw.githubusercontent.com/318097/code-drops/master/src/DATA.json";
    fetch(DATA_URL)
      .then((res) => res.json())
      .then((data) =>
        setSideProjects(data.products.filter((product) => product.visible))
      );
  };

  const handleScroll = () => {
    const ref = scrollRef.current;
    if (!ref) return;

    const scrollPosition = ref.scrollTop;
    let activeTab = "profile";
    SECTIONS.forEach((section) => {
      const offset = inputRefs[section.value].current.offsetTop;
      if (offset < scrollPosition + 30) activeTab = section.value;
    });
    setActiveSection(activeTab);
  };
  // const viewport = {
  //   width: 400,
  //   height: 400,
  //   // center: [12.9716, 77.5946],
  //   latitude: 12.9716,
  //   longitude: 77.5946,
  //   // sprite: 'mapbox://styles/mapbox/dark-v9',
  //   zoom: 12,
  // };
  return (
    <CustomDiv className="box">
      <div ref={scrollRef} id="ContainerElement" className="content">
        <Profile ref={inputRefs.profile} name={name} />
        <Work ref={inputRefs.work} work={work} />
        <SideProjects
          ref={inputRefs.side_projects}
          sideProjects={sideProjects}
        />
        <Skills ref={inputRefs.skills} skills={skills} />
        <Contact
          ref={inputRefs.contact}
          email={email}
          social={social}
          website={website}
        />
      </div>
      {/* <i className="spinner fas fa-dharmachakra"></i> */}
    </CustomDiv>
  );
};

const Profile = forwardRef(({ name }, ref) => (
  <section ref={ref} id="profile" name="profile">
    <h2>Profile</h2>
    <p className="intro">
      Hi, I am <span className="highlight">{name}</span> from Bangalore, India
      with 2.5 years of work experience as a{" "}
      <span className="highlight">Full-stack Developer</span>. I am interested
      in working on exciting projects along with best engineers from across the
      world. Apart from <span className="highlight">&lt;coding&#47;&gt;</span>,
      I <Icon size={18} type="heart-2" /> to play{" "}
      <span className="highlight">football</span>{" "}
      <Icon size={20} type="football" />
    </p>
  </section>
));

const TimelineItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const { name, location, role, start_date, end_date, projects } = item;

  const date = `${formatDate(start_date)} - ${formatDate(end_date)}`;

  return (
    <div key={name} className="timeline-left-container">
      <div className="timeline-card">
        <h3>
          {name}
          <span className="location">{`(${location})`}</span>
        </h3>

        <h4 className="role">{role}</h4>
        <h4 className="date">{date}</h4>

        {expanded && !!projects.length && (
          <div className="project-container">
            {/* <h5 className="project-title">Projects</h5> */}
            {projects.map(({ name: projectName, description }) => {
              return (
                <div key={projectName}>
                  <h4 className="project-name">{projectName}</h4>
                  <div className="project-description">
                    {description.map((list, i) => (
                      <div className="project-description-item" key={i}>
                        {`- ${list}`}
                      </div>
                    ))}
                  </div>
                  <br />
                </div>
              );
            })}
          </div>
        )}
        {!!projects.length && (
          <Icon
            type="caret"
            size={10}
            className="expand-icon"
            direction={expanded ? "up" : "down"}
            onClick={() => setExpanded((prev) => !prev)}
          />
        )}
      </div>
    </div>
  );
};

const Work = forwardRef(({ work }, ref) => (
  <section ref={ref} id="work" name="work">
    <h2>Work</h2>
    <Timeline
      items={work}
      renderItem={(item) => <TimelineItem item={item} />}
    />
  </section>
));

const SideProjects = forwardRef(({ sideProjects }, ref) => (
  <section ref={ref} id="side_projects" name="side_projects">
    <h2>Side Projects</h2>
    <div className="project-list">
      {sideProjects.map(
        ({ id, name, tagline, logo, video, download, ph, github }) => {
          const links = [
            { label: "Demo", url: video },
            { label: "Product Hunt", url: ph },
            { label: "Github", url: github },
          ].filter((item) => !!item.url);

          return (
            <div className="project-item" key={id}>
              {logo && <img src={logo} alt="logo" className="logo" />}
              <div className="name">{name}</div>
              <div className="tagline">{tagline}</div>
              <div className="links-container">
                {links.map((item, idx) => (
                  <>
                    {idx > 0 && idx < links.length && <span>&#8226;</span>}
                    <a className="link" href={item.url} target="__blank">
                      {item.label}
                    </a>
                  </>
                ))}
              </div>
              <Button
                onClick={() =>
                  window.open(`${download}?utm_source=portfolio`, "__blank")
                }
              >
                Download
              </Button>
            </div>
          );
        }
      )}
    </div>
  </section>
));

const Skills = forwardRef(({ skills }, ref) => (
  <section ref={ref} id="skills" name="skills">
    <h2>Skills</h2>
    <div className="skill-list">
      {skills.map(({ name, highlight }) => (
        <div className={`skill${highlight ? " highlight" : ""}`} key={name}>
          {name}
        </div>
      ))}
    </div>
  </section>
));

const SocialIcons = ({ type }) => (
  <div className="social">
    {social
      .filter((item) => item.visible && item.type === type)
      .map(({ name, url, classname }) => (
        <a key={name} title={name} href={url} target="__blank">
          <i className={classname}></i>
        </a>
      ))}
  </div>
);

const Contact = forwardRef(({ email, social, website }, ref) => (
  <section ref={ref} id="contact" name="contact">
    <h2>Contact</h2>
    {/* <ReactMapGL
        mapboxApiAccessToken={'pk.eyJ1IjoiMzE4MDk3IiwiYSI6ImNqdDJhbzhqZDB6YjkzeWxqbXpqZWVyNGgifQ._HOcF0YmpvJ7eAl4JQtFqA'}
        {...viewport}
      /> */}
    <div className="contact-details">
      <div>
        Reach out to me at:
        <p className="email">{email}</p>
      </div>

      <SocialIcons type="work" />
      <SocialIcons type="casual" />

      <div className="website">
        <a href={website.url} target="__blank">
          {website.label}
        </a>
      </div>
    </div>
  </section>
));

export default withRouter(Content);
