import { Button, Carousel } from 'antd';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './detailsStyles.css';
import DetailsForm from './DetailsForm';

const BuyDetails = () => {

    const { id, category } = useParams();
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

    const goToNext = () => {
        carouselRef.current.next();
    };

    const goToPrev = () => {
        carouselRef.current.prev();
    };

    return (
        <div className='details-page'>
            <div className='nav-back'>
                <Link to={`/buy/${category}`}><i className='fa fa-long-arrow-left'></i>Back to search</Link>
                <p>For Buy <i className='fa fa-angle-right'></i> {category}</p>
            </div>
            <div style={{ position: 'relative' }}>
                <Carousel
                    className='carousel'
                    autoplay
                    ref={carouselRef}
                >
                    {images.map(item => (
                        <div style={{ position: 'relative' }} key={item.title}>
                            <img src={item.image} alt={item.title} /> 
                        </div>
                    ))}
                </Carousel>

                <div className='carousel-buttons'>
                    <button onClick={goToPrev}><i className='fa fa-angle-left'></i></button>
                    <button onClick={goToNext}><i className='fa fa-angle-right'></i></button>
                </div>
                
            </div>

            <div className='realty-info'>
                <div className='info'>
                    <div className='info-header'>
                        <p className='info-title'>{realty.title}</p>
                        <p className='info-price'>{realty.price}</p>
                    </div>
                    <p className='info-address'>{realty.address}</p>
                    <p className='info-square'>{realty.square} square meters</p>
                    <p className='info-rooms'><i className="fa fa-bed"></i> {realty.rooms} bedrooms</p>

                    <h3>Description</h3>
                    <p className='info-description'>{realty.description}</p>
                </div>
                <div>
                    <DetailsForm />
                </div>
            </div>
        </div>
    );
}

export default BuyDetails;
