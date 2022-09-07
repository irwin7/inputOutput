import { Component } from '@angular/core';
export interface Post{
  title:string
  text:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts:Post[] = [
    {title:'wow super',text:'new express can inlude'},
    {title:'wow ssss',text:'new express can inlude'}
  ]

  updatePost(post:Post){
    this.posts.unshift(post);
    console.log(this.posts);
    
  }

}
