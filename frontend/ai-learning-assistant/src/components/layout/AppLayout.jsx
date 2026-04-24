import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

import CookieBanner from "../CookieBanner";
import useCookieConsent, {
  CONSENT_STATUS,
} from "../../hooks/useCookieConsent";
import { loadAnalytics } from "../../utils/loadAnalytics";

const AppLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const {
    consent,
    showBanner,
    acceptCookies,
    refuseCookies,
  } = useCookieConsent();

  // Charger analytics seulement si consentement accepté
  useEffect(() => {
    if (consent === CONSENT_STATUS.ACCEPTED) {
      loadAnalytics();
    }
    if (consent === CONSENT_STATUS.REFUSED) {
      window.dataLayer = [];
    }
  }, [consent, loadAnalytics]);

  return (
    <div className="flex h-screen bg-neutral-50 text-neutral-900">
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {children}
        </main>
      </div>

      {/* ✅ Cookie Banner */}
      {showBanner && (
        <CookieBanner
          onAccept={acceptCookies}
          onRefuse={refuseCookies}
        />
      )}
    </div>
  );
};

export default AppLayout;