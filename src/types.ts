export interface imgLink {
  /** Website link destination */
  link: string;
  /** Local path to project image */
  imagePath: string;
  /** Project image alternate text */
  imageAlt: string;
}

export interface proj extends imgLink {
  /** Title of the project */
  name: string;
  /** Short description of the project */
  desc: string;
  /** Tag list containing relevant technologies of the project */
  tags: string[];
}
