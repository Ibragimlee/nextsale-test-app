import { UrlService } from './../url/url.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(private HttpClient: HttpClient, private UrlService: UrlService) {}

  Events(FILE: FormData): Observable<any> {
    return this.HttpClient.post<FormData>(
      this.UrlService.getUrl().test_file_upload,
      FILE,
      { reportProgress: true, observe: 'events' }
    );
  }
}
