export const handleWhatsApp = ( message) => {
    const phoneNumber = '+8801751379009';
    // const message = ;

    // Check if the user is on a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    let url;

    if (isMobile) {
        // Open WhatsApp in the Android app
        url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    } else {
        // Open WhatsApp in the desktop app
        url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    }

    window.open(url, '_blank');
};

export function generateUniqueId() {
    return Math.random().toString(36).substring(2, 12);
  }
  