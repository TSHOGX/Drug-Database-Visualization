import React from 'react'
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NetGraph from "../../components/NetGraph";
import PieChart from "../../components/PieChart"
import LineChart from "../../components/LineChart"
import SearchBar from "../../components/SearchBar";
import { similarity as data } from "../../data/similarity";

const h = document.body.clientHeight;
const w = document.body.clientWidth;

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [focusedNode, setFocusedNode] = React.useState("gramicidin");
  const [selected, setSelected] = React.useState([]);
  const [year, setYear] = React.useState(null);

  // let focusedYearList = Object.keys(similarity.nodes.filter(item => String(item.id) === String(focusedNode))[0].pieData)
  let focusedYearList = [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014]
  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <Box width="90%" margin="0 auto" 
    sx={{
      boxShadow: 0,
      // bgcolor: colors.primary[400],
      // m: 2,
      p: 2,
      borderRadius: 2,
    }}
    >
      <Box
        display="grid"
        gridTemplateColumns="repeat(6, 1fr)"
        gridAutoRows={h*0.4}
      >


        {/* COL 1 Net */}
        <Box
          sx={{
            boxShadow: 16,
            bgcolor: colors.primary[400],
            // p: 2,
            m: 2,
            borderRadius: 2,
          }}
          gridColumn="span 3"
          gridRow="span 2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
        >
          <NetGraph 
            focused={focusedNode}
            setFocusedNode={setFocusedNode}
            selected={selected}
            setSelected={setSelected}
            netData={data}
          />
        </Box>


        {/* COL 2 ROW 2 Line */}
        <Box
          sx={{
            boxShadow: 16,
            bgcolor: colors.primary[400],
            // p: 2,
            m: 2,
            borderRadius: 2,
          }}
          gridColumn="span 2"
          gridRow="span 1"
          display="flex"
          flexDirection="column"
          alignItems="center"
          // justifyContent="space-between"
        >
          <Typography
            height={0}
            mt="25px"
            mb="-25px"
            variant="h5"
            fontWeight="500"
            color={colors.grey[100]}
          >
            Growth of ADR Reports Over Time 
          </Typography>
          
          <LineChart 
            focused={focusedNode}
            setFocusedNode={setFocusedNode}
            selected={selected}
            setSelected={setSelected}
          />
          {/* <BarChart /> */}
        </Box>


        {/* COL 3 ROW 1 Search */}
        <Box
          sx={{
            boxShadow: 16,
            bgcolor: colors.primary[400],
            // p: 2,
            m: 2,
            borderRadius: 2,
          }}
          gridColumn="span 1"
          gridRow="span 2"
        >
          <SearchBar 
            focused={focusedNode}
            setFocusedNode={setFocusedNode}
            selected={selected}
            setSelected={setSelected}
            netData={data}
          />
        </Box>


        {/* COL 2 ROW 3 Pie */}
        <Box
          sx={{
            boxShadow: 16,
            bgcolor: colors.primary[400],
            // p: 2,
            m: 2,
            borderRadius: 2,
          }}
          gridColumn="span 2"
          gridRow="span 1"
          display="flex"
          alignItems="top"
          justifyContent="center"
        >
          <Typography
            height={0}
            width={0}
            mt="25px"
            mb="-25px"
            ml="25px"
            mr="-5px"
            variant="h5"
            fontWeight="500"
            color={colors.grey[100]}
          >
            ADR Reports For One Year ({focusedNode}) 
          </Typography>
          <PieChart 
            focused={focusedNode}
            setFocusedNode={setFocusedNode}
            selected={selected}
            setSelected={setSelected}
            year={year}
          />
          <FormControl variant="standard" sx={{ mt: 2, mr: 4, ml:-4, minWidth: 55 }}>
              <InputLabel id="select-year">Year</InputLabel>
              <Select
                  labelId="select-year"
                  id="select"
                  value={year}
                  onChange={handleChange}
                  label="Year"
              >
              {focusedYearList.map(item => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
              </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
