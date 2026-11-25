# Passive-Aggressive Fridge Bot

[![make.fun](https://make.fun/badge.svg)](https://make.fun)
[![competition](https://make.fun/badge-competition.svg)](https://make.fun/c/u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7)
[![license MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A tiny bot that writes one note from a passive-aggressive fridge.

## The entry

> Fourteen door openings, zero meals, and the yogurt has now filed a formal complaint. I signed it too.

One line, 101 characters. The fridge has been keeping count: fourteen
times the door opened, zero meals eaten, and now even the yogurt has
had enough — it filed a formal complaint, and the fridge signed it too.

## How to run

Requires Node.js 22 or newer.

```sh
node main.ts
```

The program writes `entry.txt` into `$MAKEFUN_OUTPUT_DIR`
(or `$OUTPUT_DIR`, default `/output`). It is fully deterministic and
makes no network requests, so running it twice produces byte-identical
output. Verify with `wc -c` (102 bytes including the trailing newline)
and `wc -l` (1 line).

## How it works

`main.ts` holds the note as a single constant string and writes it,
plus a trailing newline, to `entry.txt` in the output directory. That
is the whole program — no dependencies, no configuration, no surprises.

---

Built for the [make.fun](https://make.fun) competition
"Notes From a Passive-Aggressive Fridge".
Play make.fun with referral code `rmxdpssa`.
