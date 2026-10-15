# Site novo — Quantum Soluções Digitais

Arquitetura de conteúdo do novo site.
Fonte factual: `briefing-quantum.md`.
Tipo de projeto: **site novo sem fonte existente** (não há `site.md` nem `conteudo-base.md`; não há site atual, URLs antigas ou conteúdo publicado a migrar).

Este documento não é código nem Design System. Define páginas, navegação, ordem das seções, origem do conteúdo, CTAs e lacunas.

**Legenda**

- [USAR] conteúdo do briefing que pode ser usado praticamente como está.
- [ADAPTAR] conteúdo do briefing que precisa de edição, redução ou nova apresentação (inclui as "direções" de título, que ainda não são copy final).
- [CONTEÚDO NOVO NECESSÁRIO] conteúdo necessário que não existe no briefing.
- [INFORMAÇÃO A DEFINIR] informação ausente, ambígua ou que depende do cliente.
- [PROPOSTA DE ORGANIZAÇÃO] decisão estrutural desta etapa, sem alterar fatos.

---

## Estado atual e ordem de construção

**A Home (`/`) já está publicada** e é a referência estrutural existente. Esta arquitetura não a reestrutura: ajusta apenas nomenclaturas e links futuros para a estrutura por nicho definida no `briefing-quantum.md` (Soluções para Hospedagem, Soluções para Saúde e Soluções sob Medida).

As páginas internas ainda não existem (hoje só há a Home, `robots.txt` e `sitemap.xml`). **Não construir nenhuma página interna automaticamente, nem todas de uma vez.**

**Páginas internas, uma por vez, nesta ordem:**

```
1. Soluções para Hospedagem
2. revisão visual
3. correções
4. aprovação

Somente depois:
5. Soluções para Saúde
6. revisão
7. aprovação

Depois:
8. Soluções sob Medida
9. revisão
10. aprovação
```

Páginas operacionais e de portfólio (`/contato`, `/politica-de-privacidade`, `/portfolio`, `/portfolio/[slug]`) não têm ordem definida nesta etapa. [INFORMAÇÃO A DEFINIR]

Observações:

- Onde este documento fala em "Fase 1", refere-se ao escopo da arquitetura do lançamento.
- A Home contém links para páginas internas (`/contato` e páginas de solução). Enquanto essas páginas não existirem, o destino provisório desses links precisa ser definido. [INFORMAÇÃO A DEFINIR]

### Rotas antigas e redirecionamento (somente documentação)

Os links da Home publicada (no código de navegação e de conteúdo da Home) ainda apontam para as rotas antigas, que nunca tiveram página construída. Para não deixar links quebrados quando as novas rotas entrarem:

- Atualizar esses links para as novas rotas quando a página correspondente for construída. [PROPOSTA DE ORGANIZAÇÃO]
- Caso as rotas antigas tenham sido indexadas, compartilhadas ou acessadas por usuários, prever redirecionamento permanente:

```
/sites-para-hospedagem → /solucoes-para-hospedagem
/sites-para-saude      → /solucoes-para-saude
```

- `/padronizacao-digital` não tem rota de destino definida, porque a decisão sobre o tema está em aberto (ver "Padronização digital — decisão em aberto").

Nenhum redirecionamento deve ser implementado agora. [INFORMAÇÃO A DEFINIR] confirmar se as rotas antigas chegaram a ser indexadas ou compartilhadas.

---

## Mapa do novo site

```
/                                   Home (página principal, arquitetura aprovada no briefing)
│   ├── #impacto
│   ├── #manifesto
│   ├── #solucoes        (3 caminhos de atuação)
│   ├── #especializacao  (hospedagem + saúde)
│   ├── #sob-medida
│   ├── #portfolio
│   ├── #processo        (Da necessidade à solução)
│   ├── #por-que-quantum
│   ├── #sobre
│   └── #contato         (CTA final)
│
├── /solucoes-para-hospedagem       Soluções para Hospedagem           [template Solução]
├── /solucoes-para-saude            Soluções para Saúde                [template Solução]
├── /solucoes-sob-medida            Soluções sob Medida                [template Solução]
│
├── /contato                        WhatsApp + formulário + e-mail
│
├── /politica-de-privacidade        condicional — necessária se o formulário coletar dados [INFORMAÇÃO A DEFINIR]
└── /404                            página de erro (operacional)

FASE 2 (não construir agora — ativar quando houver projetos definidos)
├── /portfolio                      listagem de cases
│   └── /portfolio/[slug-do-case]   [template Case]
```

**Páginas que NÃO entram** [PROPOSTA DE ORGANIZAÇÃO]

| Página | Motivo |
|---|---|
| Sobre (página própria) | Conteúdo institucional final ainda não existe; fundadores não são foco. Vive como seção da Home. |
| Processo (página própria) | Seis etapas cabem em uma seção; página separada duplicaria a Home. |
| Hub `/sites-especializados` | Repetiria o que a Home já apresenta; os nichos têm páginas próprias. |
| Padronização digital (página própria) | Removida do mapa principal enquanto a decisão estiver em aberto no briefing. Ver "Padronização digital — decisão em aberto". |
| `/sites-para-hospedagem`, `/sites-para-saude`, `/padronizacao-digital` | Rotas antigas, removidas da arquitetura futura. Ver "Rotas antigas e redirecionamento". |
| Blog | Não previsto no briefing. |
| FAQ | Não há perguntas/respostas no briefing. |
| Depoimentos | Não há depoimentos no briefing. |
| Edição de vídeo como serviço | Não faz parte da oferta como serviço avulso (briefing §7). Não vira item de menu, página própria nem serviço geral. Exceção: bônus de Hospedagem. Ver "Edição de vídeo — regra". |
| Branding | Fora do escopo da oferta (briefing §6). Não deve aparecer em nenhuma página. |

---

## Decisões estruturais

1. **Não há migração.** Sem site atual: nenhuma URL a preservar, nenhum redirecionamento, nenhuma duplicação herdada.
2. **A Home é a peça central e segue a ordem aprovada no briefing (§13)**, com 11 seções. A ordem não é alterada; só são definidos objetivos, origem e marcações.
3. **Páginas internas organizadas por nicho:** Soluções para Hospedagem, Soluções para Saúde e Soluções sob Medida. Têm função real de SEO (buscas por segmento) e de conversão (visitante chega pelo problema dele). A estrutura anterior de três pilares separados está superada. [PROPOSTA DE ORGANIZAÇÃO]
   - Hospedagem e Saúde são os dois nichos prioritários e seguem a mesma estrutura de três caminhos: Sites Especializados, Posicionamento Digital Estratégico e Soluções Digitais Personalizadas.
   - Soluções sob Medida atende negócios e profissionais que não são de Hospedagem nem de Saúde.
   - As três páginas compartilham um **template comum** ("Página de solução"), com ajustes por página.
   - Padronização digital não tem página própria (decisão em aberto).
