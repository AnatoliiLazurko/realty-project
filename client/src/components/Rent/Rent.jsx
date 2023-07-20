import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRealty } from '../realtySlice';
import RentRealties from './RentRealties';
import mainImage from '../../images/page-rent.jpg';

const Rent = () => {

    const { category } = useParams();
    const realtyCategory = category.replace(/-/g, ' ');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRealty('rent'));
    }, [])

    const realty = useSelector((state) => state.realty.realty);
    const isLoading = useSelector((state) => state.realty.isLoading);
    const error = useSelector((state) => state.realty.error);

    if (isLoading) {
        return '...loadign';
    }

    if (error) {
        return error;
    }


    const filteredRealty = realty.filter(item => item.category === realtyCategory);

    return (
        <>
            <div className='buy-main'>
                <img src={mainImage} alt="Page rent image"/>
                <div className="overlay">
                    <h1>Discover your perfect realty</h1>
                    <p>You are currently on the rent page in the <span>{realtyCategory}</span> category</p>
                </div>
            </div>
            <div className='realty-list'>
                
                <div className='grid-field'>
                    {filteredRealty.map(item => (
                        <RentRealties key={item._id} realty={item} category={category} />
                    ))}
                </div>
    
            </div>
        </>
    );
}

export default Rent;
