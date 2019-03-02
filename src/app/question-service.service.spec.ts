import { TestBed, inject } from '@angular/core/testing';

import { QuestionServiceService } from './question-service.service';

describe('QuestionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionServiceService]
    });
  });

  it('should be created', inject([QuestionServiceService], (service: QuestionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
