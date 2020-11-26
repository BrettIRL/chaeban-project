import { ReactComponent as LayoutOne } from "assets/svg/layoutOne.svg";
import { ReactComponent as LayoutTwo } from "assets/svg/layoutTwo.svg";
import { ReactComponent as LayoutThree } from "assets/svg/layoutThree.svg";
import { BsImageFill } from "react-icons/bs";
import { CgColorPicker } from "react-icons/cg";
import { Layout, Colorway, CustomOption } from "types/ThemeOptions";

const layouts: Layout[] = [
  { id: 1, element: LayoutOne },
  { id: 2, element: LayoutTwo },
  { id: 3, element: LayoutThree },
];

const colorways: Colorway[] = [
  {
    id: 1,
    name: "Light",
    bgColor: { r: 247, g: 247, b: 247 },
    textColor: { r: 0, g: 0, b: 0 },
    btnColor: { r: 59, g: 130, b: 246 },
    btnTextColor: { r: 255, g: 255, b: 255 },
  },
  {
    id: 2,
    name: "Dark",
    bgColor: { r: 47, g: 54, b: 61 },
    textColor: { r: 255, g: 255, b: 255 },
    btnColor: { r: 11, g: 209, b: 255 },
    btnTextColor: { r: 255, g: 255, b: 255 },
  },
  {
    id: 3,
    name: "Homer",
    bgColor: { r: 251, g: 208, b: 43 },
    textColor: { r: 0, g: 0, b: 0 },
    btnColor: { r: 252, g: 82, b: 207 },
    btnTextColor: { r: 255, g: 255, b: 255 },
  },
  {
    id: 4,
    name: "Chaeban",
    bgColor: { r: 243, g: 120, b: 124 },
    textColor: { r: 76, g: 77, b: 79 },
    btnColor: { r: 76, g: 142, b: 148 },
    btnTextColor: { r: 255, g: 255, b: 255 },
  },
  {
    id: 5,
    name: "Image",
    icon: BsImageFill,
    bgColor: { r: 0, g: 0, b: 0, a: 0.4 },
    textColor: { r: 255, g: 255, b: 255 },
    btnColor: { r: 0, g: 0, b: 0, a: 0 },
    btnTextColor: { r: 255, g: 255, b: 255 },
  },
  {
    id: 6,
    name: "Custom",
    icon: CgColorPicker,
    bgColor: { r: 247, g: 247, b: 247 },
    textColor: { r: 0, g: 0, b: 0 },
    btnColor: { r: 59, g: 130, b: 246 },
    btnTextColor: { r: 255, g: 255, b: 255 },
  },
];

export function useLayouts() {
  return layouts;
}

export function useColorways() {
  return colorways;
}
