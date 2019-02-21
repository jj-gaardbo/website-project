import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
/*  posts = [
    {title: 'First Post', content: 'This is the FIrst post content'},
    {title: '2nd Post', content: 'This is the 2nd post content'},
    {title: '3rd Post', content: 'This is the 3rd post content'}
  ];*/
  @Input() posts =[];
}
