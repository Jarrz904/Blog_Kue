import { Recipe } from "@/types";

export const recipes: Recipe[] = [
  // ==========================================
  // --- KATEGORI 1: TRADISIONAL (6 RESEP) ---
  // ==========================================
  {
    id: 't1',
    title: 'Lapis Legit Premium',
    slug: 'lapis-legit-premium',
    description: 'Kue tradisional mewah dengan puluhan lapisan lembut dan aroma rempah spekuk yang khas.',
    category: 'Tradisional',
    prepTime: '120 menit',
    difficulty: 'Sulit',
    // Gambar layer cake/kue lapis
    image: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?q=80&w=800',
    ingredients: ['30 butir kuning telur', '500g mentega premium', '200g gula halus', '1 sdm bumbu spekuk'],
    instructions: [
      'Kocok mentega dan gula hingga putih berjejak.',
      'Masukkan kuning telur satu per satu sambil terus dikocok.',
      'Panggang adonan selapis demi selapis hingga matang kecokelatan.',
      'Tekan perlahan tiap lapisan agar rata.'
    ],
    isFeatured: true
  },
  {
    id: 't2',
    title: 'Klepon Pandan Gula Aren',
    slug: 'klepon-pandan',
    description: 'Bola ketan kenyal dengan sensasi ledakan gula aren cair di dalam dan taburan kelapa gurih.',
    category: 'Tradisional',
    prepTime: '40 menit',
    difficulty: 'Mudah',
    // Gambar kue hijau baluran kelapa
    image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=800',
    ingredients: ['250g tepung ketan', 'Gula aren sisir', 'Air pandan', 'Kelapa parut'],
    instructions: [
      'Campur tepung ketan dengan air pandan hingga kalis.',
      'Ambil sedikit adonan, isi dengan gula aren, lalu bulatkan.',
      'Rebus dalam air mendidih hingga mengapung.',
      'Gulingkan di atas parutan kelapa muda.'
    ],
    isFeatured: false
  },
  {
    id: 't3',
    title: 'Bika Ambon Medan',
    slug: 'bika-ambon',
    description: 'Kue bersarang khas Medan yang memiliki tekstur kenyal dengan aroma daun jeruk dan serai.',
    category: 'Tradisional',
    prepTime: '180 menit',
    difficulty: 'Sedang',
    // Gambar kue kuning tekstur berongga/sarang
    image: 'https://images.unsplash.com/photo-1590005024862-6b67679a29fb?q=80&w=800', 
    ingredients: ['300g tepung sagu', '400ml santan kental', '10 kuning telur', 'Ragi instan'],
    instructions: [
      'Buat biang dari ragi dan air hangat.',
      'Campur santan, kuning telur, dan tepung sagu.',
      'Diamkan adonan selama 2-3 jam hingga berbuih.',
      'Panggang dalam oven dengan pintu sedikit terbuka.'
    ],
    isFeatured: true
  },
  {
    id: 't4',
    title: 'Kue Cucur Gula Merah',
    slug: 'kue-cucur',
    description: 'Kue goreng tradisional dengan serat yang cantik dan bagian pinggir yang renyah.',
    category: 'Tradisional',
    prepTime: '30 menit',
    difficulty: 'Mudah',
    // Gambar kue goreng kecoklatan (mirip tekstur cucur)
    image: 'https://images.unsplash.com/photo-1621236300298-2b9bf369657b?q=80&w=800',
    ingredients: ['250g tepung beras', 'Gula merah cair', 'Sedikit garam', 'Air'],
    instructions: [
      'Campur tepung beras dengan larutan gula merah.',
      'Pukul-pukul adonan agar seratnya keluar.',
      'Diamkan selama 1 jam.',
      'Goreng satu per satu dengan sedikit minyak panas.'
    ],
    isFeatured: false
  },
  {
    id: 't5',
    title: 'Serabi Kinca Pandan',
    slug: 'serabi-kinca',
    description: 'Pancake tradisional Indonesia yang lembut dengan siraman saus kinca gula merah yang manis.',
    category: 'Tradisional',
    prepTime: '45 menit',
    difficulty: 'Mudah',
    // Gambar pancake basah tradisional
    image: 'https://images.unsplash.com/photo-1628120302306-03f47c22759f?q=80&w=800',
    ingredients: ['Tepung terigu', 'Santan', 'Ragi', 'Gula merah'],
    instructions: [
      'Masak adonan serabi di atas cetakan tanah liat.',
      'Tunggu hingga berlubang-lubang lalu angkat.',
      'Masak gula merah dan santan untuk kuah kinca.',
      'Sajikan serabi dengan siraman kuah.'
    ],
    isFeatured: false
  },
  {
    id: 't6',
    title: 'Onde-Onde Wijen Isi Kacang Hijau',
    slug: 'onde-onde',
    description: 'Jajanan bulat balutan biji wijen yang kenyal dengan isian kacang hijau yang manis dan gurih.',
    category: 'Tradisional',
    prepTime: '60 menit',
    difficulty: 'Sedang',
    // Gambar bola-bola wijen (sesame balls)
    image: 'https://images.unsplash.com/photo-1622979261358-86d302bc657b?q=80&w=800',
    ingredients: ['Tepung ketan', 'Kacang hijau kupas', 'Biji wijen', 'Gula pasir'],
    instructions: [
      'Kukus kacang hijau dan haluskan bersama gula.',
      'Buat adonan kulit dari tepung ketan.',
      'Isi kulit dengan kacang hijau, bulatkan sempurna.',
      'Gulingkan di atas wijen lalu goreng dengan api kecil.'
    ],
    isFeatured: false
  },

  // ==========================================
  // --- KATEGORI 2: MODERN (6 RESEP) ---
  // ==========================================
  {
    id: 'm1',
    title: 'Japanese Souffle Pancake',
    slug: 'souffle-pancake',
    description: 'Pancake awan khas Jepang yang super lembut, tinggi, dan bergoyang saat disentuh.',
    category: 'Modern',
    prepTime: '30 menit',
    difficulty: 'Sedang',
    // Gambar souffle pancake yang tebal dan fluffy
    image: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=800',
    ingredients: ['2 butir telur', '30ml susu', '35g tepung', '25g gula'],
    instructions: [
      'Kocok putih telur dan gula hingga kaku (stiff peak).',
      'Campur kuning telur dengan susu dan tepung.',
      'Aduk balik kedua adonan dengan sangat perlahan.',
      'Masak di teflon api kecil selama 5 menit tiap sisi.'
    ],
    isFeatured: true
  },
  {
    id: 'm2',
    title: 'Cromboloni Viral',
    slug: 'cromboloni',
    description: 'Kombinasi antara tekstur renyah Croissant dan bentuk bulat Bomboloni dengan isian krim.',
    category: 'Modern',
    prepTime: '120 menit',
    difficulty: 'Sulit',
    // Gambar pastry lumer cokelat
    image: 'https://images.unsplash.com/photo-1639667851375-47e45404983a?q=80&w=800',
    ingredients: ['Danish pastry sheet', 'Dark chocolate', 'Whipping cream'],
    instructions: [
      'Potong memanjang pastry sheet dan gulung.',
      'Panggang dalam ring cutter agar bentuknya bulat.',
      'Lubangi sisi cromboloni lalu semprotkan krim.',
      'Beri topping cokelat leleh di atasnya.'
    ],
    isFeatured: true
  },
  {
    id: 'm3',
    title: 'Mochi Bites Oreo',
    slug: 'mochi-bites',
    description: 'Mochi mungil kenyal dengan cocolan saus cream cheese dan remahan biskuit Oreo.',
    category: 'Modern',
    prepTime: '20 menit',
    difficulty: 'Mudah',
    // Gambar dessert bites / mochi kecil
    image: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?q=80&w=800',
    ingredients: ['Tepung ketan', 'Susu cair', 'Oreo', 'Bubuk cokelat'],
    instructions: [
      'Campur tepung ketan dan susu, lalu kukus hingga matang.',
      'Bentuk bulat kecil-kecil saat masih hangat.',
      'Baluri dengan bubuk cokelat.',
      'Sajikan dengan saus keju dan bubuk oreo.'
    ],
    isFeatured: false
  },
  {
    id: 'm4',
    title: 'Korean Garlic Cheese Bread',
    slug: 'korean-garlic-bread',
    description: 'Roti bun yang gurih dengan isian cream cheese manis dan siraman saus mentega bawang.',
    category: 'Modern',
    prepTime: '60 menit',
    difficulty: 'Sedang',
    // Gambar roti dengan taburan garlic dan keju
    image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa?q=80&w=800',
    ingredients: ['Roti Bun', 'Cream cheese', 'Bawang putih', 'Parsley'],
    instructions: [
      'Belah roti menjadi 6 bagian jangan sampai putus.',
      'Isi sela-sela roti dengan cream cheese.',
      'Celupkan roti ke saus mentega bawang.',
      'Panggang kembali selama 10 menit.'
    ],
    isFeatured: false
  },
  {
    id: 'm5',
    title: 'Matcha Mille Crepes',
    slug: 'matcha-mille-crepes',
    description: 'Kue berlapis yang terdiri dari puluhan crepe tipis dengan krim matcha di setiap lapisannya.',
    category: 'Modern',
    prepTime: '90 menit',
    difficulty: 'Sulit',
    // Gambar layer crepe matcha
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800',
    ingredients: ['Bubuk Matcha', 'Tepung terigu', 'Telur', 'Whipping cream'],
    instructions: [
      'Buat adonan crepe dan masak tipis-tipis di teflon.',
      'Biarkan semua lembaran crepe mendingin.',
      'Tumpuk crepe sambil diolesi krim matcha.',
      'Simpan di kulkas minimal 4 jam sebelum dipotong.'
    ],
    isFeatured: false
  },
  {
    id: 'm6',
    title: 'Basque Burnt Cheesecake',
    slug: 'basque-burnt-cheesecake',
    description: 'Cheesecake asal Spanyol dengan tekstur lembut di dalam dan sensasi "gosong" karamel di luar.',
    category: 'Modern',
    prepTime: '50 menit',
    difficulty: 'Mudah',
    // Gambar basque burnt cheesecake asli
    image: 'https://images.unsplash.com/photo-1601297594589-d5c2288019fb?q=80&w=800',
    ingredients: ['Cream cheese', 'Heavy cream', 'Gula pasir', 'Telur', 'Tepung terigu'],
    instructions: [
      'Kocok cream cheese dan gula hingga sangat lumer.',
      'Masukkan telur satu per satu, aduk rata.',
      'Tuang heavy cream dan sedikit tepung.',
      'Panggang suhu tinggi 220°C agar permukaannya gosong eksotis.'
    ],
    isFeatured: true
  },

  // ==========================================
  // --- KATEGORI 3: ROTI (6 RESEP) ---
  // ==========================================
  {
    id: 'r1',
    title: 'Artisan Sourdough Bread',
    slug: 'artisan-sourdough',
    description: 'Roti sehat menggunakan ragi alami dengan tekstur kulit luar renyah dan bagian dalam lembut.',
    category: 'Roti',
    prepTime: '24 jam',
    difficulty: 'Sulit',
    // Gambar artisan sourdough klasik
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=800',
    ingredients: ['Tepung protein tinggi', 'Air', 'Garam', 'Sourdough starter'],
    instructions: [
      'Campur bahan dan diamkan 30 menit (autolyse).',
      'Lakukan teknik stretch and fold setiap 30 menit.',
      'Fermentasi di dalam kulkas selama 12 jam.',
      'Panggang dalam panci besi (Dutch Oven) suhu tinggi.'
    ],
    isFeatured: true
  },
  {
    id: 'r2',
    title: 'Japanese Shokupan',
    slug: 'shokupan',
    description: 'Roti tawar susu khas Jepang yang memiliki tekstur sangat empuk selembut kapas.',
    category: 'Roti',
    prepTime: '120 menit',
    difficulty: 'Sedang',
    // Gambar roti tawar susu jepang putih
    image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=800',
    ingredients: ['Tepung terigu', 'Susu cair', 'Mentega', 'Ragi instan'],
    instructions: [
      'Uleni adonan hingga benar-benar kalis elastis.',
      'Istirahatkan adonan hingga mengembang dua kali lipat.',
      'Bagi adonan, masukkan ke loyang khusus roti tawar.',
      'Panggang hingga kuning keemasan.'
    ],
    isFeatured: false
  },
  {
    id: 'r3',
    title: 'Rosemary Garlic Focaccia',
    slug: 'garlic-focaccia',
    description: 'Roti pipih khas Italia yang kaya akan minyak zaitun dengan taburan rempah rosemary segar.',
    category: 'Roti',
    prepTime: '180 menit',
    difficulty: 'Mudah',
    // Gambar roti focaccia otentik
    image: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?q=80&w=800',
    ingredients: ['Tepung terigu', 'Olive oil', 'Rosemary', 'Garam laut'],
    instructions: [
      'Campur adonan dan biarkan mengembang di loyang lebar.',
      'Tekan-tekan permukaan adonan dengan jari hingga berlubang.',
      'Siram dengan banyak olive oil dan taburan rosemary.',
      'Panggang hingga renyah.'
    ],
    isFeatured: false
  },
  {
    id: 'r4',
    title: 'Soft Cinnamon Rolls',
    slug: 'cinnamon-rolls',
    description: 'Roti gulung manis dengan aroma kayu manis yang kuat dan frosting cream cheese yang lumer.',
    category: 'Roti',
    prepTime: '90 menit',
    difficulty: 'Sedang',
    // Gambar cinnamon roll yang dilumuri frosting
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=800',
    ingredients: ['Tepung terigu', 'Kayu manis bubuk', 'Gula palem', 'Cream cheese'],
    instructions: [
      'Gilas adonan roti hingga tipis, olesi mentega dan kayu manis.',
      'Gulung dan potong-potong setebal 3 cm.',
      'Biarkan mengembang kembali, lalu panggang.',
      'Olesi dengan cream cheese saat masih hangat.'
    ],
    isFeatured: false
  },
  {
    id: 'r5',
    title: 'Blueberry Bagels',
    slug: 'bagel-polos',
    description: 'Roti bulat kenyal yang memiliki tekstur unik karena direbus sebelum dipanggang.',
    category: 'Roti',
    prepTime: '120 menit',
    difficulty: 'Sedang',
    // Gambar setumpuk bagel klasik
    image: 'https://images.unsplash.com/photo-1533243166412-8820f4c08466?q=80&w=800',
    ingredients: ['Tepung protein tinggi', 'Blueberry kering', 'Ragi', 'Madu'],
    instructions: [
      'Uleni adonan dan bentuk menjadi cincin.',
      'Rebus adonan dalam air mendidih selama 30 detik tiap sisi.',
      'Segera masukkan ke oven.',
      'Panggang hingga permukaan kecokelatan dan keras.'
    ],
    isFeatured: false
  },
  {
    id: 'r6',
    title: 'Classic Butter Croissant',
    slug: 'butter-croissant',
    description: 'Pastri asal Prancis yang sangat renyah di luar, berongga di dalam, dan sangat wangi mentega.',
    category: 'Roti',
    prepTime: '48 jam',
    difficulty: 'Sulit',
    // Gambar croissant mentega berserat
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800',
    ingredients: ['Tepung protein tinggi', 'Mentega dingin lipat (Korsvet)', 'Susu cair', 'Ragi', 'Gula'],
    instructions: [
      'Buat adonan dasar roti dan simpan di kulkas seharian.',
      'Lakukan teknik laminasi (lipat mentega ke dalam adonan) beberapa kali.',
      'Gilas tipis lalu potong membentuk segitiga.',
      'Gulung lalu panggang suhu tinggi hingga mengembang lapis demi lapis.'
    ],
    isFeatured: true
  },

  // ==========================================
  // --- KATEGORI 4: KUE KERING (6 RESEP) ---
  // ==========================================
  {
    id: 'k1',
    title: 'Nastar Klasik Wisman',
    slug: 'nastar-klasik',
    description: 'Kue kering legendaris isi nanas dengan mentega Wisman yang sangat wangi dan lumer.',
    category: 'Kue Kering',
    prepTime: '60 menit',
    difficulty: 'Mudah',
    // Gambar nastar / tartlet
    image: 'https://images.unsplash.com/photo-1615484477201-9f4953340fab?q=80&w=800',
    ingredients: ['Mentega Wisman', 'Tepung terigu', 'Selai nanas', 'Kuning telur'],
    instructions: [
      'Kocok mentega dan gula halus sebentar saja.',
      'Campur dengan terigu hingga adonan bisa dipulung.',
      'Isi dengan selai nanas, bulatkan.',
      'Oles kuning telur dan panggang hingga matang.'
    ],
    isFeatured: true
  },
  {
    id: 'k2',
    title: 'Kastengel Keju Edam',
    slug: 'kastengel-keju',
    description: 'Kue kering gurih yang menggunakan keju edam tua untuk rasa yang lebih autentik.',
    category: 'Kue Kering',
    prepTime: '60 menit',
    difficulty: 'Mudah',
    // Gambar kastengel (cheese sticks) 
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=800',
    ingredients: ['Keju Edam', 'Keju Cheddar', 'Mentega', 'Tepung terigu'],
    instructions: [
      'Campur mentega dan keju edam parut.',
      'Cetak adonan memanjang seukuran jari.',
      'Taburi dengan parutan keju cheddar di atasnya.',
      'Panggang dengan suhu rendah agar garing merata.'
    ],
    isFeatured: false
  },
  {
    id: 'k3',
    title: 'Double Choco Cookies',
    slug: 'choco-cookies',
    description: 'Cookies cokelat yang renyah di luar namun masih terasa chewy di dalam dengan choco chips.',
    category: 'Kue Kering',
    prepTime: '30 menit',
    difficulty: 'Mudah',
    // Gambar chocochips lumer cokelat ganda
    image: 'https://images.unsplash.com/photo-1499636136210-654254a39491?q=80&w=800',
    ingredients: ['Bubuk kakao', 'Choco chips', 'Gula palem', 'Butter'],
    instructions: [
      'Kocok butter dan gula palem.',
      'Masukkan tepung dan cokelat bubuk.',
      'Bentuk bulat dan beri tekanan sedikit.',
      'Panggang selama 12 menit saja.'
    ],
    isFeatured: false
  },
  {
    id: 'k4',
    title: 'Classic Macaron',
    slug: 'macaron-warna-warni',
    description: 'Kue kering cantik berbasis almond dari Prancis yang memiliki tekstur renyah dan isian lembut.',
    category: 'Kue Kering',
    prepTime: '120 menit',
    difficulty: 'Sulit',
    // Gambar tumpukan macaron estetik
    image: 'https://images.unsplash.com/photo-1569864358642-9d161970268c?q=80&w=800',
    ingredients: ['Tepung Almond', 'Putih telur', 'Icing sugar', 'Pewarna'],
    instructions: [
      'Kocok putih telur hingga kaku (meringue).',
      'Campur dengan almond dan gula dengan teknik macaronage.',
      'Spuit adonan ke loyang dan diamkan hingga permukaan kering.',
      'Panggang dengan suhu stabil 150 derajat.'
    ],
    isFeatured: false
  },
  {
    id: 'k5',
    title: 'Lidah Kucing Keju',
    slug: 'lidah-kucing',
    description: 'Kue kering tipis renyah yang sangat wangi butter, cocok untuk hidangan hari raya.',
    category: 'Kue Kering',
    prepTime: '45 menit',
    difficulty: 'Mudah',
    // Gambar kue renyah melengkung/lonjong
    image: 'https://images.unsplash.com/photo-1496116218417-1f9f257d0f12?q=80&w=800',
    ingredients: ['Putih telur', 'Mentega', 'Tepung terigu', 'Keju parut'],
    instructions: [
      'Kocok mentega dan gula hingga putih.',
      'Masukkan putih telur sedikit demi sedikit.',
      'Spuit tipis memanjang di atas loyang khusus.',
      'Panggang hingga bagian pinggir kecokelatan.'
    ],
    isFeatured: false
  },
  {
    id: 'k6',
    title: 'Kue Putri Salju',
    slug: 'putri-salju',
    description: 'Kue kering dengan isian kacang cincang halus yang diselimuti balutan gula halus yang dingin di mulut.',
    category: 'Kue Kering',
    prepTime: '50 menit',
    difficulty: 'Mudah',
    // Gambar kue bersalju/putih
    image: 'https://images.unsplash.com/photo-1512224527962-d277dd626fb3?q=80&w=800',
    ingredients: ['Tepung terigu', 'Mentega', 'Kacang mede cincang sangrai', 'Gula donat (gula dingin)'],
    instructions: [
      'Campur adonan mentega, terigu, dan mede cincang.',
      'Cetak bentuk bulan sabit.',
      'Panggang hingga kering dan matang.',
      'Selagi masih sedikit hangat, gulingkan kue langsung ke dalam gula dingin.'
    ],
    isFeatured: true
  },

  // ==========================================
  // --- KATEGORI 5: DESSERT (6 RESEP) ---
  // ==========================================
  {
    id: 'd1',
    title: 'Chocolate Lava Cake',
    slug: 'chocolate-lava',
    description: 'Cake cokelat dengan sensasi lelehan cokelat cair yang lumer saat dipotong.',
    category: 'Dessert',
    prepTime: '20 menit',
    difficulty: 'Mudah',
    // Gambar lelehan lava cake cokelat gelap
    image: 'https://images.unsplash.com/photo-1616031037011-087000171abe?q=80&w=800',
    ingredients: ['Dark chocolate', 'Mentega', 'Telur', 'Tepung'],
    instructions: [
      'Lelehkan cokelat dan mentega.',
      'Kocok telur dan gula, campur dengan lelehan cokelat.',
      'Panggang selama 10-12 menit (tengah harus tetap cair).',
      'Sajikan segera selagi hangat.'
    ],
    isFeatured: true
  },
  {
    id: 'd2',
    title: 'Classic Tiramisu',
    slug: 'tiramisu',
    description: 'Dessert mewah asal Italia dengan lapisan biskuit kopi dan keju mascarpone yang lembut.',
    category: 'Dessert',
    prepTime: '45 menit',
    difficulty: 'Sedang',
    // Gambar tiramisu dengan taburan kopi
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800',
    ingredients: ['Mascarpone', 'Kopi Espresso', 'Ladyfingers', 'Bubuk cokelat'],
    instructions: [
      'Celup biskuit ladyfingers ke dalam kopi.',
      'Susun biskuit di dasar wadah.',
      'Lapisi dengan adonan mascarpone.',
      'Taburi bubuk cokelat di atasnya dan dinginkan.'
    ],
    isFeatured: true
  },
  {
    id: 'd3',
    title: 'Mango Panna Cotta',
    slug: 'panna-cotta',
    description: 'Dessert puding sutra krim ala Italia dengan topping mangga segar yang manis asam.',
    category: 'Dessert',
    prepTime: '15 menit',
    difficulty: 'Mudah',
    // Gambar puding putih dengan mangga/potongan kuning
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800',
    ingredients: ['Heavy cream', 'Gelatin', 'Gula', 'Mangga segar'],
    instructions: [
      'Masak cream, gula, dan gelatin hingga larut.',
      'Tuang ke dalam gelas dan dinginkan di kulkas.',
      'Haluskan mangga untuk dijadikan saus di atasnya.',
      'Sajikan setelah puding set.'
    ],
    isFeatured: false
  },
  {
    id: 'd4',
    title: 'Mixed Fruit Tart',
    slug: 'fruit-tart',
    description: 'Tart renyah dengan isian vla vanilla yang lembut dan aneka buah-buahan segar di atasnya.',
    category: 'Dessert',
    prepTime: '60 menit',
    difficulty: 'Sedang',
    // Gambar tart pastry bulat dengan buah-buahan 
    image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=800',
    ingredients: ['Tepung terigu', 'Mentega dingin', 'Vla vanilla', 'Buah segar'],
    instructions: [
      'Buat adonan tart dan panggang hingga matang.',
      'Biarkan kulit tart mendingin.',
      'Isi dengan vla vanilla hingga penuh.',
      'Hias dengan potongan buah dan siraman agar-agar bening.'
    ],
    isFeatured: false
  },
  {
    id: 'd5',
    title: 'Chocolate Eclair',
    slug: 'eclair-cokelat',
    description: 'Pastry panjang yang diisi dengan vla vanilla dan dilapisi cokelat pekat di bagian atas.',
    category: 'Dessert',
    prepTime: '60 menit',
    difficulty: 'Sedang',
    // Gambar pastry eclair cokelat
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
    ingredients: ['Adonan choux', 'Vla vanilla', 'Dark chocolate glaze'],
    instructions: [
      'Bake choux pastry memanjang.',
      'Lubangi bagian bawah eclairs.',
      'Semprotkan vla ke dalam eclairs.',
      'Celupkan bagian atasnya ke cokelat leleh.'
    ],
    isFeatured: false
  },
  {
    id: 'd6',
    title: 'Vanilla Crème Brûlée',
    slug: 'creme-brulee',
    description: 'Custard vanilla creamy dengan lapisan gula karamel tipis dan renyah di permukaannya.',
    category: 'Dessert',
    prepTime: '60 menit',
    difficulty: 'Sedang',
    // Gambar wadah kecil (ramekin) dengan karamel bakar
    image: 'https://images.unsplash.com/photo-1470124122819-0e43888582b9?q=80&w=800',
    ingredients: ['Heavy cream', 'Kuning telur', 'Ekstrak vanilla', 'Gula pasir'],
    instructions: [
      'Panaskan krim bersama vanilla, lalu aduk perlahan dengan kuning telur.',
      'Tuang adonan ke mangkuk kecil (ramekin).',
      'Panggang dengan cara direndam setengah tinggi air panas.',
      'Taburi gula di atasnya saat disajikan, lalu bakar menggunakan kitchen torch.'
    ],
    isFeatured: true
  },

  // ==========================================
  // --- KATEGORI 6: CAKE (6 RESEP) ---
  // ==========================================
  {
    id: 'c1',
    title: 'Red Velvet Cake',
    slug: 'red-velvet',
    description: 'Kue mewah berwarna merah gelap dengan lapisan cream cheese frosting yang gurih.',
    category: 'Cake',
    prepTime: '90 menit',
    difficulty: 'Sedang',
    // Gambar slice kue red velvet klasik
    image: 'https://images.unsplash.com/photo-1586788280742-d007462d5139?q=80&w=800',
    ingredients: ['Buttermilk', 'Cocoa powder', 'Pewarna merah', 'Cream cheese'],
    instructions: [
      'Panggang dua lapis kue red velvet.',
      'Biarkan kue benar-benar dingin.',
      'Oleskan cream cheese frosting di antara lapisan.',
      'Hias bagian luar kue dengan sisa remahan kue.'
    ],
    isFeatured: true
  },
  {
    id: 'c2',
    title: 'New York Cheesecake',
    slug: 'ny-cheesecake',
    description: 'Cheesecake panggang klasik yang sangat padat, creamy, dan memiliki dasar biskuit renyah.',
    category: 'Cake',
    prepTime: '120 menit',
    difficulty: 'Sedang',
    // Gambar slice kue keju polos padat
    image: 'https://images.unsplash.com/photo-1524351199679-46cddf330736?q=80&w=800',
    ingredients: ['Cream cheese', 'Gula pasir', 'Telur', 'Biskuit hancur'],
    instructions: [
      'Buat dasar biskuit di loyang.',
      'Kocok cream cheese hingga sangat lembut.',
      'Panggang dengan teknik water bath (loyang di dalam air).',
      'Dinginkan di kulkas minimal semalaman.'
    ],
    isFeatured: false
  },
  {
    id: 'c3',
    title: 'Classic Black Forest',
    slug: 'black-forest',
    description: 'Kue cokelat berlapis krim kocok dengan buah ceri hitam dan parutan cokelat melimpah.',
    category: 'Cake',
    prepTime: '120 menit',
    difficulty: 'Sedang',
    // Gambar black forest dengan cherry
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800',
    ingredients: ['Cokelat bubuk', 'Ceri hitam', 'Whipping cream', 'Dark chocolate'],
    instructions: [
      'Buat sponge cake cokelat dan belah menjadi 3 lapis.',
      'Beri air ceri dan krim di setiap lapisan.',
      'Tutup seluruh permukaan dengan krim.',
      'Taburi dengan parutan cokelat yang banyak.'
    ],
    isFeatured: false
  },
  {
    id: 'c4',
    title: 'Victoria Sponge Cake',
    slug: 'victoria-sponge',
    description: 'Kue spons klasik asal Inggris dengan isian selai stroberi dan krim vanilla.',
    category: 'Cake',
    prepTime: '60 menit',
    difficulty: 'Mudah',
    // Gambar layer sponge cake dengan krim strawberry
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=800',
    ingredients: ['Telur', 'Tepung terigu', 'Selai stroberi', 'Buttercream'],
    instructions: [
      'Panggang dua buah kue spons vanilla.',
      'Olesi selai stroberi di atas satu kue.',
      'Tumpuk dengan buttercream dan kue kedua.',
      'Taburi gula halus di bagian paling atas.'
    ],
    isFeatured: false
  },
  {
    id: 'c5',
    title: 'Moist Carrot Cake',
    slug: 'carrot-cake',
    description: 'Kue wortel rempah yang sangat lembap dengan taburan kacang kenari yang renyah.',
    category: 'Cake',
    prepTime: '60 menit',
    difficulty: 'Mudah',
    // Gambar carrot cake tebal
    image: 'https://images.unsplash.com/photo-1551829142-d9b812bb3d2f?q=80&w=800',
    ingredients: ['Parutan wortel', 'Kayu manis', 'Kacang kenari', 'Cream cheese'],
    instructions: [
      'Campur parutan wortel ke dalam adonan cake.',
      'Panggang hingga matang.',
      'Biarkan dingin sepenuhnya.',
      'Frosting dengan cream cheese dan taburi kenari.'
    ],
    isFeatured: false
  },
  {
    id: 'c6',
    title: 'Glazed Lemon Pound Cake',
    slug: 'lemon-pound-cake',
    description: 'Bolu padat menyegarkan dari perasan sari lemon dan kulit lemon, dilumuri gula lemon glaze.',
    category: 'Cake',
    prepTime: '75 menit',
    difficulty: 'Mudah',
    // Gambar kue lemon kuning yang disiram gula cair putih
    image: 'https://images.unsplash.com/photo-1601633512217-09d57a9f0e1d?q=80&w=800',
    ingredients: ['Mentega', 'Tepung terigu', 'Kulit lemon parut (Zest)', 'Jus lemon segar', 'Gula halus'],
    instructions: [
      'Kocok mentega dan gula hingga sangat pucat dan mengembang.',
      'Masukkan campuran telur dan tepung secara bergantian.',
      'Tuang adonan ke loyang loaf memanjang, panggang sampai padat.',
      'Sajikan dengan lumuran lemon glaze di atasnya.'
    ],
    isFeatured: true
  }
];