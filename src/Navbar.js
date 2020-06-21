import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from  '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';





function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0

  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}



const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2.3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1.6em"
    }

  },
  logo: {
    height: "6.5em",
    [theme.breakpoints.down("md")]: {
      height: "5.5em"
    },
    [theme.breakpoints.down("xs")]:{
      height: "4.5em"
    }

  },
  logoContainer: {
    padding: 0
  },
  tabContainer: {

},

  tab: {

    minWidth: 12,
    padding: "1rem",

    "&:hover": {
      backgroundColor: "gray",
      borderRadius: "4rem",
      textDecoration: "none"
    }

  },
  button: {
      ...theme.typography.estimate,
      borderRadius: "50px",

  },
  drawerIcon : {
   height: "50px",
   width: "40px",
  },
  drawerIconContainer: {

    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawer: {
    backgroundColor: theme.palette.success.main
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white"
  },
  appBar: {
    zIndex: theme.zIndex.modal +1
  }

}));


export default function Navbar(props) {

    const classes = useStyles();
    const [value, setValue] = useState(0);
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false)
    const matches = useMediaQuery(theme.breakpoints.down("md"))



    const handleChange = (e, newValue) => {
      setValue(newValue);
    };


      useEffect(() => {
      if (window.location.pathname === "/" && value !== 0) {
        setValue(0);
      } else if
      (window.location.pathname === "/AboutUs" && value !== 1) {
        setValue(1);
      }
    }, [value]);

const tabs = (
  <React.Fragment>
<Typography variant = "h3" color="secondary">

<Tabs value={value} onChange={handleChange} className={classes.tabContainer}>

<Tab className={classes.tab} component={Link} to="/" label="Home" />
<Tab className={classes.tab} component={Link} to="/AboutUs" label="AboutUs" />

</Tabs>

</Typography>
  </React.Fragment>


);

const drawer = (
  <React.Fragment>
        <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{
           paper: classes.drawer,
           }}
        >
        <div className={classes.toolbarMargin} />
          <List disablePadding>
            <ListItem onClick={() => {setOpenDrawer(false); setValue(0)}}
            divider
            button
            component={Link}
            to="/"
            selected={value === 0}
            >
            <ListItemText className={classes.drawerItem}
            disableTypography> Home </ListItemText>
            </ListItem>
            <ListItem onClick={() => {setOpenDrawer(false); setValue(1)}}
            divider
            button
            component={Link}
            to="/AboutUs"
            selected={value === 1}
            >
            <ListItemText className={classes.drawerItem}
            disableTypography>
              AboutUs
            </ListItemText>
            </ListItem>
          </List>
        </SwipeableDrawer>
          <IconButton className={classes.drawerIconContainer}
          onClick={() => setOpenDrawer(!openDrawer)} >
            <MenuIcon className={classes.drawerIcon}/>
          </IconButton>

  </React.Fragment>

)

    return (
      <React.Fragment>
      <ElevationScroll>

      <AppBar position="fixed" color="white" className={classes.appBar}>

        <ToolBar disableGutters>
        <Button component={Link} to="/" onClick={() => setValue(0)}>
      // image was here
       </Button>


       {matches ? drawer : tabs}

          <Link to="/cart" className="cart-icon">
          <ButtonContainer>
          <span>
              <i className="fas fa-cart-plus " />
            my cart
            </span>
          </ButtonContainer>

        </Link>

      </ToolBar>
      </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      </React.Fragment>
    );
  }
