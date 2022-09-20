import React, { Component } from 'react';
import MadlipForm from './madlip_form';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='backgroundSkew'>
        <div className='madlip-heading'>
        <h1>React Modlip App</h1>
        <div className='madlip-subheading'>
          Fill out the fields below and click the generate button <br/> to see the madlip storey
        </div>
        </div>
        <MadlipForm />
        </div>
        
      </div>

    );
  }
}
