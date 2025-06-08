import React from 'react'
import awning from '../assets/awning.png';



export const Header = () => {
    return (
        <div className='Header'>
            <img src={awning} alt="Awning" />

            <h1>Food Truck Favorites</h1>
        </div>


    )
}

