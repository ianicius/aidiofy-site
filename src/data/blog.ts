export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string; // Markdown content
    readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: '1',
        slug: 'why-your-tabletop-rpg-session-sounds-like-a-spreadsheet',
        title: 'Why Your Tabletop RPG Session Sounds Like a Spreadsheet (And How to Fix It)',
        date: 'January 15, 2026',
        readTime: '4 min read',
        excerpt: 'Tired of monotone TTS apps ruining your D&D immersion? Learn why "productivity" text-to-speech fails gamers and how multi-role casting brings your NPCs to life.',
        content: `
You've spent three hours prepping for tonight's session. Maybe four. (Okay, you also fell down a Reddit rabbit hole about mimics, but still.) The mood lighting is dialed in, the battle map looks incredible, and you've written this villain monologue that's going to absolutely *wreck* your players emotionally.

But here's the thing—you've been GMing for six hours straight across two sessions this week, and your voice is shot. So you figure: why not let a text-to-speech app handle the Big Bad's speech? Just this once.

You paste in the text. Hit play.

And out comes: "I. Will. Destroy. You. All. Period. Ha. Ha. Ha."

Your ancient lich sounds like a GPS giving directions to a Wendy's. The barbarian snorts. Someone makes a "Alexa, play Despacito" joke. The moment you spent an hour crafting? Gone.

I wish I could say this hasn't happened to me. Multiple times.

## The Problem Nobody Talks About

Here's what took me way too long to figure out: most TTS apps weren't built for *this*. They were built for people who want to listen to emails at 2x speed during their commute, or speed-read PDFs for work. Productivity stuff.

And they're genuinely good at that! Speechify, NaturalReader, all of them—clear, efficient, fast.

But "clear and efficient" is the exact opposite of what you need when a dragon is threatening to burn down a village. To these apps, a villain's dying curse and a footnote about encumbrance rules are literally the same thing. Just text to be processed.

## Why "One Voice Fits All" Kills Immersion

Think about what actually happens in an RPG session:

Your narrator needs to be clear—almost invisible, just setting the scene. Your villain needs weight, menace, maybe some unsettling pauses. That annoying shopkeeper NPC? Nasally and way too cheerful. The mysterious stranger in the tavern? Low, gravelly, says too little.

Shove all of that through one flat "AI Reader" voice and something breaks in your players' brains. They stop hearing characters. They start hearing *a computer reading words*. 

It's like the uncanny valley, but for audio. And it'll kill immersion faster than someone checking their phone. (Which, let's be honest, will also happen once the robot voice kicks in.)

## What Actually Works: Casting, Not Reading

This is the thing that changed how I thought about the problem.

Stop thinking about "reading text aloud." Start thinking about it like you're casting an audio drama.

That Orc Warlord? He gets a voice—deep, rough, sounds like he gargles gravel. The assassin who's been tailing the party? Different voice. Sharper, quieter, unsettling. And the narration stays clean and neutral, so it doesn't compete.

This is why we built AIdiofy around multi-role casting instead of single-voice output. You're not just generating speech—you're assigning *performances* to characters.

## The "Voice = Memory" Trick

Ask any experienced GM and they'll tell you: distinct voices are a cheat code for making NPCs memorable. Your players might completely blank on an NPC's name or backstory. But "that guy who sounded like a chain-smoker trying to sell us a cursed amulet"? They'll remember him three campaigns later.

You don't need to be a voice actor to pull this off anymore. You just need tools that understand the difference between a spreadsheet and a story.

---

Your campaign isn't a productivity task. Stop letting it sound like one.

**[Cast your first villain free →](https://app.aidiofy.com)**
`
    },
    {
        id: '2',
        slug: 'stop-listening-to-page-numbers',
        title: 'Stop Listening to Page Numbers: The Guide to Headache-Free RPG Audio',
        date: 'January 10, 2026',
        readTime: '3 min read',
        excerpt: 'Does your TTS app read "Page 42" and stat blocks instead of the story? Discover how context-aware AI removes the junk from your RPG PDFs for smooth audio prep.',
        content: `
If you've ever tried to use text-to-speech for RPG prep, you know exactly what I mean by "The Garbage Stream."

You're doing dishes. You've got your headphones in. The app is reading you this incredible chunk of lore about an ancient empire that fell to a curse, and you're actually getting into it—picturing the crumbling temples, the fleeing refugees, the whole thing.

And then:

"...Strength 16, Dexterity 12, Constitution 14. See Table 5.2 for grappling modifiers. Page 42. HEADER: Chapter Four. Subheader: The Ruins of—"

Gone. Whatever mental picture you were building? Shattered by a stat block and a page number.

This is the reality of listening to RPG PDFs. They're not novels. They're a chaotic mess of flavor text crammed next to stat blocks, sidebars interrupting paragraphs, legal text buried in footers, and random "SEE PAGE 114" callouts that made sense on paper but sound insane out loud.

And standard TTS apps? They don't care. Text is text. They'll read you the ISBN number with the same enthusiasm as a villain's dying words.

## The Trap I Kept Falling Into

For a while, I thought I'd found a workaround. I'd copy the text from the PDF, paste it into Google Docs, and manually delete all the garbage. Headers, footers, stat blocks, page references—gone. Clean text, ready for audio.

Except... that took forever? Like, genuinely 20-30 minutes per chapter. Sometimes longer if the PDF formatting was weird and everything pasted as one giant paragraph.

At some point I did the math and realized I was spending more time *cleaning text* than I would have spent just reading the damn book. The "time-saving tool" had become a second job.

## What Actually Needed to Happen

The problem isn't text-to-speech itself. The problem is that most TTS apps are basically screen readers with better voices. They have no idea what they're looking at. A dramatic monologue and a stat block are identical to them—just characters in a row.

For this to actually work for RPGs, the app needs to understand *structure*. It needs to look at a page and go: "Okay, this block is stats, this is a sidebar about optional rules, and THIS is the actual story content the person wants to hear."

That's what we built AIdiofy's pre-processing around. Before anything gets turned into audio, an LLM scans the content and basically does the janitor work for you:

Stat blocks get flagged and skipped (or summarized, if you want). Headers and footers and page numbers disappear. What's left is the narrative flow—the lore, the dialogue, the descriptions. The stuff you actually need in your head before a session.

## Why This Actually Matters

Here's the thing nobody wants to admit: prep kills campaigns. Not bad players, not scheduling conflicts—*prep burnout*. GMs get tired of the work-before-the-work and sessions just... stop getting scheduled.

Anything that reduces friction is worth it. And "upload a PDF, get clean audio back" is a lot less friction than "upload a PDF, spend 30 minutes in Google Docs, then get audio."

You could listen to a module on your commute and actually absorb the story instead of having "Goblin. Hit Points. 7. Armor Class. 15." rattling around your brain.

---

Stop being your own audio janitor. That's what the AI is for.

**[Try it free — clean your first PDF page →](https://app.aidiofy.com)**
`
    },
    {
        id: '3',
        slug: 'meaning-what-you-say-direct-ai-voices',
        title: 'Meaning What You Say: How to "Direct" AI Voices for Tabletop Immersion',
        date: 'January 05, 2026',
        readTime: '5 min read',
        excerpt: 'Learn how to use emotional tags to direct AI voices for your tabletop RPG. Turn flat reading into screaming, whispering, and sarcastic performances.',
        content: `
There's a massive difference between saying "I am going to kill you" and *screaming* it.

There's a difference between whispering a secret and reading it in your normal speaking voice. One makes people lean in. The other makes them check their phones.

And for years, this is exactly where TTS has been stuck. Even the "good" voices—the ones that don't sound like robots anymore—they all have this... *tone*. I call it "Newscaster Mode." Pleasant, clear, perfectly enunciated. Great for audiobooks. Terrible for a villain threatening to feed your players to his demon lord.

The words are right. The *intent* is completely missing.

A villain who sounds polite isn't scary. A dying NPC who sounds exactly like a shopkeeper isn't tragic. Your ghost can't haunt anyone if she sounds like a chipper virtual assistant.

## You're Not Just a Writer—You're a Director

Here's what's actually changed recently: modern voice engines can finally take direction. Not just "use this voice" but "say it *like this*."

We built this into AIdiofy as Director Tags. They work like stage directions in a script—you're not just giving the AI words, you're giving it intent.

So instead of:

> "Don't look behind you."

You write:

> [whisper] "Don't look behind you."

And instead of:

> "Get to the bridge! Now!"

You write:

> [shouting] "Get to the bridge! Now!"

Other examples that actually work well:
- \`[sarcastic]\` — for that one NPC who's done with the party's nonsense
- \`[nervous]\` — shopkeeper who's clearly hiding something  
- \`[exhausted]\` — the messenger who ran three days to deliver the warning
- \`[cold]\` — villain who doesn't need to raise their voice to be terrifying

The Pro-tier engines we use are finally good enough to interpret these cues. It's not perfect every time—sometimes you need to rephrase or try a different tag—but when it hits? It *hits*.

## Where This Actually Makes a Difference

If you run games online (Foundry, Roll20, Discord) or even in-person with a speaker setup, audio is insanely underutilized. Everyone's got ambient music playlists. Almost nobody has NPC dialogue ready to go.

Picture this: your players walk into a tavern. Instead of you saying "the barkeep looks annoyed and tired," you tap a button and they hear:

> *[irritated, tired]* "Look—buy something or get out. I don't have the patience for adventurers today."

That lands different. It sets a tone instantly without you having to "do a voice" after five hours of GMing.

And yeah, doing voices is fun. But sometimes your throat is shot, or you're running three NPCs in one scene, or you just want to preserve your energy for the big moments. Having directed audio as a backup means you can pick your battles.

## The Catch (Because There's Always a Catch)

Director tags aren't magic. Some emotions work better than others depending on the voice you've picked. [whisper] is pretty reliable. [sarcastic] can be hit-or-miss—sarcasm is hard even for humans to convey without context.

The trick is treating it like actual directing: if the first take doesn't work, try a different angle. Swap [angry] for [cold]. Try [bitter] instead of [sarcastic]. The more specific you get, the better results you usually get.

---

Your script already has emotion in it. Now your audio can too.

**[Try Director Tags free in AIdiofy Studio →](https://app.aidiofy.com)**
`
    },
    {
        id: '4',
        slug: 'audio-and-tts-tools-comparison',
        title: 'Audio and TTS tools for tabletop RPG game masters: A comprehensive comparison',
        date: 'January 18, 2026',
        readTime: '6 min read',
        excerpt: 'The right audio tool depends entirely on what problem you\'re solving. We compare NaturalReader, Speechify, ElevenLabs, Forteller, Syrinscape, and Tabletop Audio to help you choose.',
        content: `
**The right audio tool depends entirely on what problem you're solving.** Game masters seeking immersive audio for their sessions face a fragmented landscape: general-purpose TTS apps excel at session prep but stumble at the table, while RPG-specific tools solve narrow problems brilliantly but leave gaps elsewhere. After evaluating NaturalReader, Speechify, ElevenLabs, Forteller Games, Syrinscape, and Tabletop Audio, the clearest finding is that most GMs will need **multiple complementary tools** rather than a single solution.

The fundamental divide separates *prep tools* (consuming content passively) from *performance tools* (creating immersive moments during play). No single product bridges this gap completely, though ElevenLabs comes closest for voice work and Syrinscape dominates ambient sound. Cost-conscious GMs can achieve surprisingly good results with free options like Tabletop Audio combined with careful pre-session preparation.

## General-purpose TTS tools work best for session prep, not live performance

**NaturalReader** and **Speechify** share a common DNA: both convert documents into audio for passive consumption. They excel when GMs want to absorb rulebooks during commutes, proofread homebrew content by ear, or transform adventure modules into personal audiobooks.

NaturalReader offers **200+ AI voices** across 99 languages with cross-platform support (web, desktop, mobile, Chrome extension). The Plus plan at **$119/year** provides 500,000 characters daily for AI voices, OCR scanning of physical books, and a pronunciation editor for fixing fantasy names. Its unique strength is document versatility—it handles PDFs, ePubs, images via OCR, and even photographed handwritten notes. For a GM with stacks of unread rulebooks, NaturalReader transforms dead time into prep time.

Speechify provides a similar value proposition with slightly different strengths: faster playback speeds (up to **5x** versus NaturalReader's focus on comprehension-optimized pacing), better mobile polish, and celebrity voice options including Snoop Dogg and Gwyneth Paltrow. At **$139/year** for Premium, it matches NaturalReader's positioning as a reading productivity tool. Speechify Studio (separate subscription, $19-49/month) adds voice cloning and content creation features, but these require additional investment beyond the reader app.

Both tools share critical **limitations for RPG use**:
- Fantasy name pronunciation requires manual correction via pronunciation editors—each new adventure brings new names to fix
- No emotional range control—voices read dramatic dragon encounters and mundane shopping lists identically  
- Impossible to use live at the table—switching between character voices requires navigating menus, not instant triggers
- Single narrator voice per document—no way to differentiate NPCs in dialogue

The verdict: these are **prep tools, not performance tools**. They help GMs learn systems and absorb content, but expecting them to voice NPCs during sessions misunderstands their design purpose.

## ElevenLabs delivers the best AI voices but demands preparation and budget

ElevenLabs occupies a different tier entirely. Where NaturalReader and Speechify optimize for reading assistance, ElevenLabs focuses on **voice creation quality** that rivals professional voice actors. Independent testing consistently ranks it #1 for naturalness, emotional expression, and human-likeness.

The platform offers multiple access points. The free tier provides **10,000 characters monthly** (roughly 10 minutes of audio)—enough to experiment but insufficient for sustained campaigns. Starter at **$5/month** unlocks commercial rights and instant voice cloning. Creator at **$22/month** adds professional voice cloning and **100,000 characters** (roughly 100 minutes). Heavy users report needing Pro ($99/month) or higher, with some noting actual costs running **2.8x advertised** due to regenerations for pronunciation fixes.

What makes ElevenLabs compelling for RPG use is its **Voice Design** feature, which creates custom voices from text descriptions. GMs can generate voices like:
- "A scary old haggard witch who is sneaky and menacing. Croaky, harsh, shrill voice that cackles"
- "A calm and husky male warrior with a thick Japanese accent. Soft, low tone with composed pacing"
- "The friendly mythical God Zeus with a huge deep powerful voice. Charming, proud, theatrical"

The platform's **10,000+ community voices** include curated fantasy collections for heroic protagonists, sinister villains, mystical beings, and ancient wizards. Voice cloning requires just 1-5 minutes of audio for instant clones, or 30+ minutes for near-indistinguishable professional clones.

ElevenLabs also powers other applications as an API provider. **Archive of Voices Pro** for Foundry VTT lets GMs assign distinct ElevenLabs voices to NPC tokens directly within the virtual tabletop. The REST API supports Unity and Unreal Engine integration for game developers, and platforms like Synthesia and Descript use ElevenLabs as their voice backbone.

The critical limitation remains **live use practicality**. Typing dialogue, processing it through the API, and playing back audio creates delays that break conversational flow. Forum consensus captures this: "Why would you spend time typing the response you want to make and burn that much time?" ElevenLabs excels for **pre-recorded moments**—villain monologues, prophecies, mysterious voices, opening narrations—but not improvised NPC conversations.

## Forteller Games solves a narrow problem with professional polish

**Forteller** takes a fundamentally different approach: rather than converting any text to speech, it provides **complete professional audio drama** for specific supported games. The company uses **real voice actors** (30+ for Gloomhaven, 35 for Frosthaven), original orchestral music, and foley sound effects to create cinematic experiences.

The business model is straightforward: purchase narration packs for specific games at **$6-30 per title** (one-time, no subscription). Frosthaven's pack includes 28 hours of content with 2,000+ branching sections. When players reach story text in supported games, they press play in the app and hear professionally voiced narration instead of one player reading aloud.

Supported titles include the **Gloomhaven family** (Gloomhaven, Frosthaven, Jaws of the Lion), Ryan Laukat's **Sleeping Gods** series, **Middara**, **Bardsung**, **Kinfire Chronicles**, and 36 total games. Notable absences include Descent: Legends of the Dark (has its own app), Zombicide, and **all traditional TTRPG published adventures**—Forteller focuses exclusively on board games, not D&D or Pathfinder modules.

Strengths include exceptional production quality (reviews consistently praise narration as "captivating" and "excellent"), accessibility benefits for groups where reading is challenging, and elimination of the "designated reader" burden. Founded by a dyslexic CEO, Forteller explicitly prioritizes making text-heavy games accessible.

Limitations center on scope: if your game isn't supported, Forteller offers nothing. Users also report needing to verify game rules separately (narration occasionally conflicts with rulebooks) and noting the app provides episodic narration rather than continuous background music during tactical combat phases.

## Ambient sound tools fill a complementary gap that TTS cannot address

The distinction between ambient tools and TTS/narration is fundamental. **Syrinscape** and **Tabletop Audio** create atmospheric background audio—environmental sounds, music, combat tension—while TTS tools generate spoken content. GMs typically use both together: ambient soundscapes run continuously while pre-recorded voice clips play at specific narrative moments.

**Syrinscape** dominates the ambient category with **79,000+ individual sound samples**, 1,580+ SoundSets, and official licensing from Wizards of the Coast, Paizo, and Chaosium. Its architecture uses layered "Elements" that mix dynamically, ensuring soundscapes **never repeat identically**—a crucial advantage over simple audio loops.

The platform offers **official adventure SoundSets** for Lost Mine of Phandelver, Waterdeep: Dragon Heist, multiple Pathfinder Adventure Paths, and dozens of other published adventures. Fantasy Grounds integration allows chat-triggered sounds; Foundry VTT users can control Syrinscape via the SyrinControl module. Pricing runs **$13/month** for SuperSyrin (all content) or one-time purchases of individual SoundSets at $2-15 each.

**Tabletop Audio** offers a compelling free alternative: **350+ professionally produced 10-minute soundscapes** covering fantasy, sci-fi, horror, and modern settings. The browser-based interface requires no account—visit the site and press play. Its **SoundPad feature** allows layering individual sound elements (wind, footsteps, tavern chatter) into custom ambiences. Patreon supporters ($3-10/month) receive alternate versions and exclusive tracks.

Other notable options include:
- **Opus** (by dScryb): Newer competitor with 7,000+ audio assets, modern UI, and partnership with Michael Ghelfi Studios
- **Ambient Mixer**: Free user-generated soundscapes with upload capability
- **YouTube ambient channels**: Free but ad-interrupted without Premium; Michael Ghelfi Studios and Cryo Chamber are popular choices
- **Kenku FM**: Built by the Owlbear Rodeo team for Discord-friendly streaming

The ambient/TTS divide explains why no single tool satisfies all audio needs. Syrinscape provides the dragon's roar but not the NPC's dialogue; ElevenLabs voices the villain's monologue but not the creaking dungeon atmosphere. Comprehensive audio requires both categories working in parallel.

## GMs face consistent pain points that current tools inadequately address

Research across D&D Beyond forums, Reddit communities, and Foundry VTT module documentation reveals recurring frustrations:

**Fantasy name pronunciation** tops the list. Standard TTS engines have no training data for Drizzt, Xanathar, or Szass Tam. ElevenLabs' phoneme tags only work for English—offering no help with Elvish or Draconic. GMs resort to writing names phonetically ("Epsteen" for Epstein) or maintaining pronunciation dictionaries in XML format, but both approaches require ongoing maintenance as new content introduces new names.

**Character voice differentiation** creates the second major barrier. Players "want a human response, not an artificial response—they can get that from video games." Creating distinct voices for a grumbling goblin versus wise wizard versus fierce dragon requires building separate voice profiles for each NPC—time-consuming setup that doesn't scale to campaign-sized NPC rosters.

**Real-time generation latency** makes live improvisation impossible with current technology. Typing dialogue, processing it, and playing audio creates delays that break conversational rhythm. The forum consensus: if it takes 30 seconds, there's no point. This explains why VTT integration modules like Inworld and VoiceGen see limited adoption despite technical capability.

**Cost barriers** exclude casual hobbyists. ElevenLabs' free tier (10,000 characters) is insufficient for regular campaigns. Quality AI voices cost $10-30 monthly. Many GMs express that they "would never pay a dime for this" when they can simply speak in their normal voice for free.

Current workarounds include pre-recording audio during session prep, using real-time voice changers like **Voicemod** or **MorphVOX** (which modify the GM's actual voice rather than generating synthetic speech), and accepting that TTS works for pre-planned moments but not reactive play.

## Choosing the right tool depends on your specific use case

The comparison reveals distinct best-fit scenarios rather than universal winners:

| Use Case | Best Tool | Why |
|----------|-----------|-----|
| Absorbing rulebooks/adventures during commutes | NaturalReader or Speechify | Optimized for document conversion, cross-platform sync, speed control |
| Creating high-quality pre-recorded NPC voices | ElevenLabs | Best voice quality, character customization, emotional range |
| Professional narration for supported board games | Forteller | Production quality far exceeds what any TTS can achieve |
| Atmospheric background audio | Syrinscape (paid) or Tabletop Audio (free) | Purpose-built for continuous ambient soundscapes |
| Real-time voice modification while speaking | Voicemod or MorphVOX | Actually changes your voice live, no typing required |
| Budget-conscious atmospheric audio | Tabletop Audio + YouTube | Professional quality at zero cost |

For a GM running a Gloomhaven campaign, Forteller plus Tabletop Audio (during combat) creates excellent immersion at under $20 total. For a GM preparing homebrew D&D content, ElevenLabs for key character voices plus Syrinscape for atmosphere represents the premium option. For a GM who simply wants to learn a new system while exercising, NaturalReader or Speechify at $100-140/year delivers genuine value.

The landscape continues evolving. Syrinscape's new **Nova** interface (launched December 2025) addresses longstanding UI complaints. ElevenLabs' **Flash model** now achieves sub-100ms latency, hinting at future real-time viability. VTT modules like Archive of Voices Pro demonstrate integration possibilities that may eventually mature into seamless experiences.

## The honest conclusion for objective comparison

No tool deserves dismissal—each solves real problems for specific users. NaturalReader and Speechify genuinely help GMs with reading challenges or limited prep time. ElevenLabs produces voices that enhance pre-recorded content dramatically. Forteller transforms supported games into near-audiobook experiences. Syrinscape and Tabletop Audio create atmospheric immersion that voice tools cannot replicate.

The gap between current tools and the GM wishlist remains substantial: instant voice switching, fantasy language support, affordable pricing, and real-time responsiveness. These limitations aren't failures of any individual product—they reflect the current state of AI voice technology and the specific challenges of tabletop gaming's improvisational nature.

For blog readers evaluating these tools, the practical advice is straightforward: **start with free options** (Tabletop Audio, ElevenLabs' free tier, tool trials) to understand what audio elements actually enhance your sessions. Most GMs discover that ambient sound provides more consistent value than TTS, and that pre-recorded key moments work while live voice generation does not. The expensive, feature-rich tools justify their cost only for GMs who've already identified specific problems those tools solve—not as general "level up your game" purchases.
`
    }
];
