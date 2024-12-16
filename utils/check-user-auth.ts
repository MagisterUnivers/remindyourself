export const checkUserAuth = (): boolean | null => {
  const user = localStorage.getItem('user');
  if (user) {
    return true
  }
  return null;
};
