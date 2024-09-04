import React from 'react';

const MapComponent = () => {
    return (
        <div className="w-full h-0 pb-[56.25%] relative bg-gray-50 dark:bg-950 rounded-xl">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403.2594333763115!2d77.76481731487182!3d20.946366445466186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a35d9ff19709%3A0xb70cd3ef8bd0d54a!2sCAD%20DESK%20Institute!5e1!3m2!1sen!2sin!4v1725364142087!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute top-0 left-0 w-full h-full"
            ></iframe>
        </div>
    );
};

export default MapComponent;
