import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import FeaturdSlider from "./FeaturdSlider";
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed  pt-8 my-20">
            <SectionTitle  subHeading="check it out" heading="from our Grooming Guide"></SectionTitle>
           {/* <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40">
           <div >
                <img className="w-[500px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6FSDptD0n_SP6UVZMylzbrmYyMXt7UeJXJQ&s" alt="" />
            </div> */}
            <FeaturdSlider></FeaturdSlider>
            {/* <div className=" md:ml-10 ">
                <p className="my-2">Watch LIVE as our product expert shares crative <br /> holiday gifting ideas,plus chance to win a luxurious giveaway.
                   <br />  Mark Your calendars for 10/30 at 1pm.</p>
                <button className="btn btn-outline bottom-0 border-b-4"><span className="uppercase text-white">tune in</span></button>
            </div> 
            </div> */}
        
        </div>
    );
};

export default Featured;