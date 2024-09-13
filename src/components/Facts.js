const Facts = () => {
  return (
    <div className="container-fluid facts py-5 pt-lg-0">
      <div className="container py-5 pt-lg-0">
        <div className="row gx-0">
          <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
            <div
              className="bg-white shadow d-flex align-items-center h-100 p-4"
              style={{ minHeight: "150px" }}
            >
              <div className="d-flex">
                <div className="flex-shrink-0 btn-lg-square bg-primary">
                  <i className="fa fa-car text-white"></i>
                </div>
                <div className="ps-4">
                  <h5>Легкое обучение вождению</h5>
                  <span>
                    Простой способ обучения с подробным объяснением и
                    практическими занятиями
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
            <div
              className="bg-white shadow d-flex align-items-center h-100 p-4"
              style={{ minHeight: "150px" }}
            >
              <div className="d-flex">
                <div className="flex-shrink-0 btn-lg-square bg-primary">
                  <i className="fa fa-users text-white"></i>
                </div>
                <div className="ps-4">
                  <h5>Национальные инструкторы</h5>
                  <span>
                    Профессиональные инструктора с многолетним опытом работы
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
            <div
              className="bg-white shadow d-flex align-items-center h-100 p-4"
              style={{ minHeight: "150px" }}
            >
              <div className="d-flex">
                <div className="flex-shrink-0 btn-lg-square bg-primary">
                  <i className="fa fa-file-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5>Получение лицензии</h5>
                  <span>
                    Помощь в получении водительских прав и необходимой
                    документации
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
