import Image from 'next/image';
import icons from '@/lib/feature-icons.json';

export function FeatureIcon({ name }: { name: string }) {
  const icon = icons[name as keyof typeof icons];
  return (
    <Image
      src={icon.src}
      width={40}
      height={40}
      alt=""
      aria-hidden="true"
      loading="eager"
      className="feature-duotone-icon"
    />
  );
}
