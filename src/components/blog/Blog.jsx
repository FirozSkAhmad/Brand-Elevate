import { useEffect, useContext, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Cta from "../home/Cta";
import Lenis from "@studio-freight/lenis";
import "./style.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import sharedContext from "../../context/SharedContext";
// import CardsCon from "./CardsCon";

const Blog = () => {
  const { blogsData, setBlogsData } = useContext(sharedContext);

  const fetchData = async () => {
    try {
      const collectionRef = collection(db, "In The Blog");

      const snapshot = await getDocs(collectionRef);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBlogsData(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  // Call the function to fetch data
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const cursor = document.querySelector('[data-cursor="1"]');
    cursor.classList.remove("cursor-hover--a");
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      // console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const navigate = useNavigate();

  const handleClick = (clickedCardData) => {
    // Combine clicked card with the additional four cards
    const dataToSend = {
      clickedCardData: clickedCardData,
    };

    navigate("/BlogPost", { state: { data: dataToSend } });
  };

  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 2; // Number of items per page

  const paginatedData = () => {
    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;
    return blogsData.slice(startIndex, endIndex);
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
      <div className="blog__Page-wrap">
        <div className="blog_Mn-wrap">
          <div className="port_Mn-sec">
            <div className="port_mn-ttl">
              <h2>Blog</h2>
            </div>
            <div className="port_mn-para">
              <p>Latest articles and resources curated by our community</p>
            </div>
          </div>
        </div>
        <div className="blog_card-wrap">
          <div className="blog-row">
            {blogsData.length === 0
              ? Array.from({ length: 2 }).map((_, index) => (
                  <div key={index} className="blog_col shimmer-effect">
                    <div className="blog_con">
                      <div className="blog_img"></div>
                      <div className="blog_content">
                        <div className="bl-ttl"></div>
                      </div>
                    </div>
                  </div>
                ))
              : paginatedData()?.map((data) => (
                  <div
                    key={data.id}
                    className="blog_col"
                    onClick={() => handleClick(data)}
                  >
                    <div className="blog_con">
                      <div className="blog_img">
                        <img src={data?.img} alt="Preview" />
                      </div>
                      <div className="blog_content">
                        <span className="bl-ttl">{data?.heading}</span>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
        {blogsData.length !== 0 && (
          <div className="blog_more-btn">
            {currentPage > 0 &&
            (currentPage + 1) * pageSize < blogsData.length ? (
              <div className="dule_btn">
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
            ) : (currentPage + 1) * pageSize < blogsData.length ? (
              <button className="rec_Btn" onClick={handleNextPage}>
                Next Page
              </button>
            ) : null}
          </div>
        )}
        <div className="blog__Cta-wrap">
          <Cta></Cta>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Blog;
