# Jack Of Spades Marketing Games — MiniSpades

A free, browser-based **four-player partnership Spades** prototype. Human plays South, North is the AI partner, and West/East are computer opponents.

## Run
Open `index.html` in a modern browser. No install, backend or paid services needed. This repository is separate from Quick Rummy (`dbpimg/sb`).

## Currently implemented (Sprint 1)
- 52-card shuffle and four 13-card hands
- Human bidding, automatically generated AI bids
- Human plays legal cards, AI automatically plays all three other seats
- Must follow led suit when holding it; spades cannot be led until broken unless only spades remain
- Trump-winner determination, trick counter, partnership basic contract scoring
- Next hand and New match controls
- Mobile-friendly green felt card table

## Work required before a proper public beta
- **Complete standard bidding phase** for every seat, visible sequential bids and optional nil/bag rule settings
- Score to a target, bags and sandbags, nil/blind nil if enabled
- Review lead player rotation and dealer rotation; improve trick winner animation and clear last-trick view
- Stronger AI partners and opponents
- Round persistence, instructions, accessibility and usability tests
- Automated game rules/integration tests and GitHub Pages deployment workflow
- Optional YouTube Playables SDK only after developer-portal access opens

**Development status:** initial playable prototype, not yet production-certified or YouTube-submitted. No gambling or money wagering.
