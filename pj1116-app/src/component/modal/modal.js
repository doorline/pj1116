import React from "react";

import ModalContainer from "./modalContainer";

function Modal({props, children}){
    const handleClose=()=>{
        props.onClose?.();
    };

    return(
        <ModalContainer>
            <div className="overlay">
                <div className="content">
                    {children}
                </div>
            </div>
        </ModalContainer>
    )
}