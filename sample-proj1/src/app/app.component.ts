import { Component } from '@angular/core';
import { LoginService } from './Batch1/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers   : [LoginService]
  // providers and useClass is same thus we can use shortcut i.e providers :[<serviceName>]    

})
export class AppComponent {
  title = 'sample-proj1';

  name:string="Jane";

  handleUpdate(newname: string){
    //handle the new name emitted by child (profilecomp)
    this.name=newname;
  }
}
