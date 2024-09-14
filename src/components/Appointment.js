const Appointment = ({ about1, about2 }) => {
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
                alt=""
                style={{ objectFit: "cover" }}
              />
              <img
                className="position-absolute top-0 start-0 bg-white pe-3 pb-3"
                src={about2}
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <h6 className="text-primary text-uppercase mb-2">Запись</h6>
            <h1 className="display-6 mb-4">
              Запишитесь на тест и получите лицензию с первого раза
            </h1>
            <form>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control border-0 bg-light"
                      id="gname"
                      placeholder="Ваше имя"
                    />
                    <label htmlFor="gname">Ваше имя</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control border-0 bg-light"
                      id="gmail"
                      placeholder="Ваш email"
                    />
                    <label htmlFor="gmail">Ваш email</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control border-0 bg-light"
                      id="cname"
                      placeholder="Тип курсов"
                    />
                    <label htmlFor="cname">Тип курсов</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control border-0 bg-light"
                      id="cage"
                      placeholder="Тип автомобиля"
                    />
                    <label htmlFor="cage">Тип автомобиля</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control border-0 bg-light"
                      placeholder="Оставьте сообщение здесь"
                      id="message"
                      style={{ height: "150px" }}
                    ></textarea>
                    <label htmlFor="message">Сообщение</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Отправить
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
