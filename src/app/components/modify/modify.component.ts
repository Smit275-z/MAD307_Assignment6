import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html'
})
export class ModifyComponent {
  itemForm: FormGroup;
  editMode = false;
  itemId: number | null = null;

  constructor(private fb: FormBuilder, private dataService: DataService, private route: ActivatedRoute, private router: Router) {
    this.itemForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.editMode = true;
        this.itemId = +params['id'];
        const item = this.dataService.getItem(this.itemId);
        if (item) {
          this.itemForm.patchValue(item);
        }
      }
    });
  }

  onSubmit() {
    if (this.editMode && this.itemId !== null) {
      this.dataService.updateItem(this.itemId, this.itemForm.value);
    } else {
      this.dataService.addItem(this.itemForm.value);
    }
    this.router.navigate(['/list']);
  }
}