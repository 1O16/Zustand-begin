interface ColumnProps {
  state: string;
}

export const Column = ({ state }: ColumnProps) => {
  return <div>{state}</div>;
};
