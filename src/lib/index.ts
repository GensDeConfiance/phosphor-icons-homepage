import { Icon } from "@gdc/phosphor-icons-react";
import { IconEntry as CoreEntry } from "@gdc/phosphor-icons-core";

export interface IconEntry extends CoreEntry {
  Icon: Icon;
}

export enum SnippetType {
  REACT = "React",
  VUE = "Vue",
  HTML = "Web",
  FLUTTER = "Flutter",
  ELM = "Elm",
  SWIFT = "Swift",
}
