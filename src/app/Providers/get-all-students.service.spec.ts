import { TestBed } from '@angular/core/testing';

import { GetAllStudentsService } from './get-all-students.service';

describe('GetAllStudentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllStudentsService = TestBed.get(GetAllStudentsService);
    expect(service).toBeTruthy();
  });
});
