# Privacy Policy

**Last updated: [DATE]**

## 1. Introduction

This Privacy Policy explains how DevFolio CMS ("we," "us," "the Service") collects, uses, stores, and protects your personal data when you use our platform to manage and publish your developer portfolio data via our API.

DevFolio CMS is operated by Antisol IT. If you have questions about this policy, contact us at [CONTACT EMAIL].

By creating an account, you agree to the collection and use of information as described in this policy.

## 2. Information We Collect

### 2.1 Account Information

When you register, we collect:

- Email address
- Password (stored as a salted hash — we never store or have access to your plaintext password)
- Username (publicly visible; used in your public profile URL)

### 2.2 Profile Information

Information you choose to add to your profile:

- Full name
- Avatar image
- Short biography

### 2.3 Content You Create

Data you enter to populate your portfolio, all of which may be displayed publicly depending on your settings:

- Projects (title, descriptions, case study content, live and repository URLs, supplementary links)
- Project images
- Skills and proficiency levels
- Work experience entries (company, role, dates, descriptions)

### 2.4 Technical Information

- API request logs, including IP addresses, for the purpose of rate limiting and abuse prevention
- Timestamps of account creation, updates, and API key usage

### 2.5 API Keys

If you generate an API key for accessing your own draft/unpublished content, we store a cryptographic hash of that key. The plaintext key is shown to you only once at creation and is not retrievable afterward.

## 3. How We Use Your Information

We use the information we collect to:

- Provide and operate the Service, including your dashboard and public API
- Authenticate your account and protect it from unauthorized access
- Serve your published content to API consumers (e.g., your own portfolio website)
- Enforce rate limits and prevent abuse of the public API
- Communicate with you about your account, including security notices
- Maintain the technical operation, security, and integrity of the Service

We do not sell your personal data to third parties.

## 4. What Is Public vs. Private

It is important you understand what is publicly accessible:

**Public** (visible to anyone via our public API, no authentication required):

- Your username
- Full name, avatar, and bio (if set)
- Any project marked "Published," including its images, descriptions, tech stack, and links
- Your skills and proficiency levels
- Your work experience entries

**Private** (never exposed via the public API):

- Your email address
- Your password hash
- Projects marked "Draft" or "Archived" (accessible only to you, or via an API key you explicitly generate for that purpose)
- Your API keys (only their hashes are stored; the keys themselves are never displayed again after creation)

You control what is published. Anything you set to "Draft" status remains private until you choose to publish it.

## 5. Third-Party Service Providers

We use the following third-party infrastructure providers to operate the Service. Each processes a limited subset of your data as described:

| Provider                  | Purpose                                                     | Data Involved                   |
| ------------------------- | ----------------------------------------------------------- | ------------------------------- |
| Neon (PostgreSQL hosting) | Database storage for all account and content data           | All data described in Section 2 |
| Cloudflare R2             | Object storage for uploaded images (avatar, project images) | Image files you upload          |

We select providers that maintain industry-standard security practices. However, we encourage you to review these providers' own privacy and security practices, as they operate independently of us.

## 6. Data Retention and Deletion

### 6.1 Soft Deletion

When you delete a project or your account, we mark the record as deleted in our system rather than immediately and permanently erasing it from our database. This allows for recovery in case of accidental deletion and supports operational integrity. Soft-deleted content is immediately excluded from all public and private views and from the API.

### 6.2 Permanent Deletion

[PLACEHOLDER — define your actual retention period, e.g.:] Soft-deleted data is permanently purged from our systems after [X days/months]. If you would like your data permanently and immediately erased sooner, contact us at [CONTACT EMAIL].

### 6.3 Data Export

[PLACEHOLDER — if you build this feature:] You may request a copy of your personal data by contacting [CONTACT EMAIL]. / [If not yet built:] A self-service data export feature is planned but not yet available. In the meantime, you may request your data by contacting us directly.

## 7. Data Security

We take reasonable measures to protect your data, including:

- Storing passwords as salted, hashed values using industry-standard algorithms
- Storing API keys as hashed values, never in plaintext
- Restricting image uploads to occur directly between your browser and our storage provider, rather than passing through and being temporarily held on our servers
- Validating file types and sizes on upload

No method of storage or transmission is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.

## 8. Your Rights

Depending on your location, you may have rights including:

- The right to access the personal data we hold about you
- The right to correct inaccurate data (available directly through your dashboard for most fields)
- The right to request deletion of your data
- The right to request a copy of your data in a portable format
- The right to withdraw consent, where processing is based on consent

To exercise any of these rights, contact us at [CONTACT EMAIL].

If you are located in the European Economic Area, you also have the right to lodge a complaint with your local data protection authority.

## 9. Children's Privacy

The Service is not directed at, and is not intended for use by, individuals under the age of 16. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us so we can remove it.

## 10. Changes to This Policy

We may update this Privacy Policy from time to time. We will update the "Last updated" date at the top of this page when changes are made. Continued use of the Service after changes take effect constitutes acceptance of the revised policy.

## 11. Governing Law

[PLACEHOLDER — specify your jurisdiction, e.g.: This policy is governed by the laws of [Country/State], without regard to its conflict of law provisions.]

## 12. Contact Us

If you have questions about this Privacy Policy or how your data is handled, contact us at:

[CONTACT EMAIL]
[Optionally: business address, if required in your jurisdiction]
