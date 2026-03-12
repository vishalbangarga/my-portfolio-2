import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education  <span></span>
          <br />
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class 10th (K.S.E.E.B)</h4>
                {/* <h5>Ikshan</h5> */}
                <h5>82.42%</h5>
              </div>
              <h3>2020</h3>
            </div>
            {/* <p>
              Built 6+ complete applications using React.js. Integrated backend
              authentication using Node.js & MongoDB. Created responsive UI/UX
              and designed wireframes using Figma.
            </p> */}
            <p>
              Completed secondary education in Kannada medium with a strong focus on mathematics and science, achieving 82.42% marks, From LNJP High School Aland.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                {/* <h4>Senior Full Stack Developer</h4> */}
                <h4>Class 12th (D.P.U.E)</h4>
                {/* <h5>Monocept (Max Life Insurance)</h5> */}
                <h5>60%</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed PUC with a strong focus on P.C.M.B, achieving 60% marks, From Dr. Ram Manohar Lohia Independent PU College Aland, Kalaburagi.   
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                {/* <h4>Full Stack Developer</h4> */}
                <h4>B.Tech (CSE)</h4>
                {/* <h5>Logic Loop</h5> */}
                <h5>With an Aggregate of 8.56 CGPA</h5>
              </div>
              <h3>2026</h3>
            </div>
            {/* <p>
              Building Solid, a proprietary low-code platform using Angular,
              Next.js & NestJS. Delivering production-ready CMS-based projects
              including e-commerce, CRM, and import-export automation systems.
            </p> */}
            <p>
             Pursuing B.Tech in Computer Science and Engineering with an Aggregate of 8.56 CGPA, From Sharnbasva University, Kalaburagi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
