import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudServiceService } from 'src/app/crud-service.service';
import { IUser } from 'src/app/IUser';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  User={"name":'',"age":'',"salary":''};
  errorMessage:string;
  errorMessage1:string;
  errorMessage2:string;
  errorMessage3:string;
  constructor(private router:Router,private crudService:CrudServiceService) { 
  }
  onSubmit():void
  { 
  if(this.User.name=='')
  {this.errorMessage1="Name is Complusory field";}
  if(this.User.age=='')
  {this.errorMessage2="Age is Complusory field";}
  if(this.User.salary=='')
  {this.errorMessage3="Salary is Complusory field";}
  if(this.User.age!=''&& this.User.name!=''&& this.User.salary!=''){

    this.crudService.create(this.User).subscribe({
      next:response => {
        console.log(response);
         
        
      },
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
});
  }
    
 
  
  }
  Refresh():void{
   this.User={"name":'',"age":'',"salary":''};
   this.errorMessage1='';
   this.errorMessage2='';
   this.errorMessage3='';
   this.errorMessage='';
  }
  ngOnInit(): void {
  }
  get diag(){return JSON.stringify(this.User);}
  
 onBack() { this.router.navigate(['/welcome'])}


}
