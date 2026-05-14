# Template Cliente

## O que foi criado

- `crm-library-api.js`
  Faixada publica para expor o CRM atual como Apps Script Library.
- `template-cliente.js`
  Script minimo para colar em cada planilha cliente.
  Esta versao ja usa o bootstrap novo por slots.
  Ela tambem expõe o wrapper do gatilho diario das 04h.

## Como usar

1. Publique o projeto principal como uma Apps Script Library.
2. Na planilha cliente, abra `Extensoes > Apps Script`.
3. Adicione a library publicada.
4. Use o identificador `CRMCore`.
5. Cole o conteudo de `template-cliente.js` no projeto da planilha cliente.
6. Esse template ja inclui `30` slots fixos (`crmAcao01` ate `crmAcao30`) para futuras automacoes.
7. Execute `configurarEstruturaInicial` uma vez para montar a estrutura inicial.
8. Reabra a planilha para carregar o menu `Automacoes CRM`.

## O que o cliente ve

- O cliente usa a planilha normalmente.
- O codigo principal fica na library.
- No projeto da planilha cliente fica so o script de entrada.
- Os itens do menu passam a chamar slots fixos, entao futuras expansoes podem ser ligadas nesses slots sem recolar o template no cliente, ate o limite de 30 slots.
- O bootstrap legado do menu continua existindo na library para nao quebrar planilhas antigas que ainda estejam com o template anterior.

## Observacao importante sobre permissoes

Apps Script Library esconde o codigo principal, mas nao substitui permissoes de acesso.

Com a arquitetura atual, cada cliente provavelmente vai precisar autorizar:
- Gmail, para enviar os emails pela propria conta.
- Acesso as planilhas externas usadas nas integracoes.

Hoje isso afeta especialmente a planilha externa:
- ID: `1vKwoZ4XZIjH_Gmp1bIQdSPwnzwiClbVyJFtNTKCL1lI`
- Abas: `LISTA INFLUENCERS` e `Influencers Contatados`

Se voce quiser evitar compartilhar essa planilha externa com os clientes, ai o proximo passo deixa de ser library e passa a ser um backend real (por exemplo, web app ou execucao centralizada).

## Sobre o nome do recrutador

No codigo atual, `Nome do recrutador` nao e lixo.
Ele e usado nos emails enviados aos influencers.

Hoje o comportamento e:
- se estiver vazio, ele herda o nome do atendente;
- se voce quiser, depois eu posso simplificar isso e deixar apenas um nome unico na configuracao.
