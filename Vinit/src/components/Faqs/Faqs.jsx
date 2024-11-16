import React, { useState } from "react";
import "../Faqs/Faqs.css";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services are available on our website?",
      answer: "Answer",
    },
    {
      question: "How can we guarantee the caliber of the assignments?",
      answer: "Answer",
    },
    {
      question:
        "What distinguishes our company from other assignment writing firms?",
      answer: "Answer",
    },
    {
      question: "Does utilizing our service have any limitations?",
      answer: "Answer",
    },
    {
      question: "How can consumers access our website’s news and updates?",
      answer: "Answer",
    },
  ];

  return (
    <div className="faq-container">
      <h2>FAQs</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span id="f-span">{activeIndex === index ? "^" : "v"}</span>
          </button>
          {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Faqs;