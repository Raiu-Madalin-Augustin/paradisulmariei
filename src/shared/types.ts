export enum SelectedPage {
  Home = "acasă",
  OurAttractions = "atracții",
  LocationPhotos = "împrejurimi",
  Contact = "contact",
  Events = "evenimente",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
