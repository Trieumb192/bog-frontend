import { FaFacebook } from 'react-icons/fa';
import ImagePreviewModal from './image-preview-modal';
import { useState } from 'react';

const images = [
  'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/483509127_3124536654364350_2143876610279505076_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGe34d1eRrvBpr0vOmsk67PmsMtQIWzgcmawy1AhbOByfoSAfd8E66mzzCm-8bE-NBnhw3fhcMEtzBQzZ1NbhF_&_nc_ohc=0BZqA3wm2VIQ7kNvgHpAi_2&_nc_oc=AdgWRjsjcb7-dlafwa0Gk27s2ppfs18Q6erXL-DG90_XnNZUBCAcsI20BbUuNp_QhZTypczHIzF8Hf7Qb1uaRRfu&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=Jt6ernMlNFT79Cr0Esqn0w&oh=00_AYHnGHoOGxaliJWZDahqkMmNDUUEfYUFP7ECAnBuUIVYKw&oe=67DB4119',
  'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/483365398_3124536794364336_1613361353613560288_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH6ZTlNsIWbEybJzkUlzlJ5TGuTUksGE2pMa5NSSwYTatsiWzgHwU-NV1jLNv67wiPoh7h-IdjtwPUMDpYxxslO&_nc_ohc=qrjeF2ciYzEQ7kNvgH2mqO1&_nc_oc=Adj-lodnL4vnf0C6sJbHtdLS4OkJeWWqM3e7x01eFtXlDZu8vVhOfStPaGJhS1ZvA04x8rRCEQdc8g4W_04YeoR4&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=2WRkX09yG1BrVnKXoIw77w&oh=00_AYF_3ChJCnWb5HDcyS9LcfQjcuB9vU3wF1ffb_2WFZ4v5A&oe=67DB3527',
  'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/483526550_3124536664364349_5160419276352498230_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFG2HYP9lrW2KRFocvBvUrJNSa1q2FKcgI1JrWrYUpyAhlwti_B15cZiwtWURXn_ul_KAF7dvCDkgt8uVajrb-j&_nc_ohc=QUYVJTiq2xwQ7kNvgEK5htW&_nc_oc=AdiesM7xOpOR3U26GJguZvqAlQiajn7QZq8Z1pxb_ZnRYyko3TvIHBnQNyPdJYxu02exjy4wb6Pk5THQMhaiHBQi&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=KxWTRL0DGoVU4lc-TMeBeg&oh=00_AYHEl6wv4VwslDKegyLAXEFXXrO7kvAWxbVk-14FzNEZUA&oe=67DB517F',
  'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/357354838_9758962930811498_4256002361519730425_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEcyVioDPz5rre5Q797vDGjJ_lyFOrFNS4n-XIU6sU1Ls-UXnoQecoC9Cm8vZPx7zqfEZJfBBLsC6fFeXiybYc9&_nc_ohc=Nmsw96vhZ88Q7kNvgFx8NFv&_nc_oc=Adi536TPvWKLSFytA0TZpXU04stDmQfHOym4YUQOva36Jr6actLBHS4AWJYcvZJ4ndBH_YjyU7-tKflL-RJPMzAw&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=__F0ROIYV4eDxy_syfuucw&oh=00_AYG2J2B2LeK1P4_kaYF5-Yt_rIv75xUEjGEEZQ9I37vF8g&oe=67DB4520',
  'https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/357514521_9758964054144719_7656187059492640069_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH0jpubSoefJpYtdRQcnqRQPcB9Pnd6JM49wH0-d3okzsgQKedKZTnk1JUlqqr9lC8-v7xfiatlfhTseI8UYHU8&_nc_ohc=4dMo7JdvacoQ7kNvgFq-ham&_nc_oc=AdidXqdQQIpONd-qt4V4ZQypqnFzUeMKVRTUC5Tcjo3F90_y2nNhyFLL8N7j4rk2jwG_YgVBN_UrdZRBeTeC0CDE&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=GrDElzOUv6Wj2sIQZs9xlQ&oh=00_AYFezxTOz-2fuBQKN1oQISJzr3g2S82WeebYST_ITIZOPg&oe=67DB4114',
  'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/357517541_9758963357478122_741021638720713514_n.jpg?_nc_cat=101&ccb=1-7&_n,c_sid=833d8c&_nc_eui2=AeGR_6CwSlWLdyHJqa1MApMLTWtuK6g1AwBNa24rqDUDAHwRYwZxgymH_OZ6PX2wgHKJzdz6_B3wwrSITWG7TZP6&_nc_ohc=3mST0FYGRuUQ7kNvgHEOj_Z&_nc_oc=AdjwcsmRItvX4b5FxRSI_Q4GX2lm26B2t2e0FWmC_yTQF48z4SqItV7DYVRPmrS1DfATUIjLMR7mlzEbwcAjTvXr&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=t4FL-ElJnrgOVUjJ2uFgqA&oh=00_AYGUjldRC5LDtThdmnYAjn6Ovl5qzsMauFp1xQtEvxDNig&oe=67DB4944',
  'https://scontent.fhan15-1.fna.fbcdn.net/v/t1.6435-9/79786877_3564017283639458_504785595038433280_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGvhA7DRkr3AbIrBqD6iH2gCk8EF73bVd0KTwQXvdtV3eEmHso7G7u9a5vLaFGigATrChkJqsQn0E5V7WjTcnoR&_nc_ohc=Wgd4SeD0U8sQ7kNvgEoO4-1&_nc_oc=Adh6d1yVqxsyhaqJ9mJVUKDT9xnCALOMkRwAkrBAKp9rnfzZsi26CVbQQXpZhPd5QRzWX3xpXHD5_q3fYGwX1Avw&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=gyaVLxV9oc6YPAWPCmWAdg&oh=00_AYFNUcT8Bq3BqCaX6FI6kK2rrRqcUSs_wkpzod0ORzrGmA&oe=67FCF636',
  'https://scontent.fhan15-2.fna.fbcdn.net/v/t1.6435-9/74230429_3447928218581699_1375906723327377408_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeER6Wicyc0TQjMK1XUR9xoTX76OmEAoOH1fvo6YQCg4fTPPolosY5Vd_iGkgdOXUddE2k4DWW6nlLLgxqsyWL8W&_nc_ohc=N1M-A7i6SoUQ7kNvgE6SxV4&_nc_oc=AdjeL7WROPdiP1yCyzTLThgnM9HaJMWROzABTplvTpawAiAK0XE9ENLP-gW8RjQCA9Rh4WuTRULbxCiHyVSeBltL&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=gyaVLxV9oc6YPAWPCmWAdg&oh=00_AYFVfztsnpTSXV4q6YK32cCS41WPq4ELIPl5OzFLdrWHFg&oe=67FCF294',
  'https://scontent.fhan15-2.fna.fbcdn.net/v/t1.6435-9/51786703_2716352658405929_4174557767597555712_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHmNbtQSFU9bpqhZY0PLqL9zAn7vk_l30vMCfu-T-XfS110SwZqXvE-wa3i7aaVlmQF4P1bNWTSOX7I77Fwe5Sa&_nc_ohc=HHO_nQj4Lj0Q7kNvgFq7flh&_nc_oc=Adjpuu1jjZO1XVS4Dpza1Y7PJ-8nlkbmzwf19vTVbGRSWIXWWgdWST1A3Y3pRwjgBwmnUvoqF2KiDLU_5uYllert&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&_nc_gid=6d7JRivD91D0jI6toUbG-A&oh=00_AYGshwRrce4kNKTJq3N1u0VKF3hKkdaWD1D2Ltur1BKykw&oe=67FCEAD0',
];

const ImagesContain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6); 

  const handleLoadMore = () => {
    setVisibleCount(images.length); 
  };

  const isAllVisible = visibleCount >= images.length;

  return (
    <section className="py-10 bg-white w-11/12">
      <h2 className="text-3xl font-bold text-center mb-6">Follow Me on Facebook</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto px-4">
        {images.slice(0, visibleCount).map((src, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg cursor-pointer">
            <img
              src={src}
              alt={`Instagram ${index + 1}`}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <FaFacebook className="text-white text-4xl" onClick={() => setIsModalOpen(true)}/>
            </div>
          </div>
        ))}
      </div>
      {!isAllVisible && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Load More
          </button>
        </div>
      )}
      <ImagePreviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={images}
        userName="trieunguyen"
        description={`#trieunguyen, #family, #websitetemplate, #https://trieunguyen-blog.netlify.app/`}
      />
    </section>
  );
};

export default ImagesContain;
