import React from 'react';
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({ service }) => {
    const { _id, img, title, price, description } = service;
    return (
        <div className="card bg-base-100 shadow-xl border p-4">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body p-4">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='text-orange-600 font-bold'>price:{price}</p>
                <p>{description}</p>
                <div className="card-actions justify-between mt-4">
                    <div>
                        <div className="badge badge-outline mr-2">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                    <div className='text-orange-600'>
                        <BsArrowRight/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;