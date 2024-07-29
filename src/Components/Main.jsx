import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

function Main() {
  return (
    <div className='w-full h-full bg-teal-700 flex flex-col md:flex-row'>
      <Sidebar />
      <Content />
    </div>
  );
}

export default Main;
