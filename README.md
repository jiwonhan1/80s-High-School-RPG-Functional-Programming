# 80s High School RPG

## By Andrew Philpott, Steven Fleming, Jose Amesquita and Jiwon Han 
Last updated April 16, 2020.

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)
![LastCommit](https://img.shields.io/github/last-commit/Andrew-Philpott/80s-rpg-game)
![Languages](https://img.shields.io/github/languages/top/Andrew-Philpott/80s-rpg-game)
[![MIT license](https://img.shields.io/badge/License-MIT-orange.svg)](https://lbesson.mit-license.org/)

#### 4/15/20 Work at Home Summary

- Design characters in game and test specifications

#### 4/16/20 Work at Home Summary

- test game mechanism with different character specs

## Description

A 80's RPG game that nerd, jock and prep character fight each other. Each character has their own special skills. If one character outnumbers other character's skill, that character wins!

## Specifications

## SPECS

| spec behavior                                                                | input                            | output                          |
| :--------------------------------------------------------------------------- | :------------------------------- | :------------------------------ |
| this                                                                         | that                             | the other                       |
| compare atheleticism between two Characters and return winner                | Nerd v Jock                      | Jock wins                       |
| compare cool between two Characters and return winner                        | Nerd v Jock                      | Jock wins                       |
| compare knowledge between two Characters and return winner                   | Nerd v Jock                      | Nerd wins                       |
| compare knowledge between two Characters of the same level and return winner | Nerd v Nerd                      | Nerds tie                       |
| winning Characters increase their level 2                                    | Vitality: 10 => W                | Vitality: 12                    |
| losing Characters decrease their level                                       | Vitality: 10 => L                | Vitality: 9                     |
| If they tie, they both lose a level                                          | Vitality P1: 10, Vitality P2: 10 | Vitality P1: 11, Vitality P2:11 |

## Setup/Installation Requirements

- Clone this [repository](https://github.com/Andrew-Philpott/80s-rpg-game.git)

## Known Bugs

No known bugs at this time.

## Support and contact details

Email jiwon1.han@gmail.com with any questions, feedbacks, or concerns.

## Technologies Used

- Webpack
- Node.js

### License

This console application is licensed under the MIT license.

Copyright (c) 2020 **Andrew Philpott, Steven Fleming, Jose Amesquita and Jiwon Han**
