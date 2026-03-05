import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ROUTERS } from "../../constants/router";
import { galleryImages } from "../../assets/data/galleryImages";

const TrainingGallery = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="bg-white training-programs">
      <Container>
        <div className="mb-3 mb-md-0 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
          <div className="section-header">
            <h2>{t("home.training.title")}</h2>
            <p>{t("home.training.subtitle")}</p>
          </div>
          <Button
            className="btn-orange rounded-pill border-0 px-4 py-2 mt-3 mt-md-0 d-flex align-items-center fw-medium"
            onClick={() => navigate(ROUTERS.Gallery)}
          >
            {t("home.training.viewAll")} <i className="bi bi-arrow-right ms-2" />
          </Button>
        </div>
        <Row className="g-4">
          {galleryImages?.slice(0, 12).map((item) => (
            <Col key={item.id} xs={12} sm={6} lg={3}>
              <Card className="border-0 h-100 position-relative training-card shadow-sm">
                <div className="card-img-wrapper">
                  <Card.Img
                    src={item.src}
                    alt={item.name}
                    className="h-100 w-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-content-overlay d-flex flex-column justify-content-end px-3 pb-3">
                  <div className="d-flex flex-wrap gap-2 mb-2">
                    <Badge
                      bg="none"
                      className="border-0 py-2 px-3 fw-normal rounded-2 btn-orange"
                    >
                      {item.badge}
                    </Badge>
                    <Badge
                      bg="success"
                      className="border-0 py-2 px-3 fw-normal rounded-2"
                    >
                      {item.date}
                    </Badge>
                  </div>
                  <Card.Title
                    className="text-white fw-bold m-0"
                    style={{ fontSize: "1rem", lineHeight: "1.3" }}
                  >
                    {item.name}
                  </Card.Title>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TrainingGallery;
