import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Показываем/скрываем кнопку при прокрутке
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Прокрутка вверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
          onClick={scrollToTop}
          style={{ display: isVisible ? "block" : "none" }}
        >
          <i className="bi bi-arrow-up"></i>
        </a>
      )}
    </>
  );
};

export default BackToTop;
