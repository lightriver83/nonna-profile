"""Build the PRINT/STUDY version of the pitch — clean text only, no cues.

This is the version Nick prints and uses to memorize the script.
NO delivery cues, NO delivery rules, NO pronunciation pitfalls — just text.

If you edit the spoken text in build_pitch_pdf.py, mirror those edits here.
"""
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import cm
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.lib.colors import HexColor
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable,
)

import os
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                   "Nana_Pitch_Opening_Nick_PRINT.pdf")

# Same brand palette as build_pitch_pdf.py — keep consistent
INK      = HexColor("#1C1612")
WARM     = HexColor("#4A3E32")
ACCENT   = HexColor("#A34A24")
MUTED    = HexColor("#8A7B6A")

BASE = "Times-Roman"
BASE_I = "Times-Italic"
BASE_B = "Times-Bold"

styles = {
    "eyebrow": ParagraphStyle(
        "eyebrow", fontName=BASE_B, fontSize=8.5, leading=12,
        textColor=ACCENT, alignment=TA_LEFT, spaceAfter=2,
    ),
    "h1": ParagraphStyle(
        "h1", fontName=BASE_B, fontSize=20, leading=24,
        textColor=INK, spaceAfter=4, alignment=TA_LEFT,
    ),
    "h1sub": ParagraphStyle(
        "h1sub", fontName=BASE_I, fontSize=11, leading=15,
        textColor=WARM, spaceAfter=14, alignment=TA_LEFT,
    ),
    "h2": ParagraphStyle(
        "h2", fontName=BASE_B, fontSize=14, leading=18,
        textColor=INK, spaceBefore=18, spaceAfter=10,
    ),
    "script": ParagraphStyle(
        "script", fontName=BASE, fontSize=13.5, leading=22,
        textColor=INK, spaceBefore=4, spaceAfter=10,
    ),
    "footer": ParagraphStyle(
        "footer", fontName=BASE_I, fontSize=8.5, leading=11,
        textColor=MUTED, alignment=TA_CENTER,
    ),
}


def hr(color=MUTED, thickness=0.4, space_before=4, space_after=8):
    return HRFlowable(width="100%", thickness=thickness, color=color,
                      spaceBefore=space_before, spaceAfter=space_after)


def s(text):
    """A spoken-text paragraph."""
    return Paragraph(text, styles["script"])


def section_header(num, title, duration):
    return Paragraph(
        f"{num} &middot; {title} "
        f"<font color='#8A7B6A'>— {duration}</font>",
        styles["h2"],
    )


