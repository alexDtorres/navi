import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresenterComponent } from './presenter/presenter.component';
import { InteractorComponent } from './interactor/interactor.component';



@NgModule({
  declarations: [
    PresenterComponent,
    InteractorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NaviModule { }
