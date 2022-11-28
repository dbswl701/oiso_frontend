import { useState } from 'react';
import './MyPage.css';
import Item from './Item'
import Navbar from '../Navbar'
import Sidebar from './Sidebar'
import InquiryListItem from './InquiryListItem';

function InquiryList({itemList}) {

  return (
    <>
      <Navbar />
      <Sidebar />
      {console.log({itemList})};
      {itemList.map((item)=>{
        <p>hello</p>
        return <InquiryListItem item={item} key={item.id} />
      })} 

    </>
  );
}

export default InquiryList;
