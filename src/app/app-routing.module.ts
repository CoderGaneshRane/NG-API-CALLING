import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyApiComponent } from './components/dummy-api/dummy-api.component';

const routes: Routes = [
  {
    path:'', component:DummyApiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
