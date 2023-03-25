import { useEffect, useState } from "react";
import Image from "next/image";

interface FallbackImageProps {
  src: string;
}

export default function FallbackCountryImage({
  src,
  ...rest
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      src={imgSrc ? imgSrc : "/no-currency-fallback.svg"}
      onError={() => setImgSrc("/no-currency-fallback.svg")}
      alt="currencyImage"
      width={16}
      height={12}
    />
  );
}
