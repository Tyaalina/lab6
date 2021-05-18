import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%'
  },
  paper: {
    width: '150px',
    height: 'max-content',
    margin: 'auto',
    padding: theme.spacing(4)
  },
  text: {
    margin: 'auto'
  }
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper elevation={5} className={classes.paper}>
        <Avatar alt="python">PY</Avatar>
        <Typography id="discrete-slider" gutterBottom color="error">
          Микшер громкости
      </Typography>
        <Fab variant="extended">
          <NavigationIcon className={classes.extendedIcon} />
            Navigate
        </Fab>
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>
        {/*Взять из двух*/}
        <Button variant="contained" color="secondary" fullWidth="true" href="http://edu.vstu.ru/">
          Не жми
      </Button>
        <TextField id="standard-basic" label="Name" />
        <FormControlLabel
          value="top"
          control={<Radio color="primary" />}
          label="Просто радио-кнопка"
          labelPlacement="top"
        />
        <Switch
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        {/* Взять из мастера */}
        <Button variant="contained" color="primary">
          Просто кнопка
        </Button>
      </Paper>

      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        {/* Взять отсюда */}
        <BottomNavigationAction label="Последние" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Любимчики" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Рядом" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default App;
