'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href: string
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, icon, href }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-light rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
      <Link 
        href={href}
        className="relative flex flex-col h-full bg-white p-6 rounded-lg ring-1 ring-gray-900/5 shadow-md hover:shadow-lg transition duration-200"
      >
        <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 mb-4">
          <Image
            src={icon}
            alt={title}
            width={32}
            height={32}
            className="text-primary"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
        <div className="mt-4 flex items-center text-sm font-semibold text-primary">
          Pesan Sekarang
          <svg
            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Link>
    </div>
  )
}

export default ServiceCard 