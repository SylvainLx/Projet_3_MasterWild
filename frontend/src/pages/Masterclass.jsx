import { AspectRatio } from "@chakra-ui/react";

export default function Masterclass() {
  return (
    <div display="flex" align="center">
      <AspectRatio margin={{ base: "none", md: "40px" }}>
        <iframe
          title="Masterclass"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
        />
      </AspectRatio>
    </div>
  );
}
