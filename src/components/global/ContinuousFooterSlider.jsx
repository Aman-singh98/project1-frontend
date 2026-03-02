import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { IMAGES } from "../../constants/images";



const images = [
	IMAGES.KOSHAL,
	IMAGES.SKILL_INDIA,
	IMAGES.STARTUP,
	IMAGES.G2O, 
	IMAGES.MSME, 
	IMAGES.SAVAJ_BHART,
	IMAGES.STARTUP,
	IMAGES.DIGILOCKER,
	IMAGES.DIGITALINDIA,
	IMAGES.VIKASH_BHARAT,
	IMAGES.SIKSHA
];

function ContinuousFooterSlider() {
	return (
		<Swiper
			modules={[Autoplay]}
			spaceBetween={0}
			// slidesPerView={4}
			loop={true}
			speed={5000}
			autoplay={{
				delay: 0,
				disableOnInteraction: false,
			}}
			allowTouchMove={false}
			breakpoints={{
				320: { slidesPerView: 2 },
				768: { slidesPerView: 3 },
				1024: { slidesPerView: 4 },
			}}
			className="footer-swiper"
		>
			{images.map((img, index) => (
				<SwiperSlide key={index}>
					<img
						src={img}
						alt="slider"
						className="footer-partner-logo"
						loading="lazy"
						style={{ height: "80px" }}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default ContinuousFooterSlider;
