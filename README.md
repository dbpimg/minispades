# Jack Of Spades Marketing Games — MiniSpades Solo

A free, browser-only single-player partnership Spades game: **South is you**, and **North, East and West are computer-controlled**. No second human, networking, login or payment is required.

## Play locally
Open `index.html` in a modern browser. A single HTML file provides the game UI and rules. GitHub Pages publication has **not yet** been configured or verified.

## Solo gameplay
- All 52 cards are dealt into four 13-card hands. You choose South's bid; the computer provides the other three bids.
- You play only South's cards. The three computer players automatically handle their decisions.
- Follow suit if possible. Spades are trump and cannot be led until broken, unless a hand contains only spades.
- The current hand finishes after 13 tricks. North/South and East/West earn contract points; extra tricks count toward bags and 10 bags impose a 100-point penalty.
- Play successive hands or start a new match. This is a quick-play Spades variant until complete bidding, nil and standard match-end rules are implemented.

## Deluxe table sprint
- Deep emerald felt table, wood trim and card shadows
- Face-up human cards with corner suits, layered blue-backed computer cards
- Automatic computer turns and table-card feedback
- Optional short sound tones (initially off), hand sorting by suit or rank
- Responsive horizontal hand scrolling and reduced-motion preference
- GitHub Actions JavaScript syntax and structure smoke checks

## Planned before public beta
1. Standard dealer/bidding rotation and nil scoring; formal score-to-500 match victory.
2. Full-turn integration tests, automated game simulations, trick visibility and scoring regression tests.
3. Persistent local game state and interrupted-AI recovery.
4. Richer AI for partner coordination, gameplay tutorials and accessibility.
5. GitHub Pages beta release and browser/device testing.
6. Dedicated YouTube Playables adapter and ZIP if/when developer access is granted.

This is a **solo MVP prototype**, not an officially tested or YouTube-certified game. No real-money wagering.
