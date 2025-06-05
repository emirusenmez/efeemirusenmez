// Experience data
const experienceData = {
    "demiroren-medya": {
        company: "Demirören Medya",
        position: "Yazılım Geliştirici",
        period: "2024 - Günümüz",
        location: "İstanbul, Türkiye",
        description: "Yazılım geliştirme ve e-ticaret alanında çalışarak yenilikçi çözümler üretmekteyim.",
        responsibilities: [
            "Web uygulamaları geliştirme ve bakımı",
            "E-ticaret platformlarının yönetimi ve optimizasyonu",
            "Kullanıcı deneyimini iyileştirmeye yönelik çözümler üretme",
            "Teknik ekip ile koordineli çalışarak projelerin zamanında teslimi",
            "Yeni teknolojilerin araştırılması ve uygulanması"
        ],
        achievements: [
            "Şirket web sitesinin yeniden tasarlanması ve kullanıcı deneyiminin iyileştirilmesi",
            "E-ticaret platformunun optimizasyonu ile satış oranlarında %15 artış sağlanması",
            "Mobil uyumluluk geliştirmeleri ile mobil kullanıcı trafiğinde %25 artış"
        ],
        technologies: ["React", "TypeScript", "Node.js", "MongoDB", "AWS", "Docker"]
    },
    "themax-media": {
        company: "The Max Media",
        position: "Web Geliştirici",
        period: "2021 - 2024",
        location: "İstanbul, Türkiye",
        description: "Yazılım geliştirme projelerine katkıda bulundum, çeşitli web sitelerinin kurulumu ve e-ticaret yönetimi süreçlerinde aktif rol aldım.",
        responsibilities: [
            "Müşteri web sitelerinin tasarımı ve geliştirilmesi",
            "E-ticaret platformlarının kurulumu ve özelleştirilmesi",
            "SEO optimizasyonu ve web performans iyileştirmeleri",
            "Müşteri teknik destek hizmetleri",
            "İçerik yönetim sistemlerinin entegrasyonu ve özelleştirilmesi"
        ],
        achievements: [
            "10'dan fazla kurumsal web sitesi projesi başarıyla tamamlandı",
            "E-ticaret platformlarında yapılan optimizasyonlar ile müşterilerin dönüşüm oranlarında ortalama %20 artış",
            "Geliştirilen SEO stratejileri ile müşteri web sitelerinin organik trafik oranlarında artış",
            "Şirket içi eğitimler düzenleyerek ekip üyelerinin teknik becerilerinin geliştirilmesine katkı"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "WooCommerce", "MySQL", "Bootstrap"]
    },
    "hesaplama-araclari": {
        company: "Hürriyet",
        position: "Geliştirici",
        period: "2024",
        location: "Türkiye",
        description: "Hürriyet , milliyet , cnn türk için geliştirdiğim hesaplama araçları, kullanıcıların finans, sağlık, eğitim ve diğer alanlarda hızlı ve doğru hesaplamalar yapmalarını sağlar. Bu araçlar, kullanıcı dostu arayüzleri ve güncel verilerle desteklenen algoritmaları sayesinde, kullanıcıların ihtiyaçlarına yönelik pratik çözümler sunar.",
        responsibilities: [
            { name: "MTV Hesaplama - Finans", url: "https://www.hurriyet.com.tr/hesaplama-araclari/finans/mtv-hesaplama" },
            { name: "İdeal Kilo Hesaplama - Sağlık", url: "https://www.hurriyet.com.tr/hesaplama-araclari/saglik/ideal-kilo-hesaplama" },
            { name: "Yakıt Tüketimi Hesaplama - Diğer", url: "https://www.hurriyet.com.tr/hesaplama-araclari/diger/yakit-tuketimi-hesaplama" },
            { name: "Zekat Hesaplama - Diğer", url: "https://www.hurriyet.com.tr/hesaplama-araclari/diger/zekat-hesaplama" },
            { name: "İki Tarih Arası Hesaplama - Zaman", url: "https://www.hurriyet.com.tr/hesaplama-araclari/zaman/iki-tarih-arasi-hesaplama" },
            { name: "Vize Final Hesaplama - Eğitim", url: "https://www.hurriyet.com.tr/hesaplama-araclari/egitim/vize-final-hesaplama" },
            { name: "Yüzde Hesaplama - Finans", url: "https://www.hurriyet.com.tr/hesaplama-araclari/finans/yuzde-hesaplama" },
            { name: "OBP Hesaplama - Eğitim", url: "https://www.hurriyet.com.tr/hesaplama-araclari/egitim/obp-hesaplama" },
            { name: "KDV Hesaplama - Finans", url: "https://www.hurriyet.com.tr/hesaplama-araclari/finans/kdv-hesaplama" },
            { name: "İndirim Oranı Hesaplama - Finans", url: "https://www.hurriyet.com.tr/hesaplama-araclari/finans/indirim-orani-hesaplama" },
            { name: "Zam Hesaplama - Finans", url: "https://www.hurriyet.com.tr/hesaplama-araclari/finans/zam-hesaplama" },
            { name: "Kredi Hesaplama - Finans", url: "https://www.hurriyet.com.tr/hesaplama-araclari/finans/kredi-hesaplama" },
            { name: "LGS Puan Hesaplama - Eğitim", url: "https://www.hurriyet.com.tr/hesaplama-araclari/egitim/lgs-puan-hesaplama" },
            { name: "Ales Puan Hesaplama - Eğitim", url: "https://www.hurriyet.com.tr/hesaplama-araclari/egitim/ales-puan-hesaplama" },
            { name: "Yaş Hesaplama - Zaman", url: "https://www.hurriyet.com.tr/hesaplama-araclari/zaman/yas-hesaplama" },
            { name: "Burç Hesaplama - Zaman", url: "https://www.hurriyet.com.tr/hesaplama-araclari/zaman/burc-hesaplama" },
            { name: "Vücut Kitle İndeksi Hesaplama - Sağlık", url: "https://www.hurriyet.com.tr/hesaplama-araclari/saglik/vucut-kitle-indeksi-hesaplama" },
            { name: "Günlük Kalori Hesaplama - Sağlık", url: "https://www.hurriyet.com.tr/hesaplama-araclari/saglik/gunluk-kalori-hesaplama" },
            { name: "Gebelik Hesaplama - Sağlık", url: "https://www.hurriyet.com.tr/hesaplama-araclari/saglik/gebelik-hesaplama" },
            { name: "Metrekare Hesaplama - Diğer", url: "https://www.hurriyet.com.tr/hesaplama-araclari/diger/metrekare-hesaplama" },
            { name: "Desi Hesaplama - Diğer", url: "https://www.hurriyet.com.tr/hesaplama-araclari/diger/desi-hesaplama" }
        ],
        achievements: [
            "Kullanıcıların finans, sağlık, eğitim ve diğer alanlarda hızlı ve doğru hesaplamalar yapmalarını sağlamak"
        ],
        technologies: ["JavaScript", "HTML", "CSS"],
        links: [
            { name: "Hürriyet Hesaplama Araçları", url: "https://www.hurriyet.com.tr/hesaplama-araclari/" },
            { name: "Milliyet Hesaplama Araçları", url: "https://www.milliyet.com.tr/hesaplama-araclari/" },
            { name: "CNN Türk Hesaplama Araçları", url: "https://www.cnnturk.com/hesaplama-araclari/" }
        ]
    },
    "deliziya": {
        "company": "Deliziya Gıda Mamülleri",
        "position": "Yazılım ve E-ticaret Uzmanı",
        "period": "2022",
        "location": "İstanbul, Türkiye",
        "description": "Deliziya Gıda Mamülleri için geliştirilen e-ticaret platformu (deliziya.com.tr), kullanıcıların yüksek kaliteli sofra hardalları, Uzak Doğu ürünleri, sushi malzemeleri ve diğer gıda ürünlerine kolayca erişmesini sağlar. SEO odaklı içerik stratejileri ve site hızı optimizasyonları sayesinde, platform hem kullanıcı deneyimini hem de arama motoru sıralamalarını önemli ölçüde iyileştirmiştir. Modern web teknolojileri kullanılarak geliştirilen site, ürünlerin tanıtımını etkili bir şekilde yaparken, kullanıcı dostu arayüzü ile müşteri memnuniyetini artırmaktadır.",
        "technologies": ["HTML", "CSS", "JavaScript", "SEO Tools", "WordPress", "Google Analytics"],
        "links": [
            { "name": "Deliziya Ana Sayfası", "url": "https://deliziya.com.tr/" },
            { "name": "Hardal ve Çeşniler", "url": "https://deliziya.com.tr/hardal-ve-cesniler" },
            { "name": "Uzak Doğu Ürünleri", "url": "https://deliziya.com.tr/uzak-dogu-urunleri" },
            { "name": "Sushi Malzemeleri", "url": "https://deliziya.com.tr/sushi-malzemeleri" }
        ]
    },
    "temax-xps": {
        "company": "Temax XPS (Krautz-Temax Group)",
        "position": "Yazılım ve E-ticaret Uzmanı",
        "period": "2021/08 - 2024/10",
        "location": "İstanbul, Türkiye",
        "description": "Temax XPS (temax-xps.com), Krautz-Temax Grubu'nun bir parçası olarak, yüksek kapasiteli üretim tesislerinde ISO 9001 standartlarında ekstrüde polistiren (XPS) yalıtım malzemeleri üreten bir markadır. Geliştirilen çok dilli e-ticaret ve tanıtım platformu, global pazarda müşterilere XPS ürünlerini tanıtarak, kullanıcı dostu bir deneyim sunar. SEO odaklı içerik stratejileri ve site hızı optimizasyonları sayesinde, site organik erişimini artırmış ve kullanıcı memnuniyetini yükseltmiştir. Platform, farklı dillerde (İngilizce, Türkçe, Almanca, Fransızca, vb.) erişilebilir olup, XPS ürünlerinin teknik özelliklerini ve çevre dostu üretim süreçlerini vurgular.",
        "responsibilities": [
            { "name": "SEO İçerik Yönetimi", "url": "https://www.temax-xps.com/" },
            { "name": "Ürün Sayfası Optimizasyonu - XPS Paneller", "url": "https://www.temax-xps.com/xps-panel-boards" },
            { "name": "Çok Dilli İçerik Entegrasyonu", "url": "https://www.temax-xps.com/" },
            { "name": "Site Hızı Optimizasyonu", "url": "https://www.temax-xps.com/" },
            { "name": "Kullanıcı Deneyimi İyileştirme", "url": "https://www.temax-xps.com/" }
        ],
        "achievements": [
            "SEO optimizasyonlarıyla organik trafikte %25 artış sağlandı",
            "Site yükleme süresini 1.5 saniyenin altına düşürerek kullanıcı deneyimini iyileştirme",
            "Çok dilli içerik entegrasyonu ile global erişimi artırma",
            "XPS ürün sayfalarının arama motoru sıralamalarını yükselterek marka bilinirliğini güçlendirme",
            "Kullanıcı dostu arayüzlerle müşteri etkileşimini artırma"
        ],
        "technologies": ["HTML", "CSS", "JavaScript", "SEO Tools", "WordPress", "Google Analytics", "Multilingual CMS"],
        "links": [
            { "name": "Temax XPS Ana Sayfası", "url": "https://www.temax-xps.com/" },
            { "name": "XPS Ürün Çeşitleri", "url": "https://www.temax-xps.com/xps-products" },
            { "name": "XPS Panel Levhalar", "url": "https://www.temax-xps.com/xps-panel-boards" },
            { "name": "XPS Hakkında", "url": "https://www.temax-xps.com/about-temax-xps" }
        ]
    },
    "feed": {
        "company": "Temax XPS (Krautz-Temax Group)",
        "position": "Yazılım ve E-ticaret Uzmanı",
        "period": "2021/08 - 2024/10",
        "location": "İstanbul, Türkiye",
        "description": "Temax XPS (temax-xps.com), Krautz-Temax Grubu'nun bir parçası olarak, yüksek kapasiteli üretim tesislerinde ISO 9001 standartlarında ekstrüde polistiren (XPS) yalıtım malzemeleri üreten bir markadır. Geliştirilen çok dilli e-ticaret ve tanıtım platformu, global pazarda müşterilere XPS ürünlerini tanıtarak, kullanıcı dostu bir deneyim sunar. SEO odaklı içerik stratejileri ve site hızı optimizasyonları sayesinde, site organik erişimini artırmış ve kullanıcı memnuniyetini yükseltmiştir. Platform, farklı dillerde (İngilizce, Türkçe, Almanca, Fransızca, vb.) erişilebilir olup, XPS ürünlerinin teknik özelliklerini ve çevre dostu üretim süreçlerini vurgular.",
        "responsibilities": [
            { "name": "SEO İçerik Yönetimi", "url": "https://www.temax-xps.com/" },
            { "name": "Ürün Sayfası Optimizasyonu - XPS Paneller", "url": "https://www.temax-xps.com/xps-panel-boards" },
            { "name": "Çok Dilli İçerik Entegrasyonu", "url": "https://www.temax-xps.com/" },
            { "name": "Site Hızı Optimizasyonu", "url": "https://www.temax-xps.com/" },
            { "name": "Kullanıcı Deneyimi İyileştirme", "url": "https://www.temax-xps.com/" }
        ],
        "achievements": [
            "SEO optimizasyonlarıyla organik trafikte %25 artış sağlandı",
            "Site yükleme süresini 1.5 saniyenin altına düşürerek kullanıcı deneyimini iyileştirme",
            "Çok dilli içerik entegrasyonu ile global erişimi artırma",
            "XPS ürün sayfalarının arama motoru sıralamalarını yükselterek marka bilinirliğini güçlendirme",
            "Kullanıcı dostu arayüzlerle müşteri etkileşimini artırma"
        ],
        "technologies": ["HTML", "CSS", "JavaScript", "SEO Tools", "WordPress", "Google Analytics", "Multilingual CMS"],
        "links": [
            { "name": "Temax XPS Ana Sayfası", "url": "https://www.temax-xps.com/" },
            { "name": "XPS Ürün Çeşitleri", "url": "https://www.temax-xps.com/xps-products" },
            { "name": "XPS Panel Levhalar", "url": "https://www.temax-xps.com/xps-panel-boards" },
            { "name": "XPS Hakkında", "url": "https://www.temax-xps.com/about-temax-xps" }
        ]
    }
};

