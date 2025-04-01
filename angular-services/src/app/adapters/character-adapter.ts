import { Character } from '../models';

export const CharacterAdapter = (characters: Character[]) =>
  characters.map((c) => ({ ...c, name: c.name.toUpperCase() }));
