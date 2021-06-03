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
        backgroundImage: 'url(https://cookieandkate.com/images/2019/12/fresh-ginger-tea-recipe-3-768x1154.jpg)',
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
        margin: theme.spacing(1, 0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        color: '#18353B',
        fontFamily: [
            'Arial',
            'Roboto',
            '"Helvetica"',
            'sans-serif'
          ].join(','),
    },
}));

export default function Article() {
    const classes = useStyles();

    return (
        <Grid container component="main">
            <CssBaseline />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Grid item className={classes.paper}>
                    <Typography component="h1" variant="h4" className={classes.text}>
                        Ginger Tea
                    </Typography>
                </Grid>
                <Grid item className={classes.paper}>
                    <Typography component="h1" className={classes.text}>
                        Ginger tea is a warming drink for cool weather. It’s a nice morning or afternoon pick-me-up, yet also a relaxing evening sipper. If you’re in the mood for a seasonal drink that isn’t heavy like hot chocolate can be, try ginger tea!

                        Ginger tea is a non-alcoholic, non-caffeinated, and virtually calorie-free drink (unless you add a sweetener). So, it’s a great option if you’re cutting back on any of the above.

Ginger tea aids digestion, helps soothe upset stomachs, and can reduce nausea. It might offer some relief to women with morning sickness as well. </Typography>
                </Grid>
                <Grid item className={classes.paper}>
                    <Typography>
                        <Typography variant="h6" className={classes.text}>
                            How to Make Ginger Tea
                        </Typography>
                        <Grid container>
                            <Grid item className={classes.paragraph}>
                            <Typography className={classes.text}>
                            I tried several ginger tea methods, and the easiest way is truly the best way. Here’s how to do it:
                            </Typography>
                            </Grid>
                            <Grid item className={classes.text}>
                                  <li>Thinly slice your fresh ginger. You don’t need to peel it first, but do rinse it and scrub off any visible dirt. Plan on about using about a one-inch piece of ginger per cup of tea.</li>
                                <li>In a saucepan, combine the ginger with fresh water (use one cup of water per serving).</li>
                                <li>Bring the mixture to a boil over high heat. Reduce the heat as necessary to maintain a gentle simmer.</li>
                                <li>Simmer for five minutes (or up to 10 minutes, if you want extra-strong tea). I usually think it’s pungent enough at five minutes.</li>
                                <li>Pour the tea through a fine sieve to catch all of the ginger. If desired, serve your tea with a thin round of lemon or orange for some complementary acidity. You might also appreciate a light drizzle of honey or maple syrup, which will temper the fiery ginger flavor.</li>
                            </Grid>
                        </Grid>
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
        </Grid>
    );
}