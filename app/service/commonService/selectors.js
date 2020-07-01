const getSession = (state) => state.service.session;
const getToken = (state) => state.service.session.token;
const SessionSelector = {
  getSession,
  getToken,
};

export default SessionSelector;
