import React from "react";
import { MenuIds } from "../constant";
import ImageManager from "./image";
import PhilosophyManager from "./philosophy";
import BlogManager from "./blog";

interface MainPageProps {
  menuId: string;
}
const MainPage: React.FC<MainPageProps> = props => {
  const {menuId} = props;

  const renderForm = () => {
    switch (menuId) {
      case MenuIds.IMAGE:
        return (
          <ImageManager />
        );
      case MenuIds.PHILOSOPHY:
        return (
          <PhilosophyManager />
        );
      case MenuIds.BLOG:
        return (
          <BlogManager />
        );
      default:
        return <>Lỗi</>;
    }
  };

  return renderForm();
};
export default MainPage;
