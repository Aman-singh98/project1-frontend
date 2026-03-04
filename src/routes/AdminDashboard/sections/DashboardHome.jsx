import { Card, Row, Col } from "react-bootstrap";

function DashboardHome() {
    return (
        <Row>
            <Col md={3}>
                <Card className="p-3 text-center">
                    <h5>Total Kits</h5>
                    <h3>12</h3>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="p-3 text-center">
                    <h5>Internships</h5>
                    <h3>28</h3>
                </Card>
            </Col>
        </Row>
    );
}

export default DashboardHome;