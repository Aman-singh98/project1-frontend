/**
 * tokenManager.js
 * ---------------
 * In-memory access token storage.
 *
 * Purpose:
 * - Stores access token temporarily
 * - Prevents localStorage usage
 * - Keeps token secure from XSS persistence
 */

let accessToken = null;

export function setAccessToken(token) {
  accessToken = token;
}

export function getAccessToken() {
  return accessToken;
}

export function clearAccessToken() {
  accessToken = null;
}