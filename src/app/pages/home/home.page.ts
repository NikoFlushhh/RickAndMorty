import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,FormsModule,SharedModule]
})
export class HomePage implements OnInit {

   characters: any[] =[];
   params={}as any;

  constructor(
    private rickAndMortySvc:RickandmortyService
  ) { }

  ngOnInit() {
    this.params.page = 0;

  }

   getCharacters(event?: any){
   this.params.page+=1;

   this.rickAndMortySvc.getCharacters(this.params).subscribe({

    next: (res: any)=>{
      this.characters.push(...res.results)
      console.log(this.characters);
    },
    error: (error:any)=> {
      
    }
   })
  }
}
