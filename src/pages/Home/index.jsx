import React, { useContext } from 'react';
import Button from '../../components/Button';
import Title from '../../components/Title'

import { UserContext } from '../../context/userContext'

import './style.scss'
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, , login] = useContext(UserContext);
    console.log(users);
    return (
        <main className="home" role="main">
            {login ? <Title content={`Bem-vinda(o) ${users[0].name}`} /> : <Title content="Seja um Revendedor O Boticário" />}
            <div className="home__wrapper">
                {
                    login ? (
                        <Link to="/buy">
                            <Button content="Cadastrar Compras" />
                        </Link>
                    ) : (
                            <>
                                <Button content="Sou revendedora" />
                                <Button content="Quero ser redendedora" />
                            </>
                        )
                }

            </div>
        </main>
    );
}

export default Home;
