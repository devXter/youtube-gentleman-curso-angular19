import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Character } from '../models';
import { CharacterAdapter } from '../adapters';

// Utilizaremos para el ejercicio Single Source of Truth (SSOT) Architecture

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  // Este estado debe estar actualizado con lo último de lo último, para tener una reactividad relevante

  // Una señal (signal) también es un canal al igual que un observable
  state = signal({
    characters: new Map<number, Character>(),
  });

  constructor() {
    // Apenas se cree el servicio llamamos para obtener los characters para evitar undefined
    this.getCharacters();
  }

  getFormattedCharacters(): Character[] {
    return Array.from(this.state().characters.values());
  }

  getCharacterById(id: number): Character {
    const character = this.state().characters.get(id);
    if (!character) {
      throw new Error(`No se encontró el personaje con id ${id}`);
    }
    return character;
  }

  getCharacters(): void {
    const mockCharacters: Character[] = [
      { id: 1, name: 'Juan', lastName: 'Pérez', age: 25 },
      { id: 2, name: 'María', lastName: 'González', age: 30 },
      { id: 3, name: 'Carlos', lastName: 'Rodríguez', age: 35 },
      { id: 4, name: 'Ana', lastName: 'Martínez', age: 28 },
    ];

    of(mockCharacters).subscribe((characters: Character[]) => {
      characters.forEach((character: Character) => {
        this.state().characters.set(character.id, character);
      });

      this.state.set({
        characters: this.state().characters,
      });
    });
  }

  updateCharacter(character: Character): void {
    const updatedCharacter = { ...character };

    of(updatedCharacter).subscribe((character: Character) => {
      this.state.update((state: { characters: Map<number, Character> }) => {
        state.characters.set(character.id, character);
        return { characters: state.characters };
      });
    });
  }

  deleteCharacter(id: number): void {
    of({ status: 200 }).subscribe(() => {
      this.state.update((state) => {
        state.characters.delete(id);
        return { characters: state.characters };
      });
    });
  }
}
