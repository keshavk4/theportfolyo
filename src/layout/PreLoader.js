import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../services/controller";
import fetchUserData from "../../pages/api/hello";

const PreLoader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const response = fetchUserData("65b3a22c01d900e96c4219ae").then((data) => {
      dispatch(setData(data));
      document.querySelector(".preloader").classList.add("loaded");
      document.querySelector(".centrize").style.display = "none";
    }).catch((error) => {console.error(error)});
  }, []);

  return (
    <Fragment>
      <div className="preloader">
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="spinner-logo">
              <img src="assets/images/ober_logo.png" alt="" />
              <div className="spinner-dot" />
              <div className="spinner spinner-line" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PreLoader;
