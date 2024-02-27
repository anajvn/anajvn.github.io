import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges{

  @Input()
  language: string = "en";

  ngOnChanges(): void {
      this.language == "en" ? this.indexByLanguage = 0 : this.indexByLanguage = 1; 
  }

  indexByLanguage = 0;

  navbarWords: string[][] = [["Profile", "Experience", "Projects", "Contact"],
                            ["Sobre mim", "Experiencia", "Projetos", "Contato"]];

}
