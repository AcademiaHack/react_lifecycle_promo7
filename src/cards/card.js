import React, {Component} from 'react';
import './card.scss';

function renderButtons(props) {
    if(!props.image || !props.like || !props.dislike) {
        return '';
    }
    return(
        <div className="row text-center m-t-lg">
            <div className="col-md-6" onClick={props.dislike}>
                <div className="btn btn-fab btn-danger btn-tinder">
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                </div>
            </div>
            <div className="col-md-6">
                <div className="btn btn-fab btn-success btn-tinder" onClick={props.like}>
                    <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                </div>
            </div>
        </div>
    ); 
}

function noImage() {
    return (
        <div>
            <h1 className='text-center'>
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
            </h1>
            <h5 className='text-center'>No más gatos por hoy</h5>
        </div>
    );
}

function Card(props) {
    if(!props.image) {
        return noImage();
    }
    return(
        <div className="col-md-8 col-md-offset-2">
            <div className="well">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <img src={props.image} className='img-responsive'/>
                    </div>
                </div>
                {renderButtons(props)}
            </div>
        </div>
    )
}

export default Card;