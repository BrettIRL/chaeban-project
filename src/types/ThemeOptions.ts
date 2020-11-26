import { RGBColor } from "react-color";
import { IconType } from "react-icons";

export interface Layout {
  id: number;
  element: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export interface Colorway {
  id: number;
  name: string;
  icon?: IconType;
  bgColor: RGBColor;
  textColor: RGBColor;
  btnColor: RGBColor;
  btnTextColor: RGBColor;
}
