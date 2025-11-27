import type { FC } from "react";
import { LegalLayout } from "./LegalLayout";

export const TermsOfUse: FC = () => {
  return (
    <LegalLayout title="Terms of Use" lastUpdated="27 November 2025">
      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">1. Introduction</h2>
        <p>
          These Terms of Use (&quot;Terms&quot;) govern your access to and use of AIdiofy, a web application that
          converts scanned text into audio using text-to-speech (TTS) technology and AI models (&quot;Service&quot;).
          The Service is operated by Rafał Janicki, ul. Jagiellońska 36/42, 03-719 Warsaw, Poland (
          <a className="text-primary hover:text-white transition-colors" href="mailto:rj@aidiofy.com">
            rj@aidiofy.com
          </a>
          ). By creating an account or using AIdiofy, you agree to be bound by these Terms. If you do not agree, do not
          use the Service. These Terms are provided in English and governed by Polish law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">2. Service description</h2>
        <p>The Service:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>lets you upload or capture text and images (e.g. parts of board game manuals, scenarios, descriptions),</li>
          <li>processes this content using AI models and TTS engines,</li>
          <li>generates audio output that you can listen to or download (where technically available).</li>
        </ul>
        <p>
          A freemium model is offered: a free tier with limited usage and one or more paid plans with extended limits and
          features. The Service is a recreational/entertainment tool and is provided &quot;as is&quot; and &quot;as
          available&quot; without guarantee of uninterrupted or error-free operation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">3. Eligibility</h2>
        <p>
          The Service is intended for natural persons using it for their own purposes. It is not directed at children.
          If you are under the age at which you can lawfully enter into an online contract in your country (typically
          16–18), use the Service only with permission of a parent or legal guardian. By using the Service you confirm
          you have legal capacity and your use is lawful in your jurisdiction.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">4. Account registration</h2>
        <p>To use the Service, you may need an account using:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>e-mail and password, or</li>
          <li>supported social login (e.g. Google authentication).</li>
        </ul>
        <p>
          You must provide accurate information, keep login details confidential, and promptly notify us of any
          unauthorized use. You are responsible for all activities under your account. We may refuse registration,
          suspend, or terminate accounts for breach or misuse.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">5. Plans, billing, and payments</h2>
        <p>
          Some features or higher limits may require a Paid Plan. Payments are processed by Stripe or another payment
          provider. We do not store full payment card details. Pricing, limits, and features are described in the
          purchase flow and may change; where required by law you will be informed in advance. Paid Plans may be
          subscription-based or follow another billing model. Statutory withdrawal or refund rights may apply depending
          on your country.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">6. User content and intellectual property</h2>
        <p>
          &quot;User Content&quot; means any text, images, or other material you upload, capture, or submit (e.g.
          screenshots or photos of manuals, scenarios, descriptions). You retain all intellectual property rights, but
          you represent and warrant that you own or have necessary rights to use the content and grant the licenses
          below.
        </p>
        <p>
          To operate the Service, you grant us a non-exclusive, worldwide, royalty-free license to host, process,
          transmit, and temporarily store your User Content; use it as input to AI/TTS models; and generate outputs. This
          license is limited to what is technically necessary to provide the Service and for security/logging/legal
          compliance.
        </p>
        <p>
          Optional improvement/marketing: only if you explicitly opt in, you grant a license to use selected content and
          outputs (anonymized or pseudonymized) for research, service improvement, examples, demos, or marketing
          materials. You can withdraw this consent at any time by settings or e-mail; withdrawal stops future optional
          use.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">7. Generated audio and usage rights</h2>
        <p>
          Subject to these Terms and plan limits, we grant you a personal, non-exclusive, non-transferable, revocable
          license to use Generated Output for private, personal, and domestic purposes only. Commercial use (e.g.
          monetized content, podcasts, paid audiobooks, campaigns) is not permitted without a separate written
          agreement. You are responsible for legal compliance and third-party rights.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">8. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>violate laws or third-party rights;</li>
          <li>upload illegal, defamatory, hateful, discriminatory, violent, exploitative, sexually explicit, or infringing content;</li>
          <li>create deepfakes, impersonations, or misleading content likely to cause harm;</li>
          <li>circumvent usage limits, security, or technical restrictions;</li>
          <li>reverse engineer or attempt to access source code/models except where permitted by law;</li>
          <li>interfere with or disrupt the Service, servers, or networks.</li>
        </ul>
        <p>We may suspend or terminate access if we reasonably believe you violated this section.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">9. Third-party services and AI models</h2>
        <p>
          The Service relies on third-party infrastructure and tools, such as Google Cloud / Firebase (hosting/backend,
          EU region), ElevenLabs (planned TTS), Stripe (payments), and Google Analytics (analytics). Your use of some
          features may be subject to additional terms of those providers. AI and TTS models can produce incorrect,
          distorted, or unexpected outputs; do not rely on them as factual or professional advice.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">10. Beta features and changes</h2>
        <p>
          AIdiofy is under active development and may include beta or experimental features. We may modify, add, or
          remove features and plans over time. Where required by law or where changes are material, we will provide
          notice (e.g. via e-mail or in-app).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">11. Termination</h2>
        <p>
          You may stop using the Service anytime and request deletion of your account by e-mailing{" "}
          <a className="text-primary hover:text-white transition-colors" href="mailto:rj@aidiofy.com">
            rj@aidiofy.com
          </a>
          . We may suspend or terminate your account for material breach, misuse, security risks, or legal obligations.
          Upon termination, your right to use the Service and Generated Output under these Terms may end. Certain data
          may be retained for up to 1 year for legal, security, or accounting purposes as described in the Privacy
          Policy.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">12. Disclaimers</h2>
        <p>
          The Service and all content, including Generated Output, are provided &quot;as is&quot; and &quot;as
          available&quot; without warranties of any kind. We do not warrant that the Service will be uninterrupted,
          secure, or error-free, or that outputs will be accurate, reliable, or suitable for a particular purpose.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">13. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, we are not liable for loss of profits, revenue, or data; indirect,
          incidental, or consequential damages; or damages from inaccuracies or defects in Generated Output. Our total
          aggregate liability is limited to: (i) the amount you paid for the Service in the 12 months before the claim,
          or (ii) EUR 0 if you are on a Free Plan. Nothing excludes liability that cannot be excluded under applicable
          law (e.g. intentional misconduct).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">14. Changes to these Terms</h2>
        <p>
          We may update these Terms to reflect Service changes, legal requirements, or clarity improvements. Material
          changes will be notified (e.g. via e-mail or in-app). Continued use after the new Terms become effective
          constitutes acceptance.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">15. Governing law and disputes</h2>
        <p>
          These Terms are governed by Polish law (excluding conflict rules). Disputes shall be resolved by competent
          common courts in Poland unless mandatory consumer protection law in your country provides otherwise.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl md:text-2xl font-semibold text-white">16. Contact</h2>
        <p>
          For questions about these Terms, contact{" "}
          <a className="text-primary hover:text-white transition-colors" href="mailto:rj@aidiofy.com">
            rj@aidiofy.com
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
};
