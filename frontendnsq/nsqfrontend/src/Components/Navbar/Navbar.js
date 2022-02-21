import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import icon from "../../Images/iconNSQ.png"


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color:'black'
    },
    img: {
        width: '50px',
        height: '50px',
        marginRight: '10px'
    },
    bgAppBar: {
        backgroundColor: '#DEB887FF'
    }
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bgAppBar}>
                <Toolbar>
                    <img src={icon} alt="iconeNSQ" className={classes.img}/>
                    <Typography variant="h6" className={classes.title}>
                        No Scope Quiz
                    </Typography>
                    <Button color="black">Accueil</Button>
                    <Button color="black">Se connecter</Button>
                    <Button color="black">Crée un compte</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
