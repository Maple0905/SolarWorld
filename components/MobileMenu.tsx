import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 7.84326H3C2.59 7.84326 2.25 7.49917 2.25 7.08423C2.25 6.66929 2.59 6.3252 3 6.3252H21C21.41 6.3252 21.75 6.66929 21.75 7.08423C21.75 7.49917 21.41 7.84326 21 7.84326Z" fill="#F6A235"/>
          <path d="M21 12.9033H3C2.59 12.9033 2.25 12.5592 2.25 12.1443C2.25 11.7293 2.59 11.3853 3 11.3853H21C21.41 11.3853 21.75 11.7293 21.75 12.1443C21.75 12.5592 21.41 12.9033 21 12.9033Z" fill="#F6A235"/>
          <path d="M21 17.9639H3C2.59 17.9639 2.25 17.6198 2.25 17.2048C2.25 16.7899 2.59 16.4458 3 16.4458H21C21.41 16.4458 21.75 16.7899 21.75 17.2048C21.75 17.6198 21.41 17.9639 21 17.9639Z" fill="#F6A235"/>
        </svg>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem className="text-orange-400 font-semibold" onClick={handleClose}>Home</MenuItem>
        <MenuItem className="font-semibold" onClick={handleClose}>About Us</MenuItem>
        <MenuItem className="font-semibold" onClick={handleClose}>Projects</MenuItem>
        <MenuItem className="font-semibold" onClick={handleClose}>Services</MenuItem>
        <MenuItem className="font-semibold" onClick={handleClose}>Contact Us</MenuItem>
      </Menu>
    </div>
  );
}
