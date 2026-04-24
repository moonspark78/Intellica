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
          Politique de Confidentialité
        </h1>
        <p className="text-slate-500 text-sm mb-8 lg:mb-12">
          Dernière mise à jour : Avril 2026
        </p>

        {/* Section 1 */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            1. Responsable du traitement
          </h2>
          <p className="leading-relaxed">
            <strong className="text-white">Intellica</strong><br />
            Email de contact :{' '}
            <a href="mailto:contact@intellica.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              contact@intellica.com
            </a>
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            2. Données collectées
          </h2>
          <p className="leading-relaxed mb-4">
            Dans le cadre de l'utilisation de notre service, nous collectons :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Données d'identification :</strong> adresse email, mot de passe (hashé)</li>
            <li><strong className="text-white">Données d'utilisation :</strong> documents PDF uploadés, quiz générés, flashcards créées, historique des questions posées à l'IA</li>
            <li><strong className="text-white">Données techniques :</strong> adresse IP, type de navigateur, pages visitées</li>
            <li><strong className="text-white">Données de paiement :</strong> traitées par Stripe (nous ne stockons pas vos informations bancaires)</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            3. Finalités du traitement
          </h2>
          <p className="leading-relaxed mb-4">Vos données sont utilisées pour :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fournir et améliorer nos services (génération de quiz, flashcards, IA)</li>
            <li>Gérer votre compte utilisateur</li>
            <li>Traiter vos paiements via Stripe</li>
            <li>Améliorer nos algorithmes d'intelligence artificielle</li>
            <li>Établir des statistiques d'utilisation anonymisées</li>
            <li>Vous contacter pour le support ou les mises à jour importantes</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            4. Base légale
          </h2>
          <p className="leading-relaxed mb-4">Le traitement de vos données repose sur :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">L'exécution du contrat :</strong> fourniture du service</li>
            <li><strong className="text-white">Votre consentement :</strong> cookies analytics, newsletters</li>
            <li><strong className="text-white">L'intérêt légitime :</strong> amélioration du service, sécurité</li>
          </ul>
        </section>

        {/* Section 5 - Cookies Table */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            5. Cookies utilisés
          </h2>
          
          {/* Table Desktop */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="border border-slate-700 px-4 py-3 text-left text-white font-semibold">Type</th>
                  <th className="border border-slate-700 px-4 py-3 text-left text-white font-semibold">Nom</th>
                  <th className="border border-slate-700 px-4 py-3 text-left text-white font-semibold">Finalité</th>
                  <th className="border border-slate-700 px-4 py-3 text-left text-white font-semibold">Durée</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-700 px-4 py-3">Technique</td>
                  <td className="border border-slate-700 px-4 py-3 font-mono text-xs">authToken</td>
                  <td className="border border-slate-700 px-4 py-3">Authentification JWT</td>
                  <td className="border border-slate-700 px-4 py-3">Session / 7 jours</td>
                </tr>
                <tr>
                  <td className="border border-slate-700 px-4 py-3">Technique</td>
                  <td className="border border-slate-700 px-4 py-3 font-mono text-xs">cookieConsent</td>
                  <td className="border border-slate-700 px-4 py-3">Mémorisation choix cookies</td>
                  <td className="border border-slate-700 px-4 py-3">1 an</td>
                </tr>
                <tr>
                  <td className="border border-slate-700 px-4 py-3">Analytics*</td>
                  <td className="border border-slate-700 px-4 py-3 font-mono text-xs">_ga, _gid</td>
                  <td className="border border-slate-700 px-4 py-3">Google Analytics</td>
                  <td className="border border-slate-700 px-4 py-3">2 ans / 24h</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cards Mobile */}
          <div className="sm:hidden space-y-4">
            <div className="bg-slate-800 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-indigo-400 font-medium">Technique</span>
                <span className="font-mono text-xs bg-slate-700 px-2 py-1 rounded">authToken</span>
              </div>
              <p className="text-sm mb-1">Authentification JWT</p>
              <p className="text-xs text-slate-500">Durée : Session / 7 jours</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-indigo-400 font-medium">Technique</span>
                <span className="font-mono text-xs bg-slate-700 px-2 py-1 rounded">cookieConsent</span>
              </div>
              <p className="text-sm mb-1">Mémorisation choix cookies</p>
              <p className="text-xs text-slate-500">Durée : 1 an</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-indigo-400 font-medium">Analytics*</span>
                <span className="font-mono text-xs bg-slate-700 px-2 py-1 rounded">_ga, _gid</span>
              </div>
              <p className="text-sm mb-1">Google Analytics</p>
              <p className="text-xs text-slate-500">Durée : 2 ans / 24h</p>
            </div>
          </div>

          <p className="text-slate-500 text-xs italic mt-3">
            * Chargés uniquement avec votre consentement
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            6. Durée de conservation
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Données de compte :</strong> conservées tant que le compte est actif, puis 3 ans après suppression</li>
            <li><strong className="text-white">Documents PDF :</strong> conservés tant que vous ne les supprimez pas</li>
            <li><strong className="text-white">Données de paiement :</strong> selon les obligations légales (10 ans pour les factures)</li>
            <li><strong className="text-white">Logs techniques :</strong> 12 mois maximum</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            7. Vos droits
          </h2>
          <p className="leading-relaxed mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong className="text-white">Droit d'accès :</strong> obtenir une copie de vos données</li>
            <li><strong className="text-white">Droit de rectification :</strong> corriger vos données inexactes</li>
            <li><strong className="text-white">Droit à l'effacement :</strong> demander la suppression de vos données</li>
            <li><strong className="text-white">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
            <li><strong className="text-white">Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
            <li><strong className="text-white">Droit de retirer votre consentement :</strong> à tout moment pour les traitements basés sur le consentement</li>
          </ul>
          <p className="leading-relaxed">
            Pour exercer vos droits, contactez-nous à :{' '}
            <a href="mailto:privacy@intellica.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              privacy@intellica.com
            </a>
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            8. Sécurité
          </h2>
          <p className="leading-relaxed">
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
            pour protéger vos données : chiffrement HTTPS, hachage des mots de passe, 
            accès restreint aux données, sauvegardes régulières.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            9. Transferts de données
          </h2>
          <p className="leading-relaxed">
            Vos données peuvent être hébergées sur des serveurs situés hors de l'Union Européenne. 
            Dans ce cas, nous nous assurons que des garanties appropriées sont en place 
            (clauses contractuelles types, certification Privacy Shield).
          </p>
        </section>

        {/* Section 10 - Gestion cookies */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            10. Gestion des cookies
          </h2>
          <p className="leading-relaxed mb-4">
            Vous pouvez modifier vos préférences de cookies à tout moment :
          </p>
          <button
            onClick={resetConsent}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            <span>🍪</span>
            <span>Modifier mes préférences de cookies</span>
          </button>
        </section>

        {/* Section 11 */}
        <section className="mb-8 lg:mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-4 pb-2 border-b border-slate-700">
            11. Contact
          </h2>
          <p className="leading-relaxed mb-4">
            Pour toute question concernant cette politique ou vos données personnelles :<br />
            <strong className="text-white">Email :</strong>{' '}
            <a href="mailto:privacy@intellica.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              privacy@intellica.com
            </a>
          </p>
          <p className="leading-relaxed">
            Vous avez également le droit d'introduire une réclamation auprès de la CNIL :<br />
            <a 
              href="https://www.cnil.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              www.cnil.fr
            </a>
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
            Retour au tableau de bord
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
