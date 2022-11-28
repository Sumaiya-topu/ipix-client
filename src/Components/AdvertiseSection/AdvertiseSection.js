import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdvertiseSection = () => {
  const [advertisedItem, setAdvertisedItem] = useState([]);
  useEffect(() => {
    fetch("https://ipix-server.vercel.app/advertised")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdvertisedItem(data);
      });
  }, []);

  return (
    <div>
      {advertisedItem.map((item) => (
        <div>
          <div className="hero lg:min-h-screen bg-base-200">
            <div className="hero-content w-3/4 flex-col lg:flex-row-reverse">
              <img
                src={item.productPhotoUrl}
                className="max-w-sm rounded-sm shadow-2xl"
                alt=""
              />

              <div>
                <h1 className="text-5xl font-bold">{item.model_name}</h1>
                <Link className="btn btn-error mt-2 rounded-sm">Order now</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdvertiseSection;
