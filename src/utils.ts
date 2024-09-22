interface ImageData {
  top: number;
  left: number;
  width: number;
  height: number;
  alt?: string;
}
export const getX = (name: string, px: number, blockWidth: number) =>
  `${px < 0 ? '-' : ''}${name}-[${(Math.abs(px) / blockWidth) * 100}%]`;
export const getY = (name: string, py: number, blockHeight: number) =>
  `${py < 0 ? '-' : ''}${name}-[${(Math.abs(py) / blockHeight) * 100}%]`;

export const getContainerClasses = ({
  blockWidth,
  blockHeight,
}: {
  blockWidth: number;
  blockHeight: number;
}) =>
  `relative h-[${(blockHeight / blockWidth) * 100}vw] lg:h-[${blockHeight}px] lg:w-[${blockWidth}px]`;

export const getImgClasses = ({
  top,
  left,
  width,
  height,
  blockWidth,
  blockHeight,
}: {
  top: number;
  left: number;
  width: number;
  height: number;
  blockWidth: number;
  blockHeight: number;
}) =>
  `!absolute ${getX('left', left, blockWidth)} ${getY('top', top, blockHeight)} ${getX('w', width, blockWidth)} ${getY('h', height, blockHeight)} shadow-lg`;

export const showImagesInfo = ({
  blockWidth,
  blockHeight,
  images,
}: {
  blockWidth: number;
  blockHeight: number;
  images: ImageData[];
}) => {
  console.log({ container: getContainerClasses({ blockWidth, blockHeight }) });
  images.forEach(({ top, left, width, height }, index) => {
    console.log({
      index,
      breakpoints: JSON.stringify([
        width,
        Math.round((width / blockWidth) * 1024),
      ]),
      image: getImgClasses({
        top,
        left,
        width,
        height,
        blockWidth,
        blockHeight,
      }),
    });
  });
};

// export const getBreakpoints = (width: number) => [width, 640, 768, 1024];
