import CTAButton from './CTAButton';

const Chicago = () =>{
    return(
        <>
            <div className="ChicagoWrapper">
                <div className="TextWrapper">
                    <h1 className="PrimaryHeader">
                        Little Lemon
                    </h1>
                    <h2 className="SecondaryHeader">
                        Chicago
                    </h2>
                    <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <CTAButton className="ChicagoButton" text="Reserve a Table!" to="/booking" />
                </div>
                <div>
                    <img className='ChicagoImage' alt="Waiter showing off Little Lemon dishes" height='400px' src={require('../../Images/restauranfood.jpg')} />
                </div>
            </div>
        </>
    );
}

export default Chicago;