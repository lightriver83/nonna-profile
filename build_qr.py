#!/usr/bin/env python3
"""Genera images/qr-submit.png — QR code che apre la modale di submit ricetta."""

import qrcode
from qrcode.constants import ERROR_CORRECT_H

URL = "https://nonna-profile.pages.dev/recipes.html?submit=1"
OUT = "/Users/nicolagiunchi/Repository/nonna-profile/images/qr-submit.png"

qr = qrcode.QRCode(
    version=None,
    error_correction=ERROR_CORRECT_H,
    box_size=12,
    border=2,
)
qr.add_data(URL)
qr.make(fit=True)

img = qr.make_image(fill_color="#1C1612", back_color="white")
img.save(OUT)
print(f"OK → {OUT} ({URL})")
