import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
}

export default function imageBox({ src, alt }: Props) {
  return <Image src={src} alt={alt} layout="responsive" className="w-100" />;
}
