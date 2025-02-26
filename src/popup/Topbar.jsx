
import './Topbar.css';
import logo from '../assets/listed_mini_icon.png';
import { FaQuestionCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export const Topbar = () => {
  const navigate = useNavigate();
  return (
    <div className='top-bar'>
      <div className='upper-left-corner'>
        <div className='logo'>
          <img src={logo} alt='Mini Logo' />
        </div>
        <div className='brand-name'>
          <p>Listed! </ p>
        </div>
      </div>
      <div className='upper-right-corner' onClick={() => navigate('/feedback')}>
        <FaQuestionCircle className='question-mark' />  
      </div>
    </div>
  );
}

export default Topbar;