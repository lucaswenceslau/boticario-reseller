import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { Link, Redirect } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './style.scss';
import Axios from 'axios';
import Shelf from '../../components/Shelf';
// import { Container } from './styles';

const Buy = () => {
    const [user, , login, setLogin] = useContext(UserContext);
    const [products, setProducts] = useState();
    const fetchData = async () => {
        const query = `
            query {
                items{
                id
                title
                listPrice
                bestPrice
                description
                image
                }
            }
        `;

        const endpoint = "https://cgsy71zgc1.execute-api.eu-west-1.amazonaws.com/staging/";

        try {
            const response = await Axios.post(endpoint, { query });
            const { data } = await response.data
            console.log("data: ", data.items)
            setProducts(data.items)
        }
        catch (err) {
            console.error("Error on Axios", err)
        }

    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div className="shelve">
                {
                    /* {!login && (<Redirect to="/" />)} */
                    products &&
                    products.map(({ id, title, listPrice, bestPrice, description, image }) => {
                        const formatPrice = (listPrice / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                        console.log(formatPrice)
                        return <Shelf
                            id={id}
                            title={title}
                            listPrice={listPrice}
                            bestPrice={formatPrice}
                            description={description}
                            image={image}
                            key={id}
                        />
                    })
                }
            </div>

        </>
    )
};

export default Buy;
