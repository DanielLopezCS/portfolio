import { motion } from 'framer-motion';

const Education = () => {
  const baseUrl = import.meta.env.BASE_URL;
  
  const education = [
    {
      degree: 'M.S. Software Engineering, AI Engineering',
      school: 'Western Governors University',
      status: 'In Progress',
      year: 'Current',
      icon: `${baseUrl}education/wgu.jpg` // Add your WGU logo here
    },
    {
      degree: 'B.S. Computer Science',
      school: 'California State Polytechnic University, Pomona',
      status: 'Completed',
      year: '2019',
      icon: `${baseUrl}education/cpp.png` // Add your Cal Poly logo here
    }
  ];

  return (
    <motion.section
      id="education"
      className="section education-section"
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
        Education
      </motion.h2>
      <div className="education-grid">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="education-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="education-card-content">
              {edu.icon && (
                <div className="education-icon">
                  <img 
                    src={edu.icon} 
                    alt={`${edu.school} logo`}
                    onError={(e) => {
                      // Hide image if it doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <div className="education-info">
                <div className="education-header">
                  <h3>{edu.degree}</h3>
                  <span className={`status-badge ${edu.status.toLowerCase().replace(' ', '.')}`}>
                    {edu.status}
                  </span>
                </div>
                <p className="school-name">{edu.school}</p>
                <p className="education-year">{edu.year}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;

