import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import icon from "../../Images/iconNSQ.png"
import {Link} from "@material-ui/core";


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

    const logout = () => {
        localStorage.removeItem('player');
        window.location.reload();
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bgAppBar}>
                <Toolbar>
                    <img src={icon} alt="iconeNSQ" className={classes.img}/>
                    <Typography variant="h5" className={classes.title}>
                        No Scope Quiz
                    </Typography>
                    <Link href="/" underline="hover">
                        <Typography variant="h6" className={classes.title}>
                            Home
                        </Typography>
                    </Link>
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
                        <Link href="/login" onClick={logout} underline="hover">
                            <Typography variant="h6" className={classes.title}>
                                Se déconnecter
                            </Typography>
                        </Link>
                    </>}
                    {/*<Link href="/quiz">*/}
                    {/*    <Typography variant="h6" className={classes.title}>*/}
                    {/*        Quiz*/}
                    {/*    </Typography>*/}
                    {/*</Link>*/}

                </Toolbar>
            </AppBar>
        </div>
    );
}
