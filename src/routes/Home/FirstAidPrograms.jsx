import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import lastCard from "../../assets/images/FistAidKit.jpeg";
import { courses } from "../../assets/data/home";
import { ROUTERS } from "../../constants/router";

function FirstAidPrograms() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="program-section">
      <Container>
        <div className="mb-3 mb-md-0 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
          <div className="section-header">
            <h2 className="text-orange">{t("home.programs.title")}</h2>
            <p>{t("home.programs.description")}</p>
          </div>
          <Button
            className="btn-orange rounded-pill border-0 px-4 py-2 mt-3 mt-md-0 d-flex align-items-center fw-medium"
            onClick={() => navigate(ROUTERS.Courses)}
          >
            {t("home.programs.viewAll")}{" "}
            <i className="bi bi-arrow-right ms-2" />
          </Button>
        </div>
        <Row className="g-4">
          <Col lg={9}>
            <Row className="g-4">
              {courses.map((course, index) => (
                <Col md={6} lg={4} key={index}>
                  <div
                    className="program-card fixed-card"
                    style={{ backgroundImage: `url(${course.img})` }}
                  >
                    <div className="card-overlay">
                      <div className="glass-box">
                        <h5 className="truncate-1">{course.title}</h5>

                        <p className="truncate-2">{course.desc}</p>

                        <div className="price-row">
                          <span className="price">{course.price}</span>
                          <span className="old-price">
                            {course.oldPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={3}>
            <div
              className="program-card tall-card"
              style={{ backgroundImage: `url(${lastCard})` }}
            >
              <div className="tall-overlay">
                <div className="right-content">
                  <h4>
                    {t("home.programs.tallCardTitleLine1")} <br />
                    {t("home.programs.tallCardTitleLine2")} <br />
                    {t("home.programs.tallCardTitleLine3")} <br />
                    {t("home.programs.tallCardTitleLine4")}
                  </h4>
                </div>

                <div
                  className="view-all-btn"
                  onClick={() => navigate(ROUTERS.Courses)}
                >
                  {t("home.programs.viewAllCourses")}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FirstAidPrograms;
