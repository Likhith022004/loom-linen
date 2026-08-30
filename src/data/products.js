export const CATEGORIES = [
  { key: 'women', label: 'Women' },
  { key: 'men', label: 'Men' },
  { key: 'accessories', label: 'Accessories' },
]

export const FABRICS = ['Linen', 'Handwoven Cotton', 'Silk', 'Canvas']

export const COLLECTIONS = [
  { key: 'new', label: 'New Arrivals' },
  { key: 'linen', label: 'Linen' },
  { key: 'embroidered', label: 'Embroidered' },
  { key: 'handwoven', label: 'Handwoven' },
]

const W = ['XS', 'S', 'M', 'L', 'XL']
const OSZ = ['One Size']

export const products = [
  {
    slug: 'noor-hand-embroidered-linen-kurta',
    name: 'Noor Hand-Embroidered Linen Kurta',
    line: 'Pure linen kurta with continuous-line botanical embroidery',
    category: 'women',
    collection: ['linen', 'embroidered'],
    fabrics: ['Linen'],
    handcrafted: true,
    new: true,
    price: 8650,
    compareAt: null,
    colors: [
      { name: 'Warm Ivory', hex: '#E6E1D3' },
      { name: 'Soft Sand', hex: '#ABA090' },
      { name: 'Dusty Terracotta', hex: '#AB6246' },
    ],
    sizes: W,
    blurbs:
      'Hand-stitched stems drift across the shoulder of a breathable pure-linen kurta — drawn in a single, unhurried line.',
    description:
      'Cut from softly milled European linen, the Noor kurta carries a single motif of the embroidery atelier: a botanical stem worked freehand over the shoulder and down the sleeve. Every line is laid in one continuous thread, so no two kurtas are ever identical. The silhouette stays quiet — relaxed through the body, eased at the cuff — letting the stitch do the speaking.',
    craftDetail:
      'Noor begins as a pencil study of a flowering stem, translated to cloth by an embroider known only as Bano ji, whose famille have worked the aari needle for three generations. She works from a single unbroken strand of mercerised cotton, alternating a fine stem stitch with a sparse satin fill, never marking the fabric before she begins. Each kurta is finished over six to eight hours of handwork.',
    care: ['Machine wash, cold', 'Gentle cycle in a mesh bag', 'Line dry inside-out in shade'],
    details: [
      'Pure European flax, 165 gsm',
      'Relaxed fit, side slits and mandarin collar',
      'Hand-embroidered in Lucknow',
      'Model is 5’8” and wears a size M',
      'Ships in a reusable cotton archival pouch',
    ],
    images: [13162238, 31450892, 4862928, 30618181],
  },
  {
    slug: 'mira-textured-linen-set',
    name: 'Mira Textured Linen Set',
    line: 'Co-ordinated camp collar shirt and tapered trouser',
    category: 'women',
    collection: ['linen'],
    fabrics: ['Linen'],
    handcrafted: false,
    new: true,
    price: 12900,
    compareAt: 14500,
    colors: [
      { name: 'Warm Ivory', hex: '#E6E1D3' },
      { name: 'Warm Taupe', hex: '#947961' },
    ],
    sizes: W,
    blurbs:
      'A slouchy, modern co-ord in character-rich slub linen that softens with every wear.',
    description:
      'The Mira set pairs an open camp collar shirt with a gentle tapered trouser, both cut from the same roll of dry slub linen so the set reads as one continuous surface. The texture is deliberate — flax keeps its crease, admits air, and etches its own character into the drape. A quiet modern silhouette for long warm days.',
    craftDetail:
      'The fabric is woven on handlooms in a family weaving cluster outside Erode, where the inheritors of the yarn still wet-spin a soft-twist flax that allows the cloth to bloom after three washes.',
    care: ['Machine wash, cold', 'Do not tumble dry', 'Warm iron or steam'],
    details: [
      'Slub linen, 210 gsm',
      'Camp collar shirt + tapered trouser',
      'Garment-washed for softness',
      'Model is 5’8” and wears a size M',
    ],
    images: [31450892, 31450891, 31450890, 30070190],
  },
  {
    slug: 'aara-handwoven-jacket',
    name: 'Aara Handwoven Jacket',
    line: 'Boxy handwoven jacket with shawl collar',
    category: 'women',
    collection: ['handwoven'],
    fabrics: ['Handwoven Cotton'],
    handcrafted: true,
    new: false,
    price: 10400,
    compareAt: null,
    colors: [
      { name: 'Warm Beige', hex: '#C3A88D' },
      { name: 'Deep Brown', hex: '#573B2A' },
    ],
    sizes: W,
    blurbs:
      'A softly structured jacket woven in a subtle herringbone that keeps its light and shadow.',
    description:
      'Aara is woven in a handloom herringbone whose subtle direction change catches lamplight differently with every fold. Cut boxy with a low shawl collar and no closure, it layers cleanly over kurta or knit. The cloth is spun, dyed and woven within one district, then finished with a hand-rolled edge.',
    craftDetail:
      'The herringbone is set by hand-picking warp threads — a slower weave that pulls the fabric into a fine diagonal ridge. Behind the loom, thread is dyed in small vats of organic madder and cutch, giving each jacket an understated, slightly uneven depth of colour.',
    care: ['Dry clean only', 'Store folded with cedar', 'Steam before wear'],
    details: [
      'Handwoven cotton herringbone',
      'Boxy fit, shawl collar',
      'Hand-rolled hem',
      'Model is 5’8” and wears a size M',
    ],
    images: [5567099, 30618181, 4614236, 6850488],
  },
  {
    slug: 'saanvi-embroidered-tunic',
    name: 'Saanvi Embroidered Tunic',
    line: 'Midi tunic with featherlight threadwork at the yoke',
    category: 'women',
    collection: ['embroidered'],
    fabrics: ['Linen'],
    handcrafted: true,
    new: false,
    price: 6400,
    compareAt: null,
    colors: [
      { name: 'Warm Ivory', hex: '#E6E1D3' },
      { name: 'Soft Sand', hex: '#ABA090' },
    ],
    sizes: W,
    blurbs:
      'Featherlight threadwork across the yoke, worked so loose the cloth still breathes.',
    description:
      'The Saanvi tunic keeps ornament to one horizon — a yoke of fine open-satin stitches that diffuse into the body like fading ink. The fretwork is deliberately sparse, letting the woven character of the linen show between every thread. A mid-hip hem and batwing sleeve make it near weightless to wear.',
    craftDetail:
      'The yoke is worked in a counted satin stitch by hand in a small Jaipur atelier, on linen that is pre-softened but never starched, so the embroidery keeps a supple, lived-in feel from the first wear.',
    care: ['Hand wash in cold water or machine-wash delicate', 'Do not wring', 'Hang dry in shade'],
    details: [
      'Pure linen, mid-hip length',
      'Hand-embroidered yoke',
      'Relaxed batwing sleeve',
      'Model is 5’8” and wears a size M',
    ],
    images: [31162331, 30423960, 36319604, 6660962],
  },
  {
    slug: 'elara-linen-co-ord',
    name: 'Elara Linen Co-ord',
    line: 'Collarless shirt and barrel-leg trouser',
    category: 'women',
    collection: ['linen'],
    fabrics: ['Linen'],
    handcrafted: false,
    new: false,
    price: 9800,
    compareAt: null,
    colors: [
      { name: 'Warm Taupe', hex: '#947961' },
      { name: 'Dusty Terracotta', hex: '#AB6246' },
    ],
    sizes: W,
    blurbs:
      'A collarless, bias-cut shirt over a barrel-leg trouser — easy, architectural, considered.',
    description:
      'Elara borrows the stillness of a two-piece uniform: a collarless shirt with a hand-set front placket and a barrel-leg trouser that falls away from the hip. Biased panels give the cloth a soft, rolling movement. The palette is drawn directly from sun-baked earth and ochre plaster.',
    craftDetail:
      'The plackets and pocket seams are top-stitched by a single machine operator who has sewn for the atelier for eleven years — the kind of quiet, repeatable precision that reads as quality at a distance.',
    care: ['Machine wash, cold', 'Low iron', 'Dry flat'],
    details: [
      'Pure linen, 185 gsm',
      'Collarless shirt, barrel-leg trouser',
      'Top-stitched plackets',
      'Model is 5’8” and wears a size M',
    ],
    images: [19573024, 5491145, 30070186, 4862928],
  },
  {
    slug: 'ishanvi-silk-trim-blouse',
    name: 'Ishanvi Silk-Trim Blouse',
    line: 'Linen blouse with a hand-rolled silk voile trim',
    category: 'women',
    collection: ['linen'],
    fabrics: ['Linen', 'Silk'],
    handcrafted: true,
    new: false,
    price: 5200,
    compareAt: null,
    colors: [
      { name: 'Warm Ivory', hex: '#E6E1D3' },
      { name: 'Warm Beige', hex: '#C3A88D' },
    ],
    sizes: W,
    blurbs:
      'A whisper of hand-rolled silk voile frames the neckline of a plain cloth blouse.',
    description:
      'Ishanvi is almost plain on purpose — an ivory linen blouse whose only ornament is a silk voile trim, seamed and hand-rolled into a delicate selvedge along the collar and cuff. The contrast is felt more than seen: silk catches the light where linen absorbs it.',
    craftDetail:
      'Hand-rolling a silk edge is a disappearing skill. The trim is finished by Mithilesh ji, who rolls each millimetre of the bias edge between thumb and forefinger before a tiny fell stitch secures it. It is slow work — roughly forty minutes per metre of trim.',
    care: ['Dry clean preferred', 'Hand wash in cold water', 'Iron on low through a press cloth'],
    details: [
      'Linen body, silk voile trim',
      'Hand-rolled edges',
      'Relaxed fit',
      'Model is 5’8” and wears a size M',
    ],
    images: [8384889, 35993328, 35993330, 30618181],
  },
  {
    slug: 'tara-draped-linen-skirt',
    name: 'Tara Draped Linen Skirt',
    line: 'Full-length linen skirt with gathered waist',
    category: 'women',
    collection: ['linen', 'handwoven'],
    fabrics: ['Linen'],
    handcrafted: false,
    new: false,
    price: 7900,
    compareAt: null,
    colors: [
      { name: 'Soft Sand', hex: '#ABA090' },
      { name: 'Deep Brown', hex: '#573B2A' },
    ],
    sizes: W,
    blurbs:
      'A long, unhurried skirt that gathers at the waist and falls in a single still column.',
    description:
      'Tara is a full-length skirt cut to move with the body rather than cling to it — a soft gathered waist, a narrow column, and enough cloth to read architecture in motion. The linen is washed long and dried slow so its surface has the look of a garment that has already been loved.',
    craftDetail:
      'The gather is mounted to a bias-cut waistband, hand-pressed so the cloth bites cleanly. Fine concealed stitching and a bound hem keep every visible line intentional.',
    care: ['Machine wash, cold', 'Hang dry in shade', 'Steam before wear'],
    details: [
      'Washed pure linen',
      'Gathered waist, full length',
      'Bound hem',
      'Model is 5’8” and wears a size S',
    ],
    images: [3153460, 30070190, 30070187, 6850488],
  },
  {
    slug: 'nalini-jali-cutwork-tunic',
    name: 'Nalini Jali-Cutwork Tunic',
    line: 'Needle-cut jali panels in a pure linen shift',
    category: 'women',
    collection: ['embroidered'],
    fabrics: ['Linen'],
    handcrafted: true,
    new: false,
    price: 8200,
    compareAt: null,
    colors: [
      { name: 'Warm Ivory', hex: '#E6E1D3' },
      { name: 'Warm Taupe', hex: '#947961' },
    ],
    sizes: W,
    blurbs:
      'Screenlike jali panels, cut and overcast by hand along the side seams.',
    description:
      'Nalini is a pure linen shift where air itself does the ornament: narrow jali panels of needle-cut lace run down the side seams, letting the light pass through the cloth. The cutwork is overcast by hand in a fine buttonhole stitch, and the pattern is one the atelier first cut for a veil maker in the old city.',
    craftDetail:
      'Jali work is cut after the embroidery is complete — each aperture is pierced and overcast so no thread ends can fray. It is exacting work executed slowly on a wooden frame, and it is why every Nalini tunic takes a seamstress over a day to finish.',
    care: ['Hand wash or dry clean', 'Support with a frame while washing', 'Iron damp on low'],
    details: [
      'Pure linen shift',
      'Hand-cut jali panels',
      'Relaxed silhouette',
      'Model is 5’8” and wears a size M',
    ],
    images: [13245208, 36319604, 4862928, 4621901],
  },
  {
    slug: 'zoya-banded-linen-dress',
    name: 'Zoya Banded Linen Dress',
    line: 'Banded midi dress with side-seam pockets',
    category: 'women',
    collection: ['linen'],
    fabrics: ['Linen'],
    handcrafted: false,
    new: true,
    price: 9600,
    compareAt: null,
    colors: [
      { name: 'Warm Beige', hex: '#C3A88D' },
      { name: 'Warm Ivory', hex: '#E6E1D3' },
    ],
    sizes: W,
    blurbs:
      'A midi dress whose bands of heavy linen create their own quiet vertical rhythm.',
    description:
      'Zoya is stitched from self-bands of heavy linen — each seam pressed flat, each band repeating the last — so the dress reads as a calm, ribbed column from shoulder to hem. Two deep side-seam pockets and a gentle A-line keep it as practical as it is poised.',
    craftDetail:
      'The banding is aligned by a notch system set at the cutting table, so the rhythm of the seams holds true from front to back. Hem is bound and blind-stitched by hand.',
    care: ['Machine wash, cold', 'Line dry', 'Warm iron'],
    details: [
      'Heavy linen midi dress',
      'Self-banded seams',
      'Side-seam pockets',
      'Model is 5’8” and wears a size S',
    ],
    images: [31450890, 31450891, 30070186, 4862928],
  },
  {
    slug: 'arin-linen-overshirt',
    name: 'Arin Linen Overshirt',
    line: 'Relaxed overshirt in dense washed linen',
    category: 'men',
    collection: ['linen'],
    fabrics: ['Linen'],
    handcrafted: false,
    new: true,
    price: 7800,
    compareAt: null,
    colors: [
      { name: 'Warm Sand', hex: '#ABA090' },
      { name: 'Deep Brown', hex: '#573B2A' },
    ],
    sizes: W,
    blurbs:
      'An overshirt you can wear open, buttoned, or as a light outer layer all season.',
    description:
      'Arin is cut from a dense, garment-washed linen that has the heft of a jacket and the breathability of a shirt. Long in the body, sharp in the collar, with a straight hem and corozo buttons. Understated enough to run the entire day without announcing itself.',
    craftDetail:
      'The cloth is washed in small batches with soft-water salts that break the flax down into a dry, matte hand. Collars and cuffs are fused and hand-pressed to hold their geometry through repeated washes.',
    care: ['Machine wash, cold', 'Do not dry clean', 'Iron while damp'],
    details: [
      'Washed linen, 230 gsm',
      'Corozo nut buttons',
      'Relaxed fit',
      'Model is 6’0” and wears a size M',
    ],
    images: [38670590, 5567099, 30070190, 4614236],
  },
  {
    slug: 'kabir-handwoven-kurta',
    name: 'Kabir Handwoven Kurta',
    line: 'Chanderi-inspired handwoven kurta with tonal embroidery',
    category: 'men',
    collection: ['handwoven', 'embroidered'],
    fabrics: ['Handwoven Cotton'],
    handcrafted: true,
    new: false,
    price: 8900,
    compareAt: null,
    colors: [
      { name: 'Warm Ivory', hex: '#E6E1D3' },
      { name: 'Deep Brown', hex: '#573B2A' },
    ],
    sizes: W,
    blurbs:
      'A handwoven kurta whose tonal stems are drawn along the neckline in a single line.',
    description:
      'Kabir is woven on a handloom in a fine cotton with the faint sheen of its chanderi ancestry, then quietly embroidered in the same tonal family so the stems appear to grow out of the cloth itself. Straight cut, side slits, stand collar.',
    craftDetail:
      'The tonal embroidery uses thread one shade lighter than the base cloth — barely visible in daylight, catching at dusk. A technique the atelier calls “thread writing”, executed here in a relaxed stem stitch along the neckline.',
    care: ['Dry clean or hand wash', 'Press with the weave', 'Store folded'],
    details: [
      'Handwoven fine cotton',
      'Tonal line embroidery',
      'Straight cut, side slits',
      'Model is 6’0” and wears a size L',
    ],
    images: [31968695, 13245208, 36319604, 6660962],
  },
  {
    slug: 'dev-textured-linen-shirt',
    name: 'Dev Textured Linen Shirt',
    line: 'Slub linen shirt with barrel cuff',
    category: 'men',
    collection: ['linen'],
    fabrics: ['Linen'],
    handcrafted: false,
    new: false,
    price: 6800,
    compareAt: null,
    colors: [
      { name: 'Warm Ivory', hex: '#E6E1D3' },
      { name: 'Warm Taupe', hex: '#947961' },
    ],
    sizes: W,
    blurbs:
      'A dry, textured linen shirt with a clean barrel cuff and a collar that holds its line.',
    description:
      'Dev is a foundational shirt cut from slub linen that knots itself with tiny characterful irregularities. Its value is in restraint: clean point collar, barrel cuff, one welt pocket. It behaves the same at a meeting as it does on a long train ride.',
    craftDetail:
      'The collar and cuff fusing is selected per batch to keep a natural linen collar from curling as it dries; neckband seams are pencil-finished by hand.',
    care: ['Machine wash, cold', 'Line dry', 'Iron slightly damp'],
    details: [
      'Slub linen, 190 gsm',
      'Barrel cuff, point collar',
      'Regular fit',
      'Model is 6’0” and wears a size M',
    ],
    images: [13375591, 30618181, 4862928, 5567099],
  },
  {
    slug: 'rayan-relaxed-set',
    name: 'Rayan Relaxed Set',
    line: 'Drop-shoulder shirt with drawstring trouser',
    category: 'men',
    collection: ['linen'],
    fabrics: ['Linen'],
    handcrafted: false,
    new: true,
    price: 9200,
    compareAt: null,
    colors: [
      { name: 'Soft Sand', hex: '#ABA090' },
      { name: 'Warm Beige', hex: '#C3A88D' },
    ],
    sizes: W,
    blurbs:
      'A two-piece in soft linen — weekend ease with a tailored edge.',
    description:
      'Rayan pairs a drop-shoulder camp shirt with a drawstring trouser cut high at the waist and loose through the leg. Soft, unstructured, but never sloppy — the linen is dense enough to hold a line while the seams stay flat and quiet.',
    craftDetail:
      'Drawstring ends are whip-stitched by hand in the same yarn used for the fabric’s selvedge, tying the set back to its own cloth.',
    care: ['Machine wash, cold', 'Hang dry', 'Low iron'],
    details: [
      'Soft linen, 220 gsm',
      'Drop-shoulder shirt + drawstring trouser',
      'Model is 6’0” and wears a size M',
    ],
    images: [5491145, 3153460, 30070190, 30070186],
  },
  {
    slug: 'vivaan-embroidered-shirt',
    name: 'Vivaan Embroidered Shirt',
    line: 'Cuban-collar shirt with sprig embroidery at the hem',
    category: 'men',
    collection: ['embroidered'],
    fabrics: ['Linen'],
    handcrafted: true,
    new: false,
    price: 7400,
    compareAt: null,
    colors: [
      { name: 'Warm Ivory', hex: '#E6E1D3' },
      { name: 'Dusty Terracotta', hex: '#AB6246' },
    ],
    sizes: W,
    blurbs:
      'Small embroidered sprigs crop up at the hem of a swaggering Cuban-collar shirt.',
    description:
      'Vivaan is a throw-on-and-go Cuban-collar shirt with a single detail at the hem — a row of fine sprigs, each a few seconds of thread, positioned exactly where the shirt must be looked at to be noticed. The embroidery does not shout; it rewards attention.',
    craftDetail:
      'The sprigs are worked by hand in a fine stem stitch with a single terracotta thread on ivory linen, spaced by eye rather than by gauge, giving each shirt a slightly different rhythm.',
    care: ['Machine wash, cold', 'Line dry', 'Iron on low'],
    details: [
      'Pure linen',
      'Cuban collar, one chest pocket',
      'Hand-embroidered sprigs',
      'Model is 6’0” and wears a size M',
    ],
    images: [31968695, 6660962, 36319604, 30070187],
  },
  {
    slug: 'aarav-linen-trouser',
    name: 'Aarav Pleated Linen Trouser',
    line: 'Single-pleat linen trouser in a straight cut',
    category: 'men',
    collection: ['linen'],
    fabrics: ['Linen'],
    handcrafted: false,
    new: false,
    price: 5900,
    compareAt: null,
    colors: [
      { name: 'Warm Taupe', hex: '#947961' },
      { name: 'Deep Brown', hex: '#573B2A' },
    ],
    sizes: W,
    blurbs:
      'The perfect warm-weather trouser — single pleat, straight leg, deep pocket, clean break.',
    description:
      'Aarav is a trouser designed around movement: single forward pleat for sit-down comfort, a straight leg that doesn’t flap, deep on-seam pockets, and a tailored waistband with side adjusters. It pairs with everything above it in the collection.',
    craftDetail:
      'The crease is pressed into the linen with a two-stage iron so it survives the first wash, and the waistband is fused with a mid-weight linen canvas to stop it rolling.',
    care: ['Machine wash, cold', 'Hang dry', 'Press crease to restore'],
    details: [
      'Milled linen, 240 gsm',
      'Single forward pleat',
      'Side adjusters, on-seam pockets',
      'Model is 6’0” and wears a size 32',
    ],
    images: [38670590, 30070186, 5567099, 6850488],
  },
  {
    slug: 'adhira-handwoven-jacket',
    name: 'Adhira Handwoven Jacket',
    line: 'Indigo-nubbed handwoven blazer',
    category: 'men',
    collection: ['handwoven'],
    fabrics: ['Handwoven Cotton'],
    handcrafted: true,
    new: true,
    price: 9850,
    compareAt: null,
    colors: [
      { name: 'Deep Brown', hex: '#573B2A' },
      { name: 'Warm Beige', hex: '#C3A88D' },
    ],
    sizes: W,
    blurbs:
      'A soft-shouldered blazer woven from indigo-dipped cotton with visible slub character.',
    description:
      'Adhira is a soft-shouldered, unlined blazer made from handwoven cotton whose indigo-dipped warp carries a beautiful irregularity — nubs of undyed thread where the dip didn’t quite take. The imperfections are the point: warmth, texture, and the memory of the dip vat.',
    craftDetail:
      'The warp is dip-dyed by hand in fermented indigo over six turns, so the yarn shade deepens unevenly down its length. Woven slowly at 12 picks per inch, the cloth is then washed to a shrunken, crinkled hand.',
    care: ['Dry clean only', 'Brush gently between wears', 'Store on a wide hanger'],
    details: [
      'Handwoven cotton, indigo warp',
      'Soft shoulder, unlined',
      'Corozo buttons',
      'Model is 6’0” and wears a size M',
    ],
    images: [6850488, 4614236, 23494589, 5567099],
  },
  {
    slug: 'loom-canvas-tote',
    name: 'Loom Canvas Tote',
    line: 'Heavy cotton canvas tote with woven selvedge detail',
    category: 'accessories',
    collection: ['handwoven'],
    fabrics: ['Canvas'],
    handcrafted: true,
    new: false,
    price: 3200,
    compareAt: null,
    colors: [
      { name: 'Warm Ivory', hex: '#E6E1D3' },
      { name: 'Soft Sand', hex: '#ABA090' },
    ],
    sizes: OSZ,
    blurbs:
      'A monumentally simple tote, heavy enough to stand on its own, with one woven selvedge stripe.',
    description:
      'The Loom tote is cut from a single piece of heavyweight cotton canvas and cross-stitched at the corners so it carries heavy books without complaining. A band of woven selvedge runs near the top like a horizon. The handles are cut tall enough to sit on the shoulder over a jacket.',
    craftDetail:
      'Canvas is woven wide in one continuous run, then cut and folded to keep the selvedge intact. Corner stitching is done on a machine rebuilt for same-stroke double seams — two passes in a single motion.',
    care: ['Spot clean or hand wash', 'Air dry flat', 'Iron handles flat'],
    details: [
      'Heavyweight cotton canvas, 400 gsm',
      'Woven selvedge band',
      'Double-stitched corners',
      'Fits a 15” laptop',
    ],
    images: [12024975, 4614236, 5567099, 6461392],
  },
  {
    slug: 'threadwork-stole',
    name: 'Threadwork Stole',
    line: 'Hand-tied fringe stole in soft wool-linen',
    category: 'accessories',
    collection: ['embroidered', 'handwoven'],
    fabrics: ['Linen'],
    handcrafted: true,
    new: true,
    price: 4600,
    compareAt: null,
    colors: [
      { name: 'Warm Beige', hex: '#C3A88D' },
      { name: 'Warm Ivory', hex: '#E6E1D3' },
      { name: 'Dusty Terracotta', hex: '#AB6246' },
    ],
    sizes: OSZ,
    blurbs:
      'A featherweight stole with hand-tied fringe and a single line of running-stitch where it meets the edge.',
    description:
      'Threadwork is a stole woven from a wool-linen blend so fine it slips through a ring. Its edge is finished with hand-tied fringe, each strand knotted twice, and a single line of running stitch marks the boundary between cloth and thread — the brand’s quiet signature.',
    craftDetail:
      'The running stitch is worked along the length of the stole in two passes of basic straight stitch, twenty hours at the frame for a single piece. The fringe is hand-cut and knotted by the same pair of hands that set the stitch, ensuring nothing is ever mechanically finished.',
    care: ['Dry clean or gentle hand wash', 'Do not wring', 'Lay flat to dry'],
    details: [
      'Wool-linen blend, featherweight',
      'Hand-tied double-knotted fringe',
      'Running-stitch line',
      '210 × 75 cm',
    ],
    images: [30618181, 36319604, 35993328, 6660962],
  },
  {
    slug: 'handwoven-scarf',
    name: 'Sattva Handwoven Scarf',
    line: 'Selvedge-hemmed handwoven scarf in sand and umber',
    category: 'accessories',
    collection: ['handwoven'],
    fabrics: ['Handwoven Cotton'],
    handcrafted: true,
    new: false,
    price: 3800,
    compareAt: null,
    colors: [
      { name: 'Soft Sand', hex: '#ABA090' },
      { name: 'Warm Beige', hex: '#C3A88D' },
    ],
    sizes: OSZ,
    blurbs:
      'A handwoven scarf whose undyed selvedge does the finishing — no hem at all.',
    description:
      'Sattva is woven at the full cloth width so its selvedge is the finishing edge, hand-trimmed and left raw. The scale is small, single-needle tension; the rhythm is that of a village craft translated into a quiet modern accessory.',
    craftDetail:
      'The scarf is woven in a single continuous pass of the shuttle, in a fine plain weave that lets light travel through the cloth. It is finished by hand-knotting the warp ends and letting the selvedge speak for itself.',
    care: ['Hand wash in cold water', 'Dry flat', 'Iron on low'],
    details: [
      'Handwoven fine cotton',
      'Natural selvedge finish',
      'Hand-knotted ends',
      '190 × 60 cm',
    ],
    images: [30070186, 23494589, 30618181, 5567099],
  },
  {
    slug: 'keya-tassel-wrap',
    name: 'Keya Tassel Wrap',
    line: 'Hand-tied tassel wrap in washed linen',
    category: 'accessories',
    collection: ['linen'],
    fabrics: ['Linen'],
    handcrafted: true,
    new: false,
    price: 4400,
    compareAt: null,
    colors: [
      { name: 'Warm Ivory', hex: '#E6E1D3' },
      { name: 'Warm Taupe', hex: '#947961' },
    ],
    sizes: OSZ,
    blurbs:
      'A linen wrap that ends in hand-tied tassels, meant to be thrown, tied and argued with.',
    description:
      'Keya is a generous square of washed linen whose corners carry four hand-tied tassels of the same yarn. It works as a scarf, a stole, or a beach-top — the kind of object that becomes personal quickly.',
    craftDetail:
      'Each tassel is wrapped and knotted by hand around a wooden core, then trimmed to a slight irregularity so no two corners are quite the same.',
    care: ['Machine wash, cold', 'Hang dry', 'Steam to release creases'],
    details: [
      'Washed linen',
      'Four hand-tied tassels',
      '200 × 70 cm',
    ],
    images: [35993330, 30070186, 36319604, 30618181],
  },
  {
    slug: 'dhaaga-mini-clutch',
    name: 'Dhaaga Mini Clutch',
    line: 'Bias-cut linen clutch with a spliced rope handle',
    category: 'accessories',
    collection: ['linen'],
    fabrics: ['Linen'],
    handcrafted: true,
    new: true,
    price: 2900,
    compareAt: null,
    colors: [
      { name: 'Dusty Terracotta', hex: '#AB6246' },
      { name: 'Soft Sand', hex: '#ABA090' },
    ],
    sizes: OSZ,
    blurbs:
      'A barely-there clutch cut on the bias from upholstery-weight linen, bound in a spliced rope handle.',
    description:
      'Dhaaga is a small object with careful construction: bias-cut quilted linen for structure, a hand-spliced cotton rope handle, and a mag-lock closure. The terracotta version reads like a deliberate accent against almost everything in the wardrobe.',
    craftDetail:
      'The quilt is stitched in a wandering diagonal without a jig — a running seam guided wholly by eye, so the quilt lines drift organically like threads pulled loose.',
    care: ['Spot clean', 'Stuff lightly to store', 'Handles air dry'],
    details: [
      'Upholstery-weight linen, bias cut',
      'Hand-spliced rope handle',
      'Mag-lock closure',
      'H 17 cm · W 24 cm',
    ],
    images: [6461392, 12024975, 30070190, 36319604],
  },
]

export const getProduct = (slug) => products.find((p) => p.slug === slug)

export const relatedFor = (product, count = 4) =>
  products
    .filter((p) => p.slug !== product.slug)
    .sort((a, b) => {
      const ascore = (p) =>
        (p.category === product.category ? 2 : 0) +
        (p.collection.some((c) => product.collection.includes(c)) ? 3 : 0)
      return ascore(b) - ascore(a)
    })
    .slice(0, count)

export const getFeatured = () =>
  products.filter((p) => p.collection.includes('embroidered')).slice(0, 4)

export const getNewArrivals = () => products.filter((p) => p.new)

export const getCollections = () => [
  { key: 'new', label: 'New Arrivals', image: [31450892] },
  { key: 'linen', label: 'Linen', image: [30618181] },
  { key: 'embroidered', label: 'Embroidered', image: [13245208] },
  { key: 'handwoven', label: 'Handwoven', image: [33925037] },
]

export const searchProducts = (q) => {
  const t = (q || '').trim().toLowerCase()
  if (!t) return []
  const pad = products.map((p) => `${p.name} ${p.line} ${p.category} ${p.collection.join(' ')} ${p.fabrics.join(' ')}`.toLowerCase())
  return products.filter((_, i) => pad[i].includes(t))
}