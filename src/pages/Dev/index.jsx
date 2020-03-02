import React from 'react';
import Photo from '../../assets/img/me.png';
import Linkedin from '../../assets/img/linkedin.png';
import Phone from '../../assets/img/phone.png';
import Email from '../../assets/img/mail.png';
import Qdb from '../../assets/img/qdb.png';
import Telhanorte from '../../assets/img/telhanorte.png';
import Tnf from '../../assets/img/the-north-face.png'
import './style.scss';

const Dev = () => {
    return (
        <div className="dev">
            <figure className="dev__photo">
                <img className="dev__photo-pic" src={Photo} alt="" />
                <p className="dev__name">Lucas Rodrigues Wenceslau</p>
                <p className="dev__data"><img src={Phone} /> +55 (11)95050-8701</p>
                <p className="dev__data"><img src={Email} /> lucas.rwenceslau@gmail.com | lucascetef@gmail.com </p>
                <p className="dev__data"><img src={Linkedin} /><a href="https://www.linkedin.com/in/lucas-rodrigues-wenceslau-91b4b115b/" target="_blank">LinkedIn</a> </p>
            </figure>
            <div className="dev__description">
                <h2 className="dev__description-title">Descrição</h2>
                <p className="dev__description-text">
                    Atualmente já trabalho no Grupo Boticário no ecommerce de <span className="qdb">quem disse, berenice?</span>,<br />
                    Esse foi o meu segundo projeto em React, antes disso só trabalhava com JS ES6+ devido as limitações da VTEX, <br />
                    o primeiro projeto foi a página de <a href="https://www.quemdisseberenice.com.br/nossas-lojas" target="_blank">Nossas Lojas de QDB</a>
                </p>
                <div className="dev__jobs">
                    <h2 className="dev__description-title">Últimos jobs</h2>
                    <div className="dev__jobs-last">
                        <a href="https://www.quemdisseberenice.com.br/"><img src={Qdb} alt="" /></a>
                        <a href="https://www.telhanorte.com.br/"><img src={Telhanorte} alt="" /></a>
                        <a href="https://www.thenorthface.com.br/"><img src={Tnf} alt="" /></a>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Dev;
