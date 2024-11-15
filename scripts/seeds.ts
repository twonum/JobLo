const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

const main = async () => {
  try {
    await database.category.createMany({
      data: [
        { name: "Software Development" },
        { name: "Data Science" },
        { name: "Web Development" },
        { name: "Mobile Development" },
        { name: "DevOps" },
        { name: "Cloud Computing" },
        { name: "Cybersecurity" },
        { name: "Game Development" },
        { name: "Artificial Intelligence" },
        { name: "Machine Learning" },
        { name: "Blockchain" },
        { name: "Augmented Reality" },
        { name: "Virtual Reality" },
        { name: "Internet of Things" },
        { name: "Big Data" },
        { name: "Networking" },
        { name: "Database Management" },
        { name: "Quality Assurance" },
        { name: "Project Management" },
        { name: "Product Management" },
        { name: "UI/UX Design" },
        { name: "Digital Marketing" },
        { name: "Content Writing" },
        { name: "Sales" },
        { name: "Customer Service" },
        { name: "Human Resources" },
        { name: "Finance" },
        { name: "Accounting" },
        { name: "Legal" },
        { name: "Healthcare" },
        { name: "Education" },
        { name: "Operations" },
        { name: "Logistics" },
        { name: "Retail" },
        { name: "Engineering" },
        { name: "Manufacturing" },
        { name: "Hospitality" },
        { name: "Travel" },
        { name: "Media" },
        { name: "Entertainment" },
        { name: "Real Estate" },
        { name: "Pharmaceuticals" },
        { name: "Nonprofit" },
        { name: "Advertising" },
        { name: "PR" },
        { name: "Event Management" },
        { name: "Graphic Design" },
        { name: "Photography" },
        { name: "Videography" },
        { name: "Music" },
        { name: "Broadcasting" },
        { name: "Public Relations" },
        { name: "Customer Success" },
        { name: "Retail Management" },
        { name: "E-commerce" },
        { name: "Supply Chain" },
        { name: "Insurance" },
        { name: "Construction" },
        { name: "Architecture" },
        { name: "Publishing" },
        { name: "Social Media" },
        { name: "Mobile Apps" },
        { name: "Web Apps" },
        { name: "Database Administration" },
        { name: "App Development" },
        { name: "System Administration" },
        { name: "Network Engineering" },
        { name: "Data Engineering" },
        { name: "Data Analysis" },
        { name: "Business Intelligence" },
        { name: "E-learning" },
        { name: "Content Creation" },
        { name: "Copywriting" },
        { name: "SEO" },
        { name: "SEM" },
        { name: "Affiliate Marketing" },
        { name: "Mobile Marketing" },
        { name: "Email Marketing" },
        { name: "Social Media Marketing" },
        { name: "Branding" },
        { name: "Creative Direction" },
        { name: "Performance Marketing" },
        { name: "Growth Hacking" },
        { name: "Influencer Marketing" },
        { name: "UX Research" },
        { name: "UI Design" },
        { name: "Interaction Design" },
        { name: "Product Design" },
        { name: "Business Development" },
        { name: "Talent Acquisition" },
        { name: "Leadership" },
        { name: "Executive Management" },
        { name: "Operations Management" },
        { name: "Legal Affairs" },
        { name: "Risk Management" },
        { name: "Compliance" },
        { name: "Cyber Risk" },
        { name: "Environmental" },
        { name: "Sustainability" },
        { name: "Government" },
        { name: "Public Sector" },
        { name: "International Relations" },
        { name: "Foreign Affairs" },
        { name: "Defense" },
        { name: "Aerospace" },
        { name: "Marine" },
        { name: "Transportation" },
        { name: "Retail Marketing" },
        { name: "Digital Transformation" },
        { name: "Cloud Solutions" },
        { name: "Enterprise Solutions" },
        { name: "Corporate Strategy" },
        { name: "Strategic Partnerships" },
        { name: "Mergers and Acquisitions" },
        { name: "Venture Capital" },
        { name: "Investment Banking" },
        { name: "Wealth Management" },
        { name: "Corporate Finance" },
        { name: "Financial Planning" },
        { name: "Trading" },
        { name: "Economic Research" },
      ],
    });
    console.log("Categories successfully created.");
  } catch (error) {
    console.log(`Error while inserting categories: ${error}`);
  }
};

main();
