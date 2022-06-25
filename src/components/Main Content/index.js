import React from 'react';
import Center from './center';
import Left from './left';
import Right from './right';

const MainContent = () => {
  return (
    <div class="flex flex-row flex-auto bg-white rounded-tl-xl border-l shadow-xl">
       {/* <Left /> */}
       <Center />
       <Right />
    </div>
  );
};

export default MainContent;
