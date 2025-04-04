import { useRef } from "react";
import NavigationBar from "./components/navigation";
import Header from "./sections/header";
import Projects from "./sections/projects";
import Work from "./sections/work";
import { appStyle } from "./styles";
import SkillBanner from "./sections/skills";
import Contact from "./sections/contact";

function App() {
  const workRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    Work: workRef,
    Projects: projectsRef,
    Contact: contactRef,
  };

  return (
    <div style={appStyle}>
      <NavigationBar sectionRefs={sectionRefs} />
      <Header />
      <Work ref={workRef} />
      <SkillBanner />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
