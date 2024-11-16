import React from "react";
import "../Features/Features.css";

const features = [
  {
    title: "Plagiarism Checker",
    description:
      "We will provide access to extensive range of plagiarism checkers.",
    image: "f1.png",
  },
  {
    title: "Free Publications",
    description: "We will provide access to publications.",
    image: "f2.png",
  },
  {
    title: "Provides Free Books and PDF",
    description: "Free Books and PDF will be provided.",
    image: "f3.png",
  },
  {
    title: "Paraphraser",
    description: "A paraphraser will be provided.",
    image: "f4.png",
  },
];

const Features = () => {
  return (
    <div className="features-section">
      <h2>Awesome Features</h2>
      <p>Get ready to unlock the next level of features</p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img
              src={feature.image}
              alt={feature.title}
              className="feature-image"
            />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;