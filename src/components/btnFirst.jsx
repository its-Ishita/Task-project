import { useState } from 'react';
import Taskform from './formCompo';

const BtnFirst = ({setActive}) => {

  return (
    <>
     <div className='fst-one'>
      <button className='first-btn' onClick={() => setActive(true)}>
        New Task</button>
     </div>
    
    </> 
  );
};

export default BtnFirst;
