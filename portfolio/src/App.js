import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Project from './components/project'

import data from './DATA'


class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='container'>
          <div id='header'>
            <div className='subtitle'>
              Hey, my name is
            </div>
            <div className='title'>
              Owen Cummings.
            </div>
            <div>
              Glad you could make it.
              <br/>
              Here are some projects.
            </div>
          </div>

          {data.map((project) =>
              <Project project={project}/>
          )}

        </div>
      </div>
    );
  }
}

export default App;
