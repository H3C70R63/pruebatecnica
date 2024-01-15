import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JsonDataServiceUpcoming } from '../../core/jsondata.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cargoorders',
  templateUrl: './cargoorders.component.html',
  styleUrls: ['./cargoorders.component.css'],
})
export class CargoordersComponent implements OnInit {
  searhcForm: FormGroup;
  numOrder: string = '';
  encapsulation: ViewEncapsulation.None | undefined;
  title: string = 'Cargo Orders';
  jsonDataOrders: any;
  jsonDataOrderFind: any;
  constructor(
    private jsonDataServiceUpcoming: JsonDataServiceUpcoming,
    private fb: FormBuilder
  ) {
    this.searhcForm = this.fb.group({
      numOrderSearch: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getJsonData();
  }
  getJsonData(): void {
    this.jsonDataServiceUpcoming.getJsonData().subscribe((data) => {
      this.jsonDataOrders = data.result;
      console.log(this.jsonDataOrders)
    });
  }
  searchOrder(): void {
    if (this.searhcForm.valid)
      this.numOrder = this.searhcForm.get('numOrderSearch')?.value;
    this.jsonDataServiceUpcoming
      .searchOrder(this.numOrder)
      .subscribe((objeto) => {
        this.jsonDataOrderFind = objeto;
        console.log(this.jsonDataOrderFind);
      });
  }
}
