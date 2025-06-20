{
  /* eslint-disable react/no-unescaped-entities */
}

const CookiePolicyPage = () => {
  return (
    <main className="min-h-screen bg-background text-text font-sans p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10 pt-10">
        <h1 className="text-3xl font-bold mb-6">Ahln. Cookie Policy</h1>

        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed">
            This Cookie Policy explains how Ahln. (&quot;we,&quot;
            &quot;us,&quot; &quot;our&quot;) uses cookies and similar
            technologies when you visit our website (ahln.ae), mobile app, or
            other digital platforms. It is part of our Privacy Policy and should
            be read alongside it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. What are cookies and tracking technologies?
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              Cookies are small text files stored on your device when you visit
              a site.
            </li>
            <li>
              We also use web beacons, pixel tags, and other local storage tools
              (“tracking technologies”) to recognize your device and track
              activity. These are essential for site functionality and
              analytics.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. Why we use cookies?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies for the following purposes:
          </p>
          <table className="min-w-full bg-white border border-gray-200 mt-4">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Category</th>
                <th className="py-2 px-4 border-b text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Essential cookies</td>
                <td className="py-2 px-4 border-b">
                  Required for basic functions (e.g., login, delivery tracking,
                  cookie banner preferences). These cannot be disabled.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Performance & analytics</td>
                <td className="py-2 px-4 border-b">
                  Gather anonymous data on site/app usage (e.g., page visits,
                  load times) to improve performance.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Functional cookies</td>
                <td className="py-2 px-4 border-b">
                  Remember your preferences (language, remembered devices, PIN
                  settings).
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  Advertising & targeting cookies
                </td>
                <td className="py-2 px-4 border-b">
                  Deliver relevant ads, track ad campaign performance, or
                  personalize marketing content.
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Third-party cookies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may allow third-party services (e.g., Google Analytics, Facebook
            pixels, couriers) to place cookies via our platform for analytics,
            advertising, or integrations. These cookies are governed by the
            third parties’ own policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            4. Your cookie choices and consent
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              Upon your first visit, you’ll see a cookie banner asking for
              consent for non-essential cookies. You can:
              <ul className="list-circle list-inside ml-5">
                <li>Accept all</li>
                <li>Reject non-essential (essential cookies remain active)</li>
                <li>Manage preferences</li>
              </ul>
            </li>
            <li>
              You may modify or revoke cookie consent at any time via the
              banner, our Cookie Preferences center, or by adjusting your
              device/browser settings.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cookie duration</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Session cookies expire after your browsing session ends.</li>
            <li>
              Persistent cookies remain for a set period (e.g., 30 days, 1 year)
              as defined in the cookie metadata.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            6. How to manage cookies
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              Browser/device settings: Most allow you to delete existing cookies
              or block future cookies.
            </li>
            <li>
              Disabling cookies may prevent some features (e.g., login,
              personalized settings, secure deliveries) from working.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            7. Changes to this Cookie Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this policy from time to time. Any changes will be
            posted here with an updated “Last Updated” date and notified via
            banner or email as needed.
          </p>
        </section>
      </div>
    </main>
  );
};

export default CookiePolicyPage;
