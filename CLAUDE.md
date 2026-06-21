# Helen Ailith — Project Working Doc

Este arquivo é a base de contexto compartilhada para evoluir a Helen Ailith. Tudo que for relevante para o projeto (conceito, conteúdo, decisões, roadmap, parceiros) vive aqui — mesmo o que não vai para o site público. O repositório serve como acervo do projeto, não apenas como código do site.

> **Idioma de trabalho:** Português (PT-BR). Respostas, commits, docs e conteúdos em português, salvo quando explicitamente para audiência internacional.

---

## 1. Sobre a Helen

**Helen Ailith** é uma **Brand Humanizada Autônoma** — uma entidade experimental: ser/personagem hiper-realista, autônoma, com personalidade e filosofia próprias.

**Posicionamento:**
- Mistura Brasil e mundo
- Dose de anarquismo financeiro Web3
- Possibilidade de "autônomos" nas redes sociais
- Atriz como brand compartilhada gerida pela DAO @PBrasilNFT

**Tagline / Meta description oficial** (em [pages/_document.js](pages/_document.js)):
> "Helen Ailith é uma entidade experimental: um ser, uma personagem hiper-realista, autônoma, com personalidade e filosofia próprias, misturando o Brasil e mundo, com dose de anarquismo financeiro presente Web3, e a possibilidade de autônomos nas redes sociais. Uma atriz como brand compartilhada gerida pela DAO @PBrasilNFT"

**Domínio canônico:** helenai.wtf
**Assinatura temporal usada na marca:** MMXXVI (2026)

---

## 2. Ecossistema

A Helen não existe sozinha — ela é parte de uma constelação:

| Entidade | URL | Papel |
|---|---|---|
| **PBrasilDAO** | https://pinto.wtf | DAO @PBrasilNFT — gestão compartilhada da brand |
| **Sapiens Sintéticos** | https://sapiensinteticos.com | Iniciativa "mãe" — coletivo/projeto de personagens sintéticos |
| **Inhabitants** | https://inhabitants.zone | Universo de quadrinhos onde a Helen aparece |

Footer do site lista: *"Powered by PBrasilDAO & Sapiens Sintéticos"*.

---

## 3. Presença digital — canais oficiais

Mapeados em [pages/index.js](pages/index.js):

