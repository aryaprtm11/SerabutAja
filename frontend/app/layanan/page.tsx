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
    image: "/images/services/home-repair.jpg",
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
    image: "/images/services/renovation.jpg",
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
    image: "/images/services/garden.jpg",
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
    image: "/images/services/installation.jpg",
    slug: "instalasi"
  }
]

export default function LayananPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Layanan Kami
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Temukan berbagai layanan profesional untuk membantu menyelesaikan pekerjaan Anda dengan cepat dan berkualitas
            </p>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Service Image */}
              <div className="w-full lg:w-1/2 aspect-[4/3] relative bg-gray-100 rounded-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Service Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  {service.description}
                </p>
                <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <svg className="h-5 w-5 flex-none text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href={`/layanan/${service.slug}`}
                    className="inline-flex items-center rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Lihat Detail
                    <svg className="ml-2 -mr-0.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Siap untuk memulai?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80">
              Hubungi kami sekarang untuk mendapatkan penawaran terbaik sesuai kebutuhan Anda
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/kontak"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Hubungi Kami
              </Link>
              <Link
                href="/tentang"
                className="text-sm font-semibold leading-6 text-white"
              >
                Pelajari Lebih Lanjut <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
} 