import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">
                  df
                </span>
              </div>
              <span className="font-semibold text-foreground">DevFolio</span>
            </div>
            <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
            {/* Left: Text */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Your portfolio data in one place.
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Write once, deploy everywhere. Store your projects, skills, and
                experience in DevFolio CMS. Fetch it via API—no auth, no hassle.
              </p>
              <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90">
                Get Started <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Right: Live Example */}
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                API Response
              </p>
              <pre className="mt-4 overflow-x-auto font-mono text-xs text-foreground">
                {`{
  "project": {
    "title": "DevFolio CMS",
    "description": "API-first portfolio backend",
    "tech": ["TypeScript", "React", "PostgreSQL"],
    "link": "https://devfolio.app",
    "deployed": true
  }
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-t border-border py-20">
          <h2 className="mb-12 text-3xl font-bold text-foreground">
            How it works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-semibold text-primary">
                1
              </div>
              <h3 className="font-semibold text-foreground">Register</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Create an account and set up your portfolio profile in minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-semibold text-primary">
                2
              </div>
              <h3 className="font-semibold text-foreground">Add your data</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Enter projects, skills, and experience. Add links, tech stacks,
                and images once. Update anywhere.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-semibold text-primary">
                3
              </div>
              <h3 className="font-semibold text-foreground">Fetch via API</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Query your data from any frontend. No authentication required
                for public endpoints.
              </p>
            </div>
          </div>
        </section>

        {/* Real Example */}
        <section className="border-t border-border py-20">
          <h2 className="mb-8 text-3xl font-bold text-foreground">
            Example: Real project
          </h2>
          <div className="rounded-lg border border-border bg-card p-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Project
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  E-commerce Platform
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Full-stack marketplace with real-time inventory, payments, and
                  analytics.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Next.js", "PostgreSQL", "Stripe", "React"].map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Your API Call
                </p>
                <pre className="mt-4 overflow-x-auto rounded bg-muted p-4 font-mono text-xs text-foreground">
                  {`curl https://api.devfolio.app/v1/projects/my-ecommerce \\
  -H "Authorization: Bearer YOUR_PUBLIC_KEY"

{
  "id": "proj_1a2b3c",
  "title": "E-commerce Platform",
  "description": "Full-stack marketplace...",
  "image": "https://...",
  "technologies": ["Next.js", "PostgreSQL", "Stripe"],
  "liveUrl": "https://store.example.com",
  "repositoryUrl": "https://github.com/...",
  "featured": true,
  "createdAt": "2024-06-15T10:30:00Z"
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="border-t border-border py-20">
          <h2 className="mb-8 text-3xl font-bold text-foreground">
            What's included
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Projects (images, links, tech stack)",
              "Skills (with proficiency levels)",
              "Work experience (roles, descriptions)",
              "Public API (no auth required)",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-lg border border-border bg-card p-4"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-sm font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-border py-20">
          <div className="rounded-lg bg-primary/5 border border-primary/20 p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Ready to own your portfolio data?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Start building in seconds. Public API endpoints. No credit card
              required.
            </p>
            <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Get Started <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
                  <span className="text-xs font-bold text-primary-foreground">
                    df
                  </span>
                </div>
                <span className="font-semibold text-foreground">DevFolio</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Portfolio backend for developers.
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2024 DevFolio. Built for developers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
