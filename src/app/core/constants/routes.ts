const routesPath = {
  // main routes
  app: {
    auth: 'auth',
    user: 'user',
    pageNotFound: '404',
  },

  // auth routes
  auth: {
    login: 'login',
    register: 'registration',
  },

  // user routes
  user: {
    dashboard: 'credential-organization',
    profile: 'profile',
    credentialOrganization: 'credential-organization',
  },
};

const routes = {
  // main routes
  app: {
    auth: '/' + routesPath.app.auth,
    user: '/' + routesPath.app.user,
    pageNotFound: '/' + routesPath.app.pageNotFound,
  },

  // auth routes
  auth: {
    login: '/' + routesPath.auth.login,
    register: '/' + routesPath.auth.register,
  },

  // user routes
  user: {
    dashboard: '/' + routesPath.app.user + '/' + routesPath.user.dashboard,
    profile: '/' + routesPath.app.user + '/' + routesPath.user.profile,
    credentialOrganization: '/' + routesPath.app.user + '/' + routesPath.user.credentialOrganization,
  },
};

export { routesPath, routes };
