import { Drawer, Avatar } from 'antd';
import { Phone, Mail, MapPin, Github, Globe, Download } from 'lucide-react';
import React from 'react';

interface ContactDrawerProps {
    openDrawer: boolean;
    setOpenDrawer: (isOpen: boolean) => void;
} 
const ContactDrawer: React.FC<ContactDrawerProps> = ({ openDrawer, setOpenDrawer }) => {
  return (
    <Drawer
      title={
        <div className="flex items-center space-x-4">
          <Avatar
            size={64}
            src="https://www.facebook.com/photo/?fbid=3259636074077582&set=a.264711583570061"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800">VAN TRIEU NGUYEN</h2>
            <p className="text-sm text-gray-500">Fullstack Developer</p>
          </div>
        </div>
      }
      onClose={() => setOpenDrawer(false)}
      open={openDrawer}
      width={450}
      closeIcon={false}
    >
      <div className="flex flex-col space-y-6 p-2">
        {/* Contact Info */}
        <div className="flex flex-col space-y-4 text-base">
          {/* Phone */}
          <div className="flex items-center space-x-3">
            <Phone className="text-blue-500" size={20} />
            <a href="tel:0971930656" className="hover:text-blue-600 transition">
              0971.930.656
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <Mail className="text-blue-500" size={20} />
            <a
              href="mailto:trieumb192@gmail.com"
              className="hover:text-blue-600 transition"
            >
              trieumb192@gmail.com
            </a>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-3">
            <MapPin className="text-blue-500 mt-1" size={20} />
            <p className="text-gray-700 leading-snug">
              No.15, 6 alley, 199 lane, Thuy Khue street, Tay Ho district, Ha Noi city
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-start space-x-4">
          {/* Github */}
          <a
            href="https://github.com/Trieumb192"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 rounded-full hover:bg-blue-500 hover:text-white transition-all"
          >
            <Github size={20} />
          </a>

          {/* Website */}
          <a
            href="https://trieunguyen-blog.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 rounded-full hover:bg-blue-500 hover:text-white transition-all"
          >
            <Globe size={20} />
          </a>
        </div>

        {/* Download CV Button */}
        <a
            href="https://drive.google.com/uc?export=download&id=0By9KANeuGwW_S2p1a3pPaTlQVFNOSm5Pd3Z1N2MzT3YtYzhJ"
            target="_blank"
            rel="noopener noreferrer"
           className="p-3 bg-gray-100 rounded-full hover:bg-blue-500 hover:text-white transition-all"
            >
            <Download size={20} />
        </a>
      </div>
    </Drawer>
  );
};

export default ContactDrawer;
