'use client';

import { useState } from 'react';
import Link from 'next/link';

interface AuthFormProps {
  type: 'login' | 'register';
  onSubmit: (data: any) => Promise<void>;
}

interface FormData {
  email: string;
  password: string;
  nama: string;
  telepon: string;
  alamat: string;
  keahlian: string[];
  pengalaman: string;
  foto_ktp: File | null;
  foto_diri: File | null;
}

export default function AuthForm({ type, onSubmit }: AuthFormProps) {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    nama: '',
    telepon: '',
    alamat: '',
    keahlian: [],
    pengalaman: '',
    foto_ktp: null,
    foto_diri: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({
        ...prev,
        [e.target.name]: file
      }));
    }
  };

  const handleKeahlianChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      keahlian: e.target.checked
        ? [...prev.keahlian, value]
        : prev.keahlian.filter(item => item !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      await onSubmit(formData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const keahlianOptions = [
    'Perbaikan Rumah',
    'Renovasi',
    'Taman & Lansekap',
    'Instalasi Listrik',
    'Perbaikan Elektronik',
    'Cat & Dekorasi',
    'Perbaikan AC',
    'Perbaikan Pipa'
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-red-800">{error}</p>
            </div>
          </div>
        </div>
      )}

      {type === 'register' && (
        <div>
          <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="nama"
            id="nama"
            required
            value={formData.nama}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white/70"
          />
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white/70"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white/70"
        />
      </div>

      {type === 'register' && (
        <>
          <div>
            <label htmlFor="telepon" className="block text-sm font-medium text-gray-700">
              Nomor Telepon
            </label>
            <input
              type="tel"
              name="telepon"
              id="telepon"
              required
              value={formData.telepon}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white/70"
            />
          </div>

          <div>
            <label htmlFor="alamat" className="block text-sm font-medium text-gray-700">
              Alamat
            </label>
            <textarea
              name="alamat"
              id="alamat"
              rows={3}
              required
              value={formData.alamat}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white/70"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Keahlian
            </label>
            <div className="grid grid-cols-2 gap-4">
              {keahlianOptions.map((option) => (
                <div key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`keahlian-${option}`}
                    name="keahlian"
                    value={option}
                    checked={formData.keahlian.includes(option)}
                    onChange={handleKeahlianChange}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor={`keahlian-${option}`} className="ml-2 text-sm text-gray-700">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="pengalaman" className="block text-sm font-medium text-gray-700">
              Pengalaman Kerja
            </label>
            <textarea
              name="pengalaman"
              id="pengalaman"
              rows={4}
              required
              value={formData.pengalaman}
              onChange={handleChange}
              placeholder="Ceritakan pengalaman kerja Anda sebagai tukang serabutan..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white/70"
            />
          </div>

          <div>
            <label htmlFor="foto_ktp" className="block text-sm font-medium text-gray-700">
              Foto KTP
            </label>
            <input
              type="file"
              name="foto_ktp"
              id="foto_ktp"
              required
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-primary file:text-white
                hover:file:bg-primary-dark
              "
            />
          </div>

          <div>
            <label htmlFor="foto_diri" className="block text-sm font-medium text-gray-700">
              Foto Diri
            </label>
            <input
              type="file"
              name="foto_diri"
              id="foto_diri"
              required
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-primary file:text-white
                hover:file:bg-primary-dark
              "
            />
          </div>
        </>
      )}

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Memproses...' : type === 'login' ? 'Masuk' : 'Daftar'}
        </button>
      </div>

      <div className="text-sm text-center">
        {type === 'login' ? (
          <p>
            Belum punya akun?{' '}
            <Link href="/register" className="font-medium text-primary hover:text-primary-dark">
              Daftar sekarang
            </Link>
          </p>
        ) : (
          <p>
            Sudah punya akun?{' '}
            <Link href="/login" className="font-medium text-primary hover:text-primary-dark">
              Masuk di sini
            </Link>
          </p>
        )}
      </div>
    </form>
  );
} 