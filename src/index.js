import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './index.css';


//import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Jokes from './components/Jokes';

import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
/*
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
*/
ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path='/' element={<App/>}/>
      <Route path='/jokes' element={<Jokes/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);


//without promise
/*
setTimeout(
  ()=>{
    console.log('hiii');
  },2000
);
console.log('how');
console.log('are you');
*/

/*
//promises
new Promise((resolve, reject)=>{
  return reject(new Error('unable to fetch from api'));

  setTimeout(
    ()=>{
      console.log('hiii,how,are you');
    },2000
  );
})
.then(quote=>{
  console.log(quote);
})
.catch(error=>console.log('error',error));
*/