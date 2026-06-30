export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-5 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        <strong>Last updated: 30 June, 2026</strong>
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">1. Introduction</h2>
      <p className="mb-4">
        This Privacy Policy explains how DevFolio CMS ("we," "us," "the
        Service") collects, uses, stores, and protects your personal data when
        you use our platform to manage and publish your developer portfolio data
        via our API.
      </p>
      <p className="mb-4">
        DevFolio CMS is operated by Md Mezbah Uddin. If you have questions about
        this policy, contact us at extraordinarymisbah@gmail.com.
      </p>
      <p className="mb-4">
        By creating an account, you agree to the collection and use of
        information as described in this policy.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">
        2. Information We Collect
      </h2>

      <h3 className="text-xl font-bold mt-4 mb-2">2.1 Account Information</h3>
      <p className="mb-4">When you register, we collect:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Email address</li>
        <li>
          Password (stored as a salted hash — we never store or have access to
          your plaintext password)
        </li>
        <li>Username (publicly visible; used in your public profile URL)</li>
      </ul>

      <h3 className="text-xl font-bold mt-4 mb-2">2.2 Profile Information</h3>
      <p className="mb-4">Information you choose to add to your profile:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Full name</li>
        <li>Avatar image</li>
        <li>Short biography</li>
      </ul>

      <h3 className="text-xl font-bold mt-4 mb-2">2.3 Content You Create</h3>
      <p className="mb-4">
        Data you enter to populate your portfolio, all of which may be displayed
        publicly depending on your settings:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Projects (title, descriptions, case study content, live and repository
          URLs, supplementary links)
        </li>
        <li>Project images</li>
        <li>Skills and proficiency levels</li>
        <li>Work experience entries (company, role, dates, descriptions)</li>
      </ul>

      <h3 className="text-xl font-bold mt-4 mb-2">2.4 Technical Information</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          API request logs, including IP addresses, for the purpose of rate
          limiting and abuse prevention
        </li>
        <li>Timestamps of account creation, updates, and API key usage</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-2">
        3. How We Use Your Information
      </h2>
      <p className="mb-4">We use the information we collect to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Provide and operate the Service, including your dashboard and public
          API
        </li>
        <li>
          Authenticate your account and protect it from unauthorized access
        </li>
        <li>
          Serve your published content to API consumers (e.g., your own
          portfolio website)
        </li>
        <li>Enforce rate limits and prevent abuse of the public API</li>
        <li>
          Communicate with you about your account, including security notices
        </li>
        <li>
          Maintain the technical operation, security, and integrity of the
          Service
        </li>
      </ul>
      <p className="mb-4">
        We do not sell your personal data to third parties.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">
        4. What Is Public vs. Private
      </h2>
      <p className="mb-4">
        It is important you understand what is publicly accessible:
      </p>
      <p className="mb-4">
        <strong>Public</strong> (visible to anyone via our public API, no
        authentication required):
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Your username</li>
        <li>Full name, avatar, and bio (if set)</li>
        <li>
          Any project marked "Published," including its images, descriptions,
          tech stack, and links
        </li>
        <li>Your skills and proficiency levels</li>
        <li>Your work experience entries</li>
      </ul>
      <p className="mb-4">
        <strong>Private</strong> (never exposed via the public API):
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Your email address</li>
        <li>Your password hash</li>
      </ul>
      <p className="mb-4">
        You control what is published. Anything you set to "Draft" status
        remains private until you choose to publish it.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">
        5. Third-Party Service Providers
      </h2>
      <p className="mb-4">
        We use the following third-party infrastructure providers to operate the
        Service. Each processes a limited subset of your data as described:
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Provider</th>
              <th className="border border-gray-300 px-4 py-2">Purpose</th>
              <th className="border border-gray-300 px-4 py-2">
                Data Involved
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Neon (PostgreSQL hosting)
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Database storage for all account and content data
              </td>
              <td className="border border-gray-300 px-4 py-2">
                All data described in Section 2
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Cloudflare R2
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Object storage for uploaded images (avatar, project images)
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Image files you upload
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 mb-4">
        We select providers that maintain industry-standard security practices.
        However, we encourage you to review these providers' own privacy and
        security practices, as they operate independently of us.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">
        6. Data Retention and Deletion
      </h2>

      <h3 className="text-xl font-bold mt-4 mb-2">6.1 Soft Deletion</h3>
      <p className="mb-4">
        When you delete a project or your account, we mark the record as deleted
        in our system rather than immediately and permanently erasing it from
        our database. This allows for recovery in case of accidental deletion
        and supports operational integrity. Soft-deleted content is immediately
        excluded from all public and private views and from the API.
      </p>

      <h3 className="text-xl font-bold mt-4 mb-2">6.2 Permanent Deletion</h3>
      <p className="mb-4">
        If you would like your data permanently and immediately erased sooner,
        contact us at extraordinarymisbah@gmail.com.
      </p>

      <h3 className="text-xl font-bold mt-4 mb-2">6.3 Data Export</h3>
      <p className="mb-4">
        You may request a copy of your personal data by contacting
        extraordinarymisbah@gmail.com. A self-service data export feature is
        planned but not yet available. In the meantime, you may request your
        data by contacting us directly.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">7. Data Security</h2>
      <p className="mb-4">
        We take reasonable measures to protect your data, including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Storing passwords as salted, hashed values using industry-standard
          algorithms
        </li>
        <li>
          Restricting image uploads to occur directly between your browser and
          our storage provider, rather than passing through and being
          temporarily held on our servers
        </li>
        <li>Validating file types and sizes on upload</li>
      </ul>
      <p className="mb-4">
        No method of storage or transmission is 100% secure. While we strive to
        protect your data, we cannot guarantee absolute security.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">8. Your Rights</h2>
      <p className="mb-4">
        Depending on your location, you may have rights including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>The right to access the personal data we hold about you</li>
        <li>
          The right to correct inaccurate data (available directly through your
          dashboard for most fields)
        </li>
        <li>The right to request deletion of your data</li>
        <li>The right to request a copy of your data in a portable format</li>
        <li>
          The right to withdraw consent, where processing is based on consent
        </li>
      </ul>
      <p className="mb-4">
        To exercise any of these rights, contact us at
        extraordinarymisbah@gmail.com.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">9. Children's Privacy</h2>
      <p className="mb-4">
        The Service is not directed at, and is not intended for use by,
        individuals under the age of 16. We do not knowingly collect personal
        data from children. If you believe a child has provided us with personal
        data, please contact us so we can remove it.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">
        10. Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We will update the
        "Last updated" date at the top of this page when changes are made.
        Continued use of the Service after changes take effect constitutes
        acceptance of the revised policy.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">11. Contact Us</h2>
      <p className="mb-4">
        If you have questions about this Privacy Policy or how your data is
        handled, contact us at:
      </p>
      <p className="mb-4">extraordinarymisbah@gmail.com</p>
    </div>
  );
}
