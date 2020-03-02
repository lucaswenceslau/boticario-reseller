import React, { useContext, useEffect, useState } from 'react';
import './style.scss';
import Axios from 'axios';
import Shelf from '../../components/Shelf';
// import { SellersContext } from '../../context/sellerContext';
import { CurrentUserContext } from '../../context/userContext';
import Loading from '../../components/Loading';


const Buy = () => {
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

    console.log(currentUser);

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
            setLoading(true);
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
                {!loading ? (
                    <Loading/>
                ) : (
                        products &&
                        products.map((product, index) => {
                            const { id, title, listPrice, bestPrice, description, image } = product;
                            const formatPrice = (listPrice / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
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
        </>
    )
};

export default Buy;
