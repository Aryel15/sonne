export const ADD_USER = "ADD_USER"
export const NOT_EMAIL = "NOT_EMAIL"
export const CONFIRM_EMAIL = "CONFIRM_EMAIL"
export const EXIT = "EXIT"

export function addUser(user) { 
  return { 
    type: ADD_USER,
    payload: user
  };
}
export function confirmEmail() {
  return { type: CONFIRM_EMAIL };
}
export function notEmail() {
  return { type: NOT_EMAIL };
}
export function exit() {
  return { type: EXIT };
}