class Veiculo {
  constructor(modelo, cor) {
      this.modelo = modelo;
      this.cor = cor;
      this.combustivel = 100; // Adicionado combustível inicial
  }

  pintar(novaCor) {
      this.cor = novaCor;
  }

  exibirInformacoes() {
      return `Modelo: ${this.modelo}, Cor: ${this.cor}`;
  }
}

class Carro extends Veiculo {
  constructor(modelo, cor) {
      super(modelo, cor);
      this.ligado = false;
      this.velocidade = 0;
  }

  ligar() {
      if (this.combustivel > 0) {
          this.ligado = true;
          this.atualizarStatus();
          console.log("Carro ligado!");
      } else {
          console.log("Sem combustível! Abasteça o carro.");
      }
  }

  desligar() {
      this.ligado = false;
      this.velocidade = 0;
      this.atualizarStatus();
      this.atualizarVelocidade();
      console.log("Carro desligado.");
  }

  acelerar() {
      if (this.ligado && this.combustivel > 0) {
          this.velocidade += 10;
          this.combustivel -= 5; // Consome combustível ao acelerar
          this.atualizarVelocidade();
          console.log("Acelerando! Combustível restante: " + this.combustivel);
          if (this.combustivel <= 0) {
              this.desligar();
              console.log("Sem combustível! O carro desligou.");
          }
      } else if (!this.ligado) {
          console.log("Ligue o carro primeiro!");
      } else {
          console.log("Sem combustível! Abasteça o carro.");
      }
  }

  frear() {
      if (this.ligado && this.velocidade > 0) {
          this.velocidade -= 10;
          this.atualizarVelocidade();
      }
  }

  atualizarStatus() {
      const statusElement = document.getElementById('carro-status');
      if (statusElement) {
          statusElement.textContent = this.ligado ? 'Ligado' : 'Desligado';
          const botaoLigarDesligar = document.getElementById('ligar-desligar-btn');
          if (botaoLigarDesligar) {
              botaoLigarDesligar.textContent = this.ligado ? 'Desligar' : 'Ligar';
          }
      }
  }

  atualizarVelocidade() {
      const velocidadeElement = document.getElementById('velocidade-valor');
      if (velocidadeElement) {
          velocidadeElement.textContent = this.velocidade;
      }
  }

  exibirDetalhes() {
      const modeloElement = document.getElementById('modelo');
      const corElement = document.getElementById('cor');

      if(modeloElement) modeloElement.textContent = this.modelo;
      if(corElement) corElement.textContent = this.cor;
  }

  exibirInformacoes() {
      return `${super.exibirInformacoes()}, Ligado: ${this.ligado ? 'Sim' : 'Não'}, Velocidade: ${this.velocidade} km/h, Combustível: ${this.combustivel}`;
  }
}

class CarroEsportivo extends Carro {
  constructor(modelo, cor) {
      super(modelo, cor);
      this.turboAtivado = false;
  }

  ativarTurbo() {
      if (this.ligado && this.combustivel > 0) {
          this.turboAtivado = true;
          this.acelerar();
          console.log('Turbo ativado!');
      } else {
          console.log('Ligue o carro primeiro ou abasteça!');
      }
  }

  desativarTurbo() {
      this.turboAtivado = false;
      console.log('Turbo desativado!');
  }

  acelerar() {
      if (this.ligado && this.combustivel > 0) {
          const aumento = this.turboAtivado ? 50 : 10;
          this.velocidade += aumento;
          this.combustivel -= this.turboAtivado ? 15 : 10; // Consome mais combustível com turbo
          this.atualizarVelocidade();
          console.log(`Acelerando (Turbo: ${this.turboAtivado})! Combustível restante: ${this.combustivel}`);
          if (this.combustivel <= 0) {
              this.desligar();
              console.log("Sem combustível! O carro desligou.");
          }
      } else if (!this.ligado) {
          console.log("Ligue o carro primeiro!");
      } else {
          console.log("Sem combustível! Abasteça o carro.");
      }
  }

  exibirInformacoes() {
      return `${super.exibirInformacoes()}, Turbo: ${this.turboAtivado ? 'Ativado' : 'Desativado'}`;
  }
}

class Caminhao extends Carro {
  constructor(modelo, cor, capacidadeCarga) {
      super(modelo, cor);
      this.capacidadeCarga = capacidadeCarga;
      this.cargaAtual = 0;
  }