// DOM Elements
const modal = document.getElementById('experienceModal');
const modalContent = document.getElementById('experienceDetailContent');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');

// Active navigation link
function setActiveNavLink() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Show experience detail modal
function showExperienceDetail(id) {
    const experience = experienceData[id];
    
    if (!experience) return;
    
    let html = `
        <div class="modal-header">
            <h2>${experience.company}</h2>
            <div class="modal-subheader">
                <span class="position">${experience.position}</span>
                <span class="period">${experience.period}</span>
                <span class="location">${experience.location}</span>
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Genel Bakış</h3>
            <p>${experience.description}</p>
        </div>
        
        <div class="modal-section">
            <h3>Sorumluluklar</h3>
            <ul>
                ${experience.responsibilities && experience.responsibilities.length > 0 ? experience.responsibilities.map(item => `<li><a href="${item.url}" target="_blank">${item.name}</a></li>`).join('') : ''}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3>Başarılar</h3>
            <ul>
                ${experience.achievements && experience.achievements.length > 0 ? experience.achievements.map(item => `<li>${item}</li>`).join('') : ''}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3>Kullanılan Teknolojiler</h3>
            <div class="tech-tags">
                ${experience.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;
    
    if (experience.links && experience.links.length > 0) {
        html += `
        <div class="modal-section">
            <h3>İlgili Linkler</h3>
            <ul>
                ${experience.links.map(link => `<li><a href="${link.url}" target="_blank">${link.name}</a></li>`).join('')}
            </ul>
        </div>`;
    }
    
    if (id === 'feed') {
        document.getElementById('feedDetail').classList.add('show');
        return;
    }

    modalContent.innerHTML = html;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close experience detail modal
function closeExperienceModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === modal) {
        closeExperienceModal();
    }
}

// Handle contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real application, you would send the form data to a server
        alert('Mesajınız gönderildi! Teşekkür ederiz.');
        contactForm.reset();
    });
}

// Event listeners
window.addEventListener('scroll', setActiveNavLink);
document.addEventListener('DOMContentLoaded', setActiveNavLink);

// Add CSS for modal content
const style = document.createElement('style');
style.textContent = `
    .modal-header {
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 1rem;
        margin-bottom: 1.5rem;
    }
    
    .modal-header h2 {
        font-size: 1.75rem;
        color: #1e293b;
        margin-bottom: 0.5rem;
    }
    
    .modal-subheader {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        color: #64748b;
    }
    
    .modal-subheader .position {
        color: #2563eb;
        font-weight: 500;
    }
    
    .modal-section {
        margin-bottom: 1.5rem;
    }
    
    .modal-section h3 {
        font-size: 1.25rem;
        color: #1e293b;
        margin-bottom: 0.75rem;
    }
    
    .modal-section ul {
        padding-left: 1.5rem;
    }
    
    .modal-section li {
        margin-bottom: 0.5rem;
    }
    
    .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .tech-tag {
        background-color: #f1f5f9;
        color: #475569;
        padding: 0.25rem 0.75rem;
        border-radius: 0.25rem;
        font-size: 0.875rem;
    }
    
    @media (max-width: 768px) {
        .modal-subheader {
            flex-direction: column;
            gap: 0.25rem;
        }
    }
`;

document.head.appendChild(style);
