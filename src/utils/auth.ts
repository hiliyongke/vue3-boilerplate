const TokenKey = 'fast-token';
const TokenPrefix = 'Bearer ';
const isLogin = () => {
  return Boolean(localStorage.getItem(TokenKey));
};
const getToken = () => {
  return localStorage.getItem(TokenKey);
};
const setToken = (token: string) => {
  localStorage.setItem(TokenKey, token);
};
const clearToken = () => {
  localStorage.removeItem(TokenKey);
};

export { TokenPrefix, isLogin, getToken, setToken, clearToken };
