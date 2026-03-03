// ---------- Static FAQ data ----------
export const FAQ_ITEMS = [
    {
        id: "1",
        question: "What courses do you offer?",
        answer:
            "We offer a comprehensive range of healthcare training courses including First Aid & CPR, Advanced Cardiac Life Support (ACLS), Pediatric Advanced Life Support (PALS), Basic Life Support (BLS), Disaster Management, Workplace Safety, Mental Health First Aid, Wilderness First Aid, and Emergency Medical Technician (EMT) programs.",
        category: "Courses",
        tags: ["courses", "training", "programs"],
        badgeType: "primary"
    },
    {
        id: "2",
        question: "How long are the certification courses valid?",
        answer:
            "Most of our certifications are valid for 2 years from the date of completion. Some specialized courses may have different validity periods. We’ll notify you when it’s time to renew your certification.",
        category: "Certification",
        tags: ["certification", "validity", "renewal"],
        badgeType: "secondary"
    },
    {
        id: "3",
        question: "Do you offer online courses?",
        answer:
            "Yes, we offer both in‑person and online training options for most of our courses. Our online courses include interactive modules, virtual simulations, and live instructor sessions. However, some hands‑on practical components may require in‑person attendance.",
        category: "Online Learning",
        tags: ["online", "virtual", "remote", "learning"],
        badgeType: "success"
    },
    {
        id: "4",
        question: "What is the minimum age requirement for courses?",
        answer:
            "The minimum age requirement varies by course. Basic First Aid courses are available for ages 12 and up, while more advanced courses like ACLS require participants to be at least 18 years old. Some courses may have additional prerequisites.",
        category: "Requirements",
        tags: ["age", "requirements", "prerequisites"],
        badgeType: "danger"
    },
    {
        id: "5",
        question: "How do I register for a course?",
        answer:
            "You can register for courses through our website by selecting your preferred course and batch, or by calling our registration hotline. We accept online payments, bank transfers, and in some cases, installment plans for longer courses.",
        category: "Registration",
        tags: ["registration", "enrollment", "payment"],
        badgeType: "warning"
    },
    {
        id: "6",
        question: "Do you offer group discounts?",
        answer:
            "Yes, we offer group discounts for organizations enrolling 10 or more participants. Discounts range from 10% to 25% depending on the group size and course type. Contact our sales team for custom pricing.",
        category: "Pricing",
        tags: ["group", "discount", "pricing", "organization"],
        badgeType: "primary"
    },
    {
        id: "7",
        question: "Do you provide course materials?",
        answer:
            "Yes, all course materials including textbooks, handouts, and digital resources are provided as part of the course fee. You’ll also receive access to our online learning portal with additional resources and practice materials.",
        category: "Materials",
        tags: ["materials", "textbooks", "resources", "handouts"],
        badgeType: "secondary"
    },
    {
        id: "8",
        question: "Can I get a refund if I cancel my enrollment?",
        answer:
            "We offer a full refund if you cancel at least 7 days before the course start date. Cancellations within 7 days are subject to a 25% cancellation fee. No refunds are available after the course has started.",
        category: "Refunds",
        tags: ["refund", "cancellation", "policy"],
        badgeType: "success"
    },
    {
        id: "9",
        question: "What should I bring to the course?",
        answer:
            "Please bring a valid ID, comfortable clothing suitable for hands‑on practice, and any specific items mentioned in your course confirmation email. We provide all necessary equipment and materials for the training.",
        category: "Preparation",
        tags: ["preparation", "what to bring", "equipment", "materials"],
        badgeType: "danger"
    },
    {
        id: "10",
        question: "Do you offer continuing education credits?",
        answer:
            "Yes, many of our courses provide continuing education credits (CEUs) for healthcare professionals. The number of credits varies by course and is recognized by most professional licensing boards.",
        category: "Continuing Education",
        tags: ["continuing education", "CEUs", "credits", "professional"],
        badgeType: "warning"
    },
    {
        id: "11",
        question: "How do I access my digital certificate?",
        answer:
            "Once you complete the course and pass the exam, your digital certificate will be available in your student portal within 24–48 hours. You can download and print it, or share it directly with employers through our secure sharing system.",
        category: "Certificates",
        tags: ["certificate", "digital", "download", "access"],
        badgeType: "primary"
    },
    {
        id: "12",
        question: "What happens if I fail the certification exam?",
        answer:
            "If you don’t pass the certification exam on your first attempt, you can retake it within 30 days at no additional cost. We also provide additional study materials and practice sessions to help you prepare for the retake.",
        category: "Exams",
        tags: ["exam", "failure", "retake", "certification"],
        badgeType: "secondary"
    },
    {
        id: "13",
        question: "Are your instructors certified?",
        answer:
            "All our instructors are certified by recognized organizations and have extensive experience in healthcare and emergency response. They regularly update their skills to stay current with best practices and international guidelines.",
        category: "Instructors",
        tags: ["instructors", "certified", "qualified", "experience"],
        badgeType: "success"
    },
    {
        id: "14",
        question: "What is your rescheduling policy?",
        answer:
            "You can reschedule your course up to 48 hours before the start date at no additional cost. Rescheduling within 48 hours may incur a small fee. We’ll work with you to find an alternative date that fits your schedule.",
        category: "Scheduling",
        tags: ["reschedule", "policy", "timing", "flexibility"],
        badgeType: "danger"
    },
    {
        id: "15",
        question: "Do you offer corporate training programs?",
        answer:
            "Yes, we provide customized corporate training programs for organizations of all sizes. Our corporate programs can be conducted at your location or ours, and we can tailor the content to your specific industry needs and requirements.",
        category: "Corporate",
        tags: ["corporate", "business", "customized", "training"],
        badgeType: "warning"
    },
];

// Minimal state/district mapping – extend as needed
export const INDIA_STATE_DISTRICTS = {
    Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
    Haryana: ["Hisar", "Gurugram", "Faridabad", "Panipat", "Rohtak"],
    "Uttar Pradesh": ["Lucknow", "Noida", "Ghaziabad", "Kanpur", "Varanasi"],
    Delhi: ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
    Karnataka: ["Bengaluru", "Mysuru", "Mangaluru", "Belagavi", "Hubballi"],
};