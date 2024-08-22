export interface IEvent {
  title: string;
  slug: string;
  calendar?: string;
  location?: string;
  price?: number;
  image: string;
  descriptions?: string;
  isNew?: boolean;
  isHot?: boolean;
}

export interface ISocial {
  name?: string;
  icon: any;
  key: string;
}

export interface Field {
  fieldName: string;
  label: string;
  placeholder?: string;
  type: "input" | "select" | "textarea" | "date";
  rows?: number;
  required?: boolean;
  options?: { label: string; value: string }[];
}
