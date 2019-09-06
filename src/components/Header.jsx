import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = value => {
    // console.log('toggleDrawer.value: ', value);
    setDrawerOpen(value);
  };

  const handleScroll = () => {
    // console.log('scrolling:',window.scrollY);
    if (window.scrollY > 0) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  return (
    <AppBar
      position='fixed'
      style={{
        backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
        boxShadow: 'none',
        padding: '10px 0px'
      }}
    >
      <Toolbar>
        <div className='header_logo'>
          <div className='font_righteous header_logo_venue'>The Venue</div>
          <div className='herader_logo_title'>Musical Events</div>
        </div>
        <IconButton
          aria-label='Menu'
          color='inherit'
          onClick={() => {
            console.log('open');
            toggleDrawer(true);
          }}
        >
          <MenuIcon />
        </IconButton>
        <SideDrawer open={drawerOpen} onClose={toggleDrawer}></SideDrawer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
