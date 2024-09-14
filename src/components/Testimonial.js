import Slider from "react-slick";

const Testimonial = ({ testimonial1, testimonial2, testimonial3 }) => {
  const settings = {
    autoplay: false,
    speed: 1000,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container-xxl py-6">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <h6 className="text-primary text-uppercase mb-2">Отзывы</h6>
          <h1 className="display-6 mb-4">Что говорят наши клиенты!</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
            <Slider {...settings}>
              <div className="testimonial-item text-center">
                <div className="position-relative mb-5">
                  <img
                    className="img-fluid rounded-circle mx-auto"
                    src={testimonial1}
                    alt="Отзыв 1"
                  />
                  <div
                    className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-quote-left fa-2x text-primary"></i>
                  </div>
                </div>
                <p className="fs-4">Текст отзыва от первого клиента.</p>
                <hr className="w-25 mx-auto" />
                <h5>Имя клиента 1</h5>
                <span>Профессия</span>
              </div>
              <div className="testimonial-item text-center">
                <div className="position-relative mb-5">
                  <img
                    className="img-fluid rounded-circle mx-auto"
                    src={testimonial2}
                    alt="Отзыв 2"
                  />
                  <div
                    className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-quote-left fa-2x text-primary"></i>
                  </div>
                </div>
                <p className="fs-4">Текст отзыва от второго клиента.</p>
                <hr className="w-25 mx-auto" />
                <h5>Имя клиента 2</h5>
                <span>Профессия</span>
              </div>
              <div className="testimonial-item text-center">
                <div className="position-relative mb-5">
                  <img
                    className="img-fluid rounded-circle mx-auto"
                    src={testimonial3}
                    alt="Отзыв 3"
                  />
                  <div
                    className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-quote-left fa-2x text-primary"></i>
                  </div>
                </div>
                <p className="fs-4">Текст отзыва от третьего клиента.</p>
                <hr className="w-25 mx-auto" />
                <h5>Имя клиента 3</h5>
                <span>Профессия</span>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
