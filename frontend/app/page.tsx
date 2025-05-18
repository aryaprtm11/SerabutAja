import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

const featuredServices = [
  {
    title: "Perbaikan Rumah",
    description: "Layanan perbaikan untuk berbagai kerusakan di rumah Anda, dari atap bocor hingga kelistrikan.",
    icon: "/icons/home-repair.svg",
    href: "/layanan/perbaikan-rumah"
  },
  {
    title: "Renovasi",
    description: "Ubah tampilan rumah Anda dengan layanan renovasi profesional dan terpercaya.",
    icon: "/icons/renovation.svg",
    href: "/layanan/renovasi"
  },
  {
    title: "Taman & Lansekap",
    description: "Percantik halaman rumah Anda dengan jasa perawatan taman dan lansekap.",
    icon: "/icons/garden.svg",
    href: "/layanan/taman-lansekap"
  },
  {
    title: "Instalasi",
    description: "Pasang berbagai peralatan rumah tangga dengan bantuan teknisi berpengalaman.",
    icon: "/icons/installation.svg",
    href: "/layanan/instalasi"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative isolate pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-primary-light opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Solusi Terpercaya untuk Kebutuhan Serabutan Anda
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              SerabutAja hadir untuk membantu Anda menemukan tukang profesional untuk berbagai kebutuhan rumah dan bisnis Anda. Dari perbaikan, renovasi, hingga instalasi.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/layanan"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Lihat Layanan
              </Link>
              <Link href="/tentang" className="text-sm font-semibold leading-6 text-gray-900">
                Pelajari Lebih Lanjut <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-primary-light opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      {/* Featured Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Layanan Unggulan Kami
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Temukan berbagai layanan profesional untuk membantu menyelesaikan pekerjaan Anda dengan cepat dan berkualitas
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-4">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cara Kerja SerabutAja
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Dapatkan bantuan profesional dengan mudah melalui 4 langkah sederhana
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Step 1 */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <span className="text-lg font-semibold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Pilih Layanan</h3>
                <p className="mt-2 text-gray-600">
                  Pilih jenis layanan yang Anda butuhkan dari berbagai kategori yang tersedia
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <span className="text-lg font-semibold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Isi Detail</h3>
                <p className="mt-2 text-gray-600">
                  Berikan informasi tentang pekerjaan yang perlu dilakukan
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <span className="text-lg font-semibold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Terima Penawaran</h3>
                <p className="mt-2 text-gray-600">
                  Dapatkan penawaran dari tukang profesional terverifikasi
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <span className="text-lg font-semibold text-white">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Pekerjaan Selesai</h3>
                <p className="mt-2 text-gray-600">
                  Tukang akan datang dan menyelesaikan pekerjaan sesuai kesepakatan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Dipercaya oleh Ribuan Pelanggan
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80">
              SerabutAja telah membantu menyelesaikan berbagai pekerjaan dengan kualitas terbaik
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-center lg:max-w-none lg:grid-cols-4">
            <div>
              <div className="text-4xl font-bold tracking-tight text-white">5000+</div>
              <div className="mt-4 text-base text-white/80">Pelanggan Puas</div>
            </div>
            <div>
              <div className="text-4xl font-bold tracking-tight text-white">1000+</div>
              <div className="mt-4 text-base text-white/80">Tukang Profesional</div>
            </div>
            <div>
              <div className="text-4xl font-bold tracking-tight text-white">8000+</div>
              <div className="mt-4 text-base text-white/80">Proyek Selesai</div>
            </div>
            <div>
              <div className="text-4xl font-bold tracking-tight text-white">4.8/5</div>
              <div className="mt-4 text-base text-white/80">Rating Kepuasan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Apa Kata Mereka?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Dengarkan langsung dari pelanggan yang telah menggunakan layanan SerabutAja
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
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
    </main>
  );
}
