import { Component, OnInit } from '@angular/core';

const animaition = () => {
  const h5 = document.getElementById('h5-id');
  const h6 = document.getElementById('h6-id');
  const p = document.getElementById('p-id');

  h5?.classList.remove('animationTitle');
  h6?.classList.remove('animationTitle');
  p?.classList.remove('animationText');

  setTimeout(() => {
    h5?.classList.add('animationTitle');
    h6?.classList.add('animationTitle');
    p?.classList.add('animationText');
  }, 1);
};

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss'],
})
export class HistoryCardComponent implements OnInit {
  public dots: string[] = [
    'rgb(49, 49, 49)',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'transparent',
  ];

  public imgUrl = '../../../assets/imgs/card-1.png';

  public pageNumber = 0;
  public histNumber = '';
  public histTitle = '';
  public history = '';

  public histories: Array<{ number: string; title: string; text: string }> = [];

  constructor() {
    this.histories = this.getHistories();
  }

  ngOnInit(): void {
    const { number, title, text } = this.histories[this.pageNumber];
    this.histNumber = number;
    this.histTitle = title;
    this.history = text;
  }

  changeHistory() {
    const { number, title, text } = this.histories[this.pageNumber];
    this.histNumber = number;
    this.histTitle = title;
    this.history = text;
    this.dots[this.dots.indexOf('rgb(49, 49, 49)')] = 'transparent';
    this.dots[this.pageNumber] = 'rgb(49, 49, 49)';
    this.imgUrl = `../../../assets/imgs/card-${this.pageNumber + 1}.png`;
    animaition();
  }

  nextPage() {
    if (this.pageNumber == 13) {
      this.pageNumber = 0;
    } else {
      this.pageNumber += 1;
    }

    this.changeHistory();
  }

  lastPage() {
    if (this.pageNumber == 0) {
      this.pageNumber = 13;
    } else {
      this.pageNumber -= 1;
    }

    this.changeHistory();
  }

  jumpPage(index: number) {
    this.pageNumber = index;
    this.changeHistory();
  }

