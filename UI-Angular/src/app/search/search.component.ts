import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  selectedSearch = [];
  tagExtractURL = environment.apiURL + 'image-extract';

  tags = [];
  articles = [];

  constructor(
    public sanitizer: DomSanitizer,
    private router: Router
  ) { }

  handleChange(data: NzUploadChangeParam) {
    console.log(data);

    const file = { ...data.file };
    const url = URL.createObjectURL(file.originFileObj);
    if (file?.response?.data) {
      file.response.data.forEach(res => {
        this.selectedSearch.push({ value: res.name, label: res.name, src: url, file: file.originFileObj });
        this.selectedSearch = [...this.selectedSearch];
      });
    }
    // this.selectedSearch.push({ value: 'dummy', label: 'dummy', src: sanitizedURL });
    // this.selectedSearch = [...this.selectedSearch];
  }

  defaultFilterOption = (searchValue, item) => {
    if (item && item.nzLabel && typeof (item.nzLabel) !== 'object') {
      return item.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
      return false;
    }
  };

  search() {
    this.tags = this.selectedSearch.map((t) => {
      if (typeof (t) === 'string') {
        return { value: t }
      }
      return t;
    });
  }

  sanitizeImageURL(url) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
