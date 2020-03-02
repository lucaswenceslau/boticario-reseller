import React, { useContext, useEffect, useState } from 'react';
import './style.scss';
import Axios from 'axios';
import Shelf from '../../components/Shelf';
import { CurrentUserContext, LoginContext } from '../../context/userContext';
import Loading from '../../components/Loading';
import { Redirect } from 'react-router-dom';

const Buy = () => {
    const [login] = useContext(LoginContext);
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(false);
    const [textButton, setTextButton] = useState('Adicionar');

    const handleAddProduct = (ev, product) => {
        ev.preventDefault();
        setCurrentUser(prevState => ({
            ...prevState,
            items: [...prevState.items, product]
        }))
    }


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
            setProducts(data.items)
            setLoading(true);
        }
        catch (err) {
            console.error("Error on Axios Request", err)
        }

    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            {login ? (
                <div className="shelve">
                    {!loading ? (
                        <Loading />
                    ) : (
                            products &&
                            products.map((product, index) => {
                                const { id, title, listPrice, bestPrice, description, image } = product;
                                const formatPrice = (bestPrice / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                                return <Shelf
                                    id={id}
                                    title={title}
                                    listPrice={listPrice}
                                    bestPrice={formatPrice}
                                    description={description}
                                    image={image}
                                    content={textButton}
                                    key={id}
                                    onClick={ev => handleAddProduct(ev, product)}
                                />
                            })
                        )}
                </div>
            ) :
                <Redirect to="/" />
            }

        </>
    )
};

export default Buy;
