export const PokemonApiUtil = (id) => {
  return (
    fetch(`/api/pokemon/${id}`)
  );
};
