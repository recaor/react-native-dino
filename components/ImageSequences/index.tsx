import * as React from "react";
import { Image } from "react-native";

interface IProps {
  images: any[];
  speed?: number;
}

const ImageSequences = ({ images, speed = 40 }: IProps) => {
  const [currentImage, setCurrentImage] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((count) => {
        if (count === images.length - 1) {
          return 0;
        }
        return count + 1;
      });
    }, speed);
    return () => {
      console.log("imageSequences interval clear");
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <Image
        source={images[currentImage]}
        resizeMode="contain"
        style={{ width: "100%", height: "100%" }}
      />
    </>
  );
};

export default ImageSequences;
