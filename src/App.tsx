import React from 'react';
import './App.css';
import Header from "./component/Hearder/Header";
import Footer from "./component/Footer/Footer";
import Banner from "./component/Home/banner";

import VideoSection from "./component/Home/VideoSection";
import NewCollection from "./component/Home/NewCollection";
import SliderNew from "./component/Home/SliderNew";
import SliderType from "./component/Home/SliderType";

const App: React.FC = () => {
  return (
      <div className="App">
          <Header></Header>
          <Banner></Banner>
          <SliderNew></SliderNew>
          <VideoSection></VideoSection>
          <NewCollection></NewCollection>
          <SliderType></SliderType>
          <Footer></Footer>
      </div>
  );
}

export default App;
