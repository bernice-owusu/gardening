const fs = require('fs');
const html = fs.readFileSync('/tmp/landfixing.html', 'utf8');

// Title
const titleMatch = html.match(/<title>(.*?)<\/title>/i);
console.log('=== TITLE ===');
console.log(titleMatch ? titleMatch[1] : 'N/A');

// Meta description
const metaDesc = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
console.log('=== META DESC ===', metaDesc ? metaDesc[1] : 'N/A');

// Images
const imgRegex = /https?:\/\/[^\s"'<>]+\.(?:jpg|jpeg|png|gif|svg|webp)/gi;
const foundImgs = new Set();
let match;
while ((match = imgRegex.exec(html)) !== null) {
  let url = match[0];
  // cleanup query params if needed or keep full
  foundImgs.add(url);
}
console.log('\n=== IMAGES (' + foundImgs.size + ') ===');
for (const img of foundImgs) {
  console.log(img);
}
