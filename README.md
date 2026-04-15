# Electoral Systems Research — Website:

For full run-through, visit tejaskashyaprsrch.github.io/pwebsite/

For files, full research: https://github.com/tejaskashyaprsrch/allElectionModelingRsrch

A static research website for computational electoral modeling work.

## Structure

```
election-research/
├── index.html              # Homepage
├── research.html           # Research findings & methodology
├── simulations.html        # Simulation documentation
├── future.html             # Future directions
├── contact.html            # Contact & links
│
├── css/
│   └── style.css           # All styles (dark theme)
│
├── js/
│   └── main.js             # Mobile nav + scroll animations
│
├── assets/                 # Images — add your charts here
│   ├── chart-optimal.png   # From claudeElectionModel.py output
│   └── chart-voter-dist.png # From voterThirdPartySim.py output
│
└── content/                # Fill-in text files — write your content here
    ├── 01_homepage.txt
    ├── 02_research.txt
    ├── 03_simulations.txt
    ├── 04_future_work.txt
    └── 05_contact.txt
```

## Getting Started

### 1. Write your content

Open each file in `content/` and fill in the sections.
Then paste your text into the matching HTML element (identified by `id="..."`).

Replace `<!-- CONTENT: ... -->` comments with your actual text.

### 2. Add your charts

Save your matplotlib output images as:
- `assets/chart-optimal.png` — the Collective Alienation vs. Party Count chart
- `assets/chart-voter-dist.png` — the Voter Distribution scatter plot

To save from matplotlib, add before `plt.show()`:
```python
plt.savefig("chart-optimal.png", dpi=150, bbox_inches="tight", 
            facecolor="#0d0e10", edgecolor="none")
```

### 3. Update links

In every HTML file, update:
- Footer `id="footer-name"` → your name
- Footer `id="footer-github"` href → your GitHub URL
- Contact page email, GitHub, LinkedIn hrefs

### 4. Deploy

**GitHub Pages** (simplest):
1. Push this folder to a GitHub repo
2. Go to Settings → Pages → Source: main branch / root
3. Your site will be at `https://yourusername.github.io/repo-name/`

**Netlify** (also easy):
1. Drag-and-drop the folder at netlify.com/drop
2. Or connect your GitHub repo for auto-deploy

---

## Simulation Files

| File | Description |
|------|-------------|
| `voterSim.py` | Two-party US election simulation |
| `voterThirdPartySim.py` | Two-party + adaptive third party |
| `claudeElectionModel.py` | Multi-party optimal count finder |
| `voterMultiPartyExample.py` | Multi-party example |

---

Built with plain HTML/CSS/JS. No frameworks, no dependencies, no build step.
