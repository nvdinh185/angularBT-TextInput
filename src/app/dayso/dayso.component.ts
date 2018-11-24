import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dayso',
  templateUrl: './dayso.component.html',
  styleUrls: ['./dayso.component.css']
})
export class DaysoComponent implements OnInit {
  arrDaySo;
  tong = 0;
  constructor() { }

  ngOnInit() {
  }
  tinhTong(DaySoForm) {
    this.arrDaySo = DaySoForm.value.dayso.split(" ");
    for (var i = 0; i < this.arrDaySo.length; i++) {
      this.tong += parseInt(this.arrDaySo[i]);
    }
  }

}