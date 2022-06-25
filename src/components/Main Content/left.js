import React from 'react';
import { academicCapIcon, userIcon, userIconSm } from '../../assets/svgIcons';

const Left = () => {
  return <div class="flex flex-col w-1/5">
      <div class="flex-none h-24 bg-red-200">top</div>
      <div class="flex-auto overflow-y-auto">
        <div class="block border-b">
          <div class="border-l-2 border-blue-500 p-3 border-transparent hover:bg-gray-100 space-y-4">
            <div class="flex flex-row items-center space-x-2">
              <div>{userIcon}</div>
              <strong class="flex-grow text-sm">Nikola Tesla</strong>
              <div class="text-xs text-gray-600">5hrs</div>
            </div>
            <div class="flex flex-row items-center space-x-1">
              <div class="flex-none">{userIconSm}</div>
              <div class="flex-grow truncate text-xs">some message contentsome message contentsome message contentsome message contentsome</div>
            </div>
          </div>
        </div>

        <div class="block border-b">
          <div class="border-l-2 border-blue-500 bg-blue-100 p-3 space-y-4">
            <div class="flex flex-row items-center space-x-2">
              <div>{userIcon}</div>
              <strong class="flex-grow text-sm">Nikola Tesla</strong>
              <div class="text-xs text-gray-600">5hrs</div>
            </div>
            <div class="flex flex-row items-center space-x-1">
              <div class="flex-none">{userIconSm}</div>
              <div class="flex-grow truncate text-xs">some message contentsome message contentsome message contentsome message contentsome</div>
            </div>
          </div>
        </div>
      </div>
      <div class=""></div>
  </div>;
};

export default Left;
