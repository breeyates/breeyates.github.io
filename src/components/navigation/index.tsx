import { useState } from "react";
import Tab from "../tab";
import { navigationBarSx, tabsSx } from "./styles";

const NavigationBar: React.FC<any> = ({}: any) => {
    const [selectedTab, setSelectedTab] = useState<string | undefined>('About Me');
    const tabs = ['Work', 'Experience', 'Contact'];

    const handleTabClick = (tab: string) => {
      setSelectedTab(tab);
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
        <Tab text="↓ Resume" sx={{textDecoration: 'underline'}} />
        </div>
    </div>
    );
};

export default NavigationBar;