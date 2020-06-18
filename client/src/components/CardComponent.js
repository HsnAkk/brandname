import React from 'react';
import Icon from './Icon';


function CardComponent({ image, tag, title, description }) {

    return (
        <div className="col-12 col-md-6 col-lg-3" >
            <div className="card card-outbox" >
                <img src={`http://localhost:5000/${image}`} className="card-img-top" height="auto" alt={title}/>
                <div className="card-body">
                    <div>
                        <h5 className="card-title lobster">{title}</h5>
                        <div className={tag === 'Fruit' ? 'bg-warning' : tag === 'Meat' ? 'bg-danger' : tag === 'Vegetable' ? 'bg-success' : 'bg-primary'}>{tag}</div>
                    </div>
                    <p className="card-text">{description}</p>
                    <div>
                        <Icon textColor= {tag === 'Fruit' ? 'text-warning' : tag === 'Meat' ? 'text-danger' : tag === 'Vegetable' ? 'text-success' : 'text-primary'} />
                        <span>More Info</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardComponent
