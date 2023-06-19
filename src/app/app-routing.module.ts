import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './shared/main/main.component';
import { MaincardComponent } from './components/maincard/maincard.component';
import { ListComponent } from './components/characters/list/list.component';

const routes: Routes = [
  {
    path:'',
    component:ListComponent
  },
  {
    path:'characters',
    loadChildren:()=>import('./characters/characters.module').then((m)=>m.CharactersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
