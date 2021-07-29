export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const RESET_USER_PROFILE = "RESET_USER_PROFILE";

export function setUserProfile(payload) {
  const {
    givenName,
    surname,
    email,
    phone,
    houseName,
    street,
    suburb,
    state,
    postcode,
    country,
    avatar,
  } = payload;
  return {
    type: SET_USER_PROFILE,
    payload: {
      givenName,
      surname,
      email,
      phone,
      houseName,
      street,
      suburb,
      state,
      postcode,
      country,
      avatar,
    },
  };
}

export function resetUserProfile(payload) {
  return {
    type: RESET_USER_PROFILE,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function setDiff(value) {
  return {
    type: SET_DIFF,
    diff: value,
  };
}
