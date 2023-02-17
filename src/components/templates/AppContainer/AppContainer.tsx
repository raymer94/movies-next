import React, { ReactElement } from 'react';
import DrawerMenu from '@/components/molecules/DrawerMenu/DrawerMenu';
import SearchMovies from '@/components/molecules/SearchMovies/SearchMovies';

interface IProps {
  children: ReactElement;
}

const AppContainer = ({ children }: IProps) => {
  return (
    <div className="flex">
      <DrawerMenu>{children}</DrawerMenu>
    </div>
  );
};

export default AppContainer;