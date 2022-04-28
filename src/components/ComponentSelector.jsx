import { Outlet } from 'react-router-dom';

function ComponentSelector({ name }) {
  return (
    <div>
      <h1 className="">{name}</h1>
      <Outlet />
    </div>
  );
}

export default ComponentSelector;
