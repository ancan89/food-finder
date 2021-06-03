import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: [
      'Arial',
      'Roboto',
      '"Helvetica"',
      'sans-serif'
    ].join(','),
  },
  image: {
    backgroundImage: 'url(https://i.imgur.com/mWYqEtb.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'contain',
    backgroundPosition: 'top',
  },
  paper: {
    margin: theme.spacing(6, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    color: '#18353B'
  },
  paragraph: {
    margin: theme.spacing(1, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    color: '#18353B'
  },
}));

export default function Article() {
  const classes = useStyles();

  return (
    <Grid container component="main">
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h4" className={classes.text}>
            Ginger
                    </Typography>
        </div>
        <div className={classes.paper}>
          <Typography component="h1" className={classes.text}>
          Numerous studies have revealed that regular consumption of certain fruits and vegetables can reduce the risk of many diseases. The rhizome of Zingiber officinale (ginger) is consumed worldwide as a spice and herbal medicine. It contains pungent phenolic substances collectively known as gingerols. 6-Gingerol is the major pharmacologically-active component of ginger. It is known to exhibit a variety of biological activities including anticancer, anti-inflammation, and anti-oxidation. 6-Gingerol has been found to possess anticancer activities via its effect on a variety of biological pathways involved in apoptosis, cell cycle regulation, cytotoxic activity, and inhibition of angiogenesis. Thus, due to its efficacy and regulation of multiple targets, as well as its safety for human use, 6-gingerol has received considerable interest as a potential therapeutic agent for the prevention and/or treatment of various diseases. Taken together, this review summarizes the various in vitro and in vivo pharmacological aspects of 6-gingerol and the underlying mechanisms.
                    </Typography>
        </div>
        <div className={classes.paper}>
          <Typography component="h1" className={classes.text}>
            HIGH IN
                    <Grid container>
              <Grid item className={classes.paragraph}>
                <li>Gingerol</li>
                <li>Zingiberene</li>
                <li>Shogaols</li>
                <li>Zingerone</li>
              </Grid>
            </Grid>
          </Typography>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  );
}