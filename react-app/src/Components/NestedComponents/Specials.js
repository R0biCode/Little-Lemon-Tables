import CTAButton from "./CTAButton";
import HomeCard from "./HomeCard";
import greekSalad from "../../Images/greekSalad.jpg";
import bruschetta from "../../Images/bruchetta.svg"
import lemonDessert from "../../Images/lemonDessert.jpg"
const Specials = () => {
    return(
        <>
        <div className="FirstWrapper">
            <h1 className="SpecialsHeading">Specials</h1>
            <CTAButton text="Online Menu" className="ChicagoButton"/>
        </div>
        <div className="SecondWrapper">
            <HomeCard
            name="Greek Salad"
             price="$12.99"
              imgSrc={greekSalad}
               content="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
               <HomeCard
            name="Bruschetta"
             price="$5.99"
              imgSrc={bruschetta}
               content="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
               <HomeCard
            name="Lemon Dessert"
             price="$5.00"
              imgSrc={lemonDessert}
               content="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
        </div>

        </>
    );
}

export default Specials;