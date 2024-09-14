const About = ({ about1, about2 }) => {
  return (
    <div className="container-xxl py-6">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div
              className="position-relative overflow-hidden ps-5 pt-5 h-100"
              style={{ minHeight: "400px" }}
            >
              <img
                className="position-absolute w-100 h-100"
                src={about1}
                alt="Основное изображение"
                style={{ objectFit: "cover" }}
              />
              <img
                className="position-absolute top-0 start-0 bg-white pe-3 pb-3"
                src={about2}
                alt="Маленькое изображение"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
              <h6 className="text-primary text-uppercase mb-2">О нас</h6>
              <h1 className="display-6 mb-4">
                Мы помогаем студентам сдать экзамен и получить лицензию с
                первого раза
              </h1>
              <p>
                Временная ошибка или временное изменение. Боль и страдания.
                Временные изменения или ошибки. Временная ошибка и неудача, как
                и прежде, так и здесь, в процессе получения лицензии.
              </p>
              <p className="mb-4">
                Временная ошибка или временное изменение. Боль и страдания.
                Временные изменения или ошибки. Временная ошибка и неудача, как
                и прежде, так и здесь, в процессе получения лицензии.
              </p>
              <div className="row g-2 mb-4 pb-2">
                <div className="col-sm-6">
                  <i className="fa fa-check text-primary me-2"></i> Полностью
                  лицензированы
                </div>
                <div className="col-sm-6">
                  <i className="fa fa-check text-primary me-2"></i> Онлайн
                  отслеживание
                </div>
                <div className="col-sm-6">
                  <i className="fa fa-check text-primary me-2"></i> Доступная
                  стоимость
                </div>
                <div className="col-sm-6">
                  <i className="fa fa-check text-primary me-2"></i> Лучшие
                  тренеры
                </div>
              </div>
              <div className="row g-4">
                <div className="col-sm-6">
                  <a className="btn btn-primary py-3 px-5" href="/">
                    Читать далее
                  </a>
                </div>
                <div className="col-sm-6">
                  <a
                    className="d-inline-flex align-items-center btn btn-outline-primary border-2 p-2"
                    href="tel:+79182214700"
                  >
                    <span className="flex-shrink-0 btn-square bg-primary">
                      <i className="fa fa-phone-alt text-white"></i>
                    </span>
                    <span className="px-3">+7 918 221-47-00</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
