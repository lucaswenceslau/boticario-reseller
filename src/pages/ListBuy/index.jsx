import React, { useContext } from 'react';
import './style.scss'
import Title from '../../components/Title';
import { CurrentUserContext, LoginContext } from '../../context/userContext';
import Button from '../../components/Button';
import { Redirect } from 'react-router-dom';

const ListBuy = () => {
    const [currentUser] = useContext(CurrentUserContext);
    const [login] = useContext(LoginContext);
    const { items } = currentUser;
    return (
        <>
        {login ? (
            <div className="list-buy">
            <Title content="Suas vendas" />
            <table>
                <thead>
                    <tr>
                        <th>Cod. Compra</th>
                        <th>Produto</th>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>% Cashback</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {items &&
                        items.map(({ bestPrice, image, title, id }, index) => (

                            <tr key={id}>
                                <td>{index + 1}</td>
                                <td><img src={image} alt="" /></td>
                                <td>{title}</td>
                                <td><strong>{(bestPrice / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></td>
                                <td>(10%) {((bestPrice * 0.10) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                <td>Concluído</td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
        ) : <Redirect to="/"/>
        
        
        }
        </>
        
    )
};

export default ListBuy;
