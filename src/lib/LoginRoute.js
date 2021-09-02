import { Route, Redirect } from 'react-router';
import isUser from './isUser';

const LoginRoute = ({component: Component, ...parentProps}) => {
  if(isUser){
    alert("로그인 후 이용블가능합니다.");
    return <Redirect to="/5/main"/>
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

export default LoginRoute;