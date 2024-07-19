import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  listItem: {
    color: 'red', // Set text color to red
    '&:hover': {
      backgroundColor: '#ffcccc',
      marginBottom: '10px',
      // Change background color on hover
    },
  },
}));

const SideNav = () => {
  const classes = useStyles();
  const navigate = useNavigate(); // Access the navigate function

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8081/client/logout', {
        method: 'POST',
        credentials: 'include', // Include cookies in the request
      });
      if (response.ok) {
        navigate('/login'); // Redirect to login page using navigate function
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={true} // Always open
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          {['Home', 'About', 'Contact', 'Profile', 'Courses', 'Log out'].map((text, index) => (
            <ListItem
              button
              key={text}
              className={text === 'Home' ? classes.selectedListItem : classes.listItem} // Apply selected style to Home
              onClick={text === 'Log out' ? handleLogout : null} // Call handleLogout function on logout click
            >
              {text === 'Log out' ? (
                <ListItemText primary={text} />
              ) : (
                <Link to={`/${text.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemText primary={text} />
                </Link>
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default SideNav;
