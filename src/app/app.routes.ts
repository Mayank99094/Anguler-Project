import { Routes } from '@angular/router';
import { TodosComponent } from './Mycomponents/todos/todos.component';
import { AboutComponent } from './Mycomponents/about/about.component';

export const routes: Routes = [
    { path: '', component: TodosComponent },
    { path: 'about', component: AboutComponent },
];
