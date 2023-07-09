import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  return (
    <div className="bg-blue-200 mx-auto py-16 pt-36 text-center">
      <div className="flex justify-center">
        <h1 className="bg-gray-200 text-3xl text-center rounded-lg font-Poppins font-bold mb-6 inline-block px-4 py-2">
          VISIT OUR CUSTOMERS TOUR GALLERY
        </h1>
      </div>
      <div className="bg-gray-200 border rounded-2xl shadow-2xl p-4 mr-12 ml-12">
        <div className="p-4 mr-12 ml-12 grid grid-cols-5 gap-4">
          <div className="col-span-3 pt-16">
            <img
              style={{ width: '694px', height: '359px', flexShrink: 0, borderRadius:'20px' }}
              src="https://cdn.discordapp.com/attachments/1086315786446061711/1127277604328722572/nicholas-laisina-6pBm09OoYlU-unsplash.jpg"
              alt="A-KR1-1"
            />
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-2">
            <img
              style={{ width: '240px', height: '240px', flexShrink: 0, borderRadius:'20px' }}
              src="https://cdn.discordapp.com/attachments/1086315786446061711/1127209204017528852/WhatsApp-Image-2023-05-06-at-22.20.30-1024x768.jpeg"
              alt="A-KN1-1"
            />
            <img
              style={{ width: '240px', height: '240px', flexShrink: 0, borderRadius:'20px' }}
              src="https://cdn.discordapp.com/attachments/1086315786446061711/1127231250600562849/WhatsApp-Image-2023-05-06-at-22.20.30-1-1024x768.jpeg"
              alt="A-KN1-2"
            />
            <img
              style={{ width: '240px', height: '240px', flexShrink: 0, borderRadius:'20px' }}
              src="https://cdn.discordapp.com/attachments/1086315786446061711/1127231440829022308/3-3.jpg"
              alt="A-KN1-3"
            />
            <img
              style={{ width: '240px', height: '240px', flexShrink: 0, borderRadius:'20px' }}
              src="https://cdn.discordapp.com/attachments/1086315786446061711/1127231472823189554/wisata-pulau-pantara-resort.jpg"
              alt="A-KN1-4"
            />
          </div>
        </div>

        <br></br><br></br><br></br><br></br><br></br><br></br>

        <div className="col-span-6 grid grid-cols-3 gap-8 pl-8">
          <img
            style={{ width: '340px', height: '340px', flexShrink: 0, borderRadius:'20px' }}
            src="https://cdn.discordapp.com/attachments/1086315786446061711/1127271267054137366/8-4.jpg"
            alt="A-T1-1"
          />
          <img
            style={{ width: '340px', height: '340px', flexShrink: 0, borderRadius:'20px' }}
            src="https://cdn.discordapp.com/attachments/1086315786446061711/1127271294858170440/2-4.jpg"
            alt="A-T1-2"
          />
          <img
            style={{ width: '340px', height: '340px', flexShrink: 0, borderRadius:'20px' }}
            src="https://cdn.discordapp.com/attachments/1086315786446061711/1127271315540283392/9-3.jpg"
            alt="A-T1-3"
          />
          <img
            style={{ width: '340px', height: '340px', flexShrink: 0, borderRadius:'20px' }}
            src="https://cdn.discordapp.com/attachments/1086315786446061711/1127275100941598780/10-2.jpg"
            alt="A-T1-4"
          />
          <img
            style={{ width: '340px', height: '340px', flexShrink: 0, borderRadius:'20px' }}
            src="https://cdn.discordapp.com/attachments/1086315786446061711/1127275175872843906/2.jpg"
            alt="A-T1-5"
          />
          <img
            style={{ width: '340px', height: '340px', flexShrink: 0, borderRadius:'20px' }}
            src="https://cdn.discordapp.com/attachments/1086315786446061711/1127161140976300043/A-5-1K.jpg"
            alt="A-T1-6"
          />
        </div>

        <br></br><br></br><br></br><br></br><br></br><br></br>

        <div className="col-span-2 grid grid-cols-4 gap-4">
          <div style={{ position: 'relative', height: '366px' }}>
            <img
              style={{ width: '340px', height: '366px', position: 'absolute', bottom: 0, borderRadius:'20px' }}
              src="https://cdn.discordapp.com/attachments/1086315786446061711/1127275207846019162/7-4.jpg"
              alt="A-BW1-1"
            />
          </div>
          <div style={{ position: 'relative', height: '529px' }}>
            <img
              style={{ width: '340px', height: '529px', position: 'absolute', bottom: 0, borderRadius:'20px' }}
              src="https://cdn.discordapp.com/attachments/1086315786446061711/1127277981757349898/carolus-abi-XZZ63RymSf4-unsplash.jpg"
              alt="A-BW2-2"
            />
          </div>
          <div style={{ position: 'relative', height: '285px' }}>
            <img
              style={{ width: '285px', height: '285px', position: 'absolute', bottom: 0, borderRadius:'20px' }}
              src="https://cdn.discordapp.com/attachments/1086315786446061711/1127442875739816006/pulau5.png"
              alt="A-BW3-3"
            />
          </div>
          <div style={{ position: 'relative', height: '400px' }}>
            <img
              style={{ width: '285px', height: '400px', position: 'absolute', bottom: 0, borderRadius:'20px' }}
              src="https://cdn.discordapp.com/attachments/1086315786446061711/1127442938356563968/pulau4.png"
              alt="A-BW4-4"
            />
          </div>
          <div style={{ position: 'relative', height: '320px' }}>
            <img
              style={{ width: '340px', height: '482px', position: 'absolute', bottom: 0, borderRadius:'20px' }}
              src="https://cdn.discordapp.com/attachments/1086315786446061711/1127442956845064284/pulau3.png"
              alt="A-BW5-5"
            />
          </div>
          <div style={{ position: 'relative', height: '320px' }}>
            <img
              style={{ width: '340px', height: '320px', position: 'absolute', bottom: 0, borderRadius:'20px' }}
              src="https://cdn.discordapp.com/attachments/1086315786446061711/1127442987274731520/pulau7.png"
              alt="A-BW6-6"
            />
          </div>
          <div style={{ position: 'relative', height: '320px' }}>
            <img
              style={{ width: '285px', height: '560px', position: 'absolute', bottom: 0, borderRadius:'20px' }}
              src="https://cdn.discordapp.com/attachments/1086315786446061711/1127443461981876324/pulau2.png"
              alt="A-BW7-6"
            />
          </div>
          <div style={{ position: 'relative', height: '320px' }}>
            <img
              style={{ width: '285px', height: '450px', position: 'absolute', bottom: 0, borderRadius:'20px' }}
              src="https://cdn.discordapp.com/attachments/1086315786446061711/1127443474090827947/pulau1.png"
              alt="A-BW8-6"
            />
          </div>
        </div>



      </div>
    </div>
  );
};

export default Gallery;
