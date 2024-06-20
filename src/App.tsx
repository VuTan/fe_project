import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Banner from "./component/Home/banner";
import CardSlider from "./component/CardSlider";
import VideoSection from "./component/Home/VideoSection";
import NewCollection from "./component/Home/NewCollection";
import ShopPage from './component/ShopPage';

const App: React.FC = () => {

    return (
        <Router>
            <div className="App">
                <Header></Header>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Banner></Banner>
                            <CardSlider></CardSlider>
                            <VideoSection></VideoSection>
                            <NewCollection></NewCollection>
                        </>
                    }/>
                    <Route path="/shop" element={<ShopPage/>}/>
                </Routes>
                <Footer></Footer>
            </div>
        </Router>
    );
}
export default App;
