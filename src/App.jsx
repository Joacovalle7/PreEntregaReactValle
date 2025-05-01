import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from './components/ItemListContainer/Itemlistcontainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar/>
    <Routes>
      <Route exact path='/' element={<ItemListContainer/>} />
      <Route path='item/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

