'use client'

import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

const AppBarMenu = () => {
  // Based on the MUI basic menu example
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        id="menu-button"
        aria-controls={open ? 'menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ 'aria-labelledby': 'menu-button', }}
      >
        <MenuItem onClick={handleClose}><Link href="/user">User</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/posts">Posts</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/">Home</Link></MenuItem>
      </Menu>
    </>
  );
}



export default AppBarMenu;