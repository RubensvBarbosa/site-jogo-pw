import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { AdminService } from '../admin.service';
import { Iuser } from '../admin-user.model';

export interface PeriodicElement {
  nome: string;
  admin: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { nome: 'Hydrogen', admin: true},
  { nome: 'Helium', admin: false},
  { nome: 'Lithium', admin: false},
  { nome: 'Beryllium', admin: false},
  { nome: 'Boron', admin: false},
  { nome: 'Carbon', admin: false},
  { nome: 'Nitrogen', admin: false},
  { nome: 'Oxygen', admin: false},
  { nome: 'Fluorine', admin: false},
  { nome: 'Neon', admin: false},
  { nome: 'Beryllium', admin: false},
  { nome: 'Boron', admin: false},
  { nome: 'Carbon', admin: false},
  { nome: 'Nitrogen', admin: false},
  { nome: 'Oxygen', admin: false},
  { nome: 'Fluorine', admin: false},
  { nome: 'Neon', admin: false},
  { nome: 'Oxygen', admin: false},
  { nome: 'Fluorine', admin: false},
  { nome: 'Neon', admin: false},
  { nome: 'Beryllium', admin: false},
  { nome: 'Boron', admin: false},
  { nome: 'Carbon', admin: false},
  { nome: 'Nitrogen', admin: false},
  { nome: 'Oxygen', admin: false},
  { nome: 'Fluorine', admin: false},
  { nome: 'Neon', admin: false},
];

@Component({
  selector: 'management-user',
  templateUrl: './admin-management-user.component.html',
  styleUrls: ['./admin-management-user.component.scss']
})
export class AdminManagementUserComponent implements OnInit {
  displayedColumns: string[] = ['edit', 'nome', 'admin'];
  dataSource!: MatTableDataSource<Iuser>;

  constructor(private adminService: AdminService) { }
  
  
  ngOnInit() {
    this.adminService.allUsers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = filterValue.trim().toLowerCase();
  }
  
  test = (element:any) => {
    console.log(element);

  }
}
