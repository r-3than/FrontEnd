import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
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
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class ToggleButton extends Component{
  
  handleClick(){
      fetch('/toggle').then(response => response.json());
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
      fetch('/skip').then(response => response.json());
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
      fetch('/back').then(response => response.json());
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


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
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
    backgroundColor: theme.palette.background.paper,
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
  useEffect(() => {fetch("/getanimations").then(response => response.json()).then(data => {setOptions(data.animations)}); },[]);
  
  
  
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
        {selectedItem}
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
          <MenuItem key={option} selected={option === selectedItem} onClick={() => handleClose(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}










export default function App() {
  
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [currentAni, setCurrentAni] = useState(0);
  useEffect(() => {fetch('/getcurrentani').then(response => response.json()).then(data => {setCurrentAni(data.animations); setLoading(false);   }); }, []);
  
  if (isLoading) 
  { return (<div className="App">Loading...</div>)};
  function addItem(item) {
    fetch('/addanimation/'+item).then(response => response.json())
    fetch('/getcurrentani').then(response => response.json()).then(data => {setCurrentAni(data.animations); setLoading(false);   }); 
  }
  function removeItem(index) {
    let temp1 = currentAni;
    let temp = temp1.splice(index,1);
    setCurrentAni([...temp1]);
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Lighting control
          </Typography>
          
          
          <LongMenu currItem="test" addItem={addItem}/>
          <div className={classes.toolbarButtons}>
          <Button> <PublishIcon/> </Button>
          </div>
        </Toolbar>
        
      </AppBar>
      <main>
        <a> &nbsp;</a>
        
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Lighting control  
            </Typography>
            
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
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
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            
            {currentAni.map((val,card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Position: {card}
                    </Typography>
                    {Object.keys(val).map((key,index) => (
                    <Typography>
                      {key.charAt(0).toUpperCase() + key.slice(1)} : {Object.values(val)[index]}
                    </Typography>
                    ))}
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => removeItem(card)}>
                    <DeleteForeverIcon/>
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom> 
          do later
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Ethan Ray
        </Typography>

      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
