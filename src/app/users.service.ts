import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor (private myClient:HttpClient) { }
  private Base_URL = "https://jsonplaceholder.typicode.com";

  GetAllUsers(){
    return this.myClient.get(`${this.Base_URL}/users`);  }

  GetUserById(id : any){
    return this.myClient.get(`${this.Base_URL}/users/${id}`);  }

  AddUser(newUser :any){
    return this.myClient.post(this.Base_URL + "/users" , newUser);
  }

  UpdateUser (id: any , newUser:any){
    return this.myClient.put(this.Base_URL + "/" + id , newUser);
  }
  
  getAlbumsByUserId(id: any){
    return this.myClient.get(`${this.Base_URL}/albums?userId=${id}`);

  }

  getPhotosByAlbumId(id: any) {
    // return this.myClient.get(`${this.Base_URL}/photos?albumId=${id}`);
    return this.myClient.get<any[]>(`${this.Base_URL}/photos?albumId=${id}`);

  }

//   deleteUser(id:number){
//     return this.myClient.delete(`${this.Base_URL}/${id}`)   
// }
deleteUser(id: number) {
  return this.myClient.delete(`${this.Base_URL}/${id}`);
}

}
