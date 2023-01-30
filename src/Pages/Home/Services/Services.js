import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='px-4'>
            <div className='text-center mb-6'>
                <p className='text-2xl font-bold'>Services</p>
                <h2 className='text-3xl md:text-5xl font-bold text-orange-600'>Our Services Area</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, commodi ipsum molestias eos culpa et praesentium magnam! Minus, aliquid ab?</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;