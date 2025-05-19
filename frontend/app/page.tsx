import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";
import { Icon } from "@/components/Icon";
import { appStoreIcons, workflowIcons, trustIcons, navigationIcons } from "@/config/icons";
import type { IconType } from "@/components/Icon";

const featuredServices = [
  {
    title: "Perbaikan Rumah",
    description: "Layanan perbaikan untuk berbagai kerusakan di rumah Anda, dari atap bocor hingga kelistrikan.",
    icon: workflowIcons.tools,
    href: "/layanan/perbaikan-rumah"
  },
  {
    title: "Renovasi",
    description: "Ubah tampilan rumah Anda dengan layanan renovasi profesional dan terpercaya.",
    icon: workflowIcons.hammer,
    href: "/layanan/renovasi"
  },
  {
    title: "Taman & Lansekap",
    description: "Percantik halaman rumah Anda dengan jasa perawatan taman dan lansekap.",
    icon: workflowIcons.wrench,
    href: "/layanan/taman-lansekap"
  },
  {
    title: "Instalasi",
    description: "Pasang berbagai peralatan rumah tangga dengan bantuan teknisi berpengalaman.",
    icon: workflowIcons.tools,
    href: "/layanan/instalasi"
  }
];

const stats = [
  {
    value: "10.000+",
    label: "Pelanggan Puas",
    icon: trustIcons.verified
  },
  {
    value: "2.000+",
    label: "Tukang Terverifikasi",
    icon: trustIcons.verified
  },
  {
    value: "15.000+",
    label: "Proyek Selesai",
    icon: workflowIcons.hammer
  },
  {
    value: "4.9/5",
    label: "Rating Kepuasan",
    icon: trustIcons.quality
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:flex lg:flex-col lg:items-center lg:px-8 lg:py-32">
          <h1 className="text-center max-w-3xl mx-auto text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Temukan tukang profesional terbaik di sekitar Anda.
          </h1>
          <p className="mt-6 text-center text-lg text-gray-600 max-w-2xl mx-auto">
            Berbagai kebutuhan rumah Anda memerlukan penanganan khusus. Kami hadir menghubungkan Anda dengan para ahlinya.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link 
              href="/cari-layanan" 
              className="inline-flex items-center gap-2 rounded-full bg-[#E31C25] px-8 py-3 text-base font-semibold text-white hover:bg-[#E31C25]/90 transition-all duration-200"
            >
              Cari Layanan Sekarang
            </Link>
          </div>

          <div className="mt-16 relative mx-auto max-w-5xl w-full">
            <div className="aspect-[16/9] overflow-hidden rounded-3xl bg-[#E31C25] shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-[300px] mx-auto">
        <Image
                    src="/images/app/preview.png"
                    alt="SerabutAja App Preview"
                    width={300}
                    height={600}
                    className="relative z-10"
          priority
        />
                  <div className="absolute -right-[400px] top-1/2 -translate-y-1/2">
                    <Image
                      src="/images/workers/tools/hammer.png"
                      alt="Tools"
                      width={500}
                      height={500}
                      className="rotate-12 drop-shadow-2xl"
                    />
                  </div>
                  <div className="absolute -left-[400px] top-1/2 -translate-y-1/2">
                    <Image
                      src="/images/workers/tools/wrench.png"
                      alt="Tools"
                      width={500}
                      height={500}
                      className="-rotate-12 drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 left-8 bg-white rounded-2xl shadow-lg p-6 max-w-xs">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DCFCE7]">
                  <Icon icon={workflowIcons.clock} className="h-6 w-6 text-[#166534]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Layanan On-demand</h3>
                  <p className="mt-1 text-sm text-gray-600">Dapatkan bantuan tukang profesional kapanpun Anda butuhkan</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 right-8 bg-white rounded-2xl shadow-lg p-6 max-w-xs">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DCFCE7]">
                  <Icon icon={trustIcons.verified} className="h-6 w-6 text-[#166534]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Tukang Terverifikasi</h3>
                  <p className="mt-1 text-sm text-gray-600">Semua tukang telah melalui proses verifikasi ketat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="relative bg-red-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
              Mengapa Memilih <span className="text-red-600">SerabutAja?</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Platform terpercaya yang menghubungkan Anda dengan tukang profesional terverifikasi
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: "Tukang Terverifikasi",
                description: "Semua tukang telah melalui proses verifikasi ketat untuk menjamin kualitas dan keamanan",
                icon: "verified" as IconType
              },
              {
                title: "Harga Transparan",
                description: "Dapatkan estimasi biaya yang jelas sebelum pekerjaan dimulai, tanpa biaya tersembunyi",
                icon: "payment" as IconType
              },
              {
                title: "Garansi Pekerjaan",
                description: "Setiap pekerjaan dijamin dengan garansi untuk memastikan kepuasan Anda",
                icon: "secure" as IconType
              },
            ].map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <Icon icon={feature.icon} className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-4 text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-red-600 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Dipercaya oleh Ribuan Pelanggan
            </h2>
            <p className="mt-4 text-lg text-red-100">
              Bergabunglah dengan ribuan pelanggan yang telah mempercayakan kebutuhan mereka pada SerabutAja
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <Icon icon={stat.icon} className="h-8 w-8 text-red-100" />
                <p className="mt-4 text-3xl font-bold tracking-tight text-white">{stat.value}</p>
                <p className="text-base text-red-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Siap Memulai Proyek Anda?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Temukan tukang profesional yang tepat untuk kebutuhan Anda sekarang
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link 
                href="/cari-tukang" 
                className="rounded-xl bg-red-600 px-8 py-4 text-xl font-bold text-white shadow-lg hover:bg-red-700 active:bg-red-800 hover:scale-[1.02] transition-all duration-200"
              >
                Cari Tukang
              </Link>
              <Link 
                href="/cara-kerja" 
                className="text-lg font-semibold text-gray-900 hover:text-red-600 transition-colors duration-200"
              >
                Pelajari Cara Kerja
                <Icon 
                  icon={navigationIcons.next}
                  className="ml-2 w-5 h-5 inline-block" 
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Layanan Unggulan Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#EE312410_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-red-600 to-primary">
              Layanan Unggulan Kami
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Temukan berbagai layanan profesional untuk membantu menyelesaikan pekerjaan Anda dengan cepat dan berkualitas
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative bg-[#E31C25] text-white overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Bagaimana SerabutAja membantu Anda?
              </h2>
              <div className="mt-12 space-y-8">
                {[
                  {
                    title: "Layanan On-demand",
                    description: "Dapatkan bantuan tukang profesional kapanpun Anda butuhkan",
                    icon: workflowIcons.clock
                  },
                  {
                    title: "Lacak Progress Pekerjaan",
                    description: "Pantau status dan riwayat pekerjaan dengan mudah",
                    icon: workflowIcons.schedule
                  },
                  {
                    title: "Penjadwalan Otomatis",
                    description: "Atur jadwal dan dapatkan pengingat untuk setiap pekerjaan",
                    icon: workflowIcons.schedule
                  }
                ].map((feature, index) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                      <Icon icon={feature.icon} className="h-5 w-5 text-[#E31C25]" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="mt-2 text-white">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[9/16] overflow-hidden rounded-3xl bg-[#E31C25]/80">
            <Image
                  src="/images/app/features-preview.png"
                  alt="SerabutAja App Features"
                  width={300}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#EE312410_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-red-600 to-primary">
              Apa Kata Mereka?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Dengarkan langsung dari pelanggan yang telah menggunakan layanan SerabutAja
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <TestimonialCard
              content="Sangat puas dengan layanan tukang dari SerabutAja. Pekerjaannya rapi dan sesuai dengan yang diharapkan. Proses pemesanan juga sangat mudah!"
              author="Budi Santoso"
              role="Pemilik Rumah"
              rating={5}
            />
            <TestimonialCard
              content="Tukang yang datang sangat profesional dan tepat waktu. Harga yang ditawarkan juga sangat transparan. Recommended!"
              author="Siti Rahayu"
              role="Pengusaha"
              rating={5}
            />
            <TestimonialCard
              content="Aplikasi yang sangat membantu untuk mencari tukang terpercaya. Kualitas pekerjaan memuaskan dan sesuai dengan budget."
              author="Ahmad Hidayat"
              role="Arsitek"
              rating={4}
            />
          </div>
    </div>
      </section>

      <Footer />
    </main>
  );
}
