import { TestBed } from '@angular/core/testing';

import { TodoDataClientService } from './todo-data-client.service';

describe('DataClientService', () => {
  let service: TodoDataClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoDataClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
