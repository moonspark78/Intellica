let analyticsLoaded = false;

export const loadAnalytics = () => {
  if (analyticsLoaded) return;

  const GA_MEASUREMENT_ID = 'G-MFJGK01X0K';

  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = gtag;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;

  script.onload = () => {
    gtag("js", new Date());

    gtag("config", GA_MEASUREMENT_ID, {
      anonymize_ip: true,
      cookie_flags: "SameSite=None;Secure",
    });

    console.log("📊 Google Analytics chargé");
  };

  document.head.appendChild(script);

  analyticsLoaded = true;
};

export const isAnalyticsLoaded = () => analyticsLoaded;