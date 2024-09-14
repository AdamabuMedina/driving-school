import React from "react";
import { Link, useLocation } from "react-router-dom";

const PageHeader = () => {
  const location = useLocation();

  // Проверяем текущий путь и устанавливаем активную ссылку
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center">
        <h1 className="display-4 text-white animated slideInDown mb-4">
          {isActive("/about")
            ? "О нас"
            : isActive("/contacts")
            ? "Контакты"
            : isActive("/courses")
            ? "Популярные курсы"
            : isActive("/feature")
            ? "Подробнее о нас"
            : isActive("/appointment")
            ? "Узнать о рассрочке"
            : isActive("/team")
            ? "Наша команда"
            : isActive("/testimonial")
            ? "Отзывы"
            : isActive("/404")
            ? "404"
            : isActive("/contact")
            ? "Контакты"
            : "Страница"}
        </h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <Link className="text-white" to="/">
                Главная
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link className="text-white" to="/">
                Страницы
              </Link>
            </li>
            <li
              className={`breadcrumb-item text-primary ${
                isActive("/about") ||
                isActive("/contacts") ||
                isActive("/courses") ||
                isActive("/feature") ||
                isActive("/appointment") ||
                isActive("/team") ||
                isActive("/testimonial") ||
                isActive("/404") ||
                isActive("/contact")
                  ? "active"
                  : ""
              }`}
              aria-current="page"
            >
              {isActive("/about") && "О нас"}
              {isActive("/contacts") && "Контакты"}
              {isActive("/courses") && "Курсы"}
              {isActive("/feature") && "Подробнее"}
              {isActive("/appointment") && "Рассрочка"}
              {isActive("/team") && "Инструктора"}
              {isActive("/testimonial") && "Отзывы"}
              {isActive("/404") && "404"}
              {isActive("/contact") && "Контакты"}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
