# Backend — API do Datacenter

API Java com Spring Boot para consulta das medições e indicadores do projeto integrador.

## Requisitos

- Java 21
- MySQL

## Configuração

O projeto lê as credenciais do banco por variáveis de ambiente:

| Variável | Descrição |
|---|---|
| `DB_URL` | URL JDBC do banco MySQL |
| `DB_USERNAME` | Usuário do banco |
| `DB_PASSWORD` | Senha do banco |
| `JPA_SHOW_SQL` | Exibe SQL no console (`false` por padrão) |

Use `.env.example` apenas como referência. Nunca envie senhas reais ao GitHub.

## Executar

No Windows:

```powershell
$env:DB_URL="jdbc:mysql://localhost:3306/datacenter_ia"
$env:DB_USERNAME="root"
$env:DB_PASSWORD="sua_senha"
.\mvnw.cmd spring-boot:run
```

## Gerar o pacote

```powershell
.\mvnw.cmd clean package
```

O arquivo `.jar` será criado em `target/`. Essa pasta não deve ser enviada ao GitHub.
