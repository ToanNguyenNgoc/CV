import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  linkTemp1(){
    window.location.href='https://toannguyenngoc.github.io/template-streamit-movie/'
  }
  linkTemp2(){
    window.location.href='https://toannguyenngoc.github.io/ToanSFood/'
  }
  linkGit1(){
    window.location.href='https://github.com/ToanNguyenNgoc/E-Shop-Angular-.Net-Core-Api.git'
  }
  linkGit2(){
    window.location.href='https://github.com/ToanNguyenNgoc/E-Shop-Angular-FE-.Net-Core-Api.git';
  }
  linkGit3(){
    window.location.href='https://github.com/ToanNguyenNgoc/Tu-dong-sap-xep-TKB-GT-Di-Chuyen-Finally';
  }

}
