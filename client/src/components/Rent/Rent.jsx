import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { fetchRealty } from '../realtySlice';
import RentRealties from './RentRealties';
import mainImage from '../../images/page-rent.jpg';
import { Empty, Result, Spin } from 'antd';

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
                <img src={mainImage} alt="Page rent image"/>
                <div className="overlay">
                    <h1>Discover your perfect realty</h1>
                    <p>You are currently on the rent page in the <span>{realtyCategory}</span> category</p>
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
                        <RentRealties key={item._id} realty={item} category={category} />
                    ))}
                </div>
    
            </div>
        </>
    );
}

export default Rent;
