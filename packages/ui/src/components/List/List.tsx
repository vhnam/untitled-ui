import { PropsWithChildren } from 'react';

export interface ListProps extends PropsWithChildren {}

const List = ({ children }: ListProps) => {
  return <ul>{children}</ul>;
};

export default List;
