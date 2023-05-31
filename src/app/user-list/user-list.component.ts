import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  id: any;
  constructor(public UService: UsersService, private router: Router) { }
  address: any;
  Users: any;
  user:any;

  // fetch users data from a service, assigns it to Users property 
  ngOnInit(): void {
    this.UService.GetAllUsers().subscribe(
      (data) => { this.Users = data; },
      (error) => {
        console.log('An error occurred while fetching users:', error);
      });
  }


  // When this method is called with a userId, it navigate to corresponding user's albums page
  goToUserAlbums(userId: number): void {
    this.router.navigate(['/user', userId]);
  }


  //ADD newUser
  ADD(name: any, email: any, phone: any, city: any, street: any, suite: any) {
    let address = { city, street, suite };
    let newUser = { name, email, phone, address };
    this.UService.AddUser(newUser).subscribe({   // call method called AddUser from the UService service
      next: () => { this.Users.push(newUser); },
      error: (err) => { console.log(err); }
    });
  }

  // edit(id:number){
  //   this.UService.GetUserById(id).subscribe({
  //     next:(data) => {this.Users = data;},
  //     error:(err) => console.log(err)}  
  //   );
  // }
  edit(id:number){
    this.UService.GetUserById(id).subscribe(
      {
        next:(data)=>{
          this.user=data;
        },
        error:(err)=>{console.log(err)}
}
);
  }

  // //UpdateUser
  // UpdateUser(id:any,name: any, email: any, phone: any, city: any, street: any, suite: any){
  //   let address = { city, street, suite };
  //   let updateUser = {name, email, phone, address };
  //   this.UService.UpdateUser(id, updateUser).subscribe({   
  //     next: () => { this.Users[id-1]=updateUser; },
  //     error: (err) => { console.log(err); }
  //   });
  // }

  update(id:any,name:any,email:any,phone:any,city:any,street:any,suite:any) {
    let address={city,street,suite}
    let updatedU = {name,email,phone,address};
    this.UService.UpdateUser(id,updatedU).subscribe(
      {
        next:()=>{
          this.Users[id-1]=updatedU;
        },
        error:(err)=>{console.log(err)}
});
  }

  //Delete User
  deleteUser(val: number) {
    if (confirm("Are you sure to delete?")) {
      this.UService.deleteUser(val).subscribe(data => { });   //delete if true
      this.UService.GetAllUsers().subscribe((resp) => {     // return updated user after deletion
        this.Users = resp;
      });
    }
  }

}