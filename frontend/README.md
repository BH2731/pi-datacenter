# Nexus Datacenter Dashboard

Frontend React para monitoramento do Projeto Integrador de Datacenter. Inclui login, visão geral, infraestrutura, alertas, energia e ambiente, relatórios e configurações.

## Executar localmente

```bash
npm install
npm run dev
```

O modo demonstração vem ativado e aceita o usuário e a senha já preenchidos na tela de login.

## Conectar ao backend na EC2

1. Copie `.env.example` para `.env`.
2. Configure:

```env
VITE_API_URL=http://IP-PUBLICO-DA-EC2:8080/api
VITE_USE_MOCK=false
```

3. Reinicie o frontend.

> Em produção, use HTTPS. O backend precisa liberar CORS para o domínio onde o frontend for publicado.

## Contrato esperado da API

| Método | Endpoint | Uso |
|---|---|---|
| `POST` | `/auth/login` | Autenticação; retorna `{ token, user }` |
| `GET` | `/dashboard` | Resumo, histórico, racks e alertas |
| `GET` | `/servers` | Lista de servidores e métricas |
| `GET` | `/alerts` | Lista de alertas |
| `PATCH` | `/alerts/:id/acknowledge` | Reconhece um alerta |
| `GET` | `/energy` | Indicadores de energia e ambiente |

Os exemplos completos dos objetos estão em `src/data/mockData.js`. Caso o backend use nomes de campos diferentes, ajuste apenas `src/services/api.js` ou adicione um adaptador nessa camada.

## Publicação

Gere os arquivos estáticos com:

```bash
npm run build
```

A pasta `dist` pode ser publicada no Amazon S3 + CloudFront. Configure o fallback de rotas para `index.html` por ser uma SPA React.
