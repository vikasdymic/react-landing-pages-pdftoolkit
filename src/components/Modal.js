import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

class Modal extends Component {
    render() {
        if(!this.props.show) {
            return null;
        }

        return (
            <div id='modal-wrapper'>
                <div id='modal'>
                    <h2>Coming Soon!</h2>
                    <p>Thank you for expressing your interest in {this.props.children}! We are putting the finishing touches on {this.props.children} and you'll be the first to know when it's done.</p>
                    <button class='button medium' onClick={this.props.onClose}>Close</button>
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default Modal;