# MiniSpades — Browser Beta Release

MiniSpades is a single-human partnership Spades game, with three computer players. The root `index.html` is self-contained and can be opened locally.

## CI and publishing
- On every PR, `MiniSpades smoke and syntax` checks the game structure, full-hand flow, bidding, and computer strategy.
- On a merge to `main`, `Publish MiniSpades browser beta` runs the same checks and attempts deployment to GitHub Pages.
- Intended URL (only after deployment succeeds): https://dbpimg.github.io/minispades/

**Repository visibility warning:** As of this sprint the GitHub repository is **private**. GitHub Pages hosting for private repos is plan- and settings-dependent. If the Pages workflow fails to initialize, navigate to Settings → Pages, select **GitHub Actions** as the build source, and confirm this private repository is eligible to publish. Do not make the repository public without choosing to do so explicitly. A workflow file alone does not guarantee a publicly accessible URL.

## First-device verification
- Open a fresh browser session, bid 3, and play a full 13-trick hand.
- Confirm North plays automatically as partner, West and East as opponents, and card buttons re-enable for South turns.
- Confirm lead rotation South → West → North → East on successive hands.
- Test the How to Play toggle, sorting, audio preference and mobile landscape/portrait layouts.
- Reload during bidding, during your turn and while a computer player is acting to confirm local saved-game restoration.
- Verify Nil scores, bag accumulation/penalty, and match-to-500 completion.
- Record actual gameplay screenshots before sharing public marketing graphics.

Do not present the game as YouTube-approved while developer upload access remains waitlisted.
