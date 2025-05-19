'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';

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
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header dengan background pattern */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20 to-white pt-14">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-primary-dark opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}} />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Pertanyaan Umum
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan SerabutAja
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-primary-dark opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}} />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mx-auto max-w-7xl px-6 -mt-8 sm:-mt-16 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white shadow-xl ring-1 ring-gray-200 p-8">
            <FAQAccordion faqs={faqs} />
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Masih punya pertanyaan?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Jangan ragu untuk menghubungi tim support kami yang siap membantu
            </p>
            <div className="mt-8">
              <a
                href="/kontak"
                className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors duration-200"
              >
                Hubungi Kami
                <svg className="ml-2 -mr-0.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 