import React from "react";
import "../Advantages/Advantages.css";

const Advantages = () => {
  return (
    <div className="advantages-container">
      <h2>Our Assistance's Advantages</h2>
      <p>
        The Assigner wants to build a strong foundation that will enable
        students to soar to achievement.
      </p>
      <div className="advantages">
        <div className="advantage-card">
          <h3>No Plagiarism</h3>
          <p>
            Seek original answers that lessen the possibility of receiving a bad
            grade.
          </p>
        </div>
        <div className="advantage-card">
          <h3>On-time Submission</h3>
          <p>
            We promise to turn in the job ahead of schedule, no matter how
            difficult it is.
          </p>
        </div>
        <div className="advantage-card">
          <h3>24/7 Support</h3>
          <p>
            Help for homework is available 24/7; we are always here to assist
            students with their assignments.
          </p>
        </div>
        <div className="advantage-card">
          <h3>Rewrites that Satisfy</h3>
          <p>
            Get your schoolwork redone as many times as you like till you are
            happy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;