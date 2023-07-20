import React from 'react';

const RentRealties = ({ realty, category }) => {
    return (
        <div className="card-realty">
            
                <div className="card-info">
                    <img src="https://imperial-hotel.org/upload/iblock/467/yfcp1uj2ua0qq1s5dp9ruqxigirp8tmy.jpg" alt="Cinque Terre"/>
                    <div className="about-realty">
                        <p className='title'>{realty.title}</p>
                        <p className='price'>{realty.price}</p>
                        <p className='square'>{realty.square} | {realty.rooms}</p>
                        <p className='address'>{realty.address}</p>
                    </div>
                </div>
            
        </div>
    );
}

export default RentRealties;
