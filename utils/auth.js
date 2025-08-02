
// utils/auth.js
export const loginUser = (userId) => {
  const fakeToken = btoa(`${userId}-${Date.now()}`);
  localStorage.setItem("token", fakeToken);
  localStorage.setItem("userId", userId);
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  return !!(token && userId);
};
