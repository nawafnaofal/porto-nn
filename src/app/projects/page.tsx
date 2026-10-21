"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "RUANG",
    description: "Platform e-commerce busana berbasis Next.js 16 (App Router), PostgreSQL, Prisma, dan Redis. Dilengkapi sinkronisasi stok BigSeller dengan marketplace, sistem penguncian stok checkout 15 menit, pembayaran Midtrans, dan pelacakan resi kurir.",
    link: "https://ruangg.vercel.app/",
    images: [
      "/assets/projects-screenshots/ruang/1.png",
      "/assets/projects-screenshots/ruang/2.png",
      "/assets/projects-screenshots/ruang/3.png",
    ],
  },
  {
    id: 2,
    name: "YAMA",
    description: "Storefront e-commerce perlengkapan outdoor berbasis Next.js 16, React 19, Tailwind CSS v4, dan Framer Motion. Menampilkan tipografi kinetik yang bertransisi ke navbar saat di-scroll, footer reveal, drawer keranjang belanja reaktif, dan alur pembayaran QRIS serta Virtual Account.",
    link: "https://github.com/nawafnaofal/sec-ecommerce",
    images: [
      "/assets/projects-screenshots/yama/1.png",
      "/assets/projects-screenshots/yama/2.png",
      "/assets/projects-screenshots/yama/3.png",
      "/assets/projects-screenshots/yama/4.png",
    ],
  },
  {
    id: 3,
    name: "Gaji-Hub: Smart HRIS & Payroll Platform",
    description: "Platform HRIS dan Payroll modern berbasis Web & PWA menggunakan React + Inertia.js dan Laravel. Dilengkapi presensi GPS & verifikasi selfie, manajemen cuti, serta otomasi perhitungan pajak TER PPh 21 dan slip gaji digital.",
    link: "https://github.com/nawafnaofal/gaji-hub",
    images: [
      "/assets/projects-screenshots/gajihub/1.png",
    ],
  },
  {
    id: 4,
    name: "J-FORCES Group - Media Hub & Corporate Portal",
    description: "Portal resmi holding industri pertahanan nasional dengan arsitektur decoupled. Menggabungkan frontend React (Vite) dan backend Laravel REST API & MySQL untuk publikasi berita, pengujian balistik, dan integrasi multi-domain anak perusahaan.",
    link: "https://j-forces.co.id/",
    images: [
      "/assets/projects-screenshots/jforces/1.png",
      "/assets/projects-screenshots/jforces/2.png",
      "/assets/projects-screenshots/jforces/3.png",
    ],
  },
  {
    id: 5,
    name: "PT Ridho Agung Mitra Abadi (RAMA)",
    description: "Website profil dan katalog perlengkapan militer standar internasional (NIJ 0101.06) dengan fitur inspeksi 3D real-time berbasis Three.js/WebGL. Mendukung rotasi 360° yang halus, tekstur material PBR, dan performa stabil 60 FPS.",
    link: "https://rama.j-forces.co.id/",
    images: [
      "/assets/projects-screenshots/rama/1.png",
      "/assets/projects-screenshots/rama/2.png",
      "/assets/projects-screenshots/rama/3.png",
    ],
  },
  {
    id: 6,
    name: "PT Jala Berikat Nusantara Perkasa (JBNP)",
    description: "Simulasi dan katalog digital 3D armada kendaraan tempur taktis (Rantis Garuda UN & ILSV). Dilengkapi pengaturan simulasi arah cahaya matahari interaktif, rendering bayangan realistis, dan sistem pembersihan memori GPU otomatis.",
    link: "https://jbnp.j-forces.co.id/",
    images: [
      "/assets/projects-screenshots/jbnp/1.png",
      "/assets/projects-screenshots/jbnp/2.png",
      "/assets/projects-screenshots/jbnp/3.png",
    ],
  },
  {
    id: 7,
    name: "PT Anugerah Mekanika Sukses Abadi (AMSA)",
    description: "Virtual tour 3D hanggar manufaktur komponen presisi pertahanan berbasis Three.js. Menampilkan navigasi kamera sinematik antar unit mesin CNC berteknologi tinggi (HAAS ST-20Y) dan informasi pengujian akurasi mikron CMM.",
    link: "https://amsa.j-forces.co.id/",
    images: [
      "/assets/projects-screenshots/amsa/1.png",
      "/assets/projects-screenshots/amsa/2.png",
      "/assets/projects-screenshots/amsa/3.png",
    ],
  },
  {
    id: 8,
    name: "Uncharted Land of Horror (Game)",
    description: "Game petualangan horor psikologis 2D Top-Down Pixel Art berbasis Unity & C#. Berperan sebagai Lead Programmer mengimplementasikan controller karakter, sistem event trigger dialog, dan mekanisme AI musuh.",
    link: "https://shoshinsha-game.itch.io/uncharted-land-of-horror",
    images: [
      "/assets/projects-screenshots/uncharted/1.png",
      "/assets/projects-screenshots/uncharted/2.png",
      "/assets/projects-screenshots/uncharted/3.png",
    ],
  },
  {
    id: 9,
    name: "Development of E-Commerce System at Az-Zahra Shop Using Laravel (Journal)",
    description: "Publikasi ilmiah pada JOMLAI (Journal of Machine Learning & Artificial Intelligence, 2022). Penulis pertama riset arsitektur MVC e-commerce berbasis Laravel untuk digitalisasi proses transaksi dan inventaris ritel furnitur.",
    link: "https://journal.literasisains.id/index.php/jomlai/article/view/176",
    images: [
      "/assets/projects-screenshots/jomlai-journal-cover.png",
    ],
  },
  {
    id: 10,
    name: "Identifikasi Serangan Low-rate DDoS Menggunakan AdaBoost (Journal)",
    description: "Publikasi riset keamanan jaringan pada Jurnal Simpatik (UBSI, 2023). Membedah identifikasi anomali serangan Low-rate DDoS berbahaya menggunakan model ensemble learning berbasis algoritma AdaBoost.",
    link: "https://jurnal.bsi.ac.id/index.php/simpatik/article/view/1829",
    images: [
      "/assets/projects-screenshots/simpatik-journal-cover.png",
    ],
  },
  {
    id: 11,
    name: "Buku: Pemrograman Golang Untuk Pemula: Pengolahan Dataset",
    description: "Buku referensi teknis ber-ISBN (978-623-88549-3-6) yang diterbitkan oleh Buku Pedia di platform Bacabuku. Panduan eksplorasi sintaks Go, concurrency, dan pemrosesan dataset berskala besar.",
    link: "https://bacabuku.com/book/BK87541/teknik-informatika-pemrograman-golang-untuk-pemula-pengolahan-dataset",
    images: [
      "/assets/projects-screenshots/golang-book-banner.png",
    ],
  },
  {
    id: 12,
    name: "Buku: Toko Online dengan Laravel dan Vue.js",
    description: "Buku panduan full-stack web developer terbitan Buku Pedia dan tersedia di Gramedia Digital. Membahas arsitektur SPA e-commerce, reactive components Vue.js, integrasi REST API Laravel, dan modul transaksi belanja.",
    link: "https://ebooks.gramedia.com/id/buku/toko-online-dengan-laravel-dan-vue-js",
    images: [
      "/assets/projects-screenshots/laravel-vue-book-banner.png",
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-[50px] xl:px-[150px] text-zinc-300 min-h-screen py-10">
        <h1 className="text-4xl mt-[80px] mb-[40px] text-center font-bold">Projects</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {PROJECTS.map((project) => (
            <li
              className="w-full max-w-[360px] h-[400px] flex flex-col justify-between border-[.5px] rounded-2xl border-zinc-700/60 bg-zinc-900/40 shadow-xl overflow-hidden hover:border-zinc-500 transition-colors"
              key={project.id}
              style={{ backdropFilter: "blur(6px)" }}
            >
              <div className="w-full aspect-video flex-shrink-0 overflow-hidden bg-zinc-950">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3500,
                    autoplay: true,
                    speed: 1500,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: project.images.length > 1,
                  }}
                  aria-label="Project images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-full h-full object-cover bg-zinc-900"
                        width={640}
                        height={360}
                        quality={90}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 pb-3 text-zinc-300 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-sm font-semibold text-white line-clamp-2 leading-snug">{project.name}</h2>
                  <p className="mt-1.5 text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-mono text-white bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded-md transition-colors"
                  >
                    Visit Project &rarr;
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