  private getHistories() {
    return [
      {
        number: '01',
        title: 'Napol??on',
        text: 'Tudo come??ou em Roma, com D. Italia, a dona de um Caf??, e seus cinco filhos. Em 1926, Augusto, o mais velho, foi convidado para fazer um filme na Fran??a com Abel Gance. Napol??on, estreiou em 1927 e se tornou o maior cl??ssico do cinema mudo franc??s',
      },
      {
        number: '02',
        title: 'Rodolfo, chi?',
        text: 'Augusto era um excelente dan??arino e fazia um n??mero de dan??a com Rodolfo, um companheiro, tamb??m italiano, nas noites de Paris. Animada com o sucesso cinematogr??fico de Augusto, a dupla resolveu partir em dire????o ?? Am??rica, rumo a Hollywood, para tentar o estrelato. Chegando l??, Augusto realizou uma dezena de testes, sem sucesso. Seu companheiro, entretanto, conseguiu um contrato com um grande est??dio. E adotou o nome de Rodolfo Valentino.',
      },
      {
        number: '03',
        title: 'Il piccolo ma gi?? grande astro!',
        text: 'Enquanto isso, na It??lia, Nello, o irm??o mais novo, se tornara ator prematuro, participando aos 14 anos do primeiro filme italiano feito em Cine Citt??, Feroce Saladino, em 1937. No ano seguinte, estrelou Piccoli Naufraghi, alcan??ando o status de astro.',
      },
      {
        number: '04',
        title: 'Arrivederci Roma...',
        text: 'Embalado nos sucesso repentino e tutelado pelo irm??o Augusto, Nello resolveu tentar a sorte nos Estados Unidos. Chegaram a Nova Iorque em dezembro de 1941. No dia 7, os japoneses bombardearam Pearl Harbor. Os Estados Unidos entravam na Segunda Guerra e os italianos se tornavam seus inimigos. Enquanto Augusto era deportado de volta ?? It??lia, Nello, sendo menor de idade, teve de permanecer em Nova Iorque, iniciando uma vida dura como imigrante vindo de um pa??s inimigo.',
      },
      {
        number: '05',
        title: 'Neo-realismo na It??lia',
        text: 'Terminada a guerra, a vida de Augusto, havia tomado caminhos estranhos. Dera baixa no ex??rcito italiano e decidira tentar neg??cios na Am??rica do Sul. Corriam os anos 50, quando Nello retornou a Roma. E logo se envolveu com cinema novamente, participando do movimento neo-realista. Trabalhou com a nata: Roberto Rossellini, Aldo Fabrizi, Mario Bonard, Vittorio de Sica, entre outros. E foi dentre as estrelas italianas que escolheu como esposa D. Rina.',
      },
      {
        number: '06',
        title: 'Restaurante em New York',
        text: 'O sonho de viver ???The American Way of Life???, fez valer ao casal o desafio de migrar para a Am??rica. Rec??m-casados, estabeleceram-se em Nova Iorque, aonde Nello ajudou na funda????o do Orsini??s, um dos restaurantes mais elegantes da cidade.',
      },
      {
        number: '07',
        title: 'Trastevere e o Brasil',
        text: 'N??o foi por acaso que o Nello se aventurou pelo Brasil, trazendo mala, cuia e fam??lia. Desde o final da d??cada de 50, Augusto havia estabelecido em S??o Paulo o restaurante Trastevere e o havia convidado diversas vezes a tentar neg??cios no Brasil. O destino triste e ir??nico, no entanto, fez com que o Nello viesse para o Brasil, somente em 1973, por ocasi??o do falecimento do irm??o. Encerravam-se os mais de 25 anos do glamour de Augusto nos sal??es da cidade: o Trastevere, que havia recebido quatro presidentes da rep??blica, astros e estrelas, nacionais e internacionais e todo tipo de celebridades, fechava suas portas para sempre!',
      },
      {
        number: '08',
        title: 'Fam??lia unida, jamais ser?? vencida!',
        text: 'Mas o sucesso do irm??o deixou uma curiosa semente plantada. Contra todo o bom senso, o encanto pelo Brasil e a possibilidade de iniciar seu pr??prio estabelecimento acabaram por conquistar Nello e fornecer-lhe a coragem para migrar novamente, agora com a fam??lia aumentada. Com seus 3 filhos ajudando, foi em dezembro de 1974, que o casal vislumbrou a possibilidade do sucesso, num sobradinho de Pinheiros. As receitas de D. Rina e sua exig??ncia de que todos os pratos sejam preparados na hora ganharam, aos poucos, clientela e notoriedade por toda S??o Paulo.',
      },
      {
        number: '09',
        title: 'Cinema no Brasil?!',
        text: 'Mas o sucesso do restaurante n??o apagou a chama da paix??o pelo cinema. Nello e sua fam??lia, produziram importantes filmes para o Brasil. Festa, de Ugo Giorgetti, permanece como o maior ganhador de Kikitos do festival de Gramado, com 6 estatuetas. E Cassiop??ia, de Clovis Vieira, colocou o Brasil no mapa do cinema mundial, tendo sido o primeiro desenho animado de longa metragem inteiramente digital do mundo, antes mesmo de Toy Story, dos est??dios Disney.',
      },
      {
        number: '10',
        title: 'Bonita camisa, Fernandinho!',
        text: 'Foi com essa campanha publicit??ria que, al??m de tudo, o Nello voltou a ser ator consagrado. Quem diria, depois de quase 50 anos! Fez diversos filmes publicit??rios para empresas como US Top, Sadia, Mercedes-Bens, Pepsi, Estrela, Estomazil e tantas outras. Mas, se olharem com cuidado, notar??o que o sal??o do restaurante tornou-se seu grande palco. ?? aqui onde continuam se desenrolando as hist??rias da familia, onde se contam os casos e se fazem grandes amigos.',
      },
      {
        number: '11',
        title: 'O homem que virou filme!',
        text: 'Em 2007, Nello fez 70 anos de cinema com uma grande festa e a presen??a de v??rios artistas. E em 2008 foi homenageado no Festival de Cinema de Bras??lia com um document??rio sobre sua vida. Apropriadamente, o filme de Andr?? Ristum ganhou o nome de Nello??s e foi agraciado com a Men????o Honrosa da Associa????o Brasileira de Documentaristas. Foi o auge de mais de 70 anos dedicados ao cinema.',
      },
      {
        number: '12',
        title: 'A Familia cresce...e abre uma filial.',
        text: 'Nello e Rina tiveram 4 filhos e 10 netos e com tanta gente na fam??lia resolveram abrir uma filial. O bairro escolhido foi a Vila Leopoldina. Daniela e Massimo, com ajuda do neto mais velho e tamb??m Augusto, come??aram a tocar a nova casa, que, constru??da para reaproveitar ??gua pluvial, contando com energia solar e voltada para a reciclagem, conserva e amplia nossa tradi????o culin??ria. E, assim como em Pinheiros, nos tornamos a primeira cantina do bairro!',
      },
      {
        number: '13',
        title: 'Cai o pano!',
        text: 'Em 2013, Nello e Rina fizeram 60 anos de casamento. E tivemos as duas casas reconhecidas pelo governo italiano no programa Ospitalit?? Italiana, que certifica pequenas embaixadas culturais da It??lia ao redor do mundo. Foi tamb??m o anivers??rio de 80 anos de D. Rina. Entre tantas alegrias, nosso querido Nello saiu de cena, deixando seu exemplo admir??vel de coragem, talento e paix??o pela vida. E, em n??s, a saudade eterna que procuramos honrar com nosso trabalho!',
      },
      {
        number: '14',
        title: 'A Personalidade Comendadora!',
        text: 'Em 2014, D. Rina foi condecorada com a comenda da Cruz do M??rito Gastron??mico conferida pela C??mara dos Deputados. Justo reconhecimento da paix??o pelo que se faz! Em 2015, ganhamos nosso primeiro pr??mio internacional em Santiago do Chile: o Latin American Quality Award, no setor de alimenta????o. E D. Rina foi homenageada com o pr??mio de Personalidade Gastron??mica de S??o Paulo pela revista Veja SP. E fez o apanhado em timbre materno e maduro de nossa hist??ria: ',
      },
    ];
  }
}
