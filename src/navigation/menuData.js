function slugify(text) {
  return text
    .toLowerCase()
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ı/g, 'i')
    .replace(/İ/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function createMenuItem(title, path = null, children = null) {
  return {
    title,
    path: path || `/${slugify(title)}`,
    slug: slugify(title),
    children: children || null,
    hasChildren: Boolean(children && children.length > 0)
  };
}

export const menuData = [
  createMenuItem('WHO WE ARE', '/who-we-are', [
    createMenuItem('OUR PROMISE'),
    createMenuItem('OUR PRINCIPLES'),
    createMenuItem('OUR VALUES'),
    createMenuItem('REPRESENTATION AND PARTNERSHIP', null, [
      createMenuItem('Search for a supplier'),
      createMenuItem('Organization of multimodal transportation'),
      createMenuItem('Transaction financing'),
      createMenuItem('Financial transit'),
      createMenuItem('Delivery of oversized cargo'),
      createMenuItem('Turnkey foreign trade outsourcing')
    ]),
    createMenuItem('CREATIVE SOLUTIONS')
  ]),
  
  createMenuItem('SECTOR SOLUTIONS', '/sector-solutions', [
    createMenuItem('AĞIR SANAYİ HİZMETLERİ - ALBERK', null, [
      createMenuItem('ABOUT ALBERK'),
      createMenuItem('SECTORS', null, [
        createMenuItem('CEMENT'),
        createMenuItem('FERTILIZER'),
        createMenuItem('MINING'),
        createMenuItem('BUILDING MATERIALS - CONSTRUCTION'),
        createMenuItem('ASPHALT AGGREGATES & CONCRETE')
      ]),
      createMenuItem('MAIN SECTOR PRODUCT GROUPS', null, [
        createMenuItem('BULK MATERIAL HANDLING SOLUTIONS'),
        createMenuItem('GRINDING & PROCESS EQUIPMENT'),
        createMenuItem('CONCRETE SOLUTIONS'),
        createMenuItem('WASTE HEAT RECOVERY SOLUTIONS AND GREEN SOLUTIONS'),
        createMenuItem('AFTER SALES & SERVICE & SPARE PARTS')
      ]),
      createMenuItem('ŞİRKET PRESENTASYONU VE KATALOGLARI')
    ]),
    
    createMenuItem('DENİZCİLİK HİZMETLERİ - PLANET BOAT', null, [
      createMenuItem('ABOUT PLANET BOAT'),
      createMenuItem('PRODUCT LINES'),
      createMenuItem('DESIGN AND MANUFACTURE'),
      createMenuItem('POLYETHYLENE'),
      createMenuItem('AFTER SALES & SERVICE & SPARE PARTS'),
      createMenuItem('ŞİRKET PRESENTASYONU VE KATALOGLARI')
    ]),
    
    createMenuItem('DEMİRYOLU SİSTEMLERİ VE ÇÖZÜMLERİ', null, [
      createMenuItem('RAILWAY SYSTEM SOLUTION', null, [
        createMenuItem('ELECTRIC TRACTION MOTOR, INDUCTION GENERATORS'),
        createMenuItem('ELECTRIC DEVICES'),
        createMenuItem('CUSTOMIZED MASTER AND BRAKE CONTROLS'),
        createMenuItem('CUSTOMIZED SOLUTIONS'),
        createMenuItem('CUSTOMIZED SOLUTIONS FOR FREIGHT, WAGONS, BOGIES'),
        createMenuItem('PANTOGRAPH, MAIN SWITCHES, INSULATORS'),
        createMenuItem('MULTIFUNCTION TERMINALS')
      ]),
      createMenuItem('INTERIOR / EXTERIOR'),
      createMenuItem('ELECTRIC-ELECTRONICS / CONNECTION EQUIPMENTS'),
      createMenuItem('CONNECTION HARDWARES, BEARINGS, COUPLINGS, SEALING, GASKETS'),
      createMenuItem('CONSUMABLE'),
      createMenuItem('FIBERGLASS, POLYURETHANE, THERMOFORM PARTS PRODUCTION AND TECHNOLOGIES'),
      createMenuItem('RAILWAY TAMPING UNITS AND SPARE PARTS'),
      createMenuItem('AFTER SALES & SERVICE & SPARE PARTS'),
      createMenuItem('ŞİRKET PRESENTASYONU VE KATALOGLARI')
    ]),
    
    createMenuItem('OTOMOTİV SİSTEMLERİ VE ÇÖZÜMLERİ', null, [
      createMenuItem('INTERIOR / EXTERIOR'),
      createMenuItem('ELECTRIC-ELECTRONICS / CONNECTION EQUIPMENTS'),
      createMenuItem('CONNECTION HARDWARES, BEARINGS, COUPLINGS, SEALING, GASKETS'),
      createMenuItem('CONSUMABLE'),
      createMenuItem('FIBERGLASS, POLYURETHANE, THERMOFORM PARTS PRODUCTION AND TECHNOLOGIES'),
      createMenuItem('AFTER SALES & SERVICE & SPARE PARTS'),
      createMenuItem('ŞİRKET PRESENTASYONU VE KATALOGLARI')
    ]),
    
    createMenuItem('ELEKTRİK - ELEKTRONİK, OTOMASYON SİSTEMLERİ VE ÇÖZÜMLERİ', null, [
      createMenuItem('ELECTRIC & ELECTRONIC EQUIPMENTS'),
      createMenuItem('AUTOMATION & SYSTEMS'),
      createMenuItem('CHIP & COMPONENTS'),
      createMenuItem('AFTER SALES & SERVICE & SPARE PARTS'),
      createMenuItem('ŞİRKET PRESENTASYONU VE KATALOGLARI')
    ]),
    
    createMenuItem('OTEL VE ENDÜSTRİYEL MUTFAK EKİPMANLARI', null, [
      createMenuItem('MİNİBAR, REFRIGERATOR'),
      createMenuItem('KASA'),
      createMenuItem('Şeffaf Kapılı Et Dolapları'),
      createMenuItem('FÖN'),
      createMenuItem('Humidors at the hotel'),
      createMenuItem('Wall-mounted hand dryers'),
      createMenuItem('Kettles and Kettels\'s set for hotels'),
      createMenuItem('Pool cleaning products'),
      createMenuItem('Mutfak Malzemeleri ve Ekipmanları'),
      createMenuItem('ENDÜSTRİYEL FIRIN VE EKİPMANLARI'),
      createMenuItem('CAFE BAR VE BARİSTA EKİPMANLARI'),
      createMenuItem('Utu ve utu masası'),
      createMenuItem('PORSELEN TAKIMLAR'),
      createMenuItem('ÇATAL KAŞIK BIÇAK VE CAM ÜRÜN TAKIMI'),
      createMenuItem('PİŞİRME EKİPMANLARI'),
      createMenuItem('MUTFAK SET ÜSTÜ EKİPMANLARI'),
      createMenuItem('RESTAURANT EKİPMANLARI'),
      createMenuItem('BAR EKİPMANLARI'),
      createMenuItem('AÇIK BÜFE TEŞHİR EKİPMANLARI'),
      createMenuItem('BAHÇE VE BALKON MOBİLYALARI'),
      createMenuItem('RESEPSİYON DİZAYN MOBİLYALAR'),
      createMenuItem('BANYO AKSESUARLARI VE TAMAMLAYICI ÜRÜNLER'),
      createMenuItem('EVYELER VE PASLANMAZ ÇELİK VİTRİFİYELER'),
      createMenuItem('BEDENSEL ENGELLİ EKİPMANLARI'),
      createMenuItem('ISLAK HACİM EKİPMANLARI'),
      createMenuItem('KAN SAKLAMA DOLAPLARI'),
      createMenuItem('İLAÇ SAKLAMA SOĞUTUCULARI')
    ]),
    
    createMenuItem('HVAC ÇÖZÜMLERİ VE PROJELENDİRME', null, [
      createMenuItem('HVAC ÇÖZÜMLERİ'),
      createMenuItem('TOPLU TAŞIMA ARAÇLARI HVAC ÇÖZÜMLERİ VE PROJELENDİRME'),
      createMenuItem('ENDÜSTRİYEL HVAC ÇÖZÜMLERİ VE PROJELENDİRME'),
      createMenuItem('KARAVAN İKLİMLENDİRME ÇÖZÜMLERİ'),
      createMenuItem('AFTER SALES & SERVICE & SPARE PARTS')
    ]),
    
    createMenuItem('ARAÇ SATIŞ - CKD', null, [
      createMenuItem('SKD - CKD PRODUCTS'),
      createMenuItem('8 - 12 - 18 METER COMMERCIAL VEHICLE'),
      createMenuItem('Special and Commercial Vehicle'),
      createMenuItem('Temsa, Man, Mercedes-Benz, Isuzu, Junjin'),
      createMenuItem('Armored Vehicles with B7 and Level 2&3&4 Protection Levels'),
      createMenuItem('Armored Vehicles with or without Gun Turrets, Armored Private VIP Vehicles'),
      createMenuItem('Armored Vehicles for the Needs (Communication, Commander, Ambulance, etc.)'),
      createMenuItem('Van/Minivan'),
      createMenuItem('Superstructure Works for Trucks')
    ]),
    
    createMenuItem('AĞIR VASITA YEDEK PARÇA ÇÖZÜMLERİ', null, [
      createMenuItem('AVRUPALI MARKALAR - AĞIR VASITA YEDEK PARÇA'),
      createMenuItem('TÜRK MARKALAR - AĞIR VASITA YEDEK PARÇA'),
      createMenuItem('FİYAT LİSTELERİ'),
      createMenuItem('FİYAT LİSTESİ TALEP ETME SAYFASI'),
      createMenuItem('ORIGINAL EQUIPMENT')
    ]),
    
    createMenuItem('TARIM EKİPMANLARI VE GIDA ÜRETİM ÇÖZÜMLERİ', null, [
      createMenuItem('TARIM EKİPMANLARI'),
      createMenuItem('GIDA ÜRÜNLERİ'),
      createMenuItem('GIDA ÜRETİM MALZEMELERİ')
    ])
  ]),
  
  createMenuItem('PROJECTS AND REFERENCES', '/projects-and-references', [
    createMenuItem('TAMAMLANMIŞ PROJELER VE REFERANSLAR'),
    createMenuItem('DEVAM ETMEKTE OLAN PROJELER'),
    createMenuItem('TAMAMLANMIŞ SEVKİYATLAR'),
    createMenuItem('REFERANS MEKTUPLARI')
  ]),
  
  createMenuItem('BLOG - FUTURE & INNOVATION', '/blog-future-innovation', [
    createMenuItem('OUR FOCUS AREAS'),
    createMenuItem('SUPPLIER'),
    createMenuItem('CUSTOMER'),
    createMenuItem('PARTNERSHIP'),
    createMenuItem('DEALERSHIP'),
    createMenuItem('LOYALTY')
  ]),
  
  createMenuItem('PEOPLE & CAREER', '/people-career', [
    createMenuItem('REQUIREMENT POLICY'),
    createMenuItem('CAREER MANAGEMENT'),
    createMenuItem('RECOGNITION AND REWARD POLICY'),
    createMenuItem('TALENT MANAGEMENT PROCESS'),
    createMenuItem('ACTIVITIES'),
    createMenuItem('NEWS FROM GKS'),
    createMenuItem('DISCOVER OUR CAREER OPPORTUNITIES')
  ]),
  
  createMenuItem('CONTACT', '/contact', [
    createMenuItem('FİRMA BİLGİLERİ VE ADRESİ')
  ])
];

export function findMenuItemByPath(path, items = menuData) {
  for (const item of items) {
    if (item.path === path) return item;
    if (item.children) {
      const found = findMenuItemByPath(path, item.children);
      if (found) return found;
    }
  }
  return null;
}

export function getBreadcrumbs(path, items = menuData, breadcrumbs = []) {
  for (const item of items) {
    const currentBreadcrumbs = [...breadcrumbs, item];
    
    if (item.path === path) {
      return currentBreadcrumbs;
    }
    
    if (item.children) {
      const found = getBreadcrumbs(path, item.children, currentBreadcrumbs);
      if (found) return found;
    }
  }
  return null;
}