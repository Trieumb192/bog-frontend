import { ReadOutlined, TrophyOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { SelectInfo } from "rc-menu/lib/interface";
import React, { useCallback } from "react";
import { MenuIds } from "../constant";
import { useTheme } from "../../contexts/theme-context";

interface LeftMenuProps {
  menuId: string;
  setMenuId: (key: string) => void;
}

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: Array<MenuItem>,
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  };
}

const LeftMenu: React.FC<LeftMenuProps> = ({ menuId, setMenuId }) => {
  const { theme } = useTheme();

  const items: Array<MenuItem> = [
    getItem("Image", MenuIds.IMAGE, <TrophyOutlined />),
    getItem("Philosophy", MenuIds.PHILOSOPHY, <ReadOutlined />),
    getItem("Blog", MenuIds.BLOG, <VideoCameraOutlined />),
  ];

  const onSelect = useCallback((value: SelectInfo) => {
    setMenuId(value.key);
  }, [setMenuId]);

  return (
    <div
      className={`h-full min-h-screen p-4
        ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}
        transition-colors duration-300
      `}
    >
      <Menu
        onSelect={onSelect}
        selectedKeys={[menuId]}
        items={items}
        theme={theme === "dark" ? "dark" : "light"}
        mode="inline"
        className="border-none"
      />
    </div>
  );
};

export default LeftMenu;
