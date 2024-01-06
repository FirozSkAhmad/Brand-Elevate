import { useContext, useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import sharedContext from "../../context/SharedContext";

const CardsCon = () => {
  const { blogsData, setBlogsData } = useContext(sharedContext);

  const fetchData = async () => {
    try {
      const collectionRef = collection(db, "In The Blog"); // Replace 'your_collection_name' with the actual name of your collection

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

  let completeData = blogsData;

  const navigate = useNavigate();

  const handleClick = (clickedCardData) => {
    // Filter out the clicked card
    const remainingCards = blogsData.filter(
      (card) => card.id !== clickedCardData.id
    );

    // Shuffle the remaining cards and pick the first four
    const shuffled = remainingCards.sort(() => 0.5 - Math.random());
    const additionalCardsData = shuffled.slice(0, 4);

    // Combine clicked card with the additional four cards
    const dataToSend = {
      clickedCardData: clickedCardData,
      additionalCardsData: additionalCardsData,
    };

    navigate("/BlogPost", { state: { data: dataToSend } });
  };

  return (
    <>
      <div className="blog-row">
        {completeData?.map((data) => (
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
    </>
  );
};

export default CardsCon;
