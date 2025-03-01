import '../style.css'
import brand_pic from '../images/brand_pic.png';
export default function NavBar(){
    return(
        <ul className="NavBar-links flex justify-center space-x-10 items-center p-4">
            <img src={brand_pic} alt="brand picture" className=" w-12 h-auto"/>
            <li className='ml-120'>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>

            <button className="SignUp-btn bg-teal-950  text-white py-2 px-4 rounded-3xl ml-100" >Sign Up</button>
        </ul>
    );
}