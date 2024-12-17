export type InputMathFieldProps = {
  id: string;
  value: string | undefined;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
};

export type InputMathFieldEmit = {
  id: string;
  value: string;
};
