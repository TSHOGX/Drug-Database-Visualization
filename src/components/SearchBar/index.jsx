import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import HealingIcon from '@mui/icons-material/Healing';


function SearchBar({ focused, setFocusedNode, selected, setSelected, netData }) {

  const [value, setValue] = React.useState();  // can be removed, same as focused?
  // const [inputValue, setInputValue] = React.useState();

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const searchData = getArrayID(netData.nodes);
  const filteredData = netData.nodes.filter(item => {
    return selected.includes(String(item.id));
  });

  const handleClickIcon = (id) => {
    setSelected(selected.filter(item => String(item) !== id));
  };

  const handleClickList = (id) => {
    setFocusedNode(id);  // can be sure it is in Dataset 
  };

  const handleSearched = (newValue) => {
    if (selected.includes(String(newValue))==false) {
      setSelected(selected.concat(String(newValue)));
    }
    if (searchData.includes(String(newValue))) {
      setFocusedNode(String(newValue));
    }
    setValue(newValue);
  }

  return (
    <Stack spacing={1} sx={{ width: "90%", margin: "0 auto"}} >
      {/* <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div> */}
      {/* <div>{`inputValue: '${inputValue}'`}</div> */}


      {/* Search Bar */}
      <br />
      <Typography variant="h3"> Search Drug </Typography>
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => handleSearched(newValue)}
        id="search-bar"
        options={searchData}
        renderInput={(params) => <TextField {...params} label="Search Drug" />}
      />


      {/* Enable Check Box */}
      <br /> <br />
      <Typography variant="h3"> Selected Drug List </Typography>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={dense}
              onChange={(event) => setDense(event.target.checked)}
            />
          }
          label="Enable dense"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={(event) => setSecondary(event.target.checked)}
            />
          }
          label="Show detail infomation"
        />
      </FormGroup>


      {/* Selected List */}
      <List dense={dense}>
        {filteredData.map(item => (
          <FormGroup row>
            <ListItemButton
              sx={{ width: "60%", margin: "0 auto"}}
              onClick={() => handleClickList(String(item.id))}
            >
              <ListItemIcon>
                <HealingIcon />
              </ListItemIcon>
              <ListItemText
                primary={String(item.id)}
                secondary={secondary ? String(item.info) : null}
              />
            </ListItemButton>
            <IconButton 
              edge="end" aria-label="delete" sx={{ width: "30%", margin: "0 auto"}}
              onClick={() => handleClickIcon(String(item.id))}
            >
              <DeleteIcon />
            </IconButton>
          </FormGroup>
        ))}
      </List>
    </Stack>
  );
}


function getArrayID(data) {
  var arrayID = [];
  data.forEach((element) => {
    arrayID.push(String(element.id));
  });
  return arrayID;
}


export default SearchBar;
