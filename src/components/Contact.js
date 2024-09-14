const Contact = () => {
  return (
    <div className="container-xxl py-6">
      <div className="container">
        <div className="row g-5">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ minHeight: "450px" }}
          >
            <div className="position-relative h-100" id="map"></div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <h6 className="text-primary text-uppercase mb-2">
              Свяжитесь с нами
            </h6>
            <h1 className="display-6 mb-4">
              Если у вас есть вопросы, свяжитесь с нами
            </h1>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control border-0 bg-light"
                      id="name"
                      placeholder="Ваше имя"
                    />
                    <label htmlFor="name">Ваше имя</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control border-0 bg-light"
                      id="email"
                      placeholder="Ваш email"
                    />
                    <label htmlFor="email">Ваш email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control border-0 bg-light"
                      id="subject"
                      placeholder="Тема"
                    />
                    <label htmlFor="subject">Тема</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control border-0 bg-light"
                      placeholder="Оставьте сообщение"
                      id="message"
                      style={{ height: "150px" }}
                    ></textarea>
                    <label htmlFor="message">Сообщение</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary py-3 px-5" type="submit">
                    Отправить сообщение
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

export default Contact;
