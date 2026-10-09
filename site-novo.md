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

## Primeira implementação em Astro — SOMENTE A HOME

As páginas internas estão arquitetadas neste documento para etapas futuras. **Na primeira implementação em Astro deve ser construída somente a Home (`/`).**

**Não construir nesta primeira etapa:**

- `/sites-para-hospedagem`
- `/sites-para-saude`
- `/solucoes-sob-medida`
- `/padronizacao-digital`
- `/contato`
- `/politica-de-privacidade`
- `/portfolio`
- `/portfolio/[slug]`
- nenhuma outra página interna

**Sequência obrigatória:**

```
Home
→ npm run build
→ revisão visual
→ correções
→ aprovação
```

Somente depois da aprovação da Home → construir as páginas internas.

Observações:

- Onde este documento fala em "Fase 1", refere-se ao escopo da arquitetura do lançamento, não à primeira implementação em Astro, que é apenas a Home.
- A Home contém links para páginas internas (`/contato`, páginas de solução). Enquanto essas páginas não existirem, o destino provisório desses links precisa ser definido antes do build. [INFORMAÇÃO A DEFINIR]

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
├── /sites-para-hospedagem          Pilar 1 — segmento hospedagem      [template Solução]
├── /sites-para-saude               Pilar 1 — segmento saúde           [template Solução]
├── /solucoes-sob-medida            Pilar 2                            [template Solução]
├── /padronizacao-digital           Pilar 3                            [template Solução]
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
| Hub `/sites-especializados` | Repetiria o que a Home já apresenta; os dois segmentos têm páginas próprias. |
| Blog | Não previsto no briefing. |
| FAQ | Não há perguntas/respostas no briefing. |
| Depoimentos | Não há depoimentos no briefing. |
| Edição de vídeo / Branding | Fora do escopo da oferta (briefing §6 e §7). Não devem aparecer em nenhuma página. |

---

## Decisões estruturais

1. **Não há migração.** Sem site atual: nenhuma URL a preservar, nenhum redirecionamento, nenhuma duplicação herdada.
2. **A Home é a peça central e segue a ordem aprovada no briefing (§13)**, com 11 seções. A ordem não é alterada; só são definidos objetivos, origem e marcações.
3. **Páginas internas apenas para os 3 pilares**, porque têm função real de SEO (buscas por segmento e tipo de solução) e de conversão (visitante chega pelo problema dele). [PROPOSTA DE ORGANIZAÇÃO]
   - O Pilar 1 vira **duas páginas** (hospedagem e saúde), porque a especialização por segmento é o diferencial declarado e cada segmento tem público e busca distintos.
   - Pilares 2 e 3 têm uma página cada.
   - As quatro páginas compartilham um **template comum** ("Página de solução").
4. **Portfólio na Home desde o lançamento, mas sem página própria na Fase 1.** Os projetos ainda estão indefinidos; uma listagem vazia ou genérica não tem função. `/portfolio` e `/portfolio/[slug]` entram quando houver cases reais. [PROPOSTA DE ORGANIZAÇÃO]
5. **Página `/contato` dedicada**, porque o CTA principal se repete em todas as páginas e precisa de um destino único com os três canais (WhatsApp, formulário, e-mail).
6. **Conteúdo que se repete vive em um só lugar** [PROPOSTA DE ORGANIZAÇÃO]:
   - Processo completo (6 etapas): só na Home `#processo`. Nas páginas internas: menção curta + link.
   - Exemplos de soluções sob medida: lista completa em `/solucoes-sob-medida`. Na Home: seleção curta. Nas páginas de segmento: só os exemplos daquele segmento.
   - "Por que Quantum" (3 fundamentos): só na Home.
7. **Lógica de comunicação em todas as páginas:** problema → impacto → solução → resultado (briefing §2 e §13). Nunca serviço → características → entrega.
8. **Lacunas principais:** copy final de toda a Home e das páginas internas, conteúdo de Sobre, cases do portfólio, contatos, redes sociais, dados legais, idioma(s) e domínio. Ver "Pontos a confirmar".

---

## Navegação principal

**Marca:** logo Quantum, com o nome oficial **Quantum Soluções Digitais** → link para `/`. [USAR] (arquivo do logo: ver "Ativos")

**Itens do menu** [PROPOSTA DE ORGANIZAÇÃO]

| Item | Destino | Tipo |
|---|---|---|
| Soluções | submenu (abaixo) | menu com 4 páginas |
| Portfólio | `/#portfolio` (Fase 2: `/portfolio`) | âncora |
| Processo | `/#processo` | âncora |
| Sobre | `/#sobre` | âncora |
| **CTA:** Entre em contato | `/contato` | botão |

