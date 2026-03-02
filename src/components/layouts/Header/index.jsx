/**
 * Header main file.
 */
import BrandingBar from "./BrandingBar";
import MainNavbar from "./MainNavbar";
import MobileBottomNav from "./MobileBottomNav";
import TopBar from "./Topbar";

function Header() {
	return (
		<>
			<TopBar />
			<BrandingBar />
			<MainNavbar />
			<MobileBottomNav />
			<div className="top-news-wrapper">
				<div className="top-news-content">
					<span>
						🚑 Admissions Open 2026 &nbsp;&nbsp; | &nbsp;&nbsp;
						📢 First Aid Training Registration Started &nbsp;&nbsp; | &nbsp;&nbsp;
						☎ Emergency Helpline Available 24x7 &nbsp;&nbsp; | &nbsp;&nbsp;
						🏥 Join St John Ambulance International Association
					</span>
				</div>
			</div>
		</>
	);
}

export default Header;
