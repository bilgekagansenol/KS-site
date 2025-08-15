import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function WhoWeAre() {
  const sections = [
    {
      title: 'OUR PROMISE',
      path: '/who-we-are/our-promise',
      description: '[PLACEHOLDER: Our commitment to excellence and customer satisfaction]',
      icon: '🤝'
    },
    {
      title: 'OUR PRINCIPLES',
      path: '/who-we-are/our-principles',
      description: '[PLACEHOLDER: Core principles that guide our business operations]',
      icon: '⚖️'
    },
    {
      title: 'OUR VALUES',
      path: '/who-we-are/our-values',
      description: '[PLACEHOLDER: Values that define our company culture and approach]',
      icon: '💎'
    },
    {
      title: 'REPRESENTATION AND PARTNERSHIP',
      path: '/who-we-are/representation-and-partnership',
      description: '[PLACEHOLDER: Global partnerships and representation services]',
      icon: '🌐'
    },
    {
      title: 'CREATIVE SOLUTIONS',
      path: '/who-we-are/creative-solutions',
      description: '[PLACEHOLDER: Innovative approaches to industrial challenges]',
      icon: '💡'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Who We Are - Industrial Solutions Company</title>
        <meta name="description" content="Learn about our company values, principles, and commitment to providing exceptional industrial solutions across multiple sectors." />
        <meta property="og:title" content="Who We Are - Industrial Solutions Company" />
        <meta property="og:description" content="Our company values, principles, and commitment to excellence." />
      </Helmet>

      <section className="hero-section">
        <div className="container">
          <div className="py-16 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Who We Are</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              A leading industrial solutions company built on strong values, proven principles, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              [PLACEHOLDER: Company overview describing our mission, vision, and commitment to industrial excellence across multiple sectors and decades of experience.]
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <Link 
                key={index}
                to={section.path}
                className="card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {section.title}
                </h3>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <span className="text-primary-600 font-medium group-hover:text-primary-700">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>[PLACEHOLDER: Company history and evolution over the years, highlighting key milestones and achievements in the industrial solutions sector.]</p>
                <p>[PLACEHOLDER: Description of how we grew from a small company to a leading provider of comprehensive industrial solutions across multiple sectors.]</p>
                <p>[PLACEHOLDER: Our journey of innovation, partnership building, and commitment to excellence that defines us today.]</p>
              </div>
            </div>
            <div>
              <img 
                src="[PLACEHOLDER_IMAGE_URL: Company timeline or historical photos]" 
                alt="Our company journey" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-primary-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Partner With Us?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how our values and expertise can help drive your industrial projects forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sector-solutions" className="btn-primary">
              Explore Our Solutions
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhoWeAre