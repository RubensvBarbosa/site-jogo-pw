import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { Noticias } from './noticias.model';
import { map, pipe } from 'rxjs';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  displayedColumns: string[] = ['created'];
  data2?:Noticias[];
  data?:Noticias[] = [];

  page = 0;
  size = 1;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.AllNoticias().pipe(
      map(data => data.reverse())
    ).subscribe(data => {
      this.data2 = data
      this.getData({pageIndex: this.page, pageSize: this.size});
    })
  }

  getData(obj:any) {
    let index=0,
        startingIndex=obj.pageIndex * obj.pageSize,
        endingIndex=startingIndex + obj.pageSize;

    this.data = this.data2?.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }


}
