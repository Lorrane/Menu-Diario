import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Card(prop) {
	return (
		<Link to={prop.prop.url} /*target='_blank' rel='noreferrer'*/>
			<div className="card" style={{backgroundImage: `url(${prop.prop.image})`, }}>
				
                {/* <img src={prop.prop.image} alt={prop.prop.nome}  /> */}
                {prop.prop.nome}
            </div>
		</Link>
	);
}

export default Card;
