'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { PaperAirplaneIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface Message {
  id: string
  sender: 'user' | 'worker'
  text: string
  timestamp: string
}

interface ChatBoxProps {
  isOpen: boolean
  onClose: () => void
  worker: {
    id: string
    name: string
    image: string
    lastSeen?: string
  }
}

// Dummy data untuk contoh
const initialMessages: Message[] = [
  {
    id: '1',
    sender: 'worker',
    text: 'Halo! Ada yang bisa saya bantu?',
    timestamp: '2024-02-25T10:00:00',
  },
  {
    id: '2',
    sender: 'user',
    text: 'Saya ingin tanya tentang perbaikan atap rumah',
    timestamp: '2024-02-25T10:01:00',
  },
  {
    id: '3',
    sender: 'worker',
    text: 'Baik, bisa dijelaskan lebih detail masalahnya?',
    timestamp: '2024-02-25T10:02:00',
  },
]

export default function ChatBox({ isOpen, onClose, worker }: ChatBoxProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [newMessage, setNewMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const message: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: newMessage,
      timestamp: new Date().toISOString(),
    }

    setMessages([...messages, message])
    setNewMessage('')
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white rounded-2xl shadow-2xl flex flex-col max-h-[600px]">
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10">
            <Image
              src={worker.image}
              alt={worker.name}
              fill
              className="object-cover rounded-full"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full ring-2 ring-white"></span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{worker.name}</h3>
            <p className="text-xs text-gray-500">
              {worker.lastSeen ? `Terakhir dilihat ${worker.lastSeen}` : 'Online'}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                message.sender === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs mt-1 opacity-70">
                {new Date(message.timestamp).toLocaleTimeString('id-ID', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Ketik pesan..."
            className="flex-1 rounded-full border-gray-300 focus:border-primary focus:ring-primary"
          />
          <button
            type="submit"
            className="p-2 text-primary hover:text-primary/90 transition-colors duration-300"
            disabled={!newMessage.trim()}
          >
            <PaperAirplaneIcon className="h-6 w-6" />
          </button>
        </div>
      </form>
    </div>
  )
} 