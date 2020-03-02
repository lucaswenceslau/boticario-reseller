import React, { useState, useContext } from 'react';
import Avatar from '../../assets/img/avatar.png'
import './style.scss';
import { CurrentUserContext, LoginContext } from '../../context/userContext';
import { Redirect } from 'react-router-dom';

const MyAccount = () => {
    const [login] = useContext(LoginContext);
    const [currentUser] = useContext(CurrentUserContext)

    const { name } = currentUser;

    const calculateCashback = () => {
        let total = 0;
        currentUser.items.forEach(item => {
            total += item.bestPrice;
        });
        total = ((total * 0.10) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })


        return total
    }

    calculateCashback();

    return (
        <>
            {
                login ? (
                    <div className="account" >
                        <figure className="account__avatar">
                            <img src={Avatar} alt="" />
                        </figure>
                        <p className="account__rank">{calculateCashback() < 75 ? "Beginner" : "Pro"}</p>
                        <p className="account__name">{name}</p>
                        <span className="account__cashback"><p className="account__cashback-value">{calculateCashback()}</p></span>
                    </div >

                ) : (<Redirect to="/"/>)

            }
        </>
    )
};

export default MyAccount;
