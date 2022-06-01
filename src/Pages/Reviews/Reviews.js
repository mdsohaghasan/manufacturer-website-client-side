import React from "react";
import { useState, useEffect } from "react";
import Review from "./Review";

const Reviews = () => {
  const [Reviews, setReviews] = useState([]);
  useEffect(() => {
    const url = `https://limitless-brushlands-40297.herokuapp.com/reviews`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="">
      <div className="">
        <h3 className="text-primary text-5xl my-10">Our Review</h3>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-20">
        {Reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
