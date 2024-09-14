import React, { useEffect, useState } from "react";

const Spinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const spinnerTimeout = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(spinnerTimeout);
  }, []);

  if (!loading) return null;

  return (
    <div
      id="spinner"
      className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div className="spinner-grow text-primary" role="status"></div>
    </div>
  );
};

export default Spinner;
