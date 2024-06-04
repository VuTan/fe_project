import React from 'react';
import './App.css';
import Header from "./component/Hearder/Header";
import Footer from "./component/Footer/Footer";
import Banner from "./component/Home/banner";
import CardSlider from "./component/CardSlider";

function App() {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <CardSlider></CardSlider>
            <Footer></Footer>
        </div>

    )
}

export default App;
