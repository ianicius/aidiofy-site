import type { FC } from "react";
import { LegalLayout } from "./LegalLayout";

export const PrivacyPolicy: FC = () => {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="27 November 2025">
      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">1. Data controller</h2>
        <p>
          The controller of your personal data is Rafał Janicki, ul. Jagiellońska 36/42, 03-719 Warsaw, Poland. Contact:
          <a className="text-primary hover:text-white transition-colors ml-1" href="mailto:rj@aidiofy.com">
            rj@aidiofy.com
          </a>
          .
        </p>
        <p>
          This Privacy Policy explains how we collect, use, and protect your personal data when you use AIdiofy, our web
          application that converts scanned text into audio using TTS and AI models. We aim to comply with the EU
          General Data Protection Regulation (GDPR) and applicable data protection laws.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">2. Scope</h2>
        <p>This Policy applies to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>visitors to the AIdiofy website,</li>
          <li>registered users of the web application,</li>
          <li>future users of mobile apps (Android/iOS) once launched.</li>
        </ul>
        <p>
          It covers data processed when you create and use an account, upload or submit content (text/images), generate
          audio, contact us or subscribe to a newsletter, and interact with our website (including cookies and analytics).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">3. Categories of data we collect</h2>
        <p>Depending on how you use the Service, we may process:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong className="text-white">Account data:</strong> e-mail address; authentication data (password hash if you register
            with e-mail/password, or tokens for social login such as Google).
          </li>
          <li>
            <strong className="text-white">Usage data:</strong> how you use the Service (features, frequency, timestamps), technical logs and events (e.g. request IDs, error logs).
          </li>
          <li>
            <strong className="text-white">Device and connection data:</strong> IP address (with possible IP anonymization), browser type and version, operating system, approximate location derived from IP (city/country level).
          </li>
          <li>
            <strong className="text-white">Content processed through the Service:</strong> text you submit (e.g. parts of manuals, descriptions, scenarios) and images you upload. Content is processed only to generate audio and is not stored long term; it may appear temporarily in memory, caches, or short-term logs necessary for delivering the Service securely.
          </li>
          <li>
            <strong className="text-white">Communication data:</strong> messages you send us via e-mail or forms; your preferences and consents (e.g. newsletter or optional content use).
          </li>
          <li>
            <strong className="text-white">Newsletter data (optional):</strong> e-mail address and subscription metadata if you opt in when the feature is offered.
          </li>
        </ul>
        <p>We do not intentionally collect special categories of data. Avoid uploading sensitive data unless necessary.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">4. Purposes and legal bases</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong className="text-white">Providing and operating the Service:</strong> account creation, authentication, processing text/images to generate audio; legal basis: performance of a contract (Art. 6(1)(b) GDPR).
          </li>
          <li>
            <strong className="text-white">Customer support and communication:</strong> responding to requests, bug reports, feedback; legal basis: contract (Art. 6(1)(b)) and/or legitimate interest (Art. 6(1)(f)).
          </li>
          <li>
            <strong className="text-white">Analytics and service improvement:</strong> understanding usage, improving performance, detecting abuse; legal basis: legitimate interest (Art. 6(1)(f)).
          </li>
          <li>
            <strong className="text-white">Optional research and improvement using User Content/Generated Output:</strong> only if you explicitly opt in; legal basis: consent (Art. 6(1)(a)). You can withdraw at any time.
          </li>
          <li>
            <strong className="text-white">Newsletter and marketing (optional):</strong> only with your consent (Art. 6(1)(a)); you can unsubscribe at any time.
          </li>
          <li>
            <strong className="text-white">Security and fraud prevention:</strong> monitoring for suspicious activity and securing systems; legal basis: legitimate interest (Art. 6(1)(f)).
          </li>
          <li>
            <strong className="text-white">Legal obligations:</strong> tax, accounting, responding to lawful requests; legal basis: compliance with legal obligations (Art. 6(1)(c)).
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">5. Cookies and analytics</h2>
        <p>We use cookies and similar technologies to keep you logged in, remember preferences, and measure traffic.</p>
        <p>
          For analytics we may use Google Analytics or similar tools (with IP anonymization where technically enabled). These tools may process IP address, browser/device data, pages visited, and actions taken.
        </p>
        <p>
          Where required by law we display a cookie banner, allow you to accept or reject non-essential cookies (e.g. analytics), and let you change preferences at any time.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">6. Recipients and processors</h2>
        <p>We may share data with service providers that help us operate AIdiofy, such as:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Google Cloud / Firebase (hosting, databases, backend infrastructure, EU data center settings),</li>
          <li>ElevenLabs (planned TTS provider),</li>
          <li>Stripe (payment processing),</li>
          <li>Google Analytics (analytics),</li>
          <li>e-mail or newsletter providers (if used in the future).</li>
        </ul>
        <p>These providers act as processors under data processing agreements. Public authorities may receive data if required by law. We do not sell personal data.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">7. International transfers</h2>
        <p>
          We aim to store and process data primarily within the EU/EEA. Some providers (e.g. Stripe, ElevenLabs, Google) may operate outside the EEA, especially in the US. Transfers will rely on appropriate safeguards, such as adequacy decisions, Standard Contractual Clauses, and additional technical/organizational measures.
        </p>
        <p>
          Contact{" "}
          <a className="text-primary hover:text-white transition-colors" href="mailto:rj@aidiofy.com">
            rj@aidiofy.com
          </a>{" "}
          for details about applicable safeguards.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">8. Data retention</h2>
        <p>We retain data only as long as necessary for the purposes described and legal requirements:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Account data: for the life of your account and up to 1 year after deletion for security/fraud/records.</li>
          <li>Content processed via the Service: mainly ephemeral; not stored long term; may appear briefly in logs/caches.</li>
          <li>Technical logs: up to 12 months unless needed longer for incident investigations.</li>
          <li>Newsletter/marketing data: until you unsubscribe or withdraw consent.</li>
          <li>Legal/finance data: for statutory retention periods.</li>
        </ul>
        <p>Data may be anonymized and retained longer for statistics.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">9. Data security</h2>
        <p>
          We use reasonable technical and organizational measures: reputable cloud infrastructure, access controls, encryption in transit (HTTPS) and where applicable at rest, and monitoring for unusual activity. No system is perfectly secure, but we strive to protect your data. In case of a high-risk breach we will notify you and the relevant authority where required.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">10. Your rights under GDPR</h2>
        <p>
          You have the right to access, rectify, erase, restrict processing, data portability, object (including to marketing), withdraw consent, and lodge a complaint with a supervisory authority.
        </p>
        <p>
          In Poland, the authority is the President of the Personal Data Protection Office (Prezes Urzędu Ochrony Danych Osobowych).
          You can exercise your rights by contacting{" "}
          <a className="text-primary hover:text-white transition-colors" href="mailto:rj@aidiofy.com">
            rj@aidiofy.com
          </a>
          . We may need to verify your identity.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">11. Children&apos;s privacy</h2>
        <p>
          The Service is not directed at children, and we do not knowingly collect personal data from children under the age required for valid consent in their country (e.g. 16 years under GDPR). If you believe we collected such data without proper consent, contact us and we will delete it.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">12. Changes to this Policy</h2>
        <p>
          We may update this Policy due to changes in the Service, legal requirements, or to improve clarity. Material changes will be notified (e.g. via website notice or e-mail). The updated Policy takes effect from the &quot;Last updated&quot; date unless required otherwise by law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">13. Contact</h2>
        <p>
          For questions or concerns, contact:
          <br />
          E-mail:{" "}
          <a className="text-primary hover:text-white transition-colors" href="mailto:rj@aidiofy.com">
            rj@aidiofy.com
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
};
