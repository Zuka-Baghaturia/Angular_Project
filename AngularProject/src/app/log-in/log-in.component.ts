import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet} from '@angular/router';
import { ContactComponent } from '../navbar/contact/contact.component';


@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule, RouterModule, ContactComponent, RouterOutlet],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss',
  
})
export class LogInComponent {

  user = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };
  
  submit(form: any) {
    console.log("Button submitted",form.value)
  }

  
  message: string = ''; 

  sendMessage() {
    this.message = 'Hello Log In Component!'; 
  }


}
