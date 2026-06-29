const ExampleSection = () => {
  return (
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

          <div className="md:col-span-2 overflow-hidden">
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
  );
};

export default ExampleSection;
