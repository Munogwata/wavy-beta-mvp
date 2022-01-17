import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisclaimerComponent } from './pages/disclaimer/disclaimer.component';
import { FinancialModelsComponent } from './pages/financial-models/financial-models.component';
import { HomeComponent } from './pages/home/home.component';
import { InvestorProfileComponent } from './pages/investor-profile/investor-profile.component';
import { LearnComponent } from './pages/learn/learn.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'Learn', component: LearnComponent },
{path: 'Financial Models', component: FinancialModelsComponent},
{path: 'Disclaimer', component: DisclaimerComponent},
{path: 'Investor Profile', component: InvestorProfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
