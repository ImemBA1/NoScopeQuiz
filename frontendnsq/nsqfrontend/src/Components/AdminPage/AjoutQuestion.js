import React, {useState} from 'react';

const AjoutQuestion = () => {
    const [values, setValues] = useState({
        question: '',
        option1: '',
        option2: '',
        option3: '',
        answer: '',
        category: '',
        difficulty: '',
    });

    const [error, setError] = useState(false);
    const handleChange = (prop) => (event) => {
        setError(false);
        setValues({...values, [prop]: event.target.value});
    };
    return(
        <div>

        </div>
    // return (
    //     <div className="container">
    //         <div className="row">
    //             <div className="col-md-12">
    //                 <div className="card">
    //                     <div className="card-header">
    //                         <h4 className="card-title">Ajouter une question</h4>
    //                     </div>
    //                     <div className="card-body">
    //                         <div className="row">
    //                             <div className="col-md-12">
    //                                 <div className="form-group">
    //                                     <label>Question</label>
    //                                     <input type="text" className="form-control" placeholder="Question"/>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="row">
    //                             <div className="col-md-12">
    //                                 <div className="form-group">
    //                                     <label>Réponse</label>
    //                                     <input type="text" className="form-control" placeholder="Réponse"/>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="row">
    //                             <div className="col-md-12">
    //                                 <div className="form-group">
    //                                     <label>Catégorie</label>
    //                                     <select className="form-control">
    //                                         <option>Catégorie 1</option>
    //                                         <option>Catégorie 2</option>
    //                                         <option>Catégorie 3</option>
    //                                     </select>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="row">
    //                             <div className="col-md-12">
    //                                 <div className="form-group">
    //                                     <label>Difficulté</label>
    //                                     <select className="form-control">
    //                                         <option>Facile</option>
    //                                         <option>Moyen</option>
    //                                         <option>Difficile</option>
    //                                     </select>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="row">
    //                             <div className="col-md-12">
    //                                 <div className="form-group">
    //                                     <label>Niveau</label>
    //                                     <select className="form-control">
    //                                         <option>Niveau 1</option>
    //                                         <option>Niveau 2</option>
    //                                         <option>Niveau 3</option>
    //                                     </select>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="row">
    //                             <div className="col-md-12">
    //                                 <div className="form-group">
    //                                     <label>Nombre de points</label>
    //                                     <input type="text" className="form-control" placeholder="Nombre de points"/>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="row">
    //                             <div className="col-md-12">
    //                                 <div className="form-group">
    //                                     <label>Nombre de réponses</label>
    //                                     <input type="text" className="form-control" placeholder="Nombre de réponses"/>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="row">
    //                             <div className="col-md-12">
    //                                 <div className="form-group">
    //                                     <label>Nombre de questions</label>
    //                                     <input type="text" className="form-control" placeholder="Nombre de questions"/>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="row">
    //                             <div className="col-md-12">
    //                                 <div className="form-group">
    //                                     <label>Nombre de points</label>
    //                                     <input type="text" className="form-control" placeholder="Nombre de points"/>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="row">
    //                             <div className="col-md-12">
    //                                 <div className="form-group">
    //                                     <label>Nombre de réponses</label>
    //                                     <input type="text" className="form-control" placeholder="Nombre de réponses"/>
    //                                 </div>
    //                             </div>
    //                         </div>
    //
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    );
}