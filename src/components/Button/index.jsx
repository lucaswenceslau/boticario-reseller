import React from 'react';
import './style.scss';
// import { Container } from './styles';

const Button = ({ content, ...props }) => (
    <button {...props} className="button"> {content} </button>
);

export default Button;
