import {Component} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent{
  newPostPH = "Add post content here";
  newPost = "No content";
  enteredValue = "";
  onAddPost(){
    this.newPost = this.enteredValue;
  }

}