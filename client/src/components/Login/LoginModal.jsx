import React from 'react';
import Login from './Login';

const LoginModal = ({ isOpen, onClose, openSign }) => {

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <div>
                    <img src="https://amuraworld.com/images/articles/128-monaco-cannes/074-fuera-de-borda-monaco/079-villa-la-vigie1.jpg" alt="" />
                </div>
                <div className='modal-form'>
                    <a onClick={onClose} class="close-modal"><i class="fa fa-close"></i></a>
                    <p className='modal-company-name'>R O Y A L <span>R E A L T Y</span></p>
                    <Login onClose={onClose} openSign={openSign} />
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
