import { useEffect, useState } from "react";
import Image from "next/image";

interface FallbackImageProps {
  src: string;
}

export default function FallbackCountryImage({ src }: FallbackImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  return (
    <Image
      src={imageSrc ? imageSrc : "/no-currency-fallback.svg"}
      onError={() => setImageSrc("/no-currency-fallback.svg")}
      alt="currencyImage"
      width={16}
      height={12}
    />
  );
}
