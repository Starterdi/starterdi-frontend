import { Route, Redirect } from 'react-router';

const LoginRoute = ({component: Component, ...parentProps}) => {
  if(window.localStorage.getItem('user')){
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