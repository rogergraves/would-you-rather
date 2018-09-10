export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const DISCARD_AUTHED_USER = 'DISCARD_AUTHED_USER'

export function setAuthedUser (id) {
  console.log("Running setAuthedUser("+id+") in actions/authedUser.js")
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function discardAuthedUser() {
  return {
    type: DISCARD_AUTHED_USER,
    id: null
  }
}