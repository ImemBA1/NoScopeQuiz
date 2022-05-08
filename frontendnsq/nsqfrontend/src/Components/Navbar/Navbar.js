import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import icon from "../../Images/iconNSQ.png"
import {Link} from "@material-ui/core";
import {urlBackend} from "../../service/serviceUtils";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: 'black',
        marginRight: '10px',
    },
    img: {
        width: '60px',
        height: '60px',
        marginRight: '10px',
        fontStyle: 'italic',
    },
    bgAppBar: {
        backgroundColor: '#DEB887FF'
    }
}));

export default function Navbar() {
    const classes = useStyles();
    const user = localStorage.getItem('player');
    let isAdmin = false;
    const logout = () => {
        localStorage.removeItem('player');
        window.location.reload();
    };
    if(user) {

        const reponse = fetch(`${urlBackend}/player/${user}`)
            .then(response => response.json())
            .then(user => {
                return user.role;
            });

        const getUser = async () => {
            const role = await reponse;
            if (role === 'admin') {
                isAdmin = true;
            }
        };
        getUser();
    }
    console.log(isAdmin);
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bgAppBar}>
                <Toolbar>
                    <img src={icon} alt="iconeNSQ" className={classes.img}/>
                    <Typography variant="h5" className={classes.title}>
                        No Scope Quiz
                    </Typography>

                    {user != null || <>
                        <Link href="/register" underline="hover">
                            <Typography variant="h6" className={classes.title}>
                                S'inscrire
                            </Typography>
                        </Link>
                        <Link href="/login" underline="hover">
                            <Typography variant="h6" className={classes.title}>
                                Se connecter
                            </Typography>
                        </Link>
                    </>}
                    {user == null || <>
                        <Link href="/" underline="hover">
                            <Typography variant="h6" className={classes.title}>
                                Accueil
                            </Typography>
                        </Link>
                        {isAdmin || <>
                            <Link href="/liste-joueurs" underline="hover">
                                <Typography variant="h6" className={classes.title}>
                                    Joueurs
                                </Typography>
                            </Link>
                            <Link href="/ajout-question" underline="hover">
                                <Typography variant="h6" className={classes.title}>
                                    Joueurs
                                </Typography>
                            </Link>
                        </>}
                        <Link href="/login" onClick={logout} underline="hover">
                            <Typography variant="h6" className={classes.title}>
                                Se déconnecter
                            </Typography>
                        </Link>
                    </>}
                </Toolbar>
            </AppBar>
        </div>
    );
}
