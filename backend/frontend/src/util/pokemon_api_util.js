export const singlePokemon = (id) => {
  return fetch(`/api/pokemon/${id}`);
};

export const createPokemon = (pokemon) => {
  return fetch(`/api/pokemon`, {
    method: 'POST',
    body: JSON.stringify(pokemon),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
};

export const updatePokemon = (data) => {
  return fetch(`/api/pokemon/${data.id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
};
