'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    pesan: '',
    layanan: 'umum'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Integrate with backend API
      const response = await fetch('http://localhost:5000/api/kontak', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nama: '',
          email: '',
          telepon: '',
          pesan: '',
          layanan: 'umum'
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen bg-slate-50 font-[Inter,sans-serif] text-gray-900">
      <Head>
        <title>Hubungi Kami | Jasa Perbaikan dan Renovasi</title>
        <meta name="description" content="Hubungi kami untuk konsultasi gratis mengenai jasa perbaikan dan renovasi rumah Anda" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      
      <Navbar />

      {/* Modern Hero Section with Gradient Background */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-50 pt-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-red-200/20 to-red-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-32 right-1/4 w-96 h-96 bg-gradient-to-l from-red-100/30 to-red-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-gradient-to-t from-red-50/40 to-red-100/40 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 -z-10 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#E31C25" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-700 ring-1 ring-red-200/50 backdrop-blur-sm">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Hubungi Tim Profesional Kami
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-red-500 bg-clip-text text-transparent">
                Mari Bicara
              </span>
              <br />
              <span className="text-gray-800">Tentang Proyek Anda</span>
            </h1>
            
            <p className="text-xl leading-8 text-gray-600 font-medium max-w-2xl mx-auto">
              Kami siap membantu mewujudkan proyek impian Anda. Dapatkan konsultasi gratis dan penawaran terbaik untuk kebutuhan renovasi dan perbaikan rumah.
            </p>

            {/* Contact Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Layanan Darurat</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">500+</div>
                <div className="text-sm text-gray-600 mt-1">Proyek Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">95%</div>
                <div className="text-sm text-gray-600 mt-1">Kepuasan Klien</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Contact Form Section */}
      <div className="relative -mt-8 mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl ring-1 ring-gray-200/50 p-8 sm:p-12 hover:shadow-3xl transition-all duration-500">
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-8 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 p-6 border border-green-200/50">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                      <svg className="h-6 w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-green-800">Pesan Berhasil Terkirim!</p>
                    <p className="text-green-700">Tim kami akan menghubungi Anda dalam 24 jam ke depan.</p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 rounded-2xl bg-gradient-to-r from-red-50 to-pink-50 p-6 border border-red-200/50">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                      <svg className="h-6 w-6 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-red-800">Terjadi Kesalahan</p>
                    <p className="text-red-700">Silakan coba lagi atau hubungi kami langsung via WhatsApp.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Form Header */}
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Formulir Kontak</h2>
              <p className="text-lg text-gray-600">Ceritakan proyek Anda dan dapatkan penawaran terbaik</p>
            </div>

            {/* Enhanced Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                
                {/* Service Selection */}
                <div className="sm:col-span-2">
                  <label htmlFor="layanan" className="block text-sm font-semibold leading-6 text-gray-900 mb-3">
                    Layanan yang Dibutuhkan
                  </label>
                  <div className="relative">
                    <select
                      id="layanan"
                      name="layanan"
                      value={formData.layanan}
                      onChange={handleChange}
                      className="block w-full rounded-xl border-0 px-4 py-4 text-gray-900 bg-white shadow-sm ring-1 ring-gray-300 hover:ring-gray-400 focus:ring-2 focus:ring-red-500 transition-all duration-200 appearance-none text-lg"
                      style={{ 
                        backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", 
                        backgroundPosition: "right 1rem center", 
                        backgroundRepeat: "no-repeat", 
                        backgroundSize: "1.5em 1.5em", 
                        paddingRight: "3rem" 
                      }}
                    >
                      <option value="umum">Pertanyaan Umum</option>
                      <option value="perbaikan">Perbaikan Rumah</option>
                      <option value="renovasi">Renovasi</option>
                      <option value="taman">Taman & Lansekap</option>
                      <option value="instalasi">Instalasi</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                {/* Name Field */}
                <div>
                  <label htmlFor="nama" className="block text-sm font-semibold leading-6 text-gray-900 mb-3">
                    Nama Lengkap
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="nama"
                      id="nama"
                      value={formData.nama}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap"
                      required
                      className="block w-full rounded-xl border-0 pl-12 pr-4 py-4 text-gray-900 bg-white shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 hover:ring-gray-400 focus:ring-2 focus:ring-red-500 transition-all duration-200 text-lg"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 mb-3">
                    Email
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
                      required
                      className="block w-full rounded-xl border-0 pl-12 pr-4 py-4 text-gray-900 bg-white shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 hover:ring-gray-400 focus:ring-2 focus:ring-red-500 transition-all duration-200 text-lg"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="sm:col-span-2">
                  <label htmlFor="telepon" className="block text-sm font-semibold leading-6 text-gray-900 mb-3">
                    Nomor Telepon
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      name="telepon"
                      id="telepon"
                      value={formData.telepon}
                      onChange={handleChange}
                      placeholder="+62 8xx-xxxx-xxxx"
                      required
                      className="block w-full rounded-xl border-0 pl-12 pr-4 py-4 text-gray-900 bg-white shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 hover:ring-gray-400 focus:ring-2 focus:ring-red-500 transition-all duration-200 text-lg"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="sm:col-span-2">
                  <label htmlFor="pesan" className="block text-sm font-semibold leading-6 text-gray-900 mb-3">
                    Pesan
                  </label>
                  <div>
                    <textarea
                      id="pesan"
                      name="pesan"
                      rows={6}
                      value={formData.pesan}
                      onChange={handleChange}
                      placeholder="Jelaskan proyek atau kebutuhan Anda secara detail..."
                      required
                      className="block w-full rounded-xl border-0 px-4 py-4 text-gray-900 bg-white shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 hover:ring-gray-400 focus:ring-2 focus:ring-red-500 transition-all duration-200 text-lg resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-5 text-lg font-semibold text-white shadow-lg hover:from-red-700 hover:to-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Mengirim Pesan...
                      </>
                    ) : (
                      <>
                        Kirim Pesan
                        <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red-700 to-red-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information Cards */}
          <div className="mt-16 mb-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Informasi Kontak</h2>
              <p className="text-lg text-gray-600">Berbagai cara untuk menghubungi tim profesional kami</p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Phone/WhatsApp Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-green-600/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Telepon / WhatsApp</h3>
                  <p className="text-2xl font-semibold text-green-600 mb-2">+62 822-8132-8658</p>
                  <p className="text-gray-600">Hubungi kami kapan saja</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-lg font-semibold text-blue-600 mb-2 break-all">Serabut.aja@gmail.com</p>
                  <p className="text-gray-600">Respon dalam 24 jam</p>
                </div>
              </div>

              {/* Address Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 sm:col-span-2 lg:col-span-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/10 to-red-600/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Alamat Kantor</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Jl. Terusan Ryacudu, Way Huwi, Kec. Jati Agung, Kabupaten Lampung Selatan, Lampung 35365
                  </p>
                </div>
              </div>
            </div>

              {/* Jam Operasional */}
              <div className="mt-8 p-5 bg-gray-50 rounded-lg border border-gray-300">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Jam Operasional
                </h3>
                <div className="space-y-2 text-gray-700">
                  <div className="text-lg text-[17px] flex justify-between">
                    <span>Senin - Jumat</span>
                    <span className="font-medium">08:00 - 17:00 WIB</span>
                  </div>
                  <div className="text-lg text-[17px] flex justify-between">
                    <span>Sabtu</span>
                    <span className="font-medium">08:00 - 15:00 WIB</span>
                  </div>
                  <div className="text-lg text-[17px] flex justify-between">
                    <span>Minggu & Hari Libur</span>
                    <span className="font-medium">Tutup</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Testimoni dan Jaminan */}
      <div className="bg-gradient-to-b from-white-200/30 to-gray-200 py-16 mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Kenapa Memilih Kami?</h2>
            <p className="mt-4 text-lg text-gray-600">Layanan profesional dengan jaminan kepuasan pelanggan</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Jaminan Kualitas</h3>
              <p className="text-lg text-gray-700">Kami memberikan jaminan terhadap semua pekerjaan yang kami lakukan, dengan standar kualitas tinggi.</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Respon Cepat</h3>
              <p className="text-lg text-gray-700">Tim kami akan merespon dengan cepat dan memberikan solusi terbaik untuk kebutuhan Anda.</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Harga Transparan</h3>
              <p className="text-lg text-gray-700">Kami memberikan penawaran harga yang jelas dan transparan, tanpa biaya tersembunyi.</p>
            </div>
          </div>
        </div>
      </div>

    <Footer/>
    </main>
  )
}