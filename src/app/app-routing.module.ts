import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkspacesComponent } from './workspaces/workspaces.component';
import { BoardsComponent } from './boards/boards.component';
import { CreateComponent } from './create/create.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'boards', component: BoardsComponent },
  { path: 'workspaces', component: WorkspacesComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
