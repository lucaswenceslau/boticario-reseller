import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../context/userContext';
import Logo from '../../assets/img/logo.png'
import Button from '../Button';
import './style.scss'


const Header = () => {
    const [login, setLogin] = useContext(LoginContext)
    // console.log(LoginContext)
    const handleLogout = () => setLogin(false)
    return (

        <header className="header">
            <Link to='/'>
                <span className="header__logo">
                    <img src={Logo} alt="Logo Revendedora Boticário" />
                </span>
            </Link>
            <div className="header__items">
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
                        <Button content="Logout" onClick={handleLogout} />
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