4. **Portfólio na Home desde o lançamento, mas sem página própria na Fase 1.** Os projetos ainda estão indefinidos; uma listagem vazia ou genérica não tem função. `/portfolio` e `/portfolio/[slug]` entram quando houver cases reais. [PROPOSTA DE ORGANIZAÇÃO]
5. **Página `/contato` dedicada**, porque o CTA principal se repete em todas as páginas e precisa de um destino único com os três canais (WhatsApp, formulário, e-mail).
6. **Conteúdo que se repete vive em um só lugar** [PROPOSTA DE ORGANIZAÇÃO]:
   - Processo completo (6 etapas): só na Home `#processo`. Nas páginas internas: menção curta + link.
   - Exemplos de soluções sob medida: lista completa em `/solucoes-sob-medida`. Na Home: seleção curta. Nas páginas de nicho: só os exemplos daquele nicho, dentro do caminho "Soluções Digitais Personalizadas".
   - "Por que Quantum" (3 fundamentos): só na Home.
7. **Lógica de comunicação em todas as páginas:** problema → impacto → solução → resultado (briefing §2 e §13). Nunca serviço → características → entrega.
8. **Lacunas principais:** copy final de toda a Home e das páginas internas, conteúdo de Sobre, cases do portfólio, contatos, redes sociais, dados legais, idioma(s) e domínio. Ver "Pontos a confirmar".

---

## Regras de exceção para a página de Hospedagem

### Edição de vídeo — regra

- Edição de vídeo **não faz parte da oferta da Quantum como serviço avulso**.
- Exceção específica da oferta de Hospedagem: o pacote "Posicionamento Digital Estratégico" pode incluir como bônus **"1 vídeo institucional da acomodação produzido a partir de fotos"**.
- Esse bônus **não** vira: serviço independente, item de menu, página própria ou serviço geral da Quantum.
- Só pode ser citado na página "Soluções para Hospedagem", dentro do pacote de Posicionamento Digital Estratégico (e, se necessário, em materiais da mesma oferta). Não citar em Home, Saúde ou Sob Medida como serviço.

### Autoridade da Roselle Nunes — regra

- A Home institucional e a seção geral "Sobre" **continuam sem foco nos fundadores**.
- Na página "Soluções para Hospedagem" **pode existir uma seção específica de autoridade com Roselle Nunes**, porque sua experiência é diretamente relevante para essa especialização.
- Informações factuais autorizadas: formada em Administração de Empresas pela UFRGS; trabalho de conclusão de curso voltado a hotéis de rede; experiência internacional no Four Seasons Sydney, na Austrália; mais de 10 anos de experiência na gestão de um pequeno hotel.
- **Não inventar** cargos, datas, títulos, certificações ou outras experiências.
- A exceção vale para a página de Hospedagem. Uso em outras páginas: [INFORMAÇÃO A DEFINIR].

---

## Navegação principal

**Marca:** logo Quantum, com o nome oficial **Quantum Soluções Digitais** → link para `/`. [USAR] (arquivo do logo: ver "Ativos")

**Itens do menu** [PROPOSTA DE ORGANIZAÇÃO]

| Item | Destino | Tipo |
|---|---|---|
| Soluções | submenu (abaixo) | menu com 3 páginas |
| Portfólio | `/#portfolio` (Fase 2: `/portfolio`) | âncora |
| Processo | `/#processo` | âncora |
| Sobre | `/#sobre` | âncora |
| **CTA:** Entre em contato | `/contato` | botão |

**Submenu "Soluções"**

- Soluções para Hospedagem → `/solucoes-para-hospedagem`
- Soluções para Saúde → `/solucoes-para-saude`
- Soluções sob Medida → `/solucoes-sob-medida`

Padronização digital não faz parte do menu (decisão em aberto).

**Comportamento**

- Âncoras usam `/#ancora`, para funcionarem também a partir das páginas internas.
- No mobile, menu recolhido com o CTA sempre visível.
- Rótulo do botão no header: versão curta do CTA oficial ("Entre em contato"). O texto completo "Entre em contato com a Quantum" fica nos CTAs de seção. [INFORMAÇÃO A DEFINIR] aprovar a versão curta.
- WhatsApp: opcionalmente como botão flutuante em todas as páginas, quando o número existir. [INFORMAÇÃO A DEFINIR]

**Rodapé (todas as páginas)**

- Logo + nome oficial. [USAR]
- Frase curta de posicionamento. [ADAPTAR] (a partir das direções de mensagem do briefing §2)
- Links: as 3 páginas de solução, Portfólio, Processo, Sobre, Contato.
- Contatos: WhatsApp, e-mail. [INFORMAÇÃO A DEFINIR]
- Redes sociais. [INFORMAÇÃO A DEFINIR]
- Atendimento remoto no Brasil e no exterior. [USAR]
- Dados legais (razão social/CNPJ) e link para a Política de Privacidade. [INFORMAÇÃO A DEFINIR]

---

# HOME

**URL:** `/`
**Estado:** já publicada. Esta seção descreve a arquitetura existente como referência; **não é uma reestruturação nem reescrita de copy**. Foram ajustados apenas nomenclaturas, links futuros e a lógica antiga de três pilares onde conflitava diretamente com o briefing atualizado.
**Função:** apresentar a Quantum pela capacidade de resolver problemas de negócio, criar confiança e levar a uma conversa, sem que o visitante precise saber qual solução quer.
**Público:** donos e gestores de negócios (com destaque para hospedagem e saúde) com um problema que pode ter solução digital.
**Lógica:** problema → impacto → solução → resultado (briefing §13). [USAR]
**CTA principal:** Entre em contato com a Quantum → `/contato`.

## Wireframe

