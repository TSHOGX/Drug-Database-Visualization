import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const h = document.body.clientHeight;

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box width="90%" height={0.1*h} margin="0 auto" 
    // sx={{
    //   boxShadow: 16,
    //   // bgcolor: colors.primary[400],
    //   // m: 2,
    //   p: 2,
    //   borderRadius: 2,
    // }}
    justifyContent="space-between"
    display="flex"
    >
      {/* HEAD */}
      <Box display="flex" alignItems='center' gap="10px">
        <Typography variant="h1" color={colors.grey[100]} fontWeight="bold">
          {"Drug Database Visualization"}
        </Typography>
        {/* <Typography variant="h5" color={colors.grey[100]} fontWeight="bold" >
          {"CSE5544"}
        </Typography> */}
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
