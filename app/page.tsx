"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FleetSection from "@/components/FleetSection";
import { useState, useEffect } from "react";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'; 

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Hook untuk mendeteksi scroll pada bagian Counter agar animasi angka berjalan
  const { ref: counterRef, inView: counterInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Animasi mulai saat 20% bagian terlihat
  });

  const callEmergency = () => {
    const phoneNumber = "6282124195359";
    const message = "*URGENT:* Saya butuh bantuan pengiriman segera!";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.open(`tel:${phoneNumber}`, "_self");
    } else {
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const openWhatsApp = () => {
    const message = "Halo HGS, saya ingin bertanya tentang layanan transportasi dan trucking.";
    window.open(`https://wa.me/6282124195359?text=${encodeURIComponent(message)}`, '_blank');
  };

  const sendEmail = () => {
    const email = "hemaglorisejahtera@gmail.com";
    const subject = "Pertanyaan tentang Layanan HGS";
    const body = `Halo Tim HGS,\n\nSaya tertarik dengan layanan transportasi dan trucking yang Anda tawarkan.\nBisakah Anda memberikan informasi lebih lanjut?\n\nTerima kasih.`;
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const msg = formData.get('message');
    
    const waMessage = `*Pesan dari Website HGS*\nNama: ${name}\nTelepon: ${phone}\nPesan: ${msg}`;
    window.open(`https://wa.me/6282124195359?text=${encodeURIComponent(waMessage)}`, '_blank');
  };

  return (
    <main className="min-h-screen flex flex-col font-poppins">
      <Navbar />

      {/* HERO SECTION - Diperbaiki agar tidak terlalu tinggi di mobile */}
      <section id="beranda" className="hero-bg text-white flex items-center relative overflow-hidden min-h-[60vh] md:min-h-[70vh]">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
          <div className="w-64 h-64 rounded-full bg-hg-red opacity-10 filter blur-3xl"></div>
          <div className="w-96 h-96 rounded-full bg-hg-blue opacity-10 filter blur-3xl ml-64"></div>
        </div>
        <div className="container mx-auto text-center px-4 py-12 md:py-20 relative z-10">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/20 transform transition-all duration-500 hover:scale-105">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              <span className="text-hg-red italic">Solution</span> 
              <span className="text-hg-blue"> Transportation</span> and Trucking
            </h1>
            <p className="text-lg md:text-2xl mb-8">Semoga Kami Dapat Menjadi Mitra Perjalanan Pengiriman Anda</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={openWhatsApp} className="bg-hg-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg flex items-center justify-center gap-2 transition">
                <i className="fab fa-whatsapp"></i> Pesan Sekarang
              </button>
              <button onClick={() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })} className="bg-hg-blue hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg flex items-center justify-center gap-2 transition">
                <i className="fas fa-phone-alt"></i> Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN SECTION */}
      <section id="layanan" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-hg-dark">Layanan Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Sebagai spesialis angkutan truk ekspedisi, kami menawarkan solusi logistik profesional untuk bisnis Anda</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 card-hover text-center">
              <div className="text-hg-red text-5xl mb-6"><i className="fas fa-truck"></i></div>
              <h3 className="text-xl font-bold mb-4 text-hg-dark">Angkutan Barang</h3>
              <p className="text-gray-600 mb-6">Layanan pengiriman barang dengan armada terbaik dan terawat</p>
              <button onClick={openWhatsApp} className="w-full bg-hg-red hover:bg-red-700 text-white font-medium py-2 rounded-lg transition">Info Lebih Lanjut</button>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 card-hover text-center">
              <div className="text-hg-blue text-5xl mb-6"><i className="fas fa-boxes"></i></div>
              <h3 className="text-xl font-bold mb-4 text-hg-dark">Logistik Terpadu</h3>
              <p className="text-gray-600 mb-6">Manajemen logistik terintegrasi dari gudang ke tujuan</p>
              <button onClick={openWhatsApp} className="w-full bg-hg-blue hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition">Info Lebih Lanjut</button>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 card-hover text-center">
              <div className="text-hg-red text-5xl mb-6"><i className="fas fa-headset"></i></div>
              <h3 className="text-xl font-bold mb-4 text-hg-dark">Dukungan 24/7</h3>
              <p className="text-gray-600 mb-6">Tim profesional siap membantu Anda kapan saja</p>
              <button onClick={() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-hg-red hover:bg-red-700 text-white font-medium py-2 rounded-lg transition">Hubungi Kami</button>
            </div>
          </div>
        </div>
      </section>

      {/* TENTANG KAMI - Diperbaiki Jarak Kosong di Mobile */}
      <section id="tentang" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl animate-float h-[250px] md:h-[350px] lg:h-[400px] w-full">
                <Image src="/images/Truk3.png" alt="Truk HGS" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">HGS</h3>
                  <p className="text-lg">Solution Transportation and Trucking</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-hg-dark">Tentang Kami</h2>
              <div className="space-y-4 md:space-y-6 text-gray-700">
                <p className="text-base md:text-lg leading-relaxed">
                  <span className="font-bold text-hg-red">PT. HEMA GLORI SEJAHTERA</span> merupakan perusahaan yang bergerak melayani Jasa Pengiriman atau Pengangkutan dan Rental Kendaraan yang berlokasi di Cikarang dan telah memiliki perijinan transportasi pengiriman barang yang sah.
                </p>
                <p className="text-sm md:text-base leading-relaxed">Dengan armada modern dan tim profesional, kami menyediakan solusi lengkap untuk kebutuhan transportasi darat.</p>
                
                {/* Bagian Counter dengan Animasi Angka Berjalan */}
                <div ref={counterRef} className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 md:p-6 rounded-lg shadow text-center card-hover border border-gray-100">
                    <div className="text-hg-red text-3xl md:text-4xl font-bold mb-1 md:mb-2">
                      {counterInView ? <CountUp end={10} duration={3} /> : "0"}+
                    </div>
                    <p className="text-xs md:text-sm font-medium">Armada Truk</p>
                    <p className="text-[10px] md:text-xs text-gray-500 mt-1">Terawat dan Modern</p>
                  </div>
                  <div className="bg-white p-4 md:p-6 rounded-lg shadow text-center card-hover border border-gray-100">
                    <div className="text-hg-blue text-3xl md:text-4xl font-bold mb-1 md:mb-2">
                      {counterInView ? <CountUp end={24} duration={3} /> : "0"}/7
                    </div>
                    <p className="text-xs md:text-sm font-medium">Layanan</p>
                    <p className="text-[10px] md:text-xs text-gray-500 mt-1">Siap Membantu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FleetSection />

      {/* KONTAK SECTION */}
      <section id="kontak" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-hg-dark">Hubungi Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Silakan hubungi kami untuk informasi lebih lanjut</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                  <input type="text" name="name" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-hg-blue outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
                  <input type="tel" name="phone" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-hg-blue outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                  <textarea name="message" rows={4} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-hg-blue outline-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-hg-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition">
                  Kirim Pesan via WhatsApp
                </button>
              </form>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-md space-y-6">
              <h3 className="text-xl font-bold mb-6 text-hg-dark">Informasi Kontak</h3>
              <div className="flex items-start">
                <div className="text-hg-red text-xl mr-4 mt-1"><i className="fas fa-map-marker-alt"></i></div>
                <div>
                  <h4 className="font-bold text-gray-800">Alamat Kantor</h4>
                  <p className="text-gray-600 text-sm">Ruko The Hive@Uptown Avenue No.0007, Lippo Cikarang Bekasi, Jawa Barat</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-hg-blue text-xl mr-4 mt-1"><i className="fas fa-phone-alt"></i></div>
                <div>
                  <h4 className="font-bold text-gray-800">Telepon/WhatsApp</h4>
                  <p className="text-gray-600 text-sm">6282124195359</p>
                  <button onClick={openWhatsApp} className="mt-2 bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded text-xs flex items-center gap-1">
                    <i className="fab fa-whatsapp"></i> Chat Sekarang
                  </button>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-hg-red text-xl mr-4 mt-1"><i className="fas fa-envelope"></i></div>
                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <p className="text-gray-600 text-sm">hemaglorisejahtera@gmail.com</p>
                  <button onClick={sendEmail} className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-xs flex items-center gap-1">
                    <i className="fas fa-paper-plane"></i> Kirim Email
                  </button>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-hg-blue text-xl mr-4 mt-1"><i className="fas fa-clock"></i></div>
                <div>
                  <h4 className="font-bold text-gray-800">Jam Operasional</h4>
                  <p className="text-gray-600 text-sm">Senin - Jumat: 08.00 - 17.00 WIB<br/>Sabtu: 08.00 - 15.00 WIB<br/>Minggu: Tutup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-hg-dark text-white pt-12 pb-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image src="/images/Logo.png" alt="HGS Logo" width={80} height={80} className="mb-4 h-16 w-auto object-contain" />
              <p className="text-gray-400">Solution Transportation and Trucking</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Perusahaan</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li><a href="#beranda" className="hover:text-white">Beranda</a></li>
                <li><a href="#layanan" className="hover:text-white">Layanan</a></li>
                <li><a href="#tentang" className="hover:text-white">Tentang Kami</a></li>
                <li><a href="#kontak" className="hover:text-white">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Layanan</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>Angkutan Barang</li>
                <li>Logistik Terpadu</li>
                <li>Dukungan 24/7</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li><i className="fas fa-phone-alt mr-2"></i> 0821-2419-5359</li>
                <li><i className="fas fa-envelope mr-2"></i> hemaglorisejahtera@gmail.com</li>
                <li><i className="fas fa-map-marker-alt mr-2"></i> Lippo Cikarang</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
            <p>&copy; 2025 PT. HEMA GLORI SEJAHTERA. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* TOMBOL FLOATING (Urgent & Back to Top) */}
      <div className="fixed bottom-24 right-8 z-[60] flex flex-col items-end gap-3 group">
        <span className="bg-red-600 text-white px-3 py-1 rounded shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Respon Cepat (WA/Telp)
        </span>
        <button 
          onClick={callEmergency}
          className="bg-yellow-500 hover:bg-yellow-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 relative"
          aria-label="Urgent Delivery"
        >
          <i className="fas fa-phone-alt text-xl"></i>
          <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75 animate-ping -z-10"></span>
        </button>
      </div>

      {showBackToTop && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-hg-red hover:bg-red-700 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all z-50">
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </main>
  );
}