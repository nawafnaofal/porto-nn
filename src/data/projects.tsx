import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiInertia,
  SiRedis,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <SiRedis />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  threejs: {
    title: "Three.js",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
  laravel: {
    title: "Laravel",
    bg: "black",
    fg: "white",
    icon: <SiLaravel />,
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <SiPhp />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  inertia: {
    title: "Inertia.js",
    bg: "black",
    fg: "white",
    icon: <SiInertia />,
  },
  unity: {
    title: "Unity",
    bg: "black",
    fg: "white",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="Unity" className="w-6 h-6 invert" />,
  },
  csharp: {
    title: "C#",
    bg: "black",
    fg: "white",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" className="w-6 h-6" />,
  },
  go: {
    title: "Golang",
    bg: "black",
    fg: "white",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Golang" className="w-6 h-6" />,
  },
  scikitlearn: {
    title: "Machine Learning (AdaBoost)",
    bg: "black",
    fg: "white",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Machine Learning" className="w-6 h-6" />,
  },
  research: {
    title: "Scientific Research",
    bg: "black",
    fg: "white",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg" alt="Research" className="w-6 h-6 invert" />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "ruang-studio",
    category: "E-Commerce",
    title: "RUANG",
    src: "/assets/projects-screenshots/ruang/1.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://ruangg.vercel.app/",
    github: "https://github.com/nawafnaofal/e-commerce.git",
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.node,
      ],
    },
    get content() {
      return (
        <div>
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-500/10 text-neutral-300 border border-neutral-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
            E-Commerce
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Platform e-commerce busana yang dibangun dengan Next.js 16 (App Router), PostgreSQL, Prisma ORM, dan Redis. Menangani sinkronisasi inventaris multi-channel otomatis, sistem penguncian stok saat checkout untuk mencegah overselling, integrasi pembayaran Midtrans, dan pelacakan pengiriman kurir.
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Sinkronisasi Stok BigSeller</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Sinkronisasi dua arah otomatis antara etalase website dan marketplace (Shopee, Tokopedia, TikTok Shop, Lazada) menggunakan BigSeller Open API dengan otorisasi HMAC-SHA256.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Penguncian Stok Checkout (15 Menit)</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Distributed locking berbasis Redis untuk mengunci ketersediaan unit selama 15 menit saat proses checkout berlangsung guna mencegah race condition dan overselling.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Pembayaran Midtrans & Webhook</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Mendukung Dynamic QRIS dan Virtual Account perbankan (BCA, Mandiri, BRI) dengan verifikasi hash SHA-512 webhook signature untuk memastikan status pesanan akurat.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Pelacakan Resi & Ingestion Katalog</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Integrasi pelacakan nomor resi pengiriman kurir (J&T, SiCepat, JNE) serta fitur import katalog produk massal dari file Excel/CSV dengan validasi skema Zod.</p>
            </div>
          </div>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/ruang/1.png`,
              `${BASE_PATH}/ruang/2.png`,
              `${BASE_PATH}/ruang/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "yama-alpine",
    category: "Outdoor Storefront",
    title: "YAMA",
    src: "/assets/projects-screenshots/yama/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://github.com/nawafnaofal/sec-ecommerce",
    github: "https://github.com/nawafnaofal/sec-ecommerce",
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.node,
      ],
    },
    get content() {
      return (
        <div>
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            E-Commerce Storefront
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Storefront e-commerce perlengkapan outdoor berbasis Next.js 16, React 19, Tailwind CSS v4, dan Framer Motion. Mengimplementasikan tipografi kinetik yang bertransisi ke navbar saat di-scroll, footer reveal, drawer keranjang belanja reaktif, serta simulasi alur pembayaran QRIS dan Virtual Account.
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Tipografi Kinetik & Penyesuaian Kontras</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Font variabel kustom yang bertransformasi proporsional dari hero center ke bilah navigasi 108px seiring scroll, dengan penyesuaian warna otomatis terhadap kontras latar belakang.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Transisi Curtain Reveal Footer</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Struktur footer sticky-fixed setinggi layar di lapisan terbawah layout untuk menghasilkan transisi reveal fisik saat konten utama selesai di-scroll.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Drawer Keranjang Belanja Reaktif</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Manajemen state keranjang dengan kalkulasi subtotal dan pajak secara langsung, mutasi jumlah barang, serta sinkronisasi indikator keranjang tanpa re-render berlebih.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Simulasi Pembayaran Indonesia</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Alur transaksi mencakup Dynamic QRIS dengan timer hitung mundur, Virtual Account bank nasional (BCA, Mandiri, BRI, BNI) dengan salin nomor sekali klik, dan form pengiriman.</p>
            </div>
          </div>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/yama/1.png`,
              `${BASE_PATH}/yama/2.png`,
              `${BASE_PATH}/yama/3.png`,
              `${BASE_PATH}/yama/4.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "gajihub",
    category: "Full-Stack Web & HRIS Platform",
    title: "Gaji-Hub: Smart HRIS & Payroll Platform",
    src: "/assets/projects-screenshots/gajihub/1.png",
    screenshots: ["1.png"],
    live: "https://github.com/nawafnaofal/gaji-hub",
    github: "https://github.com/nawafnaofal/gaji-hub",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.inertia,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.laravel,
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.mysql,
      ],
    },
    get content() {
      return (
        <div>
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Full-Stack Application
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Platform HRIS dan Payroll untuk mengelola administrasi karyawan. Dibangun menggunakan <strong>React + Inertia.js</strong> di frontend dan <strong>Laravel + MySQL</strong> di backend untuk menghadirkan alur kerja reaktif tanpa reload halaman penuh.
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Presensi GPS & Validasi Kamera</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Pencatatan kehadiran berbasis radius koordinat GPS kantor serta verifikasi foto selfie langsung dari perangkat.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Kalkulasi Payroll & Pajak</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Perhitungan gaji bulanan otomatis, pemotongan skema TER PPh 21, iuran BPJS, lembur, dan ekspor slip gaji format PDF.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Navigasi Reaktif (Inertia.js)</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Menghubungkan routing Laravel dengan komponen React tanpa reload halaman, menjaga performa tetap responsif.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Manajemen Hak Akses (Role-based)</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Pemisahan hak akses bertingkat (Admin, HR, dan Karyawan) dengan pengamanan data sensitif dan pencatatan riwayat aktivitas.</p>
            </div>
          </div>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/gajihub/1.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "j-forces",
    category: "Corporate Web Portal & Content Management",
    title: "J-FORCES Group - Media Hub & Corporate Portal",
    src: "/assets/projects-screenshots/jforces/1.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://j-forces.co.id/",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.laravel,
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.mysql,
      ],
    },
    get content() {
      return (
        <div>
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-red-500/10 text-red-400 border border-red-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            Headless Architecture
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Portal pusat media resmi untuk grup industri pertahanan nasional (PT RAMA, PT JBNP, dan PT AMSA). Menggunakan arsitektur terpisah antara antarmuka (React + Vite) dan backend <strong>Laravel REST API & MySQL</strong> untuk publikasi artikel, pengujian produk, serta profil perusahaan.
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Backend REST API & Autentikasi</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Manajemen konten berita dan upload media terlindungi autentikasi token untuk mencegah manipulasi data dari luar.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Portal Ekosistem Multi-Perusahaan</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Navigasi terpadu yang menghubungkan portal induk secara konsisten ke seluruh subdomain anak perusahaan.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Optimasi Aset & Desain Responsif</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Kompresi gambar dan pembagian bundle script modular untuk menjaga waktu muat tetap cepat di berbagai resolusi layar.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Struktur Metadata & SEO</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Konfigurasi tag OpenGraph, data terstruktur, dan sitemap otomatis untuk mempermudah pengindeksan mesin pencari.</p>
            </div>
          </div>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/jforces/1.png`,
              `${BASE_PATH}/jforces/2.png`,
              `${BASE_PATH}/jforces/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "rama-defense",
    category: "Interactive 3D Web & Military Defense Catalog",
    title: "PT Ridho Agung Mitra Abadi (RAMA)",
    src: "/assets/projects-screenshots/rama/1.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://rama.j-forces.co.id/",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.threejs,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.vite,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Interactive 3D Web
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Katalog perlengkapan pertahanan militer dengan inspeksi model 3D real-time menggunakan <strong>Three.js / WebGL</strong>. Pengunjung dapat memeriksa geometri helm balistik berstandar internasional (NIJ 0101.06) dari berbagai sudut pandang.
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Kontrol Rotasi 3D 360°</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Interaksi drag, rotasi, dan zoom dilengkapi damping inersia untuk kendali kamera yang terkontrol dan stabil.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Material PBR & Tekstur Balistik</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Pemanfaatan Physically Based Rendering untuk menampilkan refleksi cahaya, serat pelindung balistik, dan detail permukaan alat.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Optimasi Model 3D (60 FPS)</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Reduksi poligon dan kompresi tekstur aset 3D agar waktu muat ringkas dan rendering stabil pada 60 FPS.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Sinkronisasi Spesifikasi Teknis</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Penyajian ringkas data kaliber proteksi uji balistik dan bobot helm yang terhubung dengan sudut pandang model.</p>
            </div>
          </div>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/rama/1.png`,
              `${BASE_PATH}/rama/2.png`,
              `${BASE_PATH}/rama/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "jbnp-vehicles",
    category: "Interactive 3D Simulation & Armored Vehicles",
    title: "PT Jala Berikat Nusantara Perkasa (JBNP)",
    src: "/assets/projects-screenshots/jbnp/1.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://jbnp.j-forces.co.id/",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.threejs,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.vite,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-red-500/10 text-red-400 border border-red-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            Real-Time 3D Showcase
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Katalog digital dan tampilan 3D interaktif armada kendaraan taktis dan khusus (Garuda UN dan ILSV). Pengguna dapat melihat detail eksterior kendaraan dan menguji arah sumber cahaya matahari secara langsung.
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Kontrol Pencahayaan & Bayangan</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Slider sudut elevasi dan rotasi matahari untuk mengamati perilaku bayangan bodi kendaraan di atas permukaan tanah.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Manajemen Memori WebGL</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Pembersihan buffer geometri dan tekstur GPU saat pergantian tipe kendaraan untuk mencegah kebocoran memori browser.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Penyesuaian Level Detail Grafis</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Resolusi shadow map dan sampling render yang menyesuaikan kapabilitas GPU perangkat pengguna secara otomatis.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Panel Spesifikasi & Galeri Pengujian</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Informasi spesifikasi mesin, proteksi pelat baja, konfigurasi transmisi penggerak, serta galeri uji coba medan.</p>
            </div>
          </div>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/jbnp/1.png`,
              `${BASE_PATH}/jbnp/2.png`,
              `${BASE_PATH}/jbnp/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "amsa-precision",
    category: "Interactive 3D Virtual Tour & Precision Engineering",
    title: "PT Anugerah Mekanika Sukses Abadi (AMSA)",
    src: "/assets/projects-screenshots/amsa/1.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://amsa.j-forces.co.id/",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.threejs,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.vite,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Virtual 3D Factory Tour
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Showroom virtual 3D yang menampilkan hanggar pabrik manufaktur komponen presisi untuk sektor pertahanan. Memadukan grafis <strong>Three.js</strong> dengan pergerakan kamera sinematik untuk menelusuri stasiun kerja mesin CNC (HAAS ST-20Y).
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Rekonstruksi 3D Hanggar Pabrik</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Visualisasi spasial 3D mencakup struktur overhead crane, tata letak workstation pabrik, dan pencahayaan industrial.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Navigasi Kamera Antar Mesin</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Perpindahan sudut pandang kamera terarah saat pengunjung memilih stasiun kerja mesin turning, turn-mill, maupun 5-axis.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Pengukuran Presisi Mikron (CMM)</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Informasi teknis mesin Coordinate Measuring Machine yang menguji toleransi dimensi mikron (hingga 0,15 μm).</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Antarmuka Kontrol & HUD</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Overlay antarmuka bertema industrial yang ringan diakses dan disesuaikan untuk berbagai ukuran monitor.</p>
            </div>
          </div>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/amsa/1.png`,
              `${BASE_PATH}/amsa/2.png`,
              `${BASE_PATH}/amsa/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "uncharted-land-of-horror",
    category: "2D Top-Down Adventure & Psychological Horror Game",
    title: "Uncharted Land of Horror",
    src: "/assets/projects-screenshots/uncharted/1.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://shoshinsha-game.itch.io/uncharted-land-of-horror",
    skills: {
      frontend: [
        PROJECT_SKILLS.unity,
        PROJECT_SKILLS.csharp,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-red-500/10 text-red-400 border border-red-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            Lead Programmer • Game Jam
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Game petualangan horor psikologis <strong>2D Top-Down Pixel Art</strong> yang dikembangkan bersama tim <strong>Shoshinsha Game</strong> dalam program <em>Infinite Learning Game Batch 5</em>. Berperan sebagai Lead Programmer mengimplementasikan controller pemain, logika dialog, dan sistem interaksi entitas.
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Logika Karakter & Input Controller (C#)</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Pergerakan top-down 8 arah, penanganan input pemain, dan sistem deteksi interaksi objek lingkungan.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Sistem Dialog & Trigger Event</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Implementasi alur narasi dialog modular yang terhubung dengan trigger event dan petunjuk eksplorasi teka-teki.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Manajemen AI Musuh & Kolisi</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Deteksi dan pengejaran karakter menggunakan collider 2D, raycast boundary, dan mekanisme trigger puzzle.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Pengelolaan Game State & Transisi Scene</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Arsitektur state permainan (Pause, Inventory, Checkpoint, Game Over) serta transisi scene dan audio latar.</p>
            </div>
          </div>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/uncharted/1.png`,
              `${BASE_PATH}/uncharted/2.png`,
              `${BASE_PATH}/uncharted/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "journal-e-commerce-laravel",
    category: "Published Scientific Journal • JOMLAI",
    title: "Development of E-Commerce Information System at Az-Zahra Shop Using Laravel Framework",
    src: "/assets/projects-screenshots/jomlai-journal-cover.png",
    screenshots: ["jomlai-journal-cover.png"],
    live: "https://journal.literasisains.id/index.php/jomlai/article/view/176",
    skills: {
      frontend: [
        PROJECT_SKILLS.laravel,
        PROJECT_SKILLS.php,
      ],
      backend: [
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.research,
      ],
    },
    get content() {
      return (
        <div>
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            First Author • Peer-Reviewed Journal • DOI: 10.55123/jomlai.v1i1.176
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Artikel ilmiah pada <strong>JOMLAI: Journal of Machine Learning and Artificial Intelligence</strong> (Vol. 1, No. 1, 2022). Penelitian membahas perancangan sistem informasi e-commerce berbasis arsitektur MVC dengan framework Laravel untuk proses bisnis retail furnitur Az-Zahra Shop.
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Arsitektur MVC Laravel</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Pemisahan logika aplikasi, relasi database Eloquent ORM, dan blade template untuk kebutuhan transaksi ritel.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Manajemen Inventaris & Order</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Pencatatan ketersediaan stok furnitur, validasi pemesanan pelanggan, dan rekapitulasi data penjualan periodik.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Autentikasi & Validasi Transaksi</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Proteksi CSRF token, hashing password, dan middleware otorisasi multi-role (Admin dan Pelanggan).</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Indeksasi Jurnal & Identifikasi DOI</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Penulis pertama (Nawaf Naofal dkk.) dengan akses naskah lengkap Full-Text PDF dan sitasi ilmiah resmi.</p>
            </div>
          </div>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
  {
    id: "journal-ddos-adaboost",
    category: "Published Scientific Journal • Simpatik (UBSI)",
    title: "Identifikasi Serangan Low-rate DDoS Dalam Jaringan Menggunakan Algoritma AdaBoost",
    src: "/assets/projects-screenshots/simpatik-journal-cover.png",
    screenshots: ["simpatik-journal-cover.png"],
    live: "https://jurnal.bsi.ac.id/index.php/simpatik/article/view/1829",
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.scikitlearn,
      ],
      backend: [
        PROJECT_SKILLS.research,
      ],
    },
    get content() {
      return (
        <div>
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Co-Author • Jurnal Simpatik (UBSI) • DOI: 10.31294/simpatik.v3i1.1829
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Riset keamanan jaringan pada <strong>Jurnal Simpatik (Sistem Informasi dan Informatika)</strong> Vol. 3 No. 1 (2023). Menganalisis deteksi serangan siber Distributed Denial of Service jenis <em>Low-rate DDoS</em> yang sulit diidentifikasi firewall konvensional menggunakan algoritma ensemble <strong>AdaBoost</strong>.
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Analisis Pola Serangan Low-rate DDoS</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Pemeriksaan profil lalu lintas data kecepatan rendah yang menyerupai pola pengguna normal untuk membebani server target.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Klasifikasi dengan Model AdaBoost</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Penerapan model ensemble boosting dengan bobot adaptif untuk meningkatkan akurasi deteksi paket anomali.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Ekstraksi Fitur & Evaluasi Metrik</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Preprocessing dataset lalu lintas jaringan, evaluasi Confusion Matrix, Precision, Recall, dan F1-Score.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Kolaborasi Riset & Publikasi</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Penulisan bersama (M. Ilman Aqilaa, Diash Firdaus, Nawaf Naofal) untuk metode pertahanan jaringan berbantuan machine learning.</p>
            </div>
          </div>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
  {
    id: "book-golang-pemula",
    category: "Published National Book • Buku Pedia",
    title: "Pemrograman Golang Untuk Pemula: Pengolahan Dataset",
    src: "/assets/projects-screenshots/golang-book-banner.png",
    screenshots: ["golang-book-banner.png"],
    live: "https://bacabuku.com/book/BK87541/teknik-informatika-pemrograman-golang-untuk-pemula-pengolahan-dataset",
    skills: {
      frontend: [
        PROJECT_SKILLS.go,
      ],
      backend: [
        PROJECT_SKILLS.research,
      ],
    },
    get content() {
      return (
        <div>
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Co-Author • ISBN: 978-623-88549-3-6 • Penerbit: Buku Pedia
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Buku referensi pemrograman terbitan <strong>Buku Pedia</strong> yang didistribusikan di platform <strong>Bacabuku</strong>. Ditulis bersama Muhammad Ilman Aqilaa dan Rolly Maulana Awangga, membahas penggunaan bahasa Go untuk manipulasi, pembersihan, dan analisis dataset.
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Sintaks Dasar & Struktur Data Go</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Pembahasan konfigurasi environment, tipe data, struct, function, dan package management dalam ekosistem Go.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Pipeline Pemrosesan Dataset</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Metode parsing, filtering, dan transformasi data dari berbagai format file seperti CSV, JSON, serta query database.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Komputasi Concurrency (Goroutine)</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Pemanfaatan Goroutines dan Channels untuk komputasi analitik paralel yang efisien dalam penggunaan memori.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Publikasi Ber-ISBN & Distribusi</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Buku ber-ISBN resmi yang ditujukan bagi akademisi, mahasiswa informatika, maupun praktisi developer.</p>
            </div>
          </div>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
  {
    id: "book-laravel-vue",
    category: "Published National Book • Gramedia Digital",
    title: "Toko Online dengan Laravel dan Vue.js",
    src: "/assets/projects-screenshots/laravel-vue-book-banner.png",
    screenshots: ["laravel-vue-book-banner.png"],
    live: "https://ebooks.gramedia.com/id/buku/toko-online-dengan-laravel-dan-vue-js",
    skills: {
      frontend: [
        PROJECT_SKILLS.vue,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.laravel,
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.mysql,
      ],
    },
    get content() {
      return (
        <div>
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-400 border border-purple-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Co-Author • Gramedia Digital • Penerbit: Buku Pedia
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Buku panduan pengembangan web full-stack terbitan <strong>Buku Pedia</strong> yang tersedia di <strong>Gramedia Digital</strong>. Ditulis bersama Fadil Febriansyah, Woro Isti Rahayu, dan Noviana Riza, membedah implementasi aplikasi toko online SPA dengan Laravel dan Vue.js.
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Arsitektur Full-Stack E-Commerce</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Penggabungan backend REST API Laravel dengan komponen antarmuka reaktif berbasis Vue.js.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">State Manajemen Keranjang & Checkout</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Pengelolaan state belanja keranjang, kalkulasi ongkos kirim, dan alur pembayaran digital.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Dashboard Admin & Manajemen Produk</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Panel admin untuk pengelolaan kategori produk, stok inventaris barang, upload foto, dan ringkasan pesanan.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">Distribusi Digital Gramedia</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Buku referensi praktis bagi pengembang yang mempelajari integrasi Laravel dan Vue.js secara terstruktur.</p>
            </div>
          </div>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
];
export default projects;
