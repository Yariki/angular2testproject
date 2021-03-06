import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {AuthService} from '../auth/auth.service';
import {RecipeService} from '../services/recipe.service';
import {ShoppingListService} from '../services/shopping-list.service';
import {DataStorageService} from '../shared/data-storage.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService
  ]
})
export class CoreModule {}
