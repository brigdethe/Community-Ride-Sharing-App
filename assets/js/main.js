'use strict';

// Cookie consent (tarteaucitron) configuration
window.tarteaucitronForceLanguage = 'en';

var tarteaucitronCustomText = {
  acceptAll: 'Accept',
  personalize: 'Preferences',
  alertBigPrivacy:
    'By clicking on "Accept", you agree to the installation of cookies on your browser in order to improve your browsing experience and the acquisition of statistics. See our legal notice for more information.',
  title: 'Preferences',
  disclaimer:
    'By authorizing these third-party services, you accept the deposit and reading of cookies and the use of tracking technologies necessary for their proper functioning.',
  all: 'All services preferences',
  mandatoryText:
    'This site uses cookies which are necessary for its proper operation. They cannot be deactivated.',
  analytic: {
    details:
      'Audience measurement services are used to generate visitor statistics, which are useful for improving the site.'
  }
};

tarteaucitron.init({
  privacyUrl: '',
  hashtag: '#tarteaucitron',
  cookieName: 'tarteaucitron',
  orientation: 'bottom',
  groupServices: false,
  showAlertSmall: false,
  cookieslist: false,
  closePopup: false,
  showIcon: false,
  // iconSrc: '../images/svg/arrow-bold.svg',
  // iconPosition: 'BottomRight',
  adblocker: false,
  DenyAllCta: false,
  AcceptAllCta: true,
  highPrivacy: true,
  handleBrowserDNTRequest: false,
  removeCredit: true,
  moreInfoLink: false,
  useExternalCss: false,
  useExternalJs: false,
  readmoreLink: '',
  mandatory: true
});

// Google Analytics via tarteaucitron
if (window.tarteaucitron && window.tarteaucitron.user) {
  tarteaucitron.user.gtagUa = 'G-RDCZPBN3Z2';
  tarteaucitron.user.gtagMore = function () {};
  (tarteaucitron.job = tarteaucitron.job || []).push('gtag');
}

// Persist language cookie (moved from inline script)
(function setLanguageCookie() {
  var expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 31536000 * 1000);
  document.cookie =
    'pll_language=en; expires=' +
    expirationDate.toUTCString() +
    '; path=/; secure; SameSite=Lax';
})();

// Motorcycle animation trigger (moved from inline script)
document.addEventListener('DOMContentLoaded', function () {
  var motorcycleImageElement = document.getElementById('hero-motorcycle');
  var plantSectionElement = document.querySelector('.home-cover__plant');

  if (!motorcycleImageElement || !plantSectionElement) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          motorcycleImageElement.classList.remove('paused');
        } else {
          motorcycleImageElement.classList.add('paused');
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: '0px 0px -20% 0px'
    }
  );

  observer.observe(plantSectionElement);
}); 