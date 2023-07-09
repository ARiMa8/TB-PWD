import React, { useState, useEffect } from 'react';
import carouselVid from './assets/videocarousel.mp4'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Destinations = () => {
  const slides = [
    {
      url: 'https://cdn.discordapp.com/attachments/1086315786446061711/1127276186536517702/eggy-febryano-T5lflxzlfNI-unsplash.jpg',
      type: 'image'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1086315786446061711/1127316166109560984/20220522100430-1-wisata-pulau-seribu-003-andre-kurniawan.jpg',
      type: 'image'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1086315786446061711/1127316216227299399/20220522100432-2-wisata-kepulauan-seribu-007-andre-kurniawan.jpg',
      type: 'image'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1086315786446061711/1127316239388254268/20220522100431-2-wisata-kepulauan-seribu-006-andre-kurniawan.jpg',
      type: 'image'
    },
    {
      url: 'https://cdn.discordapp.com/attachments/1086315786446061711/1127316273894805655/20220522100431-1-wisata-pulau-seribu-002-andre-kurniawan.jpg',
      type: 'image'
    },
    {
      url: carouselVid,
      type: 'video'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
      <div className='bg-cyan-200 m-auto py-32 pt-22 px-4 relative group'>
        <div className='bg-gray-200 border rounded-2xl drop-shadow-2xl'>
          <br></br>
          <div class="flex justify-center items-center h-52">
            <div class="bg-gray-200 rounded-lg px-4 py-2">
              <h1 class="text-4xl text-center font-Poppins font-bold">Find Your Favorite Dream Destination</h1>
              <p class="text-2xl text-center font-Poppins">We will give you the opportunity to see a lot, within a time frame</p>
            </div>
          </div>

          <div className='bg-gray-200 border rounded-2xl drop-shadow-2xl'>
            {slides[currentIndex].type === 'image' ? (
              <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})`, width: '1260px', height: '500px' }}
                className='rounded-2xl bg-center bg-cover duration-500 ml-2.5'
              ></div>
            ) : (
              <video src={slides[currentIndex].url} className='rounded-2xl ml-2.5' style={{ height: '500px', objectFit: 'cover', width: '98%', display: 'block', margin: '0 auto' }} autoPlay muted loop />
            )}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronLeft onClick={prevSlide} size={30} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>

          <br></br><br></br><br></br><br></br>

          <div className="flex justify-center">
            <h1 className="bg-gray-200 text-3xl text-center rounded-lg font-Poppins mb-6 inline-block px-4 py-2">
              Explore The Untouched Beauty Of Non-Resort Islands
            </h1>
          </div>
          <div className='flex justify-between'>
            <div className="bg-gray-200 border rounded-2xl drop-shadow-2xl w-2/6 max-h-full mx-auto flex items-center flex-col pb-8 pt-4">
              <img
                style={{ width: '407px', height: '371px', flexShrink: 0, borderRadius: '20px' }}
                src="https://cdn.discordapp.com/attachments/1086315786446061711/1127276186536517702/eggy-febryano-T5lflxzlfNI-unsplash.jpg"
                alt="A-T1-1"
              />
              <p className="mt-6 text-center font-Paytone text-2xl">Pulau Tidung</p>
            </div>
            <div className="bg-gray-200 border rounded-2xl drop-shadow-2xl w-2/6 max-h-full mx-auto flex items-center flex-col pb-8 pt-4">
              <img
                style={{ width: '407px', height: '371px', flexShrink: 0, borderRadius: '20px' }}
                src="https://cdn.discordapp.com/attachments/1086315786446061711/1127467579582193714/pulau6.png"
                alt="A-T1-2"
              />
              <p className="mt-6 text-center font-Paytone text-2xl">Pulau Macan</p>
            </div>
          </div>

          <br></br><br></br><br></br><br></br>

          <div className='flex justify-between'>
            <div className="bg-gray-200 border rounded-2xl drop-shadow-2xl w-100% max-h-full mx-auto pb-8 pt-4 pr-2 pl-2">
              <img
                style={{ width: '320px', height: '264px', flexShrink: 0, borderRadius: '20px' }}
                src="https://cdn.discordapp.com/attachments/1086315786446061711/1127532889664397342/water-spot-pulau-pari.jpg"
                alt="A-T1-1"
              />
              <p className="mt-4 text-center font-Paytone text-xl">Pulau Pari</p>
            </div>
            <div className="bg-gray-200 border rounded-2xl drop-shadow-2xl w-100% max-h-full mx-auto pb-8 pt-4 pr-2 pl-2">
              <img
                style={{ width: '320px', height: '264px', flexShrink: 0, borderRadius: '20px' }}
                src="https://cdn.discordapp.com/attachments/1086315786446061711/1127532906315796521/alam-bawah-laut-pulau-harapan.jpg"
                alt="A-T1-2"
              />
              <p className="mt-4 text-center font-Paytone text-xl">Pulau Harapan</p>
            </div>
            <div className="bg-gray-200 border rounded-2xl drop-shadow-2xl w-100% max-h-full mx-auto pb-8 pt-4 pr-2 pl-2">
              <img
                style={{ width: '320px', height: '264px', flexShrink: 0, borderRadius: '20px' }}
                src="https://cdn.discordapp.com/attachments/1086315786446061711/1127532922115723295/pantai-pulau-pramuka-1.jpg"
                alt="A-T1-2"
              />
              <p className="mt-4 text-center font-Paytone text-xl">Pulau Pramuka</p>
            </div>
          </div>

          <br></br><br></br><br></br><br></br>

          <div className="flex justify-center">
            <h1 className="bg-gray-200 text-3xl text-center rounded-lg font-Poppins mb-6 inline-block px-4 py-2">
              Immerse Yourself In The Beauty Of Resort Islands
            </h1>
          </div>
          <div className='flex justify-between'>
            <div className="bg-gray-200 border rounded-2xl drop-shadow-2xl w-100% max-h-full mx-auto pb-8 pt-4 pr-2 pl-2">
              <img
                style={{ width: '534px', height: '593px', flexShrink: 0, borderRadius: '20px' }}
                src="https://cdn.discordapp.com/attachments/1086315786446061711/1127534588554661928/pulau-sepa-1.jpg"
                alt="A-T1-1"
              />
              <p className="mt-4 text-2xl text-center font-Paytone">Pulau Sepa</p>
            </div>
          </div>

          <br></br><br></br><br></br><br></br>

          <div className="flex justify-center">
            <h1 className="bg-gray-200 text-4xl font-bold text-center rounded-lg font-Poppins mb-6 inline-block px-4 py-2">
              OUR PICKS!
            </h1>
          </div>
          <div className='flex justify-between'>
            <div className="bg-gray-200 border rounded-2xl drop-shadow-2xl w-100% max-h-full mx-auto pb-8 pt-4 pr-2 pl-2">
              <img
                style={{ width: '520px', height: '420px', flexShrink: 0, borderRadius: '20px' }}
                src="https://cdn.discordapp.com/attachments/1086315786446061711/1127534966956367943/pulau-tidung-1.jpg"
                alt="A-T1-1"
              />
              <p className="mt-4 text-2xl text-center font-Paytone">Pulau Tidung</p>
            </div>
            <div className="bg-gray-200 border rounded-2xl drop-shadow-2xl w-100% max-h-full mx-auto pb-8 pt-4 pr-2 pl-2">
              <img
                style={{ width: '520px', height: '420px', flexShrink: 0, borderRadius: '20px' }}
                src="https://cdn.discordapp.com/attachments/1086315786446061711/1127535215544373329/pulau-bidadari_1.jpg"
                alt="A-T1-2"
              />
              <p className="mt-4 text-2xl text-center font-Paytone">Pulau Bidadari</p>
            </div>
          </div>
          <br></br><br></br><br></br><br></br>

        </div>
      <footer className="bg-blue-600 py-8 w-full h-full">
        <div className="container mx-auto text-center text-black">
          <h1 className="text-lg font-Paytone">"So, Is There Anything That Makes You Interested?"</h1>
        </div>
      </footer>
    </div>

  );
};

export default Destinations;
