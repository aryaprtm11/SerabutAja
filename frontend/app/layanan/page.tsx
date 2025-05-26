import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Link from "next/link"

const services = [
  {
    title: "Perbaikan Rumah",
    description: "Layanan perbaikan untuk berbagai kerusakan di rumah Anda, mulai dari atap bocor, pipa tersumbat, listrik bermasalah, hingga perbaikan pintu dan jendela.",
    features: [
      "Perbaikan atap dan plafon",
      "Perbaikan instalasi listrik",
      "Perbaikan pipa dan saluran air",
      "Perbaikan pintu dan jendela",
      "Perbaikan keramik dan lantai",
      "Pengecatan ulang"
    ],
    image: "https://images.pexels.com/photos/8853534/pexels-photo-8853534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "perbaikan-rumah"
  },
  {
    title: "Renovasi",
    description: "Ubah tampilan rumah Anda dengan layanan renovasi profesional. Kami membantu mewujudkan rumah impian Anda dengan hasil yang berkualitas.",
    features: [
      "Renovasi dapur",
      "Renovasi kamar mandi",
      "Perluasan ruangan",
      "Pembangunan carport",
      "Renovasi teras",
      "Pembuatan pagar"
    ],
    image: "https://images.pexels.com/photos/6474343/pexels-photo-6474343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "renovasi"
  },
  {
    title: "Taman & Lansekap",
    description: "Percantik halaman rumah Anda dengan jasa perawatan taman dan lansekap. Kami membantu menciptakan taman yang indah dan nyaman.",
    features: [
      "Desain taman",
      "Penanaman tanaman",
      "Pembuatan gazebo",
      "Instalasi sistem irigasi",
      "Pembuatan kolam",
      "Perawatan taman rutin"
    ],
    image: "https://images.pexels.com/photos/4920283/pexels-photo-4920283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "taman-lansekap"
  },
  {
    title: "Instalasi",
    description: "Pasang berbagai peralatan rumah tangga dengan bantuan teknisi berpengalaman. Pastikan instalasi yang aman dan sesuai standar.",
    features: [
      "Instalasi AC",
      "Instalasi water heater",
      "Instalasi pompa air",
      "Instalasi CCTV",
      "Instalasi antena TV",
      "Instalasi kitchen set"
    ],
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    slug: "instalasi"
  }
]

export default function LayananPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      
      {/* Hero Section with Elegant Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-slate-100">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gray-200 to-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-slate-200 to-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl p-3 font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-[#E31C25]">
              Layanan Unggulan Kami
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700 max-w-2xl mx-auto">
              Temukan berbagai layanan profesional untuk membantu menyelesaikan pekerjaan Anda dengan cepat dan berkualitas terjamin
            </p>
            
            {/* Stats preview */}
            <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4 max-w-2xl mx-auto">
              {[
                { value: "1000+", label: "Project Selesai" },
                { value: "500+", label: "Tukang Ahli" },
                { value: "24/7", label: "Layanan" },
                { value: "100%", label: "Garansi" }
              ].map((stat) => (
                <div key={stat.label} className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 shadow-sm">
                  <div className="text-2xl font-bold text-[#E31C25]">{stat.value}</div>
                  <div className="text-sm text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services List with Alternating Backgrounds */}
      <div className="relative">
        {services.map((service, index) => (
          <div
            key={service.slug}
            className={`relative py-24 ${
              index % 2 === 0 
                ? 'bg-white' 
                : 'bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100'
            }`}
          >
            {/* Decorative background elements */}
            {index % 2 !== 0 && (
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-gray-200 to-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
                <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-slate-200 to-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
              </div>
            )}
            
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Service Image */}
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] relative bg-gray-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className={`p-8 rounded-2xl ${
                    index % 2 === 0 
                      ? 'bg-gradient-to-br from-white to-gray-50 shadow-lg border border-gray-100' 
                      : 'bg-white/80 backdrop-blur-sm shadow-lg border border-gray-200/50'
                  }`}>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#E31C25] to-red-700 flex items-center justify-center flex-shrink-0">
                            <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <div className="pt-4">
                      <Link
                        href={`/layanan/${service.slug}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#E31C25] to-red-700 px-6 py-3 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] hover:from-red-700 hover:to-red-800"
                      >
                        Lihat Detail
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section with Gradient */}
      <div className="relative bg-gradient-to-br from-[#E31C25] via-red-600 to-pink-600 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-300/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Siap untuk memulai?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
              Hubungi kami sekarang untuk mendapatkan penawaran terbaik sesuai kebutuhan Anda
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#E31C25] shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 hover:bg-gray-50"
              >
                Hubungi Kami
              </Link>
              <Link
                href="/tentang"
                className="inline-flex items-center gap-2 text-base font-semibold text-white hover:text-white/90 transition-colors duration-200 border-b-2 border-transparent hover:border-white/50"
              >
                Pelajari Lebih Lanjut 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}