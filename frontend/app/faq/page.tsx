'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { useEffect, useRef } from 'react';

const faqs = [
  {
    question: "Apa itu SerabutAja?",
    answer: "SerabutAja adalah platform yang menghubungkan Anda dengan tukang serabutan profesional dan terpercaya untuk berbagai kebutuhan perbaikan dan pemeliharaan rumah Anda. Kami memastikan setiap tukang telah melalui proses verifikasi dan memiliki pengalaman yang memadai."
  },
  {
    question: "Bagaimana cara memesan layanan di SerabutAja?",
    answer: "Untuk memesan layanan, Anda cukup: 1) Pilih jenis layanan yang dibutuhkan, 2) Isi form pemesanan dengan detail pekerjaan, 3) Pilih jadwal yang diinginkan, 4) Konfirmasi pesanan dan tunggu tukang datang sesuai jadwal. Pembayaran dapat dilakukan setelah pekerjaan selesai."
  },
  {
    question: "Apakah tukang SerabutAja sudah terverifikasi?",
    answer: "Ya, semua tukang di SerabutAja telah melalui proses verifikasi ketat yang meliputi: verifikasi identitas, pengalaman kerja, dan latar belakang. Kami juga melakukan evaluasi berkala berdasarkan review dari pelanggan untuk menjaga kualitas layanan."
  },
  {
    question: "Berapa biaya menggunakan layanan SerabutAja?",
    answer: "Biaya layanan bervariasi tergantung jenis pekerjaan dan kompleksitasnya. Setelah Anda mengirimkan detail pekerjaan, kami akan memberikan estimasi biaya secara transparan sebelum pekerjaan dimulai. Tidak ada biaya tersembunyi atau tambahan di luar yang sudah disepakati."
  },
  {
    question: "Apa jaminan yang diberikan SerabutAja?",
    answer: "SerabutAja memberikan jaminan kepuasan pelanggan. Jika ada masalah dengan hasil pekerjaan, kami akan mengirim tukang kembali untuk memperbaiki tanpa biaya tambahan. Kami juga memberikan asuransi perlindungan terhadap kerusakan properti selama pengerjaan."
  },
  {
    question: "Bagaimana jika ada kendala saat pengerjaan?",
    answer: "Jika terjadi kendala selama pengerjaan, Anda dapat langsung menghubungi customer service kami yang siap 24/7. Kami akan segera menindaklanjuti dan memberikan solusi terbaik untuk setiap masalah yang terjadi."
  },
  {
    question: "Apakah layanan tersedia di semua wilayah?",
    answer: "Saat ini layanan SerabutAja tersedia di wilayah Jabodetabek. Kami terus melakukan ekspansi ke kota-kota besar lainnya di Indonesia. Silakan cek ketersediaan layanan di area Anda melalui fitur cek lokasi di website kami."
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer: "Kami menerima berbagai metode pembayaran termasuk tunai, transfer bank, dan e-wallet populer. Pembayaran dilakukan setelah pekerjaan selesai dan Anda puas dengan hasilnya. Untuk proyek besar, mungkin diperlukan uang muka sesuai kesepakatan."
  }
];

export default function FAQPage() {
  const faqRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    faqRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      faqRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
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
              Pertanyaan Umum
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-700 font-medium">
                Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan SerabutAja
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          </div>
        </div>
        <br />
        <br />

      {/* FAQ Section */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 -mt-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl bg-white shadow-lg ring-2 ring-gray-300 px-6 py-12 flex flex-col space-y-6">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  ref={(el) => (faqRefs.current[index] = el)}
                  className="faq-item opacity-0 translate-y-8"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white border-l-4 border-l-red-600 shadow-sm hover:shadow-md transition-all duration-300 rounded-r-lg overflow-hidden">
                    <details className="group/details">
                      <summary className="flex items-center justify-between cursor-pointer list-none select-none p-6 hover:bg-gray-50/50 transition-colors duration-200">
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                        <div className="flex-shrink-0 ml-4">
                          <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center transform group-open/details:rotate-180 transition-all duration-300 hover:from-red-600 hover:to-red-700 active:scale-95 shadow-sm">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </summary>
                      <div className="px-6 pb-6">
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
                        </div>
                      </div>
                    </details>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-[#E31C25] via-red-600 to-pink-600 overflow-hidden mt-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-300/20 rounded-full mix-blend-overlay filter blur-3xl" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto py-20 text-center">
          <h2 className="text-2xl font-bold text-white">Masih punya pertanyaan?</h2>
          <p className="mt-4 text-lg text-white/90">
            Jangan ragu untuk menghubungi tim support kami yang siap membantu
          </p>
          <div className="mt-8">
            <a
              href="/kontak"
              className="inline-flex items-center rounded-md bg-white text-red-600 px-6 py-3 text-base font-semibold shadow-sm hover:bg-red-100 transition-colors duration-200"
            >
              Hubungi Kami
              <svg className="ml-2 -mr-0.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .faq-item.animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        details[open] summary ~ * {
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        details summary:focus-visible {
          outline: 2px solid #E31C25;
          outline-offset: 2px;
          border-radius: 8px;
        }
      `}</style>
    </main>
  );
}
