import { motion } from 'framer-motion';

const WorkExperience = () => {
  const baseUrl = import.meta.env.BASE_URL;
  
  const experiences = [
    {
      company: 'Summit Interconnect',
      role: 'Software Engineer',
      period: 'April 2025 - Current',
      icon: `${baseUrl}companies/summit-logo.png`, // Add your Summit logo here
      highlights: [
        'Leading development of enterprise software solutions',
        'Implementing scalable architectures and modern development practices'
      ]
    },
    {
      company: 'Arrivo.ai',
      role: 'Software Engineer',
      period: 'April 2023 - February 2025',
      icon: `${baseUrl}companies/arrivo-logo.png`, // Add your Arrivo logo here
      highlights: [
        'Spearheaded major Frontend and Backend feature development on the platform',
        'Developed automated synchronization between web application database and CRM systems (HubSpot) for seamless non-technical team integration',
        'Created comprehensive end-to-end integration tests through CI/CD pipelines, ensuring high-quality releases',
        'Modernized authentication/authorization flow with emphasis on security and scalability',
        'Mentored two junior developer interns, fostering professional growth and knowledge transfer',
        'Collaborated with founders to transform Figma designs into production-ready web applications',
        'Extensively worked with React, Redux, Bootstrap, Node.js, SQL, and AWS tools'
      ]
    },
    {
      company: 'Moyae',
      role: 'Software Engineer',
      period: 'July 2022 - April 2023',
      icon: `${baseUrl}companies/moyae-logo.png`, // Add your Moyae logo here
      highlights: [
        'Collaborated asynchronously with a team of engineers to build an Electronic Medical Record (EMR) system for Ophthalmologists',
        'Greenfielded innovative features, integrating machine learning for health insurance form validation and employee time tracking',
        'Complied with FHIR HL7 data standards while working on the EMR system',
        'Established robust CI/CD architecture for Continuous E2E Integration Testing using Cypress and GitHub Actions',
        'Tasked with feature implementation, code refactoring, debugging, testing, and prototyping solutions',
        'Tech stack: Node.js, React, Prisma, PostgreSQL, FHIR Database Client, AWS S3, Material UI, Express'
      ]
    },
    {
      company: 'Freelancing',
      role: 'General Software Development',
      period: 'Feburary 2020 - June 2022',
      icon: `${baseUrl}companies/freelance-logo.png`, // Optional: Add a freelance icon
      highlights: [
        'Delivered custom software solutions for various clients',
        'Managed full-stack development projects from conception to deployment'
      ]
    }
  ];

  return (
    <motion.section
      id="experience"
      className="section experience-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="section-title"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Work Experience
      </motion.h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-item"
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="experience-header">
              <div className="experience-header-main">
                {exp.icon && (
                  <div className="company-icon">
                    <img 
                      src={exp.icon} 
                      alt={`${exp.company} logo`}
                      onError={(e) => {
                        // Hide image if it doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="experience-title">
                  <h3 className="company-name">{exp.company}</h3>
                  <p className="role-name">{exp.role}</p>
                </div>
              </div>
              <span className="period">{exp.period}</span>
            </div>
            <ul className="highlights">
              {exp.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + i * 0.1 }}
                >
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WorkExperience;

