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

// Smooth scrolling for anchor links and cross-page navigation
document.addEventListener('DOMContentLoaded', function () {
  // Handle cross-page navigation to anchor links
  function handleAnchorNavigation() {
    var hash = window.location.hash;
    if (hash) {
      var targetElement = document.querySelector(hash);
      if (targetElement) {
        // Small delay to ensure page is fully loaded
        setTimeout(function () {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }, 100);
      }
    }
  }

  // Handle anchor navigation on page load
  handleAnchorNavigation();

  // Handle anchor navigation when hash changes
  window.addEventListener('hashchange', handleAnchorNavigation);

  // Handle smooth scrolling for all anchor links on the same page
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (link && link.getAttribute('href') !== '#') {
      var targetId = link.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
        
        // Update URL hash without triggering hashchange
        history.pushState(null, null, targetId);
      }
    }
  });
});

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