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
    backgroundImage: 'url(https://images.unsplash.com/photo-1579587007203-6dc14d835970?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)',
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
            Honey
                    </Typography>
        </div>
        <div className={classes.paper}>
          <Typography component="h1" className={classes.text}>
          Indeed, medicinal importance of honey has been documented in the world's oldest medical literatures, and since the ancient times, it has been known to possess antimicrobial property as well as wound-healing activity. The healing property of honey is due to the fact that it offers antibacterial activity, maintains a moist wound condition, and its high viscosity helps to provide a protective barrier to prevent infection. Its immunomodulatory property is relevant to wound repair too. The antimicrobial activity in most honeys is due to the enzymatic production of hydrogen peroxide. However, another kind of honey, called non-peroxide honey (viz., manuka honey), displays significant antibacterial effects even when the hydrogen peroxide activity is blocked. Its mechanism may be related to the low pH level of honey and its high sugar content (high osmolarity) that is enough to hinder the growth of microbes. The medical grade honeys have potent in vitro bactericidal activity against antibiotic-resistant bacteria causing several life-threatening infections to humans. But, there is a large variation in the antimicrobial activity of some natural honeys, which is due to spatial and temporal variation in sources of nectar. Thus, identification and characterization of the active principle(s) may provide valuable information on the quality and possible therapeutic potential of honeys (against several health disorders of humans), and hence we discussed the medicinal property of honeys with emphasis on their antibacterial activities.       </Typography>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
    </React.Fragment>
  );
}