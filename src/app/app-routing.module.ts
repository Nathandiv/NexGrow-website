import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components here
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled' // nice UX
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
