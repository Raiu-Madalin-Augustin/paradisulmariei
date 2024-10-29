export enum SelectedPage {
  Home = "acasă",
  OurAttractions = "ourattractions",
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
