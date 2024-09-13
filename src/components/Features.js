import about1 from "../img/about-1.jpg";
import about2 from "../img/about-2.jpg";

const Features = () => {
  return (
    <div className="container-xxl py-6">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase mb-2">
              Почему выбирают нас!
            </h6>
            <h1 className="display-6 mb-4">
              Лучшее агентство по обучению вождению в вашем городе
            </h1>
            <p className="mb-5">
              Временные изменения или ошибка. Боль и страдания. Временные
              изменения или ошибки. Временные изменения или ошибки, с болью и
              страданиями, и временные изменения или ошибки.
            </p>
            <div className="row gy-5 gx-4">
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary me-3">
                    <i className="fa fa-check text-white"></i>
                  </div>
                  <h5 className="mb-0">Полная лицензия</h5>
                </div>
                <span>
                  Идеально подходящий для вас курс, с полной поддержкой и
                  заботой
                </span>
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary me-3">
                    <i className="fa fa-check text-white"></i>
                  </div>
                  <h5 className="mb-0">Онлайн отслеживание</h5>
                </div>
                <span>
                  Удобный способ отслеживания вашего прогресса и графика занятий
                </span>
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary me-3">
                    <i className="fa fa-check text-white"></i>
                  </div>
                  <h5 className="mb-0">Доступная плата</h5>
                </div>
                <span>
                  Конкурентные цены и гибкая система оплаты для вашего удобства
                </span>
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                <div className="d-flex align-items-center mb-3">
                  <div className="flex-shrink-0 btn-square bg-primary me-3">
                    <i className="fa fa-check text-white"></i>
                  </div>
                  <h5 className="mb-0">Лучшие тренеры</h5>
                </div>
                <span>
                  Опытные и квалифицированные тренеры для достижения лучших
                  результатов
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div
              className="position-relative overflow-hidden pe-5 pt-5 h-100"
              style={{ minHeight: "400px" }}
            >
              <img
                className="position-absolute w-100 h-100"
                src={about1}
                alt="Обучение вождению"
                style={{ objectFit: "cover" }}
              />
              <img
                className="position-absolute top-0 end-0 bg-white ps-3 pb-3"
                src={about2}
                alt="Образец работы"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
