---
title: TAILor
meta_title: "Knot RockIT PsyAnts - TAILor"
description: "TAILor schreibt das TAIL-Label in einem Schritt sichtbar auf dein Bild und maschinenlesbar in die Datei - direkt per Rechtsklick im Kontextmenü, ohne zusätzliches Fenster. So erfüllst du die Kennzeichnungspflicht des EU AI Act (Artikel 50) differenziert in fünf Stufen."
date: 2026-10-01T07:00:00.000Z
image: "/images/webhead_tailor_1200x500.webp"
categories:
  - Projects
author: ""
tags: []
draft: false
teaser: "TAILor schreibt das TAIL-Label in einem Schritt sichtbar auf dein Bild und maschinenlesbar in die Datei - direkt per Rechtsklick im Kontextmenü, ohne zusätzliches Fenster. So erfüllst du die Kennzeichnungspflicht des EU AI Act (Artikel 50) differenziert in fünf Stufen."
---
##### Das Werkzeug hinter dem Label

TAILor ist ein Kommandozeilenwerkzeug, das den [TAIL-Standard](/blog/principles-tail) in deine Bilddateien schreibt. Es vereint zwei Dinge in einem Schritt: ein sichtbares TAIL-Label auf dem Bild und die maschinenlesbaren Herkunftsinformationen in der Datei. Du rufst TAILor auf, und beides ist gesetzt.

Das Werkzeug kommt ohne eigene Oberfläche aus. Du bindest es in dein bestehendes Arbeitsumfeld ein – über ein Skript in deiner Produktionskette oder direkt im Kontextmenü deiner Bilddateien. Ein Rechtsklick, die Stufe wählen, fertig. Kein zusätzliches Fenster, kein Umweg.

![Platzhalterbild - Zwei Ebenen in einer Datei](/images/filler_07.webp)

##### Zwei Ebenen in einer Datei

TAILor schreibt die Entstehungsgeschichte eines Bildes auf zwei Ebenen. Die erste ist das visuelle Wasserzeichen: das TAIL-Symbol, das Betrachter:innen sofort erkennen. Die zweite Ebene steckt in den Metadaten und arbeitet mit zwei Feldern, die sich ergänzen.

Das eine Feld ist `DigitalSourceType` aus dem IPTC Photo Metadata Standard. Dieser Standard wird seit Jahrzehnten von Fotoagenturen, Nachrichtenredaktionen und Bildarchiven genutzt; Meta, Google und Adobe erkennen ihn an. Technisch liegt dieser Wert im XMP-Header der Datei. XMP ist dabei der Behälter, der festlegt, wie Metadaten abgelegt werden, und IPTC liefert die Inhalte, die darin stehen. Wenn TAILor `DigitalSourceType` schreibt, bettet es ein IPTC-Feld in den XMP-Rahmen ein.

Das zweite Feld ist dein eigener TAIL-Tag `tail:aiLevel`. Er trägt die genaue Stufe als Zahl.

![Platzhalterbild - Warum zwei Felder](/images/filler_18.webp)

##### Warum zwei Felder

Die IPTC-Liste ist feiner als eine bloße Ja-oder-nein-Angabe, doch sie kennt für Mischformen nur einen einzigen Wert: `compositeWithTrainedAlgorithmicMedia`. Ob eine KI 40 Prozent oder 90 Prozent eines Bildes geliefert hat, unterscheidet sie nicht. Genau diese Nuance ist TAIL wichtig. Mit dem eigenen Tag `tail:aiLevel` bewahrst du sie, während das IPTC-Feld die breite Verständlichkeit sichert.

Die Aufteilung folgt einem klaren Prinzip: Menschliche Klarheit vorne, technische Präzision hinten. Deine fünf TAIL-Stufen bleiben ein einfacher Kompass für Menschen. Im Hintergrund übersetzt TAILor die gewählte Stufe in die passende technische Kodierung.

| TAIL-Stufe | IPTC-Wert `DigitalSourceType` | Eigener Tag `tail:aiLevel` |
| - | - | - |
| Stufe 0 - Keine KI | `digitalCapture` | 0 |
| Stufe 1 - KI als Inspiration | `notApplied` | 1 |
| Stufe 2 - KI als Teilbeitrag | `compositeWithTrainedAlgorithmicMedia` | 2 |
| Stufe 3 - KI als Hauptbeitrag | `compositeWithTrainedAlgorithmicMedia` | 3 |
| Stufe 4 - Vollständig KI | `trainedAlgorithmicMedia` | 4 |

![Platzhalterbild - Filterung durch Metadaten](/images/filler_06.webp)

##### Filterung durch Metadaten

Eine Browsererweiterung kann diese Metadaten lesen und Bilder ab einer von dir gewählten KI-Stufe ausblenden. Sie prüft zuerst `tail:aiLevel` und filtert dann nach deiner genauen Stufe. Ist dieser Tag nicht gesetzt, aber ein `DigitalSourceType` vorhanden, ordnet sie dessen Wert grob zu. Fehlt beides, greift deine Regel für Bilder unbekannter Herkunft.

Damit funktioniert der Filter auch bei Bildern, die TAILor nie gesehen haben. Am präzisesten arbeitet er dort, wo TAILor am Werk war. Wer Stufe 3 und 4 meiden möchte, tut das ohne manuelles Prüfen. Die Datei trägt ihre Entstehungsgeschichte in sich, und die Erweiterung filtert danach.

Das ist ein Ansatz, der bei dir beginnt: Du entscheidest, was du sehen möchtest. TAILor liefert die Datenbasis dafür, auf offenen Standards und mit einer eigenen Erweiterung für die Details.

![Platzhalterbild - Einordnung](/images/filler_12.webp)

##### Einordnung

TAILor setzt den TAIL-Standard technisch um. Das Label erklärt die fünf Stufen und ihre Bedeutung, TAILor sorgt dafür, dass sie in deiner Arbeit ankommen. Du gestaltest, du wählst die passende Stufe, und TAILor schreibt sie sichtbar und lesbar in die Datei. Deine Bilder sind heute schon kompatibel mit den Systemen von morgen.

![Platzhalterbild - Umsetzung der Kennzeichnungspflicht](/images/filler_09.webp)

##### Umsetzung der Kennzeichnungspflicht

Der EU AI Act fordert eine doppelte Absicherung: eine für Menschen sichtbare Kennzeichnung und eine maschinenlesbare Markierung in der Datei. TAILor setzt genau diese Kombination in einem Schritt um. Das visuelle TAIL-Logo erfüllt die menschliche Lesbarkeit, die IPTC- und TAIL-Metadaten erfüllen die technische Pflicht. Während die freiwilligen Icons der EU-Kommission eine pauschale Kennzeichnung vorsehen, liefert TAILor die differenzierte Stufe der Beteiligung mit. Du erfüllst damit die Vorgaben von Artikel 50 und schaffst eine Transparenz, die über das gesetzliche Minimum hinausgeht. Für die maschinenlesbare Markierung, deren Frist am 2. Dezember 2026 ausläuft, bist du mit TAILor bereits vorbereitet.
