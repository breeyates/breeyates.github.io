import Box from "./components/box";
import NavigationBar from "./components/navigation";
import Typography from "./components/typography";
import Header from "./sections/header";
import Projects from "./sections/projects";
import Work from "./sections/work";
import { appStyle, content } from "./styles";

function App() {
  return (
    <div style={appStyle}>
    <NavigationBar />
      <div style={content}>
        <Header />
        <Work />
        <Projects />
      </div>
    </div>
  );
}

export default App;
