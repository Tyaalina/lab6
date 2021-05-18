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

  {/* Берём из этой ветки */}
  const handleClickMixer = () => {
    alert('Зачем нажал?')
  }

  return (
    <div className={classes.root}>
      <Paper elevation={5} className={classes.paper}>
      <Avatar alt="python"/>
      <Typography id="discrete-slider" gutterBottom>
        Микшер громкости
      </Typography>
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
        <Button variant="contained" color="secondary" fullWidth="true" onClick={handleClickMixer}>
        {/* Берём из мастера */}
        Если ты нажмёшь сюда, то будет страшно
      </Button>
      {/* Берём из двух мест */}
      <Divider />
      <Avatar>
            <WorkIcon />
      </Avatar>
      <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      <TextField id="standard-basic" label="Name" />
      </Paper>
    </div>
  );
}

export default App;
