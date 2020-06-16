import { TestBed } from '@angular/core/testing';

import { ChatLogService } from './chat-log.service';

describe('ChatLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatLogService = TestBed.get(ChatLogService);
    expect(service).toBeTruthy();
  });
});
