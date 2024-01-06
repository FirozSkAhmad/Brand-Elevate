import React, { useEffect, useContext, useState } from "react";
import "./blogpost.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

const BlogPost = () => {
  const location = useLocation();
  const { clickedCardData } = location.state.data;

  const [additionalCardsData, setAdditionalCardsData] = useState([]);

  const fetchData = async () => {
    try {
      const collectionRef = collection(db, "In The Blog");

      const snapshot = await getDocs(collectionRef);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Filter out the clicked card
      const remainingCards = data.filter(
        (card) => card.id !== clickedCardData.id
      );

      // Shuffle the remaining cards and pick the first four
      const shuffled = remainingCards.sort(() => 0.5 - Math.random());
      setAdditionalCardsData(shuffled.slice(0, 4));
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const navigate = useNavigate();

  const handleClick = (clickedCardData) => {
    // Combine clicked card with the additional four cards
    const dataToSend = {
      clickedCardData: clickedCardData,
    };

    navigate("/BlogPost", { state: { data: dataToSend } });
  };

  // Call the function to fetch data
  useEffect(() => {
    fetchData();
  }, [location.state]);

  return (
    <>
      <Header></Header>
      <div className="blogPost__Wrap">
        <div className="port_Mn-back">
          <Link to="/Blog">
            <span className="back_logo">
              <img src="assets/images/back.png"></img>
            </span>
            Back to blog
          </Link>
        </div>
        <div className="blog_post-sec">
          <div className="blog_p-ttl">
            <h2>{clickedCardData?.heading}</h2>
          </div>
          <div className="blog_p-img">
            <img src={clickedCardData?.img}></img>
          </div>
          <div className="blog_p-para">
            <div className="bl_p-row">
              <p>{clickedCardData?.bodyText}</p>
            </div>
          </div>
          <div className="blog_post-others">
            <div className="blog_other-ttl">
              <h3>You might also like...</h3>
            </div>
            <div className="blog_card-wrap">
              <div className="blog-row">
                {additionalCardsData.length === 0
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
                  : additionalCardsData?.map((data) => (
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
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default BlogPost;
