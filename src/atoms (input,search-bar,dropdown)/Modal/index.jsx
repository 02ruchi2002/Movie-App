import React, { Children } from "react";
import './style.css'
import { ImCancelCircle } from "react-icons/im";


const Modal = ({children ,handleCancel}) =>{
    console.log(handleCancel)
    return(
        <div className="modal-container">
            <div className="parent-box">
                <div onClick={handleCancel} className="cancel">
                <ImCancelCircle/>
                </div>
            {children}
            </div>
        
        </div>
    )
}

export default Modal

