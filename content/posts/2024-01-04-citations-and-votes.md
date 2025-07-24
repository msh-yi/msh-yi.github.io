---
title: "Do we vote for papers that end up with more citations?"
date: 2024-01-04
section: chemistry
category: analysis
---

## Methods

Each year, we construct a "main list" of papers. From 1999 to 2016, the main list contained all papers from major chemistry journals that pertained to asymmetric chemistry. From 2017 onwards, the "main list" criterion has been expanded to include any papers in organic chemistry that are related to the group's research, notably including non-stereoselective reactions.

Each group member has five votes for papers from the main list to vouch for as their paper of the year. Eric tallies the votes and leads a discussion of papers that have at least two votes. One might wonder whether the number of votes a particular paper receives has some correlation with its "scientific impact." With Eric kindly sharing with me the main paper lists and votes data going back to 1999, we have a quantitative way to test this hypothesis!

We quantify "impact" using the number of citations a paper has received since it was published, as of Dec 2023. (Unfortunately metadata aggregators are quite protective of more granular data such as the yearly distribution of citations, and I was loath to jump through API paywalls and authentication hoops. :/)

The workflow here is simple: for all papers on the main list, we pull the number of times a paper has been cited. We then order the main list by number of citations. The _rank_ of a paper is its position on the reordered list: the most cited paper has rank 1, the second-most rank 2, and so on. Notice that the analysis/comparisons are self-contained within each year so we don't have to correct for how long a paper has been published (i.e. we don't compare/analyze pairs of papers from 2020 and 2003).

## Overall trends

***Do papers that receive more votes rank higher in number of citations?***

Across each year, we take every paper that received more than two votes and determine its rank by number of times cited. The cutoff for this plot has been set to papers that rank between 1 and 100; there are plenty more papers that received votes but that rank outside this window. As you can see below, papers that receive more votes very roughly rank higher, but this trend is weak. One way to read this plot is to focus on a single color (year) and track the evolution of dots of that color from lower to higher votes.

![](/posts/do-we-vote-for-papers-that-end-up-with-more-citations/rank_vs_votes.png)

A year-by-year breakdown is available [here](/posts/do-we-vote-for-papers-that-end-up-with-more-citations/rank_vs_votes_year.png).

So, more-voted-for papers are not necessarily more cited among papers that year. How about the correlation between number of votes and _number of citations_? Once again, one way to read this plot is to focus on a single color (year) and track the evolution of dots of that color from lower to higher votes.

![](/posts/do-we-vote-for-papers-that-end-up-with-more-citations/cites_vs_votes.png)

A year-by-year breakdown is available [here](/posts/do-we-vote-for-papers-that-end-up-with-more-citations/cites_vs_votes_year.png).

## A dive into the most-cited papers and the top vote-getter

Since it appears that the most-voted-for papers and those that end up receiving the most citations generally don't correlate, we'll take a dive into specific papers and see if we can learn anything. The following list is structured as follows:

**The top three most cited papers from the main list, followed by the top vote-getter if it’s not one of those three.** Each paper is accompanied by a brief blurb that is the opinion solely of the author.

### 1999

