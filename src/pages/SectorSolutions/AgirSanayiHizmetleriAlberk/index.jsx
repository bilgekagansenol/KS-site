import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function AgirSanayiHizmetleriAlberk() {
  const sectors = [
    { title: 'CEMENT', path: '/sector-solutions/agir-sanayi-hizmetleri-alberk/cement', description: 'Comprehensive cement industry solutions' },
    { title: 'FERTILIZER', path: '/sector-solutions/agir-sanayi-hizmetleri-alberk/fertilizer', description: 'Advanced fertilizer production equipment' },
    { title: 'MINING', path: '/sector-solutions/agir-sanayi-hizmetleri-alberk/mining', description: 'Mining equipment and processing solutions' },
    { title: 'BUILDING MATERIALS - CONSTRUCTION', path: '/sector-solutions/agir-sanayi-hizmetleri-alberk/building-materials-construction', description: 'Construction materials and equipment' },
    { title: 'ASPHALT AGGREGATES & CONCRETE', path: '/sector-solutions/agir-sanayi-hizmetleri-alberk/asphalt-aggregates-concrete', description: 'Asphalt and concrete production solutions' }
  ]

  const productGroups = [
    { title: 'BULK MATERIAL HANDLING SOLUTIONS', path: '/sector-solutions/agir-sanayi-hizmetleri-alberk/bulk-material-handling-solutions', description: 'Advanced material handling systems' },
    { title: 'GRINDING & PROCESS EQUIPMENT', path: '/sector-solutions/agir-sanayi-hizmetleri-alberk/grinding-process-equipment', description: 'Industrial grinding and processing equipment' },
    { title: 'CONCRETE SOLUTIONS', path: '/sector-solutions/agir-sanayi-hizmetleri-alberk/concrete-solutions', description: 'Complete concrete production solutions' },
    { title: 'WASTE HEAT RECOVERY SOLUTIONS AND GREEN SOLUTIONS', path: '/sector-solutions/agir-sanayi-hizmetleri-alberk/waste-heat-recovery-solutions-and-green-solutions', description: 'Sustainable energy recovery systems' },
    { title: 'AFTER SALES & SERVICE & SPARE PARTS', path: '/sector-solutions/agir-sanayi-hizmetleri-alberk/after-sales-service-spare-parts', description: 'Comprehensive after-sales support' }
  ]

  return (
    <>
      <Helmet>
        <title>Heavy Industry Services - ALBERK - Sector Solutions</title>
        <meta name="description" content="Comprehensive heavy industry solutions for cement, fertilizer, mining, construction, and building materials sectors with advanced equipment and systems." />
        <meta property="og:title" content="Heavy Industry Services - ALBERK - Sector Solutions" />
        <meta property="og:description" content="Heavy industry solutions for cement, fertilizer, mining, and construction sectors." />
      </Helmet>

      <section className="hero-section">
        <div className="container">
          <div className="py-16 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">AĞIR SANAYİ HİZMETLERİ - ALBERK</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive heavy industry solutions for cement, fertilizer, mining, construction, and building materials sectors with cutting-edge technology and expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About ALBERK</h2>
              <p className="text-lg text-gray-600 mb-6">
                [PLACEHOLDER: Company overview of ALBERK, their expertise in heavy industry solutions, years of experience, and commitment to providing comprehensive industrial equipment and services across multiple sectors.]
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">[PLACEHOLDER: Years of industry experience]</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">[PLACEHOLDER: Global project portfolio]</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">[PLACEHOLDER: Certified quality standards]</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="[PLACEHOLDER_IMAGE_URL: ALBERK heavy industry facility]" 
                alt="ALBERK Heavy Industry Services" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industrial Sectors We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector, index) => (
                <Link 
                  key={index}
                  to={sector.path}
                  className="card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{sector.description}</p>
                  <span className="text-primary-600 font-medium group-hover:text-primary-700">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Main Product Groups</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productGroups.map((group, index) => (
                <Link 
                  key={index}
                  to={group.path}
                  className="card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {group.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{group.description}</p>
                  <span className="text-primary-600 font-medium group-hover:text-primary-700">
                    Explore Products →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Enhance Your Heavy Industry Operations?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our ALBERK team to discuss your heavy industry needs and discover how our solutions can optimize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get Consultation
            </Link>
            <Link to="/sector-solutions/agir-sanayi-hizmetleri-alberk/sirket-presentasyonu-ve-kataloglari" className="btn-secondary">
              View Catalogs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default AgirSanayiHizmetleriAlberk