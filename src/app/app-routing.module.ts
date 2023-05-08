import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkspacesComponent } from './workspaces/workspaces.component';
import { BoardsComponent } from './boards/boards.component';
import { CreateComponent } from './create/create.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auih.guard';

const routes: Routes = [
  { path: '', component: HeaderComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  
  { path: 'boards', component: BoardsComponent },
  { path: 'workspaces', component: WorkspacesComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
