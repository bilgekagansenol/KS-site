# ABI Site - Endüstriyel Çözümler Şirketi Websitesi

## Proje Genel Bakış
Bu proje, çok sektörlü endüstriyel çözümler sunan bir şirketin kurumsal web sitesidir. React, Vite ve Tailwind CSS kullanılarak geliştirilmiştir.

## Güncel Durum
- ✅ Proje kurulumu tamamlandı
- ✅ React + Vite konfigürasyonu hazır
- ✅ Tailwind CSS entegrasyonu yapıldı
- ✅ Temel bileşen yapısı oluşturuldu
- ✅ Tüm sayfalar placeholder içerikle dolduruldu
- ✅ Navigasyon sistemi çalışır durumda
- ✅ Responsive tasarım implementasyonu

## Şirket Sektörleri ve Hizmetleri

### Ana Sektörler:
1. **Ağır Sanayi Hizmetleri (ALBERK)**
   - Çimento, gübre, madencilik sektörleri
   - Bulk malzeme taşıma sistemleri
   - Öğütme ve proses ekipmanları
   - Beton çözümleri
   - Atık ısı geri kazanım ve yeşil çözümler

2. **Denizcilik Hizmetleri (Planet Boat)**
   - Tekne tasarımı ve üretimi
   - Denizcilik ekipmanları
   - Polietilen çözümler

3. **Demiryolu Sistemleri**
   - Elektrik çekiş motorları
   - Kontrol sistemleri
   - Demiryolu bileşenleri

4. **Otomotiv Sistemleri**
   - İç/dış aksam parçaları
   - Elektronik sistemler
   - Bağlantı donanımları

5. **Elektrik-Elektronik ve Otomasyon**
   - Elektronik ekipmanlar
   - Otomasyon sistemleri
   - Sistem entegrasyonu

6. **Otel ve Endüstriyel Mutfak Ekipmanları**
   - Soğutma sistemleri
   - Mutfak ekipmanları
   - Restoran çözümleri

7. **HVAC Çözümleri**
   - Ticari araç klimaları
   - Endüstriyel çözümler
   - Enerji verimliliği

8. **Araç Satış - CKD**
   - Ticari araçlar
   - Zırhlı araçlar
   - Özel amaçlı araçlar

9. **Ağır Vasıta Yedek Parça**
   - Avrupa markaları
   - Türk markaları
   - Orijinal ekipman

10. **Tarım Ekipmanları ve Gıda Üretim**
    - Çiftlik ekipmanları
    - Gıda üretim çözümleri

## Dosya Yapısı
```
/
├── src/
│   ├── App.jsx - Ana uygulama bileşeni
│   ├── main.jsx - Giriş noktası
│   ├── index.css - Global stiller
│   ├── components/ - Ortak bileşenler
│   │   ├── Breadcrumbs.jsx - Sayfa navigasyon izi
│   │   ├── Footer.jsx - Alt bilgi
│   │   ├── MobileMenu.jsx - Mobil menü
│   │   ├── NavBar.jsx - Ana navigasyon
│   │   └── NavItem.jsx - Menü öğesi
│   ├── navigation/
│   │   └── menuData.js - Menü yapılandırması
│   └── pages/ - Sayfa bileşenleri
│       ├── HomePage.jsx - Ana sayfa
│       ├── Contact/index.jsx - İletişim sayfası
│       ├── SectorSolutions/ - Sektör çözümleri
│       │   ├── index.jsx - Ana sektör sayfası
│       │   └── AgirSanayiHizmetleriAlberk/index.jsx - ALBERK detay
│       └── WhoWeAre/ - Kurumsal
│           ├── index.jsx - Hakkımızda ana sayfa
│           └── OurPromise.jsx - Vaatlerimiz
├── package.json - Bağımlılıklar ve scriptler
├── vite.config.js - Vite konfigürasyonu
├── tailwind.config.js - Tailwind CSS ayarları
├── postcss.config.js - PostCSS konfigürasyonu
└── index.html - Ana HTML şablonu
```

## Teknik Stack
- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Custom CSS
- **Routing**: React Router DOM
- **SEO**: React Helmet Async
- **Package Manager**: npm

## Sayfalar ve İçerik Durumu

### ✅ Tamamlanan Sayfalar:
- **HomePage** - Hero section, sektör kartları, istatistikler, özellikler
- **Contact** - İletişim bilgileri, form, harita placeholder'ı
- **SectorSolutions** - 10 sektör kartı, açıklamalar, navigasyon
- **AgirSanayiHizmetleriAlberk** - ALBERK detayları, alt sektörler, ürün grupları
- **WhoWeAre** - Şirket tanıtımı, değerler, hikaye bölümü
- **OurPromise** - Vaatler, kalite güvencesi, müşteri taahhütleri

### 🔧 Geliştirme Komutları:
```bash
npm run dev      # Geliştirme sunucusu (http://localhost:5173)
npm run build    # Üretim build'i
npm run preview  # Build önizleme
```

## Önemli Notlar
- Türkçe ve İngilizce karışık içerik (şirket isimlerinde Türkçe)
- Responsive tasarım tüm sayfalarda uygulandı
- Placeholder içerikler gerçek içerikle değiştirilmeye hazır
- SEO meta tagları her sayfada mevcut
- Modern CSS Grid ve Flexbox kullanımı
- Tailwind utility-first yaklaşımı

## Gelecek Geliştirmeler
- Gerçek içerik eklenmesi
- Resim varlıklarının eklenmesi  
- Form işlevselliği
- Harita entegrasyonu
- Çoklu dil desteği
- Blog sistemi
- Proje galerisi
- İletişim form backend entegrasyonu

## Şirket Hakkında
ABI - Çok sektörlü endüstriyel çözümler şirketi, ağır sanayiden otomotive, denizcilikten tarıma kadar geniş bir yelpazede hizmet veren global ortaklıklara sahip bir kuruluş.