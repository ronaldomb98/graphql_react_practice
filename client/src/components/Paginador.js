import React, { Component } from 'react'

class Paginador extends Component {
    state = {
        paginador: {
            paginas: Math.ceil(Number(this.props.totalClientes) / this.props.limite)
        }
    }

    render() {
        const {actual} = this.props;
        const btnAnterior = (actual > 1) ? <button onClick={this.props.paginaAnterior} type="button" className="btn btn-success mr-2">&laquo; Anterior</button> : '';

        const {paginas} = this.state.paginador;
        console.log(paginas)
        const btnSiguiente = (actual !== paginas && paginas > 0) ? <button onClick={this.props.paginaSiguiente} type="button" className="btn btn-success mr-2">Siguiente &raquo;</button> : '';

        return (
            <div className="mt-5 d-flex justify-content-center">
                {btnAnterior}
                {btnSiguiente}
            </div>
        )
    }
}

export default Paginador;