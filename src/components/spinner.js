import React, { Component } from 'react';
import loadingSpinner from './Spinner.gif';
export class Spinner extends Component {
  render() {
    return(
        <div className='text-center'>
            <img src={loadingSpinner} alt="loading" />
        </div>
    );
  }
}

export default Spinner;