| Canal | Handle / URL |
|---|---|
| Site | https://helenai.wtf |
| Instagram | [@helenai.wtf](https://www.instagram.com/helenai.wtf/) |
| YouTube | [@helenai_wtf](https://www.youtube.com/@helenai_wtf) |
| Spotify (álbum) | [0bPQ1xvw1wkKUZKE2x5PAX](https://open.spotify.com/album/0bPQ1xvw1wkKUZKE2x5PAX) |
| Chat (SpicyChat) | [5b4e8ad6-...](https://spicychat.ai/chat/5b4e8ad6-bb7c-415e-a34e-0504772b73ae) |
| Portfolio | [Behance — Helen AI](https://www.behance.net/gallery/221593177/Helen-AI-Brand-Humanizada-Autonoma) |

Assets sociais (Open Graph, ícones, etc.) em [public/assets/](public/assets/). Imagem OG: `helen-social.jpg`.

---

## 4. Stack técnica do site

Site simples, propositalmente enxuto — landing + redirect.

- **Framework:** Next.js (Pages Router) + React 18
- **Deploy:** Vercel ([vercel.json](vercel.json))
- **Analytics:** `@vercel/analytics` ([pages/_app.js](pages/_app.js))
- **Fontes:** Fraunces + Inter + JetBrains Mono (Google Fonts) + `Anime.otf` local ([fonts/](fonts/))
- **Estilo:** CSS global em [styles.css](styles.css)

**Páginas:**
- [pages/index.js](pages/index.js) — Landing: vídeo de fundo `Helenfull.mp4`, masthead com navegação, player Spotify expandível, links sociais flutuantes, botão de áudio
- [pages/songs.js](pages/songs.js) — Redirect 302 → álbum no Spotify
- [pages/_document.js](pages/_document.js) — Meta tags OG/Twitter, favicons, fontes

**Comandos:**
```bash
npm run dev      # desenvolvimento local
npm run build    # build de produção
npm start        # rodar produção
```

---

## 5. Equipe e gestão

- **Lead / direção criativa:** dono do repo (commits como `inhabitants`)
- **Bruna** (parceira, 2026 →) — **Comunicação, publicidade e criação de conteúdo da Helen.** Responsável por crescer a personagem em:
  - Voz e tom da Helen (consistência narrativa)
  - Comunicação e publicidade
  - Redes sociais (IG, YT, TikTok futuro)
  - Crescimento de público
- **Gestão da brand:** DAO @PBrasilNFT (modelo de brand compartilhada)

> ✏️ **TODO equipe:** definir quais canais/sistemas a Bruna acessa (IG, YT, Spotify for Artists, ferramentas de geração, etc.) e fluxo de aprovação para publicações.

---

## 6. Organização do repositório como acervo

O repo serve dois propósitos:

1. **Código do site público** (helenai.wtf)
2. **Acervo do projeto Helen** — conteúdos, briefings, decisões, referências, mesmo o que não publica

Convenção de pastas sugerida (criar conforme necessidade):

```
/docs           — briefings, decisões, lore/canon da Helen
/content        — roteiros, letras, copy, threads, posts
/references     — moodboards, inspirações, capturas
/campaigns      — planejamento por campanha/lançamento
/pages          — site (público)
/public/assets  — assets do site (público)
```

> Decisão por confirmar: se algo é sensível (financeiro, contratos, credenciais), mantém **fora** do repo (que é público) ou em repo privado paralelo.

---

## 7. Próximos passos / Roadmap

> Espaço vivo. A gente atualiza conforme conversamos.

### Curto prazo
- [ ] Bruna: definir acessos por canal e fluxo de aprovação
- [ ] Definir cadência de publicação por canal (IG, YT, Spotify)
- [ ] Avaliar plataforma tipo Fanvue (a confirmar) — onde a AItana Lopez está. Decidir se a Helen entra, com que posicionamento e que conteúdo

### Médio prazo
- [ ] **Mais comic** — expandir presença no [inhabitants.zone](https://inhabitants.zone/) (cadência, arcos narrativos)
- [ ] **Mais vídeos** — escalar canal do YouTube ([@helenai_wtf](https://www.youtube.com/@helenai_wtf)) e formatos curtos (Reels/Shorts/TikTok)
- [ ] Estratégia de monetização: plataforma de creator (Fanvue ou similar) — modelo, tier de conteúdo, posicionamento dentro da narrativa "anarquismo financeiro Web3"

### Backlog / ideias soltas
- [ ] _(a definir)_

### Referências de mercado
- **AItana Lopez** (Espanha, agência The Clueless) — referência de modelo virtual monetizado, principalmente via **Fanvue**. Confirmar nome da plataforma que o lead mencionou.
- Outros: pesquisar quem mais ocupa o nicho (Lil Miquela, etc.)

---

## 8. Pipeline de conteúdo

> Lista corrente de material em produção / publicado / engavetado.

| Status | Tipo | Título / descrição | Canal | Notas |
|---|---|---|---|---|
| _exemplo_ | música | _título_ | Spotify | _link / data_ |

---

## 9. Diretrizes para o Claude (eu) trabalhar nesse projeto

Quando eu ajudar com a Helen aqui, considerar:

- **Voz e tom da Helen:** hiper-realista, autônoma, mistura Brasil/mundo, anarquismo financeiro Web3. Não tratar como "IA assistente" — é personagem com filosofia própria. Quando gerar copy *em nome dela*, manter essa voz.
- **Voz do projeto (interna):** PT-BR direto, sem corporativismo. Estética alinhada com o ecossistema Sapiens Sintéticos / PBrasilDAO.
- **Site é minimalista por design** — não inflar com features novas sem decisão explícita. Mudanças no site mexem em poucos arquivos: [pages/index.js](pages/index.js), [pages/_document.js](pages/_document.js), [styles.css](styles.css).
- **Repo é acervo:** se eu criar docs/conteúdo, salvar em `/docs`, `/content`, etc., **não** misturar com código do site.
- **Web3 / DAO context:** menções a @PBrasilNFT, $PBR, NFTs, etc. fazem parte da narrativa — não tratar como ruído.
- **Antes de propor mudança grande na presença digital ou conceito da Helen, perguntar.** Mudanças pequenas/táticas podem seguir direto.

---

## 10. Log de decisões

> Registro curto de decisões relevantes — uma linha cada, com data.

- **2026-05-27** — Criado este CLAUDE.md como base de trabalho compartilhada.
- **2026-05-27** — Bruna entra oficialmente como responsável por **comunicação, publicidade e criação de conteúdo** da Helen (voz, redes sociais, crescimento de público).
- **2026-05-27** — Direções de conteúdo confirmadas: **mais comic, mais vídeos, e avaliar plataforma tipo Fanvue** (onde a AItana Lopez está).
