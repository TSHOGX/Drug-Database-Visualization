import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import NetGraph from "../../components/NetGraph";
import PieChart from "../../components/PieChart"
import BarChart from "../../components/BarChart"
import LineChart from "../../components/LineChart"
import SearchBar from "../../components/SearchBar";
import { netData } from "../../data/netData";


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="90%" margin="0 auto" marginTop="10px" >
      <Box
        display="grid"
        gridTemplateColumns="repeat(6, 1fr)"
        gridAutoRows="45px"
        gap="40px"
      >


        {/* COL 1 Net */}
        <Box
          gridColumn="span 3"
          gridRow="span 12"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
        >
          <NetGraph />
        </Box>


        {/* COL 2 ROW 2 Bar */}
        <Box
          gridColumn="span 2"
          gridRow="span 6"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* <LineChart /> */}
          <BarChart />
        </Box>


        {/* COL 3 ROW 1 Search */}
        <Box
          gridColumn="span 1"
          gridRow="span 12"
          backgroundColor={colors.primary[400]}
        >
          <SearchBar netData={netData.nodes} />
        </Box>


        {/* COL 2 ROW 3 Pie */}
        <Box
          gridColumn="span 2"
          gridRow="span 6"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <PieChart />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
