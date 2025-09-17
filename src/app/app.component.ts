import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-1';

  posts: any [] = [];
  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.getPost();
  }
  // read method
  getPost(){
    this.api.getPost().subscribe((res:any)=>{
      console.log(res);
      this.posts = res;
    });
  }
  // create method
  createPost(){
    const postData = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    this.api.addPost(postData).subscribe((res:any)=>{
      console.log(res);
      this.getPost();
    });
  }
  // update method
  updatePost(){
    const updateData = {
      title: 'updated title',
      body: 'updated body',
      userId: 1,
    };
    const id = 1;
    this.api.updatePost(updateData, id).subscribe((res:any)=>{
      console.log(res);
      this.getPost();
    });
  }
// delete method
deletePost(id: number) {
  this.api.deletePost(id).subscribe((res:any) => {
    console.log('Deleted:', res);

    // frontend से remove करना
    this.posts = this.posts.filter(post => post.id !== id);
  });
}

}