**Submenu "Soluções"**

- Sites para hospedagem → `/sites-para-hospedagem`
- Sites para saúde → `/sites-para-saude`
- Soluções sob medida → `/solucoes-sob-medida`
- Padronização digital → `/padronizacao-digital`

**Comportamento**

- Âncoras usam `/#ancora`, para funcionarem também a partir das páginas internas.
- No mobile, menu recolhido com o CTA sempre visível.
- Rótulo do botão no header: versão curta do CTA oficial ("Entre em contato"). O texto completo "Entre em contato com a Quantum" fica nos CTAs de seção. [INFORMAÇÃO A DEFINIR] aprovar a versão curta.
- WhatsApp: opcionalmente como botão flutuante em todas as páginas, quando o número existir. [INFORMAÇÃO A DEFINIR]

**Rodapé (todas as páginas)**

- Logo + nome oficial. [USAR]
- Frase curta de posicionamento. [ADAPTAR] (a partir das direções de mensagem do briefing §2)
- Links: as 4 páginas de solução, Portfólio, Processo, Sobre, Contato.
- Contatos: WhatsApp, e-mail. [INFORMAÇÃO A DEFINIR]
- Redes sociais. [INFORMAÇÃO A DEFINIR]
- Atendimento remoto no Brasil e no exterior. [USAR]
- Dados legais (razão social/CNPJ) e link para a Política de Privacidade. [INFORMAÇÃO A DEFINIR]

---

# HOME

**URL:** `/`
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

[ 4. TRÊS CAMINHOS ]
  [ Sites especializados ] [ Soluções sob medida ] [ Posicionamento e padronização ]
     → links para as páginas

[ 5. ESPECIALIZAÇÃO ]
  [ Hospedagem ]                    [ Saúde ]
  hotéis, pousadas, temporada,      médicos, fisioterapeutas,
  Airbnb  → /sites-para-hospedagem  dentistas... → /sites-para-saude

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

### 4. Os 3 caminhos de atuação
- **Objetivo:** organizar a oferta em três caminhos claros, cada um levando à sua página.
- **Conteúdo:**
  - **Sites especializados** — hospedagem e saúde. [ADAPTAR] (§4) → link para a seção 5 ou para as duas páginas.
  - **Soluções digitais sob medida** — a solução parte da necessidade do cliente. [ADAPTAR] (§5) → `/solucoes-sob-medida`.
  - **Posicionamento e padronização digital** — organizar a identidade existente para o ambiente digital. [ADAPTAR] (§6) → `/padronizacao-digital`.
- **Texto de cada card:** 1–2 frases no formato problema → solução. [CONTEÚDO NOVO NECESSÁRIO]
- **CTA:** links "Saiba mais" para as páginas.
- **Âncora:** `#solucoes`.

### 5. Especialização
- **Objetivo:** provar que a Quantum entende o contexto de cada segmento; não são sites genéricos.
- **Conteúdo:**
  - **Hospedagem:** pequenos hotéis, pousadas, imóveis de temporada, Airbnb. [USAR]
  - **Saúde:** médicos, fisioterapeutas, dentistas, outros profissionais da saúde. [USAR]
- **Texto:** para cada segmento, um problema típico e o impacto buscado. [CONTEÚDO NOVO NECESSÁRIO] — sem inventar dados do mercado.
- **CTA:** → `/sites-para-hospedagem` e → `/sites-para-saude`.
- **Âncora:** `#especializacao`.
- **Nota:** seções 4 e 5 se sobrepõem no Pilar 1. Seção 4 só nomeia o caminho; seção 5 aprofunda os segmentos. [PROPOSTA DE ORGANIZAÇÃO]

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
- **Não incluir:** nomes, cargos, formação ou história dos fundadores.
- **Âncora:** `#sobre`.

### 11. CTA final
- **Objetivo:** converter.
- **Título (direção):** "Existe alguma coisa no seu negócio que poderia funcionar melhor com a solução digital certa?" [ADAPTAR]
- **CTA:** Entre em contato com a Quantum → `/contato`. Opcionalmente, botões diretos de WhatsApp e e-mail. [INFORMAÇÃO A DEFINIR] contatos.
- **Âncora:** `#contato`.

**Copy final de todas as seções:** [INFORMAÇÃO A DEFINIR] (briefing §16).

---

# TEMPLATE — PÁGINA DE SOLUÇÃO

Usado por: `/sites-para-hospedagem`, `/sites-para-saude`, `/solucoes-sob-medida`, `/padronizacao-digital`. [PROPOSTA DE ORGANIZAÇÃO]

**Função:** página de entrada por segmento ou tipo de problema (SEO + conversão), aprofundando o que a Home só resume.

