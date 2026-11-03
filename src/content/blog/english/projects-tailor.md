---
title: TAILor
meta_title: "Knot RockIT PsyAnts - TAILor"
description: "TAILor writes the TAIL label into your image files in a single step - visible on the picture and machine-readable in the metadata, straight from the right-click menu. You thus meet the EU AI Act’s labelling requirement (Article 50) across five nuanced levels instead of with a blanket label."
date: 2026-10-01T07:00:00.000Z
image: "/images/webhead_tailor_1200x500.webp"
categories:
  - Projects
author: ""
tags: []
draft: false
teaser: "TAILor writes the TAIL label into your image files in a single step - visible on the picture and machine-readable in the metadata, straight from the right-click menu. You thus meet the EU AI Act’s labelling requirement (Article 50) across five nuanced levels instead of with a blanket label."
---
##### The tool behind the label

TAILor is a command-line tool that writes the [TAIL standard](/blog/principles-tail) into your image files. It combines two things in a single step: a visible TAIL label on the image and machine-readable provenance information within the file. You run TAILor, and both are set.

The tool doesn’t require its own user interface. You integrate it into your existing workflow – via a script in your production pipeline or directly via the context menu of your image files. A right-click, select the level, and you’re done. No extra window, no detours.

![Placeholder image - Two layers in a single file](/images/filler_07.webp)

##### Two layers in a single file

TAILor records the history of an image across two layers. The first is the visual watermark: the TAIL symbol, which viewers recognise immediately. The second layer is embedded in the metadata and utilises two fields that complement one another.

One field is `DigitalSourceType` from the IPTC Photo Metadata Standard. This standard has been used for decades by photo agencies, newsrooms and image archives; Meta, Google and Adobe recognise it. Technically, this value is located in the file’s XMP header. XMP is the container that defines how metadata is stored, whilst IPTC provides the content contained within it. When TAILor writes the `DigitalSourceType`, it embeds an IPTC field within the XMP framework.

The second field is your own TAIL tag, `tail:aiLevel`. It contains the exact level as a number.

![Placeholder image - Why two fields](/images/filler_18.webp)

##### Why two fields

The IPTC list is more detailed than a simple ‘yes’ or ‘no’ indication, yet it recognises only a single value for hybrid forms: `compositeWithTrainedAlgorithmicMedia`. It does not distinguish between whether an AI has generated 40 per cent or 90 per cent of an image. It is precisely this nuance that is important to TAIL. With TAIL’s own tag, `tail:aiLevel`, you preserve this nuance, whilst the IPTC field ensures broad comprehensibility.

The division follows a clear principle: human clarity first, technical precision second. Your five TAIL levels remain a simple guide for people. Behind the scenes, TAILor translates the selected level into the appropriate technical encoding.

| TAIL-level | IPTC-Value `DigitalSourceType` | Our own tag `tail:aiLevel` |
| - | - | - |
| Level 0 - No AI | `digitalCapture` | 0 |
| Level 1 - AI as inspiration | `notApplied` | 1 |
| Level 2 - AI as a partial contribution | `compositeWithTrainedAlgorithmicMedia` | 2 |
| Level 3 - AI as the main contributor | `compositeWithTrainedAlgorithmicMedia` | 3 |
| Level 4 - Entirely AI-generated | `trainedAlgorithmicMedia` | 4 |

![Placeholder image - Filtering via metadata](/images/filler_06.webp)

##### Filtering via metadata

A browser extension can read this metadata and hide images from an AI level of your choice upwards. It first checks for `tail:aiLevel` and then filters according to your exact level. If this tag is not set but a `DigitalSourceType` is present, it makes a rough assignment based on its value. If both are missing, your rule for images of unknown origin applies.

This means the filter also works for images that TAILor has never seen before. It works most accurately where TAILor has been at work. Anyone wishing to avoid levels 3 and 4 can do so without manual checking. The file carries its own history, and the extension filters accordingly.

This is an approach that starts with you: you decide what you want to see. TAILor provides the underlying data, based on open standards and with its own extension for the finer details.

![Placeholder image - Overview](/images/filler_12.webp)

##### Overview

TAILor implements the TAIL standard technically. The label explains the five levels and what they mean; TAILor ensures that they are incorporated into your work. You design, you choose the appropriate level, and TAILor embeds it clearly and legibly into the file. Your images are already compatible with tomorrow’s systems.

![Placeholder image - Implementation of the labelling requirement](/images/filler_09.webp)

##### Implementation of the labelling requirement

The EU AI Act requires a two-fold safeguard: a label visible to humans and a machine-readable tag within the file. TAILor implements precisely this combination in a single step. The visual TAIL logo ensures human readability, whilst the IPTC and TAIL metadata fulfil the technical requirement. Whilst the European Commission’s voluntary icons provide for a blanket labelling approach, TAILor offers a more nuanced level of compliance. You thereby meet the requirements of Article 50 and achieve a level of transparency that goes beyond the legal minimum. As for the machine-readable marker, for which the deadline expires on 2 December 2026, you are already prepared with TAILor.
