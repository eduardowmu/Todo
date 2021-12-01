import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalizadosComponent } from './components/finalizados/finalizados.component';
import { ReadAllComponent } from './components/read-all/read-all.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
