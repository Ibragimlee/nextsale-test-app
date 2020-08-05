import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor() {}

  mainUrl = `https://api.usenextsale.com`;
  cors = `https://cors-anywhere.herokuapp.com/`;

  getUrl() {
    return {
      file_upload: `${this.cors}/${this.mainUrl}`,
      test_file_upload: `https://api.itv.az/api/report/file`,
    };
  }
}
