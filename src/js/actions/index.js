import {
  SHOW_SPINNER,
  HIDE_SPINNER,
  FETCH_USERS,
  FETCH_REASONCODES,
  FETCH_SESSION_INFO,
  CHANGE_CURRENT_LOCATION,
  CHANGE_CURRENT_LOCALE,
} from './types';
import apiClient from '../utils/apiClient';


export function showSpinner() {
  return {
    type: SHOW_SPINNER,
    payload: true,
  };
}

export function hideSpinner() {
  return {
    type: HIDE_SPINNER,
    payload: false,
  };
}

export function fetchReasonCodes() {
  const url = '/openboxes/api/reasonCodes';
  const request = apiClient.get(url);

  return {
    type: FETCH_REASONCODES,
    payload: request,
  };
}

export function fetchUsers() {
  const url = '/openboxes/api/generic/person';
  const request = apiClient.get(url);

  return {
    type: FETCH_USERS,
    payload: request,
  };
}

export function fetchSessionInfo() {
  const url = '/openboxes/api/getSession';
  const request = apiClient.get(url);

  return {
    type: FETCH_SESSION_INFO,
    payload: request,
  };
}

export function changeCurrentLocation(location) {
  return (dispatch) => {
    const url = `/openboxes/api/chooseLocation/${location.id}`;

    apiClient.put(url)
      .then(() => {
        dispatch({
          type: CHANGE_CURRENT_LOCATION,
          payload: location,
        });
      });
  };
}


export function changeCurrentLocale(locale) {
  return (dispatch) => {
    const url = `/openboxes/api/chooseLocale/${locale}`;

    apiClient.put(url)
      .then(() => {
        dispatch({
          type: CHANGE_CURRENT_LOCALE,
          payload: locale,
        });
      });
  };
}
