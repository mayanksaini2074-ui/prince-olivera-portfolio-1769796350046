import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Prince Olivera",
    "title": "Management Fresh Graduate",
    "email": "princeolivera583@gmail.com",
    "phone": "+919380515304",
    "linkedin": "https://linkedin.com/in/prince-olivera-6a796b280",
    "github": "",
    "location": "Bengaluru, India",
    "summary": "Enthusiastic management fresher with an interest in HR and administrative functions. Strong interpersonal skills with the ability to work well in team environments. Seeking an opportunity to learn, grow, and add value to the organization."
  },
  "experience": [
    {
      "title": "Finance Intern",
      "company": "Club Mahindra Virajpet",
      "dates": "12/2024 – 01/2025",
      "description": "Assisted in preparing and reviewing financial reports and executive documentation with high accuracy.",
      "highlights": [
        "Coordinated with cross-functional teams to collect and validate financial data.",
        "Maintained confidential financial records and ensured compliance with internal standards.",
        "Supported senior team members with reporting, documentation, and deadline management."
      ]
    },
    {
      "title": "Process Associate",
      "company": "The Einfach Group (TEG)",
      "dates": "10/2023 – 01/2024",
      "description": "Provided administrative and operational support to internal teams and senior staff.",
      "highlights": [
        "Organized and maintained company records, documents, and compliance files.",
        "Coordinated internal meetings, prepared agendas, and ensured timely follow-ups.",
        "Managed customer documentation verification while maintaining confidentiality.",
        "Supported office operations, scheduling, and process coordination."
      ]
    }
  ],
  "education": [
    {
      "degree": "Master's in Business Administration [Human Resource and Finance]",
      "institution": "ST. Philomena's College",
      "years": "02/2024 – 11/2025",
      "gpa": "8.5"
    },
    {
      "degree": "Bachelor of Commerce [Taxation and Finance]",
      "institution": "ST. Anne's Degree College",
      "years": "07/2021 – 08/2023",
      "gpa": "8.0"
    },
    {
      "degree": "Diploma in E-Office Management",
      "institution": "Indian Institute of Computer",
      "years": "02/2023 – 07/2023",
      "gpa": "91.6%"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "Impact of Employer Branding on Talent Retention - SLN Coffee",
      "description": "Conducted research on recruitment and retention strategies, analyzing employer branding impact. Collected and analyzed data from employees to assess talent management effectiveness. Provided actionable recommendations to improve retention through employer branding.",
      "technologies": [],
      "link": "",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "falling-snow",
  "about": "split",
  "experience": "accordion",
  "projects": "featured",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "modern",
  "colorPalette": "slate"
};