```
[ HEADER ]  logo | Soluções ▾ | Portfólio | Processo | Sobre | [Entre em contato]

[ 1. HERO ]
  Título: "Seu negócio não precisa de mais uma ferramenta. Precisa da solução certa."
  Subtítulo curto (especialização + sofisticação + tecnologia)
  [ Entre em contato com a Quantum ]

[ 2. FAIXA DE IMPACTO ]
  eficiência · autoridade · experiência · oportunidades · organização · presença digital

[ 3. MANIFESTO ]
  "Antes de pensar no site, sistema ou dashboard,
   entendemos o que precisa ser resolvido."

[ 4. CAMINHOS DE ATUAÇÃO ]
  [ Soluções para Hospedagem ] [ Soluções para Saúde ] [ Soluções sob Medida ]
     → links para as páginas

[ 5. ESPECIALIZAÇÃO ]
  [ Hospedagem ]                       [ Saúde ]
  hotéis, pousadas, temporada,         médicos, fisioterapeutas,
  Airbnb  → /solucoes-para-hospedagem  dentistas... → /solucoes-para-saude

[ 6. SOB MEDIDA ]
  "E se o problema não for o site?"
  exemplos (sem catálogo) → /solucoes-sob-medida

[ 7. PORTFÓLIO ]
  "Projetos pensados para negócios reais."
  [ PROJETOS — conteúdo real inserido depois ]

[ 8. DA NECESSIDADE À SOLUÇÃO ]
  1 Diagnóstico → 2 Estratégia → 3 Estrutura e experiência
  → 4 Design → 5 Desenvolvimento → 6 Entrega e evolução

[ 9. POR QUE QUANTUM ]
  [ Especialização ] [ Sofisticação ] [ Tecnologia ]

[ 10. SOBRE A QUANTUM ]
  texto institucional curto (empresa, não fundadores)

[ 11. CTA FINAL ]
  "Existe alguma coisa no seu negócio que poderia funcionar
   melhor com a solução digital certa?"
  [ Entre em contato com a Quantum ]

[ FOOTER ]
```

## Seções, dobra por dobra

### 1. Hero — posicionamento
- **Objetivo:** dizer em segundos o que a Quantum faz e por que é diferente; abrir a conversa.
- **Título (direção):** "Seu negócio não precisa de mais uma ferramenta. Precisa da solução certa." [ADAPTAR] — é direção aprovada, não slogan final.
- **Subtítulo:** uma frase que una especialização, sofisticação e tecnologia. Pode partir de "Soluções digitais especializadas, com design sofisticado e tecnologia sob medida." [ADAPTAR]
- **CTA:** Entre em contato com a Quantum → `/contato`. [USAR]
- **CTA secundário (opcional):** "Conheça as soluções" → `/#solucoes`. [PROPOSTA DE ORGANIZAÇÃO]
- **Origem:** briefing §2, §11, §13.1.
- **Ativo:** nenhum ativo de imagem de conteúdo previsto. O visual da Hero será definido depois.
- **H1 da página:** o título da Hero.

### 2. Faixa de impacto / benefícios
- **Objetivo:** mostrar o tipo de resultado buscado, antes de falar de serviços.
- **Conteúdo:** mais eficiência, mais autoridade, melhor experiência, mais oportunidades, mais organização, melhor presença digital. [USAR]
- **Regra:** sem números, porcentagens ou promessas (briefing §12, §13.2).
- **Complemento:** cada conceito pode ter uma linha curta de apoio. [CONTEÚDO NOVO NECESSÁRIO] (opcional)
- **CTA:** nenhum.
- **Origem:** briefing §13.2.

### 3. Manifesto — não começamos pela ferramenta
- **Objetivo:** fixar o princípio central: a Quantum parte do problema.
- **Título (direção):** "Antes de pensar no site, sistema ou dashboard, entendemos o que precisa ser resolvido." [ADAPTAR]
- **Conteúdo de apoio:** os quatro exemplos de lógica do briefing §8 (hotel → site; profissional de saúde → autoridade; empresa → dashboard; negócio → processo interno em vez de site). [ADAPTAR] — encurtar e apresentar como frases curtas.
- **CTA:** nenhum.
- **Origem:** briefing §2, §8, §13.3.

### 4. Caminhos de atuação
- **Objetivo:** organizar a oferta por nicho, cada caminho levando à sua página.
- **Conteúdo** (briefing §4, §5 e §13.4):
  - **Soluções para Hospedagem** → `/solucoes-para-hospedagem`.
  - **Soluções para Saúde** → `/solucoes-para-saude`.
  - **Soluções sob Medida** (demais negócios e profissionais) → `/solucoes-sob-medida`.
- **Substitui** a organização antiga em três pilares (Sites especializados / Soluções sob medida / Posicionamento e padronização), superada pelo briefing.
- **Copy dos cards:** a copy já publicada não é reescrita aqui. Ajustar rótulos e links na próxima revisão da Home. [INFORMAÇÃO A DEFINIR] como a Home apresenta essa estrutura (briefing §13.4).
- **CTA:** links "Saiba mais" para as páginas.
- **Âncora:** `#solucoes`.

### 5. Especialização
- **Objetivo:** provar que a Quantum entende o contexto de cada segmento; não são sites genéricos.
- **Conteúdo:**
  - **Hospedagem:** pequenos hotéis, pousadas, imóveis de temporada, Airbnb. [USAR]
  - **Saúde:** médicos, fisioterapeutas, dentistas, outros profissionais da saúde. [USAR]
- **Texto:** para cada segmento, um problema típico e o impacto buscado. [CONTEÚDO NOVO NECESSÁRIO] — sem inventar dados do mercado.
- **CTA:** → `/solucoes-para-hospedagem` e → `/solucoes-para-saude`.
- **Âncora:** `#especializacao`.
- **Nota:** seções 4 e 5 se sobrepõem nos nichos. Seção 4 só nomeia os caminhos; seção 5 aprofunda os dois nichos. [PROPOSTA DE ORGANIZAÇÃO]

### 6. Soluções sob medida
- **Objetivo:** mostrar que o problema pode não ser o site e ampliar a percepção da oferta.
- **Título (direção):** "E se o problema não for o site?" [ADAPTAR]
- **Conteúdo:** seleção de 4–6 exemplos do briefing §5 (cardápios digitais, controles internos, sistemas simples de gestão, acompanhamento de pacientes, controle de reabilitação, dashboards financeiros, áreas administrativas, formulários e fluxos personalizados). [USAR]
- **Regra:** deixar explícito que são exemplos, não catálogo fechado. [USAR]
- **CTA:** → `/solucoes-sob-medida` e/ou Entre em contato com a Quantum.
- **Âncora:** `#sob-medida`.

### 7. Portfólio
- **Objetivo:** prova de capacidade.
- **Título (direção):** "Projetos pensados para negócios reais." [ADAPTAR]
- **Seção mantida na arquitetura da Home.** [USAR] (briefing §10, §13.7)
- **Conteúdo:** o conteúdo real será inserido depois. [INFORMAÇÃO A DEFINIR] projetos, imagens e textos.
- **Lógica de conteúdo de cada projeto (futura):** problema → solução criada → impacto. [USAR] (§10)
- **Regra:** não inventar cases, clientes, resultados, métricas, nomes, imagens ou textos de projeto.
- **Visual:** a apresentação visual dos projetos não é definida aqui; pertence à etapa do Design System / Astro Build.
- **CTA:** Fase 2 → `/portfolio`.
- **Âncora:** `#portfolio`.
- **Ponto de atenção:** decidir como a seção aparece até haver conteúdo real (conteúdo genérico ou seção oculta). [INFORMAÇÃO A DEFINIR]

