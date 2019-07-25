import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'victor-home', loadChildren: './victor/victor-home/victor-home.module#VictorHomePageModule' },
  { path: 'rodrigohome', loadChildren: './rodrigo/rodrigohome/rodrigohome.module#RodrigohomePageModule' },
  { path: 'raimo-home', loadChildren: './raimo/raimo-home/raimo-home.module#RaimoHomePageModule' },
  { path: 'raimo-home/:time', loadChildren: './raimo/raimo-home/raimo-home.module#RaimoHomePageModule' },
  { path: 'robson-home', loadChildren: './robson/robson-home/robson-home.module#RobsonHomePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
