import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    let { styleState, toggleMode } = this.props;
    return (
      <div>
        <nav className={`navbar navbar-expand-lg bg-${styleState.type} navbar-${styleState.type}`}>
          <div className='container-fluid'>
            <img src="../" alt="" />
            <a className='navbar-brand primary' href='/'>
              Daily-News
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse justify-content-end' // Added class for alignment
              id='navbarSupportedContent'
            >
              <div className='d-flex align-items-center'> {/* Added class for alignment */}
                <div className='form-check form-switch'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    role='switch'
                    id='flexSwitchCheckDefault'
                    onClick={toggleMode}
                  />
                  <label className={`form-check-label bg-${styleState.type}`} style={{ color: styleState.color }} htmlFor='flexSwitchCheckDefault'>
                    Dark Mode
                  </label>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
