/**
 *
 * @param {number} status
 * @param {any} data
 * @returns
 */
export function responseBodyFactory(status, data) {
  return {
    status,
    data,
  };
}
