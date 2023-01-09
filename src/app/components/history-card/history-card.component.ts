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
        title: 'Napoléon',
        text: 'Tudo começou em Roma, com D. Italia, a dona de um Café, e seus cinco filhos. Em 1926, Augusto, o mais velho, foi convidado para fazer um filme na França com Abel Gance. Napoléon, estreiou em 1927 e se tornou o maior clássico do cinema mudo francês',
      },
      {
        number: '02',
        title: 'Rodolfo, chi?',
        text: 'Augusto era um excelente dançarino e fazia um número de dança com Rodolfo, um companheiro, também italiano, nas noites de Paris. Animada com o sucesso cinematográfico de Augusto, a dupla resolveu partir em direção à América, rumo a Hollywood, para tentar o estrelato. Chegando lá, Augusto realizou uma dezena de testes, sem sucesso. Seu companheiro, entretanto, conseguiu um contrato com um grande estúdio. E adotou o nome de Rodolfo Valentino.',
      },
      {
        number: '03',
        title: 'Il piccolo ma giá grande astro!',
        text: 'Enquanto isso, na Itália, Nello, o irmão mais novo, se tornara ator prematuro, participando aos 14 anos do primeiro filme italiano feito em Cine Cittá, Feroce Saladino, em 1937. No ano seguinte, estrelou Piccoli Naufraghi, alcançando o status de astro.',
      },
      {
        number: '04',
        title: 'Arrivederci Roma...',
        text: 'Embalado nos sucesso repentino e tutelado pelo irmão Augusto, Nello resolveu tentar a sorte nos Estados Unidos. Chegaram a Nova Iorque em dezembro de 1941. No dia 7, os japoneses bombardearam Pearl Harbor. Os Estados Unidos entravam na Segunda Guerra e os italianos se tornavam seus inimigos. Enquanto Augusto era deportado de volta à Itália, Nello, sendo menor de idade, teve de permanecer em Nova Iorque, iniciando uma vida dura como imigrante vindo de um país inimigo.',
      },
      {
        number: '05',
        title: 'Neo-realismo na Itália',
        text: 'Terminada a guerra, a vida de Augusto, havia tomado caminhos estranhos. Dera baixa no exército italiano e decidira tentar negócios na América do Sul. Corriam os anos 50, quando Nello retornou a Roma. E logo se envolveu com cinema novamente, participando do movimento neo-realista. Trabalhou com a nata: Roberto Rossellini, Aldo Fabrizi, Mario Bonard, Vittorio de Sica, entre outros. E foi dentre as estrelas italianas que escolheu como esposa D. Rina.',
      },
      {
        number: '06',
        title: 'Restaurante em New York',
        text: 'O sonho de viver “The American Way of Life”, fez valer ao casal o desafio de migrar para a América. Recém-casados, estabeleceram-se em Nova Iorque, aonde Nello ajudou na fundação do Orsini´s, um dos restaurantes mais elegantes da cidade.',
      },
      {
        number: '07',
        title: 'Trastevere e o Brasil',
        text: 'Não foi por acaso que o Nello se aventurou pelo Brasil, trazendo mala, cuia e família. Desde o final da década de 50, Augusto havia estabelecido em São Paulo o restaurante Trastevere e o havia convidado diversas vezes a tentar negócios no Brasil. O destino triste e irônico, no entanto, fez com que o Nello viesse para o Brasil, somente em 1973, por ocasião do falecimento do irmão. Encerravam-se os mais de 25 anos do glamour de Augusto nos salões da cidade: o Trastevere, que havia recebido quatro presidentes da república, astros e estrelas, nacionais e internacionais e todo tipo de celebridades, fechava suas portas para sempre!',
      },
      {
        number: '08',
        title: 'Família unida, jamais será vencida!',
        text: 'Mas o sucesso do irmão deixou uma curiosa semente plantada. Contra todo o bom senso, o encanto pelo Brasil e a possibilidade de iniciar seu próprio estabelecimento acabaram por conquistar Nello e fornecer-lhe a coragem para migrar novamente, agora com a família aumentada. Com seus 3 filhos ajudando, foi em dezembro de 1974, que o casal vislumbrou a possibilidade do sucesso, num sobradinho de Pinheiros. As receitas de D. Rina e sua exigência de que todos os pratos sejam preparados na hora ganharam, aos poucos, clientela e notoriedade por toda São Paulo.',
      },
      {
        number: '09',
        title: 'Cinema no Brasil?!',
        text: 'Mas o sucesso do restaurante não apagou a chama da paixão pelo cinema. Nello e sua família, produziram importantes filmes para o Brasil. Festa, de Ugo Giorgetti, permanece como o maior ganhador de Kikitos do festival de Gramado, com 6 estatuetas. E Cassiopéia, de Clovis Vieira, colocou o Brasil no mapa do cinema mundial, tendo sido o primeiro desenho animado de longa metragem inteiramente digital do mundo, antes mesmo de Toy Story, dos estúdios Disney.',
      },
      {
        number: '10',
        title: 'Bonita camisa, Fernandinho!',
        text: 'Foi com essa campanha publicitária que, além de tudo, o Nello voltou a ser ator consagrado. Quem diria, depois de quase 50 anos! Fez diversos filmes publicitários para empresas como US Top, Sadia, Mercedes-Bens, Pepsi, Estrela, Estomazil e tantas outras. Mas, se olharem com cuidado, notarão que o salão do restaurante tornou-se seu grande palco. É aqui onde continuam se desenrolando as histórias da familia, onde se contam os casos e se fazem grandes amigos.',
      },
      {
        number: '11',
        title: 'O homem que virou filme!',
        text: 'Em 2007, Nello fez 70 anos de cinema com uma grande festa e a presença de vários artistas. E em 2008 foi homenageado no Festival de Cinema de Brasília com um documentário sobre sua vida. Apropriadamente, o filme de André Ristum ganhou o nome de Nello´s e foi agraciado com a Menção Honrosa da Associação Brasileira de Documentaristas. Foi o auge de mais de 70 anos dedicados ao cinema.',
      },
      {
        number: '12',
        title: 'A Familia cresce...e abre uma filial.',
        text: 'Nello e Rina tiveram 4 filhos e 10 netos e com tanta gente na família resolveram abrir uma filial. O bairro escolhido foi a Vila Leopoldina. Daniela e Massimo, com ajuda do neto mais velho e também Augusto, começaram a tocar a nova casa, que, construída para reaproveitar água pluvial, contando com energia solar e voltada para a reciclagem, conserva e amplia nossa tradição culinária. E, assim como em Pinheiros, nos tornamos a primeira cantina do bairro!',
      },
      {
        number: '13',
        title: 'Cai o pano!',
        text: 'Em 2013, Nello e Rina fizeram 60 anos de casamento. E tivemos as duas casas reconhecidas pelo governo italiano no programa Ospitalitá Italiana, que certifica pequenas embaixadas culturais da Itália ao redor do mundo. Foi também o aniversário de 80 anos de D. Rina. Entre tantas alegrias, nosso querido Nello saiu de cena, deixando seu exemplo admirável de coragem, talento e paixão pela vida. E, em nós, a saudade eterna que procuramos honrar com nosso trabalho!',
      },
      {
        number: '14',
        title: 'A Personalidade Comendadora!',
        text: 'Em 2014, D. Rina foi condecorada com a comenda da Cruz do Mérito Gastronômico conferida pela Câmara dos Deputados. Justo reconhecimento da paixão pelo que se faz! Em 2015, ganhamos nosso primeiro prêmio internacional em Santiago do Chile: o Latin American Quality Award, no setor de alimentação. E D. Rina foi homenageada com o prêmio de Personalidade Gastronômica de São Paulo pela revista Veja SP. E fez o apanhado em timbre materno e maduro de nossa história: ',
      },
    ];
  }
}
