import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" width="95%" margin="0 auto" marginTop="20px" marginBottom="40px" justifyContent="space-between" p={2}>
      {/* HEAD */}
      <Box display="flex" alignItems='end' gap="10px">
        <Typography variant="h1" color={colors.grey[100]} fontWeight="bold">
          {"Drug Database Visualization"}
        </Typography>
        <Typography variant="h5" color={colors.grey[100]} fontWeight="bold" sx={{ m: "0 0 5px 0" }}>
          {"CSE5544"}
        </Typography>
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
