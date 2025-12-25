import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface CarouselImage {
  id: number;
  image: string;
  description: string;
}

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Images loaded from public/projects/ai-study-tool/
  // Using import.meta.env.BASE_URL to handle GitHub Pages base path
  const baseUrl = import.meta.env.BASE_URL;
  const carouselImages: CarouselImage[] = [
    {
      id: 1,
      image: `${baseUrl}projects/ai-study-tool/1.png`,
      description: 'Upload your syllabus and watch as the AI automatically generates structured coursework tailored to your curriculum.'
    },
    {
      id: 3,
      image: `${baseUrl}projects/ai-study-tool/3.png`,
      description: 'Interactive flash cards with spaced repetition algorithms to optimize your learning and retention.'
    }
  ];

  const technologies = ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'PostgreSQL', 'Tailwind CSS', 'NestJs'];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <motion.section
      id="projects"
      className="section projects-section"
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
        Current Project
      </motion.h2>

      <motion.div
        className="project-showcase"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="project-header">
          <div>
            <h3 className="project-main-title">AI Study Tool</h3>
            <p className="project-main-description">
              An intelligent study platform that transforms any syllabus into comprehensive learning materials. 
              Simply input your course syllabus and the AI automatically generates coursework, flash cards, 
              practice exams, and practice problems to accelerate your learning journey.
            </p>
          </div>
        </div>

        <div className="carousel-container">
          <div className="carousel-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="carousel-slide"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <div className="carousel-image-wrapper">
                  <img
                    src={carouselImages[currentIndex].image}
                    alt={`AI Study Tool feature ${currentIndex + 1}`}
                    className="carousel-image"
                    onError={(e) => {
                      // Fallback if image doesn't exist yet
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/1200x800/1a1a2e/6366f1?text=Image+' + (currentIndex + 1);
                    }}
                  />
                  <div className="carousel-overlay">
                    <div className="carousel-description">
                      <p>{carouselImages[currentIndex].description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              className="carousel-button carousel-button-prev"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              className="carousel-button carousel-button-next"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="carousel-indicators">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <motion.div
                  className="indicator-dot"
                  animate={{
                    scale: index === currentIndex ? 1.2 : 1,
                    opacity: index === currentIndex ? 1 : 0.5
                  }}
                  transition={{ duration: 0.2 }}
                />
              </button>
            ))}
          </div>

          <div className="carousel-counter">
            <span>{currentIndex + 1} / {carouselImages.length}</span>
          </div>
        </div>

        <div className="project-technologies-section">
          <h4 className="technologies-title">Technologies Used</h4>
          <div className="project-technologies">
            {technologies.map((tech, i) => (
              <motion.span
                key={i}
                className="tech-tag"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
