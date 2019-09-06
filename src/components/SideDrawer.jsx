import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll';

function SideDrawer(props) {
  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    });
  };

  return (
    <div>
      <Drawer anchor='right' open={props.open} onClick={() => props.onClose(false)}>
        <List component='nav'>
          <ListItem button onClick={() => scrollToElement('featured')}>
            Event starts in
          </ListItem>
          <ListItem button onClick={() => scrollToElement('venue_info')}>
            Venue Info
          </ListItem>
          <ListItem button onClick={() => scrollToElement('highlights')}>
            Highlights
          </ListItem>
          <ListItem button onClick={() => scrollToElement('pricing')}>
            Pricing
          </ListItem>
          <ListItem button onClick={() => scrollToElement('location')}>
            Location
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default SideDrawer;
