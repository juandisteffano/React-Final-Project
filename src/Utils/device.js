var deviceDetect = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (deviceDetect.Android() || deviceDetect.BlackBerry() || deviceDetect.iOS() || deviceDetect.Opera() || deviceDetect.Windows());
    }
};

export default function isMobile(){
    return (deviceDetect.any() !== null)
}
