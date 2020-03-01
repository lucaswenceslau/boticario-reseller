import React from 'react';
import './style.scss'
import Title from '../../components/Title';
// import { Container } from './styles';

const gridTableCells = document.querySelectorAll('.grid-table > div');

gridTableCells.forEach((cell) => {
    const orderNum = cell.getAttribute('order');
    (orderNum % 2 !== 0) && (cell.className = '--is-striped');
});
const ListBuy = () => {
    return (
        <div className="list-buy">
            <Title content="Suas vendas" />
            <div class="container">
                <div class="grid-table">
                    <div order="1">Cod. Compra</div>
                    <div order="2">CODIGO</div>
                    <div order="3">CODIGO</div>
                    <div order="4">CODIGO</div>
                    <div order="5">CODIGO</div>
                    <div order="6">CODIGO</div>
                    <div order="7">CODIGO</div>

                    <div order="1">Product</div>
                    <div order="2">PRODUTO</div>
                    <div order="3">PRODUTO</div>
                    <div order="4">PRODUTO</div>
                    <div order="5">PRODUTO</div>
                    <div order="6">PRODUTO</div>
                    <div order="7">PRODUTO</div>

                    <div order="1">Price</div>
                    <div order="2">R$99.90</div>
                    <div order="3">R$99.90</div>
                    <div order="4">R$99.90</div>
                    <div order="5">R$99.90</div>
                    <div order="6">R$99.90</div>
                    <div order="7">R$99.90</div>

                    <div order="1">% Cashback</div>
                    <div order="2">10%</div>
                    <div order="3">10%</div>
                    <div order="4">10%</div>
                    <div order="5">10%</div>
                    <div order="6">10%</div>
                    <div order="7">10%</div>
                    
                    <div order="1">Status</div>
                    <div order="2">“Em validação</div>
                    <div order="3">“Em validação</div>
                    <div order="4">“Em validação</div>
                    <div order="5">“Em validação</div>
                    <div order="6">“Em validação</div>
                    <div order="7">“Em validação</div>
                </div>
            </div>
        </div>
    )
};

export default ListBuy;
