import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { FinalizadosComponent } from './components/finalizados/finalizados.component';
import { ReadAllComponent } from './components/read-all/read-all.component';
import { UpdateComponent } from './components/update/update.component';
/**Em nossas rotas, iremos configurar a renderização das
 *tasks finalizadas.
 */
const routes: Routes = [
  { /*quando nosso path for vazio, queremos que renderize 
    o componente readAll*/
    path: '',
    component: ReadAllComponent
  },/**A ´partir do momento que o botão Tarefas finalizadas
   for clicado, iremos fazer com mude de rota para /finalizados*/
  {
    path: 'finalizados',
    component: FinalizadosComponent
  },
  {
    path: 'novo',
    component: CreateComponent
  },
  {
    path: 'atualizar',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
