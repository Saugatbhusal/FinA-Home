import Card from "./Card";
import FilterIcons from "./FilterIcons";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import "./Home.css";
import { useEffect, useState } from "react";

function Home() {
  let [listings, setListings] = useState([]);

  useEffect(() => {
    async function fethlistingdata() {
      try {
        const res = await fetch("http://localhost:8080/");
        const data = await res.json();

        setListings(data);
      } catch (err) {
        console.log(err);
      }
    }
    fethlistingdata();
  }, []);

  return (
    <div>
      <div className="container">
        <Navbar />
        <div className="filtericons">
          <FilterIcons />
        </div>
        <div className="body row row-cols-1 row-cols-md-3 row-cols-sm-1">
          {/* the space you see on the left and right of body comes formt he conatiner classname of bootstrap */}
          {listings.map((listing) => {
            return (
              <div
                className="col d-flex justify-content-center"
                key={listing._id}
              >
                <Card data={listing} />
              </div>
            );
          })}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
