import { useNavigate } from 'react-router-dom';

function Header(){
    const navigate = useNavigate();
    return(
    <img onClick={() => navigate("/")} className='LittleLemonLogo' alt="Little Lemon Logo" height="50px" width="200px" src={require('../Images/LittleLemonLogo.jpg')} />
)};

export default Header;