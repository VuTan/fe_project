import React from 'react'; 
import VideoSection from './component/Home/VideoSection';
import ReactDOM from "react-dom/client";
import './App.css';
import Header from "./component/Hearder/Header";
import Footer from "./component/Footer/Footer";

const App: React.FC = () => {
  return (
      <div className="App">
          <Header></Header>
        <VideoSection />
          <Footer></Footer>
      </div>
  );
}

export default App;
