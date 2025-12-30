"use client";
import { useState } from 'react';
import Image from 'next/image';

const fleets = [
  {
    id: 'cdd',
    name: 'Truk CDD',
    icon: '🚚',
    image: '/images/CDD.png',
    specs: {
      kapasitas: '± 4 – 6 Ton',
      dimensi: 'Panjang ± 420–450 cm, Lebar ± 200–210 cm, Tinggi ± 200 cm',
      roda: '4 roda',
      mesin: 'Diesel 4 silinder, 2.500 – 5.200 cc',
      transmisi: 'Manual 6 percepatan',
      konsumsi: '± 7–9 km/liter',
      kegunaan: 'Distribusi barang menengah, material bangunan, logistik antar kota'
    }
  },
  {
    id: 'cddlong',
    name: 'Truk CDD Long',
    icon: '🚛',
    image: '/images/CDD LONG.png',
    specs: {
      kapasitas: '± 5 – 8 Ton',
      dimensi: 'Panjang ± 560–600 cm, Lebar ± 210–220 cm, Tinggi ± 220 cm',
      roda: '6 roda',
      mesin: 'Diesel 4 silinder, 4.000 – 7.000 cc',
      transmisi: 'Manual 6 percepatan',
      konsumsi: '± 6–8 km/liter',
      kegunaan: 'Barang volume besar, logistik pabrik'
    }
  },
  {
    id: 'dumptruck',
    name: 'Dump Truck',
    icon: '🚚',
    image: '/images/DUMPTRUCK.png',
    specs: {
      kapasitas: '± 8 – 12 Ton',
      dimensi: 'Panjang ± 500–600 cm, Lebar ± 220–230 cm, Tinggi ± 220 cm',
      roda: '6 roda',
      mesin: 'Diesel 6 silinder, 6.000 – 8.000 cc',
      transmisi: 'Manual 6 percepatan',
      konsumsi: '± 4–6 km/liter',
      kegunaan: 'Material berat (pasir, batu, tanah)'
    }
  },
  {
    id: 'wingbox',
    name: 'Truk Wingbox',
    icon: '📦',
    image: '/images/WINGBOX.png',
    specs: {
      kapasitas: '± 10 – 20 Ton',
      dimensi: 'Panjang ± 720–800 cm, Lebar ± 240–250 cm, Tinggi ± 240–250 cm',
      roda: '10 roda',
      mesin: 'Diesel 6 silinder, 7.000 – 10.000 cc',
      transmisi: 'Manual/Automatic 6 percepatan',
      konsumsi: '± 3–5 km/liter',
      kegunaan: 'Barang besar, logistik antar pulau, ekspor/impor'
    }
  },
];

export default function FleetSection() {
  const [selectedTruck, setSelectedTruck] = useState<typeof fleets[0] | null>(null);

  return (
    <section id="armada" className="py-16 bg-hg-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-hg-dark">Armada Kami</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {fleets.map((truck) => (
            <div key={truck.id} className="card-hover bg-white p-6 rounded-xl shadow-lg flex flex-col">
              <div className="relative w-full h-48 mb-4">
                <Image src={truck.image} alt={truck.name} fill className="object-cover rounded-md" />
              </div>
              <h3 className="text-xl font-semibold text-hg-dark mb-4">{truck.name}</h3>
              <div className="mt-auto flex flex-col gap-3">
                <button 
                  onClick={() => setSelectedTruck(truck)}
                  className="bg-hg-blue hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md font-medium transition"
                >
                  Lihat Spesifikasi
                </button>
                <a 
                  href={`https://wa.me/6282124195359?text=Halo%20Admin,%20saya%20ingin%20menanyakan%20spesifikasi%20dan%20harga%20sewa%20${encodeURIComponent(truck.name)}`}
                  target="_blank"
                  className="bg-hg-red hover:bg-red-700 text-white py-2 px-4 rounded-lg shadow-md font-medium transition flex items-center justify-center gap-2"
                >
                  <i className="fab fa-whatsapp"></i> Chat via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Sama persis dengan fitur HTML lama */}
      {selectedTruck && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-60 flex justify-center items-center z-[100] p-4" onClick={() => setSelectedTruck(null)}>
          <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-2xl relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedTruck(null)} className="absolute top-4 right-4 text-gray-400 hover:text-hg-red text-2xl">✖</button>
            <h2 className="text-2xl font-bold mb-6 text-hg-dark">{selectedTruck.icon} {selectedTruck.name}</h2>
            <div className="space-y-3 text-left text-gray-700 border-t pt-4">
              <p><strong>Kapasitas Muatan:</strong> {selectedTruck.specs.kapasitas}</p>
              <p><strong>Dimensi Bak:</strong> {selectedTruck.specs.dimensi}</p>
              <p><strong>Jumlah Roda:</strong> {selectedTruck.specs.roda}</p>
              <p><strong>Mesin:</strong> {selectedTruck.specs.mesin}</p>
              <p><strong>Transmisi:</strong> {selectedTruck.specs.transmisi}</p>
              <p><strong>Konsumsi BBM:</strong> {selectedTruck.specs.konsumsi}</p>
              <p><strong>Kegunaan:</strong> {selectedTruck.specs.kegunaan}</p>
            </div>
            <div className="mt-8 flex justify-end">
              <button onClick={() => setSelectedTruck(null)} className="bg-hg-blue hover:bg-blue-700 text-white py-2 px-8 rounded-lg shadow-md font-medium transition">
                Kembali
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}