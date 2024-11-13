# Billing Micro Frontend

Este projeto é um **frontend de faturamento** desenvolvido com **Angular** e utiliza **Angular Federation** para implementar uma arquitetura de **micro frontends**. Isso permite a integração de múltiplos módulos e aplicações dentro de um único front-end. A configuração de **SCSS** para estilos também está inclusa e o projeto utiliza **esbuild** para otimizar o processo de build.

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

Este projeto é composto por dois módulos principais:

1. **Billing**: O módulo de faturamento, que contém a lógica principal da aplicação.
2. **Billing Host**: O módulo host que integra o `billing` e outros micro frontends utilizando **Angular Federation**.

Esses módulos são otimizados com o **esbuild**, uma ferramenta de bundling extremamente rápida, garantindo uma construção eficiente tanto para ambientes de produção quanto de desenvolvimento.

## Estrutura do Projeto

O projeto segue a estrutura de um **monorepo**, com os dois módulos principais localizados dentro do diretório `projects/`. A estrutura básica é a seguinte:

```plaintext
projects/                                           # Diretório raiz dos projetos
├── billing/                                        # Aplicativo Angular de Faturamento (ou biblioteca)
│   ├── src/
│   │   ├── app/                                    # Diretório principal do aplicativo de Billing
│   │   │   ├── components/                         # Componentes reutilizáveis (Angular components)
│   │   │   ├── directives/                         # Diretivas personalizadas
│   │   │   ├── pipes/                              # Pipes personalizados
│   │   │   ├── services/                           # Serviços e lógica de negócio
│   │   │   ├── models/                             # Modelos ou interfaces TypeScript
│   │   │   ├── pages/                              # Componentes principais de páginas
│   │   │   ├── app.component.html                  # Template HTML do componente raiz
│   │   │   ├── app.component.scss                  # Estilos do componente raiz
│   │   │   ├── app.component.ts                    # Lógica do componente raiz
│   │   │   ├── app.config.ts                       # Configurações globais do app (ex: rotas, tokens)
│   │   │   └── app.routes.ts                       # Definições de rotas principais
│   │   ├── environments/                           # Configurações específicas de ambiente (ex: dev, prod)
│   │   │   ├── environment.ts                      # Configuração para o ambiente de desenvolvimento
│   │   │   ├── environment.prod.ts                 # Configuração para o ambiente de produção
│   │   ├── bootstrap.ts                            # Arquivo de inicialização do aplicativo
│   │   ├── index.html                              # Arquivo HTML principal (página de entrada)
│   │   ├── main.ts                                 # Ponto de entrada para a inicialização do app
│   │   ├── styles.scss                             # Arquivo principal de estilos (SASS ou CSS)
│   │   ├── federation.config.js                    # Configuração do Webpack Federation (se estiver usando MFE)
│   │   ├── tsconfig.app.json                       # Configuração do TypeScript para o aplicativo
│   │   ├── tsconfig.federation.json                # Configuração do TypeScript para a federação de módulos
│   │   └── tsconfig.spec.json                      # Configuração do TypeScript para os testes
├── billing-host/                                   # Aplicativo Angular principal (host do micro frontend)
│   ├── src/
│   │   ├── app/                                    # Diretório principal do aplicativo host
│   │   │   ├── components/                         # Componentes reutilizáveis (Angular components)
│   │   │   ├── directives/                         # Diretivas personalizadas
│   │   │   ├── pipes/                              # Pipes personalizados
│   │   │   ├── services/                           # Serviços e lógica de negócio
│   │   │   ├── models/                             # Modelos ou interfaces TypeScript
│   │   │   ├── pages/                              # Componentes principais de páginas
│   │   │   ├── app.component.html                  # Template HTML do componente raiz
│   │   │   ├── app.component.scss                  # Estilos do componente raiz
│   │   │   ├── app.component.ts                    # Lógica do componente raiz
│   │   │   ├── app.config.ts                       # Configurações globais do app
│   │   │   └── app.routes.ts                       # Definições de rotas principais
│   │   ├── environments/                           # Configurações específicas de ambiente (ex: dev, prod)
│   │   │   ├── environment.ts                      # Configuração para o ambiente de desenvolvimento
│   │   │   ├── environment.prod.ts                 # Configuração para o ambiente de produção
│   │   ├── bootstrap.ts                            # Arquivo de inicialização do aplicativo
│   │   ├── index.html                              # Arquivo HTML principal (página de entrada)
│   │   ├── main.ts                                 # Ponto de entrada para a inicialização do app
│   │   ├── styles.scss                             # Arquivo principal de estilos (SASS ou CSS)
│   │   ├── federation.config.js                    # Configuração do Webpack Federation (se estiver usando MFE)
│   │   ├── tsconfig.app.json                       # Configuração do TypeScript para o aplicativo
│   │   ├── tsconfig.federation.json                # Configuração do TypeScript para a federação de módulos
│   │   └── tsconfig.spec.json                      # Configuração do TypeScript para os testes
```

