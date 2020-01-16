import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service : LocalStorageService;

  beforeEach(() =>{
    service = new LocalStorageService();
  });

  // it('should be created', () => {
  //   const service: LocalStorageService = TestBed.get(LocalStorageService);
  //   expect(service).toBeTruthy();
  // });

  it("should add searched pokemon to recent searches", ()=>{
    service.clearLocalStorage();
    let result = service.addRecentSearch(101);

    expect(result.length).toBe(1);
    expect(result[0]).toBe(101);

    result = service.addRecentSearch(102);
    expect(result.length).toBe(2);
    expect(result.includes(102)).toBe(true);
  });
});
