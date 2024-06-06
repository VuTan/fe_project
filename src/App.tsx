import React from 'react';
import './App.css';
import Header from "./component/Hearder/Header";
import Footer from "./component/Footer/Footer";
import Banner from "./component/Home/banner";
import CardSlider from "./component/CardSlider";
import VideoSection from "./component/Home/VideoSection";
import NewCollection from "./component/Home/NewCollection";

const App: React.FC = () => {
  return (
      <div className="App">
          <Header></Header>
          <Banner></Banner>
          <CardSlider></CardSlider>
          <VideoSection></VideoSection>
          <NewCollection></NewCollection>
          <Footer></Footer>
      </div>
  );
}

export default App;
