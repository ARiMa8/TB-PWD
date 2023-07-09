import React, { useState } from 'react';

const ContactUs = () => {
  const [faq, setFaq] = useState([
    { question: '1. Bagaimana sejarah singkat Pulau Seribu?', answer: 'Pulau Seribu telah dihuni sejak zaman prasejarah oleh suku pesisir seperti suku Betawi dan suku Jawa. Pulau-pulau ini memiliki peran penting dalam sejarah maritim dan perdagangan di wilayah Jakarta. Pada akhir abad ke-20, Pulau Seribu mulai dikembangkan sebagai tujuan wisata. Pemerintah dan pengusaha pariwisata mengenali potensi alaminya yang indah, dengan pantai berpasir putih, terumbu karang, dan kehidupan laut yang kaya. Pulau-pulau ini menjadi populer sebagai tempat liburan dan penyelaman.', isOpen: false },
    { question: '2. Siapakah yang mengelola wisata Pulau Seribu?', answer: 'Wisata Pulau Seribu dikelola oleh berbagai pihak, termasuk pemerintah dan sektor swasta. Di antaranya, pemerintah daerah, dinas pariwisata, perusahaan pariwisata, komunitas lokal, dan organisasi lingkungan.', isOpen: false },
    { question: '3. Apakah ada fasilitas akomodasi di Pulau Seribu?', answer: 'Di Pulau Seribu, terdapat berbagai jenis akomodasi seperti resort, hotel, cottage, bungalow, homestay, serta fasilitas perkemahan atau tenda untuk pilihan penginapan yang lebih murah.', isOpen: false },
    { question: '4. Kapan waktu terbaik untuk mengunjungi Pulau Seribu?', answer: 'Waktu terbaik untuk mengunjungi Pulau Seribu adalah selama musim kemarau, yang berlangsung antara bulan April hingga Oktober. Pada periode ini, cuaca di Pulau Seribu cenderung cerah dengan sedikit hujan, dan lautnya relatif tenang. Hal ini memungkinkan Anda menikmati aktivitas snorkeling, menyelam, berenang, dan menjelajahi pulau-pulau dengan lebih nyaman.', isOpen: false },
    { question: '5. Apakah ada peraturan khusus yang harus diikuti saat berkunjung ke Pulau Seribu?', answer: 'Saat berkunjung ke Pulau Seribu, ada beberapa peraturan yang perlu diikuti, seperti memiliki izin masuk, membayar biaya pariwisata, menjaga kebersihan, tidak merusak terumbu karang, mengikuti instruksi keamanan, tidak merusak fasilitas umum, dan menghormati kehidupan lokal.', isOpen: false },
  ]);

  const toggleFAQ = (index) => {
    setFaq((prevState) => {
      const updatedFaq = prevState.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            isOpen: !item.isOpen
          };
        }
        return item;
      });
      return updatedFaq;
    });
  };


  return (
    <div className="bg-slate-100 flex flex-col items-center mt-36">
      <br></br>
      <h1 className="font-Paytone text-4xl">VISIT US!</h1><br></br><br></br>
      <div className="flex justify-center items-center w-screen">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1825860127924!2d106.82116936006554!3d-6.370412393593145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec1cabb59bdf%3A0x28b4f84e4677f329!2sPoliteknik%20Negeri%20Jakarta!5e0!3m2!1sid!2sid!4v1688712492673!5m2!1sid!2sid" width="1200" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="w-full lg:w-3/4 pr-8">
        <br></br><br></br><br></br>
        <h2 className="text-center text-2xl font-bold mb-4 font-Poppins">FAQ</h2>
        {faq.map((item, index) => (
          <div key={index} className="bg-sky-300 faq-container font-Poppins">
            <div className="flex items-center font-Poppins">
              <button
                className="faq-toggle font-Poppins"
                onClick={() => toggleFAQ(index)}
              >
                {item.isOpen ? '-' : '+'}
              </button>
              <p className="faq-question font-Poppins">{item.question}</p>
            </div>
            {item.isOpen && <p className="faq-answer font-Poppins">{item.answer}</p>}
          </div>
        ))}
      </div>

      <br></br><br></br>

      <div class="container mx-auto py-8">
        <div class="max-w-md mx-auto bg-sky-300 p-8 border rounded shadow">
          <h2 class="text-2xl font-Paytone mb-4">Apakah ada Kritik dan Saran?</h2>
          <p class="text-10px font-Paytone mb-4">Tulis kritik dan saran mu dibawah ini!</p>
          <form id="feedbackForm">
            <div class="mb-4">
              <label for="name" class="block text-gray-700 font-bold font-Poppins mb-2">Nama:</label>
              <input type="text" id="name" name="name" class="form-input border border-slate-300 rounded-md w-full" required></input>
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700 font-bold font-Poppins mb-2">Email:</label>
              <input type="email" id="email" name="email" class="form-input border border-slate-300 rounded-md w-full" required></input>
            </div>
            <div class="mb-4">
              <label for="message" class="block text-gray-700 font-bold font-Poppins mb-2">Pesan:</label>
              <textarea id="message" name="message" class="form-textarea rounded-md border border-slate-300 w-full h-24" required></textarea>
            </div>
            <div class="flex justify-end">
              <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded font-Poppins">
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>

      <br></br><br></br>
      <h1 className="font-Poppins text-4xl font-bold">OUR CONTACTS</h1>
      <div className="w-full mt-8 flex justify-center items-center mr-2 ml-2">
        <div className="bg-sky-300 border p-8 mr-10 border-blue-500">
          <div className="flex flex-col items-center">
            <div className="bg-bl-200 rounded-full w-32 h-48 mb-2">
              <img src="https://cdn.discordapp.com/attachments/1127147313048072213/1127147785632886875/sissyyy.jpeg" alt="Foto" className="rounded-full w-full h-full" />
            </div>
            <h3 className="text-lg font-bold">Syifa Azzahirah</h3>
            <div className="flex items-center mt-4">
              <a href="https://wa.me/+6281299416815" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.discordapp.com/attachments/1127147313048072213/1127165470257197106/WAaaa.png" alt="WhatsApp" className="w-6 h-6 mr-2" />
              </a>
              <p>+62 812-9941-6815</p>
            </div>
            <div className="flex items-center mt-4">
              <a href="azzahirahsyifa1@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.discordapp.com/attachments/1127147313048072213/1127165558631186452/Gmailllll.PNG" alt="Instagram" className="w-6 h-6 mr-2" />
              </a>
              <p>azzahirahsyifa1@gmail.com</p>
            </div>
            <div className="flex items-center mt-4">
              <a href="https://www.linkedin.com/in/syifa-azzahirah-43432a24a" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.discordapp.com/attachments/1127147313048072213/1127165629728829510/LinkedIn.PNG" alt="LinkedIn" className="w-6 h-6 mr-2" />
              </a>
              <p>https://www.linkedin.com/in/syifa-azzahirah-43432a24a</p>
            </div>
          </div>
        </div>

        <div className="bg-sky-300 border p-8 ml-10 border-blue-500">
          <div className="flex flex-col items-center mr-2 ml-2">
            <div className="bg-bl-200 rounded-full w-32 h-48 mb-2">
              <img src="https://cdn.discordapp.com/attachments/1086315786446061711/1127524410652377109/IMG_20230709_155726.jpg" alt="Foto" className="rounded-full w-full h-full" />
            </div>
            <h3 className="text-lg font-bold">Andi Rizki Mahesa</h3>
            <div className="flex items-center mt-4">
              <a href="https://wa.me/+6281384284306" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.discordapp.com/attachments/1127147313048072213/1127165470257197106/WAaaa.png" alt="WhatsApp" className="w-6 h-6 mr-2" />
              </a>
              <p>+62 813-8428-4306</p>
            </div>
            <div className="flex items-center mt-4">
              <a href="andimahesa100@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.discordapp.com/attachments/1127147313048072213/1127165558631186452/Gmailllll.PNG" alt="Instagram" className="w-6 h-6 mr-2" />
              </a>
              <p>andimahesa100@gmail.com</p>
            </div>
            <div className="flex items-center mt-4">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.discordapp.com/attachments/1127147313048072213/1127165629728829510/LinkedIn.PNG" alt="LinkedIn" className="w-6 h-6 mr-2" />
              </a>
              <p>https://www.linkedin.com/in/andi-mahesa-48482a24a</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-blue-600 py-8 w-full">
        <div className="container mx-auto text-center text-black font-Poppins font-bold">
          <h1 className="text-lg">"Your Smile Is The Greatest Joy For Us."</h1>
        </div>
      </footer>

    </div>
  );
};

export default ContactUs;
