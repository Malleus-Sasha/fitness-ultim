import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [AuthFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    AuthFormComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService
      ]
    };
  }
}
