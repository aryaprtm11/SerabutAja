'use client'

import { useState } from 'react'
import { MagnifyingGlassIcon, MapPinIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

const categories = [
  { id: 'all', name: 'Semua Kategori' },
  { id: 'perbaikan-rumah', name: 'Perbaikan Rumah' },
  { id: 'renovasi', name: 'Renovasi' },
  { id: 'taman-lansekap', name: 'Taman & Lansekap' },
  { id: 'instalasi', name: 'Instalasi' },
]

export default function SearchForm() {
  const [category, setCategory] = useState('all')
  const [location, setLocation] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement search logic
    console.log({ category, location })
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        {/* Main search bar */}
        <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg ring-1 ring-gray-900/5">
          {/* Category dropdown */}
          <div className="flex-1 min-w-[200px]">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-transparent border-0 ring-0 focus:ring-0 text-gray-900 rounded-lg"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Location input */}
          <div className="flex-1 relative">
            <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Masukkan lokasi Anda"
              className="w-full pl-10 bg-transparent border-0 ring-0 focus:ring-0 text-gray-900 rounded-lg"
            />
          </div>

          {/* Search button */}
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
            <span>Cari</span>
          </button>

          {/* Filter button */}
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="p-2 text-gray-500 hover:text-primary transition-colors duration-300"
          >
            <AdjustmentsHorizontalIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Advanced filters */}
        {showFilters && (
          <div className="absolute top-full left-0 right-0 mt-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg ring-1 ring-gray-900/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Rating filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating Minimum
                </label>
                <select className="w-full bg-transparent border border-gray-300 rounded-lg p-2">
                  <option value="">Semua Rating</option>
                  <option value="4">4+ Bintang</option>
                  <option value="3">3+ Bintang</option>
                  <option value="2">2+ Bintang</option>
                </select>
              </div>

              {/* Experience filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pengalaman
                </label>
                <select className="w-full bg-transparent border border-gray-300 rounded-lg p-2">
                  <option value="">Semua Level</option>
                  <option value="5">5+ Tahun</option>
                  <option value="3">3+ Tahun</option>
                  <option value="1">1+ Tahun</option>
                </select>
              </div>

              {/* Price range filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rentang Harga
                </label>
                <select className="w-full bg-transparent border border-gray-300 rounded-lg p-2">
                  <option value="">Semua Harga</option>
                  <option value="low">{'< Rp 200.000'}</option>
                  <option value="mid">Rp 200.000 - Rp 500.000</option>
                  <option value="high">{'> Rp 500.000'}</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  )
} 