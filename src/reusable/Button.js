import React from 'react';

function Button({label, onClick, disabled}) {
    return (
       
        <div>
            <button onClick={onClick} disabled={disabled}>
                {label}
            </button>
        </div>
    );
};

export default Button;
