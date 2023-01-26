import { Error } from 'components/shared/index';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  let error = useRouteError();

  return (
    <>
      <Error error={error} />
    </>
  );
}