## Estrutura

1. **Breadcrumb:** Início › Soluções › [nome da página]
2. **Hero da página (H1):** o problema do público, em linguagem do público + subtítulo com a solução. CTA: Entre em contato com a Quantum.
3. **O problema:** situações que o público reconhece.
4. **O impacto:** o que esse problema custa ao negócio (sem números inventados).
5. **A solução:** como a Quantum resolve, o que pode ser entregue.
6. **Resultado esperado:** conceitos da faixa de impacto que se aplicam.
7. **Como trabalhamos:** resumo em uma linha + link para `/#processo` (não repetir as 6 etapas).
8. **Portfólio relacionado:** cases do mesmo segmento/tipo. Oculto até haver cases. [INFORMAÇÃO A DEFINIR]
9. **Outras soluções:** links para as outras três páginas.
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
[ OUTRAS SOLUÇÕES ] 3 links
[ CTA FINAL ]

[ FOOTER ]
```

Blocos 3 a 6 são, em todas as páginas, [CONTEÚDO NOVO NECESSÁRIO]: o briefing define público, escopo e lógica, mas não traz texto de problema/impacto por segmento.

---

# PÁGINA — SITES PARA HOSPEDAGEM

**URL:** `/sites-para-hospedagem` [PROPOSTA DE ORGANIZAÇÃO]
**Template:** Página de solução.
**Função:** atrair e converter pequenos hotéis, pousadas, imóveis de temporada e anfitriões de Airbnb.

| Bloco | Conteúdo | Marcação |
|---|---|---|
| Público | pequenos hotéis, pousadas, imóveis de temporada, Airbnb (§4) | [USAR] |
| Hero / problema / impacto | texto específico do segmento | [CONTEÚDO NOVO NECESSÁRIO] |
| Solução | site especializado, pensado para o contexto do segmento (§4) | [ADAPTAR] |
| Exemplo complementar sob medida | cardápio digital pode fazer sentido para hospedagem (§5) | [PROPOSTA DE ORGANIZAÇÃO] — confirmar se deve ser citado |
| Funcionalidades específicas (ex.: reservas, integração com plataformas) | não constam no briefing | [INFORMAÇÃO A DEFINIR] — não mencionar sem confirmação |
| Portfólio relacionado | — | [INFORMAÇÃO A DEFINIR] |
| CTA | Entre em contato com a Quantum | [USAR] |

**SEO:** página foco para buscas sobre site para pousada, hotel e temporada. Title e description: [CONTEÚDO NOVO NECESSÁRIO].

---

# PÁGINA — SITES PARA SAÚDE

**URL:** `/sites-para-saude` [PROPOSTA DE ORGANIZAÇÃO]
**Template:** Página de solução.
**Função:** atrair e converter médicos, fisioterapeutas, dentistas e outros profissionais da saúde.

| Bloco | Conteúdo | Marcação |
|---|---|---|
| Público | médicos, fisioterapeutas, dentistas, outros profissionais da saúde (§4) | [USAR] |
| Necessidade central | presença digital que transmita mais autoridade (§8) | [ADAPTAR] |
| Hero / problema / impacto | texto específico do segmento | [CONTEÚDO NOVO NECESSÁRIO] |
| Solução | site especializado para o contexto da saúde (§4) | [ADAPTAR] |
| Exemplos complementares sob medida | acompanhamento de pacientes, controle de reabilitação (§5) | [PROPOSTA DE ORGANIZAÇÃO] |
| Publicidade na saúde | se a página deve mencionar atenção às regras de publicidade dos conselhos profissionais | [INFORMAÇÃO A DEFINIR] |
| Portfólio relacionado | — | [INFORMAÇÃO A DEFINIR] |
| CTA | Entre em contato com a Quantum | [USAR] |

**SEO:** página foco para buscas sobre site para médicos, dentistas, fisioterapeutas e clínicas. Title e description: [CONTEÚDO NOVO NECESSÁRIO].

---

# PÁGINA — SOLUÇÕES SOB MEDIDA

**URL:** `/solucoes-sob-medida` [PROPOSTA DE ORGANIZAÇÃO]
**Template:** Página de solução (bloco "A solução" substituído por "Exemplos").
**Função:** mostrar que a Quantum desenvolve a ferramenta que o negócio precisa, sem catálogo fechado.

| Bloco | Conteúdo | Marcação |
|---|---|---|
| Hero | direção "E se o problema não for o site?" ou variação | [ADAPTAR] |
| Princípio | o cliente apresenta a necessidade; a Quantum desenvolve a solução adequada (§5) | [USAR] |
| Problema / impacto | ex.: processos manuais, falta de controle, informação dispersa | [CONTEÚDO NOVO NECESSÁRIO] |
| Exemplos | lista completa do §5 — é aqui que ela vive | [USAR] |
| Aviso de não-catálogo | "são exemplos, não um catálogo fechado" (§5) | [USAR] |
| Como trabalhamos | link para `/#processo`, destacando Diagnóstico e Estratégia | [PROPOSTA DE ORGANIZAÇÃO] |
| CTA | Entre em contato com a Quantum, reforçando que não é preciso saber qual solução procurar (§11) | [ADAPTAR] |