### 8. Da necessidade à solução
- **Objetivo:** reduzir incerteza mostrando como o trabalho acontece.
- **Conteúdo:** as 6 etapas com os textos do briefing §9 (Diagnóstico, Estratégia, Estrutura e experiência, Design, Desenvolvimento, Entrega e evolução). [USAR] — no máximo, revisão leve de tamanho.
- **CTA:** opcional, Entre em contato com a Quantum.
- **Âncora:** `#processo`.

### 9. Por que Quantum
- **Objetivo:** consolidar os diferenciais.
- **Conteúdo:** Especialização, Sofisticação, Tecnologia. [USAR] (§2, §13.9)
- **Texto de apoio de cada fundamento:** [CONTEÚDO NOVO NECESSÁRIO] — sem credenciais, anos de experiência ou números não fornecidos.
- **Âncora:** `#por-que-quantum`.

### 10. Sobre a Quantum
- **Objetivo:** dar rosto institucional à empresa, sem foco nos fundadores.
- **Fatos disponíveis:** nome oficial; atendimento remoto, Brasil e exterior; princípio central de posicionamento. [USAR]
- **Texto institucional final:** [INFORMAÇÃO A DEFINIR] (briefing §16).
- **Não incluir** nesta seção geral: nomes, cargos, formação ou história dos fundadores. A Home institucional e a seção geral "Sobre" continuam sem foco nos fundadores. Exceção: a seção de autoridade da página "Soluções para Hospedagem". Ver "Autoridade da Roselle Nunes — regra".
- **Âncora:** `#sobre`.

### 11. CTA final
- **Objetivo:** converter.
- **Título (direção):** "Existe alguma coisa no seu negócio que poderia funcionar melhor com a solução digital certa?" [ADAPTAR]
- **CTA:** Entre em contato com a Quantum → `/contato`. Opcionalmente, botões diretos de WhatsApp e e-mail. [INFORMAÇÃO A DEFINIR] contatos.
- **Âncora:** `#contato`.

**Copy final de todas as seções:** [INFORMAÇÃO A DEFINIR] (briefing §16).

---

# TEMPLATE — PÁGINA DE SOLUÇÃO

Usado por: `/solucoes-para-hospedagem`, `/solucoes-para-saude`, `/solucoes-sob-medida`. [PROPOSTA DE ORGANIZAÇÃO]

**Função:** página de entrada por nicho ou tipo de problema (SEO + conversão), aprofundando o que a Home só resume.

**Variações por página:**

- **Hospedagem e Saúde:** o bloco "A solução" é organizado em **três caminhos** (Sites Especializados, Posicionamento Digital Estratégico, Soluções Digitais Personalizadas). Cada página tem conteúdo próprio; a linguagem de uma não é copiada na outra.
- **Soluções sob Medida:** o bloco "A solução" é substituído por "Públicos e capacidades", sem três caminhos fixos e sem catálogo fechado.

## Estrutura

1. **Breadcrumb:** Início › Soluções › [nome da página]
2. **Hero da página (H1):** o problema do público, em linguagem do público + subtítulo com a solução. CTA: Entre em contato com a Quantum.
3. **O problema:** situações que o público reconhece.
4. **O impacto:** o que esse problema custa ao negócio (sem números inventados).
5. **A solução:** como a Quantum resolve, o que pode ser entregue.
6. **Resultado esperado:** conceitos da faixa de impacto que se aplicam.
7. **Como trabalhamos:** resumo em uma linha + link para `/#processo` (não repetir as 6 etapas).
8. **Portfólio relacionado:** cases do mesmo segmento/tipo. Oculto até haver cases. [INFORMAÇÃO A DEFINIR]
9. **Outras soluções:** links para as outras duas páginas de solução.
10. **CTA final:** Entre em contato com a Quantum → `/contato`.

## Wireframe

```
[ HEADER ]
[ BREADCRUMB ]  Início › Soluções › Página

[ HERO DA PÁGINA ]
  H1 (problema do público)
  Subtítulo (solução)
  [ Entre em contato com a Quantum ]

[ O PROBLEMA ]      situações reconhecíveis
[ O IMPACTO ]       o que isso custa ao negócio
[ A SOLUÇÃO ]       o que a Quantum faz para este caso
[ RESULTADO ]       impactos buscados (sem números)
[ COMO TRABALHAMOS ] 1 linha + link → /#processo
[ PORTFÓLIO RELACIONADO ]  (oculto até haver cases)
[ OUTRAS SOLUÇÕES ] 2 links
[ CTA FINAL ]

[ FOOTER ]
```

Blocos 3 a 6 são, em todas as páginas, [CONTEÚDO NOVO NECESSÁRIO]: o briefing define público, escopo e lógica, mas não traz texto de problema/impacto por nicho.

---

# PÁGINA — SOLUÇÕES PARA HOSPEDAGEM

**URL:** `/solucoes-para-hospedagem` [PROPOSTA DE ORGANIZAÇÃO] (substitui `/sites-para-hospedagem`; ver "Rotas antigas e redirecionamento")
**Template:** Página de solução, com **estrutura própria aprovada** (abaixo), que prevalece sobre a ordem genérica do template.
**Função:** apresentar três caminhos de solução para pequenos hotéis, pousadas, imóveis de temporada e anfitriões de Airbnb.
**Origem:** briefing §4 e §4.1.
**Público:** pequenos hotéis, pousadas, imóveis de temporada, Airbnb. [USAR]

## Estrutura aprovada

```
[ HEADER ]
[ BREADCRUMB ]  Início › Soluções › Soluções para Hospedagem

[ 1. HERO ]
[ 2. BLOCO DE IMPACTO DA PRESENÇA DIGITAL ]
[ 3. AUTORIDADE — ROSELLE NUNES ]
[ 4. OS TRÊS CAMINHOS ]
     Sites Especializados | Posicionamento Digital Estratégico (Mais escolhido) | Soluções Digitais Personalizadas
[ 5. PONTOS DA JORNADA / OPERAÇÃO EM QUE A QUANTUM PODE ATUAR ]
[ 6. CTA FINAL ]
[ FOOTER ]
```

### 1. Hero

- H1 e subtítulo no formato problema → solução, na linguagem do público de hospedagem. [CONTEÚDO NOVO NECESSÁRIO]
- CTA: Entre em contato com a Quantum → `/contato`. [USAR]

### 2. Bloco de impacto da presença digital

- Objetivo: mostrar que a presença digital influencia a decisão de reserva, e que o objetivo não é apenas algo visualmente bonito.
- Princípios aprovados no briefing (§4.1) que orientam o bloco [ADAPTAR]:
  - o objetivo não é apenas construir algo visualmente bonito;
  - é necessário entender quem o negócio deseja atrair;
  - é necessário saber quais diferenciais precisam ser percebidos;
  - existem dúvidas e objeções antes da reserva;
  - os diferentes pontos de contato digitais influenciam a decisão.
