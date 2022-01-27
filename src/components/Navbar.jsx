import  {useState} from 'react';
import pic from '../assets/logo.png';
import navPic from '../assets/nav-pic.jpg'
import {MdHomeFilled} from 'react-icons/md';
import {BiMessageRoundedDots} from 'react-icons/bi';
import {BiMessageSquareAdd} from 'react-icons/bi';
import {IoCompassOutline} from 'react-icons/io5';
import {FiHeart} from 'react-icons/fi';
import './navbar.css'
import Main from './Main';



function Navbar() {
    const [searchTerm, setSearchTerm] = useState('');

    return(
       <div className="nav">
           <ul className="nav__list">
               <li className="nav__link nav__link--logo">
                <img src={pic}  alt='logo'/>
               </li>
               <li className="nav__link nav__link--search">
                   <input type="search" placeholder="Search"/>
                   {/* {Main.filter((val) => {
                       if (searchTerm =="") {
                           return val
                       } else if (val.users.name.toLoverCase().includes(searchTerm.toLoverCase())) {
                            return val
                       }
                   }).map((val, key) =>{
                       return <div className='user' key={key}>
                                {val.name}
                              </div>
                   })}, */}
               </li>
                <li className="nav__link nav__link--icon">
                    <MdHomeFilled/>
                </li>
                <li className="nav__link nav__link--icon">
                    <BiMessageRoundedDots/>
                </li>
                <li className="nav__link nav__link--icon">
                    <BiMessageSquareAdd/>
                </li>
                <li className="nav__link nav__link--icon">
                    <IoCompassOutline/>
                </li>
                <li className="nav__link nav__link--icon">
                    <FiHeart/>
                </li>
                <li className="nav__link nav__link--img">
                    <img src={navPic}  alt="navPic" />
                </li>

           </ul>
       </div>
    )
};
export default Navbar;