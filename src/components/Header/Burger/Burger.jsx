import './Burger.scss';
import { useState } from 'react';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import MenuIcon from '@mui/icons-material/Menu';

export default function NestedList() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List component="nav">
      <ListItemButton onClick={handleClick} className="burger">
        <ListItemIcon>
          <MenuIcon />
        </ListItemIcon>
      </ListItemButton>
      <Collapse
        className="burger_collapse"
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <List component="div">
          <ListItemButton className="burger_collapse_singup">
            <ListItemText primary="Singn Up!" />
          </ListItemButton>
          <ListItemButton className="burger_collapse_btn" href="#aboutUs">
            <ListItemText primary="About Us" />
          </ListItemButton>
          <ListItemButton className="burger_collapse_btn" href="#subscribe">
            <ListItemText primary="Subscribe" />
          </ListItemButton>
          <ListItemButton className="burger_collapse_btn" href="/">
            <ListItemText primary="Property" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