- Texto final: [CONTEÚDO NOVO NECESSÁRIO]. Sem números, estatísticas de mercado ou promessas.

### 3. Autoridade — Roselle Nunes

Seção específica desta página. Justificativa: a experiência é diretamente relevante para a especialização em hospedagem.

**Informações factuais autorizadas** (briefing §4.1):

- formada em Administração de Empresas pela UFRGS;
- trabalho de conclusão de curso voltado a hotéis de rede;
- experiência internacional no Four Seasons Sydney, na Austrália;
- mais de 10 anos de experiência na gestão de um pequeno hotel.

**Uso:** reforçar que as soluções para hospedagem são pensadas por alguém com conhecimento prático do setor e da operação.

**Não inventar:** cargos, datas, títulos, certificações ou outras experiências. Usar exatamente as informações acima.

[INFORMAÇÃO A DEFINIR] Se a seção usa foto, citação ou apenas texto; o texto final; como a pessoa é identificada em relação à Quantum (o briefing não informa cargo ou função na empresa, então não atribuir nenhum).

### 4. Os três caminhos

#### Sites Especializados

- Não se trata apenas de criar um site. [USAR]
- A lógica parte do mapeamento de: público; desejos; objeções; diferenciais; linguagem; ação principal desejada.
- Objetivo: criar uma experiência digital que desperte desejo, transmita confiança e autoridade, comunique diferenciais e facilite a decisão de reserva.
- Inclui boas práticas de **SEO**.
- Inclui estrutura de conteúdo orientada também a **GEO** (Generative Engine Optimization), para favorecer leitura, compreensão e interpretação por mecanismos de inteligência artificial.
- **Preço:** a partir de **12x de R$ 102,00** ou **R$ 997,00 à vista**.
  - Referência válida para **site de uma página**.
  - Sites com mais páginas: [CONSULTAR PROPOSTA PERSONALIZADA]
- **Bônus:** 1 ano de domínio e hospedagem grátis.
- **Não prometer:** primeira posição no Google, posicionamento garantido, tráfego, vendas ou recomendação por IA.

#### Posicionamento Digital Estratégico

- **Destaque visual/comercial: "Mais escolhido".** É decisão de comunicação, **não dado factual**. Não escrever ou sugerir estatística de vendas, número de clientes ou ranking.
- Parte do mesmo mapeamento estratégico do site e o aplica aos principais pontos de contato digitais.
- Pode incluir: site especializado; link da bio; capas de destaques; três posts fixados (Instagram e redes compatíveis); organização da presença digital; otimização do Google Meu Negócio; otimização do TripAdvisor, quando aplicável.
- Objetivo: presença digital coerente e estratégica, e não apenas um site isolado.
- **Preço:** a partir de **12x de R$ 182,86** ou **R$ 1.797,00 à vista**.
  - Referência válida para projeto com **site de uma página**.
  - Sites com mais páginas: [CONSULTAR PROPOSTA PERSONALIZADA]
- **Bônus:**
  - 1 ano de domínio e hospedagem grátis;
  - 1 vídeo institucional da acomodação produzido a partir de fotos.
- **Regra sobre o vídeo:** é um bônus **específico da oferta de Hospedagem**, dentro deste pacote. Não é serviço independente, não entra no menu, não tem página própria e não é serviço geral da Quantum. Ver "Edição de vídeo — regra".

#### Soluções Digitais Personalizadas

- Solução **aberta**. Não tratar como "pacote 3" obrigatório, nem como pacote superior ou evolução dos anteriores. [USAR]
- Pode atender quem já possui site ou presença digital e precisa resolver uma necessidade específica.
- **Sem preço fixo.** Apresentar como projeto sob medida, com investimento conforme problema, escopo e solução necessária.
- Exemplos possíveis estão no bloco 5.

### 5. Pontos da jornada / operação em que a Quantum pode atuar

- Objetivo: mostrar, por exemplos, onde uma solução personalizada pode fazer diferença na jornada do hóspede e na operação.
- Exemplos do briefing (§4.1), sempre como exemplos e **nunca como catálogo fechado** [USAR]:
  - implantação ou otimização de Booking, Hotéis.com e Airbnb;
  - outras plataformas de reserva;
  - automações de atendimento;
  - soluções utilizando IA;
  - soluções para agilizar reservas;
  - cardápios digitais;
  - dashboards;
  - sistemas internos;
  - controles;
  - outras soluções digitais específicas.
- Cada exemplo descrito pelo problema que resolve, não pela ferramenta. [ADAPTAR]
- Não detalhar integrações, prazos ou preços não confirmados.

### 6. CTA final

- Entre em contato com a Quantum → `/contato`. [USAR]

## Regras gerais da página

- Não inventar resultados, métricas, clientes, preços, contatos, integrações específicas ou serviços não confirmados no briefing.
- Não afirmar estatística de vendas para o "Mais escolhido".
- Não especificar extensão do domínio, fornecedor, plano ou condições adicionais dos bônus enquanto não forem definidos.
- Portfólio relacionado: [INFORMAÇÃO A DEFINIR]

## Pendências desta página

- [INFORMAÇÃO A DEFINIR] Extensão, fornecedor e condições do bônus de domínio e hospedagem.
- [INFORMAÇÃO A DEFINIR] Valores para sites com mais de uma página (hoje: [CONSULTAR PROPOSTA PERSONALIZADA]).
- [INFORMAÇÃO A DEFINIR] Duração, formato e quantidade de fotos do vídeo institucional.
- [CONTEÚDO NOVO NECESSÁRIO] Copy final de todos os blocos; a copy completa não faz parte do briefing.

**SEO:** página foco para buscas sobre soluções digitais para pousada, hotel e temporada. Title e description: [CONTEÚDO NOVO NECESSÁRIO].

---

# PÁGINA — SOLUÇÕES PARA SAÚDE

**URL:** `/solucoes-para-saude` [PROPOSTA DE ORGANIZAÇÃO] (substitui `/sites-para-saude`; ver "Rotas antigas e redirecionamento")
**Template:** Página de solução, com **estrutura própria aprovada** (abaixo), que prevalece sobre a ordem genérica do template.
**Função:** apresentar três caminhos de solução para médicos, fisioterapeutas, dentistas e outros profissionais da saúde.
**Origem:** briefing §4 e §4.2.
**Público:** médicos, fisioterapeutas, dentistas e outros profissionais da área da saúde. [USAR]

