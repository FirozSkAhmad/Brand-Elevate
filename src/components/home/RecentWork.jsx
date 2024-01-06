import { useEffect, useContext, useState } from "react";
import "./Recentwork.css";
import { getDocs, collection, limit, query } from "firebase/firestore";
import { db } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
// import sharedContext from "../../context/SharedContext";

const RecentWork = () => {
  const [projectsData, setProjectsData] = useState([]);
  // const { projectsData, setProjectsData } = useContext(sharedContext);

  const fetchData = async () => {
    try {
      const collectionRef = collection(db, "Portfolio");
      const queryConstraint = limit(4); // Limit to 4 documents
      const querySnapshot = await getDocs(
        query(collectionRef, queryConstraint)
      );

      console.log("snapshot", querySnapshot);

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("data", data);

      setProjectsData(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  // Call the function to fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleClick = (data) => {
    navigate("/PortfolioSingle", { state: { data } });
  };

  return (
    <div className="recent_Work-wrap">
      <div className="sec__Ttl">
        <div className="icon_Ttl">
          <img src="assets/images/icon-ttl.png"></img>
        </div>
        <div className="text_Ttl">
          <h3>Recent Work</h3>
        </div>
      </div>
      <div className="rec_Sec">
        <div className="rec_Rw-wrap">
          {projectsData.length === 0
            ? Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="rec_Col shimmer-effect">
                  <div className="rec_Content">
                    <div className="rec_Img"></div>
                    <div className="rec_Ttl">
                      <div className="card_title"></div>
                    </div>
                  </div>
                </div>
              ))
            : projectsData.map((data) => (
                <div
                  key={data.id}
                  className="rec_Col"
                  onClick={() => handleClick(data)}
                >
                  <div className="rec_Content">
                    <div className="rec_Img">
                      <img src={data?.img} alt="Preview" />
                    </div>
                    <div className="rec_Ttl">
                      <a>{data?.heading}</a>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        <Link to="/Portfolio">
          <div className="rec_Btn">
            <span>View all work</span>
            <span className="arrow-up-right">
              <img
                src="assets/images/arrow-up-right.png"
                alt="arrow-up-right"
              />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecentWork;
