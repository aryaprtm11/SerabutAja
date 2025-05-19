'use client'

import Image from 'next/image'
import Link from 'next/link'
import { StarIcon } from '@heroicons/react/24/solid'
import { MapPinIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

interface WorkerCardProps {
  id: string
  name: string
  image: string
  category: string
  location: string
  experience: number
  rating: number
  totalReviews: number
  price: number
}

export default function WorkerCard({
  id,
  name,
  image,
  category,
  location,
  experience,
  rating,
  totalReviews,
  price,
}: WorkerCardProps) {
  return (
    <div className="group relative">
      {/* Background gradient animation */}
      <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-primary/50 to-red-600/50 opacity-0 blur transition duration-500 group-hover:opacity-100"></div>
      
      {/* Card content */}
      <div className="relative flex p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg ring-1 ring-primary/10 transition-all duration-500 group-hover:bg-white">
        {/* Worker image */}
        <div className="relative w-24 h-24 flex-shrink-0">
          <Image
            src={image}
            alt={name}
            width={96}
            height={96}
            className="w-full h-full object-cover rounded-lg ring-2 ring-primary/10"
          />
        </div>

        {/* Worker info */}
        <div className="ml-6 flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
              <Link href={`/worker/${id}`} className="hover:underline">
                {name}
              </Link>
            </h3>
            <p className="text-lg font-semibold text-primary">
              Rp {price.toLocaleString('id-ID')}
            </p>
          </div>

          {/* Category */}
          <p className="mt-1 text-sm text-gray-600">{category}</p>

          {/* Location and experience */}
          <div className="mt-2 flex items-center gap-4">
            <div className="flex items-center text-sm text-gray-600">
              <MapPinIcon className="h-4 w-4 mr-1" />
              {location}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <BriefcaseIcon className="h-4 w-4 mr-1" />
              {experience} tahun pengalaman
            </div>
          </div>

          {/* Rating */}
          <div className="mt-3 flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-4 w-4 ${
                    i < rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="ml-2 text-sm text-gray-600">
              ({totalReviews} ulasan)
            </p>
          </div>
        </div>

        {/* Action button */}
        <div className="absolute bottom-6 right-6">
          <Link
            href={`/worker/${id}`}
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
          >
            Lihat Profil
          </Link>
        </div>
      </div>
    </div>
  )
} 