**Lógica da página:** a presença digital deve ajudar a transmitir confiança, comunicar a atuação com clareza, fortalecer autoridade profissional, facilitar o contato, organizar a jornada do paciente, reduzir tarefas repetitivas e tornar processos mais eficientes. A página considera tanto a experiência de quem procura atendimento quanto a rotina de quem atende, organiza e acompanha. [USAR]

**Tom:** próprio para profissionais da saúde. Não excessivamente comercial e sem transformar a experiência em algo frio. [USAR]

## Estrutura aprovada

```
[ HEADER ]
[ BREADCRUMB ]  Início › Soluções › Soluções para Saúde

[ 1. HERO ]
[ 2. PERCEPÇÃO E CONFIANÇA ANTES DO PRIMEIRO CONTATO ]
[ 3. TECNOLOGIA SEM PERDER O LADO HUMANO ]
[ 4. OS TRÊS CAMINHOS ]
     Sites Especializados | Posicionamento Digital Estratégico (Mais escolhido) | Soluções Digitais Personalizadas
[ 5. JORNADA DO PACIENTE ]
[ 6. CTA FINAL ]
[ FOOTER ]
```

### 1. Hero

- **Função:** apresentar a ideia de que a presença digital começa a construir confiança antes mesmo do primeiro contato.
- Deve comunicar que a Quantum cria soluções digitais para profissionais da saúde com foco em: confiança; clareza; posicionamento; facilidade de contato; jornada do paciente.
- CTA: Entre em contato com a Quantum → `/contato` (ou o mecanismo de contato existente no projeto). [USAR]
- Copy final: [CONTEÚDO NOVO NECESSÁRIO]. Nenhuma copy factual nova além do que está aprovado no briefing.

### 2. Percepção e confiança antes do primeiro contato

- **Função:** mostrar que, antes de entrar em contato, o paciente já forma uma percepção a partir de:
  - apresentação profissional;
  - clareza da atuação;
  - informações encontradas;
  - presença digital;
  - resultados de busca;
  - facilidade de contato ou agendamento;
  - confiança transmitida.
- **Objetivos da presença digital** (briefing §4.2) [USAR]:
  - transmitir confiança;
  - comunicar a atuação com clareza;
  - fortalecer autoridade profissional;
  - facilitar contato;
  - organizar a jornada do paciente;
  - reduzir tarefas repetitivas;
  - tornar processos mais eficientes.
- Copy final: [CONTEÚDO NOVO NECESSÁRIO]. Sem estatísticas, dados de mercado ou promessas.

### 3. Tecnologia sem perder o lado humano

- **Função:** seção conceitual curta. Reforça que uma boa solução digital para Saúde deve:
  - facilitar o acesso à informação;
  - transmitir profissionalismo;
  - tornar a experiência mais simples;
  - respeitar o caráter humano do atendimento;
  - fazer sentido para a rotina de quem atende.
- **Não** transformar em biografia da Roselle.
- **Não** usar autoridade pessoal como na página de Hospedagem. A seção de autoridade com Roselle Nunes não se aplica a esta página.
- Copy final: [CONTEÚDO NOVO NECESSÁRIO].

### 4. Os três caminhos

#### 4.1 Sites Especializados

- **Função:** sites pensados para: transmitir confiança; explicar a atuação; organizar informações; facilitar contato ou agendamento; funcionar bem em diferentes dispositivos; aplicar boas práticas de SEO; estruturar conteúdo para facilitar leitura e compreensão por mecanismos de inteligência artificial.
- **Antes da construção, considerar:** quem o profissional precisa atingir; quais informações essas pessoas procuram; quais dúvidas costumam surgir; o que precisa ficar claro; qual próximo passo deve ser facilitado.
- **Preço:** a partir de **12x de R$ 102,00** ou **R$ 997,00 à vista**.
  - Referência válida para **site de uma página**.
  - Sites com mais páginas: [CONSULTAR PROPOSTA PERSONALIZADA]
- **Bônus:** 1 ano de domínio e hospedagem grátis.
- **Não prometer:** primeira posição no Google, posicionamento garantido, tráfego garantido, vendas garantidas ou recomendação garantida por IA.

#### 4.2 Posicionamento Digital Estratégico

- **Destaque visual/comercial: "Mais escolhido".** Decisão de comunicação, **não dado factual**. Sem estatística de vendas, número de clientes ou ranking.
- Usa o mesmo mapeamento do site e o aplica aos principais pontos de contato digitais do profissional.
- Pode incluir: site especializado; link da bio; capas para destaques; 3 posts fixados para Instagram; organização dos principais pontos de contato digitais; otimização do Google Meu Negócio.
- **Não incluir Doctoralia** como serviço aprovado.
- **Preço:** a partir de **12x de R$ 182,86** ou **R$ 1.797,00 à vista**.
  - Referência válida para projeto com **site de uma página**.
  - Sites com mais páginas: [CONSULTAR PROPOSTA PERSONALIZADA]
- **Bônus:** 1 ano de domínio e hospedagem grátis.
- **Não incluir vídeo institucional** na oferta de Saúde (bônus exclusivo de Hospedagem; ver "Edição de vídeo — regra").

#### 4.3 Soluções Digitais Personalizadas

- **Sem preço fixo.** Apresentar como **projeto sob medida**. O investimento depende do problema, do escopo e da solução necessária.
- Exemplos possíveis (sempre como exemplos, **nunca como catálogo fechado**) [USAR]:
  - sistemas simples para acompanhamento de pacientes;
  - controle de evolução ou reabilitação;
  - formulários personalizados;
  - organização de informações;
  - dashboards;
  - áreas administrativas;
  - automações de atendimento;
  - organização de processos;
  - soluções utilizando inteligência artificial;
  - outras ferramentas desenvolvidas conforme a necessidade.
- **Não** apresentar como pacote superior obrigatório nem como evolução dos anteriores.

### 5. Jornada do paciente

Três momentos [USAR]:

**Antes do contato**

- como o profissional é encontrado;
- como sua atuação é apresentada;
- clareza das informações;
- confiança;
- autoridade percebida.

**Na decisão**

- dúvidas;
- informações sobre atendimento;
- facilidade de contato;
- agendamento;
- próximo passo claro.

**Na rotina**

- atendimento;
- formulários;
- acompanhamento;
- organização de informações;
- automações;
- processos que consomem tempo.

### 6. CTA final

- **Função:** convidar o profissional a contar o que precisa melhorar na presença digital ou na rotina.
- Não inventar contato, WhatsApp, e-mail ou URL. Usar apenas os mecanismos de contato já existentes no projeto quando a página for construída.
- Copy final: [CONTEÚDO NOVO NECESSÁRIO].

## Regras da página

