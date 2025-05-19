'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  CalendarDaysIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftIcon,
  PhoneIcon,
  CheckCircleIcon,
  XCircleIcon,
  StarIcon,
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

// Dummy data untuk contoh
const bookingData = {
  id: 'B001',
  worker: {
    id: '1',
    name: 'Ahmad Sudrajat',
    image: '/images/workers/worker-1.jpg',
    category: 'Perbaikan Rumah',
    phone: '+62812-3456-7890',
  },
  date: '2024-03-01',
  time: '09:00',
  duration: 2,
  address: 'Jl. Contoh No. 123, Jakarta Selatan',
  description: 'Perbaikan atap yang bocor dan pengecatan ulang plafon yang rusak',
  status: 'confirmed',
  price: 500000,
  timeline: [
    {
      date: '2024-02-25 14:30',
      status: 'created',
      description: 'Booking dibuat',
    },
    {
      date: '2024-02-25 15:45',
      status: 'confirmed',
      description: 'Booking dikonfirmasi oleh tukang',
    },
  ],
}

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-green-100 text-green-800',
  completed: 'bg-blue-100 text-blue-800',
  cancelled: 'bg-red-100 text-red-800',
}

const statusLabels = {
  pending: 'Menunggu Konfirmasi',
  confirmed: 'Dikonfirmasi',
  completed: 'Selesai',
  cancelled: 'Dibatalkan',
}

export default function BookingDetailPage({ params }: { params: { id: string } }) {
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto py-12 px-6">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/bookings"
            className="inline-flex items-center text-sm text-gray-600 hover:text-primary mb-6"
          >
            <svg
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Kembali ke Daftar Booking
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Detail Booking #{params.id}
          </h1>
          <div className="flex items-center">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                statusColors[bookingData.status as keyof typeof statusColors]
              }`}
            >
              {statusLabels[bookingData.status as keyof typeof statusLabels]}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Worker info */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="relative w-20 h-20">
                <Image
                  src={bookingData.worker.image}
                  alt={bookingData.worker.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900">
                  <Link
                    href={`/worker/${bookingData.worker.id}`}
                    className="hover:text-primary"
                  >
                    {bookingData.worker.name}
                  </Link>
                </h2>
                <p className="text-gray-600">{bookingData.worker.category}</p>
              </div>
              <div className="flex space-x-3">
                <a
                  href={`tel:${bookingData.worker.phone}`}
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Telepon
                </a>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                  <ChatBubbleLeftIcon className="h-5 w-5 mr-2" />
                  Chat
                </button>
              </div>
            </div>
          </div>

          {/* Booking details */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Detail Booking</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <CalendarDaysIcon className="h-5 w-5 mr-3" />
                  <span>
                    {new Date(bookingData.date).toLocaleDateString('id-ID', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <ClockIcon className="h-5 w-5 mr-3" />
                  <span>
                    {bookingData.time} WIB ({bookingData.duration} hari)
                  </span>
                </div>
                <div className="flex items-start text-gray-600">
                  <MapPinIcon className="h-5 w-5 mr-3 mt-1" />
                  <span>{bookingData.address}</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-medium text-gray-900 mb-2">
                  Deskripsi Pekerjaan:
                </h3>
                <p className="text-gray-600">{bookingData.description}</p>
              </div>

              <div className="mt-6">
                <h3 className="font-medium text-gray-900 mb-2">Total Biaya:</h3>
                <p className="text-3xl font-bold text-primary">
                  Rp {bookingData.price.toLocaleString('id-ID')}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-4">Status Booking</h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute top-0 left-4 h-full w-0.5 bg-gray-200"></div>

                {/* Timeline items */}
                <div className="space-y-6">
                  {bookingData.timeline.map((item, index) => (
                    <div key={index} className="relative flex items-start">
                      <div className="absolute left-0 mt-1">
                        <div className="h-8 w-8 rounded-full border-2 border-primary bg-white flex items-center justify-center">
                          <CheckCircleIcon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div className="ml-12">
                        <p className="text-sm text-gray-600">
                          {new Date(item.date).toLocaleString('id-ID')}
                        </p>
                        <p className="font-medium text-gray-900">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="p-6 bg-gray-50 flex items-center justify-end space-x-4">
            {bookingData.status === 'pending' && (
              <button className="inline-flex items-center px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50">
                <XCircleIcon className="h-5 w-5 mr-2" />
                Batalkan Booking
              </button>
            )}
            {bookingData.status === 'confirmed' && (
              <button className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                <CheckCircleIcon className="h-5 w-5 mr-2" />
                Tandai Selesai
              </button>
            )}
            {bookingData.status === 'completed' && !showReviewForm && (
              <button
                onClick={() => setShowReviewForm(true)}
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
              >
                <StarIcon className="h-5 w-5 mr-2" />
                Beri Ulasan
              </button>
            )}
          </div>
        </div>

        {/* Review form modal */}
        {showReviewForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Beri Ulasan
                  </h2>
                  <button
                    onClick={() => setShowReviewForm(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <span className="sr-only">Tutup</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rating
                    </label>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="p-1"
                        >
                          {star <= (hoveredRating || rating) ? (
                            <StarIconSolid className="h-8 w-8 text-yellow-400" />
                          ) : (
                            <StarIcon className="h-8 w-8 text-gray-300" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Komentar
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      placeholder="Bagaimana pengalaman Anda dengan layanan ini?"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300"
                    >
                      Kirim Ulasan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
} 