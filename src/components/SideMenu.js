import  React, {useState} from 'react';

export default function SideMenu(props) {
    
    return(
        <div className={`side-menu-container ${props.openMenu ? 'opened' : ''}`}>
            <button className="open-menu" onClick={() => props.setOpenMenu(!props.openMenu)}> {'>'} </button>
        </div>
    )
}