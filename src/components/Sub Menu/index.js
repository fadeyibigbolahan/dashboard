import React from 'react';
import { SearchIcon } from '../../assets/svgIcons';

const SubMenu = () => {
  return (
    <div class="w-64 bg-grey-100 p-4 flex flex-col flex-none space-y-4">
        <div class="flex flex-row justify-between items-center mb-6">
          <h1 class="font-semibold text-2xl">Inbox</h1>
          <div>{SearchIcon}</div>
        </div>
        <div class="bg-red-200 h-64"></div>
        <div class="bg-red-200 h-64"></div>
    </div>
  );
};

export default SubMenu;
