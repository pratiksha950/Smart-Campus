import hdfcimage from "../assets/hdfc.png"
import birlaimage from "../assets/birla.png"
import groupimage from "../assets/group.png"
import bluebook from "../assets/blue-book.png"

// src/config/scholarshipData.js
const scholarships = [
  {
    id: 1,
    title: "HDFC Educational Crisis Scholarship",
    institute: "HDFC Bank",
    category: "Need-Based",
    icon: hdfcimage,
    description:
      "Supporting economically disadvantaged students to continue their education without financial burden",
    amount: "Up to ₹75,000/year",
    duration: "Till completion of course",
    deadline: "March 31, 2025",
    expired: true,
    benefits:
      "Complete tuition fee coverage + ₹1,000/month for books and stationery",
    eligibility: [
      "Family annual income below ₹25,000",
      "Currently enrolled in Class 6th to 12th",
    ],
    applyLink:
      "https://www.buddy4study.com/page/hdfc-bank-parivartans-ecss-programme",
  },
  {
    id: 2,
    title: "INSPIRE Scholarship (SHE)",
    institute: "Department of Science & Technology",
    category: "Merit-Based",
    icon: birlaimage,
    description:
      "Inspiring excellence in natural sciences and encouraging research career.",
    amount: "₹80,000/year",
    duration: "5 years (Bachelor's + Master's)",
    deadline: "July 31, 2025",
    expired: true,
    benefits: "₹80,000/year + Research exposure + Summer internships",
    eligibility: [
      "Top 1% students in Class 12th board exams",
      "Pursuing Natural & Basic Sciences",
    ],
    applyLink:
      "https://www.buddy4study.com/scholarship/inspire-scholarship-for-higher-education-she",
  },
  {
    id: 3,
    title: "Tata Trusts Scholarship",
    institute: "Tata Trusts",
    category: "Merit-Based",
    icon: groupimage,
    description:
      "Empowering talented students to pursue higher education at world-class institutions.",
    amount: "Up to ₹25 lakh",
    duration: "Complete course duration",
    deadline: "April 30, 2025",
    expired: true,
    benefits: "Full tuition + Living expenses + Travel allowance",
    eligibility: [
      "Graduation from recognized Indian university",
      "Minimum 65% aggregate marks",
    ],
    applyLink:
      "https://www.buddy4study.com/page/the-tata-capital-pankh-scholarship-programme",
  },
  {
    id: 4,
    title: "Google Women Techmakers Scholarship",
    institute: "Google",
    category: "Women",
    icon: bluebook,
    description:
      "Supporting economically disadvantaged students to continue their education without financial burden",
    amount: "₹1,00,000",
    duration: "1 year",
    deadline: "December 15, 2024",
    expired: true,
    benefits: "₹1,00,000 + Mentorship + Google events access",
    eligibility: [
      "Currently enrolled in Bachelor's/Master'",
      "Female students in computer science",
    ],
    applyLink:
      "https://collegedunia.com/scholarship/282-googles-women-techmakers-program",
  },
  // Add more scholarships similarly
];

export default scholarships;