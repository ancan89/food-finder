import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Search from './Components/Search.js';
import Filter from './Components/Filter.js';
import { CardActionArea } from '@material-ui/core';
import articles from './Constants/Articles';
import iWantOptions from './Constants/IWant';
import iNeedOptions from './Constants/INeed';
import friendlyForOptions from './Constants/FriendlyFor';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#18353B",
    minHeight: "80px",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: '#EFEFF6',
    padding: theme.spacing(8, 0, 6),
  },
  heroSubContent: {
      fontFamily: [
        'Times New Roman',
        'Roboto',
        '"Helvetica"',
        'Arial',
        'sans-serif'
      ].join(','),
      fontStyle: "italic"
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function FoodFinder() {
  const classes = useStyles();

  const [tags, setTags] = React.useState({
    ineed: [],
    iwant: [],
    friendlyFor: [],
    search: []
  });

  return (
    <React.Fragment>
      <CssBaseline />
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              Food Finder
            </Typography>
            <Typography variant="h5" align="center" color="textPrimary" paragraph>
              A searchable index of foods + their medicinal properties
            </Typography>
            <Typography variant="h6" align="center" className={classes.heroSubContent} color="textPrimary" paragraph>
              just want to explore? hit the space bar
            </Typography>
            <div className={classes.heroButtons} >
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Search onChange={(searchTags) => setTags({ ...tags, "search": searchTags })} />
                </Grid>
                <Grid item>
                  <Filter
                    label="I need more"
                    options={iNeedOptions}
                    onChange={(tag) => setTags({
                      ...tags,
                      "ineed": [tag]
                    })
                    } />
                </Grid>
                <Grid item>
                  <Filter
                    label="I want to"
                    options={iWantOptions}
                    onChange={(tag) => setTags({
                      ...tags,
                      "iwant": [tag]
                    })
                    } />
                </Grid>
                <Grid item>
                  <Filter
                    label="Friendly For"
                    options={friendlyForOptions}
                    onChange={(tag) => setTags({
                      ...tags,
                      "friendlyFor": [tag]
                    })
                    } />
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {articles
              .filter(article => article.tags.some(tag => [].concat.apply([], Object.values(tags)).includes(tag)))
              .map((article) => (
                <Grid item key={article.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardActionArea href={article.path}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={article.image}
                        title={article.name}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {article.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
    </React.Fragment>
  );
}