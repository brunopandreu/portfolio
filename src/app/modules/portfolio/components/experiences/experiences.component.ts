import { Component, signal } from '@angular/core';
import { iExperiences } from '../../interface/experiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<iExperiences[]>([
    {
      summary: {
        strong: "Desenvolvedor de front-end",
        p: "Banco BS2 | 2021/Ago - 2025/Abr"
      },
      text: "Definição do layout dos aplicativos e sites desenvolvidos,Revisão de códigos de programação,Manutenção e atualização dos sistemas,Elaboração da documentação de sistemas,Realização de testes unitários e validação das soluções desenvolvidas,Desenvolvimento de módulos e arquitetura,Versionamento de arquivos utilizando Git,Criação de versões para Web e Mobile. </br>Tecnologias: HTML,CSS3,Angular,JavaScript,TypeScriptControle e versionamento de arquivos via git.Versões Web e Mobile, Teste Unitário,Tradução i18n."
    },
    {
      summary: {
        strong: "Estágio Desenvolvedor Web",
        p: "CFM Desenvolvimento | 2021/Jan - 2021/Ago"
      },
      text: "Manutenção de features em projetos web, monitorando o desempenho dos recursos e ferramentas para intervir em casos de necessidade. •	Revisão de códigos de programação, identificando possíveis erros que comprometessem o funcionamento do programa. •	Projetos web utilizando framework javascript angular 9 e linguagem PHP (Wordpress/Woocommerce)."
    }
  ])
}
