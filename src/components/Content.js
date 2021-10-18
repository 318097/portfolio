import React, { useEffect, useRef } from "react";
import posed from "react-pose";
import { withRouter } from "react-router-dom";
import Scroll from "react-scroll";
import "./Content.scss";
import About from "./About";
import Timeline from "./Timeline";
import SideProjects from "./SideProjects";
import Skills from "./Skills";
import Contact from "./Contact";
import Articles from "./Articles";
import { SECTIONS, sectionValues } from "../constants";

const { scroller } = Scroll;

const CustomDiv = posed.div({
  visible: {
    opacity: 0.8,
    transition: { duration: 2000 },
  },
  hidden: { opacity: 0 },
});

const scrollProps = {
  duration: 1500,
  delay: 100,
  smooth: true,
  containerId: "ContainerElement",
  offset: 0,
};

const Content = ({ location, setActiveSection }) => {
  const scrollRef = useRef(null);

  const inputRefs = sectionValues.reduce(
    (acc, value) => ({ ...acc, [value]: useRef() }),
    {}
  );

  useEffect(() => {
    scrollRef.current.addEventListener("scroll", handleScroll);
    return () => scrollRef.current.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const elementId = location.hash.slice(1);
    scroller.scrollTo(elementId, scrollProps);
    setActiveSection(elementId);
  }, [location]);

  const handleScroll = () => {
    const ref = scrollRef.current;
    if (!ref) return;

    const scrollPosition = ref.scrollTop;
    let activeTab = "about";
    SECTIONS.forEach((section) => {
      const offset = inputRefs[section.value].current.offsetTop;
      if (offset < scrollPosition + 200) activeTab = section.value;
    });
    setActiveSection(activeTab);
  };

  return (
    <CustomDiv className="box">
      <div ref={scrollRef} id="ContainerElement" className="content">
        {SECTIONS.map(({ label, value }) => {
          const props = { ref: inputRefs[value], key: value, value, label };

          if (value === "about") return <About {...props} />;
          else if (value === "timeline") return <Timeline {...props} />;
          else if (value === "side_projects")
            return <SideProjects {...props} />;
          else if (value === "articles") return <Articles {...props} />;
          else if (value === "tech") return <Skills {...props} />;
          else if (value === "contact") return <Contact {...props} />;
        })}
      </div>
    </CustomDiv>
  );
};

export default withRouter(Content);
