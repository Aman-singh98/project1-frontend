// Complete home section static data.

import { IMAGES } from "../../constants/images";

// For What we do section.
export const services = [
  {
    title: "First Aid Training",
    description:
      "Comprehensive first aid courses covering essential life-saving techniques for emergency situations",
    bg: "bg-red",
  },
  {
    title: "CPR Certification",
    description:
      "Professional CPR training with certification recognized by leading healthcare organizations",
    bg: "bg-blue",
  },
  {
    title: "Emergency Response",
    description:
      "Advanced disaster preparedness and emergency response training for critical situations",
    bg: "bg-green",
  },
  {
    title: "Community Programs",
    description:
      "Public awareness campaigns and community training sessions for widespread safety education",
    bg: "bg-purple",
  },
  {
    title: "Corporate Training",
    description:
      "Customized workplace safety programs tailored to your organization's specific needs",
    bg: "bg-orange",
  },
  {
    title: "Certification Services",
    description:
      "Internationally recognized certifications with ongoing support and recertification options",
    bg: "bg-teal",
  },
];


export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Student",
    quote:
      "Excellent training program! The instructors were very knowledgeable and the hands-on practice sessions were incredibly helpful.",
    rating: 5,
    image: IMAGES.Rajesh
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Nurse",
    quote:
      "The CPR certification course was comprehensive and well structured. I now feel much more confident in emergencies.",
    rating: 5,
    image: IMAGES.Sneha
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Corporate Employee",
    quote:
      "Workplace safety training was exactly what our company needed. The practical scenarios made the concepts very clear.",
    rating: 5,
    image: IMAGES.Rajesh
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Teacher",
    quote:
      "The paediatric first aid course was invaluable. The content was clear and practical for handling emergencies with children.",
    rating: 5,
    image: IMAGES.Sneha
  },
];

export const leaders = [
  {
    title: "Finance & Admin",
    role: "Head – Finance & Admin",
    dept: "Finance, HR & Administration",
    desc: "Manages finance, human resources, and administrative operations.",
  },
  {
    title: "Communications",
    role: "Head – Communications",
    dept: "Marketing & Outreach",
    desc: "Leads brand, marketing, digital presence, and public awareness.",
  },
  {
    title: "National Head",
    role: "Chief Executive",
    dept: "National Operations",
    desc: "Leads overall strategy, partnerships, and national outreach.",
  },
  {
    title: "Training Director",
    role: "Director – Training",
    dept: "First Aid & CPR Programmes",
    desc: "Oversees curriculum, instructor certification, and training quality.",
  }
];

export const courses = [
    {
        title: "Basic First Aid Training",
        desc: "Learn essential first aid skills including wound care, bandaging and emergency response techniques.",
        price: "₹2000",
        oldPrice: "₹3500",
        img: IMAGES.FIRSTAID,
    },
    {
        title: "CPR & AED Certification",
        desc: "Comprehensive CPR training with AED usage. Get certified in life-saving techniques.",
        price: "₹3000",
        oldPrice: "₹4500",
        img: IMAGES.CPR,
    },
    {
        title: "Advanced Life Support (ALS)",
        desc: "Advanced life support training for healthcare professionals and emergency responders.",
        price: "₹12000",
        oldPrice: "₹15000",
        img: IMAGES.AMBULANCE,
    },
    {
        title: "Pediatric First Aid",
        desc: "Specialized first aid training for handling medical emergencies involving children and infants.",
        price: "₹4000",
        oldPrice: "₹6000",
        img: IMAGES.AED,
    },
    {
        title: "Workplace Safety & First Aid",
        desc: "Workplace-specific first aid training for corporate employees and safety officers.",
        price: "₹1800",
        oldPrice: "₹3000",
        img: IMAGES.SAFTYfIRST
    },
    {
        title: "Emergency Response Training",
        desc: "Comprehensive emergency response training for disaster preparedness and crisis management.",
        price: "₹7000",
        oldPrice: "₹8500",
        img: IMAGES.EMR_RESP
    }
];

export const JOURNEY_STEPS = [
	{
		id: 1,
		stepKey: "home.journey.steps.step01.label",
		titleKey: "home.journey.steps.step01.title",
		descriptionKey: "home.journey.steps.step01.description",
		icon: "bi-person-plus-fill",
	},
	{
		id: 2,
		stepKey: "home.journey.steps.step02.label",
		titleKey: "home.journey.steps.step02.title",
		descriptionKey: "home.journey.steps.step02.description",
		icon: "bi-journal-medical",
	},
	{
		id: 3,
		stepKey: "home.journey.steps.step03.label",
		titleKey: "home.journey.steps.step03.title",
		descriptionKey: "home.journey.steps.step03.description",
		icon: "bi-clipboard-check-fill",
	},
	{
		id: 4,
		stepKey: "home.journey.steps.step04.label",
		titleKey: "home.journey.steps.step04.title",
		descriptionKey: "home.journey.steps.step04.description",
		icon: "bi-patch-check-fill",
	},
	{
		id: 5,
		stepKey: "home.journey.steps.step05.label",
		titleKey: "home.journey.steps.step05.title",
		descriptionKey: "home.journey.steps.step05.description",
		icon: "bi-briefcase-fill",
	},
];

export const stats = [
  { icon: "bi-people", number: "109,000", label: "Volunteer" },
  { icon: "bi-mortarboard", number: "120,000", label: "Training" },
  { icon: "bi-building", number: "20,000", label: "Skill Centre" },
  { icon: "bi-award", number: "15,000", label: "Faculty" },
  { icon: "bi-briefcase", number: "15,000", label: "Job" },
];
