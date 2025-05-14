import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ScreenComponent } from './screen/screen.component';
import { ConfigComponent } from './config/config.component';

export const routes: Routes = [
    {path:'', component: MainComponent},
    {path:'screen', component: ScreenComponent},
    {path:'config', component: ConfigComponent}
];
