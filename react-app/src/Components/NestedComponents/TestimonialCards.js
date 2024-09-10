const TCard = ({ rating, name, imgSrc, message }) => {
    return(
        <>
        <div className="TCardWrapper">
        <h3 className="TH3">Rating {rating}</h3>
        <div className="TWrapper">
            <img alt="Testimonial" src={imgSrc} width="70px" />
            <h3>{name}</h3>
        </div>
        <p>
            {message}
        </p>
        </div>
        </>
    );
}

export default TCard;