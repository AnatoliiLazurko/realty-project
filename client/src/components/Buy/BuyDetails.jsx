import { Carousel } from 'antd';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const BuyDetails = () => {

    const { id } = useParams();
    const [images, setImages] = useState([]);
    const [realty, setRealty] = useState([]);
    const carouselRef = useRef();

    const getImages = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/realty/${id}/images`);
            setImages(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    const getRealty = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/realty/${id}`);
            setRealty(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getImages();
        getRealty();
    }, [id])

    // const goToNext = () => {
    //     carouselRef.current.next();
    // };

    // const goToPrev = () => {
    //     carouselRef.current.prev();
    // };

    return (
        <div>
            <Carousel
                autoplay className='carousel'
                
                ref={carouselRef}
            >
                {images.map(item => (
                    <div>
                        <img src={item.image} alt="" />
                        {/* <div className='carousel-buttons'>
                            <div className='prev-button' onClick={goToPrev}>
                                Попередній
                            </div>
                            <div className='next-button' onClick={goToNext}>
                                Наступний
                            </div>
                        </div> */}
                    </div>
                ))}
            </Carousel>
            
        </div>
    );
}

export default BuyDetails;
