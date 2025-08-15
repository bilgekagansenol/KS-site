import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function SectorSolutions() {
  const sectors = [
    {
      title: 'AĞIR SANAYİ HİZMETLERİ - ALBERK',
      path: '/sector-solutions/agir-sanayi-hizmetleri-alberk',
      description: 'Comprehensive heavy industry solutions for cement, fertilizer, mining, and construction sectors.',
      image: '[PLACEHOLDER_IMAGE_URL: Heavy industrial machinery]',
      highlights: ['Bulk Material Handling', 'Grinding Equipment', 'Concrete Solutions', 'Green Technologies']
    },
    {
      title: 'DENİZCİLİK HİZMETLERİ - PLANET BOAT',
      path: '/sector-solutions/denizcilik-hizmetleri-planet-boat',
      description: 'Maritime services including boat design, manufacturing, and marine equipment solutions.',
      image: '[PLACEHOLDER_IMAGE_URL: Maritime vessels and equipment]',
      highlights: ['Boat Design', 'Marine Manufacturing', 'Polyethylene Solutions', 'After Sales Service']
    },
    {
      title: 'DEMİRYOLU SİSTEMLERİ VE ÇÖZÜMLERİ',
      path: '/sector-solutions/demiryolu-sistemleri-ve-cozumleri',
      description: 'Advanced railway system solutions including electric traction motors and control systems.',
      image: '[PLACEHOLDER_IMAGE_URL: Railway systems and trains]',
      highlights: ['Electric Traction Motors', 'Control Systems', 'Railway Components', 'Custom Solutions']
    },
    {
      title: 'OTOMOTİV SİSTEMLERİ VE ÇÖZÜMLERİ',
      path: '/sector-solutions/otomotiv-sistemleri-ve-cozumleri',
      description: 'Automotive systems and solutions for interior, exterior, and electronic components.',
      image: '[PLACEHOLDER_IMAGE_URL: Automotive components]',
      highlights: ['Interior/Exterior Parts', 'Electronic Systems', 'Connection Hardware', 'Custom Parts']
    },
    {
      title: 'ELEKTRİK - ELEKTRONİK, OTOMASYON SİSTEMLERİ',
      path: '/sector-solutions/elektrik-elektronik-otomasyon-sistemleri-ve-cozumleri',
      description: 'Electric, electronic, and automation systems with cutting-edge technology.',
      image: '[PLACEHOLDER_IMAGE_URL: Electronic control systems]',
      highlights: ['Electronic Equipment', 'Automation Systems', 'Chip Components', 'System Integration']
    },
    {
      title: 'OTEL VE ENDÜSTRİYEL MUTFAK EKİPMANLARI',
      path: '/sector-solutions/otel-ve-endustriyel-mutfak-ekipmanlari',
      description: 'Hotel and industrial kitchen equipment for hospitality and food service industries.',
      image: '[PLACEHOLDER_IMAGE_URL: Professional kitchen equipment]',
      highlights: ['Refrigeration Systems', 'Kitchen Equipment', 'Restaurant Solutions', 'Hotel Amenities']
    },
    {
      title: 'HVAC ÇÖZÜMLERİ VE PROJELENDİRME',
      path: '/sector-solutions/hvac-cozumleri-ve-projelendirme',
      description: 'HVAC solutions for commercial vehicles, industrial applications, and climate systems.',
      image: '[PLACEHOLDER_IMAGE_URL: HVAC systems]',
      highlights: ['Commercial Vehicle HVAC', 'Industrial Solutions', 'Climate Control', 'Energy Efficiency']
    },
    {
      title: 'ARAÇ SATIŞ - CKD',
      path: '/sector-solutions/arac-satis-ckd',
      description: 'Vehicle sales and CKD solutions including commercial and specialized vehicles.',
      image: '[PLACEHOLDER_IMAGE_URL: Commercial vehicles]',
      highlights: ['Commercial Vehicles', 'Armored Vehicles', 'Special Purpose Vehicles', 'CKD Assembly']
    },
    {
      title: 'AĞIR VASITA YEDEK PARÇA ÇÖZÜMLERİ',
      path: '/sector-solutions/agir-vasita-yedek-parca-cozumleri',
      description: 'Heavy vehicle spare parts solutions for European and Turkish brands.',
      image: '[PLACEHOLDER_IMAGE_URL: Heavy vehicle parts]',
      highlights: ['European Brands', 'Turkish Brands', 'Original Equipment', 'Price Lists']
    },
    {
      title: 'TARIM EKİPMANLARI VE GIDA ÜRETİM ÇÖZÜMLERİ',
      path: '/sector-solutions/tarim-ekipmanlari-ve-gida-uretim-cozumleri',
      description: 'Agricultural equipment and food production solutions for farming and food industries.',
      image: '[PLACEHOLDER_IMAGE_URL: Agricultural machinery]',
      highlights: ['Farm Equipment', 'Food Production', 'Processing Solutions', 'Agricultural Technology']
    }
  ]

  return (
    <>
      <Helmet>
        <title>Sector Solutions - Industrial Solutions Company</title>
        <meta name="description" content="Comprehensive industrial solutions across multiple sectors including heavy industry, maritime, railway, automotive, and more." />
        <meta property="og:title" content="Sector Solutions - Industrial Solutions Company" />
        <meta property="og:description" content="Comprehensive industrial solutions across multiple sectors." />
      </Helmet>

      <section className="hero-section">
        <div className="container">
          <div className="py-16 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Sector Solutions</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive industrial solutions tailored to meet the unique needs of various sectors with cutting-edge technology and expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise Across Industries</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From heavy industry to specialized automotive solutions, we provide comprehensive services that drive innovation and efficiency across multiple sectors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col h-full">
                  <img 
                    src={sector.image} 
                    alt={sector.title}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{sector.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{sector.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {sector.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to={sector.path}
                    className="btn-primary text-center"
                  >
                    Explore Solutions
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-primary-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Need a Custom Solution?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't see your specific industry needs? We specialize in creating custom solutions tailored to unique requirements across all industrial sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Discuss Your Needs
            </Link>
            <Link to="/projects-and-references" className="btn-secondary">
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectorSolutions