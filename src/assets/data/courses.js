import { IMAGES } from "../../constants/images";

/** Change this to increase/decrease cards per page */
export const COURSES_PER_PAGE = 4;

/** Seed / fallback courses (keeps page working if API fails) */
export const SEED_COURSES = [
	{
		id: 1,
		title: "Basic First Aid Training",
		duration: 2,
		price: 2000,
		mode: "offline",
		languages: ["English", "Hindi"],
		category: "Basic Care",
		description: "Learn essential first aid skills including wound care, bandaging and emergency response techniques.",
		image: IMAGES.FIRSTAID
	},
	{
		id: 2,
		title: "CPR and AED Certification",
		duration: 1,
		price: 3000,
		mode: "online",
		languages: ["English"],
		category: "Advanced Care",
		description: "Comprehensive CPR training with AED usage. Get certified in life-saving techniques.",
		image: IMAGES.CPR
	}
];

export const PRICE_RANGES = [
	{ label: "Under ₹2,000", min: 0, max: 2000 },
	{ label: "₹2,000 – ₹4,000", min: 2000, max: 4000 },
	{ label: "₹4,000 – ₹6,000", min: 4000, max: 6000 },
	{ label: "Above ₹6,000", min: 6000, max: Infinity },
];

export const MODES = ["online", "offline", "hybrid"];
