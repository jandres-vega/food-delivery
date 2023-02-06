import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Layout} from "../containers/Layout";

function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route exact path="/" element={<h1>Hola Mundo</h1>}/>
            </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
