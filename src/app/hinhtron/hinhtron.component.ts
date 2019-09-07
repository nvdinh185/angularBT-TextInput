import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hinhtron',
  templateUrl: './hinhtron.component.html',
  styleUrls: ['./hinhtron.component.css']
})
export class HinhtronComponent implements OnInit {
  banKinh;
  dienTich;
  check = false;
  constructor() { }

  ngOnInit() { }

  getMessage() {
    if (((this.banKinh != undefined && this.banKinh != "") && (this.dienTich != undefined && this.dienTich != "")) ||
      ((this.banKinh == undefined || this.banKinh == "") && (this.dienTich == undefined || this.dienTich == ""))) {
      this.check = false;
      return "Vui lòng nhập 1 trong 2 trường!";
    } else this.check = true;
  }

  onSubmit() {
    if (typeof (this.banKinh) != "undefined" && this.banKinh !== "") {
      this.dienTich = parseInt(this.banKinh) * parseInt(this.banKinh) * 3.14;
    } else {
      this.banKinh = Math.sqrt(parseInt(this.dienTich) / 3.14);
    }
  }
}
