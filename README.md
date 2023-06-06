# <p align="center">Spacetime - Cápusa do Tempo</p>

<p align="justify">O NLW Spacetime - Cápsula do Tempo é um projeto desenvolvido durante a NLW Spacetime da Rocketseat, utilizou-se NodeJS com Fastify e React com NextJS.</p>

### <p align="center">Web</p>
https://github.com/Matheussandi/spacetime/assets/29473781/ad9009d7-2d30-47cb-a6d2-61917f244d23

### <p align="center">Mobile</p>
https://github.com/Matheussandi/spacetime/assets/29473781/595e90fa-478c-48cf-8620-eaebec3421e7

# :pushpin: Recursos

- [x] Autenticação com Github;
- [x] Visualização da cápsula;
- [x] Adicionar nova memória;
- [x] Validação de token;
- [x] Responsividade.
 
# 👨‍💻 Tecnologias

- [Axios](https://axios-http.com/docs/intro)
- [DayJS](https://day.js.org/)
- [Expo](https://expo.dev/)
- [Fastify](https://www.fastify.io/)
- [Js-cookie](https://github.com/js-cookie/js-cookie)
- [JWT Decode](https://jwt.io/)
- [NativeWind](https://www.nativewind.dev/)
- [NextJS](https://nextjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Prisma](https://www.prisma.io/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/)


# :warning: Requisitos
- [Git](https://git-scm.com/)
- [Npm](https://www.npmjs.com/)
- [Node](https://nodejs.org/)
- [Expo](https://docs.expo.dev/)
- [Expo Go](https://expo.dev/client)

# :wrench: Configuração
- [Github](https://github.com/)

# ▶️ Executando o projeto

### Clone o repositório
```bash
https://github.com/Matheussandi/spacetime.git
```
### Entre na pasta  do projeto
```bash
cd spacetime
```
## :file_folder: Server

### Entre na pasta server
```bash
cd server
```

### Instale as dependências
```bash
npm install
```

### Informe as variáveis de ambiente
```bash
cp .env.example .env
```
```bash
# Github (Web)
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# Github (Mobile)
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

### Execute o prisma para criar as tabelas
```bash
npx prisma migrate dev
```

### Inicie a aplicação server
```bash
npm run dev
```
_______________________________________________________
## 	:desktop_computer:	Web

### Entre na pasta web
```bash
cd web
```
### Instale a dependências
```bash
npm install
```
### Informe as variáveis de ambiente
```bash
cp .env.example .env
```
```bash
NEXT_PUBLIC_GITHUB_CLIENT_ID=
```
### Inicie a aplicação web
```bash
npm run dev
```
> :warning: Se não abrir automaticamente uma página no navegador, acesse http://localhost:3000 para visualizar a aplicação web.

_______________________________________________________

## 	:iphone: Mobile

### Entre na pasta mobile
```bash
cd mobile
```
### Instale a dependências
```bash
npm install
```
### Inicie a aplicação mobile
```bash
npx expo start
```

# 📄 Licença

Esse projeto está sob a licença MIT.