'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Tentang</span>
              <span className="block text-[#EE3124]">SerabutAja</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Platform yang menghubungkan Anda dengan tukang serabutan terpercaya untuk berbagai kebutuhan perbaikan dan pemeliharaan rumah Anda.
            </p>
          </div>
        </div>
      </div>

      {/* Visi Misi Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-[#EE3124]">Visi & Misi</h2>
            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-900">Visi</h3>
                  <p className="mt-2 text-gray-500">
                    Menjadi platform terdepan yang memudahkan masyarakat dalam mencari jasa tukang serabutan yang profesional dan terpercaya.
                  </p>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-900">Misi</h3>
                  <ul className="mt-2 text-gray-500 list-disc list-inside">
                    <li>Menyediakan layanan tukang serabutan berkualitas</li>
                    <li>Menciptakan lapangan kerja bagi tukang serabutan</li>
                    <li>Memberikan pengalaman terbaik bagi pengguna</li>
                    <li>Membangun komunitas tukang serabutan yang profesional</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tim Kami Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-[#EE3124]">Tim Kami</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Dibangun oleh tim yang berdedikasi untuk memberikan solusi terbaik bagi kebutuhan rumah Anda.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {/* Tambahkan anggota tim di sini sesuai kebutuhan */}
              <div className="text-center">
                <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder-avatar.png"
                    alt="Tim Member"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Nama Anggota</h3>
                <p className="text-gray-500">Jabatan</p>
              </div>
              {/* Tambahkan anggota tim lainnya dengan format yang sama */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 