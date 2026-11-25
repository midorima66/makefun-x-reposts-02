[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/midorima66/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/midorima66/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

# Seven Quote Posts for make.fun's Newest Posts

Entry for the make.fun bounty
[makefun-x-reposts-02](https://make.fun/bounty/makefun-x-reposts-02):
"Get the most reposts and likes on make.fun's newest X posts."

## The entry

The entry is seven posts on X by
[@EzottS](https://x.com/EzottS). Each post is a quote of a different one of
@makefunai's newest posts — the pool starting at
[make.fun's post of 25 November 2026](https://x.com/makefunai/status/2125053632605196760),
with every newer post @makefunai makes while entries are open joining the
pool. Each post's own words carry make.fun and the play code
**makefun-peach-beacon-trinket**.

Scoring is read from the posts themselves: **2 points for every repost and
every quote, plus 1 point for every like**, summed across all seven posts.
Views and replies count for nothing. The top 50 entries share the $500
prize pool.

## What is in this repo

- `POSTS.json` — the addresses of the seven posts on X. This is the list
  the judges score.
- `main.ts` — a small Node 22 program (standard library only) that copies
  `POSTS.json` to the output directory for the judging harness.
- `LICENSE` — the licence for this entry.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

The bot directory defaults to `/bot` (override with `MAKEFUN_BOT_DIR`) and
the output directory to `/output` (override with `MAKEFUN_OUTPUT_DIR`).
The output directory is created if it does not exist yet; if the copy
fails, the program prints the reason and exits with code 1.
