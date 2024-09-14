import React, { useState } from 'react';
import '../styles/faq.css';

const faqData = [
  {
    question: 'What services do you provide?',
    answer: 'We offer a wide range of services including web design, UI/UX design, SEO marketing, and more.',
  },
  {
    question: 'How long does a project take?',
    answer: 'The project duration varies based on complexity, but typically we aim to deliver within 4-6 weeks.',
  },
  {
    question: 'Do you offer post-project support?',
    answer: 'Yes, we offer ongoing support and maintenance for all projects we deliver.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer flexible pricing based on the project scope and complexity. Contact us for a detailed quote.',
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Find the answers you need</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
