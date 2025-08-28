"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-white to-sky-100 text-gray-900">
      
      <nav className="w-full bg-pink-400 text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <h1 className="font-bold text-xl">🌸 Portofolio Saya</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:underline">Tentang</a>
          <a href="#skills" className="hover:underline">Skill</a>
          <a href="#projects" className="hover:underline">Project</a>
          <a href="#contact" className="hover:underline">Kontak</a>
        </div>
      </nav>

      
      <section className="flex flex-col items-center text-center py-20 px-6 relative">
        <img
          src="/profil v.png"
          alt="Foto Profil"
          className="w-40 h-40 rounded-full border-4 border-pink-300 shadow-lg object-cover"
        />
        <h2 className="text-4xl font-bold mt-6 text-sky-600">
          Halo 👋, Saya Vidilla Nuristina
        </h2>
        <p className="mt-4 text-lg max-w-xl text-gray-700">
          Kelas XI RPL A | Absen 34|20 oktober 2008|RPL|
        </p>
        <p className="mt-4 italic text-pink-500 max-w-xl">
          "Kalau coding butuh logika, aku butuh kamu biar hidupku nggak error ❤️"
        </p>
        <a
          href="#projects"
          className="mt-6 px-6 py-3 bg-sky-400 text-white rounded-full shadow-md hover:bg-sky-500 transition"
        >
          🎨 Lihat Project
        </a>
      </section>

      
      <section id="about" className="py-16 px-6 text-center bg-white">
        <h3 className="text-3xl font-bold text-pink-500">Tentang Saya</h3>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700">
          Saya seorang siswi jurusan Rekayasa Perangkat Lunak (RPL) 
          yang suka belajar hal baru di dunia teknologi. 
          Saya percaya bahwa coding itu seperti cinta, 
          kadang bikin pusing tapi selalu bikin rindu kalau ditinggalin. 💻💕
        </p>
      </section>

     
      <section id="skills" className="py-16 px-6 bg-sky-50 text-center">
        <h3 className="text-3xl font-bold text-sky-600">Skill</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="p-4 bg-white shadow rounded-xl">
            <img src="/html.png" alt="HTML" className="w-12 h-12 mx-auto" />
            <p className="mt-2">HTML</p>
          </div>
          <div className="p-4 bg-white shadow rounded-xl">
            <img src="/css.png" alt="CSS" className="w-12 h-12 mx-auto" />
            <p className="mt-2">CSS</p>
          </div>
          <div className="p-4 bg-white shadow rounded-xl">
            <img src="/Js.png" alt="JavaScript" className="w-12 h-12 mx-auto" />
            <p className="mt-2">JavaScript</p>
          </div>
          <div className="p-4 bg-white shadow rounded-xl">
            <img src="/nex.js.png" alt="Next.js" className="w-12 h-12 mx-auto" />
            <p className="mt-2">Next.js</p>
          </div>
          <div className="p-4 bg-white shadow rounded-xl">
            <img src="/python.png" alt="Python" className="w-12 h-12 mx-auto" />
            <p className="mt-2">Python</p>
          </div>
        </div>
      </section>

      
      <section id="projects" className="py-16 px-6 bg-white text-center">
        <h3 className="text-3xl font-bold text-pink-500">Project Saya</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-pink-100 rounded-xl shadow p-4">
            <img src="/hm1.png" alt="Project 1" className="rounded-lg" />
            <h4 className="text-xl font-semibold mt-4">Project 1</h4>
            <p className="text-gray-600">saat melaksanakan uprak day 1.</p>
          </div>
          <div className="bg-sky-100 rounded-xl shadow p-4">
            <img src="/hm2.png" alt="Project 2" className="rounded-lg" />
            <h4 className="text-xl font-semibold mt-4">Project 2</h4>
            <p className="text-gray-600">saat usai uprak.</p>
          </div>
          <div className="bg-pink-100 rounded-xl shadow p-4">
            <img src="/hm3.png" alt="Project 3" className="rounded-lg" />
            <h4 className="text-xl font-semibold mt-4">Project 3</h4>
            <p className="text-gray-600">saat cap 3 jari.</p>
          </div>
          <div className="bg-sky-100 rounded-xl shadow p-4">
            <img src="/hm4.png" alt="Project 4" className="rounded-lg" />
            <h4 className="text-xl font-semibold mt-4">Project 4</h4>
            <p className="text-gray-600">foto kenangan.</p>
          </div>
        </div>
      </section>

      
      <section id="contact" className="py-16 px-6 bg-sky-50 text-center">
        <h3 className="text-3xl font-bold text-sky-600">Kontak</h3>
        <p className="mt-4 text-gray-700">cari saya melalui:</p>
        <div className="mt-6 space-y-3">

          <p>📱 WhatsApp: 085803721579</p>
          <p>📸 Instagram: <a href="https://www.instagram.com/secc.vdyl4/profilecard/?igsh=N3J6bm9sbnFzNzNo" className="text-pink-500 hover:underline">@vidilla</a></p>
        </div>
      </section>

      
    </main>
  );
}