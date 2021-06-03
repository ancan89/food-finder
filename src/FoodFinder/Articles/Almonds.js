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
    backgroundImage: 'url(https://images.unsplash.com/photo-1615485737651-580c9159c89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1002&q=80)',
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
            Almonds
                    </Typography>
        </div>
        <div className={classes.paper}>
          <Typography component="h1" className={classes.text}>
          An increase in the prevalence of Alzheimer's disease (AD) as a multifactorial neurodegenerative disorder is an almost obvious issue in the world. Researches on natural products for finding effective drugs to prevent the disease are in progress. There is special attention to the three types of nuts including almond, hazelnut and walnut in manuscripts of traditional Persian medicine (PM) as the preventive agents against brainatrophy and memory loss. The purpose of this study is a pharmacological review of their bioactive constituents and introducing the value of these nuts as the effective supplements and natural medicinal foods in AD patients. Databases including PubMed and ScienceDirect were searched in title, abstract and keywords from year 2000 to present for AD-related researches on these tree nuts, their major phytochemicals and their mechanisms of action. As result, almond, hazelnut and walnut provide macronutrients, micronutrients, and phytochemicals which affect several pathways in AD pathogenesis such as amyloidogenesis, tau phosphorylation, oxidative stress, cholinergic pathways, and some non-target mechanisms including cholesterol lowering and anti-inflammatory properties, as well as effect on neurogenesis. These nuts are recommended in PM for their brain-protective activity and particularly reversing brain atrophy in case of hazelnut. The therapeutical statements of PM scholars mentioned in their books are based on their clinical observations with support of a long history of experiences. Beyond the molecular activities attributed to the phytochemicals, the use of these tree nuts could be more considered in scientific researches as the effective nutrients for prevention or even management of AD.           </Typography>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
    </React.Fragment>
  );
}