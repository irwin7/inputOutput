import { Component, EventEmitter, OnInit, Output, ViewChild, } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.scss']
})
export class PostInputComponent implements OnInit {
  @Output() addPost: EventEmitter<Post> = new EventEmitter<Post>()
  @ViewChild('titleInp') inputTitle:any
  @ViewChild('textInp') inputText:any
  title:string = '';
  text:string = '';

  submit() {
    const titleinp = this.inputTitle.nativeElement;
    const textinp = this.inputText.nativeElement;
       
    if(!this.title.trim()){
      titleinp.focus()
      
    }else if(!this.text.trim()){
      textinp.focus()
    }else{
      const post = {
        title: this.title,
        text: this.text
      }
      this.addPost.emit(post)
      this.title = this.text = ''
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
