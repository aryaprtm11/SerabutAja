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
    <main className="min-h-screen bg-gray-50 font-[Inter,sans-serif] text-gray-900">
      <Head>
        <title>Hubungi Kami | Jasa Perbaikan dan Renovasi</title>
        <meta name="description" content="Hubungi kami untuk konsultasi gratis mengenai jasa perbaikan dan renovasi rumah Anda" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <Navbar />

        {/* Header dengan background pattern merah dan jarak di bawah */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-white-600/30 to-gray-100 pt-15 mb-16">
          <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
            <div 
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-white-600 to-white-800 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
              style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl p-3 font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-[#E31C25]">
              Hubungi Kami
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-700 font-medium">
                Ada pertanyaan atau membutuhkan bantuan? Jangan ragu untuk menghubungi kami.
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          </div>
        </div>

          {/* Contact Form Section dengan card design */}
      <div className="mx-auto max-w-7xl px-6 -mt-8 sm:-mt-16 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl bg-white shadow-xl ring-1 ring-gray-200 p-8 hover:shadow-2xl transition-shadow duration-300">
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-8 rounded-md bg-green-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                      Pesan Anda telah terkirim! Kami akan menghubungi Anda segera.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">
                      Maaf, terjadi kesalahan. Silakan coba lagi nanti.
                    </p>
                  </div>
                </div>
              </div>
            )}
                {/* Form Header */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Formulir Kontak</h2>
            <p className="mt-2 text-gray-600">Isi formulir di bawah untuk menghubungi tim kami</p>
          </div>


                {/* Form dengan styling yang lebih menarik */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="layanan" className="block text-sm font-semibold leading-6 text-gray-900">
                  Layanan yang Dibutuhkan
                </label>
                <div className="mt-2.5 relative">
                  <select
                    id="layanan"
                    name="layanan"
                    value={formData.layanan}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-black-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white appearance-none"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}
                  >
                    <option value="umum">Pertanyaan Umum</option>
                    <option value="perbaikan">Perbaikan Rumah</option>
                    <option value="renovasi">Renovasi</option>
                    <option value="taman">Taman & Lansekap</option>
                    <option value="instalasi">Instalasi</option>
                  </select>
                </div>
              </div>

                <div>
                  <label htmlFor="nama" className="block text-sm font-semibold leading-6 text-gray-900">
                    Nama Lengkap
                  </label>
                  <div className="mt-2.5 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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
                      className="block w-full rounded-md border-0 pl-10 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-black-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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
                      className="block w-full rounded-md border-0 pl-10 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-black-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="telepon" className="block text-sm font-semibold leading-6 text-gray-900">
                    Nomor Telepon
                  </label>
                  <div className="mt-2.5 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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
                      className="block w-full rounded-md border-0 pl-10 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-black-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="pesan" className="block text-sm font-semibold leading-6 text-gray-900">
                    Pesan
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="pesan"
                      name="pesan"
                      rows={4}
                      value={formData.pesan}
                      onChange={handleChange}
                      placeholder="Jelaskan kebutuhan atau pertanyaan Anda di sini..."
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-black-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div>
                    <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-red-600 px-3.5 py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
              </div>
            </form>
          </div>

                   {/* Contact Info*/}
          <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <span className="mr-2 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Informasi Kontak Lainnya
              </h2>
              <p className="mt-2 mb-6 text-gray-600">Anda juga dapat menghubungi kami melalui :</p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 border border-gray-400">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-semibold text-gray-700">Telepon / WhatsApp</h3>
                    <span className="text-lg text-gray-700">+62 822-8132-8658</span>
                  </div>
                </div>
                
                <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 border border-gray-400">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-semibold text-gray-700">Email</h3>
                    <span className="text-lg text-gray-700">Serabut.aja@gmail.com</span>
                  </div>
                </div>
                
                <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 border border-gray-400">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-semibold text-gray-700">Alamat</h3>
                    <span className="text-lg text-gray-700">
                      Jl. Terusan Ryacudu, Way Huwi, Kec. Jati Agung, Kabupaten Lampung Selatan, Lampung 35365
                    </span>
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