import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAlbumsComponent } from './user-albums/user-albums.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';

const routes: Routes = [
  {path: "" , component:  UserListComponent},
  { path: 'user/:id', component: UserAlbumsComponent },
  { path: 'users/:id/albums', component: UserAlbumsComponent },
  { path: 'albums/:id/photos', component: AlbumPhotosComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
