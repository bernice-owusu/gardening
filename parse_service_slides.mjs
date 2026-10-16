import fs from 'fs';

const html = fs.readFileSync('/tmp/landfixing.html', 'utf8');
const idx = html.indexOf('What we are offering to our potential client');
const after = html.substring(idx, idx + 12000);

const slides = after.split('<div class="swiper-slide elementor-repeater-item-');
console.log('Total split parts:', slides.length - 1);

for (let i = 1; i < slides.length; i++) {
  const s = slides[i];
  const icon = s.match(/flaticon-[^\s"'\\]+/);
  const title = s.match(/<h4 class="service-title">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/);
  const img = s.match(/src="([^">]+ser[^">]+)"/);
  console.log(`Slide ${i}:`);
  console.log(`  Icon: ${icon ? icon[0] : 'N/A'}`);
  console.log(`  Title: ${title ? title[1].replace(/\s+/g, ' ').trim() : 'N/A'}`);
  console.log(`  Image: ${img ? img[1] : 'N/A'}`);
}
