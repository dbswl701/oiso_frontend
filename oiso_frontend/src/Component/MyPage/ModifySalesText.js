import { useState } from 'react';
import './MyPage.css';
import Item from './Item'
import Navbar from '../Navbar'
import Sidebar from './Sidebar'
import RegistItem from '../RegistItem'
function ModifySalesText({itemList, whichList}) {

  return (
    <>
      <Navbar />
      <Sidebar />
      <div id='modify-item' style={{marginLeft: 280 + 'px'}}>
        <RegistItem />
      </div>
    </>
  );
}

export default ModifySalesText;
