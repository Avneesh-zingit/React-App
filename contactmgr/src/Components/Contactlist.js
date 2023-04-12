import React from 'react';
import Contactcard from './Contactcard';
const Contactlist=(props)=>{
    console.log(props);
    const renderContaclist = props.contacts.map((contact)=>{
        return(
            
            <Contactcard contact={contact}/>
        )

    });
    return(
        <div>Contactlist
            {renderContaclist}
        </div>
    )

}
export default Contactlist;