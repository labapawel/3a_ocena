import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [NgFor, NgClass],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  public oceny: any[] = [
    {ocena: 1, ocenaStr: "1", class: "secondary"},
    {ocena: 2, ocenaStr: "2", class: "secondary"},
    {ocena: 2.5, ocenaStr: "2+", class: "danger"},
    {ocena: 3, ocenaStr: "3", class: "danger"},
    {ocena: 2.75, ocenaStr: "3-", class: "dark"},
    {ocena: 3.5, ocenaStr: "3+", class: "dark"},
    {ocena: 3.75, ocenaStr: "4-", class: "info"},
    {ocena: 4, ocenaStr: "4", class: "info"},
    {ocena: 4.5, ocenaStr: "4+", class: "primary"},
    {ocena: 4.75, ocenaStr: "5-", class: "primary"},
    {ocena: 5, ocenaStr: "5", class: "primary"},
    {ocena: 5.5, ocenaStr: "5+", class: "success"},
    {ocena: 5.75, ocenaStr: "6-", class: "success"},
    {ocena: 6, ocenaStr: "6", class: "success"},
  ];
}
