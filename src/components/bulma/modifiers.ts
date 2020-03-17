export type MainColor = "is-white"
  | "is-black"
  | "is-light"
  | "is-dark"
  | "is-primary"
  | "is-link"
  | "is-info"
  | "is-success"
  | "is-warning"
  | "is-danger"
  ;

export type TextColor = "has-text-white"
  | "has-text-black"
  | "has-text-light"
  | "has-text-dark"
  | "has-text-info"
  | "has-text-link"
  | "has-text-success"
  | "has-text-warning"
  | "has-text-danger"
  | "has-text-black-bis"
  | "has-text-black-ter"
  | "has-text-grey-darker"
  | "has-text-grey-dark"
  | "has-text-grey"
  | "has-text-grey-light"
  | "has-text-grey-lighter"
  | "has-text-white-ter"
  | "has-text-white-bis"
  ;

export type Size = "is-small"
  | "is-medium"
  | "is-large"
  ;

export type TextAlignment = "has-text-centered"
  | "has-text-justified"
  | "has-text-left"
  | "has-text-right"
  ;

export type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type ControlState = "is-loading";

export type InputState = "is-hovered"
  | "is-focused"
  ;

export type InputType = "text"
  | "password"
  | "email"
  | "tel"
  | "date"
  ;

export type ButtonType = "submit"
  | "reset"
  ;

export type ButtonState = InputState
  | "is-active"
  | "is-loading"
  ;

export type ButtonsAlignment = "is-centered"
  | "is-right"
  ;

export type HeroSize = "is-medium"
  | "is-large"
  | "is-fullheight"
  ;

export type HorizontalSize = "is-1"
  | "is-2"
  | "is-3"
  | "is-4"
  | "is-5"
  | "is-6"
  | "is-7"
  | "is-8"
  | "is-9"
  | "is-10"
  | "is-11"
  | "is-12"
  ;

export type Context = "is-ancestor"
  | "is-parent"
  | "is-child"
  ;

export type Layout = "box"
  | "notification"
  ;

export type imageSize = "is-16x16"
  | "is-24x24"
  | "is-32x32"
  | "is-48x48"
  | "is-64x64"
  | "is-96x96"
  | "is-128x128"
  | "is-square"
  | "is-1by1"
  | "is-5by4"
  | "is-4by3"
  | "is-3by2"
  | "is-5by3"
  | "is-16by9"
  | "is-2by1"
  | "is-3by1"
  | "is-4by5"
  | "is-3by4"
  | "is-2by3"
  | "is-3by5"
  | "is-9by16"
  | "is-1by2"
  | "is-1by3"
  ;

export interface TextProps {
  alignment?: TextAlignment;
  size?: Size;
  color?: TextColor;
}

export interface TableProps {
  isBordered?: boolean;
  isStriped?: boolean;
  isNarrow?: boolean;
  isHoverable?: boolean;
  isFullwidth?: boolean;
}

export interface RowProps {
  isSelected?: boolean;
  onClick?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
}

export interface CellProps extends TextProps {
  colSpan?: number;
}

export interface TitleProps {
  level?: TitleLevel;
  isSpaced?: boolean;
}

export interface SubtitleProps {
  level?: TitleLevel;
}

export interface NavbarMenuProps {
  isActive?: boolean;
}

export interface NavbarBurgerProps {
  isActive?: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface NavbarItemProps {
  isActive?: boolean;
}

export interface NavbarItemLinkProps extends NavbarItemProps {
  to: string;
}

export interface NavbarItemAProps extends NavbarItemProps {
  href: string;
}

export interface HeroProps {
  mainColor?: MainColor;
  height?: HeroSize;
}

export interface FieldProp {
  isGrouped?: boolean;
  hasAddons?: boolean;
}

export interface ButtonsProps {
  hasAddons?: boolean;
  alignment?: ButtonsAlignment;
}

export interface SelectStates {
  value: string;
}

export interface SelectProps {
  type: InputType;
  color?: MainColor;
  size?: Size;
  state?: InputState;
  isRounded?: boolean;
  disabled?: boolean;
  isMultiple?: boolean;
  valueChanged?: (state: Readonly<SelectStates>) => void;
}

export interface InputStates {
  value: string;
}

export interface InputProps {
  type: InputType;
  color?: MainColor;
  placeholder?: string;
  size?: Size;
  state?: InputState;
  isRounded?: boolean;
  isStatic?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  name?: string;
  defaultValue?: string;
  valueChanged?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ControlProps {
  state?: ControlState;
  hasIconLeft?: boolean;
  hasIconRight?: boolean;
}

export interface ButtonProps {
  type?: ButtonType;
  color?: MainColor;
  isLight?: boolean;
  size?: Size;
  state?: ButtonState;
  isRounded?: boolean;
  isStatic?: boolean;
  isOutlined?: boolean;
  isInverted?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  form?: string;
}

export interface ModalProps {
  isActive?: boolean;
  closeButtonClicked?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export interface ModalCardHeadProp {
  title: string;
  alignment?: TextAlignment;
  closeButtonClicked?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export interface ModalCardFootProp {
  alignment?: "left" | "right";
}

export interface IconProps {
  path: string;
  size?: Size;
  color?: string;
  position?: "is-left" | "is-right";
}

export interface LabelProps {
  size?: Size;
}

export interface TileProps {
  context?: Context;
  isVertical?: boolean;
  horizontalSize?: HorizontalSize;
  layout?: Layout;
  color?: MainColor;
}

export interface TilePProps {
  type?: "title" | "subtitle";
  color?: TextColor;
}

export interface ImageProps {
  src: string;
  alt?: string;
  id?: string;
  size: imageSize;
}

export interface FileInputElement extends HTMLInputElement {
  files: FileList;
}

export interface FileProps {
  label: string;
  size?: Size | "is-fullwidth";
  name?: string;
  isBoxed?: boolean;
  hasName?: boolean;
  defaultValue?: string;
  icon?: string;
  alignement?: ButtonsAlignment;
  color?: MainColor;
  onChange?: (e: React.ChangeEvent<FileInputElement>) => void;
  accept?: string[];
}

export interface FileInputProps {
  name?: string;
}

export interface LabelFileProps {

}

export interface FileCtaProps {

}

export interface FileIconProps {
  path: string;
}

export interface FileNameProps {

}

export interface FileLabelProps {

}

export interface ColumnsProps {

}

type ColumnSize = "is-three-quarters"
  | "is-two-thirds"
  | "is-half"
  | "is-one-third"
  | "is-one-quarter"
  | "is-full"
  | "is-four-fifths"
  | "is-three-fifths"
  | "is-two-fifths"
  | "is-one-fifth"
  | "is-1"
  | "is-2"
  | "is-3"
  | "is-4"
  | "is-5"
  | "is-6"
  | "is-7"
  | "is-8"
  | "is-9"
  | "is-10"
  | "is-11"
  | "is-12"
  ;

export interface ColumnProps {
  size?: ColumnSize;
}



