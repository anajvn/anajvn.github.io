import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnChanges{

  @Input()
  language: string = 'en';

  ngOnChanges(changes: SimpleChanges): void {
    this.language == "en" ? this.indexByLanguage = 0 : this.indexByLanguage = 1; 
  }

  indexByLanguage = 0;

  profileText = [{title: "Hi, I'm Ana!", text: "I'm a Brazilian engineer who is diving into the world of development and absolutely loving it! I embarked on this exciting journey in 2022 and have been thrilled by it every single day. Right now, I'm honing my skills in Java, Angular, and AWS. Don't hesitate to get in touch with me anytime – I'd love to connect :)", resume: "RESUME", contact:"CONTACT", projects: "MY WORK"},
  {title: "Oie, eu sou a Ana!", text: "Sou uma engenheira brasileira que está mergulhando no mundo do desenvolvimento e adorando! Embarquei nessa jornada empolgante em 2022 e tenho me entusiasmado com ela todos os dias. No momento, estou desenvolvendo minhas habilidades em Java, Angular e AWS. Não deixe de entrar em contato comigo a qualquer momento - vai ser um prazer conversar :)", resume: "CURRÍCULO", contact:"CONTATO", projects: "PROJETOS"}]
}
