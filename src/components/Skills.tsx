import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Cloud & DevOps',
      skills: ['AWS (Lambdas, Amplify, IAM, S3)', 'Azure', 'CI/CD', 'DevOps'],
      gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.1) 100%)',
      accent: '#6366f1'
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'NestJS', 'Django', 'TypeORM'],
      gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(236, 72, 153, 0.1) 100%)',
      accent: '#8b5cf6'
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'Prisma'],
      gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(244, 114, 182, 0.1) 100%)',
      accent: '#ec4899'
    },
    {
      category: 'Frontend',
      skills: ['React', 'Redux', 'Next.js', 'TypeScript', 'SCSS', 'Bootstrap', 'Material UI', 'Tailwind'],
      gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.1) 100%)',
      accent: '#6366f1'
    },
    {
      category: 'Testing & Tools',
      skills: ['Cypress E2E Testing', 'GitHub Actions'],
      gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(236, 72, 153, 0.1) 100%)',
      accent: '#8b5cf6'
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
            whileHover={{ scale: 1.03, y: -8 }}
            style={{
              '--category-gradient': category.gradient,
              '--category-accent': category.accent
            } as React.CSSProperties}
          >
            <div className="skill-category-header">
              <h3 className="category-title">{category.category}</h3>
              <div className="category-accent-line" style={{ background: category.accent }} />
            </div>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  className="skill-tag"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1 + i * 0.05,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  style={{ '--tag-accent': category.accent } as React.CSSProperties}
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

