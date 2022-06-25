import React from 'react';

const Right = () => {
  return(
    <div class="w-1/5 bg-gray-200 overflow-y-auto flex flex-col">
      <div class="h-64 flex-none border-b border-gray-400">
      </div>
      <div class="flex flex-col space-y-4 p-4">
        <div class="flex flex-none h-64 bg-white border rounded p-4 justify-center items-center">
          card content
        </div>
      </div>
    </div>
  );
};

export default Right;
