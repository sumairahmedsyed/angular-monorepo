import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { TodosComponent } from './todos/todos.component';

@Component({
  standalone: true,
  imports: [RouterModule, AmplifyAuthenticatorModule, TodosComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Welcome!!';
}
