import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../context/userContext';
import Logo from '../../assets/img/logo.png'
import Button from '../Button';
import './style.scss'


const Header = () => {
    const [login, setLogin] = useContext(LoginContext);
    const handleLogout = () => setLogin(false);
    const [header, setHeader] = useState(false);

    return (
        <header className="header">
            <Link to='/'>
                <span className="header__logo">
                    <img src={Logo} alt="Logo Revendedora Boticário" />
                </span>
            </Link>
            <span className="header__menu" onClick={() => setHeader(!header)}>
                
            </span>
            <div className={`header__items set--${header}`} >
                <span className="header__items-close" onClick={() => setHeader(!header)}>X</span>
                {login ? (
                    <>
                    <Link to="/" className="header__items-link">Home</Link>
                    <Link to="/listbuy" className="header__items-link">Minhas Vendas</Link>
                    <Link to="/buy" className="header__items-link">Vender</Link>
                    <Link to="/account" className="header__items-link">Minha Conta</Link>
                    <Link to="/dev" className="header__items-link"> <Button content="Dev" /></Link> 
                    </>
                ) : (
                    <Link to="/dev" className="header__items-link"> <Button content="Dev" /></Link> 
                )
            }

            </div>
            <div className="header__account">
                {
                    login ? (
                        <Link to="/login">
                            <Button content="Logout" onClick={handleLogout} />
                        </Link>
                    )
                        : (
                            <Link to='/login'>
                                <Button content="Login" />
                            </Link>
                        )
                }

            </div>

        </header>

    );
}

export default Header;
