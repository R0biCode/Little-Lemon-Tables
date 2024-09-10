const AboutPart = () =>{
    return(
        <>
            <div className="AboutWrapper">
                <div className="TextWrapper">
                    <h1 className="PrimaryAboutHeader">
                        Little Lemon
                    </h1>
                    <h2 className="SecondaryAboutHeader">
                        Chicago
                    </h2>
                    <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <p>
                    Our Little Adventure started back in 1984 with the first Little Lemon Restaurant! (Back then we didn’t have such killer brochettes).
                    </p>
                    <p>
                    Join us on our culinary adventure by either ordering online, or reserving a table in one of our many restaurants throughout the US or Europe!
                    </p>
                </div>
                <div>
                    <img className='AboutImage' alt="Waiter showing off Little Lemon dishes" height='400px' src={require('../../Images/MarioAdrian.jpg')} />
                </div>
            </div>
        </>
    );
}

export default AboutPart;