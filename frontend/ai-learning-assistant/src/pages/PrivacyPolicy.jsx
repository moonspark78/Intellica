import React from 'react';
import { Link } from 'react-router-dom';
import useCookieConsent from '../hooks/useCookieConsent';

const PrivacyPolicy = () => {
  const { resetConsent } = useCookieConsent();

  return (
    <div className="min-h-screen bg-slate-950 py-8 px-4 sm:py-12 sm:px-6 lg:py-16">
      <div className="max-w-3xl mx-auto bg-slate-900 rounded-2xl p-6 sm:p-8 lg:p-12 text-slate-300">
        
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-slate-500 text-sm mb-8 lg:mb-12">
          Last updated: April 2026
        </p>

        {/* Section 1 */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            1. Data Controller
          </h2>
          <p className="leading-relaxed">
            <strong className="text-white">Intellica</strong><br />
            Contact email:{' '}
            <a href="mailto:contact@intellica.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              contact@intellica.com
            </a>
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            2. Data Collected
          </h2>
          <p className="leading-relaxed mb-4">
            As part of using our service, we collect:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Identification data:</strong> email address, password (hashed)</li>
            <li><strong className="text-white">Usage data:</strong> uploaded PDF documents, generated quizzes, created flashcards, history of questions asked to the AI</li>
            <li><strong className="text-white">Technical data:</strong> IP address, browser type, pages visited</li>
            <li><strong className="text-white">Payment data:</strong> processed by Stripe (we do not store your banking information)</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            3. Purposes of Processing
          </h2>
          <p className="leading-relaxed mb-4">Your data is used to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and improve our services (quiz generation, flashcards, AI)</li>
            <li>Manage your user account</li>
            <li>Process your payments via Stripe</li>
            <li>Improve our artificial intelligence algorithms</li>
            <li>Produce anonymised usage statistics</li>
            <li>Contact you for support or important updates</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            4. Legal Basis
          </h2>
          <p className="leading-relaxed mb-4">The processing of your data is based on:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Performance of a contract:</strong> provision of the service</li>
            <li><strong className="text-white">Your consent:</strong> analytics cookies, newsletters</li>
            <li><strong className="text-white">Legitimate interest:</strong> service improvement, security</li>
          </ul>
        </section>

        {/* Section 5 - Cookies Table */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            5. Cookies Used
          </h2>
          
          {/* Table Desktop */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="border border-slate-700 px-4 py-3 text-left text-white font-semibold">Type</th>
                  <th className="border border-slate-700 px-4 py-3 text-left text-white font-semibold">Name</th>
                  <th className="border border-slate-700 px-4 py-3 text-left text-white font-semibold">Purpose</th>
                  <th className="border border-slate-700 px-4 py-3 text-left text-white font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-700 px-4 py-3">Technical</td>
                  <td className="border border-slate-700 px-4 py-3 font-mono text-xs">authToken</td>
                  <td className="border border-slate-700 px-4 py-3">JWT Authentication</td>
                  <td className="border border-slate-700 px-4 py-3">Session / 7 days</td>
                </tr>
                <tr>
                  <td className="border border-slate-700 px-4 py-3">Technical</td>
                  <td className="border border-slate-700 px-4 py-3 font-mono text-xs">cookieConsent</td>
                  <td className="border border-slate-700 px-4 py-3">Store cookie preferences</td>
                  <td className="border border-slate-700 px-4 py-3">1 year</td>
                </tr>
                <tr>
                  <td className="border border-slate-700 px-4 py-3">Analytics*</td>
                  <td className="border border-slate-700 px-4 py-3 font-mono text-xs">_ga, _gid</td>
                  <td className="border border-slate-700 px-4 py-3">Google Analytics</td>
                  <td className="border border-slate-700 px-4 py-3">2 years / 24h</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cards Mobile */}
          <div className="sm:hidden space-y-4">
            <div className="bg-slate-800 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-indigo-400 font-medium">Technical</span>
                <span className="font-mono text-xs bg-slate-700 px-2 py-1 rounded">authToken</span>
              </div>
              <p className="text-sm mb-1">JWT Authentication</p>
              <p className="text-xs text-slate-500">Duration: Session / 7 days</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-indigo-400 font-medium">Technical</span>
                <span className="font-mono text-xs bg-slate-700 px-2 py-1 rounded">cookieConsent</span>
              </div>
              <p className="text-sm mb-1">Store cookie preferences</p>
              <p className="text-xs text-slate-500">Duration: 1 year</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-indigo-400 font-medium">Analytics*</span>
                <span className="font-mono text-xs bg-slate-700 px-2 py-1 rounded">_ga, _gid</span>
              </div>
              <p className="text-sm mb-1">Google Analytics</p>
              <p className="text-xs text-slate-500">Duration: 2 years / 24h</p>
            </div>
          </div>

          <p className="text-slate-500 text-xs italic mt-3">
            * Loaded only with your consent
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            6. Data Retention
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Account data:</strong> retained for as long as the account is active, then 3 years after deletion</li>
            <li><strong className="text-white">PDF documents:</strong> retained until you delete them</li>
            <li><strong className="text-white">Payment data:</strong> in accordance with legal obligations (10 years for invoices)</li>
            <li><strong className="text-white">Technical logs:</strong> maximum 12 months</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            7. Your Rights
          </h2>
          <p className="leading-relaxed mb-4">In accordance with the GDPR, you have the following rights:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong className="text-white">Right of access:</strong> obtain a copy of your data</li>
            <li><strong className="text-white">Right to rectification:</strong> correct inaccurate data</li>
            <li><strong className="text-white">Right to erasure:</strong> request deletion of your data</li>
            <li><strong className="text-white">Right to data portability:</strong> receive your data in a structured format</li>
            <li><strong className="text-white">Right to object:</strong> object to the processing of your data</li>
            <li><strong className="text-white">Right to withdraw consent:</strong> at any time for processing based on consent</li>
          </ul>
          <p className="leading-relaxed">
            To exercise your rights, contact us at:{' '}
            <a href="mailto:privacy@intellica.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              privacy@intellica.com
            </a>
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            8. Security
          </h2>
          <p className="leading-relaxed">
            We implement appropriate technical and organisational measures to protect 
            your data: HTTPS encryption, password hashing, restricted data access, 
            and regular backups.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            9. Data Transfers
          </h2>
          <p className="leading-relaxed">
            Your data may be hosted on servers located outside the European Union. 
            In such cases, we ensure that appropriate safeguards are in place 
            (standard contractual clauses, Privacy Shield certification).
          </p>
        </section>

        {/* Section 10 - Cookie Management */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            10. Cookie Management
          </h2>
          <p className="leading-relaxed mb-4">
            You can update your cookie preferences at any time:
          </p>
          <button
            onClick={resetConsent}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            <span>🍪</span>
            <span>Update my cookie preferences</span>
          </button>
        </section>

        {/* Section 11 */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            11. Contact
          </h2>
          <p className="leading-relaxed mb-4">
            For any questions regarding this policy or your personal data:<br />
            <strong className="text-white">Email:</strong>{' '}
            <a href="mailto:privacy@intellica.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              privacy@intellica.com
            </a>
          </p>
          <p className="leading-relaxed">
            You also have the right to lodge a complaint with the relevant supervisory authority.<br />
            For users in the UK, contact the ICO:{' '}
            <a 
              href="https://ico.org.uk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              ico.org.uk
            </a>
            <br />
            For users in the EU, contact your national DPA (e.g. CNIL in France:{' '}
            <a 
              href="https://www.cnil.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              www.cnil.fr
            </a>
            ).
          </p>
        </section>

        {/* Back Link */}
        <div className="mt-10 pt-6 border-t border-slate-700">
          <Link 
            to="/dashboard" 
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;