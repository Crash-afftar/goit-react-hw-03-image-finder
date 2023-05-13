import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalWindow } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown)
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown)
  }
  onKeyDown = (event) => {
    if (event.code === 'Escape') {
      this.props.onClose()
    }
  }
   onOverlay = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose()
    }
  }
  render() {
    const { image } = this.props;
    return createPortal(
   <ModalOverlay onClick={this.onOverlay}>
  <ModalWindow>
    <img src={image.largeUrl} alt={image.targetAlt} />
  </ModalWindow>
      </ModalOverlay>,
      document.querySelector('#modalRoot')
    )
 }
}

export default Modal;