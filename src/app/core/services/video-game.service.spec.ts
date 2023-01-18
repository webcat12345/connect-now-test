import { TestBed } from '@angular/core/testing';

import { environment } from '../../../environments/environment';
import { VideoGameService } from './video-game.service';

describe('VideoGameService', () => {
  let service: VideoGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getVideoGames', () => {
    it('should call properly', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getVideoGames().subscribe(res => {
        expect(res).toEqual(<any>[]);
      });
      const req = httpTestingController.expectOne(`${environment.api}`);
      expect(req.request.method).toEqual('GET');
      req.flush(<any>[]);
      httpTestingController.verify();
    });
  });
});
