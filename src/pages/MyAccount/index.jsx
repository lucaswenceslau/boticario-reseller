import React, { useState } from 'react';
import Avatar from '../../assets/img/avatar.png'
import './style.scss';
const MyAccount = () => {

    return (
        <div className="account">
            <figure className="account__avatar">
                <img src={Avatar} alt="" />
            </figure>
            <p className="account__rank">Beginner</p>
            <p className="account__name">Lucas</p>

            <span className="account__cashback"><p className="account__cashback-value">R$99.99</p></span>
        </div>
    )
};

export default MyAccount;
