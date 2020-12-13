import React from 'react';
import Picture from '../../images/icons/javascript.jpg';
import './Greetings.css';
import { Link } from 'react-router-dom';


function Greetings(){
    return(
        <div className="all">
            <img className="image" style={{width: '600px'}} src={Picture} alt="Logo" />
            <div className="container">
                <h3>
                    Frase qualquer sobre o projeto...
                </h3>
                <button className="button"><Link className="link" to='/signup'>Sign Up</Link></button>
                <p>
                Já possui conta? Então faça o <Link className="link" to='/login'>login aqui</Link>.
                </p>
            </div>
        </div>
            
        
    )
}

export default Greetings;