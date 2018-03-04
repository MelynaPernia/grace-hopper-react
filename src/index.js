import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
// import Header from './header/components/header';
// import Main from './main/components/main';
// import Aside from './aside/components/aside';

// ReactDOM.render( <Header/> , document.getElementById('title'));
// ReactDOM.render( <Main/> , document.getElementById('biography'));
// ReactDOM.render( <Aside/> , document.getElementById('summary'));