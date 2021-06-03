import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    appBar: {
      backgroundColor: "#18353B",
      minHeight: "80px",
    },
    appBarFonts: {
        fontFamily: [
          'Times New Roman',
          'Roboto',
          '"Helvetica"',
          'Arial',
          'sans-serif'
        ].join(','),
    },
}));

export default function RootedInScienceAppBar() {
    const classes = useStyles();

    return ( <AppBar className={classes.appBar} position="relative">
    <Toolbar>
      <Typography variant="h4" className={classes.appBarFonts} color="inherit" noWrap>
        Rooted In Science
      </Typography>
    </Toolbar>
  </AppBar>);
}