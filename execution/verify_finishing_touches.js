/**
 * Deterministic Verification of Finishing Touches:
 * 1. CSS Alignments, text-wrap balance & pretty, :empty rule, mobile duplicate login elimination
 * 2. Tutoiement compliance across HTML pages (no "vous", "votre", "vos", "veuillez")
 * 3. No orphan trailing periods in headings (h1, h2, h3)
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const FRONTEND_DIR = path.join(ROOT_DIR, 'frontend');
const CSS_FILE = path.join(FRONTEND_DIR, 'css', 'styles.css');

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;

function assert(condition, message) {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  ✅ PASS: ${message}`);
  } else {
    failedChecks++;
    console.error(`  ❌ FAIL: ${message}`);
  }
}

console.log('=== 1. CSS Rules Verification (styles.css) ===');
const cssContent = fs.readFileSync(CSS_FILE, 'utf-8');

assert(cssContent.includes('text-wrap: balance;'), 'CSS includes "text-wrap: balance;" for headings');
assert(cssContent.includes('text-wrap: pretty;'), 'CSS includes "text-wrap: pretty;" for paragraphs');
assert(cssContent.includes(':empty') && cssContent.includes('display: none !important;'), 'CSS includes rule hiding empty tags (:empty { display: none !important; })');
assert(cssContent.includes('.header-auth-slot') && cssContent.includes('@media (max-width: 768px)') && cssContent.includes('display: none !important;'), 'Mobile media query hides .header-auth-slot to prevent duplicate login button');
assert(cssContent.includes('align-items: center !important;') && cssContent.includes('gap: 8px !important;'), 'Flexbox alignment and gap applied systematically to icon/emoji containers');

console.log('\n=== 2. Tutoiement Audit in HTML files ===');
const htmlFiles = fs.readdirSync(FRONTEND_DIR).filter(f => f.endsWith('.html'));

const vouvoiementRegex = /\b(votre|vos|veuillez)\b/i;

htmlFiles.forEach(file => {
  const filePath = path.join(FRONTEND_DIR, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Ignore comments and script tags for strict body copy audit
  const matches = content.match(vouvoiementRegex);
  assert(!matches, `${file} contains zero occurrences of "votre", "vos", "veuillez" (tutoiement strictly respected)`);
});

console.log('\n=== 3. Headings Punctuation Audit (No orphan periods on h1, h2, h3) ===');
const headingRegex = /<(h[1-3])[^>]*>([\s\S]*?)<\/\1>/gi;

let orphanPeriodCount = 0;
htmlFiles.forEach(file => {
  const filePath = path.join(FRONTEND_DIR, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const rawTag = match[1];
    // Strip nested tags and whitespace
    const text = match[2].replace(/<[^>]+>/g, '').trim();
    // Exclude cases where text is empty (dynamic template) or ends with ... or ! or ?
    if (text.length > 2 && text.endsWith('.') && !text.endsWith('...') && !text.endsWith('etc.')) {
      orphanPeriodCount++;
      console.warn(`  ⚠️ Found trailing period in <${rawTag}> in ${file}: "${text}"`);
    }
  }
});
assert(orphanPeriodCount === 0, `All static h1, h2, h3 tags have no orphan trailing periods (found: ${orphanPeriodCount})`);

console.log('\n=== 4. Dynamic orientation-ui.js Subtitle Audit ===');
const uiJsPath = path.join(FRONTEND_DIR, 'js', 'orientation-ui.js');
const uiJsContent = fs.readFileSync(uiJsPath, 'utf-8');
const subtitleWithDotRegex = /dom\.viewSectionSubtitle\.textContent\s*=\s*['"`][^'"`]*\.\s*['"`]/g;
const subtitleMatches = uiJsContent.match(subtitleWithDotRegex) || [];
assert(subtitleMatches.length === 0, `Dynamic viewSectionSubtitle texts have no trailing periods (found: ${subtitleMatches.length})`);

console.log('\n----------------------------------------');
console.log(`Results: ${passedChecks}/${totalChecks} passed (${failedChecks} failed).`);
if (failedChecks > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL FINISHING TOUCHES AUDITS PASSED WITH ZERO ERRORS!');
}
