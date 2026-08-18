export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">
        <strong>Last updated: 30 June, 2026</strong>
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">1. Agreement to Terms</h2>
      <p className="mb-4">
        These Terms of Service ("Terms") govern your access to and use of
        DevFolio CMS (the "Service"), operated by Md Mezbah Uddin ("we," "us,"
        "our"). By creating an account or otherwise using the Service, you agree
        to be bound by these Terms. If you do not agree, do not use the Service.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">
        2. Description of the Service
      </h2>
      <p className="mb-4">
        DevFolio CMS is a backend platform that allows developers to create an
        account, manage structured portfolio data (projects, skills, work
        experience, images, and related content), and access that data through a
        public API for use in their own portfolio websites or other
        applications. DevFolio CMS does not provide a portfolio website itself —
        it is a content management and API service only.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">3. Accounts</h2>

      <h3 className="text-xl font-bold mt-4 mb-2">3.1 Registration</h3>
      <p className="mb-4">
        To use the Service, you must register an account with a valid email
        address, a password, and a unique username. You are responsible for
        maintaining the confidentiality of your password, and for all activity
        that occurs under your account.
      </p>

      <h3 className="text-xl font-bold mt-4 mb-2">3.2 Username</h3>
      <p className="mb-4">
        Your username becomes part of your public profile URL and public API
        endpoints. Usernames must not impersonate others, infringe on
        trademarks, or be misleading. We reserve the right to reclaim or
        restrict usernames that violate this provision.
      </p>

      <h3 className="text-xl font-bold mt-4 mb-2">3.3 Accuracy</h3>
      <p className="mb-4">
        You agree to provide accurate information during registration and to
        keep your account information up to date.
      </p>

      <h3 className="text-xl font-bold mt-4 mb-2">3.4 Account Security</h3>
      <p className="mb-4">
        You must notify us promptly at{" "}
        <a
          href="mailto:extraordinarymisbah@gmail.com"
          className="underline"
        >
          extraordinarymisbah@gmail.com
        </a>{" "}
        if you become aware of any unauthorized access to your account.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">4. User Content</h2>

      <h3 className="text-xl font-bold mt-4 mb-2">4.1 Ownership</h3>
      <p className="mb-4">
        You retain full ownership of all content you create, upload, or submit
        to the Service, including project descriptions, images, links, skills,
        and experience entries ("User Content").
      </p>

      <h3 className="text-xl font-bold mt-4 mb-2">4.2 License Granted to Us</h3>
      <p className="mb-4">
        By submitting User Content and setting a project's status to
        "Published," you grant us a worldwide, non-exclusive, royalty-free
        license to host, store, reproduce, and serve that content via the public
        API, for the sole purpose of operating the Service as you have
        configured it. This license ends when you delete the content or your
        account, subject to Section 4.4 below.
      </p>

      <h3 className="text-xl font-bold mt-4 mb-2">
        4.3 Your Responsibility for Content
      </h3>
      <p className="mb-4">
        You are solely responsible for the User Content you publish. You
        represent that:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          You own or have the necessary rights to all content you upload,
          including images
        </li>
        <li>
          Your content does not infringe any third party's intellectual
          property, privacy, or other rights
        </li>
        <li>Your content does not violate any applicable law</li>
      </ul>

      <h3 className="text-xl font-bold mt-4 mb-2">4.4 Removal of Content</h3>
      <p className="mb-4">
        We reserve the right, but do not assume the obligation, to remove or
        restrict access to any User Content that we reasonably believe violates
        these Terms, infringes on third-party rights, or is otherwise harmful,
        without prior notice.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">5. Acceptable Use</h2>
      <p className="mb-4">You agree not to use the Service to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Upload or publish unlawful, defamatory, fraudulent, or infringing
          content
        </li>
        <li>Upload images or content you do not have the right to use</li>
        <li>
          Attempt to gain unauthorized access to another user's account or data
        </li>
        <li>
          Abuse, overload, or attempt to circumvent rate limits on the public
          API
        </li>
        <li>
          Use the Service to build or operate a directly competing product
          without authorization
        </li>
        <li>
          Use automated means to scrape or bulk-extract data from the Service
          beyond normal API use
        </li>
        <li>
          Misrepresent your identity or affiliation, including impersonating
          another developer or organization
        </li>
      </ul>
      <p className="mb-4">
        We reserve the right to suspend or terminate accounts that violate this
        section.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">6. The Public API</h2>

      <h3 className="text-xl font-bold mt-4 mb-2">
        6.1 No Authentication for Public Data
      </h3>
      <p className="mb-4">
        Published content is accessible via our public API without
        authentication, by design. Do not publish content you do not want to be
        publicly and freely accessible to any party. Draft and archived projects
        are never exposed through the public API and are accessible only within
        your own authenticated dashboard.
      </p>

      <h3 className="text-xl font-bold mt-4 mb-2">6.2 Rate Limiting</h3>
      <p className="mb-4">
        The public API is rate-limited on a per-IP basis to maintain service
        stability for all users. We may adjust rate limits at any time without
        prior notice.
      </p>

      <h3 className="text-xl font-bold mt-4 mb-2">
        6.3 No Guarantee of API Stability
      </h3>
      <p className="mb-4">
        While we aim to maintain backward compatibility, the API's structure,
        endpoints, and response formats may change as the Service evolves,
        particularly during this MVP phase. We will make reasonable efforts to
        communicate breaking changes in advance where practical.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">7. Service Availability</h2>

      <h3 className="text-xl font-bold mt-4 mb-2">7.1 No Uptime Guarantee</h3>
      <p className="mb-4">
        The Service is currently operated on free-tier infrastructure and is
        provided without any guaranteed uptime or service level agreement (SLA).
        The Service may be unavailable or experience latency, including delays
        caused by infrastructure cold-starts inherent to our hosting providers.
      </p>

      <h3 className="text-xl font-bold mt-4 mb-2">
        7.2 Right to Modify or Discontinue
      </h3>
      <p className="mb-4">
        We reserve the right to modify, suspend, or discontinue the Service, in
        whole or in part, at any time, with or without notice. We will make
        reasonable efforts to notify registered users in advance of any planned
        discontinuation.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">8. Intellectual Property</h2>
      <p className="mb-4">
        The Service itself, including its design, branding, codebase, and
        underlying technology, is the property of Md Mezbah Uddin and is
        protected by applicable intellectual property laws. These Terms do not
        grant you any rights to our intellectual property beyond what is
        necessary to use the Service as intended.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">9. Third-Party Services</h2>
      <p className="mb-4">
        The Service relies on third-party infrastructure providers, including
        database and object storage hosting, as described in our Privacy Policy.
        We are not responsible for outages, data loss, or other issues caused by
        the failure of these third-party providers, though we will make
        reasonable efforts to mitigate impact on users.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">
        10. Disclaimer of Warranties
      </h2>
      <p className="mb-4">
        THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES
        OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
        IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
        AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE
        UNINTERRUPTED, SECURE, OR ERROR-FREE.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">
        11. Limitation of Liability
      </h2>
      <p className="mb-4">
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, MD MEZBAH UDDIN SHALL NOT BE
        LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
        DAMAGES, INCLUDING LOSS OF DATA, REVENUE, OR GOODWILL, ARISING FROM YOUR
        USE OF OR INABILITY TO USE THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF
        THE POSSIBILITY OF SUCH DAMAGES.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">12. Indemnification</h2>
      <p className="mb-4">
        You agree to indemnify and hold harmless Md Mezbah Uddin from any
        claims, damages, or expenses arising from your User Content, your
        violation of these Terms, or your violation of any third party's rights.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">13. Termination</h2>

      <h3 className="text-xl font-bold mt-4 mb-2">13.1 By You</h3>
      <p className="mb-4">
        You may delete your account at any time through your account settings or
        by contacting us at{" "}
        <a
          href="mailto:extraordinarymisbah@gmail.com"
          className="underline"
        >
          extraordinarymisbah@gmail.com
        </a>
        .
      </p>

      <h3 className="text-xl font-bold mt-4 mb-2">13.2 By Us</h3>
      <p className="mb-4">
        We may suspend or terminate your account, with or without notice, if we
        reasonably believe you have violated these Terms, engaged in abusive or
        unlawful behavior, or for any other reason at our discretion,
        particularly during this early-stage MVP phase of the Service.
      </p>

      <h3 className="text-xl font-bold mt-4 mb-2">
        13.3 Effect of Termination
      </h3>
      <p className="mb-4">
        Upon termination, your right to use the Service ceases immediately. Your
        data will be handled in accordance with our Privacy Policy, including
        our soft-deletion and retention practices.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">
        14. Changes to These Terms
      </h2>
      <p className="mb-4">
        We may update these Terms from time to time. We will update the "Last
        updated" date when changes are made. Material changes will be
        communicated to registered users where practical. Continued use of the
        Service after changes take effect constitutes acceptance of the revised
        Terms.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">15. Contact Us</h2>
      <p className="mb-4">
        If you have questions about these Terms, contact us at:
      </p>
      <p className="mb-4">
        <a
          href="mailto:extraordinarymisbah@gmail.com"
          className="underline"
        >
          extraordinarymisbah@gmail.com
        </a>
      </p>
    </div>
  );
}

