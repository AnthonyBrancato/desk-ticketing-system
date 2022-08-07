import { Sidebar } from 'components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export const DeskOverView = () => {
  return (
    <div>
      <h1>DeskOverView page</h1>
      <Sidebar />
      <Outlet />
    </div>
  );
};
