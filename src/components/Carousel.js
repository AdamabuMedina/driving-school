import courses1 from "../img/carousel-1.jpg";
import courses2 from "../img/carousel-2.jpg";

const Carousel = () => {
  return (
    <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
      <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src={courses1} alt="Фото-1" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-7">
                    <h1 className="display-2 text-light mb-5 animated slideInDown">
                      Учитесь водить с уверенностью
                    </h1>
                    <a href="/" className="btn btn-primary py-sm-3 px-sm-5">
                      Узнать больше
                    </a>
                    <a href="/" className="btn btn-light py-sm-3 px-sm-5 ms-3">
                      Категории и цены
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src={courses2} alt="Фото-2" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-7">
                    <h1 className="display-2 text-light mb-5 animated slideInDown">
                      Безопасное вождение — наш главный приоритет
                    </h1>
                    <a href="/" className="btn btn-primary py-sm-3 px-sm-5">
                      Узнать больше
                    </a>
                    <a href="/" className="btn btn-light py-sm-3 px-sm-5 ms-3">
                      Категории и цены
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Предыдущий</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
