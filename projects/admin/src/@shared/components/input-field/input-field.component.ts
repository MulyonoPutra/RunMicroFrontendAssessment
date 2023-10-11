import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MaterialModule } from 'material';
import { ValidatorsService } from '../../services/validator.service';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent {
  @Input() label!: string;
	@Input() fieldName!: string;
	@Input() formGroup!: FormGroup;

  constructor(private validation: ValidatorsService) {}

  get isInvalid() {
		const control = this.formGroup.get(this.fieldName) as FormControl;
		return this.validation.isInvalid(control);
	}

	get getErrorMessage(): string {
		const control = this.formGroup.get(this.fieldName) as FormControl;
		return this.validation.getErrorMessage(control);
	}
}
