import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'M.S. Software Engineering, AI Engineering',
      school: 'Western Governors University',
      status: 'In Progress',
      year: 'Current'
    },
    {
      degree: 'B.S. Computer Science',
      school: 'Cal Poly Pomona',
      status: 'Completed',
      year: '2019'
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
            <div className="education-header">
              <h3>{edu.degree}</h3>
              <span className={`status-badge ${edu.status.toLowerCase()}`}>
                {edu.status}
              </span>
            </div>
            <p className="school-name">{edu.school}</p>
            <p className="education-year">{edu.year}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;

