import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Training
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE</h4>
                <h5>Lovely Professional University</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              CGPA: 7.00. Completed 35+ hours of live summer training in DSA using Python. Earned certificates in Machine Learning, Generative AI, and Network Communication.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate</h4>
                <h5>Ramshree India International School</h5>
              </div>
              <h3>2022 - 2023</h3>
            </div>
            <p>
              Completed with 79%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Matriculation</h4>
                <h5>Ramshree India International School</h5>
              </div>
              <h3>2020 - 2021</h3>
            </div>
            <p>
              Completed with 94%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
