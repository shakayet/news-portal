import React, { useContext } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    
    const { createUser } = useContext(AuthContext);
    
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        const name = form.elements.name.value;
        const photo = form.elements.photo.value;

        console.log(name, photo, password, email);
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            // Optionally reset the form or provide feedback to the user here
        })
        .catch(error => {
            console.error(error);
        });
    }
    
    return (
        <div>
            <Navbar />
            <h2 className='text-3xl my-10'>Please Register </h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body mx-auto" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className='text-center pb-5'>Already have an account <Link to='/login'><span className='text-blue-500'>Login</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
