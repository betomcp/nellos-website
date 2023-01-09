import { EventsComponent } from './pages/events/events.component';
import { AwardsComponent } from './pages/awards/awards.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesComponent } from './pages/images/images.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'historia', component: HistoryComponent },
  { path: 'premiacoes', component: AwardsComponent },
  { path: 'eventos', component: EventsComponent },
  { path: 'imagens', component: ImagesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
