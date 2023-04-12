import React from "react";
const CardContact =(props)=>{
    const{id,name, email}=props.contact;
    return(
        <div>
                <div>
                    <div className='header'>{name} </div>
                    <div>{email}</div>
                </div>
                <i></i>
            </div>
    )

}
export default CardContact;