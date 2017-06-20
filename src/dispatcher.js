import React, { Component } from 'react'

export default class Dispatcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buffer: [],
            serie: [1,2,3,4],
            currentPosition: 0
        }
    }

    buttonPressed(number) {
        if(this.state.serie.length - 1 == this.state.currentPosition) {
            console.log('LISTO!');
            this._resetBuffer();
            this.props.nextLine();
        } else if( this.state.serie.length > this.state.currentPosition &&
                   this.state.serie[this.state.currentPosition] == number) {
                console.log('AGREGANDO!');
                this._addNumber(number);
        } else {
            console.log('BORRANDO!');
            this._resetBuffer();
        }
    }

    _resetBuffer() {
        const buffer = [];
        const currentPosition = 0;
        this.setState({buffer, currentPosition});
    }

    _addNumber(number) {
        const buffer = [...this.state.buffer, number];
        const currentPosition = this.state.currentPosition + 1;
        this.setState({buffer, currentPosition});
    }

    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <p className="btn-group-sm">
                            {this.props.order.map((number) => <a className='btn btn-default btn-raised' onClick={()=>{this.buttonPressed(number)}}>{number}</a>) }
                        </p>
                    </div>
                </div>
                <div className="row">
                    {this.state.buffer.map((number) => <small>{number}</small>)}
                </div>
            </div>
        );
    }
}