import { Card } from "antd";
import React, { useCallback, useState } from "react";
import { MenuIds, menuIdUrlKey } from "./constant";
import { getUrlQuery, setUrlQuery } from "../../utils/common";
import LeftMenu from "./components/left-menu";
import MainPage from "./components/main-page";
import { useTheme } from "../contexts/theme-context";
import "./style.css";

const ManagePage: React.FC = () => {
  const { theme } = useTheme(); 
  const [menuId, setMenuId] = useState<string>(() => {
    return getUrlQuery(menuIdUrlKey, false) as string || MenuIds.IMAGE;
  });

  const handleMenuChange = useCallback((newMenuKey: string) => {
    setMenuId(newMenuKey);
    setUrlQuery(menuIdUrlKey, newMenuKey);
  }, []);

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen p-2`}>
      <div className="max-w-7xl mx-auto">
        <Card
          title={<h1 className="text-xl md:text-2xl font-bold text-green-600">MANAGER</h1>}
          headStyle={{
            backgroundColor: theme === "dark" ? "#333" : "#FCD3C2",
          }}
          bodyStyle={{
            padding: 0,
          }}
          className="shadow-lg rounded-2xl overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            {/* LeftMenu */}
            <div className="md:w-1/4 w-full border-r border-gray-200 dark:border-gray-700">
              <LeftMenu menuId={menuId} setMenuId={handleMenuChange} />
            </div>

            {/* MainPage */}
            <div className="md:w-3/4 w-full">
              <MainPage menuId={menuId} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ManagePage;
