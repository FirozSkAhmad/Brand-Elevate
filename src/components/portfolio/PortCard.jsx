import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const PortCard = () => {
    // const { setLoader } = useContext(sharedContext);

    const [portfolioData, setportfolioData] = useState([]);

    const fetchData = async () => {
        try {
            // setLoader(true);


            const collectionRef = collection(db, "Portfolio"); // Replace 'your_collection_name' with the actual name of your collection
            // console.log("collectionref",collectionRef)

            const snapshot = await getDocs(collectionRef);


            console.log("snapshot", snapshot)


            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));


            console.log("data", data)


            setportfolioData(data);

            // setLoader(false);
        } catch (error) {
            console.error("Error fetching data:", error.message);
            // setLoader(false);
        }
    };

    // Call the function to fetch data
    useEffect(() => {
        fetchData();
    }, []);

    let completeData = portfolioData;

    // const removeCard = async (rowId) => {
    //     try {
    //         const documentRef = doc(db, InTheBlog, rowId);
    //         await deleteDoc(documentRef);
    //         console.log(`Row with ID ${rowId} removed successfully from Firestore`);
    //         toast.success("removed card Successfully");
    //         fetchData();
    //     } catch (error) {
    //         console.error("Error removing document:", error.message);
    //     }
    // };

    return (

        <>
            {/* <div className='blog_con'>
                <div className='blog_img'>
                    <img src="assets/images/blog1.png" alt="blog1" />
                </div>
                <div className='blog_content'>
                    <span className='bl-dt'>October 12, 2024</span>
                    <span className='bl-ttl'>How to create SVG-ready icon symbols in Sketch</span>
                </div>
            </div> */}



            <div className="blog-row">
                {completeData?.map((data) => (
                    <div className="blog_col">
                        <div className="blog_con" key={data.id}>
                            <div className="blog_img">
                                <img
                                    src={data?.img}
                                    alt="Preview"
                                />
                            </div>
                            <div className="blog_content">
                                <span className='bl-dt'>October 12, 2024</span>
                                <span className='bl-ttl'>{data?.heading}</span>
                                {/* <p>{data?.bodyText}</p> */}
                            </div>
                        </div>
                    </div>

                ))}
            </div>

        </>
    );
};

export default PortCard;