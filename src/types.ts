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
  children?: React.ReactNode;
};

export type MjmlComponent<Props> = React.FC<Props & MjmlBaseProps>;
