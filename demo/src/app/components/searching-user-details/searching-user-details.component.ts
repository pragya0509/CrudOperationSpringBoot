import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from 'src/app/crud-service.service';
import { IUser } from 'src/app/IUser';

@Component({
  selector: 'app-searching-user-details',
  templateUrl: './searching-user-details.component.html',
  styleUrls: ['./searching-user-details.component.css']
})
export class SearchingUserDetailsComponent implements OnInit {
  
  constructor(private CrudServiceService:CrudServiceService ) { }
  ByName=false;
  ById=false;
  Users:IUser;
  
  Name:string='';
  id:number;
  errorMessage1='';
  Submit:boolean=false;
  ngOnInit(): void {
  }
 
 setValue():void{
    this.ById=true;
    this.ByName=false;
    this.Submit=false;
 }
 
 setValueName():void{this.ByName=true;
  this.ById=false;
  this.Submit=false;}
 GetDetails():void{
   if(this.ById==true)
   {  if(this.id==null)
      {this.errorMessage1="ID Required";}
      else{
     this.CrudServiceService.get(this.id).subscribe({
    next: User => {
      this.Users = User;
      this.Submit=true;
   },
  error: err => this.errorMessage1 = err
  });
   }
  }
  else 
  {  if(this.Name=='')
    {this.errorMessage1="Name Required";}
    else{
     this.CrudServiceService.findByName(this.Name).subscribe({
    next: User => {
      this.Users = User;
      this.Submit=true;
     
   },

  error: err => this.errorMessage1 = err
  });

  }
}
 }
 Refresh():void{
   this.Name='';
   this.id=null;
   this.errorMessage1='';
 }

 DeleteUser():void{
   this.CrudServiceService.delete(this.Users.id).subscribe({error: error => {
    this.errorMessage1= error.message;
    if(error==null)
    {
    this.Submit=false;
    this.errorMessage1='Successfully Deleted record';
    }
    console.error('There was an error!', error);
  }
});

   
}

}
