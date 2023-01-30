import React from 'react';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import '../Banner/Banner.css';

const BannerItem = ({slider}) => {
    const {img, prev, next, id} = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='img-gradient'>
                <img src={img} className="w-full" />
            </div>
            <div className="slider_arrow_parent absolute flex justify-end transform -translate-y-1/2 left-5 right-10 bottom-5 xs:bottom-24">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5 arrow_left slider_arrow hover:bg-slate-300"><BsArrowLeft className='text-xl' /></a>
                <a href={`#slide${next}`} className="btn btn-circle bg-orange-600 hover:bg-orange-400 slider_arrow"><BsArrowRight className='text-xl' /></a>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 bottom-0 top-2/4">
                <h1 className='xl:text-6xl lg:text-5xl md:text-4xl xs:text-2xl font-bold leading-snug  text-white'>
                    Affordable <br />
                    Price For Car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end text-white w-6/12 transform -translate-y-1/2 left-24 top-1/2">
                <p className='mt-12 md:mt-16 md:block xs:hidden'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="slider_btn_parent absolute flex justify-end transform -translate-y-3/4 left-24 top-2/3 xl:mt-0 md:mt-8">
                <button className="btn btn-error text-white mr-5 btn_text ">Discover More</button>
                <button className="btn btn-outline text-white hover:bg-red-400 doctor_cta btn_text">Latest Project</button>
            </div>
        </div>
    );
};

export default BannerItem;