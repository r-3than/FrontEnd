import './App.css';
import React, { useState, useEffect, Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import AddIcon from '@material-ui/icons/Add';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PublishIcon from '@material-ui/icons/Publish';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const url = "http://ethanpi:5000"

class ToggleButton extends Component{
  
  handleClick(){
      fetch(url+'/toggle').then(response => response.json());
    }
  render()
  {
    return (
    
        <div id="Toggle">
        <Button
          onClick={this.handleClick}
          fullWidth
          variant="contained"
          color="primary"
          className="submit"
        >
          <PowerSettingsNewIcon/>
        </Button>
        </div>    
    )
  }
}

class SkipButton extends Component{
  
  handleClick(){
      fetch(url+'/skip').then(response => response.json());
    }
  render()
  {
    return (
    
        <div id="Toggle">
        <Button
          onClick={this.handleClick}
          fullWidth
          variant="contained"
          color="primary"
          className="submit"
        >
          <ArrowForwardIosIcon/>
        </Button>
        </div>    
    )
  }
}

class BackButton extends Component{
  
  handleClick(){
      fetch(url+'/back').then(response => response.json());
    }
  render()
  {
    return (
    
        <div id="Toggle">
        <Button
          onClick={this.handleClick}
          fullWidth
          variant="contained"
          color="primary"
          className="submit"
        >
          <ArrowBackIosIcon/>
        </Button>
        </div>    
    )
  }
}


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: '#3b3b3b',
    padding: theme.spacing(8, 0, 6),
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
    backgroundColor: '#3b3b3b',
    padding: theme.spacing(6),
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
}));


const ITEM_HEIGHT = 48;



const LongMenu =(props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [options, setOptions] = useState(null)
  const [selectedItem, setItem] = useState(null);
  useEffect(() => {fetch(url+"/getanimations").then(response => response.json()).then(data => {setOptions(data.animations)}); },[]);
  
  
  
  const open = Boolean(anchorEl);
  useEffect(() => {setItem(props.currItem);} , []);
  if (options == null) {return <div> loading </div>}
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (item) => {
    setAnchorEl(null);
    if (item.type !== "click"){
    setItem(item);
    }
  };

  return (
    
    <div>
      <Button onClick={() => props.addItem(selectedItem)}><AddIcon/></Button>
      <Button
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Box overflow="hidden">{selectedItem}</Box>
      </Button>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '40ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem noWrap key={option} selected={option === selectedItem} onClick={() => handleClose(option)}>
            <Typography variant="inherit" noWrap>{option}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}



export default function App() {
  
  const classes = useStyles();
  const [value, setValue] = React.useState(255);
  const [currentAni, setCurrentAni] = useState([{}]);
  const handleChangeSlider = (event, newValue) => {
    console.log("hmm");
    setValue(newValue);
  };
  const handleFinalChange = (event, newValue) => {
    setValue(newValue);
    fetch(url+"/setbrightness/"+newValue)
  };
  const handleChange = (e,key,index) => {
    let temp = currentAni;
    temp[index][key] = e.target.value
    setCurrentAni([...temp])
  };
  useEffect(() => {fetch(url+'/getcurrentani').then(response => response.json()).then(data => {setCurrentAni(data.animations);  }); }, []);
  
  function addItem(item) {
    fetch(url+'/addanimation/'+item).then(response => {response.json(); fetch(url+'/getcurrentani').then(response => response.json()).then(data => {setCurrentAni(data.animations); console.log(data.animations);  }); })
    setCurrentAni([...currentAni])
  }
  function removeItem(index) {
    if (currentAni.length > 1) {
      

      fetch(url+'/removeanimation/'+index).then(response => response.json())
      let temp1 = currentAni;
      let temp = temp1.splice(index,1)[0]; //removed item
      
      setCurrentAni([...temp1])
    }
  }
  function update(index){
    const form =document.querySelector('#card'+index);
    const formData = new FormData(form);
    const aniToChange = currentAni[index]
    const dict = {}
    Object.keys(aniToChange).map((key,index) => (
      dict[key] = formData.get(key)
    ))
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ params: dict})
  };
  
  
  fetch(url+'/editanimation/'+index, requestOptions).then(response => response.json())
  }
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  return (
    <MuiThemeProvider theme={theme}>

    <React.Fragment>
    <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LongMenu currItem="Animation" addItem={addItem}/>
          <div className={classes.toolbarButtons}>
          <Button> <PublishIcon/> </Button>
          </div>
        </Toolbar>
        
      </AppBar>
      <main>
        <a> &nbsp;</a>
        
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" gutterBottom>
            Lighting control  
            </Typography>
            
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid container spacing={2} justify="center"> 
                <Grid item>
                  <BrightnessLowIcon/>
                </Grid>
                <Grid item>
                
                <Slider value={value} max={255} min={0} onChangeCommitted={handleFinalChange} onChange={handleChangeSlider} aria-labelledby="continuous-slider" style={{width:200}} />
                </Grid>
                <Grid item><BrightnessHighIcon/></Grid>
                </Grid>

                <Grid item>
                <BackButton/> 
                </Grid>
                <Grid item>
                <ToggleButton/>
                </Grid>
                <Grid item>
                <SkipButton/>
                
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md" alignItems="center">
          <Grid container spacing={2} justifyContent="center" justify="center">
            
            {currentAni.map((val,card) => (
              <Grid item key={card} xs={6} class="cancelFlex">
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent} style={{textAlign:"center"}}>
                    <form noValidate id={"card"+card}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Position: {card}
                    </Typography>
                    {Object.keys(val).map((key,index) => (
                    <Typography class="extraMarg">
                      
                      { key !== "type" ? 
                      <TextField fullWidth name={key} flag={key+index} id="outlined-basic" size="small" label={key.charAt(0).toUpperCase() + key.slice(1)} variant="outlined" onChange={(e) => handleChange(e,key,card)} value={Object.values(val)[index]} />
                      :
                      <TextField fullWidth name={key} flag={key+index} InputProps={{readOnly: true,}} id="outlined-basic" readOnly size="small" label={key.charAt(0).toUpperCase() + key.slice(1)} variant="outlined"  value={Object.values(val)[index]} />
                    }
                    </Typography>
                    ))}
                  </form>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => removeItem(card)}>
                    <DeleteForeverIcon/>
                    </Button>
                    <Button size="small" color="primary" onClick={() => update(card)}>
                      Edit
                    </Button>
                  </CardActions>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom> 
          do later
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Ethan Ray
        </Typography>

      </footer>
    </React.Fragment>
    
    </MuiThemeProvider>
  );
}
