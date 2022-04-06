import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PassengersService } from '../../services/passengers.service';
import Swal from 'sweetalert2';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css'],
})
export class PassengerComponent implements OnInit {
  formGroupPassenger: FormGroup;

  id: string = '';

  constructor(
    private fb: FormBuilder,
    private passengersService: PassengersService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.createForm();

    this.activatedRoute.paramMap.subscribe((parameterMap) => {
      this.id = parameterMap.get('id');

      if (this.id) {
        this.getPassenger(this.id);
      }
    });
  }

  createForm() {
    this.formGroupPassenger = this.fb.group({
      _id: [{ value: '', disabled: true }],
      name: ['', Validators.required],
      trips: ['', Validators.required],
      airline: ['', Validators.required],
    });
  }

  getPassenger(id: string) {
    this.passengersService.getPassenger(id).subscribe({
      next: (resp) => {
        this.editForm(resp);
      },
      error: (err) => console.log(err),
    });
  }

  editForm(passenger: any) {
    this.formGroupPassenger.patchValue({
      _id: passenger._id,
      name: passenger.name,
      trips: passenger.trips,
      airline: passenger.airline[0].id,
    });
  }

  create() {
    this.passengersService
      .createPassenger(this.formGroupPassenger.value)
      .subscribe({
        next: (resp) => {
          console.log(resp);
        },
        error: (err) => console.log(err),
      });
    Swal.fire('Creating', 'Created');
  }

  update() {
    this.passengersService
      .updatePassenger(this.formGroupPassenger.getRawValue())
      .subscribe({
        next: (resp) => {
          this.showSuccess();
        },
        error: (err) => {
          this.showDanger();
        },
      });
  }

  showStandard() {
    this.toastService.show('I am a standard toast');
  }

  showSuccess() {
    this.toastService.show('SUCCESS', {
      classname: 'bg-success text-light',
      delay: 2000,
    });
  }

  showDanger() {
    this.toastService.show('ERROR', {
      classname: 'bg-danger text-light',
      delay: 3000,
    });
  }
}
