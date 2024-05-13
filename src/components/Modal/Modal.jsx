import "./style.css"
import { X } from 'lucide-react';
import React from 'react';
import { useRef, useEffect } from "react";

const Modal = ({ onClose }) => {
    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    return (
        <div ref={modalRef} onClick={closeModal} className="fixed-overlay fixed-overlay__modal">
            <div className="modal">
                <div className="modal__container">
                    <button onClick={onClose} className="modal__button"><X /></button>
                    <div>
                        <iframe width="660" height="415" src="https://www.youtube.com/embed/VzYbZr4K9Lg?si=NzQAFKjp19dQhypn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;