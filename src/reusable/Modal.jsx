import React from 'react';

function Modal({isOpen, onClose, children}) {
   if (!isOpen) return null;

   return (
    <div>
        {children}
        <button onClick={onClose}>
            Close
        </button>
    </div>
   );
};

export default Modal;