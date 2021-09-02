import { Route, Redirect } from 'react-router';
import isUser from './isUser';

const PrivateRoute = ({component: Component, ...parentProps}) => {
  if(!isUser){
    alert("로그인 후 이용가능합니다.");
    return <Redirect to="/5/login"/>
  }

  return (
    <Route
      {...parentProps}
      render={() => (
        <Component />
      )}
    />
  );
}

export default PrivateRoute;