import { Injectable } from '@angular/core';
import { MOCK_DATA } from '../data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private items = [...MOCK_DATA];

  getItems() {
    return this.items;
  }

  getItem(id: number) {
    return this.items.find(item => item.id === id);
  }

  addItem(item: any) {
    this.items.push({ id: this.items.length + 1, ...item });
  }

  updateItem(id: number, updatedItem: any) {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items[index] = { id, ...updatedItem };
    }
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }
}