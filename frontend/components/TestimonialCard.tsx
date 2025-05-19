'use client'

import { FC } from 'react'

interface TestimonialCardProps {
  content: string
  author: string
  role: string
  rating: number
}

export default function TestimonialCard({ content, author, role, rating }: TestimonialCardProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-primary/50 to-red-600/50 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur"></div>
      <div className="relative flex flex-col h-full p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg ring-1 ring-primary/10">
        <div className="flex items-center gap-x-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} transition-colors duration-300 group-hover:text-yellow-500`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <blockquote className="flex-1">
          <p className="text-lg leading-8 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            "{content}"
          </p>
        </blockquote>

        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="flex items-center gap-x-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-red-600 flex items-center justify-center text-white text-xl font-bold">
              {author.charAt(0)}
            </div>
            <div>
              <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">{author}</div>
              <div className="text-gray-600">{role}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 