'use client'

import { FC } from 'react'
import Link from 'next/link'
import { Icon } from '@/components/Icon'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { navigationIcons } from '@/config/icons'

interface ServiceCardProps {
  title: string
  description: string
  icon: IconDefinition
  href: string
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <div className="group relative">
      {/* Background gradient animation */}
      <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-primary/50 to-red-600/50 opacity-0 blur transition duration-500 group-hover:opacity-100"></div>
      
      {/* Card content */}
      <div className="relative flex flex-col h-full p-8 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg ring-1 ring-primary/10 transition-all duration-500 group-hover:bg-white">
        {/* Icon container */}
        <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-red-600/10 p-3 transition-all duration-500 group-hover:scale-110">
          <div className="absolute inset-0 rounded-xl bg-white/50 backdrop-blur-sm ring-1 ring-primary/10"></div>
          <div className="relative flex items-center justify-center">
            <Icon
              icon={icon}
              size="2x"
              className="text-primary transition-all duration-500 group-hover:transform group-hover:scale-110"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="mt-6 flex-1">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
            <Link href={href} className="outline-none focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {title}
            </Link>
          </h3>
          <p className="mt-4 text-base leading-7 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Arrow indicator */}
        <div className="mt-6 flex items-center text-sm font-semibold text-primary">
          <span className="transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
            Selengkapnya
          </span>
          <Icon 
            icon={navigationIcons.next}
            className="ml-2 h-5 w-5 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2"
          />
        </div>
      </div>
    </div>
  )
} 