**Regra:** cada exemplo descrito pelo problema que resolve, não pela ferramenta. Detalhes técnicos (tecnologias, integrações, prazos, preços) não constam no briefing → não incluir.

---

# PÁGINA — PADRONIZAÇÃO DIGITAL

**URL:** `/padronizacao-digital` [PROPOSTA DE ORGANIZAÇÃO] — slug curto; o nome completo do pilar ("Posicionamento e padronização digital") fica no H1/título.
**Template:** Página de solução.
**Função:** apresentar a organização da presença visual digital a partir da identidade existente.

| Bloco | Conteúdo | Marcação |
|---|---|---|
| Hero / problema | presença digital inconsistente entre pontos de contato | [CONTEÚDO NOVO NECESSÁRIO] |
| O que envolve | Design System, padronização de cores, tipografia, componentes visuais, padrões de interface, consistência visual, organização da presença digital, diretrizes de coerência (§6) | [USAR] |
| Ponto de partida | trabalhar a partir da identidade existente (§6) | [USAR] |
| O que não é | não é criação de logo, identidade visual completa, rebranding, branding nem manual de marca completo (§6) | [ADAPTAR] — decidir se aparece explicitamente ou só orienta o texto. [INFORMAÇÃO A DEFINIR] |
| Resultado | consistência, autoridade, melhor presença digital | [ADAPTAR] |
| CTA | Entre em contato com a Quantum | [USAR] |

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

**`/portfolio`** — listagem de cases. Filtro por tipo (Sites especializados / Sob medida / Padronização) só se houver cases suficientes. [PROPOSTA DE ORGANIZAÇÃO]

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

- **URLs a preservar / redirecionamentos:** nenhum. Projeto sem site anterior.
- **Domínio:** [INFORMAÇÃO A DEFINIR].
- **URLs novas (Fase 1):** `/`, `/sites-para-hospedagem`, `/sites-para-saude`, `/solucoes-sob-medida`, `/padronizacao-digital`, `/contato`, `/politica-de-privacidade` (condicional). Slugs em português, curtos, descritivos e estáveis — definidos agora para não mudarem depois.
- **Fase 2:** `/portfolio` e `/portfolio/[slug]`. Até lá, não publicar a rota vazia.
- **Um H1 por página:** Home = título da Hero; internas = H1 do problema/segmento.
- **Titles e descriptions:** não existem. [CONTEÚDO NOVO NECESSÁRIO] para todas as páginas, usando o nome oficial "Quantum Soluções Digitais".
- **Sem duplicação:** processo completo só na Home; lista completa de exemplos só em `/solucoes-sob-medida`; demais lugares apenas resumem e linkam.
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
| Fotos institucionais / equipe | — | Não existem e não são necessárias (fundadores não são foco). |
| Imagens de portfólio | [INFORMAÇÃO A DEFINIR] | Dependem dos cases (Fase 2). |
| Imagens em `bernardowainer.com.br/` (referência Index1) | [SUBSTITUIR] | Material de terceiro, apenas referência de lógica comercial. Não usar no site. |
| Imagens em `portfolio-showcase-20261006223850/` | [SUBSTITUIR] | Não identificadas no briefing como ativos da Quantum. Não usar sem confirmação. |
| `ds1.html`, `ds2.html`, `ds3.html` | — | Referências visuais para a próxima etapa (ds3 = Hero, ds2 = restante; ds1 não citado no briefing). Não são ativos de conteúdo e não foram usados aqui. |

Vídeos e documentos: nenhum identificado.

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
7. Copy das quatro páginas de solução (problema, impacto, solução, resultado por segmento/pilar).
8. Texto institucional final da seção Sobre.
9. Página de Padronização: mencionar explicitamente o que não é feito (logo, branding, rebranding) ou não.
10. Páginas de segmento: podem citar exemplos sob medida (cardápio digital em hospedagem; acompanhamento de pacientes e controle de reabilitação em saúde)?
11. Página de saúde: mencionar ou não regras de publicidade dos conselhos profissionais.
12. Funcionalidades específicas para hospedagem (reservas, integrações) — só incluir se a Quantum oferecer.

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
