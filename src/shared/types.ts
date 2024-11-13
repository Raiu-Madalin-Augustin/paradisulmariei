export enum SelectedPage {
  Home = "acasă",
  OurAttractions = "viitoareleatracți",
  LocationPhotos = "încurând",
  Contact = "contact",
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
