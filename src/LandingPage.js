import React from 'react';
import Lottie from 'react-lottie';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import animationData from './animations/landinganimation/data';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from './original';
import Typography from '@material-ui/core/Typography';
import mobileIcon from './assets/mobileIcon.svg';
import analytics from './assets/analytics.svg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import websiteIcon from './assets/websiteIcon.svg';

const useStyles = makeStyles(theme => ({
      animation: {
        maxwidth: "50em",
        minwidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        marginBottom: "0.5rem"
      },
      mainContainer: {
        marginTop: "5em"
      },
      icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]:{
          marginLeft: "1em"
        }
      },
      Subscribe:{
        [theme.breakpoints.down("sm")]: {
          marginBottom: "1em"
        }
      },
      serviceContainer: {
        marginBottom: "2em",
        [theme.breakpoints.down("sm")]: {
          padding:"3rem"
        }
      }
}));



export default function LandingPage() {

  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);




  const defaultOptions = {
  loop: true,
     autoplay: true,
     animationData: animationData,
     rendererSettings: {
       preserveAspectRatio: 'xMidYMid slice'
  }
}

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
        <Grid sm item>
          <Typography variant="h2" align="center">
            Bringing high tech softrware and innovation<br />
            into an ever evolving world.
            </Typography>
            <Grid container justify="center">
              <Grid item>
                <Button variant="contained" className={classes.Subscribe}>
                Subscribe
                  <ButtonArrow width={15} height={15} fill="red"/>
                </Button>

              </Grid>
            </Grid>

        </Grid>
        <Grid sm item className={classes.animation}>
          <div>
              <Lottie  options= {defaultOptions} height={"100%"} width={"100%"} />
          </div>
        </Grid>

        </Grid>
      </Grid>
{/*--services--*/}
      <Grid item>
        <Grid container direction="row" justify={matchesSM ? "center" : undefined} className={classes.serviceContainer}>
          <Grid item style={{ marginLeft: matchesSM ? "1em" : "5em", textAlign: matchesSM ? "center" : undefined }} >
          <Typography variant="h4">
            Custom Web / App Development
          </Typography>
          <Typography variant="subtite1">
            Save Money, but more importantly Make Money.
          </Typography>
          <Typography variant="subtitle1">
            Analytics and complex Solutions{" "}
            <span>Expert Consulting </span>
          </Typography>
          </Grid>
          <Grid item>
            <img className={classes.icon} alt="web" src={mobileIcon} />
          </Grid>
          </Grid>
            </Grid>

          {/*--ios/galaxy--*/}
          <Grid item>
            <Grid container direction="row" justify={matchesSM ? "center" : "flex-end"} className={classes.serviceContainer}>
              <Grid item style={{ marginRight: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }} >
              <Typography variant="h4">
                Custom Web / App Development
              </Typography>
              <Typography variant="subtite1">
                Save Money, but more importantly Make Money.
              </Typography>
              <Typography variant="subtitle1">
                From Google Analytics to Amazon Solutions{" "}
                <span>Expert Consulting </span>
              </Typography>
              </Grid>
              <Grid item>
                <img className={classes.icon} alt="stocks" src={analytics} />
              </Grid>
              </Grid>
                </Grid>

                <Grid item>
                  <Grid container direction="row" justify={matchesSM ? "center" : "undefined"} className={classes.serviceContainer}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }} >
                    <Typography variant="h4">
                      Custom Web / App Development
                    </Typography>
                    <Typography variant="subtite1">
                      Save Money, but more importantly Make Money.
                    </Typography>
                    <Typography variant="subtitle1">
                      From Google Analytics to Amazon Solutions{" "}
                      <span>Expert Consulting </span>
                    </Typography>
                    </Grid>
                    <Grid item>
                      <img className={classes.icon} alt="web" src={websiteIcon} />
                    </Grid>
                    </Grid>
                    </Grid>



    </Grid>



);
}
