const ListeJoueurs = ({ joueurs, onDelete }) => {
  return (
    <div className="liste-joueurs">
      <h2>Liste des joueurs</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {joueurs.map(joueur => (
            <tr key={joueur.id}>
              <td>{joueur.nom}</td>
              <td>{joueur.prenom}</td>
              <td>{joueur.email}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(joueur.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};