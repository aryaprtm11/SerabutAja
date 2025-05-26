'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react'

const navigation = {
  layanan: [
    { name: 'Perbaikan Rumah', href: '/layanan/perbaikan-rumah' },
    { name: 'Renovasi', href: '/layanan/renovasi' },
    { name: 'Taman & Lansekap', href: '/layanan/taman-lansekap' },
    { name: 'Instalasi', href: '/layanan/instalasi' },
  ],
  perusahaan: [
    { name: 'Tentang Kami', href: '/tentang' },
    { name: 'Karir', href: '/karir' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press Kit', href: '/press' },
  ],
  legal: [
    { name: 'Syarat & Ketentuan', href: '/syarat-ketentuan' },
    { name: 'Kebijakan Privasi', href: '/privasi' },
    { name: 'Kebijakan Cookie', href: '/cookie' },
  ],
  sosial: [
    {
      name: 'Instagram',
      href: 'https://instagram.com/serabutaja',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/serabutaja',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/serabutaja',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/6282281328658',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
    },
  ],
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden" aria-labelledby="footer-heading">
      
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      
      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute top-8 right-8 bg-gradient-to-r from-red-500 to-red-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
        </button>

        <div className="xl:grid xl:grid-cols-3 xl:gap-12">
          {/* Brand Section */}
          <div className="space-y-8">
            <Link href="/" className="group block">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="SerabutAja"
                  width={180}
                  height={60}
                  className="transform transition-all duration-500 group-hover:scale-105 drop-shadow-lg"
                />
              </div>
            </Link>
            
            <p className="text-base leading-7 text-gray-300 max-w-md">
              Solusi terpercaya untuk kebutuhan serabutan Anda. Temukan tukang profesional untuk berbagai layanan perbaikan dan pemeliharaan dengan kualitas terjamin.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-xs text-gray-400">Tukang Terdaftar</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">5000+</div>
                <div className="text-xs text-gray-400">Proyek Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.8</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                {navigation.sosial.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-blue-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {/* Services */}
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white mb-6 relative">
                  Layanan
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#E31C25] to-[#ff1818]"></div>
                </h3>
                <ul role="list" className="space-y-4">
                  {navigation.layanan.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group text-sm leading-6 text-gray-300 hover:text-red-400 transition-all duration-300 flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 group-hover:bg-red-400 transition-colors duration-300"></span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Company */}
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white mb-6 relative">
                  Perusahaan
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#E31C25] to-[#ff1818]"></div>
                </h3>
                <ul role="list" className="space-y-4">
                  {navigation.perusahaan.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group text-sm leading-6 text-gray-300 hover:text-red-400 transition-all duration-300 flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 group-hover:bg-red-400 transition-colors duration-300"></span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {/* Legal */}
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white mb-6 relative">
                  Legal
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#E31C25] to-[#ff1818]"></div>
                </h3>
                <ul role="list" className="space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group text-sm leading-6 text-gray-300 hover:text-red-400 transition-all duration-300 flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 group-hover:bg-red-400 transition-colors duration-300"></span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact */}
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white mb-6 relative">
                  Hubungi Kami
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#E31C25] to-[#ff1818]"></div>
                </h3>
                <ul role="list" className="space-y-4">
                  <li className="group">
                    <div className="flex items-start space-x-3 text-sm leading-6 text-gray-300">
                      <MapPin className="h-5 w-5 mt-0.5 text-red-500 flex-shrink-0" />
                      <p className="group-hover:text-red-500 transition-colors duration-300">
                        Jl. Terusan Ryacudu, Way Huwi, Kec. Jati Agung, Kabupaten Lampung Selatan, Lampung 35365
                      </p>
                    </div>
                  </li>
                  <li>
                    <a 
                      href="tel:+6282281328658" 
                      className="group flex items-center space-x-3 text-sm leading-6 text-gray-300 hover:text-red-500 transition-all duration-300"
                    >
                      <Phone className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span>+62 822-8132-8658</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="mailto:Serabut.aja@gmail.com" 
                      className="group flex items-center space-x-3 text-sm leading-6 text-gray-300 hover:text-red-500 transition-all duration-300"
                    >
                      <Mail className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span>Serabut.aja@gmail.com</span>
                    </a>
                  </li>
                </ul>
                {/* CTA Button */}
                <div className="mt-6">
                  <a
                    href="https://wa.me/6282281328658"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-red-600 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Konsultasi Gratis</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-16 border-t border-gradient-to-r from-transparent via-white/20 to-transparent pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} SerabutAja. Hak Cipta Dilindungi Undang-Undang.
            </p>
            <p className="text-xs leading-5 text-gray-400">
              Dibuat oleh Mahasiswa INFORMATIKA ITERA
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}