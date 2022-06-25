import React from 'react';
import { academicCapIcon } from '../../assets/svgIcons';

const Center = () => {
  return <div class="w-3/5 border-l border-r border-gray-400 flex flex-col">
      <div class="flex-none h-16 flex flex-rol justify-between items-center p-4">
        <div class="flex flex-col space-y-1">
          <strong>Nikola Tesla</strong>
          <input placeholder="Add conversation title" class="text-sm border-dashed outline-none border-b text-black-200 placeholder-gray-600" />
        </div>
        <div class="flex flex-row items-center space-x-1">
          {academicCapIcon}
          {academicCapIcon}
          {academicCapIcon}
          {academicCapIcon}
        </div>
      </div>
      <div class="flex-auto overflow-y-auto bg-green-200">b</div>
      <div class="flex-none h-40 p-4">
        <textarea class="w-full h-full outline-none border focus:border-blue-600 rounded p-4 shadow-lg">Hi</textarea>
      </div>
  </div>;
};

export default Center;
