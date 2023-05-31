import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: any[] = [];

  constructor(private route: ActivatedRoute, private userService: UsersService) {}

  ngOnInit(): void {
    const albumId = +this.route.snapshot.paramMap.get('id')!;
    this.userService.getPhotosByAlbumId(albumId).subscribe(   //method is called with passing album, response data is assigned to the photos array
      (data) => { this.photos = data;},
      (error) => {console.log(error);}
      );
  }
}