- Não copiar a linguagem de Hospedagem. Não trocar apenas "hóspede" por "paciente".
- Não usar exemplos de Booking, Airbnb, Hotéis.com, TripAdvisor ou outras soluções próprias de Hospedagem.
- Não inventar: especialidades, resultados, métricas, pacientes, depoimentos, preços, cargos, certificações, integrações ou regras clínicas.
- Não especificar extensão do domínio, fornecedor, plano ou condições adicionais do bônus enquanto não forem definidos.
- Portfólio relacionado: [INFORMAÇÃO A DEFINIR]

## Pendências desta página

- [INFORMAÇÃO A DEFINIR] Extensão, fornecedor e condições do bônus de domínio e hospedagem.
- [INFORMAÇÃO A DEFINIR] Valores para sites com mais de uma página (hoje: [CONSULTAR PROPOSTA PERSONALIZADA]).
- [CONTEÚDO NOVO NECESSÁRIO] Copy final de todos os blocos; a copy completa não faz parte do briefing.

**SEO:** página foco para buscas de profissionais e clínicas de saúde. Title e description: [CONTEÚDO NOVO NECESSÁRIO].

---

# PÁGINA — SOLUÇÕES SOB MEDIDA

**URL:** `/solucoes-sob-medida` [PROPOSTA DE ORGANIZAÇÃO]
**Template:** Página de solução (bloco "A solução" substituído por "Públicos e capacidades").
**Função:** solução guarda-chuva para negócios e profissionais que **não pertencem aos dois nichos prioritários** (Hospedagem e Saúde). A solução nasce da necessidade do negócio, e não de um pacote fechado.
**Origem:** briefing §5.

| Bloco | Conteúdo | Marcação |
|---|---|---|
| Hero | direção "E se o problema não for o site?" ou variação | [ADAPTAR] |
| Princípio | o cliente apresenta a necessidade; a Quantum desenvolve a solução adequada | [USAR] |
| Lógica da página | problema → impacto → solução → resultado | [USAR] |
| Públicos possíveis | ver lista abaixo | [USAR] |
| O que a Quantum pode estruturar | ver lista abaixo | [USAR] |
| Problema / impacto | ex.: processos manuais, falta de controle, informação dispersa | [CONTEÚDO NOVO NECESSÁRIO] |
| Exemplos | exemplos do briefing §5 (cardápios digitais, controles internos, sistemas simples de gestão, dashboards financeiros, áreas administrativas, formulários e fluxos personalizados, entre outros) | [USAR] |
| Aviso de não-catálogo | "são exemplos, não um catálogo fechado" | [USAR] |
| Como trabalhamos | link para `/#processo`, destacando Diagnóstico e Estratégia | [PROPOSTA DE ORGANIZAÇÃO] |
| CTA | Entre em contato com a Quantum, reforçando que não é preciso saber qual solução procurar (§11) | [ADAPTAR] |

**Públicos possíveis:**

- empresas de outras áreas;
- profissionais liberais;
- prestadores de serviços;
- especialistas;
- pessoas que desejam se posicionar no mercado digital;
- pessoas ou empresas que vendem serviços;
- pessoas ou empresas que vendem cursos ou produtos digitais.

**A Quantum pode atuar em:**

- presença digital;
- jornada de venda;
- organização de funil;
- pontos de contato;
- automações;
- soluções digitais específicas conforme o problema identificado.

**Regras:**

- Não criar catálogo fechado.
- Cada exemplo descrito pelo problema que resolve, não pela ferramenta.
- Detalhes técnicos (tecnologias, integrações, prazos, preços) não constam no briefing: não incluir.
- Os exemplos de acompanhamento de pacientes e controle de reabilitação são específicos de Saúde e devem ser avaliados antes de aparecerem aqui. [PROPOSTA DE ORGANIZAÇÃO]

---

# PADRONIZAÇÃO DIGITAL — DECISÃO EM ABERTO

A antiga página própria `/padronizacao-digital` **não continua como página independente** enquanto a decisão estiver em aberto no briefing (§6). Foi removida da navegação e do mapa principal do novo site.

[INFORMAÇÃO A DEFINIR] Decidir futuramente se Design System e padronização visual:

- permanecem como oferta independente;
- entram dentro de Posicionamento Digital Estratégico;
- aparecem apenas como parte de projetos específicos.

Nenhuma decisão foi tomada. Enquanto isso, não prever rota, item de menu, link de rodapé nem card na Home para esse tema.

**Fora do escopo (briefing §6), caso o tema volte:** criação de logo, identidade visual completa, rebranding e manual de marca completo. A Quantum trabalha a partir da identidade existente.

---

# PÁGINA — CONTATO

**URL:** `/contato`
**Função:** destino único de todos os CTAs; permitir iniciar a conversa sem saber qual solução é necessária (§11).

```
[ HEADER ]

[ INTRO ]
  H1: Entre em contato com a Quantum
  Texto: conte a necessidade do seu negócio; não é preciso saber a solução

[ CANAIS ]
  [ WhatsApp ]   [ E-mail ]
  Atendimento remoto · Brasil e exterior

[ FORMULÁRIO ]
  campos a definir
  [ Enviar ]
  aviso de privacidade + link

[ PRÓXIMO PASSO ]
  o que acontece depois do contato (início do Diagnóstico)

[ FOOTER ]
```

| Bloco | Marcação |
|---|---|
| H1 = CTA oficial | [USAR] |
| Texto de introdução | [ADAPTAR] (objetivo do CTA, §11) |
| Número de WhatsApp | [INFORMAÇÃO A DEFINIR] |
| E-mail institucional | [INFORMAÇÃO A DEFINIR] |
| Campos e destino do formulário | [INFORMAÇÃO A DEFINIR] |
| Atendimento remoto, Brasil e exterior | [USAR] |
| "Próximo passo" (liga contato à etapa Diagnóstico, §9) | [PROPOSTA DE ORGANIZAÇÃO] + [CONTEÚDO NOVO NECESSÁRIO] — sem prometer prazo de resposta |
| Mensagem de sucesso do envio | [CONTEÚDO NOVO NECESSÁRIO] |

---

# PÁGINA — POLÍTICA DE PRIVACIDADE (condicional)

**URL:** `/politica-de-privacidade`
**Função:** operação/conformidade, caso o formulário colete dados pessoais.
**Conteúdo:** [INFORMAÇÃO A DEFINIR] — texto e dados legais devem ser fornecidos/validados pelo cliente. Não redigir dados jurídicos nesta etapa.
**Navegação:** apenas rodapé e formulário.

---

# PÁGINA — 404

**Função:** operacional. Mensagem curta + links para Home, Soluções e Contato. [CONTEÚDO NOVO NECESSÁRIO]

---

# FASE 2 — PORTFÓLIO

Não construir no lançamento. Ativar quando os projetos estiverem definidos (§10, §16).

