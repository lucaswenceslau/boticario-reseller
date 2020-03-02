import React from 'react';
import Input from '../Input';
import './style.scss'
import Button from '../Button';
// import { Container } from './styles';

const Shelf = ({id,image,title,description,listPrice,bestPrice, onClick, content}) => {
    const handleClick = (ev) => {
        
        const target = ev.target;

        target.classList.contains("button") ? target.textContent = "Adicionado" : null;
        setTimeout(() => {
            target.classList.contains("button") ? target.textContent = "Adicionar" : null;
        }, 2000);
    }
    return(
        <div className="shelf-item" onClick={handleClick}>
            <Input type="hidden" value={id}/>
            <figure className="shelf-item__image">
                <img src={image} alt={title} />
            </figure>
            <h3 className="shelf-item__name">
                {title}
            </h3>
            <p className="shelf-item__description">
                {description}
            </p>
            <p className="shelf-item__price">
                {listPrice === bestPrice ? listPrice : bestPrice}
            </p>
            <Button content={content} onClick={onClick}/>
        </div>
    )
};

export default Shelf;
