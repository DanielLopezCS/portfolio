import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Cloud & DevOps',
      skills: ['AWS (Lambdas, Amplify, IAM, S3)', 'Azure', 'CI/CD', 'DevOps']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'NestJS', 'Django', 'TypeORM']
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'Prisma']
    },
    {
      category: 'Frontend',
      skills: ['React', 'Redux', 'Next.js', 'TypeScript', 'SCSS', 'Bootstrap', 'Material UI', 'Tailwind']
    },
    {
      category: 'Testing & Tools',
      skills: ['Cypress E2E Testing', 'GitHub Actions']
    }
  ];

  return (
    <motion.section
      id="skills"
      className="section skills-section"
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
        Skills
      </motion.h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-category"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  className="skill-tag"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;

