import Chicago from "./NestedComponents/Chicago";
import Specials from "./NestedComponents/Specials";
import Testimonials from "./NestedComponents/Testimonials";

const HomePage = () => {
    return(
        <>
            <div className="ChicagoWrapper">
                <Chicago />
            </div>
            <Specials />
            <div className="Testimonials">
                <Testimonials />
            </div>
        </>
    );
}

export default HomePage;