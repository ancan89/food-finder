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
    backgroundImage: 'url(https://images.unsplash.com/photo-1568342086373-c3f512902927?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80)',
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
    <React.Fragment>
        <Grid container component="main">
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h4" className={classes.text}>
            Kale
                    </Typography>
        </div>
        <div className={classes.paper}>
          <Typography component="h1" className={classes.text}>
          Kale (Brassica oleracea var. acephala) is a cruciferous vegetable, characterized by leaves along the stem, which, in recent years, have gained a great popularity as a ´superfood´. Consequently, in a popular culture it is listed in many ´lists of the healthiest vegetables´. Without the doubt, a scientific evidences support the fact that cruciferous vegetables included in human diet can positively affect health and well-being, but remains unclear why kale is declared superior in comparison with other cruciferous. It is questionable if this statement about kale is triggered by scientific evidence or by some other factors. Our review aims to bring an overview of kale's botanical characteristics, agronomic requirements, contemporary and traditional use, macronutrient and phytochemical content and biological activity, in order to point out the reasons for tremendous kale popularity.
             </Typography>
        </div>
        <div className={classes.paper}>
          <Typography component="h1" className={classes.text}>
            HIGH IN
                    <Grid container>
              <Grid item className={classes.paragraph}>
                <li>Fiber</li>
                <li>Potassium</li>
                <li>Vitamin A</li>
                <li>Vitamin C</li>
              </Grid>
              <Grid item className={classes.paragraph}>
                <li>Zinc</li>
                <li>Copper</li>
                <li>Iron</li>
                <li>B Vitamins</li>
              </Grid>
            </Grid>
          </Typography>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
    </React.Fragment>
  );
}