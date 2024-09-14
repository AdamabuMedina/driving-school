import React from "react";

const NotFound = () => {
  return (
    <div className="container-xxl py-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
            <h1 className="display-1">404</h1>
            <h1 className="mb-4">Страница не найдена</h1>
            <p className="mb-4">
              Извините, но страница, которую вы ищете, не существует на нашем
              сайте! Возможно, вернитесь на главную страницу или попробуйте
              воспользоваться поиском?
            </p>
            <a className="btn btn-primary py-3 px-5" href="/">
              Вернуться на главную
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
