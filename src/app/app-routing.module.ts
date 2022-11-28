import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponentComponent } from './components/profile-component/shop-component/shop-component.component';
import { SubsBillsComponentComponent } from './components/profile-component/subs-bills-component/subs-bills-component.component';
import { ProfileComponent } from './page-component/profile/profile.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { StorepageComponent } from './pages/storepage/storepage.component';
import { PreOrdersComponentComponent } from './components/profile-component/pre-orders-component/pre-orders-component.component';
import { ChangeNumberComponentComponent } from './components/profile-component/change-number-component/change-number-component.component';
import { HomepageComponentComponent } from './page-component/homepage-component/homepage-component.component';
import { StoresComponent } from './page-component/stores/stores.component';


const routes: Routes = [
  {
    path: '', component: HomepageComponent
    , children: [
      { path: '', component: HomepageComponentComponent },
      { path: 'Store_list', component: StoresComponent },
      // { path: 'Orders', component: HomepageComponentComponent },
      // { path: 'Subscriptions', component: HomepageComponentComponent },
      {path: 'profile', component: ProfileComponent,
        children: [
          { path: '', component: ShopComponentComponent },
          // { path: 'shop', component: ShopComponentComponent },
          { path: 'subscription_bills', component: SubsBillsComponentComponent },
          { path: 'previous_order_history', component: PreOrdersComponentComponent },
          { path: 'change_number', component: ChangeNumberComponentComponent },
        ]
      }
    ]
  },

  { path: 'store', component: StorepageComponent },
  { path: 'login', component: LoginComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
