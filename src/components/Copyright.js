import React from "react";

const Copyright = () => {
  return (
    <div
      className="container-fluid copyright text-light py-4 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; <a href="/">Название вашего сайта</a>, Все права защищены.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
