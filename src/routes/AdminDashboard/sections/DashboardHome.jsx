import { Card, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function DashboardHome() {
	const { t } = useTranslation();

	return (
		<Row>
			<Col md={3}>
				<Card className="p-3 text-center">
					<h5>{t("admin.dashboard.totalKits")}</h5>
					<h3>12</h3>
				</Card>
			</Col>
			<Col md={3}>
				<Card className="p-3 text-center">
					<h5>{t("admin.dashboard.internships")}</h5>
					<h3>28</h3>
				</Card>
			</Col>
		</Row>
	);
}

export default DashboardHome;