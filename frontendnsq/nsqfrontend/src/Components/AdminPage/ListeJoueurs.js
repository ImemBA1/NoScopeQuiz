import React, {useEffect, useState} from 'react';
import {urlBackend} from "../../service/serviceUtils";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const ListeJoueurs = () => {
    const classes = useStyles();

    const [listJoueur, setlistJoueur] = useState([]);

    const getAllJoueurs = async () => {
        const response = await fetch(`${urlBackend}/player/liste_joueurs`);
        return await response.json();
    };

    useEffect(() => {
        getAllJoueurs().then(data => {
            setlistJoueur(data);
        });
    }, []);

    console.log(listJoueur);
    return (
        <div style={{ height: 400, width: '100%' }}>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Role</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listJoueur.map((player) => (
                            <TableRow key={player.id}>
                                <TableCell component="th" scope="row">{player.id}</TableCell>
                                <TableCell>
                                    {player.username}
                                </TableCell>
                                <TableCell>
                                    {player.role}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ListeJoueurs;