const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
      <a
        href="index.html"
        className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5"
      >
        <h2 className="m-0">
          <i className="fa fa-car text-primary me-2"></i>Бумер
        </h2>
      </a>
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
          <a href="index.html" className="nav-item nav-link active">
            Главная
          </a>
          <a href="about.html" className="nav-item nav-link">
            О нас
          </a>
          <a href="courses.html" className="nav-item nav-link">
            Категории и цены
          </a>
          <div className="nav-item dropdown">
            <a
              href="/"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Страницы
            </a>
            <div className="dropdown-menu bg-light m-0">
              <a href="feature.html" className="dropdown-item">
                Подробнее
              </a>
              <a href="appointment.html" className="dropdown-item">
                Рассрочка
              </a>
              <a href="team.html" className="dropdown-item">
                Наши инструктора
              </a>
              <a href="testimonial.html" className="dropdown-item">
                Отзывы
              </a>
              <a href="404.html" className="dropdown-item">
                Страница ошибки
              </a>
            </div>
          </div>
          <a href="contact.html" className="nav-item nav-link">
            Контакты
          </a>
        </div>
        <a href="/" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
          Get Started
          <i className="fa fa-arrow-right ms-3"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
