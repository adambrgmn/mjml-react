type MjUnitBase<Suffix extends string> = `${number}${Suffix}` | '0';
export type MjUnit<Suffix extends string> =
  | `${MjUnitBase<Suffix>}`
  | `${MjUnitBase<Suffix>} ${MjUnitBase<Suffix>}`
  | `${MjUnitBase<Suffix>} ${MjUnitBase<Suffix>} ${MjUnitBase<Suffix>}`
  | `${MjUnitBase<Suffix>} ${MjUnitBase<Suffix>} ${MjUnitBase<Suffix>} ${MjUnitBase<Suffix>}`;

export type MjmlBaseProps = {
  /** class name, added to the root HTML element created */
  className?: string;
  /** class name, added to the root HTML element created */
  cssClass?: string;
  /** mj-class tags create a named group of MJML attributes you can apply to MJML components. To apply them, use mj-class="<name>" */
  mjClass?: string;
  children?: React.ReactNode;
};

export type MjmlComponent<Props> = React.FC<Props & MjmlBaseProps>;
