import React, { useEffect, useRef } from "react";
import posed from "react-pose";
import { withRouter } from "react-router-dom";
import Scroll from "react-scroll";
import "./Content.scss";
import About from "./About";
import Work from "./Timeline";
import SideProjects from "./SideProjects";
import Skills from "./Skills";
import Contact from "./Contact";
import Articles from "./Articles";

const { scroller } = Scroll;

const CustomDiv = posed.div({
  visible: {
    opacity: 0.8,
    transition: { duration: 2000 },
  },
  hidden: { opacity: 0 },
});

const Content = ({ location, setActiveSection, SECTIONS }) => {
  const scrollRef = useRef(null);

  const inputRefs = {
    about: useRef(null),
    work: useRef(null),
    side_projects: useRef(null),
    articles: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
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

  const handleScroll = () => {
    const ref = scrollRef.current;
    if (!ref) return;

    const scrollPosition = ref.scrollTop;
    let activeTab = "about";
    SECTIONS.forEach((section) => {
      const offset = inputRefs[section.value].current.offsetTop;
      if (offset < scrollPosition + 30) activeTab = section.value;
    });
    setActiveSection(activeTab);
  };

  return (
    <CustomDiv className="box">
      <div ref={scrollRef} id="ContainerElement" className="content">
        <About ref={inputRefs.about} />
        <Work ref={inputRefs.work} />
        <SideProjects ref={inputRefs.side_projects} />
        <Articles ref={inputRefs.articles} />
        <Skills ref={inputRefs.skills} />
        <Contact ref={inputRefs.contact} />
      </div>
      {/* <i className="spinner fas fa-dharmachakra"></i> */}
    </CustomDiv>
  );
};

export default withRouter(Content);
