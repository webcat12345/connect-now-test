import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VideoGamesRoutingModule } from './video-games-routing.module';

import { VideoGamesComponent } from './video-games.component';
import { FilterComponent } from './filter/filter.component';
import { VideoGameListItemComponent } from './video-game-list-item/video-game-list-item.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [VideoGamesComponent, FilterComponent, VideoGameListItemComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, VideoGamesRoutingModule, SharedModule],
})
export class VideoGamesModule {}
