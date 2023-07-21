import React from 'react';
import Signup from './Signup';
import modalImage from '../../images/modal-image.jpg';

const SignupModal = ({ isOpen, onClose, openLogin}) => {

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <div>
                    <img src={modalImage} alt="" />
                </div>
                <div className='modal-form'>
                    <a onClick={onClose} className="close-modal"><i className="fa fa-close"></i></a>
                    <p className='modal-company-name'>R O Y A L <span>R E A L T Y</span></p>
                    <Signup onClose={onClose} openLogin={openLogin} />
                </div>
            </div>
        </div>
    );
}

export default SignupModal;
