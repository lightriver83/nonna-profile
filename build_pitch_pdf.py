"""Build the opening pitch PDF for Nick's Nana presentation — B2/C1-friendly."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import cm
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.lib.colors import HexColor
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, HRFlowable,
    Table, TableStyle,
)

import os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "Nana_Pitch_Opening_Nick.pdf")

# Nana brand-adjacent palette
INK      = HexColor("#1C1612")
WARM     = HexColor("#4A3E32")
ACCENT   = HexColor("#A34A24")
MUTED    = HexColor("#8A7B6A")
CREAM    = HexColor("#F5EDE0")
CREAM_BOX = HexColor("#EFE4D2")

BASE = "Times-Roman"
BASE_I = "Times-Italic"
BASE_B = "Times-Bold"
BASE_BI = "Times-BoldItalic"

styles = {
    "eyebrow": ParagraphStyle(
        "eyebrow", fontName=BASE_B, fontSize=8.5, leading=12,
        textColor=ACCENT, alignment=TA_LEFT, spaceAfter=2,
    ),
    "h1": ParagraphStyle(
        "h1", fontName=BASE_B, fontSize=22, leading=26,
        textColor=INK, spaceAfter=6, alignment=TA_LEFT,
    ),
    "h1sub": ParagraphStyle(
        "h1sub", fontName=BASE_I, fontSize=12, leading=16,
        textColor=WARM, spaceAfter=18, alignment=TA_LEFT,
    ),
    "h2": ParagraphStyle(
        "h2", fontName=BASE_B, fontSize=13.5, leading=17,
        textColor=INK, spaceBefore=14, spaceAfter=6,
    ),
    "cue": ParagraphStyle(
        "cue", fontName=BASE_I, fontSize=9.5, leading=13,
        textColor=MUTED, spaceBefore=2, spaceAfter=6,
    ),
    "script": ParagraphStyle(
        "script", fontName=BASE, fontSize=12.5, leading=18.5,
        textColor=INK, spaceBefore=4, spaceAfter=8, leftIndent=14,
        rightIndent=6,
    ),
    "scriptQuiet": ParagraphStyle(
        "scriptQuiet", fontName=BASE_I, fontSize=11.5, leading=16,
        textColor=WARM, spaceBefore=4, spaceAfter=8, leftIndent=14,
    ),
    "note": ParagraphStyle(
        "note", fontName=BASE, fontSize=10.5, leading=15,
        textColor=WARM, spaceBefore=2, spaceAfter=6,
    ),
    "noteNum": ParagraphStyle(
        "noteNum", fontName=BASE, fontSize=10.5, leading=15,
        textColor=WARM, spaceBefore=2, spaceAfter=6, leftIndent=14,
    ),
    "footer": ParagraphStyle(
        "footer", fontName=BASE_I, fontSize=8.5, leading=11,
        textColor=MUTED, alignment=TA_CENTER,
    ),
    "tableHead": ParagraphStyle(
        "tableHead", fontName=BASE_B, fontSize=9.5, leading=12,
        textColor=ACCENT,
    ),
    "tableCell": ParagraphStyle(
        "tableCell", fontName=BASE, fontSize=10.5, leading=14,
        textColor=INK,
    ),
    "tableCellI": ParagraphStyle(
        "tableCellI", fontName=BASE_I, fontSize=10.5, leading=14,
        textColor=WARM,
    ),
}


def hr(color=MUTED, thickness=0.4, space_before=4, space_after=8):
    return HRFlowable(width="100%", thickness=thickness, color=color,
                      spaceBefore=space_before, spaceAfter=space_after)


def cue(label, body):
    return Paragraph(
        f'<font color="#A34A24"><b>[{label}]</b></font> {body}',
        styles["cue"],
    )


def script(text):
    return Paragraph(text, styles["script"])


def scriptQuiet(text):
    return Paragraph(text, styles["scriptQuiet"])


def section(num, title, duration, flowables):
    block = [
        Paragraph(f"{num} &middot; {title.upper()}", styles["eyebrow"]),
        Paragraph(f"{title} <font color='#8A7B6A'>— {duration}</font>",
                  styles["h2"]),
    ]
    block.extend(flowables)
    block.append(Spacer(1, 4))
    block.append(hr())
    return block


def build():
    doc = SimpleDocTemplate(
        OUT, pagesize=A4,
        leftMargin=2.2 * cm, rightMargin=2.2 * cm,
        topMargin=1.8 * cm, bottomMargin=1.8 * cm,
        title="Nana — Opening pitch (Nick Giunchi, B2/C1 version)",
        author="Nicola Giunchi",
    )

    story = []

    # ---------- Cover ----------
    story.append(Paragraph("NANA &middot; PITCH SCRIPT", styles["eyebrow"]))
    story.append(Paragraph("Opening — <i>Nick Giunchi</i>", styles["h1"]))
    story.append(Paragraph(
        "Live pitch, English, large audience &middot; ~1 min 55 sec &middot; "
        "Hook &rarr; Who we are &rarr; Handoff to co-founder (who tells the story).<br/>"
        "<b>Written for a B2/C1 speaker</b> — short sentences, "
        "high-frequency vocabulary, same emotional quality.",
        styles["h1sub"],
    ))
    story.append(hr(thickness=0.8, space_before=0, space_after=14))

    # ---------- 0 · Before ----------
    story.extend(section(
        "0", "Before you speak", "silent, 3 sec",
        [
            cue("BODY",
                "Center stage. Shoulders down. Find three faces — "
                "left, center, right. One slow breath through the nose."),
        ],
    ))

    # ---------- 1 · Hook ----------
    story.extend(section(
        "1", "Hook — Sunday at nonna's", "≈ 70 sec",
        [
            cue("SLIDE", 'Hero. Headline visible: <i>"Preserve tradition, '
                'one recipe at a time."</i>'),
            script("Sunday morning. — Maybe you were a child. — Maybe a "
                   "teenager. — Maybe already an adult. — It doesn't "
                   "matter. — You were there. — Let's go back, just for "
                   "a minute. <b>[PAUSE 2 sec]</b>"),
            script("Your nonna's kitchen. — A door that doesn't need a "
                   "key. — You don't even knock. — You just push it "
                   "open, and you are inside."),
            scriptQuiet("<i>The first thing is the warmth.</i> — A "
                        "kitchen that has been awake since early "
                        "morning."),
            script("Then the smell. — Tomato sauce on the stove since "
                   "morning. — Bread, just out of the oven. — Roasted "
                   "meat. — Something sweet, somewhere."),
            script("Your nonna turns around. — Flour on her hands. — A "
                   "small smile, just for you. — She doesn't say much. "
                   "<i>She doesn't have to.</i>"),
            script("The table is set for too many people, on purpose. — "
                   "Everybody is talking at the same time. — Glasses "
                   "clink. — Somebody is laughing too loud."),
            script("Then the food arrives. — And the room goes quiet. — "
                   "For one second. — Just one. <b>[PAUSE 2 sec]</b>"),
            scriptQuiet("<i>That second — was the magic.</i>"),
            script("Because nobody had to teach you what love tasted "
                   "like. — <b>You already knew.</b> <b>[PAUSE 2 sec]</b>"),
            script("Some of you just remembered a kitchen. — Some of you "
                   "remembered a face. — Some of you remembered — that "
                   "you haven't been there in a very long time."),
            script("That magic — those flavours, those Sundays, the "
                   "people we loved — <b>we want it to stay with us. — "
                   "Forever.</b> <b>[PAUSE 2 sec]</b>"),
            script("That is why we built <b>Nana</b>. — To keep those "
                   "memories alive. — Forever."),
            cue("VOICE", "First half (the kitchen scene): slow, low "
                "volume, almost a whisper. The senses sections (warmth, "
                "smell, table) — drop another notch, hypnotic pace."),
            cue("VOICE", '<i>"That second — was the magic"</i> — drop '
                "another 20%. Hold the silence."),
            cue("BODY", "During the kitchen scene: stand still. Don't "
                "gesture. After <i>\"Some of you just remembered…\"</i> "
                "— look up, slowly, and find three faces in the room."),
            cue("BODY", '<i>"Your nonna turns around"</i> — small '
                "open-palm gesture at chest height, like greeting "
                "someone at the end of a hallway."),
            cue("BODY", 'On <i>"To keep those memories alive. — '
                "Forever.\"</i> — plant feet. Quiet conviction, not "
                "selling."),
        ],
    ))

    # ---------- 2 · Who we are ----------
    story.extend(section(
        "2", "Who we are", "≈ 25 sec",
        [
            cue("BODY", "Open posture. Warmth back on."),
            script("Good morning. I am Nicola Giunchi. I am one of the "
                   "five founders of <b>Nana</b>. <b>[PAUSE]</b>"),
            script("Nana is not an app. Not a platform. Not a service."),
            script("Nana is <b>the community cookbook</b>. A home for "
                   "every grandmother's recipe. A passport for every "
                   "Sunday lunch."),
            script("Our promise is simple. One sentence. &mdash; "
                   "<b><i>Preserve tradition, one recipe at a time.</i></b> "
                   "<font color='#8A7B6A'><i>(first time)</i></font>"),
            cue("BODY", "Open palm out, chest height, on the tagline."),
            cue("VOICE", "Slow <b>way</b> down on the tagline. Don't sell "
                "it. Just say it clearly."),
        ],
    ))

    # ---------- 3 · Handoff ----------
    story.extend(section(
        "3", "Handoff — set the stage", "≈ 20 sec",
        [
            cue("BODY", "Straighten. Reset. Half-step back."),
            script("Now — the story of how we got here. <b>[PAUSE]</b>"),
            script("<b>December 26, 2022.</b> — Five friends. — Five "
                   "Christmas lunches. — One long table in Bologna."),
            script("But the story is not mine to tell alone. — There is "
                   "one person — better than me — to take you back to "
                   "that table. <b>[PAUSE]</b>"),
            script("<b><i>Preserve tradition, one recipe at a time.</i></b> "
                   "<font color='#8A7B6A'><i>(second time — signature "
                   "line, then hand over.)</i></font>"),
            script("[CO-FOUNDER NAME] — the floor is yours."),
            cue("BODY", "Turn 30° toward the next speaker. Open palm. "
                "Hold eye contact with the room for one more beat "
                "before you move."),
        ],
    ))

    # ---------- Page break ----------
    story.append(PageBreak())

    # ---------- B2 delivery rules ----------
    story.append(Paragraph("B2 / C1 DELIVERY RULES", styles["eyebrow"]))
    story.append(Paragraph(
        "Seven rules that protect you on stage.", styles["h2"]
    ))
    story.append(Spacer(1, 4))

    rules = [
        ("Short sentences are your best friend.",
         "Every time you feel a sentence getting long — <b>stop.</b> "
         "Put a full stop. Breathe. Start a new one. Short sentences "
         "from non-native speakers sound <i>deliberate</i>, not broken."),
        ("Use contractions.",
         "Say <b><i>I'm</i></b>, <b><i>it's</i></b>, <b><i>we're</i></b>, "
         "<b><i>don't</i></b>, <b><i>wasn't</i></b>. Not <i>I am</i>, "
         "<i>it is</i>, <i>do not</i>. Contractions sound natural. "
         "Full forms sound like a textbook."),
        ("When in doubt, stress the keyword.",
         "Good intonation covers almost any accent. In every sentence, "
         "pick <b>one word</b> and hit it. In <i>\"that recipe is "
         "gone\"</i> — hit <b>gone</b>. In <i>\"we were home\"</i> — "
         "hit <b>home</b>."),
        ('The "th" sound (/ð/, /θ/) is optional.',
         "If you can't hit <i>that / this / they</i> cleanly, say "
         "<i>dat / dis / dey</i>. Nobody in the audience will notice. "
         "Freezing up to find the sound — <i>everyone</i> notices."),
        ("Say Italian words in Italian.",
         "<b>Bologna</b> and <b>nonna</b> — pronounce them in Italian. "
         "That's authentic, not wrong. Actually, it's a <i>strength</i> "
         "on stage."),
        ("Banned italianisms.",
         "Don't say <i>\"I pass the word to…\"</i> (say <b>\"The floor "
         "is yours\"</b> or <b>\"Over to you\"</b>). Don't say "
         "<i>\"actually\"</i> when you mean \"now\" — say <b>\"right "
         "now\"</b> or <b>\"today\"</b>. Don't say <i>\"I resume…\"</i> "
         "— say <b>\"In short\"</b>."),
        ("Never apologize for your English.",
         "Not at the start. Not in the middle. Not at the end. "
         "<b>Confidence &gt; correctness.</b> You are Italian. Your "
         "English is the way it is. That is part of the pitch, not a "
         "problem in the pitch."),
    ]

    for i, (head, body) in enumerate(rules, 1):
        story.append(Paragraph(
            f"<b>{i}. {head}</b> {body}",
            styles["noteNum"],
        ))

    story.append(Spacer(1, 14))
    story.append(hr())

    # ---------- Pronunciation pitfalls ----------
    story.append(Paragraph("PRONUNCIATION PITFALLS", styles["eyebrow"]))
    story.append(Paragraph(
        "The six words every Italian trips on. Drill them before you "
        "go on stage.", styles["h2"],
    ))
    story.append(Spacer(1, 6))

    head_color = CREAM_BOX

    data = [
        [
            Paragraph("<b>Word</b>", styles["tableHead"]),
            Paragraph("<b>Say it like this</b>", styles["tableHead"]),
            Paragraph("<b>Don't say</b>", styles["tableHead"]),
        ],
        [
            Paragraph("<b>preserve</b>", styles["tableCell"]),
            Paragraph("pri-<b>ZURV</b> &nbsp; (stress on 2nd syllable, "
                      "'s' is a /z/)", styles["tableCell"]),
            Paragraph("<i>pre-serv</i> (Italian-style)",
                      styles["tableCellI"]),
        ],
        [
            Paragraph("<b>tradition</b>", styles["tableCell"]),
            Paragraph("tra-<b>DISH</b>-un", styles["tableCell"]),
            Paragraph("<i>tra-di-ZION</i>", styles["tableCellI"]),
        ],
        [
            Paragraph("<b>recipe</b>", styles["tableCell"]),
            Paragraph("<b>RE</b>-si-pi &nbsp; (3 syllables, stress "
                      "on 1st)", styles["tableCell"]),
            Paragraph("<i>re-CIP</i> (2 syllables, silent 'e' — wrong)",
                      styles["tableCellI"]),
        ],
        [
            Paragraph("<b>community</b>", styles["tableCell"]),
            Paragraph("ko-<b>MYU</b>-ni-ti &nbsp; (4 syllables, stress "
                      "on 2nd)", styles["tableCell"]),
            Paragraph("<i>co-mu-NI-tà</i>", styles["tableCellI"]),
        ],
        [
            Paragraph("<b>cookbook</b>", styles["tableCell"]),
            Paragraph("<b>KUK</b>-buk &nbsp; (short /ʊ/, not /uː/)",
                      styles["tableCell"]),
            Paragraph("<i>coo-k-book</i> (too long on the 'oo')",
                      styles["tableCellI"]),
        ],
        [
            Paragraph("<b>grandmother</b>", styles["tableCell"]),
            Paragraph("<b>GRAN</b>-ma-thuh &nbsp; (stress on 1st, "
                      "'th' = /ð/)", styles["tableCell"]),
            Paragraph("<i>grand-MO-ther</i> (wrong stress)",
                      styles["tableCellI"]),
        ],
        [
            Paragraph("<b>founders</b>", styles["tableCell"]),
            Paragraph("<b>FOUN</b>-derz &nbsp; (diphthong 'ow', final "
                      "'s' = /z/)", styles["tableCell"]),
            Paragraph("<i>fon-ders</i> (flat 'o')",
                      styles["tableCellI"]),
        ],
    ]

    col_widths = [3.2 * cm, 7.8 * cm, 5.6 * cm]
    tbl = Table(data, colWidths=col_widths, repeatRows=1)
    tbl.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), head_color),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("LINEBELOW", (0, 0), (-1, 0), 0.6, ACCENT),
        ("LINEBELOW", (0, 1), (-1, -2), 0.25, MUTED),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [None, CREAM]),
    ]))
    story.append(tbl)

    story.append(Spacer(1, 14))
    story.append(Paragraph(
        "<b>Drill routine:</b> before you go on stage, say each word "
        "<b>out loud five times in a row</b>, slowly. Not in a sentence. "
        "Just the word. Your mouth needs the muscle memory.",
        styles["note"],
    ))

    story.append(Spacer(1, 18))
    story.append(hr(color=MUTED, thickness=0.4))
    story.append(Paragraph(
        "Nana S.r.l. &middot; Opening pitch (B2/C1 version) &middot; "
        "Nick Giunchi &middot; rev. 2026-04-26",
        styles["footer"],
    ))

    doc.build(story)
    print(f"Wrote: {OUT}")


if __name__ == "__main__":
    build()
