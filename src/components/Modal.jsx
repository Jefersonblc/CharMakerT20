import React, { useEffect, useRef } from 'react';

const Modal = ({ show, handleClose, title, children }) => {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (!show) return;
        const handleEsc = (e) => {
            if (e.key === 'Escape') handleClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [show, handleClose]);

    const handleBackdropClick = (e) => {
        if (dialogRef.current && e.target === dialogRef.current) {
            handleClose();
        }
    };

    return (show &&
        <div
            className='modal fade show d-block backdrop'
            tabIndex="-1"
            role="dialog"
            onClick={handleBackdropClick}
            ref={dialogRef}
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;