import Banner from "./banner";
import VideoSection from "./VideoSection";
import NewCollection from "./NewCollection";
import Slider from "react-slick";
import SliderNew from "./SliderNew";
import SliderType from "./SliderType";

const HomeLayout = () => {
    return (<>
        <Banner/>
        <SliderNew/>
        <VideoSection/>
        <SliderType/>
        <NewCollection/>
    </>)
};

export default HomeLayout;