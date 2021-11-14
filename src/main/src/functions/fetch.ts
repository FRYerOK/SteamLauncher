import type {RequestInfo, RequestInit} from 'node-fetch';

// NOTE: ESM only
const fetch = async (url: RequestInfo, init?: RequestInit | undefined) => {
  return (await import('node-fetch')).default(url, init);
};

export default fetch;
