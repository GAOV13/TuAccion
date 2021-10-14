import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Modal from 'react-modal';

import '../../assets/css/glosario.css';

class Glosario extends React.Component {
  state = {
    isOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };
  render() {
    const modalStyles = {
      overlay: {
        
        width: '50%',
        backgroundColor: 'red',
      },
    };
    return (
      <div>
        <button onClick={this.toggleModal}>
          Glosario
        </button>
        <CSSTransition
          in={this.state.isOpen}
          timeout={300}
          classNames="dialog"
        >
					<Modal
					closeTimeoutMS={500}
					isOpen={this.state.isOpen}
					style={modalStyles}
					>
						<button onClick={this.toggleModal}>
								Cerrar Glosario
						</button>
						<div>
							<h1>Aca podras encontrar el significado de las siguientes palabras</h1>
						</div>
					</Modal>
        </CSSTransition>
      </div>
    );
  }
}

export default Glosario;