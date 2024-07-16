import Banner from "./banner";
import VideoSection from "./VideoSection";
import NewCollection from "./NewCollection";
import SliderNew from "./SliderNew";
import {useGetRandomProductsQuery} from "../../service/ProductService";

const HomeLayout = () => {
    const {data} = useGetRandomProductsQuery(8)
    return (<>
        <Banner/>
        <VideoSection/>
        <NewCollection/>
    </>)
};

export default HomeLayout;