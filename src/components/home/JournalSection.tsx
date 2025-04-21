import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';

// Activate autoplay
SwiperCore.use([Autoplay]);

const journalImages = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
];

const TrendedJournalSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          📚 Most Trended Journals for You
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Stay ahead in your academic journey with top journals.
        </p>

        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
        >
          {journalImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                <img
                  src={`/Rushi web/${image}`} // directly reference the image path
                  alt={`Journal ${index + 1}`}
                  className="w-28 h-28 object-contain mx-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrendedJournalSection;
