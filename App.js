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

function getSteps() {
  return ['Прийти на пару', 'Сделать лабу', 'Получить пятёрку'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Приходим в аудиторию 902а';
    case 1:
      return 'Делаем задание выданное на лабе';
    case 2:
      return 'Радуемся!';
    default:
      return 'Остаёмся в замешательсве';
  }
}

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Paper elevation={5} className={classes.paper}>
      <Avatar alt="python"/>
      <Typography id="discrete-slider" gutterBottom>
        {/* Берём из мастера */}
        Можно взять и подвигать здесь
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
        {/* Берём из этой ветки' */}
        <Button variant="contained" variant="outlined" color="primary" fullWidth="true">
        Не жми
      </Button>
      {/* Берём из обоих' */}
      <Avatar className={classes.purple}>OP</Avatar>
      <TextField id="standard-basic" label="Name" />
      </Paper>
    </div>
  );
}

export default App;
