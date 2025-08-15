import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Industrial Solutions Company - Leading Industrial Solutions Provider</title>
        <meta name="description" content="Leading industrial solutions provider offering comprehensive services across multiple sectors including heavy industry, maritime, railway systems, and innovative technologies." />
        <meta property="og:title" content="Industrial Solutions Company - Leading Industrial Solutions Provider" />
        <meta property="og:description" content="Comprehensive industrial solutions across multiple sectors." />
      </Helmet>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="text-center text-white">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-8 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium">Leading Industrial Solutions Provider</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">
                Industrial Solutions
              </span>
              <br />
              <span className="text-3xl lg:text-5xl text-primary-200 font-light">
                For Every Sector
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-primary-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Leading provider of comprehensive industrial solutions across heavy industry, maritime, railway systems, and innovative technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                to="/sector-solutions" 
                className="group relative px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl inline-flex items-center justify-center"
              >
                <span>Explore Solutions</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                to="/contact" 
                className="group px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl inline-flex items-center justify-center"
              >
                <span>Contact Us</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold text-white group-hover:text-primary-200 transition-colors">10+</div>
                <div className="text-primary-200 text-sm font-medium">Industrial Sectors</div>
              </div>
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold text-white group-hover:text-primary-200 transition-colors">500+</div>
                <div className="text-primary-200 text-sm font-medium">Completed Projects</div>
              </div>
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold text-white group-hover:text-primary-200 transition-colors">50+</div>
                <div className="text-primary-200 text-sm font-medium">Global Partners</div>
              </div>
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold text-white group-hover:text-primary-200 transition-colors">24/7</div>
                <div className="text-primary-200 text-sm font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section className="page-section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Sector Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet the unique needs of various industrial sectors with cutting-edge technology and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Heavy Industry Services</h3>
              <p className="text-gray-600 mb-4">Comprehensive solutions for cement, fertilizer, mining, and construction industries with advanced material handling systems.</p>
              <Link to="/sector-solutions/agir-sanayi-hizmetleri-alberk" className="text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maritime Services</h3>
              <p className="text-gray-600 mb-4">Specialized maritime solutions including boat design, manufacture, and marine equipment with innovative technologies.</p>
              <Link to="/sector-solutions/denizcilik-hizmetleri-planet-boat" className="text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m13 0h-6m-2-5a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Railway Systems</h3>
              <p className="text-gray-600 mb-4">Advanced railway system solutions including electric traction motors, control systems, and specialized components.</p>
              <Link to="/sector-solutions/demiryolu-sistemleri-ve-cozumleri" className="text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Automation Systems</h3>
              <p className="text-gray-600 mb-4">Electric, electronic, and automation systems with cutting-edge technology for industrial applications.</p>
              <Link to="/sector-solutions/elektrik-elektronik-otomasyon-sistemleri-ve-cozumleri" className="text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">HVAC Solutions</h3>
              <p className="text-gray-600 mb-4">Comprehensive HVAC solutions for commercial vehicles, industrial applications, and specialized climate systems.</p>
              <Link to="/sector-solutions/hvac-cozumleri-ve-projelendirme" className="text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hotel & Kitchen Equipment</h3>
              <p className="text-gray-600 mb-4">Professional hotel and industrial kitchen equipment with comprehensive solutions for hospitality sector.</p>
              <Link to="/sector-solutions/otel-ve-endustriyel-mutfak-ekipmanlari" className="text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Solutions?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Expertise</h3>
                    <p className="text-gray-600">Multi-sector experience with deep industry knowledge and proven track record.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation Focus</h3>
                    <p className="text-gray-600">Cutting-edge technology solutions with future-oriented approach and continuous development.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Partnerships</h3>
                    <p className="text-gray-600">Strong international partnerships enabling access to latest technologies and best practices.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img 
                src="[PLACEHOLDER_IMAGE_URL: Industrial team collaboration]" 
                alt="Our team working on industrial solutions" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">Contact our experts to discuss your industrial solution needs and discover how we can help your business grow.</p>
              <Link to="/contact" className="btn-primary w-full text-center">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage