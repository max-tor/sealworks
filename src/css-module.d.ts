interface StylesDictionary {
  [className: string]: string;
}

declare module '*.css' {
  const styles: StylesDictionary;
  export default styles;
}
