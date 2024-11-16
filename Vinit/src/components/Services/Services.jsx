import React from "react";
import "../Services/Services.css";

const servicesData = [
  { title: "Assignment", rating: 178, image: "image 2.svg" },
  { title: "Dissertation", rating: 150, image: "image 3.svg" },
  { title: "Course work", rating: 120, image: "image 7.svg" },
  { title: "Thesis", rating: 129, image: "image 5.svg" },
  { title: "Essay", rating: 47, image: "image 6.svg" },
  { title: "Research Paper", rating: 59, image: "image 8.svg" },
  {
    title: "Power Point Presentation",
    rating: 89,
    image: "image 9.svg",
  },
  { title: "Programming", rating: 134, image: "image 10.svg" },
  { title: "Paper Writing", rating: 193, image: "image 11.svg" },
  { title: "Case Study", rating: 125, image: "image 12.svg" },
  { title: "Speech Writing", rating: 100, image: "image 13.svg" },
  {
    title: "Term Paper Writing",
    rating: 135,
    image: "image 14.svg",
  },
  {
    title: "Cover Letter Writing",
    rating: 120,
    image: "image 15.png",
  },
  { title: "Resume Maker", rating: 132, image: "image 16.svg" },
];
const Services = () => {
  return (
    <div className="services">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">We offer some fantastic services</p>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <div className="service-card-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className="star">
                    ★
                  </span>
                ))}
                <span className="rating-count">({service.rating})</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;