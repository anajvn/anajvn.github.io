import { Component, HostListener, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input()
  language: string = 'en';

  @HostListener('window:resize')  
  onResize() { 
    window.innerWidth < 800 ? this.projectsToShow = 1 : (window.innerWidth < 1200 ? this.projectsToShow = 2 : this.projectsToShow = 3); 
    this.projectsIndex = [];
    for(let i = 0; i < this.projectsToShow; i++){
      this.projectsIndex[i] = i;
    }
  }  

  ngOnInit(): void {
      this.onResize();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.language == "en" ? this.indexByLanguage = 0 : this.indexByLanguage = 1; 
  }

  indexByLanguage = 0;
  projectsText = [{title: "Projects", subtitle: "This is a selection of projects I have done to improve my abilities.", button: "TRY IT OUT"}, 
                  {title: "Projetos", subtitle: "Esta é uma seleção de projetos que realizei para aprimorar minhas habilidades.", button: "TESTE"}]


  projectsIndex: number[] = [];
  projectsToShow = 0;
  // photoUrl, url, title, description, keywords, demonstration?, [projectUrl]
  projectsList = [['assets/ada-forms.png', 'https://github.com/anajvn/Ada-Credit-Forms', ['Digital Credit System', 'Cooperativa Digital de Crédito'], ['Program for a small local digital credit union, with encrypted login and password for entry. The code performs operations with the clients, employees and displays the transactions. For better understanding, it is programmed to generate fictitious and singular customers, employees and transactions. Produced in both console and Windows Forms format.', "Programa para uma pequena cooperativa de crédito digital local, com login e senha criptografados para entrada. O código realiza operações com os clientes, funcionários e exibe as transações. Para melhor compreensão, ele é programado para gerar clientes, funcionários e transações fictícios e singulares. Produzido em formato de console e Windows Forms."], 'C#, .NET, Windows Forms, Clean Code, Back End Project', 'false', ''],
                  ['assets/tic-tac-toe.png', 'https://github.com/anajvn/Tic-Tac-Toe', ['Tic-Tac-Toe', "Jogo da Velha"], ['A Python Tic-Tac-Toe game project that has been created with the purpose of helping me learn the Python programming language whileby coding a classic game.', "Um projeto de jogo da velha em Python que foi criado com o objetivo de me ajudar a aprender a linguagem de programação Python e, ao mesmo tempo, codificar um jogo clássico."], 'Python, Clean Arch, Back End Project', 'false', '' ],
                  ['assets/pokedex.png', 'https://github.com/anajvn/pokedex', ['Pokédex', 'Pokédex'], ['A project that explores the world of Pokémon by using a REST API to create a Pokédex, designed for practicing JavaScript and web development fundamentals, deployed in GitHub Pages.', "Um projeto que explora o mundo do Pokémon usando uma API REST para criar um Pokédex, projetado para praticar JavaScript e fundamentos de desenvolvimento da Web, implantado no GitHub Pages."], ' HTML, CSS, JavaScript, RESTFUL API', 'true', 'https://anajvn.github.io/pokedex/'],
                  ['assets/sudoku.png', 'https://github.com/anajvn/SudokuGame', ['Sudoku', 'Sudoku'], ['A Sudoku application featuring three levels of difficulty, developed exclusively in front-end utilizing the Angular framework.', "Um aplicativo de Sudoku com três níveis de dificuldade, desenvolvido exclusivamente em front-end utilizando a estrutura Angular."],'TypeScript, HTML, CSS, Angular, Front End Project' , 'true', 'https://anajvn.github.io/SudokuGame/'],
                  ['assets/Transacoes.png', 'https://github.com/anajvn/desafio-transacoes', ['Financial Transaction Control System', 'Sistema de Controle de Transações Financeiras'], ['This project utilizes Spring Boot and Angular to create a financial transaction management app with features like batch/individual transactions, listing, filtering by category, adding/editing/deleting transactions, clearing database, and calculating totals.', "Este projeto utiliza o Spring Boot e o Angular para criar um aplicativo de gerenciamento de transações financeiras com recursos como transações em lote/individuais, listagem, filtragem por categoria, adição/edição/exclusão de transações, limpeza de banco de dados e cálculo de totais."], 'TypeScript, Java, MySQL, HTML, CSS, Angular, REST API, Spring Boot, Swagger, Full Stack Project', 'true', 'https://anajvn.github.io/desafio-transacoes/']];

  goToRightProjects(){
    for(let i = 0; i < this.projectsToShow; i++){
      if(this.projectsIndex[i] == this.projectsList.length - 1){
        this.projectsIndex[i] = 0
      } else{
        this.projectsIndex[i]++;
      }  
    }
  }

  goToLeftProjects(){
    for(let i = 0; i < this.projectsToShow; i++){
      if(this.projectsIndex[i] == 0){
        this.projectsIndex[i] = this.projectsList.length - 1
      } else{
        this.projectsIndex[i]--;
      }  
    }
  }
}
