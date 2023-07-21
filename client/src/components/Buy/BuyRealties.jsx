import React from 'react';
import { NavLink } from 'react-router-dom';

const BuyRealties = ({ realty, category }) => {
    return (
        <div className="card-realty">
            <NavLink to={`/buy/${category}/${realty._id}/details`}>
                <div className="card-info">
                    <img src={realty.mainImage} alt="Cinque Terre"/>
                    <div className="about-realty">
                        <p className='title'>{realty.title}</p>
                        <p className='price'>{realty.price}</p>
                        <p className='square'>{realty.square} sq mt | <i className="fa fa-bed"></i> {realty.rooms}</p>
                        <p className='address'>{realty.address}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default BuyRealties;
