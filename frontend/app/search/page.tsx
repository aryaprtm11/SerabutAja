'use client'

import { useState } from 'react'
import SearchForm from '@/components/SearchForm'
import WorkerCard from '@/components/WorkerCard'

// Dummy data untuk contoh
const dummyWorkers = [
  {
    id: '1',
    name: 'Ahmad Sudrajat',
    image: '/images/workers/worker-1.jpg',
    category: 'Perbaikan Rumah',
    location: 'Jakarta Selatan',
    experience: 5,
    rating: 4.8,
    totalReviews: 124,
    price: 250000,
  },
  {
    id: '2',
    name: 'Budi Santoso',
    image: '/images/workers/worker-2.jpg',
    category: 'Renovasi',
    location: 'Jakarta Timur',
    experience: 3,
    rating: 4.5,
    totalReviews: 89,
    price: 300000,
  },
  {
    id: '3',
    name: 'Citra Dewi',
    image: '/images/workers/worker-3.jpg',
    category: 'Taman & Lansekap',
    location: 'Jakarta Utara',
    experience: 4,
    rating: 4.7,
    totalReviews: 156,
    price: 275000,
  },
]

export default function SearchPage() {
  const [workers] = useState(dummyWorkers)

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Search section */}
      <section className="relative py-12 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(#ee312410_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Temukan Tukang Terbaik
            </h1>
            <p className="text-lg text-gray-600">
              Pilih dari ratusan tukang profesional sesuai kebutuhan Anda
            </p>
          </div>
          <SearchForm />
        </div>
      </section>

      {/* Results section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Results header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              {workers.length} Tukang Ditemukan
            </h2>
            <div className="flex items-center gap-4">
              <label className="text-sm text-gray-600">Urutkan:</label>
              <select className="bg-white rounded-lg border border-gray-300 px-4 py-2 text-sm">
                <option value="rating">Rating Tertinggi</option>
                <option value="price-low">Harga Terendah</option>
                <option value="price-high">Harga Tertinggi</option>
                <option value="experience">Pengalaman</option>
              </select>
            </div>
          </div>

          {/* Results grid */}
          <div className="space-y-6">
            {workers.map((worker) => (
              <WorkerCard key={worker.id} {...worker} />
            ))}
          </div>

          {/* Empty state */}
          {workers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                Tidak ada tukang yang ditemukan. Coba ubah filter pencarian Anda.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
} 