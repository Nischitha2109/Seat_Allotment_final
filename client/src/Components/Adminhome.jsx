import React from 'react';
import Copyright from './Copyright';
import './Adminhome.css';

export const Adminhome = () => {
  return (
    <div className='admin'>
      <div className='content'>
        <h1>Welcome Admin!</h1>
        <button className="button">Run Allocation Algorithm</button>
      </div>
      <Copyright />
    </div>
  );
};

export default Adminhome;
