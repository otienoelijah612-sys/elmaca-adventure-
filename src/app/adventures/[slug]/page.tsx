type AdventureDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function AdventureDetailPage({
  params,
}: AdventureDetailPageProps) {
  await params;

  return <main />;
}