  carregar(peso) {
      if (this.cargaAtual + peso <= this.capacidadeCarga) {
          this.cargaAtual += peso;
          console.log(`Caminhão carregado. Carga atual: ${this.cargaAtual}`);
      } else {
          console.log('Carga excede a capacidade!');
      }
  }

  descarregar(peso) {
      if (peso <= this.cargaAtual) {
          this.cargaAtual -= peso;
          console.log(`Caminhão descarregado. Carga atual: ${this.cargaAtual}`);
      } else {
          console.log('Peso de descarga excede a carga atual!');
      }
  }

  exibirInformacoes() {
      return `${super.exibirInformacoes()}, Carga: ${this.cargaAtual}/${this.capacidadeCarga}`;
  }
}

class Moto extends Veiculo {
  constructor(modelo, cor) {
      super(modelo, cor);
      this.ligada = false;
  }

  ligar() {
      if (this.combustivel > 0) {
          this.ligada = true;
          console.log("Moto ligada!");
      } else {
          console.log("Sem combustível! Abasteça a moto.");
      }
  }

  desligar() {
      this.ligada = false;
      console.log("Moto desligada.");
  }

  acelerar() {
      if (this.ligada && this.combustivel > 0) {
          this.combustivel -= 2; // Consome combustível ao acelerar
          console.log("Acelerando a moto! Combustível restante: " + this.combustivel);
          if (this.combustivel <= 0) {
              this.desligar();
              console.log("Sem combustível! A moto desligou.");
          }
      } else if (!this.ligada) {
          console.log("Ligue a moto primeiro!");
      } else {
          console.log("Sem combustível! Abasteça a moto.");
      }
  }

  exibirInformacoes() {
      return `${super.exibirInformacoes()}, Ligada: ${this.ligada ? 'Sim' : 'Não'}, Combustível: ${this.combustivel}`;
  }
}

class Bicicleta extends Veiculo {
  constructor(modelo, cor) {
      super(modelo, cor);
  }

  pedalar() {
      console.log("Pedalando a bicicleta!");
  }
}

class Garagem {
  constructor() {
      this.veiculos = {};
      this.veiculos['meuCarro'] = new Carro('MacLaren', 'Amarela');
      this.veiculos['meuCarro'].exibirDetalhes();
      this.veiculos['meuCarro'].atualizarStatus();
      this.veiculos['meuCarro'].atualizarVelocidade();
      this.carroEsportivo = null;
      this.caminhao = null;
      this.moto = null;
      this.bicicleta = null;
  }

  adicionarVeiculo(nome, veiculo) {
      this.veiculos[nome] = veiculo;
  }

  interagirComVeiculo(nomeVeiculo, acao) {
      const veiculo = this.veiculos[nomeVeiculo];

      if (!veiculo) {
          console.log("Veículo não encontrado.");
          return;
      }

      switch (acao) {
          case 'ligar':
              if (veiculo.ligar) veiculo.ligar();
              break;
          case 'desligar':
              if (veiculo.desligar) veiculo.desligar();
              break;
          case 'acelerar':
              if (veiculo.acelerar) veiculo.acelerar();
              break;
          case 'frear':
              if (veiculo.frear) veiculo.frear();
              break;
          case 'ativarTurbo':
              if (veiculo.ativarTurbo) veiculo.ativarTurbo();
              break;
          case 'desativarTurbo':
              if (veiculo.desativarTurbo) veiculo.desativarTurbo();
              break;
          case 'carregar':
              const pesoCarregar = parseInt(document.getElementById('pesoCarga').value);
              if (veiculo.carregar) veiculo.carregar(pesoCarregar);
              break;
          case 'descarregar':
              const pesoDescarregar = parseInt(document.getElementById('pesoDescarga').value);
              if (veiculo.descarregar) veiculo.descarregar(pesoDescarregar);
              break;
          default:
              console.log("Ação inválida.");
              break;
      }

      this.atualizarInfo(nomeVeiculo);
  }

  pintarVeiculo(nomeVeiculo) {
      const veiculo = this.veiculos[nomeVeiculo];
      if (!veiculo) {
          console.log("Veículo não encontrado.");
          return;
      }
       let corPintura;

      if (nomeVeiculo === 'meuCarro'){
       corPintura = document.getElementById('corPintura').value;
      } else if (nomeVeiculo === 'carroEsportivo'){
          corPintura = document.getElementById('corPinturaEsportivo').value;
      } else if(nomeVeiculo === 'caminhao'){
          corPintura = document.getElementById('corPinturaCaminhao').value;
      } else if(nomeVeiculo === 'moto'){
          corPintura = document.getElementById('corPinturaMoto').value;
      } else if(nomeVeiculo === 'bicicleta'){
          corPintura = document.getElementById('corPinturaBicicleta').value;
      }
      veiculo.pintar(corPintura);
      this.atualizarInfo(nomeVeiculo);
  }
  
