

export type Feature = {
  buttons: Button[];
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
  variant: "primary" | "outline-primary";
};
