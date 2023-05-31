import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.css']
})
export class UserAlbumsComponent {
  albums: any[] = [];   //hold data
  photos: any[] = [];
  user: any;


  constructor(private route: ActivatedRoute, private userService: UsersService, private router: Router) { }
  ngOnInit(): void {                                         //called when com initialize
    const userId = this.route.snapshot.paramMap.get('id');
    this.userService.GetUserById(userId).subscribe(
      (data) => {this.user = data},)                         //get users by ID for User Details
      this.userService.getAlbumsByUserId(userId).subscribe(     //get Albums by ID 
      (data) => {
        this.albums = data as any[];
        this.user = data;},
      (error) => {console.log(error);});
    }



  goToAlbumPhotos(albumId: number): void {     //when click  It navigates to the photos with albumId.
    this.router.navigate(['/album', albumId]);
  }

}
