import React, {Component} from 'react';
import './card.scss';

export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        console.log("Componente va a recibir PROPS!");
        //No ejecuta la primera vez!
        //Pre-calcular la llegada de props, normalmente se almacena data en el STATE!
    }

    componentWillMount() {
        console.log("Componente va a montar!");
        //Cambiar el state no detonara un re-render!
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Componente esta evaluando si deberia repintar!");
        //No ejecuta la primera vez!
        //Recibie prop y state para determinar si se debe repintar!
        //Retorna boolean!
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("El componente va a repintar!");
        //No ejecuta la primera vez!
        //Recibe props y state para pre-calcular cosas antes del render
    }

    renderButtons(){
        if(!this.props.like || !this.props.dislike) {
            return '';
        }
        return(
            <div className="row text-center m-t-lg">
                <div className="col-md-6" onClick={this.props.dislike}>
                    <div className="btn btn-fab btn-danger btn-tinder">
                        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="btn btn-fab btn-success btn-tinder" onClick={this.props.like}>
                        <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        console.log("PINTANDO!!");
        //NO MANEJAR EL DOM AQUI!
        return(
            <div className="col-md-8 col-md-offset-2">
                <div className="well">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src={this.props.image} className='img-responsive'/>
                        </div>
                    </div>
                    {this.renderButtons()}
                </div>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("El componente recien renderizo y la data actualizo");
        //No ejecuta la primera vez!
        //Aqui se podria manejar el DOM
    }

    componentDidMount() {
        console.log("Componente ready!");
        //Aqui se podria manejar el DOM
    }

    componenteWillUnmount() {
        console.log("Componente fuera del DOM!");
        //Aqui se pueden limpiar elementos, timeouts, etc
    }
}