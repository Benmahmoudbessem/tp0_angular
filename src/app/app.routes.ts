import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NgModel } from '@angular/forms';


export const routes: Routes = [

  {path: '',component: HomeComponent},
];
@NgModul({
  imports: [ RouterModule.forRoot(routes)],
  exports:[ RouterModule]
})
 export class AppRoutingModule{}
