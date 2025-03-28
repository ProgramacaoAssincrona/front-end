import ImageAndTextPageComponent from "@/features/app/components/ImageAndTextPageComponent";

export default function NotFound() {
  const src = `/notFound1.svg`;

  return (
    <div className="flex h-screen items-center justify-center">
      <ImageAndTextPageComponent
        src={src}
        text={<h2>Página não encontrada</h2>}
      />
    </div>
  );
}
