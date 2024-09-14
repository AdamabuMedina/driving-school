const Team = ({ team1, team2, team3, team4 }) => {
  return (
    <div className="container-xxl py-6">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <h6 className="text-primary text-uppercase mb-2">
            Познакомьтесь с командой
          </h6>
          <h1 className="display-6 mb-4">
            Мы обладаем большим опытом вождения
          </h1>
        </div>
        <div className="row g-0 team-items">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item position-relative">
              <div className="position-relative">
                <img className="img-fluid" src={team1} alt="Команда 1" />
                <div className="team-social text-center">
                  <a
                    className="btn btn-square btn-outline-primary border-2 m-1"
                    href="/"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-square btn-outline-primary border-2 m-1"
                    href="/"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-square btn-outline-primary border-2 m-1"
                    href="/"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h5 className="mt-2">Имя Фамилия</h5>
                <span>Тренер</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item position-relative">
              <div className="position-relative">
                <img className="img-fluid" src={team2} alt="Команда 2" />
                <div className="team-social text-center">
                  <a
                    className="btn btn-square btn-outline-primary border-2 m-1"
                    href="/"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-square btn-outline-primary border-2 m-1"
                    href="/"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-square btn-outline-primary border-2 m-1"
                    href="/"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h5 className="mt-2">Имя Фамилия</h5>
                <span>Тренер</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item position-relative">
              <div className="position-relative">
                <img className="img-fluid" src={team3} alt="Команда 3" />
                <div className="team-social text-center">
                  <a
                    className="btn btn-square btn-outline-primary border-2 m-1"
                    href="/"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-square btn-outline-primary border-2 m-1"
                    href="/"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-square btn-outline-primary border-2 m-1"
                    href="/"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h5 className="mt-2">Имя Фамилия</h5>
                <span>Тренер</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item position-relative">
              <div className="position-relative">
                <img className="img-fluid" src={team4} alt="Команда 4" />
                <div className="team-social text-center">
                  <a
                    className="btn btn-square btn-outline-primary border-2 m-1"
                    href="/"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-square btn-outline-primary border-2 m-1"
                    href="/"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-square btn-outline-primary border-2 m-1"
                    href="/"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h5 className="mt-2">Имя Фамилия</h5>
                <span>Тренер</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
