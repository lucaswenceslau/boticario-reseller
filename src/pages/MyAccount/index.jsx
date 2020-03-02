import React, { useContext } from 'react';
import Avatar from '../../assets/img/avatar.png'
import './style.scss';
import { UserContext ,CurrentUserContext, LoginContext } from '../../context/userContext';
import { Redirect } from 'react-router-dom';
import Title from '../../components/Title';
import Input from '../../components/Input';


const MyAccount = () => {
    const [login] = useContext(LoginContext);
    const [currentUser] = useContext(CurrentUserContext)
    const [user] = useContext(UserContext);

    const { name, email } = currentUser;
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
                        <Title content="Minha conta" />
                        <div className="account__wrapper">
                            <figure className="account__avatar">
                                <img src={Avatar} alt="" />
                            </figure>
                            {/* <p className="account__rank">{calculateCashback() < 75 ? "Beginner" : "Pro"}</p> */}
                            <p className="account__name">{name}</p>
                            <span className="account__cashback">
                                <p className="account__cashback-text">Cashback disponível:</p>
                                <p className="account__cashback-value">{calculateCashback()}</p>
                            </span>
                            <form className="account__form">

                                <label htmlFor="name" className="account__form-label">
                                    Nome
                                <Input value={name} type="text" id="name" readOnly/>
                                </label>

                                <label htmlFor="email" className="account__form-label">
                                    Email
                                <Input value={email} type="email" id="email" readOnly/>
                                </label>

                            </form>
                        </div>
                    </div >

                ) : (<Redirect to="/" />)

            }
        </>
    )
};

export default MyAccount;
