import {useForm} from 'react-hook-form';
import {urlBackend} from "../../service/serviceUtils";

const PlayerLogin = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    // navigate?

    const login = async (username, password) => {
        return (await fetch(`${urlBackend}/player/login/${username}/${password}`)).json()
    }

    const onSubmit = (user) => {
        console.log(user);
        login(user.username, user.password).then(res => {
            if (res.id !== null) {
                alert("Connexion réussie");
            } else {
                alert('Identifiants incorrects');
                // sweetalert
            }
        });
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card card-body">
                        <h3 className="text-center mb-4">Connexion Joueur</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label htmlFor={"username"}>Username</label>
                                <input type="text" className="form-control"
                                       id="username" {...register("username", {required: true})}/>
                                {errors.username && <span className="text-danger">Ce champs est requis</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor={"password"}>Mot de passe</label>
                                <input type="password" className="form-control" id="password"
                                       {...register("password", {required: true})}/>
                                {errors.password && <span className="text-danger">Ce champs est requis</span>}
                            </div>
                            <input type="submit" className="btn btn-primary btn-block" value="Connexion"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default PlayerLogin;

