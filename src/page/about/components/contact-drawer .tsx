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
            src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/70855330_3259636084077581_5727646885615763456_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEzFyLNZ0aq36nQn00Kpr87WHYpy_mXCsZYdinL-ZcKxlrMwkqw82bTQS-N2vEktuuXVyTxrO8V1MRngjdEiwvO&_nc_ohc=-pzcbrHlvTAQ7kNvgHTEXw9&_nc_oc=Adi-EBnWtz6SpagWu44klmysKtmnuQ8PY_Twfx4qubhN7VsVLunBgKfo2Z5Xzk9FFSk&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=5pQsuOK2wZ5-_ca5_LPcog&oh=00_AYHHthA0wL9cFbHpbaB4flL4y1oHaMXBAIOFbtvFkBEZww&oe=67FF218B"
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

        {/* Github */}
        <div className="flex items-center space-x-3">
            <Github className="text-blue-500" size={20} />
            <a 
                href="https://github.com/Trieumb192" 
                className="hover:text-blue-600 transition"
            >
              https://github.com/Trieumb192
            </a>
        </div>
          
        {/* Website */}
        <div className="flex items-center space-x-3">
            <Globe className="text-blue-500" size={20} />
            <a 
                href="https://trieunguyen-blog.netlify.app/" 
                className="hover:text-blue-600 transition"
            >
              https://trieunguyen-blog.netlify.app/
            </a>
        </div>
      
        {/* Download CV Button */}
        <div className="flex items-center space-x-3">
            <Download className="text-blue-500" size={20} />
            <a 
                href="https://drive.google.com/uc?export=download&id=0By9KANeuGwW_S2p1a3pPaTlQVFNOSm5Pd3Z1N2MzT3YtYzhJ" 
                className="hover:text-blue-600 transition"
            >
              Tải xuống CV
            </a>
        </div>
      </div>
    </Drawer>
  );
};

export default ContactDrawer;
