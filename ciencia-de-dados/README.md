# Ciência de Dados — Datacenter Sustentável

Esta pasta documenta a exploração, limpeza e preparação dos dados utilizados pelo projeto integrador de datacenter.

## Estrutura

```text
ciencia-de-dados/
├── dados/
│   ├── dados_originais.csv
│   └── dados_tratados.csv
├── notebooks/
│   └── limpeza_dados.ipynb
├── sql/
│   └── datacenter_ia_completo.sql
├── requirements.txt
└── README.md
```

## Etapas do tratamento

O notebook registra as seguintes etapas:

1. Importação da base CSV com Pandas.
2. Inspeção de dimensões, colunas, tipos e valores ausentes.
3. Preenchimento de valores nulos numéricos pela média.
4. Preenchimento do status ausente pela moda.
5. Identificação e correção de valores negativos de energia, refrigeração e água.
6. Correção de percentuais fora do intervalo de 0 a 100.
7. Padronização dos nomes dos clusters e turnos.
8. Correção de inconsistências entre eficiência e classificação do status.
9. Remoção das colunas técnicas `arquivo_origem` e `usuario_importacao`.
10. Agrupamento por cluster e turno para análise de consumo.
11. Exportação da base tratada.

## Executar localmente

Crie um ambiente virtual sem enviá-lo ao GitHub:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
jupyter notebook
```

O notebook original foi produzido no Google Colab e utiliza caminhos iniciados por `/content/`. Ao executá-lo localmente, altere o caminho de entrada para:

```python
dados = pd.read_csv("../dados/dados_originais.csv")
```

E o caminho de saída para:

```python
dados.to_csv("../dados/dados_tratados.csv", index=False)
```

## Banco de dados

O arquivo `sql/datacenter_ia_completo.sql` contém a estrutura e os dados utilizados pelo projeto.

> Atenção: o script começa com `DROP DATABASE IF EXISTS datacenter_ia`. Execute somente em um ambiente de desenvolvimento ou em um banco que possa ser recriado. Não execute diretamente em produção sem revisar o conteúdo.

## Boas práticas

- Não envie a pasta `.venv` para o repositório.
- Não inclua senhas, credenciais ou arquivos `.env` nos notebooks.
- Bases futuras muito grandes devem ser armazenadas externamente ou com Git LFS.
- Preserve a base original e gere uma nova versão tratada, sem sobrescrever a origem.