def build():
    doc = SimpleDocTemplate(
        OUT, pagesize=A4,
        leftMargin=2.5 * cm, rightMargin=2.5 * cm,
        topMargin=2 * cm, bottomMargin=2 * cm,
        title="Nana — Opening pitch (Nick Giunchi, PRINT version)",
        author="Nicola Giunchi",
    )

    story = []

    # ---------- Cover ----------
    story.append(Paragraph(
        "NANA &middot; PITCH SCRIPT &middot; PRINT",
        styles["eyebrow"],
    ))
    story.append(Paragraph("Opening — Nick Giunchi", styles["h1"]))
    story.append(Paragraph(
        "Total ~2 min 35 sec &middot; "
        "Welcome &rarr; Hook &rarr; Who we are &rarr; Handoff",
        styles["h1sub"],
    ))
    story.append(hr(thickness=0.8, space_before=0, space_after=8))

    # ---------- 1 · Welcome ----------
    story.append(section_header("1", "Welcome — memory game", "~15 sec"))
    story.append(s(
        "Good morning. Thank you all for being here. "
        "<b>[PAUSE]</b>"
    ))
    story.append(s(
        "Before I introduce myself — before we start with the "
        "slides — I'd like to play a small memory game with you. "
        "<b>[PAUSE]</b>"
    ))
    story.append(s("Okay. — Now... imagine."))

    # ---------- 2 · Hook ----------
    story.append(section_header("2", "Hook — Sunday at Nana's", "~90 sec"))
    story.append(s(
        "Sunday morning. — Maybe you were a child. — Maybe a "
        "teenager. — Maybe already an adult. — It doesn't matter. "
        "— You were there. <b>[PAUSE 2 sec]</b>"
    ))
    story.append(s(
        "And here you are — in your grandmother's kitchen. You "
        "know this place. You've been here every Sunday of your "
        "childhood — the wooden table, the same chairs, the same "
        "light through the window, and the whole family arriving "
        "for lunch."
    ))
    story.append(s(
        "And the first thing you feel is the warmth. Not just "
        "from the pots on the stove — but the warmth of family. "
        "Of being home. And then you feel the smell."
    ))
    story.append(s(
        "Tomato sauce on the stove since morning. — Bread, just "
        "out of the oven. — Roasted meat. — Something sweet, "
        "somewhere."
    ))
    story.append(s(
        "Your Nana is cooking — fast, for everyone — flour on "
        "her hands, the kitchen alive around her. But she always "
        "has time to turn around and smile, just for you. And of "
        "course, you want to taste. You want to taste before "
        "everyone else. You reach for the pot — and she taps "
        "your hand, gently. \"Si mangia a tavola tutti insieme!\" "
        "she says. We eat together. At the table. All of us. "
        "She doesn't say much. She doesn't have to."
    ))
    story.append(s(
        "The table is set for too many people, on purpose. — "
        "Everybody's talking at the same time. Glasses clink. "
        "Somebody's laughing too loud."
    ))
    story.append(s(
        "Then the food arrives. — And the room goes quiet. — "
        "For one second. — Just one. <b>[PAUSE 2 sec]</b>"
    ))
    story.append(s("That second — was the magic."))
    story.append(s(
        "Because nobody had to teach you what love tasted like. "
        "— <b>You already knew.</b> <b>[PAUSE 2 sec]</b>"
    ))
    story.append(s(
        "Some of you just remembered a kitchen. — Some of you "
        "remembered a face. — Some of you remembered — that you "
        "haven't been there in a very long time."
    ))
    story.append(s(
        "That magic — those flavours, those Sundays, the people "
        "we loved — <b>we want it with us. Forever.</b> "
        "<b>[PAUSE 2 sec]</b>"
    ))
    story.append(s(
        "That's why we built <b>Nana</b>. — To keep those "
        "memories alive. — Forever."
    ))

    # ---------- 3 · Who we are ----------
    story.append(section_header("3", "Who we are", "~30 sec"))
    story.append(s(
        "I'm Nicola Giunchi. I'm one of the five founders of "
        "<b>Nana</b>. <b>[PAUSE]</b>"
    ))
    story.append(s("Nana isn't an app. Not a platform. Not a service."))
    story.append(s(
        "Nana is <b>the community cookbook</b>. A home for every "
        "grandmother's recipe. A passport for every Sunday lunch."
    ))
    story.append(s(
        "Our promise is simple. One sentence. — "
        "<b>Preserve tradition, one recipe at a time.</b>"
    ))
    story.append(s("Because traditions only live when we share them."))

    # ---------- 4 · Handoff ----------
    story.append(section_header("4", "Handoff — set the stage", "~15 sec"))
    story.append(s(
        "Now — to tell you the story of how Nana started "
        "between us, I'd like to introduce someone who will "
        "tell it much better than I ever could. <b>[PAUSE]</b>"
    ))
    story.append(s("<b>Preserve tradition, one recipe at a time.</b>"))
    story.append(s("[CO-FOUNDER NAME] — the floor is yours."))

    # ---------- Footer ----------
    story.append(Spacer(1, 24))
    story.append(hr(color=MUTED, thickness=0.4))
    story.append(Paragraph(
        "Nana S.r.l. &middot; Opening pitch (PRINT version) &middot; "
        "Nick Giunchi &middot; rev. 2026-05-12",
        styles["footer"],
    ))

    doc.build(story)
    print(f"Wrote: {OUT}")


if __name__ == "__main__":
    build()
