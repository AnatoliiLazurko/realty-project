import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRealty } from '../realtySlice';
import { useParams } from 'react-router-dom';
import './realtyListStyles.css';

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
        <>
            <div className='buy-main'>
                <h2>{realtyCategory}</h2>
            </div>
            <div className='realty-list'>
                
                <div className='grid-field'>

                    <div className="card-realty">
                        <div className="card-info">
                            <img src="https://imperial-hotel.org/upload/iblock/467/yfcp1uj2ua0qq1s5dp9ruqxigirp8tmy.jpg" alt="Cinque Terre"/>
                            <div className="about-realty">
                                <p className='title'>Single-Family Home</p>
                                <p className='price'>$380,000</p>
                                <p className='square'>34 m2 | 3 rooms</p>
                                <p className='address'>Lewin Road 84</p>
                            </div>
                        </div>
                    </div>

                    <div className="card-realty">
                        <div className="card-info">
                            <img src="https://imperial-hotel.org/upload/iblock/467/yfcp1uj2ua0qq1s5dp9ruqxigirp8tmy.jpg" alt="Cinque Terre"/>
                            <div className="about-realty">
                                <p className='title'>Single-Family Home</p>
                                <p className='price'>$380,000</p>
                                <p className='square'>34 m2 | 3 rooms</p>
                                <p className='address'>Lewin Road 84</p>
                            </div>
                        </div>
                    </div>

                    <div className="card-realty">
                        <div className="card-info">
                            <img src="https://imperial-hotel.org/upload/iblock/467/yfcp1uj2ua0qq1s5dp9ruqxigirp8tmy.jpg" alt="Cinque Terre"/>
                            <div className="about-realty">
                                <p className='title'>Single-Family Home</p>
                                <p className='price'>$380,000</p>
                                <p className='square'>34 m2 | 3 rooms</p>
                                <p className='address'>Lewin Road 84</p>
                            </div>
                        </div>
                    </div>

                    <div className="card-realty">
                        <div className="card-info">
                            <img src="https://imperial-hotel.org/upload/iblock/467/yfcp1uj2ua0qq1s5dp9ruqxigirp8tmy.jpg" alt="Cinque Terre"/>
                            <div className="about-realty">
                                <p className='title'>Single-Family Home</p>
                                <p className='price'>$380,000</p>
                                <p className='square'>34 m2 | 3 rooms</p>
                                <p className='address'>Lewin Road 84</p>
                            </div>
                        </div>
                    </div>

                    <div className="card-realty">
                        <div className="card-info">
                            <img src="https://imperial-hotel.org/upload/iblock/467/yfcp1uj2ua0qq1s5dp9ruqxigirp8tmy.jpg" alt="Cinque Terre"/>
                            <div className="about-realty">
                                <p className='title'>Single-Family Home</p>
                                <p className='price'>$380,000</p>
                                <p className='square'>34 m2 | 3 rooms</p>
                                <p className='address'>Lewin Road 84</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
    
            </div>
        </>
    );
}

export default Buy;
