import React, { useState, useEffect } from "react";
import {
  MenuOutlined,
  CloseOutlined,
  HomeOutlined,
  UserOutlined,
  TeamOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [pathname, setPathname] = useState("/");
  const [title, setTitle] = useState("Home");
  const history = useHistory();

  const setUrl = (url) => {
    history.push(url);
    setPathname(url);
    setMenu(false);
  };
  useEffect(() => {
    if (pathname === "/") {
      setTitle("Home");
    } else if (pathname === "/group") {
      setTitle("Group");
    } else if (pathname === "/friend") {
      setTitle("Friend");
    } else if (pathname === "/setting") {
      setTitle("Setting");
    }
  }, [pathname]);

  return (
    <>
      <header className="bg-blue-300 h-14 flex justify-between items-center px-2 sm:px-6">
        <div>Brand</div>
        <div className="mr-auto ml-6">{title}</div>
        <button
          onClick={() => setMenu(!menu)}
          className="sm:hidden flex items-center p-2 text-2xl"
        >
          {menu ? <CloseOutlined /> : <MenuOutlined />}
        </button>
        <div className="hidden sm:block">
          <div className="flex space-x-6">
            <button
              className={`flex items-center justify-center text-4xl px-2 hover:bg-blue-600 rounded-b-lg rounded-t-md ${
                pathname === "/" ? "border-b-4 border-gray-200" : null
              }`}
            >
              <HomeOutlined className="pb-1" onClick={() => setUrl("/")} />
            </button>
            <button
              className={`flex items-center justify-center text-4xl px-2 hover:bg-blue-600  rounded-b-lg rounded-t-md ${
                pathname === "/group" ? "border-b-4 border-gray-200" : null
              }`}
            >
              <TeamOutlined className="pb-1" onClick={() => setUrl("/group")} />
            </button>
            <button
              className={`flex items-center justify-center text-4xl px-2 hover:bg-blue-600  rounded-b-lg rounded-t-md ${
                pathname === "/friend" ? "border-b-4 border-gray-200" : null
              }`}
            >
              <UserOutlined
                className="pb-1"
                onClick={() => setUrl("/friend")}
              />
            </button>
            <button
              className={`flex items-center justify-center text-4xl px-2 hover:bg-blue-600  rounded-b-lg rounded-t-md ${
                pathname === "/setting" ? "border-b-4 border-gray-200" : null
              }`}
            >
              <SettingOutlined
                className="pb-1"
                onClick={() => setUrl("/setting")}
              />
            </button>
          </div>
        </div>
      </header>
      <div className={`sm:hidden ${menu !== true ? "hidden" : null}`}>
        <div className="flex justify-around bg-blue-400 py-1">
          <button
            className={`flex items-center justify-center text-4xl px-2 hover:bg-blue-600  rounded-b-lg rounded-t-md ${
              pathname === "/" ? "border-b-4 border-gray-200" : null
            }`}
          >
            <HomeOutlined className="pb-1" onClick={() => setUrl("/")} />
          </button>

          <button
            className={`flex items-center justify-center text-4xl px-2 hover:bg-blue-600  rounded-b-lg rounded-t-md ${
              pathname === "/group" ? "border-b-4 border-gray-200" : null
            }`}
          >
            <TeamOutlined className="pb-1" onClick={() => setUrl("/group")} />
          </button>
          <button
            className={`flex items-center justify-center text-4xl px-2 hover:bg-blue-600  rounded-b-lg rounded-t-md ${
              pathname === "/friend" ? "border-b-4 border-gray-200" : null
            }`}
          >
            <UserOutlined className="pb-1" onClick={() => setUrl("/friend")} />
          </button>
          <button
            className={`flex items-center justify-center text-4xl px-2 hover:bg-blue-600  rounded-b-lg rounded-t-md ${
              pathname === "/setting" ? "border-b-4 border-gray-200" : null
            }`}
          >
            <SettingOutlined
              className="pb-1"
              onClick={() => setUrl("/setting")}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
