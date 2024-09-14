import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Импорт useLocation

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Получение текущего маршрута

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 ${
        isScrolled ? "shadow-sm" : ""
      }`}
      style={{ top: isScrolled ? "0px" : "-100px" }}
    >
      <Link
        to="/"
        className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5"
      >
        <h2 className="m-0">
          <i className="fa fa-car text-primary me-2"></i>Бумер
        </h2>
      </Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link
            to="/"
            className={`nav-item nav-link ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            Главная
          </Link>
          <Link
            to="/about"
            className={`nav-item nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            О нас
          </Link>
          <Link
            to="/courses"
            className={`nav-item nav-link ${
              location.pathname === "/courses" ? "active" : ""
            }`}
          >
            Популярные курсы
          </Link>
          <div className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Страницы
            </Link>
            <div className="dropdown-menu bg-light m-0">
              <Link
                to="/feature"
                className={`dropdown-item ${
                  location.pathname === "/feature" ? "active" : ""
                }`}
              >
                Подробнее
              </Link>
              <Link
                to="/appointment"
                className={`dropdown-item ${
                  location.pathname === "/appointment" ? "active" : ""
                }`}
              >
                Рассрочка
              </Link>
              <Link
                to="/team"
                className={`dropdown-item ${
                  location.pathname === "/team" ? "active" : ""
                }`}
              >
                Наши инструктора
              </Link>
              <Link
                to="/testimonial"
                className={`dropdown-item ${
                  location.pathname === "/testimonial" ? "active" : ""
                }`}
              >
                Отзывы
              </Link>
              <Link
                to="/404"
                className={`dropdown-item ${
                  location.pathname === "/404" ? "active" : ""
                }`}
              >
                Страница ошибки
              </Link>
            </div>
          </div>
          <Link
            to="/contact"
            className={`nav-item nav-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            Контакты
          </Link>
        </div>
        <Link
          to="/contact"
          className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
        >
          Начать
          <i className="fa fa-arrow-right ms-3"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