**`/portfolio`** — listagem de cases. Filtro por nicho (Hospedagem / Saúde / Sob medida) só se houver cases suficientes. [PROPOSTA DE ORGANIZAÇÃO]

## Template — Case (`/portfolio/[slug]`)

1. Breadcrumb: Início › Portfólio › [case]
2. H1: nome do projeto ou do cliente (com autorização)
3. Contexto: segmento e tipo de negócio
4. **Problema**
5. **Solução criada**
6. **Impacto** — apenas o que o cliente confirmar; sem números não verificados
7. Imagens do projeto
8. Caminho de atuação relacionado → link para a página de solução
9. CTA: Entre em contato com a Quantum

Lógica obrigatória: problema → solução criada → impacto (§10). [USAR]
Todo o conteúdo: [INFORMAÇÃO A DEFINIR].

---

## Diretrizes de SEO

- **URLs a preservar / redirecionamentos:** nenhum implementado. Documentar o redirecionamento futuro das rotas antigas `/sites-para-hospedagem` → `/solucoes-para-hospedagem` e `/sites-para-saude` → `/solucoes-para-saude` (ver "Rotas antigas e redirecionamento").
- **Domínio:** [INFORMAÇÃO A DEFINIR].
- **URLs novas (Fase 1):** `/`, `/solucoes-para-hospedagem`, `/solucoes-para-saude`, `/solucoes-sob-medida`, `/contato`, `/politica-de-privacidade` (condicional). Slugs em português, curtos, descritivos e estáveis — definidos agora para não mudarem depois.
- **Fase 2:** `/portfolio` e `/portfolio/[slug]`. Até lá, não publicar a rota vazia.
- **Um H1 por página:** Home = título da Hero; internas = H1 do problema/nicho.
- **Titles e descriptions:** não existem. [CONTEÚDO NOVO NECESSÁRIO] para todas as páginas, usando o nome oficial "Quantum Soluções Digitais".
- **Sem duplicação:** processo completo só na Home; lista completa de exemplos sob medida em `/solucoes-sob-medida`; nas páginas de nicho, só os exemplos daquele nicho; demais lugares apenas resumem e linkam.
- **Âncoras da Home** não são páginas: não entram no sitemap.
- **Idioma:** o atendimento inclui o exterior, mas não há definição de versão em outro idioma. Se houver, prever estrutura de idiomas (ex.: `/en/`) antes da construção. [INFORMAÇÃO A DEFINIR]
- **Básico técnico:** sitemap, canonical por página, Open Graph (imagem de compartilhamento: ver "Ativos").

---

## Ativos a reaproveitar

| Ativo | Classificação | Observação |
|---|---|---|
| Logo Quantum — versões preto, branco, horizontal, fundo transparente (§3) | [USAR] | Os arquivos não foram encontrados na pasta do projeto. [INFORMAÇÃO A DEFINIR] enviar os arquivos finais. |
| Versões de logo com outras assinaturas (§3) | [SUBSTITUIR] | O nome oficial é "Quantum Soluções Digitais". Usar só versões com o nome oficial, ou só o símbolo. |
| Favicon / ícone do site | [AVALIAR] | Derivar do símbolo do logo existente, se houver versão adequada em tamanho pequeno. |
| Imagem de compartilhamento (Open Graph) | [CONTEÚDO NOVO NECESSÁRIO] | Não existe; pode ser montada com o logo. |
| Fotos institucionais / equipe | — | Não existem e não são necessárias na Home (fundadores não são foco). Foto da Roselle na página de Hospedagem: [INFORMAÇÃO A DEFINIR]. |
| Imagens de portfólio | [INFORMAÇÃO A DEFINIR] | Dependem dos cases (Fase 2). |
| Imagens em `bernardowainer.com.br/` (referência Index1) | [SUBSTITUIR] | Material de terceiro, apenas referência de lógica comercial. Não usar no site. |
| Imagens em `portfolio-showcase-20261006223850/` | [SUBSTITUIR] | Não identificadas no briefing como ativos da Quantum. Não usar sem confirmação. |
| `ds1.html`, `ds2.html`, `ds3.html` | — | Referências visuais para a próxima etapa (ds3 = Hero, ds2 = restante; ds1 não citado no briefing). Não são ativos de conteúdo e não foram usados aqui. |

Vídeos e documentos: nenhum identificado. O vídeo institucional da acomodação é bônus produzido por projeto, não um ativo existente.

---

## Pontos a confirmar antes da construção

**Contato e conversão**
1. Número de WhatsApp.
2. E-mail institucional.
3. Campos do formulário e destino das mensagens.
4. Rótulo curto do CTA no header ("Entre em contato") — aprovar.
5. Botão flutuante de WhatsApp: sim ou não.

**Conteúdo**
6. Copy final da Home (todas as 11 seções); as frases do briefing são direções, não slogans oficiais.
7. Copy das três páginas de solução (problema, impacto, solução, resultado por nicho).
8. Texto institucional final da seção Sobre.
9. Padronização digital e Design System: permanecem como oferta independente, entram no Posicionamento Digital Estratégico ou aparecem só em projetos específicos? (briefing §6; sem decisão)
11. Página de Saúde: mencionar ou não regras de publicidade dos conselhos profissionais (o briefing não define; sem decisão, não mencionar).
12. Hospedagem: usar apenas as plataformas e soluções listadas no briefing §4.1 (Booking, Hotéis.com, Airbnb, outras plataformas de reserva, automações, IA etc.), sem detalhar integrações, prazos ou preços não confirmados.
12a. Confirmar se as rotas antigas (`/sites-para-hospedagem`, `/sites-para-saude`) foram indexadas ou compartilhadas, para decidir o redirecionamento.

22. Hospedagem e Saúde: extensão do domínio, fornecedor e condições do bônus de domínio e hospedagem.
23. Hospedagem e Saúde: valores para sites com mais de uma página.
25. Hospedagem: duração, formato e quantidade de fotos do vídeo institucional bônus.
26. Hospedagem: formato da seção de autoridade (texto, foto, citação) e identificação da Roselle em relação à Quantum.

**Portfólio**
13. Projetos a apresentar, com autorização dos clientes, imagens e impactos confirmados.
14. Até haver conteúdo real: mostrar a seção com conteúdo genérico ou ocultá-la.

**Marca e ativos**
15. Arquivos finais do logo com o nome oficial "Quantum Soluções Digitais" (não estão na pasta).
16. Confirmar que as imagens de `portfolio-showcase-20261006223850/` não são da Quantum.

**Institucional e legal**
17. Redes sociais (quais e links).
18. Razão social, CNPJ e demais dados legais para o rodapé.
19. Necessidade e texto da Política de Privacidade.

**Técnico / estratégico**
20. Domínio do site.
21. Idioma(s): só português ou também versão para o exterior.
