import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnChanges{

  @Input()
  language: string = 'en';

  ngOnChanges(changes: SimpleChanges): void {
    this.language == "en" ? this.indexByLanguage = 0 : this.indexByLanguage = 1; 
  }

  indexByLanguage = 0;
  experiencesTexts = [{title: "Professional experience", text: "I am a highly motivated and results-driven professional with four years of hands-on experience. I have a proven ability to effectively analyze complex technical problems and provide innovative solutions. I am currently exploring new career opportunities in web development programming and seeking to collaborate with a company that values creativity, technology, and continuous learning.", button: "CHECK MY FULL RESUME ON LINKEDIN"},
                      {title: "Experiência Profissional", text: "Sou uma profissional altamente motivada e voltada para resultados, com quatro anos de experiência prática. Tenho capacidade comprovada de analisar com eficácia problemas técnicos complexos e oferecer soluções inovadoras. No momento, estou explorando novas oportunidades de carreira em programação de desenvolvimento da Web e buscando colaborar com uma empresa que valoriza a criatividade, a tecnologia e o aprendizado contínuo.", button: "CONFIRA MEU CURRÍCULO COMPLETO NO LINKEDIN"}]

  developmentSkillsList = [["Object-Oriented Programming",
                            "Restfuls APIs",
                            "Unit Tests",
                            "Agile Methodologies",
                            "Willingness to learn other programming languages"],
                            ["Programação orientada a objetos",
                              "APIs Restfuls",
                              "Testes unitários",
                              "Metodologias ágeis",
                              "Disposição para aprender outras linguagens de programação"]];

  professionalSkillsList= [["Creative problem solving", 
                            "Great communication skills",
                            "Interdisciplinary technical background", 
                            "Fast integration with international teams",
                            "Customer service"],
                            ["Resolução criativa de problemas",
                            "Ótimas habilidades de comunicação",
                            "Experiência técnica interdisciplinar",
                            "Integração rápida com equipes internacionais",
                            "Atendimento ao cliente"]];

  languagesAndToolsList: string[][] = [['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', 'C#', 'Csharp'],
                                      ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 'Python','Python'],
                                      ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', 'Java', 'Java'],
                                      ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 'JavaScript', 'JavaScript'],
                                      ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', 'TypeScript', 'TypeScript'],
                                      ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', 'CSS3', 'CSS3'],
                                      ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', 'HTML5', 'HTML5'],
                                      ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg', 'Angular', 'Angular'],
                                      ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain-wordmark.svg', '.NET', 'dotnet'],
                                      ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', 'Spring', 'Spring'],
                                      ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', 'MySQL', 'MySQL'],
                                      ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', 'AWS', 'AWS'],
                                      ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/insomnia/insomnia-original.svg', 'Insomnia', 'Insomnia'],
                                      ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', 'Git', 'Git'],
                                      ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', 'GitHub', 'GitHub']];
}
