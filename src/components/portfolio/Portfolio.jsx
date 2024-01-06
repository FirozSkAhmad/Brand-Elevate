import { useEffect, useContext, useState } from "react";
import "./portfolio.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Cta from "../home/Cta";

import Lenis from "@studio-freight/lenis";

import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import sharedContext from "../../context/SharedContext";

const Portfolio = () => {
  const { projectsData, setProjectsData } = useContext(sharedContext);

  const fetchData = async () => {
    try {
      const collectionRef = collection(db, "Portfolio");

      const snapshot = await getDocs(collectionRef);

      console.log("snapshot", snapshot);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("data", data);

      setProjectsData(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', (e) => {
      // console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])

  const navigate = useNavigate();

  const handleClick = (data) => {
    navigate("/PortfolioSingle", { state: { data } });
  };

  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 1; // Number of items per page

  const paginatedData = () => {
    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;
    return projectsData.slice(startIndex, endIndex);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleBackPage = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 0));
  };

  return (
    <>
      <Header></Header>
      <div className="portfolio__Wrap">
        <div className="port_Mn-wrap">
          <div className="port_Mn-sec">
            <div className="port_mn-ttl">
              <h2>Case Studies</h2>
            </div>
            <div className="port_mn-para">
              <p>
                Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida
                adipiscing augue sit.
              </p>
            </div>
          </div>
        </div>
        <div className="port_Work-wrap">
          {projectsData.length === 0 ? (
            <div className="port-work-s shimmer-effect">
              <div className="port-wrk-img"></div>
              <div className="port-work-cta">
                <div className="link_con">
                  <div className="port-work-n"></div>
                  <div className="port_see"></div>
                </div>
              </div>
            </div>
          ) : (
            paginatedData()?.map((data) => (
              <div key={data.id} className="port-work-s">
                <div className="port-wrk-img">
                  <img src={data?.img} alt="" />
                </div>
                <div
                  className="port-work-cta"
                  onClick={() => handleClick(data)}
                >
                  <Link className="link_con">
                      <span className="port-work-n">{data?.heading}</span>
                      <span className="port_see">
                        View case study
                        <span className="port-arr">
                          <img src="assets/images/p-arrow.png" alt="" />
                        </span>
                      </span>
                  </Link>
                </div>
              </div>
            ))
          )}

          <Link className="port_all-btn">
            {currentPage > 0 &&
            (currentPage + 1) * pageSize < projectsData.length ? (
              <div className="multi_btn">
                <button className="bck_btn" onClick={handleBackPage}>
                  Back Page
                </button>
                <button className="nxt_btn" onClick={handleNextPage}>
                  Next Page
                </button>
              </div>
            ) : currentPage > 0 ? (
              <button className="rec_Btn" onClick={handleBackPage}>
                Back Page
              </button>
            ) : (currentPage + 1) * pageSize < projectsData.length ? (
              <button className="rec_Btn" onClick={handleNextPage}>
                Next Page
              </button>
            ) : null}
          </Link>
        </div>
        <div className="port_Cta">
          <Cta></Cta>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Portfolio;
