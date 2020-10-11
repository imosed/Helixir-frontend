export default {
  get: async (endpoint: string): Promise<any> => {
    return (await fetch(endpoint, {method: 'GET'})).json();
  }
};
