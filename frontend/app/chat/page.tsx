'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import ChatBox from '@/components/ChatBox'

// Dummy data untuk contoh
const conversations = [
  {
    id: '1',
    worker: {
      id: '1',
      name: 'Ahmad Sudrajat',
      image: '/images/workers/worker-1.jpg',
      lastSeen: '5 menit yang lalu',
    },
    lastMessage: {
      text: 'Baik, bisa dijelaskan lebih detail masalahnya?',
      timestamp: '10:02',
      unread: true,
    },
  },
  {
    id: '2',
    worker: {
      id: '2',
      name: 'Budi Santoso',
      image: '/images/workers/worker-2.jpg',
      lastSeen: 'Online',
    },
    lastMessage: {
      text: 'Saya akan datang besok pagi jam 8',
      timestamp: '09:45',
      unread: false,
    },
  },
  {
    id: '3',
    worker: {
      id: '3',
      name: 'Citra Dewi',
      image: '/images/workers/worker-3.jpg',
      lastSeen: '1 jam yang lalu',
    },
    lastMessage: {
      text: 'Terima kasih atas kepercayaannya',
      timestamp: 'Kemarin',
      unread: false,
    },
  },
]

export default function ChatPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null)

  const filteredConversations = conversations.filter((conv) =>
    conv.worker.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Sidebar */}
            <div className="border-r border-gray-200">
              {/* Header */}
              <div className="p-4 border-b">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Chat</h1>
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari percakapan..."
                    className="w-full pl-10 pr-4 py-2 border-gray-300 rounded-lg focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>

              {/* Conversation list */}
              <div className="overflow-y-auto h-[calc(100vh-200px)]">
                {filteredConversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv.id)}
                    className={`w-full p-4 flex items-start space-x-3 hover:bg-gray-50 transition-colors duration-200 ${
                      selectedConversation === conv.id ? 'bg-gray-50' : ''
                    }`}
                  >
                    <div className="relative">
                      <div className="relative w-12 h-12">
                        <Image
                          src={conv.worker.image}
                          alt={conv.worker.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      {conv.worker.lastSeen === 'Online' && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full ring-2 ring-white"></span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h2 className="text-sm font-semibold text-gray-900 truncate">
                          {conv.worker.name}
                        </h2>
                        <span className="text-xs text-gray-500">
                          {conv.lastMessage.timestamp}
                        </span>
                      </div>
                      <p
                        className={`text-sm truncate ${
                          conv.lastMessage.unread
                            ? 'text-gray-900 font-medium'
                            : 'text-gray-500'
                        }`}
                      >
                        {conv.lastMessage.text}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {conv.worker.lastSeen}
                      </p>
                    </div>
                    {conv.lastMessage.unread && (
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                    )}
                  </button>
                ))}

                {filteredConversations.length === 0 && (
                  <div className="p-4 text-center text-gray-500">
                    Tidak ada percakapan ditemukan
                  </div>
                )}
              </div>
            </div>

            {/* Main chat area */}
            <div className="col-span-2 flex items-center justify-center h-[calc(100vh-100px)] bg-gray-50">
              {selectedConversation ? (
                <ChatBox
                  isOpen={true}
                  onClose={() => setSelectedConversation(null)}
                  worker={
                    conversations.find((conv) => conv.id === selectedConversation)
                      ?.worker || conversations[0].worker
                  }
                />
              ) : (
                <div className="text-center">
                  <p className="text-gray-500">
                    Pilih percakapan untuk memulai chat
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 