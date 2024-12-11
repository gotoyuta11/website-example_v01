let auth0 = null;

window.onload = async () => {
  await configureClient();
  updateUI();
};

const configureClient = async () => {
  auth0 = await createAuth0Client({
    domain: config.domain,
    client_id: config.clientId
  });
};

const updateUI = async () => {
  const isAuthenticated = await auth0.isAuthenticated();
  document.getElementById("btn-login").disabled = isAuthenticated;
  document.getElementById("btn-logout").disabled = !isAuthenticated;
};

const login = async () => {
  await auth0.loginWithRedirect({
    redirect_uri: window.location.origin
  });
};

const logout = () => {
  auth0.logout({
    returnTo: window.location.origin
  });
};
