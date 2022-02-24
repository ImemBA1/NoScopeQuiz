import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {urlBackend} from "../../service/serviceUtils";

const AdminLogin = () => {
    const {register, handleSubmit, errors} = useForm();
    const navigate = useNavigate();

    async function login(username, password) {
        return (await fetch(`${urlBackend}/admin/login/${username}/${password}`)).json()
    }

    const onSubmit = user => {
        console.log(user);
        login(user.username, user.password).then(res => {
            if (res.username !== null) {
                navigate('/admin/dashboard');
            } else {
                alert();
            }
        });
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card card-body">
                        <h3 className="text-center mb-4">Admin Login</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" name="username"
                                       ref={register({required: true})}/>
                                {errors.username && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="text" className="form-control" name="password"
                                       ref={register({required: true})}/>
                                {errors.password && <span className="text-danger">This field is required</span>}
                            </div>
                            <input type="submit" className="btn btn-primary btn-block" value="Login"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default AdminLogin;

