import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private actovateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.actovateRoute.fragment.subscribe((value) => {
      this.jumpTo(value);
    })
  }
  
  jumpTo(section:any){
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
  }

  onNoticias(){
    this.router.navigate(['noticias'])
  }

}
