import { FileUploadService } from './../../services/file-upload/file-upload.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-file-input',
  templateUrl: './custom-file-input.component.html',
  styleUrls: ['./custom-file-input.component.scss'],
})
export class CustomFileInputComponent implements OnInit {
  constructor(private FileUploadService: FileUploadService) {}

  ngOnInit(): void {}

  public file_input = {
    value: null,
    required: true,
    validate: false,
    error_message: '',
    touched: false,
    loading: 'initial',
    // loading: 'loading',
  };

  files: any = [];
  public all_volume;
  public volume_now;
  public fileInputElement;
  public progress_percent;
  public preview_image;
  public preview_image_dimensions;

  CheckFileLoading(status) {
    if (this.file_input.loading == status) {
      return true;
    } else {
      return false;
    }
  }

  FileInputChange(event) {
    this.fileInputElement = <File>event.currentTarget.files[0];
    if (event.currentTarget.files.length > 0) {
      let dot = this.fileInputElement.name.indexOf('.');
      let checkFileFormat = this.fileInputElement.name
        .substring(dot, this.fileInputElement.length)
        .toLowerCase();
      if (
        checkFileFormat == '.jpg' ||
        checkFileFormat == '.jpeg' ||
        checkFileFormat == '.tiff' ||
        checkFileFormat == '.png' ||
        checkFileFormat == '.svg'
      ) {
        // prepare previewer for loaded image
        let reader = new FileReader();
        reader.readAsDataURL(this.fileInputElement);
        reader.onload = () => {
          this.preview_image = reader.result;
        };
        // prepare previewer for loaded image

        const FD = new FormData();
        FD.append('file', this.fileInputElement);
        this.file_input.required = true;
        this.file_input.loading = 'loading';

        this.FileUploadService.Events(FD).subscribe((EVENT) => {
          this.progress_percent = `${Math.round(
            (100 * EVENT.loaded) / EVENT.total
          )}%`;

          this.all_volume = `${(EVENT.total / (1024 * 1024)).toFixed(1)}MB`;
          this.volume_now = `${(EVENT.loaded / (1024 * 1024)).toFixed(1)}MB`;
          if (EVENT.body) {
            if (EVENT.status == 201) {
              if (this.fileInputElement != 0) {
                this.file_input.value = EVENT.body.data.file;
                this.file_input.validate = true;
                this.file_input.loading = 'loaded';
              }
            }
          }
        });
      }
    } else {
      this.file_input.loading = 'initial';
    }
  }

  // get Image dimensions
  onPreviewLoad(event) {
    let img = event.currentTarget;
    this.preview_image_dimensions = `${img.naturalWidth} x ${img.naturalHeight}`;
  }
  // get Image dimensions

  // Remove File
  deleteFile() {
    this.file_input.loading = 'initial';
    this.fileInputElement = '0';
    this.file_input.validate = false;
  }
  // Remove File
}
