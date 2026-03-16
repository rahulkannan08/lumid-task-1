interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  return (
    <main className="pt-24">
      <section className="container mx-auto px-6 py-24 max-w-7xl">
        <h1 className="text-4xl font-bold text-neutral-900 capitalize">
          {slug.replace(/-/g, ' ')}
        </h1>
        <p className="mt-4 text-neutral-600">Project detail coming soon.</p>
      </section>
    </main>
  );
}
