import { Routes } from '@angular/router';
import { HomeComponent } from './navbar/home/home.component';
import { ProductsComponent } from './navbar/products/products.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { NotFoundComponent } from './navbar/not-found/not-found.component';
import { LogInComponent } from './log-in/log-in.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "products", component: ProductsComponent},
    {path: "log-in", component: LogInComponent},
    {path: "contact", component: ContactComponent},
    {path: "**", component: NotFoundComponent},
];
