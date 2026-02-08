// Fees Content - Edit this file to customize fee structure

export interface FeeItem {
  name: string;
  amount: string;
  period?: string;
}

export interface FeeLevel {
  id: string;
  name: string;
  description: string;
  fees: FeeItem[];
  totalPerTerm?: string;
}

export interface PaymentMethod {
  icon: string;
  name: string;
  description: string;
  details?: string;
}

export interface FeesContent {
  overview: {
    title: string;
    subtitle: string;
    description: string;
  };
  levels: FeeLevel[];
  paymentMethods: PaymentMethod[];
  scholarships: {
    title: string;
    description: string;
    types: {
      name: string;
      discount: string;
      criteria: string;
    }[];
  };
  notes: string[];
}

export const feesContent: FeesContent = {
  overview: {
    title: "Tuition & Fees",
    subtitle: "Fee Structure",
    description: "We are committed to providing quality education at competitive rates. Below is our detailed fee structure for the current academic year.",
  },

  levels: [
    {
      id: "nursery",
      name: "Nursery & Kindergarten",
      description: "Creche, Nursery 1 & 2, KG1 & KG2",
      fees: [
        { name: "Tuition Fee", amount: "GH₵ 1,500", period: "per term" },
        { name: "Admission Fee", amount: "GH₵ 500", period: "one-time" },
        { name: "Feeding Fee", amount: "GH₵ 600", period: "per term" },
        { name: "Learning Materials", amount: "GH₵ 200", period: "per term" },
        { name: "Uniform (Set)", amount: "GH₵ 350", period: "one-time" },
      ],
      totalPerTerm: "GH₵ 2,300",
    },
    {
      id: "primary",
      name: "Primary School",
      description: "Class 1 to Class 6",
      fees: [
        { name: "Tuition Fee", amount: "GH₵ 1,800", period: "per term" },
        { name: "Admission Fee", amount: "GH₵ 600", period: "one-time" },
        { name: "Feeding Fee", amount: "GH₵ 650", period: "per term" },
        { name: "ICT & Library", amount: "GH₵ 150", period: "per term" },
        { name: "Learning Materials", amount: "GH₵ 250", period: "per term" },
        { name: "Uniform (Set)", amount: "GH₵ 400", period: "one-time" },
      ],
      totalPerTerm: "GH₵ 2,700",
    },
    {
      id: "jhs",
      name: "Junior High School",
      description: "JHS 1, JHS 2, JHS 3",
      fees: [
        { name: "Tuition Fee", amount: "GH₵ 2,200", period: "per term" },
        { name: "Admission Fee", amount: "GH₵ 700", period: "one-time" },
        { name: "Feeding Fee", amount: "GH₵ 700", period: "per term" },
        { name: "ICT & Laboratory", amount: "GH₵ 200", period: "per term" },
        { name: "BECE Preparation", amount: "GH₵ 300", period: "per term (JHS 3)" },
        { name: "Uniform (Set)", amount: "GH₵ 450", period: "one-time" },
      ],
      totalPerTerm: "GH₵ 3,100",
    },
    {
      id: "shs",
      name: "Senior High School",
      description: "SHS 1, SHS 2, SHS 3 (Day Students)",
      fees: [
        { name: "Tuition Fee", amount: "GH₵ 2,800", period: "per term" },
        { name: "Admission Fee", amount: "GH₵ 800", period: "one-time" },
        { name: "ICT & Laboratory", amount: "GH₵ 250", period: "per term" },
        { name: "Library & Sports", amount: "GH₵ 150", period: "per term" },
        { name: "WASSCE Preparation", amount: "GH₵ 500", period: "per term (SHS 3)" },
        { name: "Uniform (Set)", amount: "GH₵ 500", period: "one-time" },
      ],
      totalPerTerm: "GH₵ 3,200",
    },
  ],

  paymentMethods: [
    {
      icon: "mdi:cellphone",
      name: "Mobile Money",
      description: "Pay via MTN MoMo, Vodafone Cash, or AirtelTigo Money",
      details: "Send to: 024 123 4567 (Registered Name: Greenwood School)",
    },
    {
      icon: "mdi:bank",
      name: "Bank Transfer",
      description: "Direct deposit to our school bank account",
      details: "GCB Bank | Acc: 1234567890 | Greenwood International School",
    },
    {
      icon: "mdi:credit-card",
      name: "Card Payment",
      description: "Pay with Visa or Mastercard at the school office",
    },
    {
      icon: "mdi:cash",
      name: "Cash Payment",
      description: "Pay directly at the school accounts office",
      details: "Office hours: Monday - Friday, 8:00 AM - 4:00 PM",
    },
  ],

  scholarships: {
    title: "Scholarships & Financial Aid",
    description: "We believe no child should miss out on quality education due to financial constraints. Explore our scholarship options:",
    types: [
      {
        name: "Merit Scholarship",
        discount: "Up to 50% off tuition",
        criteria: "Top 3 students in each class based on term examinations",
      },
      {
        name: "Sibling Discount",
        discount: "10% off per additional child",
        criteria: "For families with 2 or more children enrolled",
      },
      {
        name: "Early Payment Discount",
        discount: "5% off total fees",
        criteria: "Full term payment made before resumption date",
      },
      {
        name: "Need-Based Aid",
        discount: "Varies (up to 30%)",
        criteria: "Based on family financial assessment",
      },
    ],
  },

  notes: [
    "All fees are subject to annual review and may change for new academic years.",
    "A 10% late payment fee applies after the 2nd week of each term.",
    "Refunds are processed according to our refund policy available at the school office.",
    "PTA dues and exam registration fees (BECE/WASSCE) are separate and paid when due.",
  ],
};

export default feesContent;
