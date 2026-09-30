export interface PromptItem {
  no: string;
  tagEn: string;
  tagZh: string;
  titleEn: string;
  titleZh: string;
  prompt: string;
  img: string;
}

export const REAL_TEMPLATES: PromptItem[] = [
  {
    no: "No.14720",
    tagEn: "Banner Poster",
    tagZh: "Banner 横幅",
    titleEn: "Vintage Rubber Stamp Field Notes Poster",
    titleZh: "橡皮章旅行田野笔记海报",
    prompt: "Rubber Stamp Travel Field Notes Poster — Natural Realism Version Create a separate “Rubber Stamp Travel Field Notes Poster” for each photo I upload. Output each photo individually. Never create a collage or combine multiple locations into a single image. Retain exact landmark features, London double-decker bus, Big Ben, vintage textured craft paper, lithograph print aesthetic --ar 3:4 --v 6.1",
    img: "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/9a7b2e9c39f816d6c699c2a133e11b6d8bfdc464/data/images/case538.jpg"
  },
  {
    no: "No.14719",
    tagEn: "Commercial Concept",
    tagZh: "商品场景图",
    titleEn: "Underground Archive Dark Surrealist Artwork",
    titleZh: "地下档案馆暗黑概念海报",
    prompt: "Use case: stylized-concept Asset type: vertical social-media artwork for the “Your Dark Side” theme Create an original psychological dark-surrealist scene in a colossal underground archive. Endless shelves of sealed black stone books, eerie volumetric god rays cutting through black dust, Octane render 8k --ar 9:16",
    img: "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/9a7b2e9c39f816d6c699c2a133e11b6d8bfdc464/data/images/case537.jpg"
  },
  {
    no: "No.14718",
    tagEn: "Cinematic Portrait",
    tagZh: "摄影与写实",
    titleEn: "Spring Cherry Blossom Golden Hour Film Portrait",
    titleZh: "春日樱花回眸电影人像",
    prompt: "{ \"title\": \"WHISPERS OF SPRING\", \"scene\": \"A peaceful pathway beneath blooming cherry blossom trees during a warm spring afternoon. Pink blossoms fill the canopy overhead while delicate petals drift gracefully through warm golden hour backlight. 35mm film photography, shallow depth of field, authentic film grain --ar 3:4 --style raw\" }",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
  },
  {
    no: "No.14717",
    tagEn: "Lookbook Grid",
    tagZh: "角色与人物",
    titleEn: "12-Panel Hairstyle Consistency Lookbook",
    titleZh: "同一人脸十二款发型 Lookbook",
    prompt: "Create a 12-panel grid (3 columns × 4 rows, numbered 1 to 12) showing the SAME person from the reference photo with 12 different modern hairstyles. This is a commercial hairstyle lookbook. Consistent lighting, high-end beauty portrait photography, neutral studio gray background --ar 4:5 --v 6.1",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
  },
  {
    no: "No.14716",
    tagEn: "Editorial Banner",
    tagZh: "Banner 横幅",
    titleEn: "Red Light Interference Editorial Fashion Poster",
    titleZh: "红光干扰实验编辑人像海报",
    prompt: "Create a medium-sized 9:16 experimental editorial portrait poster using the following customizable inputs: Subject: [Adult Male or Female Portrait] Interference: [Color Split / Narrow Light Beam / Horizontal Cut / Motion Blur Prism], high fashion magazine typography in pure negative space --ar 9:16",
    img: "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/9a7b2e9c39f816d6c699c2a133e11b6d8bfdc464/data/images/case534.jpg"
  },
  {
    no: "No.14715",
    tagEn: "Doodle Character",
    tagZh: "角色与人物",
    titleEn: "Hand-Drawn Doodle Fashion Sketch Illustration",
    titleZh: "手绘涂鸦时尚人物插画",
    prompt: "Transform the subject from the reference image into a cute, quirky hand-drawn doodle illustration. Use a minimalist children’s storybook / fashion sketch aesthetic with loose, imperfect black ink lines, visible scribbly textures, warm pastel accents on textured watercolor paper --ar 3:4",
    img: "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/9a7b2e9c39f816d6c699c2a133e11b6d8bfdc464/data/images/case533.jpg"
  },
  {
    no: "No.14714",
    tagEn: "E-Commerce Suite",
    tagZh: "电商主图",
    titleEn: "6-Panel Lemon Beverage Miniature Commercial",
    titleZh: "六宫格柠檬饮料微缩广告",
    prompt: "Create a Cannes-level premium summer beverage campaign poster for a fictional lemon drink brand called 'LIMORA', using a strict 2-column by 3-row grid layout with six perfectly aligned panels. Ultra-realistic liquid splashes, hyper-detailed condensation drops on iced glass, refreshing editorial commercial shoot --ar 2:3",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
  },
  {
    no: "No.14712",
    tagEn: "Doodle Overlay",
    tagZh: "角色与人物",
    titleEn: "Realistic Photo Background with Doodle Characters",
    titleZh: "实拍背景涂鸦人物替换",
    prompt: "Transform ONLY the people in the uploaded photo into adorable hand-drawn doodle characters while keeping the original photographic background unchanged. CORE RULE: Background = original realistic photo. People = cute hand-drawn outline aesthetic with dynamic playful gestures --ar 3:4",
    img: "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/9a7b2e9c39f816d6c699c2a133e11b6d8bfdc464/data/images/case530.jpg"
  },
  {
    no: "No.14711",
    tagEn: "Outdoor Fashion",
    tagZh: "摄影与写实",
    titleEn: "Dreamy Cloud Balloon Mountain Ridge Portrait",
    titleZh: "云朵气球山脊旅行人像",
    prompt: "Create a dreamy ultra-photorealistic outdoor fashion photograph based on the person in @image1. IDENTITY & FACE: Preserve the exact facial identity of the person in @image1. Dramatic mountain ridge at sunrise, whimsical hot air balloon floating in pastel clouds, high-fashion styling --ar 3:4",
    img: "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/9a7b2e9c39f816d6c699c2a133e11b6d8bfdc464/data/images/case529.jpg"
  },
  {
    no: "No.14708",
    tagEn: "Volumetric Stage",
    tagZh: "Banner 横幅",
    titleEn: "Volumetric Laser Dark Stage Poster",
    titleZh: "体积激光黑场海报",
    prompt: "Start in a pitch-black theatre, slicing space like a laboratory specimen using six planar sheets of authentic volumetric laser light. Each laser sheet must originate from a distinct hardware emitter with clear perspective and measurable physical depth in thin theatrical haze. Subject stands at the apex intersection holding a clear acrylic prism that refracts a subtle secondary fan of chromatic beamlets. Strict diagonal ascent from lower-left to upper-right. Face revealed solely by an unforgiving rim light; main title shares true vanishing-point perspective with laser plane #3. Negative space remains pure vacuum black. Never degrade into nightclub laser patterns, holographic HUD tropes, or ambient glows without physical origins. --ar 9:16 --v 6.1",
    img: "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/9a7b2e9c39f816d6c699c2a133e11b6d8bfdc464/data/images/case526.jpg"
  },
  {
    no: "No.14707",
    tagEn: "Studio Portrait",
    tagZh: "摄影与写实",
    titleEn: "Burgundy Studio Editorial Male Portrait",
    titleZh: "酒红棚拍男士时尚肖像",
    prompt: "A cinematic, ultra-realistic close-up portrait of a stylish man, using the provided image as an accurate face reference. Preserve his natural facial identity, thick naturally curly dark brown hair, neatly trimmed salt-and-pepper beard, deep wine-red velvet studio backdrop, rim lighting --ar 4:5",
    img: "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/9a7b2e9c39f816d6c699c2a133e11b6d8bfdc464/data/images/case525.jpg"
  },
  {
    no: "No.14704",
    tagEn: "Storybook Avatar",
    tagZh: "角色与人物",
    titleEn: "2D Children's Storybook Crayon Avatar",
    titleZh: "儿童故事书手绘头像",
    prompt: "Use the single uploaded photo as the only visual reference. Transform the person into an adorable hand-drawn 2D children’s storybook character, while keeping their identity immediately recognizable. Whimsical textured crayon shading, storybook fairytale feel --ar 1:1",
    img: "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/9a7b2e9c39f816d6c699c2a133e11b6d8bfdc464/data/images/case522.jpg"
  }
];
