/**
 * Header middle section.
 */
import Image from "react-bootstrap/Image";
import { IMAGES } from "../../../constants/images";
import IndianFlag from "../../global/IndianFlag";

const PARTNER_LOGOS = [
	{ src: IMAGES.KOSHAL, alt: "Skill India Mission" },
	{ src: IMAGES.SKILL_INDIA, alt: "Skill India" },
	{ src: IMAGES.STARTUP, alt: "Startup India" },
	{ src: IMAGES.G2O, alt: "G20" },
	{ src: IMAGES.MSME, alt: "MSME" },
	{ src: IMAGES.SAVAJ_BHART, alt: "Swachh Bharat" },
];

function BrandingBar() {
	return (
		<div className="branding-bar bg-white border-bottom">
			<div className="container branding-bar__inner py-2 py-md-3 d-flex flex-column flex-md-row align-items-center justify-content-between">
				<div className="branding-bar__org d-flex align-items-center gap-2 gap-md-3">
					<Image
						src={IMAGES.RED_LOGO}
						alt="St John Ambulance logo"
						roundedCircle
						className="branding-bar__org-logo"
					/>
					<div className="branding-bar__org-text">
						<p className="branding-bar__org-title mb-0">
							ST JOHN AMBULANCE
						</p>
						<p className="branding-bar__org-subtitle mb-0">
							INTERNATIONAL ASSOCIATION
						</p>
					</div>
				</div>
				<div className="d-flex justify-content-center my-2 my-md-0">
					<IndianFlag />
				</div>
				<div className="branding-bar__partners d-flex justify-content-center justify-content-md-end flex-wrap gap-2 gap-md-3">
					{PARTNER_LOGOS?.map((logo) => (
						<Image
							key={logo.alt}
							src={logo.src}
							alt={logo.alt}
							className="branding-bar__partner-logo"
							loading="lazy"
							fluid
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default BrandingBar;
