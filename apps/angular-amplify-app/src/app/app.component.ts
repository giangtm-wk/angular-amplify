import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { NavComponent } from './pages/nav/nav.component';

@Component({
  standalone: true,
  imports: [RouterModule, AmplifyAuthenticatorModule, NavComponent],
  selector: 'wk-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-amplify-app';
}
