import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRealty } from '../realtySlice';
import { NavLink, useParams } from 'react-router-dom';
import './realtyListStyles.css';
import mainImage from '../../images/page-buy.jpg';
import BuyRealties from './BuyRealties';
import { Empty, Result, Spin } from 'antd';
import { DialogContent } from '@mui/material';

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
        return  <div style={{ paddingBottom: '100px', paddingTop: '100px'}}>
            <Spin tip="Loading" size="large">
                <div className="content" />
            </Spin>
        </div>;
    }

    if (error) {
        return <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong."
            extra={<NavLink to='/' type="primary">Back Home</NavLink>}
        />;
    }

    const filteredRealty = realty.filter(item => item.category === realtyCategory);

    return (
        <>
            <div className='buy-main'>
                <img src={mainImage} alt="Page buy image"/>
                <div className="overlay">
                    <h1>Discover your perfect realty</h1>
                    <p>You are currently on the buy page in the <span>{realtyCategory}</span> category</p>
                </div>
            </div>
            <div className='realty-list'>
                
                {filteredRealty.length === 0 && (
                    <div style={{ paddingBottom: '100px', paddingTop: '50px' }}>
                        <Empty />
                    </div>
                )}

                <div className='grid-field'>
                    {filteredRealty.map(item => (
                        <BuyRealties key={item._id} realty={item} category={category} />
                    ))}
                </div>
    
            </div>
        </>
    );
}

export default Buy;
