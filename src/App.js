import Search from './component/Search/Search';
import Nav from './component/Nav/Nav';
import Nav2 from './component/Nav2/Nav2';
import Options from './component/Options/Options';
import Footer from './component/Footer/Footer';
import Card from './component/Card/Card';
import Banner from './component/Banner/Banner';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
 


  return (
    <div className="App">
      <Nav/>
      <Nav2/>
      <Search/>
      <Options/>
      <Banner/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
