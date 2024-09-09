import CTAButton from "./CTAButton";

const HomeCard = ({ name, imgSrc, price, content }) => {
    return (
        <div className="CardBody">
            <img width="100%" alt={name} src={imgSrc} /> {/* Pass the image src directly */}
            <div className="CardContent">
                <div className="CardNamePrice">
                    <h3>{name}</h3>
                    <h3 className="CardPrice">{price}</h3>
                </div>
                <p>{content}</p>
                <div className="CardDelivery">
                    <CTAButton className="ChicagoButton" text="Order a delivery" />
                </div>
            </div>
        </div>
    );
};

export default HomeCard;