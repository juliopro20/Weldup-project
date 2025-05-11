import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { FaqComponent } from './Pages/faq/faq.component';
import { ProductComponent } from './Pages/product/product.component';
import { ServiceComponent } from './Pages/service/service.component';
import { WelderComponent } from './Pages/welder/welder.component';
import { LoginClientComponent } from './Logins/login-client/login-client.component';
import { LoginCompanyComponent } from './Logins/login-company/login-company.component';
import { RegisterClientComponent } from './onboards/register-client/register-client.component';
import { RegisterCompanyComponent } from './onboards/register-company/register-company.component';
import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';
import { LoginAdminComponent } from './Logins/login-admin/login-admin.component';
import { ClientDashboardComponent } from './dashboards/client-dashboard/client-dashboard.component';
import { CompanyDashboardComponent } from './dashboards/company-dashboard/company-dashboard.component';


export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'faq', component: FaqComponent},
    { path: 'product', component: ProductComponent},
    { path: 'service', component: ServiceComponent},
    { path: 'welder', component: WelderComponent},
    { path: 'loginClient', component: LoginClientComponent},
    { path: 'loginCompany', component: LoginCompanyComponent},
    { path: 'adminlogin', component: LoginAdminComponent},
    { path: 'registerClient', component: RegisterClientComponent},
    { path: 'registerCompany', component: RegisterCompanyComponent},
    { path: 'admin-dashboard', component: AdminDashboardComponent},
    { path: 'client-dashboard', component: ClientDashboardComponent},
    { path: 'company-dashboard', component: CompanyDashboardComponent}
];
