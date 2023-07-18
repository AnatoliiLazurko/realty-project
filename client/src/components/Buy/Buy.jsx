import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRealty } from '../realtySlice';
import { useParams } from 'react-router-dom';

const Buy = () => {

    const { category } = useParams();
    const realtyCategory = category.replace(/-/g, ' ');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRealty('buy'));
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
        <div className='buy'>
            <h1>{realtyCategory}</h1>
            {filteredRealty.map(item => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
}

export default Buy;