<a href="https://doi.org/10.1021/ja990088k" target="_blank">**Stereoselective Ring-Opening Polymerization of meso-Lactide: Synthesis of Syndiotactic Poly(lactic acid)**</a>\
**Coates** J. Am. Chem. Soc. 1999, 121, 16, 4072–4073\
(_#1, 448 citations, 4.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja990088k/asset/images/medium/ja990088kh00001.gif)

Schiff-base-complex-promoted syndiospecific ring-opening polymerization, forming the foundation for plenty of Geoff Coates' highly impactful early-2000s work. Structure and reactivity of the metal catalyst(s) certainly in line with our group's interests at the time.

<a href="https://doi.org/10.1021/ol990623l" target="_blank">**Enantioselective Synthesis of α-Amino Nitriles from N-Benzhydryl Imines and HCN with a Chiral Bicyclic Guanidine as Catalyst**</a>\
**Corey** Org. Lett. 1999, 1, 1, 157–160\
(_#2, 441 citations, 0.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ol990623l/asset/images/medium/ol990623ln00001.gif)

Catalytic enantioselective Strecker AND with chiral guanidiniums! Still cited today by the likes of Dixon and Choon-Hong Tan. Surprising that this didn't get any votes considering our interest in the Strecker reaction.

<a href="https://doi.org/10.1021/ja984410n" target="_blank">**Polymer-Supported Chiral Co(Salen) Complexes: Synthetic Applications and Mechanistic Investigations in the Hydrolytic Kinetic Resolution of Terminal Epoxides**</a>\
**Jacobsen** J. Am. Chem. Soc. 1999, 121, 17, 4147–4154\
(_#3, 380 citations, 0.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja984410n/asset/images/medium/ja984410nh00001.gif)

Did not vote for our own papers, hence the zero votes.

<a href="https://doi.org/10.1002/(SICI)1521-3773(19991004)38:19<2909::AID-ANIE2909>3.0.CO;2-Y" target="_blank">**A Catalytic Enantioselective Electron Transfer Reaction: Titanocene-Catalyzed Enantioselective Formation of Radicals from meso-Epoxides**</a>\
**Gansäuer** ACIE 1999, 38, 2909–2910\
(_#52, 135 citations, 8.0 votes_)

The top vote-getter was "the first example of a transition-metal-catalyzed enantioselective formation of radicals." Instead of controlling nucleophile approach, the titanocene catalyst breaks preferentially one of two enantiotopic C–O bonds of the epoxide, resulting in ring-opening with 93% ee. Impressive demonstration of catalytic control over radical processes.

### 2000

<a href="https://doi.org/10.1021/ja994280y" target="_blank">**Proline-Catalyzed Direct Asymmetric Aldol Reactions**</a>\
**List** J. Am. Chem. Soc. 2000, 122, 10, 2395–2396\
(_#1, 2449 citations, 5.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja994280y/asset/images/medium/ja994280yf1.gif)

All three papers heralded a new wave of highly selective asymmetric organocatalysis and its branding as such. This one is a seminal report describing highly selective proline organocatalysis.

<a href="https://doi.org/10.1021/ja000092s" target="_blank">**New Strategies for Organic Catalysis: The First Highly Enantioselective Organocatalytic Diels–Alder Reaction**</a>\
**MacMillan** J. Am. Chem. Soc. 2000, 122, 17, 4243–4244\
(_#2, 1422 citations, 12.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja000092s/asset/images/medium/ja000092sh00001.gif)

The other seminal report describing highly selective organocatalysis. Interesting how this paper received quite a few more votes than the List paper.

<a href="https://doi.org/10.1021/ja001923x" target="_blank">**The Direct Catalytic Asymmetric Three-Component Mannich Reaction**</a>\
**List** J. Am. Chem. Soc. 2000, 122, 38, 9336–9337\
(_#3, 664 citations, 0.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja001923x/asset/images/medium/ja001923xh00001.gif)

Another proline organocatalysis paper, likely cited in the same breath as #1.

<a href="https://doi.org/10.1021/ja993838z" target="_blank">**Facile Enantioselective Synthesis of Propargylic Alcohols by Direct Addition of Terminal Alkynes to Aldehydes**</a>\
**Carreira** J. Am. Chem. Soc. 2000, 122, 8, 1806–1807\
(_#5, 540 citations, 14.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja993838z/asset/images/medium/ja993838zf2.gif)

Our top vote-getter is by any measure a highly impactful paper in asymmetric catalysis, but it shared a year with the organocatalysis papers.

### 2001

<a href="https://doi.org/10.1021/ja015717g" target="_blank">**New Strategies in Organic Catalysis: The First Enantioselective Organocatalytic Friedel–Crafts Alkylation**</a>\
**MacMIllan** J. Am. Chem. Soc. 2001, 123, 18, 4370–4371\
(_#4, 526 citations, 5.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja015717g/asset/images/medium/ja015717gf1.gif)

More LUMO-lowering organocatalysis, this time to enable Friedel-Crafts asymmetric alkylations.

<a href="https://doi.org/10.1021/ol0167006" target="_blank">**Catalytic Direct Asymmetric Michael Reactions: Taming Naked Aldehyde Donors**</a>\
**Barbas** Org. Lett. 2001, 3, 23, 3737–3740\
(_#5, 465 citations, 0.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ol0167006/asset/images/medium/ol0167006n00001.gif)

More classic enamine catalysis, of a Michael reaction

<a href="https://doi.org/10.1021/ja016378u" target="_blank">**A Simple, Mild, Catalytic, Enantioselective Addition of Terminal Acetylenes to Aldehydes**</a>\
**Carreira** J. Am. Chem. Soc. 2001, 123, 39, 9687–9688\
(_#6, 427 citations, 0.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja016378u/asset/images/medium/ja016378uf1.gif)

Follow-up to the Carreira study of 2000. Lack of votes probably arises from docking off novelty points.

<a href="https://doi.org/10.1021/ja0034747" target="_blank">**Reaction Microarrays: A Method for Rapidly Determining the Enantiomeric Excess of Thousands of Samples**</a>\
**Shair** J. Am. Chem. Soc. 2001, 123, 2, 361–362\
(_#50, 167 citations, 9.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja0034747/asset/images/medium/ja0034747h00001.gif)

Our top vote-getter is an analytical methods paper! Perhaps ahead of its time, but ultimately a proof of concept since the probe molecules used place significant constraints on the types of chiral molecules that can be analyzed. Our recent SFC/MS method shows that high-throughput ee determination is still challenging, in vogue, and very much within the tastes of the group.

### 2004

<a href="https://doi.org/10.1002/anie.200353240" target="_blank">**Enantioselective Mannich-Type Reaction Catalyzed by a Chiral Brønsted Acid**</a>\
**Akiyama** ACIE 2004, 43, 1566\
(_#1, 1406 citations, 0.0 votes_)

![](https://onlinelibrary.wiley.com/cms/asset/651ab9a5-278b-4bd0-9ca0-2d0d21b36a3a/mcontent.gif)

Akiyama introduces chiral phosphoric acids. Surprising that this totally flew under the voting radar.

<a href="https://doi.org/10.1021/ja0491533" target="_blank">**Chiral Brønsted Acid-Catalyzed Direct Mannich Reactions via Electrophilic Activation**</a>\
**Terada** J. Am. Chem. Soc. 2004, 126, 17, 5356–5357\
(_#2, 1362 citations, 0.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja0491533/asset/images/medium/ja0491533n00001.gif)

Terada introduces chiral phosphoric acids. Ditto.

<a href="https://doi.org/10.1021/ja046259p" target="_blank">**Highly Enantioselective Catalytic Acyl-Pictet–Spengler Reactions**</a>\
**Jacobsen** J. Am. Chem. Soc. 2004, 126, 34, 10558–10559\
(_#3, 550 citations, 0.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja046259p/asset/images/medium/ja046259pn00001.gif)

No votes for our own paper. The Pictet-Spengler reaction has remained a workhorse reaction in organocatalysis.

<a href="https://doi.org/10.1021/ja047901i" target="_blank">**Highly Efficient Synthesis of β-Amino Acid Derivatives via Asymmetric Hydrogenation of Unprotected Enamines**</a>\
**Merck** J. Am. Chem. Soc. 2004, 126, 32, 9918–9919\
(_#40, 230 citations, 16.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja047901i/asset/images/medium/ja047901in00001.gif)

Our top vote-getter is a refinement on asymmetric hydrogenation from Merck Process. Utility takes the crown on this one.

### 2005

<a href="https://doi.org/10.1021/ja052431t" target="_blank">**A Homochiral Porous Metal–Organic Framework for Highly Enantioselective Heterogeneous Asymmetric Catalysis**</a>\
**Lin** J. Am. Chem. Soc. 2005, 127, 25, 8940–8941\
(_#1, 1743 citations, 0.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja052431t/asset/images/medium/ja052431tn00001.gif)

MOFs promote additions to aldehydes. Landmark example establishing the use of MOFs, to this day, for asymmetric catalysis (see, for a specific example, Phillip Milner's program on "MOFganic chemistry").

<a href="https://doi.org/10.1002/anie.200500599" target="_blank">**Diphenylprolinol Silyl Ethers as Efficient Organocatalysts for the Asymmetric Michael Reaction of Aldehydes and Nitroalkenes**</a>\
**Hayashi** ACIE 2005, 44, 4212.\
(_#2, 1158 citations, 0.0 votes_)

![](https://onlinelibrary.wiley.com/cms/asset/42f3e8c0-bf56-4c9d-b66e-5dd65b250549/mcontent.gif)

More classical organocatalysis, probably loses points for conceptual novelty but an important step to highly efficient silylated prolinol designs.

<a href="https://doi.org/10.1002/anie.200462101" target="_blank">**Enantioselective Organocatalyzed α- Sulfenylation of Aldehydes**</a>\
**Jørgensen** ACIE 2005, 44, 794\
(_#3, 877 citations, 0.0 votes_)

See above. Jorgensen's organocatalyst family starts here.

<a href="https://doi.org/10.1021/ja0506509" target="_blank">**Asymmetric Nickel-Catalyzed Negishi Cross-Couplings of Secondary α-Bromo Amides with Organozinc Reagents**</a>\
**Fu** J. Am. Chem. Soc. 2005, 127, 13, 4594–4595\
(_#30, 292 citations, 10.25 votes_)

![](https://pubs.acs.org/cms/10.1021/ja0506509/asset/images/medium/ja0506509n00001.gif)

Our top vote-getter marks the beginning of Fu's longstanding program in cross-coupling alkyl electrophiles. For three years now, the vote battle has been between now-workhorse organocatalysis and TM catalysis, and the latter has won.

### 2006

<a href="https://doi.org/10.1038/nature04820" target="_blank">**Control of four stereocentres in a triple cascade organocatalytic reaction**</a>\
**Enders** Nature 2006, 441, 861\
(_#1, 845 citations, 0.0 votes_)

![](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fnature04820/MediaObjects/41586_2006_Article_BFnature04820_Fig1_HTML.jpg?as=webp)

Still more organocatalysis, this time of a three-component reaction. The first time an organic chemistry Nature/Science paper enters the conversation.

<a href="https://doi.org/10.1021/ja057222n" target="_blank">**Enantioselective Organocatalytic Reductive Amination**</a>\
**MacMillan** J. Am. Chem. Soc. 2006, 128, 1, 84–86\
(_#2, 688 citations, 0.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja057222n/asset/images/medium/ja057222nn00001.gif)

Macmillan does reductive amination with a CPA. The citation wave in organocatalysis simply doesn't end!

<a href="https://doi.org/10.1002/anie.200600191" target="_blank">**A Highly Enantioselective Brønsted Acid Catalyzed Cascade Reaction: Organocatalytic Transfer Hydrogenation of Quinolines and their Application in the Synthesis of Alkaloids**</a>\
**Rueping** ACIE 2006, 45, 3683\
(_#3, 674 citations, 0.0 votes_)

![](https://onlinelibrary.wiley.com/cms/asset/1b073bac-1dcb-499f-acad-a2e8ee58120a/mcontent.gif)

Similar reaction to the above, again establishing that CPAs can do hydrogenation. 

<a href="https://doi.org/10.1038/nature04780" target="_blank">**Thermodynamic control of asymmetric amplification in amino acid catalysis**</a>\
**Blackmond** Nature 2006, 441, 621\
(_#20, 348 citations, 13.0 votes_)

![](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fnature04780/MediaObjects/41586_2006_Article_BFnature04780_Fig2_HTML.jpg?as=webp)

Our top vote-getter pertains to the origin of enantiomeric excess on earth; it's perhaps surprising that a topic that might be of interest to a broader audience is less cited than organocatalysis papers.

### 2007

<a href="https://doi.org/10.1126/science.1145229" target="_blank">**A Powerful Chiral Counterion Strategy for Asymmetric Transition Metal Catalysis**</a>\
**Toste** Science 2007, 317, 496\
(_#1, 817 citations, 11.0 votes_)

![](https://www.science.org/cms/10.1126/science.1145229/asset/133ba62c-3565-466d-9f39-31042423fae5/assets/graphic/317_496_f1.jpeg)

A Toste classic and a close second in terms of number of votes.

<a href="https://doi.org/10.1021/ja074678r" target="_blank">**Chiral Counteranions in Asymmetric Transition-Metal Catalysis: Highly Enantioselective Pd/Brønsted Acid-Catalyzed Direct α-Allylation of Aldehydes**</a>\
**List** J. Am. Chem. Soc. 2007, 129, 37, 11336–11337\
(_#2, 560 citations, 6.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja074678r/asset/images/medium/ja074678rn00001.gif)

Like above, BINOL phosphates as chiral counteranions. Yet another instance where the top two cited papers of the year are concurrent publications on the same theme.

<a href="https://doi.org/10.1021/ja076179w" target="_blank">**Enantioselective Pictet–Spengler-Type Cyclizations of Hydroxylactams: H-Bond Donor Catalysis by Anion Binding**</a>\
**Jacobsen** J. Am. Chem. Soc. 2007, 129, 44, 13404–13405\
(_#3, 490 citations, 0.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja076179w/asset/images/medium/ja076179wn00001.gif)

Enantioinduction through counterion interactions in organocatalysis. Heralds control over highly reactive cationic intermediates.

<a href="https://doi.org/10.1126/science.1142696" target="_blank">**Enantioselective Organocatalysis Using SOMO Activation**</a>\
**MacMillan** Science 2007, 316, 582\
(_#6, 416 citations, 15.0 votes_)

![](https://www.science.org/cms/10.1126/science.1142696/asset/280f2882-f8c4-4d9a-99a9-511000351ac3/assets/graphic/316_582_f1.jpeg)

Our top vote-getter is MacMillan's widely known prelude to organophotoredox catalysis. This paper is innovative in its own right, but citations-wise is overshadowed by the blockbuster paper that is the next entry in 2008.

### 2008

<a href="https://doi.org/10.1126/science.1161976" target="_blank">**Merging Photoredox Catalysis with Organocatalysis: The Direct Asymmetric Alkylation of Aldehydes**</a>\
**MacMillan** Science 2008, 322, 77\
(_#1, 1960 citations, 12.0 votes_)

![](https://www.science.org/cms/10.1126/science.1161976/asset/e43b8135-eb7a-403b-8664-b471162fc62b/assets/graphic/322_77_f1.jpeg)

Also our top vote-getter for this year, this paper heralded the dawn of organophotoredox catalysis.

<a href="https://doi.org/10.1021/ja805693p" target="_blank">**Chiral Squaramide Derivatives are Excellent Hydrogen Bond Donor Catalysts**</a>\
**Rawal** J. Am. Chem. Soc. 2008, 130, 44, 14416–14417\
(_#2, 824 citations, 0.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja805693p/asset/images/medium/ja-2008-05693p_0003.gif)

Surprising that this did not receive votes, given the impact of the squaramide catalytic core in both the group's and others' HBD catalysis efforts.

<a href="https://doi.org/10.1002/anie.200801030" target="_blank">**PdII-Catalyzed Enantioselective Activation of C(sp2)–H and C(sp3)–H Bonds Using Monoprotected Amino Acids as Chiral Ligands**</a>\
**Yu** ACIE 2008, 47, 4882\
(_#3, 606 citations, 3.0 votes_)

![](https://onlinelibrary.wiley.com/cms/asset/56dee8b4-c4c2-4209-aded-ebd78aae57d1/mcontent.gif)

Enantioinduction in C-H activation was achieved here - a classic.

### 2009

<a href="https://doi.org/10.1021/ja9053338" target="_blank">**Enantioselective α-Trifluoromethylation of Aldehydes via Photoredox Organocatalysis**</a>\
**MacMillan** J. Am. Chem. Soc. 2009, 131, 31, 10875–10877\
(_#1, 896 citations, 5.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja9053338/asset/images/medium/ja-2009-053338_0007.gif)

Another important demonstration of the power of photoredox catalysis.

<a href="https://doi.org/10.1021/ja905302f" target="_blank">**Organocatalytic Synthesis of Spiro[pyrrolidin-3,3'-oxindoles] with High Enantiopurity and Structural Diversity**</a>\
**Gong** J. Am. Chem. Soc. 2009, 131, 38, 13819–13825\
(_#2, 526 citations, 0.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja905302f/asset/images/medium/ja-2009-05302f_0013.gif)

More CPA organocatalysis to construct spirooxindoles, which seem like a very popular system. Also one of the early examples of off-the-shelf computational modeling paving the way to routine DFT in methods papers.

<a href="https://doi.org/10.1002/anie.200903192" target="_blank">**Targeting Structural and Stereochemical Complexity by Organocascade Catalysis: Construction of Spirocyclic Oxindoles Having Multiple Stereocenters**</a>\
**Melchiorre** ACIE 2009, 48, 7200\
(_#3, 421 citations, 0.0 votes_)

![](https://onlinelibrary.wiley.com/cms/asset/82d23165-4e1c-4f11-8ad0-32364f297dca/mcontent.gif)

The same reaction principles as above, setting multiple stereocenters as well, but with *two* different organocatalysts. Talk about pairs of papers.

<a href="https://doi.org/10.1021/ja906472m" target="_blank">**Nine-Step Enantioselective Total Synthesis of (+)-Minfiensine**</a>\
**MacMillan** J. Am. Chem. Soc. 2009, 131, 38, 13606–13607\
(_#8, 333 citations, 15.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja906472m/asset/images/medium/ja-2009-06472m_0006.gif)

Out top vote-getter features a new enantioselective method in a concise and efficient total synthesis. 

### 2011

<a href="https://doi.org/10.1038/nature10232" target="_blank">**Collective synthesis of natural products by means of organocascade catalysis**</a>\
**MacMillan** Nature 2011, 475, 183\
(_#1, 626 citations, 7.0 votes_)

![](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fnature10232/MediaObjects/41586_2011_Article_BFnature10232_Fig1_HTML.jpg?as=webp)

A generalized version of the 2009 top vote-getter, featuring most of the same authors from that study as well. From here on out, the top-cited papers (and vote selections) become dominated by _Science_ and _Nature_ publications.

<a href="https://doi.org/10.1126/science.1199844" target="_blank">**Dynamic Control of Chiral Space in a Catalytic Asymmetric Reaction Using a Molecular Motor**</a>\
**Feringa** Science 2011, 331, 1429\
(_#2, 513 citations, 0.0 votes_)

![](https://www.science.org/cms/10.1126/science.1199844/asset/9bdca088-2bc5-4b21-95ca-232dff99ee4a/assets/graphic/331_1429_f1.jpeg)

Imagine flipping the chirality of a chiral catalyst using light during a reaction to control which enantiomeric outcome(s) result! Somewhat surprising that this flew under the voting radar.

<a href="https://doi.org/10.1126/science.1213918" target="_blank">**Asymmetric Electrophilic Fluorination Using an Anionic Chiral Phase-Transfer Catalyst**</a>\
**Toste** Science 2011, 334, 1681\
(_#3, 448 citations, 9.0 votes_)

![](https://www.science.org/cms/10.1126/science.1213918/asset/ad112c51-303b-4a0a-9a5d-eee7cf2a984a/assets/graphic/334_1681_f1.jpeg)

A new principle in chiral PTC - using a chiral anion enables solubilization and generation of "chiral" Selectfluor.

<a href="https://doi.org/10.1126/science.1206997" target="_blank">**Three-Dimensional Correlation of Steric and Electronic Free Energy Relationships Guides Asymmetric Propargylation**</a>\
**Sigman** Science 2011, 333, 1875\
(_#53, 176 citations, 14.0 votes_)

![](https://www.science.org/cms/10.1126/science.1206997/asset/ebe6cbc7-3f95-4745-9c1b-da529527391d/assets/graphic/333_1875_f3.jpeg)

Our top vote-getter represents the beginning of the movement to analyze reactions with multivariate correlations. Near and dear to our group's interests, and somewhat unexpected that, at least by citation count, this hasn't achieved that widespread adoption.

### 2012

<a href="https://doi.org/10.1126/science.1226132" target="_blank">**Biotinylated Rh(III) Complexes in Engineered Streptavidin for Accelerated Asymmetric C–H Activation**</a>\
**Rovis** Science 2012, 338, 500\
(_#1, 704 citations, 4.0 votes_)

![](https://www.science.org/cms/10.1126/science.1226132/asset/2a85f292-faf7-4bf9-b36f-e91141568c58/assets/graphic/338_500_f1.jpeg)

A highly efficient artificial metalloenzyme that happens to be a chiral Cp variant. I'm not sure why this paper is so highly cited.

<a href="https://doi.org/10.1126/science.1226938" target="_blank">**Chiral Cyclopentadienyl Ligands as Stereocontrolling Element in Asymmetric C–H Functionalization**</a>\
**Cramer** Science 2012, 338, 504\
(_#2, 564 citations, 2.5 votes_)

![](https://www.science.org/cms/10.1126/science.1226938/asset/357bfd5e-c482-4598-b7bc-f866d2367de9/assets/graphic/338_504_f1.jpeg)

The second in a pair of papers with the Rovis study. Another way of rendering Cp chiral. Is this a research theme that has really caught on?

<a href="https://doi.org/10.1021/ja3030164" target="_blank">**Catalytic Asymmetric α-Acylation of Tertiary Amines Mediated by a Dual Catalysis Mode: N-Heterocyclic Carbene and Photoredox Catalysis**</a>\
**Rovis** J. Am. Chem. Soc. 2012, 134, 19, 8094–8097\
(_#3, 491 citations, 0.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja3030164/asset/images/medium/ja-2012-030164_0006.gif)

The merger of NHC and photoredox catalysis was probably inevitable given the state of the field. Turns out it really caught on, which speaks to the advantage of modular cocatalytic systems.

<a href="https://doi.org/10.1126/science.1219274" target="_blank">**Enantioselective C-H Crotylation of Primary Alcohols via Hydrohydroxyalkylation of Butadiene**</a>\
**Krische** Science 2012, 336, 324\
(_#8, 314 citations, 15.0 votes_)

![](https://www.science.org/cms/10.1126/science.1219274/asset/3eda997e-62a5-4ccf-8782-981579b0923f/assets/graphic/336_324_f1.jpeg)

Our top vote-getter is the poster-child report for Krische's hydrogen-borrowing coupling program. Schematically, such a simple and enabling transformation.

### 2013

<a href="https://doi.org/10.1038/nature12435" target="_blank">**Catalytic conversion of nitrogen to ammonia by an iron model complex**</a>\
**Peters** Nature 2013, 501, 84\
(_#1, 801 citations, 3.0 votes_)

![](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fnature12435/MediaObjects/41586_2013_Article_BFnature12435_Fig1_HTML.jpg?as=webp)

Nitrogen fixation is important! One key contribution in the long lineage of N2-to-NH3 papers.

<a href="https://doi.org/10.1126/science.1237068" target="_blank">**Enantio- and Diastereodivergent Dual Catalysis: α-Allylation of Branched Aldehydes**</a>\
**Carreira** Science 2013, 340, 1065\
(_#2, 740 citations, 17.0 votes_)

![](https://www.science.org/cms/10.1126/science.1237068/asset/d41dc3f8-19df-4e13-859f-a9efc36fbd93/assets/graphic/340_1065_f1.jpeg)

The combination of two chiral catalysts of different modalities enables the formation of all four product diastereomers with perfect stereoselectivity. A landmark paper in cooperative/dual catalysis. Also our top vote-getter.

<a href="https://doi.org/10.1126/science.1231434" target="_blank">**Olefin Cyclopropanation via Carbene Transfer Catalyzed by Engineered Cytochrome P450 Enzymes**</a>\
**Arnold** Science 2012, 339, 307\
(_#3, 647 citations, 8.0 votes_)

![](https://www.science.org/cms/10.1126/science.1231434/asset/1c3a929e-a80c-414b-9a63-1b8a9424a32e/assets/graphic/339_307_f1.jpeg)

Directed evolution produces enzymes that have synthetic utility; the first of the engineered P450 series by Arnold and coworkers.

### 2014

<a href="https://doi.org/10.1126/science.1255525" target="_blank">**Merging photoredox with nickel catalysis: Coupling of α-carboxyl sp3-carbons with aryl halides**</a>\
**MacMIllan** Science 2014, 345, 437\
(_#1, 1152 citations, 5.0 votes_)

![](https://www.science.org/cms/10.1126/science.1255525/asset/5bbdf1a2-3b22-4a9c-b306-b2a4cfa70202/assets/graphic/345_437_f1.jpeg)

MacMillan returns after a two-year hiatus. Nickel + photoredox enables sp2-sp3 cross coupling. With Molander, yet another ground-breaking advance but the votes were less friendly to MacMillan this year.

<a href="https://doi.org/10.1021/ja5096733" target="_blank">**Ultrathin Cobalt–Manganese Layered Double Hydroxide Is an Efficient Oxygen Evolution Catalyst**</a>\
**Hu** J. Am. Chem. Soc. 2014, 136, 47, 16481–16484\
(_#2, 1032 citations, 0.0 votes_)

![](https://pubs.acs.org/cms/10.1021/ja5096733/asset/images/medium/ja-2014-096733_0005.gif)

Established the layered-double-hydroxide solution to water splitting.

<a href="https://doi.org/10.1126/science.1253647" target="_blank">**Single-electron transmetalation in organoboron cross-coupling by photoredox/nickel dual catalysis**</a>\
**Molander** Science 2014, 345, 433\
(_#3, 1003 citations, 5.0 votes_)

![](https://www.science.org/cms/10.1126/science.1253647/asset/e0c54369-c2f3-4451-a955-7bed46c26ed8/assets/graphic/345_433_f1.jpeg)

See MacMillan paper above.

<a href="https://doi.org/10.1038/nature13231" target="_blank">**Enantioselective construction of remote quaternary stereocentres**</a>\
**Sigman** Nature 2014, 508, 340\
(_#15, 383 citations, 13.0 votes_)

![](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fnature13231/MediaObjects/41586_2014_BFnature13231_Fig1_HTML.jpg?as=webp)

Our top vote-getter leverages well-known elementary organometallic steps to achieve "chain-walking" following aryl insertion.

### 2015

<a href="https://doi.org/10.1126/science.aab3033" target="_blank">**Alkaline quinone flow battery**</a>\
**Marshak** Science 2015, 349, 1529\
(_#1, 808 citations, 0.0 votes_)

![](https://www.science.org/cms/10.1126/science.aab3033/asset/a75c5e02-2441-47dc-afe6-0c74add7419e/assets/graphic/349_1529_f1.jpeg)

Quinones can be used for flow batteries, replacing toxic TM ions. Striking how the very same quinone scaffold remains the default starting point for organic flow battery development.

<a href="https://doi.org/10.1126/science.aac9895" target="_blank">**Site-selective arene C-H amination via photoredox catalysis**</a>\
**Nicewicz** Science 2015, 349, 1326\
(_#2, 678 citations, 0.0 votes_)

![](https://www.science.org/cms/10.1126/science.aac9895/asset/201718ba-acae-498a-9bbb-2b5eec186bf6/assets/graphic/349_1326_f1.jpeg)

Applying photoredox to C-H functionalization of an aromatic core.

<a href="https://doi.org/10.1038/nature14885" target="_blank">**Alcohols as alkylating agents in heteroarene C–H functionalization**</a>\
**MacMillan** Nature 2015, 525, 87\
(_#3, 564 citations, 6.0 votes_)

![](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fnature14885/MediaObjects/41586_2015_Article_BFnature14885_Fig1_HTML.jpg?as=webp)

Leveraging the spin-center shift to methylate arenes. MacMillan once again takes an out-of-field concept and turns it into something useful for the organic community.

<a href="https://doi.org/10.1126/science.aab3753" target="_blank">**Catalytic asymmetric hydroamination of unactivated internal olefins to aliphatic amines**</a>\
**Buchwald** Science 2015, 349, 62\
(_#29, 299 citations, 12.0 votes_)

![](https://www.science.org/cms/10.1126/science.aab3753/asset/96eeed7e-dbec-4ece-87db-22dab8bc2c38/assets/graphic/349_62_f1.jpeg)

Our top vote-getter provides a practical solution to the longstanding challenge of hydroamination, using earth-abundant copper. I wonder why this hasn't been cited more.

### 2016

<a href="https://doi.org/10.1126/science.aad8313" target="_blank">**Asymmetric copper-catalyzed C-N cross-couplings induced by visible light**</a>\
**Fu** Science 2016, 351, 681\
(_#1, 574 citations, 0.0 votes_)

![](https://www.science.org/cms/10.1126/science.aad8313/asset/8c9dfddb-d544-4118-b6d4-04e904a5c751/assets/graphic/351_681_f1.jpeg)

Close to a perfect reaction? Enantioconvergent, enantioselective, sp3 cross coupling using earth-abundant copper (and light). Quite shocking that no votes went to this paper.

<a href="https://doi.org/10.1038/nature19811" target="_blank">**Catalytic alkylation of remote C–H bonds enabled by proton-coupled electron transfer**</a>\
**Knowles** Science 2016, 539, 268\
(_#2, 570 citations, 2.0 votes_)

PCET-enabled remote C-H functionalization - a new organic reactivity concept. Surprisingly this paper did not get that many votes.

<a href="https://doi.org/10.1126/science.aad7893" target="_blank">**Functionalization of C(sp3)–H bonds using a transient directing group**</a>\
**Yu** Science 2016, 351, 252\
(_#3, 569 citations, 8.0 votes_)

![](https://www.science.org/cms/10.1126/science.aad7893/asset/dc0eae78-ba66-4122-bb87-7e977c0b59ce/assets/graphic/351_252_f1.jpeg)

A key advancement in the C-H functionalization program, introducing the concept of transient/traceless directing groups. Our top vote-getter as well, reflecting once again an appetite for TM-catalyzed reactions. In terms of citations, all three papers are very close so it probably comes to a wash; a good year for non-photoredox organic chemistry.

### 2017

<a href="https://doi.org/10.1038/nature23016" target="_blank">**Visible-light-driven methane formation from CO2 with a molecular iron catalyst**</a>\
**Bonin, Robert** Nature 2017, 548, 74\
(_#1, 694 citations, 0.0 votes_)

![](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fnature23016/MediaObjects/41586_2017_Article_BFnature23016_Fig3_HTML.jpg?as=webp)

An iron complex can perform the eight-electron reduction of CO2 to methane. Practical limitations are noted but it has opened many opportunities in the CO2 reduction space.

<a href="https://doi.org/10.1038/nature22308" target="_blank">**Predictive compound accumulation rules yield a broad-spectrum antibiotic**</a>\
**Hergenrother** Nature 2017, 545, 299\
(_#2, 603 citations, 0.0 votes_)

![](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fnature22308/MediaObjects/41586_2017_Article_BFnature22308_Fig2_HTML.jpg?as=webp)

Perhaps not the most conventional organic chemistry paper in the scope of our interest, but a fascinating study describing the determination of predictive heuristics that are then designed into an antibiotic, turning it into a broad-spectrum antibiotic.

<a href="https://doi.org/10.1126/science.aan6245" target="_blank">**MOF-derived cobalt nanoparticles catalyze a general synthesis of amines**</a>\
**Beller** Science 2017, 358, 326\
(_#3, 581 citations, 0.0 votes_)

![](https://www.science.org/cms/10.1126/science.aan6245/asset/2a2a4832-68f7-44cb-b09c-ca053880f7a1/assets/graphic/358_326_f1.jpeg)

Earth-abundant cobale embedded in a MOF promotes reductive amination. The number of citations likely originates from the fact that this is a MOF paper providing a rare demonstration of efficient and useful catalytic activity.

<a href="https://doi.org/10.1126/science.aal3010" target="_blank">**Catalytic intermolecular hydroaminations of unactivated olefins with secondary alkyl amines**</a>\
**Knowles** Science 2017, 355, 727\
(_#27, 269 citations, 13.0 votes_)

![](https://www.science.org/cms/10.1126/science.aal3010/asset/cee65b73-eb8e-415a-9d11-894f4705d4a5/assets/graphic/355_727_f1.jpeg)

Our top vote-getter achieves contra-thermodynamic reactivity on a classically challenging intermolecular hydroamination, what's more with anti-Markovnikov regioselectivity.

### 2018

<a href="https://doi.org/10.1126/science.aas9100" target="_blank">**CO2 electroreduction to ethylene via hydroxide-mediated copper catalysis at an abrupt interface**</a>\
**Sargent** Science 2018, 360, 783\
(_#1, 1524 citations, 0.0 votes_)

![](https://www.science.org/cms/10.1126/science.aas9100/asset/5f27b53f-ed07-470a-847c-0742e1f5a623/assets/graphic/360_783_f1.jpeg)

As we get to more recent papers, citation counts will likely not reflect long-term impact; nevertheless it can be instructive to examine top-cited papers of the past few years. Here, clever engineering enables the reduction of CO2 to ethylene.

<a href="https://doi.org/10.1038/nature25978" target="_blank">**Planning chemical syntheses with deep neural networks and symbolic AI**</a>\
**Waller** Nature 2018, 555, 604\
(_#2, 1035 citations, 0.0 votes_)

![](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fnature25978/MediaObjects/41586_2018_Article_BFnature25978_Fig1_HTML.jpg?as=webp)

AI/ML has arrived and disrupted not only the research landscape but also the citation landscape. An early example of AI-aided retrosynthesis, this paper receives an absurd number of citations (rivaling MacMillan's original organocatalysis paper from 2000) due to the explosion of ML-related papers in the subsequent years.

<a href="https://doi.org/10.1126/science.aaq1684" target="_blank">**Nitrogen fixation and reduction at boron**</a>\
**Braunschweig** Science 2018, 369, 896\
(_#3, 915 citations, 0.0 votes_)

![](https://www.science.org/cms/10.1126/science.aaq1684/asset/6b0a88dc-dd8c-4e0e-a4e0-4f175de98628/assets/graphic/359_896_f1.jpeg)

Using boron as metallomimetics opens the door to more opportunities in nitrogen fixation chemistry; ostensibly this impacts a wide spread of subfields in chemistry, hence the large number of citations.

<a href="https://doi.org/10.1038/s41586-018-0755-1" target="_blank">**Catalytic deracemization of chiral allenes by sensitized excitation with visible light**</a>\
**Bach** Nature 2018, 564, 240\
(_#46, 164 citations, 13.0 votes_)

![](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41586-018-0755-1/MediaObjects/41586_2018_755_Fig1_HTML.png?as=webp)

Our top vote-getter is the first high-profile example of efficient catalytic deracemization! It appears, by citation count, that stereochemically interesting systems are no match for other advances in organic chemistry.

### 2019

<a href="https://doi.org/10.1038/s41586-019-1260-x" target="_blank">**A rigorous electrochemical ammonia synthesis protocol with quantitative isotope measurements**</a>\
**Chorkendorff** Nature 2019, 570, 504\
(_#1, 955 citations, 0.0 votes_)

![](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41586-019-1260-x/MediaObjects/41586_2019_1260_Fig1_HTML.png?as=webp)

A meta-paper that I think deserves the number of citations it has. Essentially devising a rigorous way to determine that you've actually made ammonia from nitrogen.

<a href="https://doi.org/10.1038/s41586-019-1760-8" target="_blank">**Domino electroreduction of CO2 to methanol on a molecular catalyst**</a>\
**Wang** Nature 2019, 575, 639\
(_#2, 613 citations, 0.0 votes_)

![](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41586-019-1760-8/MediaObjects/41586_2019_1760_Fig1_HTML.png?as=webp)

Exploring more options for even-electron reduction of CO2; we had reduction to ethylene, methane, and now methanol.

<a href="https://doi.org/10.1126/science.aax1566" target="_blank">**A robotic platform for flow synthesis of organic compounds informed by AI planning**</a>\
**Jensen** Science 2019, 365, eaax1566\
(_#3, 494 citations, 0.0 votes_)

![](https://www.science.org/cms/10.1126/science.aax1566/asset/8bb09d8e-e3f9-4ceb-b56d-5193ea064554/assets/graphic/365_aax1566_fa.jpeg)

Arguably Connor Coley's breakout paper - a fully automated platform for synthetic planning and execution. The traditional experimentalist probably has a disbelieving knee-jerk response to this paper, hence the lack of votes.

<a href="https://doi.org/10.1038/s41586-018-0835-2" target="_blank">**Redox-neutral organocatalytic Mitsunobu reactions**</a>\
**Denton** Science. 2019, 365, 910–914\
(_#50, 114 citations, 12.0 votes_)

![](https://www.science.org/cms/10.1126/science.aax3353/asset/e7078a97-8a96-4871-a266-203c9f1ab99c/assets/graphic/365_910_f1.jpeg)

Perhaps a one-hit wonder, in the sense that a truly innovative strategy enabled the modernization and improved efficiency of a workhorse organic transformation. Quite reasonable that it is not that highly cited - to this point it has yet to open a new field of organophosphorus chemistry.

### 2021

<a href="https://doi.org/10.1038/s41929-021-00609-x" target="_blank">**Matching the kinetics of natural enzymes with a single-atom iron nanozyme**</a>\
**Li** Nature Catal. 2021, 4, 407\
(_#1, 465 citations, 0.0 votes_)

![](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41929-021-00609-x/MediaObjects/41929_2021_609_Figa_HTML.png?as=webp)

An enzyme with a engineered single-atom Fe site is a good enzyme mimic. I think appreciation for this paper certainly existed in the group, except it has little, if any, to do with our research.

<a href="https://doi.org/10.1038/s41586-021-03213-y" target="_blank">**Bayesian reaction optimization as a tool for chemical synthesis**</a>\
**Doyle** Nature 2021, 590, 89\
(_#2, 318 citations, 0.0 votes_)

![](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41586-021-03213-y/MediaObjects/41586_2021_3213_Fig1_HTML.png?as=webp)

Active learning for reaction optimization - the adoption of ML by organic chemistry practitioners has further driven the ML movement in our field.

<a href="https://doi.org/10.1126/science.abh0626" target="_blank">**Chemically recyclable thermoplastics from reversible-deactivation polymerization of cyclic acetals**</a>\
**Coates** Science 2021, 373, 783\
(_#3, 198 citations, 0.0 votes_)

![](https://www.science.org/cms/10.1126/science.abh0626/asset/d3caf67d-d003-4c21-8947-cb78cf1811ee/assets/images/large/science.abh0626-f1.jpg)

Coates is back after a 22-year hiatus! An step toward a circular plastic economy: a new material that has favorable properties due to methodological innovation, which can also be broken down into monomers.

<a href="https://doi.org/10.1038/s41586-021-03717-7" target="_blank">**Aziridine synthesis by coupling amines and alkenes via an electrogenerated dication**</a>\
**Wickens** Nature 2021, 596, 74\
(_#95, 71 citations, 9.0 votes_)

![](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41586-021-03717-7/MediaObjects/41586_2021_3717_Fig1_HTML.png?as=webp)

Our top vote-getter fit into the group's interest in olefin functionalization and recognition that a general and practical azidirination is challenging.

### 2022

<a href="https://doi.org/10.1038/s41586-022-04540-4" target="_blank">**Electrochemically driven cross-electrophile coupling of alkyl halides**</a>\
**See, Lin** Nature 2022, 604, 292\
(_#1, 124 citations, 0.0 votes_)

![](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41586-022-04540-4/MediaObjects/41586_2022_4540_Fig1_HTML.png?as=webp)

Song Lin is at the forefront of the electrochemistry movement, generating carbanions that do classical SN2 on alkyl halides. This paper simply did not receive much press in the group, for unknown reasons.

<a href="https://doi.org/10.1038/s41586-022-04397-7" target="_blank">**Au–Pd separation enhances bimetallic catalysis of alcohol oxidation**</a>\
**Hutchings** Nature 2022, 603, 271\
(_#2, 99 citations, 0.0 votes_)

![](https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41586-022-04397-7/MediaObjects/41586_2022_4397_Fig1_HTML.png?as=webp)

Multimetal cooperativity in heterogeneous catalysis, in which separate redox processes occur at Au and Pd sites, doubles the rate of alcohol dehydrogenation. Slightly outside the scope of our interests.

<a href="https://doi.org/10.1021/jacs.2c01410" target="_blank">**Chemical Recycling of Polystyrene to Valuable Chemicals via Selective Acid-Catalyzed Aerobic Oxidation under Visible Light**</a>\
**McInnes, Qi, Xiao** J. Am. Chem. Soc. 2022, 144, 14, 6532–6542\
(_#3, 95 citations, 0.0 votes_)

![](https://pubs.acs.org/cms/10.1021/jacs.2c01410/asset/images/medium/ja2c01410_0016.gif)

Chemical recycling of polystyrene, more circular plastic economy potential. Simple protocol and in-depth mechanistic studies make for an all-around solid study.

<a href="https://doi.org/10.1126/science.abo6443" target="_blank">**Carbene reactivity from alkyl and aryl aldehydes**</a>\
**Nagib** Science 2022, 377, 649\
(_#341, 21 citations, 15.0 votes_)

![](https://www.science.org/cms/10.1126/science.abo6443/asset/9130413d-bc82-4e00-9d43-0c644c3bb59b/assets/images/large/science.abo6443-f1.jpg)

Our top vote-getter got us fascinated about the possibility of new, mild carbene-type reactivity. It seems like "new" reactivity concepts arising from the merger of known reactivity principles, presented digestibly, is the zeitgeist of these times.


## What do we learn from this?
