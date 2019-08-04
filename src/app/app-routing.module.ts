import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { AboutComponent } from './about/about.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { AppComponent } from './app.component';



const routes: Routes = [
  { path : 'game', component: GameComponent},
  { path : 'about', component: AboutComponent},
  { path : 'artwork', component: ArtworkComponent},
  { path : 'app', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GameComponent, AboutComponent, ArtworkComponent,AppComponent]