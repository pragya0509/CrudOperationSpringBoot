import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudServiceService } from 'src/app/crud-service.service';
import { IUser } from 'src/app/IUser';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  errorMessage:string;
  errorMessage1:string;
  errorMessage2:string;
  errorMessage3:string;

id:number;
User={"name":'',"age":'',"salary":''};

constructor(private route: ActivatedRoute,
  private router: Router,private crudService:CrudServiceService) {
}
ngOnInit(): void {
const param = this.route.snapshot.paramMap.get('id');
if (param) {
 this.id = +param;
}
this.crudService.get(this.id).subscribe({
  next: User => {
    this.User.age=User.age;
    this.User.name=User.name;
    this.User.salary=User.salary;
    
 }
});
}

onUpdate():void{
  this.UpdateProduct(this.id);
}

UpdateProduct(id: number): void {
  if(this.User.name=='')
  {this.errorMessage1="Name is Complusory field";}
  if(this.User.age=='')
  {this.errorMessage2="Age is Complusory field";}
  if(this.User.salary=='')
  {this.errorMessage3="Salary is Complusory field";}
  if(this.User.age!=''&& this.User.name!=''&& this.User.salary!=''){
this.crudService.update(id,this.User).subscribe({

error: err => this.errorMessage = "Unable to update. User with id "+this.id+" not found."
});
  }
}
onBack() { this.router.navigate(['/search'])}
}
