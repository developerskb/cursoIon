import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'victor-home', loadChildren: './victor/victor-home/victor-home.module#VictorHomePageModule' },  { path: 'home-simpsons', loadChildren: './Homeraimo/home-simpsons/home-simpsons.module#HomeSimpsonsPageModule' },
  { path: 'curso-raimo', loadChildren: './curso-raimo/curso-raimo.module#CursoRaimoPageModule' },
  { path: 'raimocurso', loadChildren: './raimocurso/raimocurso.module#RaimocursoPageModule' },
  { path: 'raimo-home', loadChildren: './raimo-home/raimo-home.module#RaimoHomePageModule' },
  { path: 'raimo-home', loadChildren: './raimo-home/raimo-home.module#RaimoHomePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
