import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero mb-28 mt-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className=" rounded-lg shadow-2xl w-4/5" />
                    <img src={parts} className=" absolute w-3/5 right-4 top-1/2 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 md:mt-36 xs:mt-20'>
                    <p className="text-2xl text-orange-600 font-semibold">About us</p>
                    <h1 className="text-5xl font-bold ">Box Office News!</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary mt-6">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;