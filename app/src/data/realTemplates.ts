export interface PromptItem {
  no: string;
  tag: string;
  title: string;
  prompt: string;
  img: string;
}

export const REAL_TEMPLATES: PromptItem[] = [
  {
    no: "No.14720",
    tag: "Banner 横幅",
    title: "橡皮章旅行田野笔记海报",
    prompt: "Rubber Stamp Travel Field Notes Poster — Natural Realism Version Create a separate “Rubber Stamp Travel Field Notes Poster” for each photo I upload. Output each photo individually. Never create a collage or combine multiple locations into a single image. Retain exact landmark features, London double-decker bus, Big Ben, vintage textured craft paper, lithograph print aesthetic --ar 3:4 --v 6.1",
    img: "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/9a7b2e9c39f816d6c699c2a133e11b6d8bfdc464/data/images/case538.jpg"
  },
  {
    no: "No.14719",
    tag: "商品场景图",
    title: "地下档案馆暗黑概念海报",
    prompt: "Use case: stylized-concept Asset type: vertical social-media artwork for the “Your Dark Side” theme Create an original psychological dark-surrealist scene in a colossal underground archive. Endless shelves of sealed black stone books, eerie volumetric god rays cutting through black dust, Octane render 8k --ar 9:16",
    img: "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/9a7b2e9c39f816d6c699c2a133e11b6d8bfdc464/data/images/case537.jpg"
  },
  {
    no: "No.14718",
    tag: "摄影与写实",
    title: "春日樱花回眸电影人像",
    prompt: "{ \"title\": \"WHISPERS OF SPRING\", \"scene\": \"A peaceful pathway beneath blooming cherry blossom trees during a warm spring afternoon. Pink blossoms fill the canopy overhead while delicate petals drift gracefully through warm golden hour backlight. 35mm film photography, shallow depth of field, authentic film grain --ar 3:4 --style raw\" }",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
  },
  {
    no: "No.14717",
    tag: "角色与人物",
    title: "同一人脸十二款发型 Lookbook",
    prompt: "Create a 12-panel grid (3 columns × 4 rows, numbered 1 to 12) showing the SAME person from the reference photo with 12 different modern hairstyles. This is a commercial hairstyle lookbook. Consistent lighting, high-end beauty portrait photography, neutral studio gray background --ar 4:5 --v 6.1",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
  },
  {
    no: "No.14716",
    tag: "Banner 横幅",
    title: "红光干扰实验编辑人像海报",
    prompt: "Create a medium-sized 9:16 experimental editorial portrait poster using the following customizable inputs: Subject: [Adult Male or Female Portrait] Interference: [Color Split / Narrow Light Beam / Horizontal Cut / Motion Blur Prism], high fashion magazine typography in pure negative space --ar 9:16",
    img: "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/9a7b2e9c39f816d6c699c2a133e11b6d8bfdc464/data/images/case534.jpg"
  },
  {
    no: "No.14715",
    tag: "角色与人物",
    title: "手绘涂鸦时尚人物插画",
    prompt: "Transform the subject from the reference image into a cute, quirky hand-drawn doodle illustration. Use a minimalist children’s storybook / fashion sketch aesthetic with loose, imperfect black ink lines, visible scribbly textures, warm pastel accents on textured watercolor paper --ar 3:4",
    img: "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/9a7b2e9c39f816d6c699c2a133e11b6d8bfdc464/data/images/case533.jpg"
  },
  {
    no: "No.14714",
    tag: "电商主图",
    title: "六宫格柠檬饮料微缩广告",
    prompt: "Create a Cannes-level premium summer beverage campaign poster for a fictional lemon drink brand called 'LIMORA', using a strict 2-column by 3-row grid layout with six perfectly aligned panels. Ultra-realistic liquid splashes, hyper-detailed condensation drops on iced glass, refreshing editorial commercial shoot --ar 2:3",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
  },
  {
    no: "No.14712",
    tag: "角色与人物",
    title: "实拍背景涂鸦人物替换",
    prompt: "Transform ONLY the people in the uploaded photo into adorable hand-drawn doodle characters while keeping the original photographic background unchanged. CORE RULE: Background = original realistic photo. People = cute hand-drawn outline aesthetic with dynamic playful gestures --ar 3:4",
    img: "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/9a7b2e9c39f816d6c699c2a133e11b6d8bfdc464/data/images/case530.jpg"
  },
  {
    no: "No.14711",
    tag: "摄影与写实",
    title: "云朵气球山脊旅行人像",
    prompt: "Create a dreamy ultra-photorealistic outdoor fashion photograph based on the person in @image1. IDENTITY & FACE: Preserve the exact facial identity of the person in @image1. Dramatic mountain ridge at sunrise, whimsical hot air balloon floating in pastel clouds, high-fashion styling --ar 3:4",
    img: "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/9a7b2e9c39f816d6c699c2a133e11b6d8bfdc464/data/images/case529.jpg"
  },
  {
    no: "No.14708",
    tag: "Banner 横幅",
    title: "体积激光黑场海报",
    prompt: "从全黑剧场开始，像切标本一样用六片真实体积激光把空间分层。光面必须有明确起点、透视和薄雾中的厚度，人物站在交汇点，透明道具折射出一小束异色光扇。构图沿左下至右上的对角线推进，脸只用一道克制边光揭示；标题与其中一片光面共享透视，小字留在纯黑负空间。每次替换主题与角色时，不得退化成夜店模板、HUD、霓虹城市或无物理来源的光线。--ar 9:16 --v 6.1",
    img: "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/9a7b2e9c39f816d6c699c2a133e11b6d8bfdc464/data/images/case526.jpg"
  },
  {
    no: "No.14707",
    tag: "摄影与写实",
    title: "酒红棚拍男士时尚肖像",
    prompt: "A cinematic, ultra-realistic close-up portrait of a stylish man, using the provided image as an accurate face reference. Preserve his natural facial identity, thick naturally curly dark brown hair, neatly trimmed salt-and-pepper beard, deep wine-red velvet studio backdrop, rim lighting --ar 4:5",
    img: "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/9a7b2e9c39f816d6c699c2a133e11b6d8bfdc464/data/images/case525.jpg"
  },
  {
    no: "No.14704",
    tag: "角色与人物",
    title: "儿童故事书手绘头像",
    prompt: "Use the single uploaded photo as the only visual reference. Transform the person into an adorable hand-drawn 2D children’s storybook character, while keeping their identity immediately recognizable. Whimsical textured crayon shading, storybook fairytale feel --ar 1:1",
    img: "https://raw.githubusercontent.com/freestylefly/awesome-gpt-image-2/9a7b2e9c39f816d6c699c2a133e11b6d8bfdc464/data/images/case522.jpg"
  }
];
