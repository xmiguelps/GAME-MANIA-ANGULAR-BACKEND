import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Login } from './views/login/login'
import { Adm } from './views/adm/adm'

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login},
    { path: 'adm', component: Adm }
];
