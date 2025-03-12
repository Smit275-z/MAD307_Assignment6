import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  items = [];

  constructor(private dataService: DataService, private router: Router) {
    this.items = this.dataService.getItems();
  }

  deleteItem(id: number) {
    this.dataService.deleteItem(id);
    this.items = this.dataService.getItems();
  }

  editItem(id: number) {
    this.router.navigate(['/modify', id]);
  }
}