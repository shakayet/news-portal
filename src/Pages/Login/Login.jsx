import React, { useContext } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then(res => {
                console.log(res.user);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <Navbar />
            <h2 className='text-3xl my-10'>Please Login</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body mx-auto" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='text-center pb-5'>Don't have an account? <Link to='/register'><span className='text-blue-500'>Register</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
