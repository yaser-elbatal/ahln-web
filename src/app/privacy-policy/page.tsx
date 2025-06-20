{
  /* eslint-disable react/no-unescaped-entities */
}

const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-screen bg-background text-text font-sans p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10 pt-10">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            This policy explains how Ahln (&quot;we,&quot; &quot;us&quot;)
            collects, uses, stores, and processes your personal information.
            Applicable to all users of our website, app, and hardware services
            in compliance with UAE data protection laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. Information We Collect
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              <strong>Account & Identity Data:</strong> name, email, phone,
              address, profile photo from app.
            </li>
            <li>
              <strong>Delivery & Usage Data:</strong> tracking numbers, delivery
              history, timestamps, OTP/PIN logs, device-sharing records.
            </li>
            <li>
              <strong>Device & Technical Data:</strong> IP, MAC addresses,
              device ID, OS version, app usage logs, camera
              livestream/recordings.
            </li>
            <li>
              <strong>Location Data:</strong> optional device geolocation for
              delivery accuracy.
            </li>
            <li>
              <strong>Support & Communication Data:</strong> inquiries, chat
              logs, survey responses.
            </li>
            <li>
              <strong>Analytics Data:</strong> aggregated usage info to optimize
              app and device performance.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Use of Personal Data
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              To provide, manage, and maintain delivery services and smart-box
              functionality.
            </li>
            <li>Authenticate users and secure remote box access.</li>
            <li>
              Monitor and record video streams for delivery verification and
              security.
            </li>
            <li>Notify users of deliveries, alerts, or app updates.</li>
            <li>
              Analyze system performance, usage trends, and improve features.
            </li>
            <li>
              Customer support, troubleshooting, and compliance with legal
              obligations.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            4. Data Sharing with Third Parties
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell or rent personal data to third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            5. Cookies & Tracking Technologies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our website and app use cookies, web beacons, and similar tech to
            enhance user experience and gather analytics.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Upon first visit, consent is obtained via pop-up banner; disabling
            cookies may affect functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            6. Data Retention & Deletion
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Personal, transactional, and device data retained while your account
            is active and up to 5 years afterward (or longer if legally
            required).
          </p>
          <p className="text-gray-700 leading-relaxed">
            You may request access, correction, or deletion by contacting
            info@ahln.ae. We will respond in accordance with UAE data protection
            regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Security Measures</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              We use encryption (TLS/SSL), secure authentication (2FA), and
              secure cloud/video storage.
            </li>
            <li>
              Hardware includes anti-tamper sensors, secure locks, and camera
              encryption.
            </li>
            <li>
              While measures are in place, no system is entirely immune to
              breaches.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Policy Updates</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this policy; revised versions will be dated and posted
            on our website. Notification will be sent through the app or email.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Your Rights</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Under applicable UAE data protection law, you may:</li>
            <li>Access and obtain a copy of your data.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion or restriction of processing.</li>
            <li>Withdraw consent (where processing is based on consent).</li>
            <li>Lodge a complaint with UAE supervisory authorities.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            12. Contact Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>Data Protection Officer</strong>
            <br />
            Email: info@ahln.ae
            <br />
            Phone: +971 4 269 3935
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
