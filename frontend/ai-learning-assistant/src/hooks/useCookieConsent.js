import { useState, useEffect, useCallback } from 'react';

const COOKIE_CONSENT_KEY = 'cookieConsent';

export const CONSENT_STATUS = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  REFUSED: 'refused',
};

export const useCookieConsent = () => {
  const [consent, setConsent] = useState(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    return stored || CONSENT_STATUS.PENDING;
  });

  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (consent === CONSENT_STATUS.PENDING) {
      setShowBanner(true);
    } else {
      setShowBanner(false);
    }
  }, [consent]);

  const acceptCookies = useCallback(() => {
    localStorage.setItem(COOKIE_CONSENT_KEY, CONSENT_STATUS.ACCEPTED);
    setConsent(CONSENT_STATUS.ACCEPTED);
    setShowBanner(false);
  }, []);

  const refuseCookies = useCallback(() => {
    localStorage.setItem(COOKIE_CONSENT_KEY, CONSENT_STATUS.REFUSED);
    setConsent(CONSENT_STATUS.REFUSED);
    setShowBanner(false);
  }, []);

  const resetConsent = useCallback(() => {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    setConsent(CONSENT_STATUS.PENDING);
    setShowBanner(true);
  }, []);

  const hasConsented = consent === CONSENT_STATUS.ACCEPTED;

  return {
    consent,
    showBanner,
    hasConsented,
    acceptCookies,
    refuseCookies,
    resetConsent,
  };
};

export default useCookieConsent;
