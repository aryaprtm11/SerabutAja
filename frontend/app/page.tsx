import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";
import { Icon } from "@/components/Icon";
import { appStoreIcons, workflowIcons, trustIcons, navigationIcons } from "@/config/icons";
import type { IconType } from "@/components/Icon";
import { 
  CheckCircle, 
  Shield, 
  Star, 
  Clock, 
  Users, 
  Award, 
  TrendingUp,
  Hammer,
  Wrench,
  Home,
  Palette,
  ArrowRight,
  Calendar,
  BarChart3,
  Search,
  UserCheck,
  CreditCard,
  ThumbsUp
} from "lucide-react";

const getIcon = (iconName: string) => {
  const icons = {
    "home": Home,
    "hammer": Hammer,
    "palette": Palette,
    "wrench": Wrench,
    "users": Users,
    "check-circle": CheckCircle,
    "trending-up": TrendingUp,
    "star": Star,
    "shield": Shield,
    "award": Award,
    "clock": Clock,
    "calendar": Calendar,
    "bar-chart": BarChart3,
    "search": Search,
    "user-check": UserCheck,
    "credit-card": CreditCard,
    "thumbs-up": ThumbsUp
  };
  return icons[iconName as keyof typeof icons];
};

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

const howItWorksSteps = [
  {
    step: "01",
    title: "Pilih Layanan",
    description: "Cari dan pilih layanan yang Anda butuhkan dari berbagai kategori yang tersedia",
    icon: "search",
    color: "bg-blue-500",
    textColor: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    step: "02", 
    title: "Pilih Tukang",
    description: "Lihat profil tukang terverifikasi, rating, dan ulasan dari pelanggan sebelumnya",
    icon: "user-check",
    color: "bg-green-500",
    textColor: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    step: "03",
    title: "Bayar & Jadwalkan",
    description: "Lakukan pembayaran aman dan tentukan jadwal yang sesuai dengan kebutuhan Anda",
    icon: "credit-card", 
    color: "bg-purple-500",
    textColor: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    step: "04",
    title: "Nikmati Hasilnya",
    description: "Pantau progress pekerjaan dan berikan rating setelah pekerjaan selesai",
    icon: "thumbs-up",
    color: "bg-orange-500",
    textColor: "text-orange-600", 
    bgColor: "bg-orange-50"
  }
];

const testimonials = [
  {
    content: "SerabutAja benar-benar mengubah cara saya mencari tukang. Prosesnya cepat, tukangnya profesional, dan hasilnya memuaskan. Aplikasi yang sangat membantu!",
    author: "Budi Santoso",
    role: "Pemilik Rumah",
    location: "Jakarta Selatan", 
    rating: 5,
    avatar: "/images/avatars/budi.jpg"
  },
  {
    content: "Sebagai pengusaha yang sibuk, saya sangat terbantu dengan layanan on-demand SerabutAja. Tukang datang tepat waktu dan kualitas kerja sangat baik.",
    author: "Siti Rahayu",
    role: "Pengusaha",
    location: "Bandung",
    rating: 5,
    avatar: "/images/avatars/siti.jpg"
  },
  {
    content: "Harga transparan tanpa biaya tersembunyi, tukang terverifikasi, dan ada garansi pekerjaan. Sangat recommended untuk semua kebutuhan rumah!",
    author: "Ahmad Hidayat", 
    role: "Arsitek",
    location: "Surabaya",
    rating: 5,
    avatar: "/images/avatars/ahmad.jpg"
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Mengapa memilih SerabutAja?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Platform yang dirancang untuk memberikan pengalaman terbaik dalam mencari jasa tukang
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: "Tukang Terverifikasi",
                description: "Semua tukang telah melalui proses verifikasi ketat untuk menjamin kualitas dan keamanan pekerjaan.",
                icon: CheckCircle,
                color: "text-green-600",
                bgColor: "bg-green-50"
              },
              {
                title: "Harga Transparan",
                description: "Dapatkan estimasi biaya yang jelas sebelum pekerjaan dimulai, tanpa biaya tersembunyi.",
                icon: Award,
                color: "text-blue-600",
                bgColor: "bg-blue-50"
              },
              {
                title: "Garansi Pekerjaan",
                description: "Setiap pekerjaan dijamin dengan garansi untuk memastikan kepuasan dan kualitas hasil.",
                icon: Shield,
                color: "text-purple-600",
                bgColor: "bg-purple-50"
              },
            ].map((feature) => (
              <div key={feature.title} className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor}`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
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
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Layanan unggulan kami
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Temukan berbagai layanan profesional untuk kebutuhan rumah Anda
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - IMPROVED */}
      <section className="relative py-24 overflow-hidden bg-slate-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl animation-delay-4000"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Bagaimana SerabutAja Bekerja?
            </h2>
            <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
              Hanya 4 langkah mudah untuk mendapatkan layanan tukang profesional
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-4">
              {howItWorksSteps.map((step, index) => {
                const IconComponent = getIcon(step.icon);
                return (
                  <div key={step.step} className="relative group">
                    {/* Connection Line - Only show on desktop */}
                    {index < howItWorksSteps.length - 1 && (
                      <div className="hidden xl:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-slate-300 to-transparent transform translate-x-8 z-0"></div>
                    )}
                    
                    <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group-hover:-translate-y-2">
                      {/* Step Number */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                        {step.step}
                      </div>
                      
                      {/* Icon */}
                      <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${step.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`h-8 w-8 ${step.textColor}`} />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link 
              href="/mulai-sekarang" 
              className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-lg font-semibold text-white hover:bg-slate-800 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Mulai Sekarang
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - IMPROVED */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-50 rounded-full transform translate-x-1/2 opacity-50"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-50 rounded-full transform -translate-x-1/2 opacity-50"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Apa Kata Mereka?
            </h2>
            <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
              Ribuan pelanggan telah mempercayai SerabutAja untuk kebutuhan rumah mereka
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.author} 
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-2"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-slate-700 leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                    <span className="text-slate-600 font-semibold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    <div className="text-slate-600 text-sm">{testimonial.role} • {testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-slate-50 rounded-full px-6 py-3 border border-slate-200">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-slate-700 font-medium">4.9/5 dari 10,000+ ulasan</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}