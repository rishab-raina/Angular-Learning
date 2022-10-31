import { Component } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'multi-language';

  constructor(private translate: TranslateService) {
    console.log(translate.data);
  }

  setLang(lang: string) {
    this.translate.use(lang);
  }
}
