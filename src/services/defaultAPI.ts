
const URL = 'http://89.108.65.56/api';

export const methodDefault = async (
  path: string,
  {
    body,
    method = 'GET',
  }: { body?: BodyInit; method?: 'GET' | 'POST' }
) => {
  return fetch(`${URL}/${path}`, {
    body,
    method,
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((e) => e.json())
    .then((e) => {
      return {
        data: e,
      };
    })
    .catch(() => {
      return { data: [] };
    });
};