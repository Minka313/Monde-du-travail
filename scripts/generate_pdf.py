#!/usr/bin/env python3
import os
import sys
import base64
import subprocess
from pathlib import Path
import markdown_it

def generate_pdf():
    base_dir = Path(__file__).resolve().parent.parent
    md_file = base_dir / "DOCUMENTATION.md"
    pdf_file = base_dir / "DOCUMENTATION.pdf"
    tmp_dir = base_dir / ".tmp"
    tmp_dir.mkdir(exist_ok=True)
    html_file = tmp_dir / "documentation.html"
    logo_file = base_dir / "frontend" / "logo.png"

    if not md_file.exists():
        print(f"Error: {md_file} does not exist", file=sys.stderr)
        sys.exit(1)

    with open(md_file, "r", encoding="utf-8") as f:
        md_content = f.read()

    # Load and encode logo
    logo_base64 = ""
    if logo_file.exists():
        with open(logo_file, "rb") as f:
            logo_base64 = base64.b64encode(f.read()).decode("utf-8")

    md = markdown_it.MarkdownIt('gfm-like')
    body_html = md.render(md_content)

    # CSS styling tailored for professional PDF export via LibreOffice / Chromium / WebKit
    css = """
    @page {
        size: A4 portrait;
        margin: 20mm 16mm 20mm 16mm;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 10pt;
        line-height: 1.55;
        color: #1e293b;
        background-color: #ffffff;
    }

    /* Couverture */
    .cover-page {
        page-break-after: always;
        text-align: center;
        padding-top: 60px;
        padding-bottom: 60px;
    }

    .cover-logo {
        width: 140px;
        height: auto;
        margin-bottom: 25px;
    }

    .cover-title {
        font-size: 24pt;
        font-weight: 800;
        color: #0f172a;
        margin-bottom: 10px;
        line-height: 1.25;
    }

    .cover-subtitle {
        font-size: 14pt;
        font-weight: 600;
        color: #2563eb;
        margin-bottom: 25px;
    }

    .cover-divider {
        width: 120px;
        height: 4px;
        background: #2563eb;
        margin: 20px auto 30px auto;
        border-radius: 2px;
    }

    .cover-meta {
        font-size: 10.5pt;
        color: #475569;
        margin-top: 30px;
        line-height: 1.8;
    }

    .cover-badges {
        margin-top: 30px;
    }

    .badge {
        display: inline-block;
        background: #f1f5f9;
        color: #1e293b;
        padding: 5px 12px;
        border-radius: 6px;
        font-size: 9pt;
        font-weight: 600;
        border: 1px solid #cbd5e1;
        margin: 4px;
    }

    .badge-primary {
        background: #eff6ff;
        color: #1d4ed8;
        border-color: #bfdbfe;
    }

    /* Titres */
    h1 {
        font-size: 16pt;
        font-weight: 700;
        color: #0f172a;
        border-bottom: 2px solid #2563eb;
        padding-bottom: 6px;
        margin-top: 28px;
        margin-bottom: 12px;
        page-break-after: avoid;
    }

    h2 {
        font-size: 13pt;
        font-weight: 700;
        color: #1e3a8a;
        border-bottom: 1px solid #e2e8f0;
        padding-bottom: 4px;
        margin-top: 22px;
        margin-bottom: 10px;
        page-break-after: avoid;
    }

    h3 {
        font-size: 11pt;
        font-weight: 600;
        color: #334155;
        margin-top: 16px;
        margin-bottom: 8px;
        page-break-after: avoid;
    }

    p {
        margin-top: 0;
        margin-bottom: 10px;
    }

    ul, ol {
        margin-top: 0;
        margin-bottom: 12px;
        padding-left: 22px;
    }

    li {
        margin-bottom: 4px;
    }

    /* Blocs de code et diagrammes */
    pre {
        background-color: #0f172a;
        color: #f8fafc;
        border-radius: 6px;
        padding: 10px 12px;
        font-family: "JetBrains Mono", "SFMono-Regular", Consolas, Menlo, "Courier New", monospace;
        font-size: 8pt;
        line-height: 1.35;
        overflow-x: auto;
        border: 1px solid #334155;
        margin-top: 10px;
        margin-bottom: 14px;
        page-break-inside: avoid;
    }

    code {
        font-family: "JetBrains Mono", "SFMono-Regular", Consolas, Menlo, "Courier New", monospace;
        font-size: 8.5pt;
        background-color: #f1f5f9;
        color: #b91c1c;
        padding: 2px 4px;
        border-radius: 4px;
        border: 1px solid #e2e8f0;
    }

    pre code {
        background: transparent;
        color: inherit;
        padding: 0;
        border: none;
        font-size: 8pt;
    }

    /* Tableaux */
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 12px;
        margin-bottom: 16px;
        font-size: 8.5pt;
        page-break-inside: avoid;
    }

    th {
        background-color: #1e293b;
        color: #ffffff;
        font-weight: 600;
        text-align: left;
        padding: 7px 10px;
        border: 1px solid #334155;
    }

    td {
        padding: 6px 10px;
        border: 1px solid #cbd5e1;
        color: #334155;
    }

    tr:nth-child(even) td {
        background-color: #f8fafc;
    }

    /* Citations / Callouts */
    blockquote {
        background-color: #f0fdf4;
        border-left: 4px solid #16a34a;
        color: #166534;
        margin: 12px 0;
        padding: 8px 14px;
        border-radius: 0 6px 6px 0;
        font-size: 9.5pt;
    }

    blockquote p {
        margin: 0;
    }

    hr {
        border: none;
        border-top: 1px solid #e2e8f0;
        margin: 22px 0;
    }

    .page-break {
        page-break-before: always;
    }
    """

    # Assemble HTML document
    logo_tag = f'<img class="cover-logo" src="data:image/png;base64,{logo_base64}" alt="Logo">' if logo_base64 else ''
    
    full_html = f"""<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Documentation Complète — Le Monde du Travail</title>
    <style>
{css}
    </style>
</head>
<body>

<div class="cover-page">
    {logo_tag}
    <div class="cover-title">Le Monde du Travail</div>
    <div class="cover-subtitle">Dossier Technique & Documentation Complète</div>
    <div class="cover-divider"></div>
    
    <div class="cover-badges">
        <span class="badge badge-primary">Plateforme Web & Serverless</span>
        <span class="badge badge-primary">Supabase & PostgreSQL</span>
        <span class="badge badge-primary">Prisma ORM</span>
        <span class="badge badge-primary">Sécurité RBAC & 2FA</span>
    </div>

    <div class="cover-meta">
        <strong>Statut :</strong> Production Ready<br>
        <strong>Version :</strong> 1.0.0<br>
        <strong>Date :</strong> Septembre 2026<br>
        <strong>Architecture :</strong> Vercel Serverless + Node Express + Supabase DB
    </div>
</div>

<div class="document-content">
{body_html}
</div>

</body>
</html>
"""

    with open(html_file, "w", encoding="utf-8") as f:
        f.write(full_html)

    print(f"HTML intermédiaire généré : {html_file}")

    # Convert to PDF using LibreOffice
    cmd = [
        "libreoffice",
        "--headless",
        "--convert-to",
        "pdf:writer_web_pdf_Export",
        "--outdir",
        str(tmp_dir),
        str(html_file)
    ]

    print("Conversion en cours via LibreOffice...")
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Erreur LibreOffice : {result.stderr}", file=sys.stderr)
        sys.exit(result.returncode)

    tmp_pdf = tmp_dir / "documentation.pdf"
    if not tmp_pdf.exists():
        # Fallback to standard PDF filter if specific writer_web filter name differed
        cmd_fallback = [
            "libreoffice",
            "--headless",
            "--convert-to",
            "pdf",
            "--outdir",
            str(tmp_dir),
            str(html_file)
        ]
        res_fallback = subprocess.run(cmd_fallback, capture_output=True, text=True)
        if res_fallback.returncode != 0:
            print(f"Erreur fallback : {res_fallback.stderr}", file=sys.stderr)
            sys.exit(1)

    docs_dir = Path.home() / "Documents"
    dest_pdf = (docs_dir / "Documentation_Le_Monde_du_Travail.pdf") if docs_dir.exists() else pdf_file

    if tmp_pdf.exists():
        if dest_pdf.exists():
            dest_pdf.unlink()
        tmp_pdf.rename(dest_pdf)
        print(f"PDF généré avec succès : {dest_pdf} ({dest_pdf.stat().st_size // 1024} Ko)")
    else:
        print("Erreur: le fichier PDF n'a pas été produit.", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    generate_pdf()
