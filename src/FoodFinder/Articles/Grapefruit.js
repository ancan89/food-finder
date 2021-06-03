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
    backgroundImage: 'url(https://images.unsplash.com/photo-1517281920527-f3a1a53a9af3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=982&q=80)',
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
            Grapefruit
                    </Typography>
        </div>
        <div className={classes.paper}>
          <Typography component="h1" className={classes.text}>
          Grapefruit (Citrus paradisi Mcfad) is a perenifolium tree 5-6 m high with a fruit of about 15 cm in diameter, protected by the peel we can find about 11-14 segments (carpels), each of which is surrounded by a membrane and each containing the juice sacs, as well as the seeds. The fruit is made up of numerous compounds, and is known to have nutritive value because of the presence of various vitamins and minerals, among other chemicals. The fruit is also used in the field of gastronomy. Information has been accumulated regarding the participation of the fruit structures in a variety of biomedical, antigenotoxic and chemopreventive effects, surely related with the presence of the numerous chemicals that have been determined to constitute the fruit. Such studies have been carried out in different in vitro and in vivo experimental models, and in a few human assays. The information published so far has shown interesting results, therefore, the aims of the present review are to initially examine the main characteristics of the fruit, followed by systematization of the acquired knowledge concerning the biomedical, antigenotoxic and chemopreventive effects produced by the three main structures of the fruit: peel, seed, and pulp.
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
                <li>Lycopene</li>
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