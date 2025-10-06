import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import FeaturdSlider from "./FeaturdSlider";
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed  pt-8 my-20">
            <SectionTitle  subHeading="check it out" heading="from our Grooming Guide"></SectionTitle>
        
            <FeaturdSlider></FeaturdSlider>
        
        </div>
    );
};

export default Featured;