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
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Full-Stack Application
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Platform HRIS dan Payroll modern untuk mengelola administrasi karyawan secara otomatis, akurat, dan terintegrasi. Dibangun menggunakan <strong>React + Inertia.js</strong> di sisi frontend dan <strong>Laravel + MySQL</strong> di sisi backend untuk menghadirkan pengalaman navigasi instan tanpa reload.
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">📍 Presensi GPS & Validasi Kamera</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Pencatatan kehadiran presisi dengan radius lokasi kantor berbasis koordinat GPS serta verifikasi foto selfie langsung dari perangkat karyawan.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">💰 Payroll & Kalkulasi Pajak Otomatis</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Otomasi perhitungan gaji bulanan, potongan TER PPh 21, iuran BPJS, lembur, serta ekspor slip gaji digital berformat PDF.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">⚡ Alur Kerja Reaktif (Inertia.js)</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Integrasi seamless antara backend Laravel dan UI React, menghasilkan transisi halaman yang cepat dan performa responsif di desktop maupun mobile.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">🛡️ Manajemen Hak Akses & Data Aman</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Pengaturan multi-level role (Admin, HR, dan Karyawan) dengan proteksi data sensitif dan riwayat transaksi yang terdokumentasi rapi.</p>
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
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            Headless / Decoupled Architecture
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Portal utama dan pusat media digital resmi untuk grup industri pertahanan nasional (PT RAMA, PT JBNP, dan PT AMSA). Menggunakan arsitektur <strong>Decoupled</strong> yang menghubungkan frontend interaktif (React + Vite) dengan backend terproteksi berbasis <strong>Laravel REST API & MySQL</strong> untuk publikasi berita, dokumentasi pengujian, dan profil holding.
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">🔗 Backend REST API & Autentikasi Aman</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Backend Laravel dengan autentikasi berbasis token untuk pengelolaan rilis berita, upload media, dan pengamanan endpoint dari akses tidak sah.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">🌐 Gerbang Ekosistem Multi-Perusahaan</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Navigasi terintegrasi yang menghubungkan portal holding secara mulus ke seluruh subdomain anak perusahaan (rama, jbnp, amsa.j-forces.co.id).</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">⚡ Performa Cepat & Desain Responsif</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Optimasi aset gambar dan script modular sehingga halaman dapat dimuat dalam waktu kurang dari satu detik dengan tampilan presisi di semua resolusi layar.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">🔍 SEO & Struktur Konten Optimal</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Penerapan metadata OpenGraph, schema terstruktur, dan sitemap otomatis untuk visibilitas maksimal serta kemudahan indeks di Google.</p>
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
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Interactive 3D Web Experience
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Website profil dan katalog taktis militer yang dilengkapi fitur inspeksi 3D interaktif real-time menggunakan <strong>Three.js / WebGL</strong>. Pengguna dapat melihat secara detail geometri helm balistik standar internasional (NIJ 0101.06) dari berbagai sudut dengan pencahayaan realistis.
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">🔄 Kontrol 3D Rotasi 360° yang Halus</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Fitur drag, rotate, dan zoom dengan peredam inersia (smooth damping) untuk navigasi model 3D yang stabil dan intuitif.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">✨ Tekstur Realistis & Simulasi Material</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Penerapan material PBR untuk menampilkan kilau, serat pelindung balistik, dan detail komponen perlengkapan taktis secara nyata.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">🚀 Optimasi Model 3D Ringan (60 FPS)</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Kompresi ukuran file 3D agar cepat dimuat di peramban web dan tetap berjalan lancar pada 60 frame per detik di desktop maupun laptop.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">📋 Spesifikasi Teknis yang Interaktif</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Penyajian informasi spesifikasi uji balistik (level proteksi kaliber peluru dan bobot) yang tersinkronisasi rapi dengan tampilan produk.</p>
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
            <span className="w-2 h-2 rounded-full bg-red-400" />
            Real-Time 3D Vehicle Showcase
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Katalog digital dan simulasi 3D untuk armada kendaraan tempur lapis baja (Rantis & Ransus). Pengguna dapat mengeksplorasi kendaraan taktis seperti Garuda UN dan ILSV lengkap dengan pengaturan simulasi arah cahaya matahari serta bayangan yang dinamis.
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">☀️ Simulasi Arah Cahaya & Bayangan Lembut</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Slider sudut cahaya interaktif untuk mengubah arah pencahayaan matahari secara real-time disertai bayangan realistis di permukaan tanah.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">🔄 Pembersihan Memori GPU Otomatis</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Sistem pengelolaan memori WebGL yang membersihkan aset grafis saat berpindah model kendaraan, menjaga browser tetap ringan dan bebas lag.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">🎯 Penyesuaian Kualitas Grafis Otomatis</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Kualitas rendering dan ketajaman bayangan dapat beradaptasi dengan spesifikasi perangkat pengguna agar pengalaman eksplorasi tetap mulus.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">🛡️ Panel Spesifikasi Taktis & Galeri Detail</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">HUD interaktif untuk melihat data performa mesin, ketebalan baja pelindung, sistem penggerak roda, dan foto pengujian lapangan.</p>
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
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Virtual 3D Factory Experience
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Showroom virtual 3D yang menampilkan hanggar pabrik manufaktur komponen presisi tinggi untuk sektor pertahanan dan industri. Memadukan grafis <strong>Three.js</strong> dengan pergerakan kamera sinematik untuk menjelajahi unit mesin CNC kelas dunia (HAAS ST-20Y).
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">🏭 Rekonstruksi Hanggar Pabrik Realistis</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Visualisasi spasial 3D menyeluruh mencakup struktur overhead crane, tata letak area kerja pabrik, dan pencahayaan industrial modern.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">📹 Kamera Navigasi Sinematik Antar Mesin</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Perpindahan sudut pandang kamera yang mulus saat pengguna memilih stasiun kerja mesin CNC turning, turn-mill, maupun 5-axis.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">🔬 Visualisasi Akurasi Presisi Ekstrem (CMM)</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Penyajian informasi mesin pengukur CMM (Coordinate Measuring Machine) yang mampu menguji ketelitian mikron (hingga 0,15 μm).</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">⚡ Antarmuka Modern & Akses Cepat</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Tampilan HUD bernuansa modern industrial yang ringan diakses dan nyaman digunakan di berbagai ukuran layar monitor.</p>
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
            <span className="w-2 h-2 rounded-full bg-red-400" />
            Lead Programmer • Game Jam Entry
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Game petualangan horor psikologis <strong>2D Top-Down Pixel Art</strong> yang dikembangkan bersama tim <strong>Shoshinsha Game</strong> dalam program <em>Infinite Learning Game Batch 5</em>. Menceritakan Aya, seorang pengusir iblis (exorcist) yang menjelajahi pulau misterius penuh misteri dan manipulasi entitas gaib.
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">🎮 Core Gameplay & Controller Logic (C#)</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Arsitektur pergerakan karakter top-down 8 arah yang responsif, penanganan input pemain, dan sistem interaksi objek lingkungan.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">🧩 Dialog System & Quest Trigger Event</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Implementasi sistem narasi dialog modular yang tersinkronisasi dengan event trigger, branching alur cerita, dan petunjuk eksplorasi.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">👻 AI Entity & Collision Management</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Logika deteksi dan pergerakan entitas musuh dalam mengejar pemain menggunakan 2D collider, boundary check, dan sistem trigger puzzle.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">💾 Game State & Scene Transition</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Sistem state management game (Pause, Inventory, Checkpoint, Game Over, dan New Game) serta transisi audio/visual yang atmosferik.</p>
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
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            First Author • Peer-Reviewed Journal • DOI: 10.55123/jomlai.v1i1.176
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Artikel ilmiah yang diterbitkan pada <strong>JOMLAI: Journal of Machine Learning and Artificial Intelligence</strong> (Vol. 1, No. 1, 2022). Penelitian ini berfokus pada perancangan dan implementasi sistem informasi e-commerce berbasis arsitektur MVC (Model-View-Controller) dengan framework Laravel untuk mendigitalisasi proses bisnis retail furnitur Az-Zahra Shop.
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">🏛️ Arsitektur MVC & Clean Code Laravel</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Pemisahan logika bisnis, data model Eloquent ORM, dan antarmuka dinamis untuk skalabilitas sistem transaksi retail.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">📦 Manajemen Inventaris & Order Real-Time</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Otomasi pelacakan ketersediaan stok furnitur, validasi transaksi konsumen, dan rekapitulasi data penjualan periodik.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">🔒 Keamanan Autentikasi & Validasi Transaksi</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Penerapan proteksi CSRF token, hashing password bertingkat, dan middleware otorisasi multi-role (Admin & Customer).</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">📄 Publikasi Terindeks & DOI Terverifikasi</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Penulis pertama (Nawaf Naofal dkk.) dengan akses naskah lengkap (Full-Text PDF) dan metadata sitasi ilmiah terstandar.</p>
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
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Co-Author / Researcher • Jurnal Simpatik (UBSI) • DOI: 10.31294/simpatik.v3i1.1829
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Riset keamanan jaringan yang dipublikasikan pada <strong>Jurnal Simpatik (Jurnal Sistem Informasi dan Informatika)</strong> Vol. 3 No. 1 (2023). Mengkaji deteksi serangan siber Distributed Denial of Service jenis <em>Low-rate DDoS</em> yang sulit dideteksi oleh firewall konvensional dengan memanfaatkan algoritma ensemble learning <strong>AdaBoost</strong>.
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">🛡️ Deteksi Anomali Low-rate DDoS</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Analisis pola lalu lintas data jaringan berkecepatan rendah yang meniru perilaku pengguna normal untuk melumpuhkan server target.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">🤖 Algoritma Ensemble AdaBoost</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Pengembangan model klasifikasi boosting dengan adaptive weight updating guna meningkatkan akurasi identifikasi paket berbahaya.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">📊 Ekstraksi Fitur & Evaluasi Metrik</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Preprocessing dataset lalu lintas jaringan, evaluasi Confusion Matrix, Precision, Recall, dan F1-Score pada simulasi serangan.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">📑 Kontribusi Akademik SINTA / UBSI</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Kolaborasi riset (M. Ilman Aqilaa, Diash Firdaus, Nawaf Naofal) untuk solusi pertahanan siber otomatis berbasis AI.</p>
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
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Co-Author • ISBN: 978-623-88549-3-6 • Penerbit: Buku Pedia
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Buku referensi teknis yang diterbitkan oleh <strong>Penerbit Buku Pedia</strong> dan terdistribusi nasional di platform <strong>Bacabuku</strong>. Ditulis bersama Muhammad Ilman Aqilaa dan Rolly Maulana Awangga, buku ini memandu pembaca pemula hingga mahir dalam mengeksplorasi efisiensi bahasa Go untuk manipulasi, pembersihan, dan analisis dataset berskala besar.
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">🚀 Fundamental Ekosistem & Sintaks Go</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Panduan terstruktur mulai dari environment setup, memory safety, struct, function, hingga package management Go modern.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">📊 Pipeline Pengolahan Dataset Praktis</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Teknik membaca, memfilter, mentransformasi, dan parsing data dari berbagai format (CSV, JSON, dan database stream).</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">⚡ Concurrency & Analisis Data Berkecepatan Tinggi</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Pemanfaatan Goroutines dan Channels untuk komputasi analitik data paralel dengan latensi sangat rendah.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">📚 ISBN Resmi & Distribusi Digital Nasional</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Buku referensi resmi ber-ISBN yang ditujukan bagi akademisi, mahasiswa informatika, dan developer profesional.</p>
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
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            Co-Author • Gramedia Digital • Penerbit: Buku Pedia
          </div>
          <TypographyP className="font-mono text-base mb-4 leading-relaxed">
            Buku panduan pengembangan aplikasi web modern full-stack yang diterbitkan oleh <strong>Penerbit Buku Pedia</strong> dan tersedia resmi di <strong>Gramedia Digital</strong>. Ditulis bersama Fadil Febriansyah, Woro Isti Rahayu, dan Noviana Riza, membedah implementasi arsitektur SPA (Single Page Application) e-commerce interaktif dengan Laravel & Vue.js.
          </TypographyP>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">🛒 Arsitektur E-Commerce Full-Stack Modern</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Integrasi backend REST API Laravel yang tangguh dengan antarmuka dinamis komponen Vue.js yang reaktif.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">💳 Manajemen Keranjang & Checkout Interaktif</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Pengelolaan state belanja keranjang real-time, kalkulasi ongkos kirim, dan integrasi modul transaksi pembayaran.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">🎛️ Dashboard Administrasi & Manajemen Katalog</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Panel admin komprehensif untuk pengelolaan kategori barang, stok produk, multi-gambar, dan laporan pesanan.</p>
            </div>
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
              <h5 className="font-semibold text-white text-sm mb-1">📖 Terbitan Resmi di Gramedia Digital</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">Menjadi buku referensi praktis bagi developer yang ingin menguasai perpaduan dua teknologi web paling populer di industri.</p>
            </div>
          </div>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
];
export default projects;
