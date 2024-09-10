import TCard from "./TestimonialCards";
import SquareProfilePicture from "../../Images/SquareProfilePicture.png"
const Testimonials = () => {
    return(
        <>
        <div className="TestimonialW">
        <TCard rating="4.9" name="Jacob Flurry" imgSrc={SquareProfilePicture} message='“Little Lemon is actually better than so many other restaurants.”' />
        <TCard rating="4.6" name="Jenny Fields" imgSrc={SquareProfilePicture} message='“I love little lemon SO much it’s adorable and amazing!”' />
        <TCard rating="5.0" name="Taylor Sweep" imgSrc={SquareProfilePicture} message='“I’m in love with the Little Lemon dishes.”' />
        <TCard rating="4.7" name="Robert Gabriel" imgSrc={SquareProfilePicture} message='“Little Lemon saved my life with it’s signature pasta!”' />
        </div>
        </>
    );
}

export default Testimonials;