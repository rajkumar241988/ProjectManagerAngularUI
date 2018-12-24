import { TestBed } from '@angular/core/testing';
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";

import { ProjectService } from './project.service';

describe('ProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule
    ],
    providers: [
      ProjectService
    ]
  }));

  it('should be created', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    expect(service).toBeTruthy();
  });
});
