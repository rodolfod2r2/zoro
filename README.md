# Billing Micro Frontend

Este projeto é um **frontend de faturamento** desenvolvido com **Angular**. Ele utiliza **Angular Federation** para implementar uma arquitetura de micro frontends, permitindo a integração de múltiplos módulos e aplicações dentro de um único front-end. A configuração de **SCSS** para estilos também está inclusa e o projeto usa **esbuild** para otimizar o processo de build.

## Sumário

- [Visão Geral](#visão-geral)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Configuração](#instalação-e-configuração)
- [Ambientes de Desenvolvimento](#ambientes-de-desenvolvimento)
- [Comandos e Scripts](#comandos-e-scripts)
- [Dependências](#dependências)
- [Internacionalização](#internacionalização)
- [Testes](#testes)
  - [Configuração do Karma](#configuração-do-karma)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Visão Geral

Este projeto possui dois módulos principais:

1. **Billing**: O módulo de faturamento, que contém a lógica principal da aplicação.
2. **Billing Host**: O módulo host que integra o `billing` e outros micro frontends utilizando **Angular Federation**.

Esses módulos são otimizados com o `esbuild`, uma ferramenta de bundling extremamente rápida, e são configurados para produção e desenvolvimento, com builds separados e customizados para cada um.

## Estrutura do Projeto

O projeto segue a estrutura de um **monorepo**, com os dois módulos principais localizados dentro do diretório `projects/`. A estrutura básica é a seguinte:

```plaintext
/projects
  /billing
    /src
    /public
  /billing-host
    /src
    /public
```

## Instalação e Configuração

### 1. Clone o Repositório

Primeiro, faça o clone do repositório para a sua máquina local:

```bash
git clone <url-do-repositorio>
cd <diretorio-do-projeto>
```

### 2. Instale as Dependências

O projeto utiliza o `npm` para gerenciamento de pacotes. Execute o seguinte comando para instalar as dependências:

```bash
npm install
```

## Ambientes de Desenvolvimento

O projeto suporta dois ambientes principais:

- **Produção**: Com otimizações completas, incluindo hashing de arquivos, orçamentos de tamanho e minificação.
- **Desenvolvimento**: Focado em uma experiência de desenvolvimento mais rápida, com otimizações desabilitadas para facilitar o debug.

### Esbuild

O **esbuild** é utilizado para o processo de build. Ele é significativamente mais rápido que o Webpack e garante uma construção eficiente tanto para produção quanto para desenvolvimento.

## Comandos e Scripts

O projeto possui vários comandos configurados no `package.json` para facilitar a execução de tarefas comuns. Abaixo estão alguns dos comandos principais:

### Scripts de Desenvolvimento

- **Iniciar o servidor de desenvolvimento do `billing`**:

  ```bash
  npm run start:billing
  ```

  O servidor será iniciado na porta `4301`.

- **Iniciar o servidor de desenvolvimento do `billing-host`**:

  ```bash
  npm run start:billing-host
  ```

  O servidor será iniciado na porta `4300`.

### Scripts de Build

- **Build do `billing` para produção**:

  ```bash
  npm run build:billing
  ```

- **Build do `billing-host` para produção**:

  ```bash
  npm run build:billing-host
  ```

- **Build em modo de desenvolvimento** (com watch):

  ```bash
  npm run watch
  ```

### Scripts de Testes

- **Rodar os testes para o `billing`**:

  ```bash
  npm run test:billing
  ```

- **Rodar os testes para o `billing-host`**:

  ```bash
  npm run test:billing-host
  ```

- **Rodar todos os testes do projeto**:

  ```bash
  npm run test
  ```

## Dependências

### Dependências principais

As principais dependências do projeto incluem:

- **@angular/* (18.2.0)**: Angular framework, incluindo animações, formulários, roteamento, etc.
- **@angular-architects/native-federation**: Usado para configurar a arquitetura de micro frontends com Angular Federation.
- **es-module-shims**: Para garantir a compatibilidade com módulos ES.
- **rxjs**: Biblioteca para programação reativa.
- **zone.js**: Utilizado pelo Angular para gerenciamento de zonas de execução.

### Dependências de Desenvolvimento

As dependências de desenvolvimento incluem ferramentas para build, testes e linting:

- **@angular-devkit/build-angular**: Ferramenta de build do Angular.
- **@angular/cli**: CLI do Angular para facilitar o desenvolvimento.
- **karma**: Framework de testes unitários para Angular.
- **webpack**: Usado para construção e empacotamento do código.

### Exemplo de `package.json`:

```json
{
  "dependencies": {
    "@angular-architects/native-federation": "^18.2.2",
    "@angular/animations": "^18.2.0",
    "@angular/common": "^18.2.0",
    "@angular/compiler": "^18.2.0",
    "@angular/core": "^18.2.0",
    "@angular/forms": "^18.2.0",
    "@angular/platform-browser": "^18.2.0",
    "@angular/platform-browser-dynamic": "^18.2.0",
    "@angular/router": "^18.2.0",
    "es-module-shims": "^1.5.12",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.10"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^18.2.11",
    "@angular/cli": "^18.2.11",
    "@angular/compiler-cli": "^18.2.0",
    "@types/jasmine": "~5.1.0",
    "jasmine-core": "~5.2.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "karma-junit-reporter": "^2.0.1",
    "karma-typescript": "^5.5.4",
    "typescript": "~5.5.2",
    "webpack": "^5.96.1",
    "webpack-cli": "^5.1.4"
  }
}
```

## Internacionalização (i18n)

O projeto é configurado para suportar internacionalização (i18n). Para extrair as strings de tradução, utilize o comando abaixo:

```bash
ng extract-i18n
```

Este comando gera um arquivo de tradução contendo todas as strings de texto para que possam ser traduzidas para outros idiomas.

## Testes

Os testes são configurados usando o **Karma** e o **Jasmine**. O Karma é responsável por rodar os testes unitários no navegador e gerar relatórios de cobertura.

### Configuração do Karma

O arquivo de configuração do Karma (`karma.conf.js`) define como os testes serão executados. Abaixo estão os detalhes principais dessa configuração:

- **Frameworks**: Usamos o **Jasmine** para os testes unitários.
- **Arquivos**: Todos os arquivos `.ts` e `.spec.ts` nos diretórios `billing` e `billing-host` são incluídos para teste.
- **Preprocessadores**: Os arquivos `.ts` são processados pelo `karma-typescript` para compilar o TypeScript antes de serem executados nos testes.
- **Relatórios**: O Karma usa o relatório `progress` para exibir o andamento dos testes no terminal e o relatório `junit` para gerar um arquivo de relatório de teste (`unit-test-report.xml`) no diretório `coverage`.
- **Navegador**: O **Chrome** é usado para rodar os testes.
- **Execução única**: A configuração `singleRun: true` faz com que os testes sejam executados uma vez e o processo seja finalizado automaticamente.

Exemplo de configuração do Karma:

```javascript
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'projects/billing/src/**/*.ts',
      'projects/billing/src/**/*.spec.ts',
      'projects/billing-host/src/**/*.ts',
      'projects/billing-host/src/**/*.spec.ts',
    ],
    preprocessors: {
      '**/*.ts': ['karma-typescript'],
    },
    reporters: ['progress', 'junit'],
    junitReporter: {
      outputDir: 'coverage',
      outputFile: 'unit-test-report.xml',
      useBrowserName: false
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch:

 true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  });
}
```

Você pode rodar todos os testes com o seguinte comando:

```bash
npm run test
```

### Rodando Testes de Forma Personalizada

Se você deseja executar os testes de forma personalizada, como rodar os testes de um módulo específico, use os comandos abaixo:

- Testes do módulo `billing`:

  ```bash
  npm run test:billing
  ```

- Testes do módulo `billing-host`:

  ```bash
  npm run test:billing-host
  ```
