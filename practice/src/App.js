import {useState} from 'react';
import React , {Component} from 'react';
import CounterOne from './CounterOne';
import CountTwo from './CountTwo';
import DatafetchingOne from './DatafetchingOne';
import DatafetchingTwo from './DatafetchingTwo';
import Title from './Componenet/title';
import ParentComponent from './Componenet/ParentComponent';

import './App.css';
function App(){
 
  return (<div className='App'>
    
    <ParentComponent/>
    
  </div>)
}

export default App;

