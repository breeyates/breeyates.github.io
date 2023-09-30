import Box from "../box";
import Typography from "../typography";
import { TabContainer } from "./styles";

export interface TabProps {
    text: string;
    selected?: boolean;
    onClick?: () => void;
    sx?: any;
  }
  
  const Tab: React.FC<TabProps> = ({ text, selected, onClick, sx }) => {
    return (
      <TabContainer selected={selected} onClick={onClick}>
        <Typography text={text} variant="inter" sx={{fontSize: '30px', fontWeight: 700, ...sx}} />
      </TabContainer>
    );
  };
  
  export default Tab;