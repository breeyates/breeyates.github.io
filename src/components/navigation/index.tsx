import { useState } from "react";
import Tab from "../tab";
import { navigationBarSx, tabsSx } from "./styles";
import { Button } from "@mui/material";

type NavigationBarProps = {
    sectionRefs: {
      [key: string]: React.RefObject<HTMLElement>;
    };
  };

const NavigationBar: React.FC<NavigationBarProps> = ({ sectionRefs }) => {
    const [selectedTab, setSelectedTab] = useState<string | undefined>('About Me');
    const tabs = ['Work', 'Projects', 'Contact'];

    const handleTabClick = (tab: string) => {
      setSelectedTab(tab);
      const ref = sectionRefs[tab];
      console.log(ref);
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
    <div style={navigationBarSx}>
        <Tab text="BY" />
        <div className="tabs" style={tabsSx}>
          {tabs.map((tab) => (
              <Tab
                key={tab}
                text={tab}
                selected={tab === selectedTab}
                onClick={() => handleTabClick(tab)}
              />
          ))}
          <Button sx={{ padding: 0, textTransform: 'none' }} variant="text" href="/breanna-yates-resume.pdf" download component="a">
            <Tab text="↓ Resume" sx={{textDecoration: 'underline'}} />
          </Button>
        </div>
    </div>
    );
};

export default NavigationBar;