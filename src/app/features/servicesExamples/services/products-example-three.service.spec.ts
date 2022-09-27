import { TestBed } from '@angular/core/testing';

import { ProductsExampleThreeService } from './products-example-three.service';

describe('ProductsExampleThreeService', () => {
  let service: ProductsExampleThreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsExampleThreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
