import React from 'react';
import Login from './Login';
import modalImage from '../../images/modal-image.jpg';

const LoginModal = ({ isOpen, onClose, openSign }) => {

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
                    <Login onClose={onClose} openSign={openSign} />
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
