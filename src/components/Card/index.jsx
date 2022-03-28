import React from 'react';
import './styles.css';

function Card(refeicao) {
	return (
		<a href={refeicao.prop.url} target='_blank' rel='noreferrer'>
			<div className="card" >
                <img src={refeicao.prop.image} alt={refeicao.prop.nome}  />
                {refeicao.prop.nome}
            </div>
		</a>
	);
}

export default Card;
