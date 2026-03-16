interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  return (
    <main className="pt-24">
      <section className="container mx-auto px-6 py-24 max-w-7xl">
        <h1 className="text-4xl font-bold text-neutral-900 capitalize">
          {slug.replace(/-/g, ' ')}
        </h1>
        <p className="mt-4 text-neutral-600">Blog post coming soon.</p>
      </section>
    </main>
  );
}
