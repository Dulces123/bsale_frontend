const BASE_URL = "https://mystorebackdulces.herokuapp.com/";
const apiFetcher = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, { method: "GET" });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error);
  }
  if (response.status === 204) return {};
  return await response.json();
};

export default apiFetcher;
