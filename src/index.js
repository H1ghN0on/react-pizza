//Библиотеки
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
//Стили
import './scss/app.scss';

//Хранилище Redux
import store from './redux/store';
//Главный Компонент
import App from './App';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
``