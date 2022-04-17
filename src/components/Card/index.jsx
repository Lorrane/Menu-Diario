import React from 'react';
import './styles.css';

function Card(refeicao) {
	return (
			<div className="card" style={{backgroundImage: `url(${refeicao.prop.image})`, }}>
                {refeicao.prop.nome}
            </div>
	);
}

export default Card;
