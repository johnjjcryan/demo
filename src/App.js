import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import Content from './components/views/content';
import Sidebar from './components/modules/sidebar';

function App() {

  const notify = (msg) => toast(msg);

  return (
    <div className="App">
        
        <Sidebar notify={notify} />
        <Content />

        <ToastContainer 
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

    </div>
  );
}

export default App;
