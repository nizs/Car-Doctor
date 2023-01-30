import React from 'react';
import loginimg from '../../../assets/images/login/login.svg';
import { BsFacebook, BsLinkedin, BsGoogle } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col grid lg:grid-cols-2 md:gap-20 md:p-20">
                <div className="text-center lg:text-left">
                    <img className='p-10' src={loginimg} alt="" />
                </div>
                <div className="card w-full max-w-sm mx-auto shadow-2xl border">
                    <h1 className="text-4xl font-bold text-center mt-10">Signup</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name='name' className="input input-bordered rounded-md" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your Email" name='email' className="input input-bordered rounded-md" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered rounded-md" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-600 hover:bg-orange-400 border-0 text-white rounded-md">Signup</button>
                        </div>
                    </form>
                    <div className='mb-10'>
                        <p className='text-center'>or SignIn with</p>
                        <div className='flex justify-center my-5'>
                            <span className='text-2xl mr-3'><BsFacebook/></span>
                            <span className='text-2xl mr-3'><BsLinkedin/></span>
                            <span className='text-2xl'><BsGoogle/></span>
                        </div>
                        <p className='text-center'>Have an account? <span className='text-orange-600 font-semibold'><Link to='/login'>LogIn Here</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;