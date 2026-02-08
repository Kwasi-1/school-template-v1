// Admissions Content - Edit this file to customize admissions information

export interface AdmissionLevel {
  level: string;
  ageRange: string;
  requirements: string[];
  documents: string[];
}

export interface AdmissionStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface AdmissionsContent {
  overview: {
    title: string;
    subtitle: string;
    description: string;
  };
  steps: AdmissionStep[];
  levels: AdmissionLevel[];
  importantDates: {
    label: string;
    date: string;
  }[];
  applicationFee: string;
}

export const admissionsContent: AdmissionsContent = {
  overview: {
    title: "Join Our School Community",
    subtitle: "Admissions",
    description: "We welcome students who are eager to learn and grow in a nurturing environment. Our admissions process is designed to be straightforward and supportive, ensuring every family feels welcomed from the very first step.",
  },
  
  steps: [
    {
      step: 1,
      title: "Submit Application",
      description: "Complete our online application form with student and parent details.",
      icon: "mdi:file-document-edit-outline",
    },
    {
      step: 2,
      title: "Document Review",
      description: "Submit required documents for verification and assessment.",
      icon: "mdi:file-check-outline",
    },
    {
      step: 3,
      title: "Assessment & Interview",
      description: "Students take a placement test and families meet with our admissions team.",
      icon: "mdi:account-school-outline",
    },
    {
      step: 4,
      title: "Offer & Enrollment",
      description: "Successful applicants receive an offer letter and complete enrollment.",
      icon: "mdi:check-decagram-outline",
    },
  ],
  
  levels: [
    {
      level: "Nursery (Creche - KG2)",
      ageRange: "1 - 5 years",
      requirements: [
        "Birth certificate",
        "Immunization records",
        "Passport photographs (4)",
        "Parent/Guardian ID",
      ],
      documents: [
        "Completed application form",
        "Previous school report (if applicable)",
      ],
    },
    {
      level: "Primary (Class 1 - 6)",
      ageRange: "6 - 11 years",
      requirements: [
        "Birth certificate",
        "Previous school report",
        "Passport photographs (4)",
        "Parent/Guardian ID",
        "Transfer letter (if applicable)",
      ],
      documents: [
        "Completed application form",
        "Placement test results",
      ],
    },
    {
      level: "Junior High School (JHS 1 - 3)",
      ageRange: "12 - 14 years",
      requirements: [
        "Birth certificate",
        "Previous school report",
        "Passport photographs (4)",
        "Parent/Guardian ID",
        "BECE registration (JHS 3)",
      ],
      documents: [
        "Completed application form",
        "Placement test results",
        "Character reference letter",
      ],
    },
    {
      level: "Senior High School (SHS 1 - 3)",
      ageRange: "15 - 18 years",
      requirements: [
        "BECE results slip",
        "Birth certificate",
        "Passport photographs (4)",
        "Parent/Guardian ID",
        "CSSPS placement letter",
      ],
      documents: [
        "Completed application form",
        "JHS testimonial",
        "Character reference letter",
      ],
    },
  ],
  
  importantDates: [
    { label: "Applications Open", date: "January 15, 2026" },
    { label: "Early Bird Deadline", date: "March 31, 2026" },
    { label: "Regular Deadline", date: "May 31, 2026" },
    { label: "Entrance Exams", date: "June 15, 2026" },
    { label: "Results Released", date: "July 1, 2026" },
    { label: "New Term Begins", date: "September 5, 2026" },
  ],
  
  applicationFee: "GH₵ 100",
};

export default admissionsContent;
