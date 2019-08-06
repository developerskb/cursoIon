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
  { path: 'raimo-home/:time', loadChildren: './raimo/raimo-home/raimo-home.module#RaimoHomePageModule' },
<<<<<<< HEAD
  { path: 'marcelo-home', loadChildren: './marcelo/marcelo-home/marcelo-home.module#MarceloHomePageModule' },  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'victor-funcionario', loadChildren: './victor/victor-funcionario/victor-funcionario.module#VictorFuncionarioPageModule' },
  { path: 'raimo-funcionario', loadChildren: './raimo/raimo-funcionario/raimo-funcionario.module#RaimoFuncionarioPageModule' },
=======
  { path: 'marcelo-home', loadChildren: './marcelo/marcelo-home/marcelo-home.module#MarceloHomePageModule' },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'victor-funcionario', loadChildren: './victor/victor-funcionario/victor-funcionario.module#VictorFuncionarioPageModule' },  { path: 'rodrigo-funcionario', loadChildren: './rodrigo/rodrigo-funcionario/rodrigo-funcionario.module#RodrigoFuncionarioPageModule' },
>>>>>>> d7c0280dbc17e9d81416b9506a3bb061befc23fa



  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
