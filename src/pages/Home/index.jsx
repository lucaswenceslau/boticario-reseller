import React, { useContext } from 'react';
import Button from '../../components/Button';
import Title from '../../components/Title'

import { LoginContext, CurrentUserContext } from '../../context/userContext'

import './style.scss'
import { Link } from 'react-router-dom';

const Home = () => {
    const [login] = useContext(LoginContext);
    const [currentUser] = useContext(CurrentUserContext)

    const { name } = currentUser;
    console.log(currentUser)
    return (
        <main className="home" role="main">
            {login ? <Title content={`Bem-vinda(o) ${name}`} /> : <Title content="Seja um Revendedor O Boticário" />}
            <div className="home__wrapper">
                {
                    login ? (
                        <Link to="/buy">
                            <Button content="Cadastrar Compras" />
                        </Link>
                    ) : (
                            <>
                                <Link to="/login">
                                    <Button content="Sou revendedora" />
                                </Link>
                                <Link to="/create">
                                    <Button content="Quero ser redendedora" />
                                </Link>
                            </>
                        )
                }

            </div>
        </main>
    );
}

export default Home;
