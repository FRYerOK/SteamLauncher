# SteamLauncher (ALPHA)

A totally free Steam clone :smile:

[forum cs.rin.ru support](https://cs.rin.ru/forum/viewtopic.php?f=20&t=116801)

<img src="https://raw.githubusercontent.com/Sak32009/SteamLauncher/main/screenshots/screenshot_main.png" alt="screenshot-main" width="400">

## Donate

> **Protect development and free things -- because their survival is in our hands.**
>
> **You can donate by clicking on [paypal.me](https://www.paypal.me/sak32009a).**

## Introduction

_SteamLauncher_ is a Windows application that offers the same capabilities as Steam but completely free.

Instead of manually configuring each game, _SteamLauncher_ automatically performs all operations for **Mr. Goldberg's Steam emulator**.

For more information on the emulator: [gitlab](https://gitlab.com/Mr_Goldberg/goldberg_emulator) [cs.rin.ru](https://cs.rin.ru/forum/viewtopic.php?f=29&t=91627)

## Installation

_SteamLauncher_ comes in two variants:

- Portable _(to carry in your pocket)_
- Installable _(recommended for extra features that portable doesn't offer)_

Download the latest version of the _SteamLauncher_ from the GitHub releases page.

To update _SteamLauncher_, simply download the new version from the GitHub releases page, and run the installer or replace the portable folder. In the future I may add auto-updating feature.

## Small description of usage

When the application starts, you will be asked to create the account. Once created, by going to the application folder, a folder named "data" was automatically created and inside there is another folder "emulator".

Now download the latest release of Mr. Goldberg's emulator, extract the files from the "experimental_steamclient" folder to the "emulator" folder previously seen.

To add a game, simply drag the game executable to the main page of the application in the appropriate section, fill in the data and right-click on the game card to open the context menu and click on "Launch".

**For a proper start, please use the original steam_api(64).dll**

## Supported emulator features

- Set enable/disable overlay
- Set online/offline mode
- Set language
- Set listen port
- DLCs

## Unsupported Steam features

- **Bypass any DRM (Denuvo, SteamStub, SteamCEG, etc.) within the game.**

## TODO

The first item in the list has priority.

- **The SteamLauncher code is sadly worse than a child's drawing of a tree.**

## FAQ

### I can't find a way to add/delete game dlcs. How you do it?

There is currently no way to do this, when you add/edit the selected game, the dlcs list is automatically extracted from steamdb.

### I can't find a way to update dlcs of the game. How you do it?

For the moment you can update the dlcs by opening the game editing screen and pressing "Save" even without modifying the data.

### I can't find a way to edit steamid. How you do it?

When you create the account, the steamid is assigned automatically. There is no way to change it for now.

## Troubleshoots

### A new dlc was added 2 minutes ago in steamdb but when i modify the game, it is not activated in game.

From the moment of the last request, an hour must pass to be able to make another one.

**It's better to prevent another message from the steamdb author.**

## Legal

> _SteamLauncher_ is released under the following license: [MIT](https://github.com/Sak32009/SteamLauncher/blob/main/LICENSE)
>
> _SteamLauncher_ isn't intended for malicious use or for the use of obtaining or playing games illegally.
>
> _SteamLauncher_ should only be used on games that you legally purchased and own.
>
> _SteamLauncher_ isn't associated with Valve or any of its partners / affiliates.
>
> _SteamLauncher_ doesn't have code taken from Valve or any of its partners / affiliates.
>
> Use _SteamLauncher_ at your own risk.
>
> I'm not responsible for what happens while using _SteamLauncher_. You take full responsibility for any outcome that happens to you while using this application.
