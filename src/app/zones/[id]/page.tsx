import Container from '@/components/Container';

interface ZonePageProps {
  params: {
    id: string;
  };
}

export default function Zone({ params }: ZonePageProps) {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">المنطقة {params.id}</h1>
      <div className="space-y-4">
        <p>Zone {params.id} Information</p>
      </div>
    </Container>
  );
}