  abastecerVeiculo(nomeVeiculo) {
      const veiculo = this.veiculos[nomeVeiculo];
      if (!veiculo) {
          console.log("Veículo não encontrado.");
          return;
      }
      let combustivel;

      if (nomeVeiculo === 'meuCarro'){
       combustivel = parseInt(document.getElementById('combustivel').value);
      } else if (nomeVeiculo === 'carroEsportivo'){
          combustivel = parseInt(document.getElementById('combustivelEsportivo').value);
      } else if(nomeVeiculo === 'caminhao'){
          combustivel = parseInt(document.getElementById('combustivelCaminhao').value);
      }else if(nomeVeiculo === 'moto'){
          combustivel = parseInt(document.getElementById('combustivelMoto').value);
      }
      if (isNaN(combustivel)) {
          console.log("Quantidade de combustível inválida.");
          return;
      }
      veiculo.combustivel = combustivel;
      this.atualizarInfo(nomeVeiculo);
  }

  criarCarroEsportivo() {
      const modelo = document.getElementById('modeloEsportivo').value;
      const cor = document.getElementById('corEsportivo').value;
      this.carroEsportivo = new CarroEsportivo(modelo, cor);
      this.veiculos['carroEsportivo'] = this.carroEsportivo;
      this.atualizarInfo('carroEsportivo');
  }

  criarCaminhao() {
      const modelo = document.getElementById('modeloCaminhao').value;
      const cor = document.getElementById('corCaminhao').value;
      const capacidadeCarga = parseInt(document.getElementById('capacidadeCarga').value);
      this.caminhao = new Caminhao(modelo, cor, capacidadeCarga);
      this.veiculos['caminhao'] = this.caminhao;
      this.atualizarInfo('caminhao');
  }
  
  criarMoto() {
      const modelo = document.getElementById('modeloMoto').value;
      const cor = document.getElementById('corMoto').value;
      this.moto = new Moto(modelo, cor);
      this.veiculos['moto'] = this.moto;
      this.atualizarInfo('moto');
  }

  criarBicicleta() {
      const modelo = document.getElementById('modeloBicicleta').value;
      const cor = document.getElementById('corBicicleta').value;
      this.bicicleta = new Bicicleta(modelo, cor);
      this.veiculos['bicicleta'] = this.bicicleta;
      this.atualizarInfo('bicicleta');
  }

  exibirInformacoes(nomeVeiculo) {
      const veiculo = this.veiculos[nomeVeiculo];
      let informacoes = "";

      if (veiculo) {
          informacoes = veiculo.exibirInformacoes();
      } else {
          informacoes = "Veículo não criado ou inexistente.";
      }

      document.getElementById('informacoesVeiculo').textContent = informacoes;
  }

  atualizarInfo(nomeVeiculo) {
      let infoElement;
      let veiculo;

      if (nomeVeiculo === 'carroEsportivo') {
          infoElement = document.getElementById('infoEsportivo');
          veiculo = this.carroEsportivo;
      } else if (nomeVeiculo === 'caminhao') {
          infoElement = document.getElementById('infoCaminhao');
          veiculo = this.caminhao;
      } else if (nomeVeiculo === 'moto') {
          infoElement = document.getElementById('infoMoto');
          veiculo = this.moto;
      } else if (nomeVeiculo === 'bicicleta') {
          infoElement = document.getElementById('infoBicicleta');
          veiculo = this.bicicleta;
      } else if (nomeVeiculo === 'meuCarro') {
          document.getElementById('modelo').textContent = this.veiculos['meuCarro'].modelo;
          document.getElementById('cor').textContent = this.veiculos['meuCarro'].cor;
          this.veiculos['meuCarro'].atualizarStatus();
          this.veiculos['meuCarro'].atualizarVelocidade();
          return; // Não precisa atualizar o textContent do elemento info
      }

      if (veiculo && infoElement) {
          infoElement.textContent = veiculo.exibirInformacoes();
      }
  }
}

const garagem = new Garagem();