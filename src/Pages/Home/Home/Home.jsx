import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Policy from '../Policy/Policy';
import Featured from '../Featured/Featured';
import PopularProduct from '../PopularProduct/PopularProduct';
import Testimonial from '../Testimonial/Testimonial';
import FeaturedBrands from '../FeaturedBrands/FeaturedBrands';
import WhatsAppChatSim from '../WhatsAppChatSim/WhatsAppChatSim';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Policy></Policy>
            <Category></Category>
            <PopularProduct></PopularProduct>
            <FeaturedBrands/>
            {/* <WhatsAppChatSim/> */}
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;