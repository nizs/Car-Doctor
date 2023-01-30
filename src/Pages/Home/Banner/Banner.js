import React from 'react';
import bannerimg1 from '../../../assets/images/banner/1.jpg';
import bannerimg2 from '../../../assets/images/banner/2.jpg';
import bannerimg3 from '../../../assets/images/banner/3.jpg';
import bannerimg4 from '../../../assets/images/banner/4.jpg';
import bannerimg5 from '../../../assets/images/banner/5.jpg';
import bannerimg6 from '../../../assets/images/banner/6.jpg';
import BannerItem from './BannerItem';

const Banner = () => {
    const bannerData = [
        {
            img:bannerimg1,
            id:1,
            prev:6,
            next:2
        },
        {
            img:bannerimg2,
            id:2,
            prev:1,
            next:3
        },
        {
            img:bannerimg3,
            id:3,
            prev:2,
            next:4
        },
        {
            img:bannerimg4,
            id:4,
            prev:3,
            next:5
        },
        {
            img:bannerimg5,
            id:5,
            prev:4,
            next:6
        },
        {
            img:bannerimg6,
            id:6,
            prev:5,
            next:1
        }
    ]
    return (
        <div className="carousel w-full rounded-2xl">
            {
                bannerData.map(slider => <BannerItem
                    key={slider.id}
                    slider={slider}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;