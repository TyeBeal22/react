

import React, { useState} from 'react';
import Subscribe from './Subscribe.css';
import {makeStyles, useTheme} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/TextField';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/emailIcon';
import airplane from '../assets/send.svg';


const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em"
  }
}));


export default function Subs(){

  const classes = useStyles()
  const theme = useTheme()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  return (

    <Grid container direction="row">
    <Grid item container direction="column" justify="center" lg={3}>
    <Grid item>
      <Typography variant="h2" style={{ lineHeight: 1}}>
        Contact Us
      </Typography>
      <Typography
      variant="body1"
      style={{ color: theme.palette.common.blue }}
      >
      Were Waiting.
      </Typography>
    </Grid>
    <Grid item container>
    <Grid item>
      <img src={phoneIcon} alt="phone" style={{ marginRight: "0.5rem"}} />
    </Grid>
    <Grid item>
      <Typography variant="body1" style={{color: theme.palette.common.blue}}>
        703-555-5555
      </Typography>
    </Grid>
    </Grid>
    <Grid item container>
    <Grid item>
      <img src={emailIcon} alt="envelope"
      style={{ marginRight: "0.5rem",
      verticalAlign: "bottom" }}
      />

    </Grid>
    <Grid item>
      <Typography variant="body1" style={{color: theme.palette.common.blue}}>
        darthBeal@galaxyFarAway.com
      </Typography>
    </Grid>
    </Grid>
    <Grid item container>
    <Grid item>
    <TextField label="Name" id="name"
    value={name}
    onChange={(event) => setName(event.target.value)}
    />
    </Grid>
    <Grid item>
    <TextField label="Email" id="email" value={email}
    onChange={(event) => setEmail(event.target.value)}
    />
    </Grid>
    <Grid item>
    <TextField label="Phone" id="phone" value={phone}
    onChange={(event) => setPhone(event.target.value)}
    />
    </Grid>
    </Grid>
    <Grid item>
      <TextField value={message}
      multiline
      rows={6}
      id="message" onChange={event =>
      setMessage(event.target.value)}
      />
    </Grid>
    <Grid item>
    <Button variant="contained">Subscribe
    <img src={airplane} alt="airplane" />
    </Button>
    </Grid>
        </Grid>
    <Grid item container className={classes.background} lg={9}> </Grid>


    </Grid>
  );
}