## Instalação e Configuração

### 1. Clone o Repositório

Clone o repositório para a sua máquina local:

```bash
git clone <url-do-repositorio>
cd <diretorio-do-projeto>
```

### 2. Instale as Dependências

Instale as dependências do projeto usando o npm:

```bash
npm install
```

## Ambientes de Desenvolvimento

O projeto suporta dois ambientes principais:

- **Produção**: Com otimizações completas, incluindo hashing de arquivos, orçamentos de tamanho e minificação.
- **Desenvolvimento**: Focado em uma experiência de desenvolvimento mais rápida, com otimizações desabilitadas para facilitar o debug.

### Esbuild

O **esbuild** é utilizado para o processo de build, sendo significativamente mais rápido que o Webpack, garantindo uma construção eficiente tanto para produção quanto para desenvolvimento.

## Comandos e Scripts

O projeto possui vários scripts configurados no `package.json` para facilitar a execução de tarefas comuns. Abaixo estão os comandos principais:

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

- **@angular/* (18.2.0)**: Angular framework, incluindo animações, formulários, roteamento, etc.
- **@angular-architects/native-federation**: Usado para configurar a arquitetura de micro frontends com Angular Federation.
- **es-module-shims**: Para garantir a compatibilidade com módulos ES.
- **rxjs**: Biblioteca para programação reativa.
- **zone.js**: Utilizado pelo Angular para gerenciamento de zonas de execução.

### Dependências de Desenvolvimento

As dependências de desenvolvimento incluem ferramentas para build, testes e linting:

- **@angular-devkit/build-angular**: Ferramenta de build do Angular.
- **

@angular/cli**: CLI do Angular para facilitar o desenvolvimento.
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

O projeto é configurado para suportar internacionalização (i18n). Para extrair as strings de tradução, use o seguinte comando:

```bash
ng extract-i18n
```

Esse comando gera um arquivo de tradução contendo todas as strings de texto que podem ser traduzidas para outros idiomas.

## Testes

Os testes são configurados usando o **Karma** e o **Jasmine**. O Karma é responsável por rodar os testes unitários no navegador e gerar relatórios de cobertura.

### Configuração do Karma

A configuração do Karma (`karma.conf.js`) define como os testes serão executados. Abaixo estão os detalhes principais dessa configuração:

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
    autoWatch: true,
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

## Principais Comandos `ng` do Angular CLI

Aqui estão alguns dos principais comandos que você pode usar durante o desenvolvimento de uma aplicação Angular:

### Criar um novo projeto Angular:
```bash
ng new nome-do-projeto
```

### Servir o projeto localmente:
```bash
ng serve
```
Inicia o servidor de desenvolvimento e observa as mudanças no código, recarregando automaticamente.

### Criar um novo componente:
```bash
ng generate component nome-do-componente
```
ou
```bash
ng g c nome-do-componente
```

### Criar um novo serviço:
```bash
ng generate service nome-do-serviço
```
ou
```bash
ng g s nome-do-serviço
```

### Criar um novo módulo:
```bash
ng generate module nome-do-módulo
```
ou
```bash
ng g m nome-do-módulo
```

### Rodar os testes unitários:
```bash
ng test
```
Executa os testes utilizando o **Karma**.

### Rodar os testes end-to-end (E2E):
```bash
ng e2e
```
Executa os testes **E2E** com o **Protractor**.

### Build para produção:
```bash
ng build --prod
```
Realiza a compilação otimizada para produção.

### Gerar um novo Pipe:
```bash
ng generate pipe nome-do-pipe
```
ou
```bash
ng g p nome-do-pipe
```

### Gerar uma nova Diretiva:
```bash
ng generate directive nome-da-diretiva
```
ou
```bash
ng g d nome-da-diretiva
```

### Atualizar as dependências do Angular:
```bash
ng update
```

### Verificar as dependências e versões do Angular:
```bash
ng version
```

## Principais Tecnologias Usadas

- **Angular**: Framework front-end para construção da aplicação.
- **Webpack Module Federation**: Para integrar micro frontends de maneira eficiente.
- **TypeScript**: Linguagem para desenvolvimento do código.
- **SASS/SCSS**: Para a estilização dos componentes.
- **Karma/Jasmine**: Para os testes unitários.
