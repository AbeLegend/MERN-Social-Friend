import React, { useState } from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const App = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex flex-col justify-between bg-green-300 h-screen">
      {/* header */}
      <header className="bg-blue-300 h-14 flex justify-between items-center px-2 ">
        <div>Brand</div>
        <div className="mr-auto ml-6">Username</div>
        <button onClick={() => setMenu(!menu)} className="sm:hidden flex items-center p-2 text-2xl">
          {menu ? <CloseOutlined /> : <MenuOutlined />}
        </button>
        <div className="hidden sm:block">
          <div className="flex bg-blue-500 space-x-6">
            <div className="bg-gray-500 w-10 h-10 rounded-full"></div>
            <div className="bg-gray-500 w-10 h-10 rounded-full"></div>
            <div className="bg-gray-500 w-10 h-10 rounded-full"></div>
            <div className="bg-gray-500 w-10 h-10 rounded-full"></div>
          </div>
        </div>

      </header>
      <div className={`sm:hidden ${menu !== true ? 'hidden' : null}`}>
        <div className="flex justify-around bg-blue-500 py-2">
          <div className="bg-gray-500 w-10 h-10 rounded-full"></div>
          <div className="bg-gray-500 w-10 h-10 rounded-full"></div>
          <div className="bg-gray-500 w-10 h-10 rounded-full"></div>
          <div className="bg-gray-500 w-10 h-10 rounded-full"></div>
        </div>
      </div>

      {/* content */}
      <main className="bg-red-300 mb-auto">Content</main>
      {/* footer */}
      <footer className="bg-yellow-300 h-14">Footer</footer>
    </div>
  )
}

export default App
