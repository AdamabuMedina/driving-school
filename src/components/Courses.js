const Courses = ({ courses1, courses2, courses3 }) => {
  return (
    <div className="container-xxl courses my-6 py-6 pb-0">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <h6 className="text-primary text-uppercase mb-2">Популярные курсы</h6>
          <h1 className="display-6 mb-4">
            Наши курсы помогут вам улучшить навыки вождения
          </h1>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
              <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">
                  $99
                </div>
                <h5 className="mb-3">Уроки на автомате</h5>
                <p>
                  Временное изменение или ошибка. Боль и страдания. Временные
                  изменения или ошибки.
                </p>
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item small">
                    <i className="fa fa-signal text-primary me-2"></i>Начальный
                  </li>
                  <li className="breadcrumb-item small">
                    <i className="fa fa-calendar-alt text-primary me-2"></i>3
                    недели
                  </li>
                </ol>
              </div>
              <div className="position-relative mt-auto">
                <img
                  className="img-fluid"
                  src={courses1}
                  alt="Уроки на автомате"
                />
                <div className="courses-overlay">
                  <a className="btn btn-outline-primary border-2" href="/">
                    Читать далее
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
              <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">
                  $99
                </div>
                <h5 className="mb-3">Уроки вождения на трассе</h5>
                <p>
                  Временное изменение или ошибка. Боль и страдания. Временные
                  изменения или ошибки.
                </p>
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item small">
                    <i className="fa fa-signal text-primary me-2"></i>Начальный
                  </li>
                  <li className="breadcrumb-item small">
                    <i className="fa fa-calendar-alt text-primary me-2"></i>3
                    недели
                  </li>
                </ol>
              </div>
              <div className="position-relative mt-auto">
                <img
                  className="img-fluid"
                  src={courses2}
                  alt="Уроки вождения на трассе"
                />
                <div className="courses-overlay">
                  <a className="btn btn-outline-primary border-2" href="/">
                    Читать далее
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
              <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">
                  $99
                </div>
                <h5 className="mb-3">Международные водительские права</h5>
                <p>
                  Временное изменение или ошибка. Боль и страдания. Временные
                  изменения или ошибки.
                </p>
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item small">
                    <i className="fa fa-signal text-primary me-2"></i>Начальный
                  </li>
                  <li className="breadcrumb-item small">
                    <i className="fa fa-calendar-alt text-primary me-2"></i>3
                    недели
                  </li>
                </ol>
              </div>
              <div className="position-relative mt-auto">
                <img
                  className="img-fluid"
                  src={courses3}
                  alt="Международные водительские права"
                />
                <div className="courses-overlay">
                  <a className="btn btn-outline-primary border-2" href="/">
                    Читать далее
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-8 my-6 mb-0 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="bg-primary text-center p-5">
              <h1 className="mb-4">Записаться на занятия</h1>
              <form>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="gname"
                        placeholder="Имя родителя"
                      />
                      <label htmlFor="gname">Ваше имя</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control border-0"
                        id="gmail"
                        placeholder="Email родителя"
                      />
                      <label htmlFor="gmail">Ваш email</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="cname"
                        placeholder="Имя ребенка"
                      />
                      <label htmlFor="cname">Тип курса</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="cage"
                        placeholder="Возраст ребенка"
                      />
                      <label htmlFor="cage">Тип автомобиля</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control border-0"
                        placeholder="Оставьте сообщение здесь"
                        id="message"
                        style={{ height: "100px" }}
                      ></textarea>
                      <label htmlFor="message">Сообщение</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-dark w-100 py-3" type="submit">
                      Отправить
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
