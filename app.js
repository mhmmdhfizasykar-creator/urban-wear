const WHATSAPP_NUMBER = "6281234567890";

const PRODUCTS = [
  {
    id: "uw-01",
    name: "Bronx Heavy Varsity Jacket",
    category: "Outer & Jacket",
    price: 589000,
    featured: true,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    colors: ["Obsidian", "Rust Orange", "Bone White"],
    sizes: ["S", "M", "L", "XL"],
    description: "Jaket varsity bergaya kampus & jalanan Amerika dengan panel bahu tegas, rib elastis tebal, dan kancing snap matte.",
    material: "Wool-blend fleece 420 GSM dengan lapisan quilted satin halus di bagian dalam.",
    fit: "Relaxed boxy fit dengan potongan bahu sedikit turun.",
    care: "Dry clean atau cuci tangan air dingin, jangan diperas keras."
  },
  {
    id: "uw-02",
    name: "Detroit Canvas Work Jacket",
    category: "Outer & Jacket",
    price: 549000,
    featured: true,
    badge: "Drop 04",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    colors: ["Charcoal", "Sandstone"],
    sizes: ["M", "L", "XL"],
    description: "Work jacket terinspirasi seragam bengkel & industri Midwest Amerika dengan kerah corduroy kontras.",
    material: "100% heavy cotton duck canvas 14 oz tahan gesekan.",
    fit: "Structured cropped work fit yang pas di pinggang.",
    care: "Cuci terbalik dengan deterjen lembut, jemur teduh."
  },
  {
    id: "uw-03",
    name: "Brooklyn Windbreaker Shell",
    category: "Outer & Jacket",
    price: 429000,
    featured: false,
    badge: "New",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=80",
    colors: ["Slate Black", "Signal Orange"],
    sizes: ["S", "M", "L", "XL"],
    description: "Jaket windbreaker ringan untuk mobilitas kota, dilengkapi saku ritsleting samping dan serut bawah.",
    material: "Water-repellent crinkle nylon dengan furing mesh sirkulasi udara.",
    fit: "Loose street fit nyaman ditumpuk di atas hoodie.",
    care: "Lap noda dengan kain lembap atau cuci putaran lembut."
  },
  {
    id: "uw-04",
    name: "Harlem Sherpa Trucker Jacket",
    category: "Outer & Jacket",
    price: 629000,
    featured: false,
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
    colors: ["Washed Indigo", "Off-White"],
    sizes: ["M", "L", "XL"],
    description: "Trucker jacket klasik Amerika dengan kerah sherpa bulu domba sintetis yang hangat dan bertekstur.",
    material: "Washed denim 13 oz dengan lining sherpa fleece lembut.",
    fit: "Classic American trucker cut dengan ruang gerak lengan lega.",
    care: "Cuci dingin terpisah, hindari pemutih dan pengering panas tinggi."
  },
  {
    id: "uw-05",
    name: "Venice Boxy Heavy Tee 280 GSM",
    category: "Tops & Tees",
    price: 189000,
    featured: true,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    colors: ["Bone White", "Charcoal", "Burnt Orange"],
    sizes: ["S", "M", "L", "XL"],
    description: "Kaos polos potongan boxy khas skate scene Pantai Barat dengan kerah rib tebal anti-melar.",
    material: "100% combed cotton 280 GSM padat dan adem.",
    fit: "Wide boxy fit dengan panjang pas di atas pinggul.",
    care: "Cuci mesin mode lembut, setrika suhu sedang dari bagian dalam."
  },
  {
    id: "uw-06",
    name: "Chicago Graphic Oversized Tee",
    category: "Tops & Tees",
    price: 215000,
    featured: true,
    badge: "Drop 04",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=80",
    colors: ["Pitch Black", "Chalk"],
    sizes: ["S", "M", "L", "XL"],
    description: "Oversized tee dengan grafis sablon plastisol berkarakter tipografi retro Amerika.",
    material: "Heavyweight cotton jersey 260 GSM dengan sablon tahan retak.",
    fit: "Oversized drop-shoulder yang jatuh rapi.",
    care: "Balik kaos sebelum dicuci dan disetrika agar cetakan awet."
  },
  {
    id: "uw-07",
    name: "Queens Heavyweight Hoodie",
    category: "Tops & Tees",
    price: 399000,
    featured: false,
    badge: "New",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    colors: ["Charcoal", "Ash Grey", "Rust Orange"],
    sizes: ["S", "M", "L", "XL"],
    description: "Hoodie tebal tanpa tali serut untuk siluet minimalis modern, dilengkapi saku kanguru kokoh.",
    material: "Cotton fleece 450 GSM dengan bagian dalam looped lembut.",
    fit: "Boxy relaxed fit dengan potongan bahu lebar.",
    care: "Cuci air dingin, jemur mendatar agar bentuk tidak memanjang."
  },
  {
    id: "uw-08",
    name: "Austin Waffle Thermal Longsleeve",
    category: "Tops & Tees",
    price: 245000,
    featured: false,
    badge: "Staple",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
    colors: ["Off-White", "Charcoal"],
    sizes: ["M", "L", "XL"],
    description: "Kaos lengan panjang motif waffle thermal klasik untuk layering di bawah kemeja flanel atau jaket.",
    material: "Waffle-knit cotton blend bertekstur sarang lebah.",
    fit: "Relaxed athletic fit dengan manset pergelangan elastis.",
    care: "Cuci dengan kantong jaring (laundry bag) agar rajutan terjaga."
  },
  {
    id: "uw-09",
    name: "SoHo Relaxed Carpenter Denim",
    category: "Bottoms",
    price: 459000,
    featured: false,
    badge: "Drop 04",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
    colors: ["Washed Black", "Vintage Indigo"],
    sizes: ["S", "M", "L", "XL"],
    description: "Celana denim carpenter longgar dengan hammer loop dan saku utilitas khas celana kerja Amerika.",
    material: "Non-stretch denim 13.5 oz dengan jahitan triple-stitch.",
    fit: "Wide straight leg yang jatuh rapi di atas sepatu.",
    care: "Kurangi frekuensi pencucian denim, cukup angin-anginkan jika belum kotor."
  },
  {
    id: "uw-10",
    name: "Philly Ripstop Cargo Pants",
    category: "Bottoms",
    price: 439000,
    featured: false,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    colors: ["Olive Charcoal", "Obsidian"],
    sizes: ["S", "M", "L", "XL"],
    description: "Celana cargo fungsional dengan enam saku berpenutup kancing dan aksen tali serut di bagian mata kaki.",
    material: "Cotton ripstop grid anti-sobek dan ringan.",
    fit: "Relaxed cargo fit dengan pinggang elastis & kancing depan.",
    care: "Cuci dingin dengan warna senada, hindari pemutih."
  },
  {
    id: "uw-11",
    name: "LA Double-Knee Chino Work Pant",
    category: "Bottoms",
    price: 419000,
    featured: false,
    badge: "New",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
    colors: ["Khaki Stone", "Charcoal"],
    sizes: ["M", "L", "XL"],
    description: "Celana chino workwear Amerika dengan lapisan ganda di lutut dan potongan lurus bersih.",
    material: "Twill cotton pekat 320 GSM dengan tekstur halus.",
    fit: "Straight relaxed fit serbaguna untuk kasual maupun semi-rapi.",
    care: "Cuci mesin suhu normal, setrika hangat bila diperlukan."
  },
  {
    id: "uw-12",
    name: "Miami Mesh Gym & Street Shorts",
    category: "Bottoms",
    price: 229000,
    featured: false,
    badge: "Summer Drop",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
    colors: ["Charcoal / Orange", "Jet Black"],
    sizes: ["S", "M", "L", "XL"],
    description: "Celana pendek basket & jalanan Amerika dengan list kontras dan saku ritsleting aman.",
    material: "Double-mesh breathable polyester-cotton blend.",
    fit: "Above-the-knee loose basketball cut.",
    care: "Cuci dingin, cepat kering tanpa mesin pengering."
  },
  {
    id: "uw-13",
    name: "NY Embroidered 6-Panel Cap",
    category: "Accessories",
    price: 159000,
    featured: false,
    badge: "Staple",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    colors: ["Charcoal", "Orange Ember"],
    sizes: ["M", "L"],
    description: "Topi 6-panel bordir timbul dengan visor melengkung klasik dan pengait strap metal.",
    material: "Brushed cotton twill dengan bordir benang rayon padat.",
    fit: "Adjustable strap one-size fit.",
    care: "Bersihkan titik kotor dengan sikat lembut dan air sabun ringan."
  },
  {
    id: "uw-14",
    name: "Portland Ribbed Cuff Beanie",
    category: "Accessories",
    price: 139000,
    featured: false,
    badge: "New",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
    colors: ["Obsidian", "Rust Orange", "Bone"],
    sizes: ["M", "L"],
    description: "Beanie rajut lipat gaya Pacific Northwest dengan label tenun minimalis di bagian depan.",
    material: "Soft acrylic-wool knit tidak gatal di kulit.",
    fit: "Snug cuffed fit fleksibel untuk berbagai lingkar kepala.",
    care: "Cuci tangan dengan air dingin, keringkan di permukaan datar."
  },
  {
    id: "uw-15",
    name: "Midwest Heavy Crew Socks (3-Pack)",
    category: "Accessories",
    price: 129000,
    featured: false,
    badge: "3-Pack",
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=800&q=80",
    colors: ["Charcoal / Off-White / Orange"],
    sizes: ["M", "L"],
    description: "Paket 3 pasang kaus kaki crew tebal dengan bantalan telapak dan garis stripe atletik retro.",
    material: "Combed cotton terry cushioned dengan spandex elastis.",
    fit: "Mid-calf crew fit (ukuran sepatu 39 - 44).",
    care: "Cuci terbalik bersama pakaian berwarna gelap."
  },
  {
    id: "uw-16",
    name: "Chicago Crossbody Utility Sling",
    category: "Accessories",
    price: 279000,
    featured: false,
    badge: "Drop 04",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
    colors: ["Matte Black", "Slate"],
    sizes: ["M", "L"],
    description: "Tas selempang ergonomis untuk ponsel, dompet, kacamata, dan kunci dengan strap webbing tebal.",
    material: "Ballistic nylon water-resistant dengan buckle quick-release.",
    fit: "Adjustable crossbody / shoulder strap.",
    care: "Lap permukaan dengan kain mikrofiber lembap."
  }
];

const STORAGE_KEYS = {
  cart: "urbanwear_cart_v1",
  wishlist: "urbanwear_wishlist_v1",
  orders: "urbanwear_orders_v1"
};

let state = {
  category: "Semua",
  search: "",
  sort: "default",
  onlyFeatured: false,
  cart: loadStorage(STORAGE_KEYS.cart, []),
  wishlist: loadStorage(STORAGE_KEYS.wishlist, []),
  orders: loadStorage(STORAGE_KEYS.orders, []),
  voucherCode: "",
  modalProduct: null,
  modalColor: "",
  modalSize: "",
  modalQty: 1,
  modalSpecTab: "material"
};

function loadStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    showToast("Penyimpanan lokal penuh atau dibatasi browser.");
  }
}

function formatIDR(amount) {
  return "Rp" + Number(amount || 0).toLocaleString("id-ID");
}

function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "px-4 py-3 rounded-2xl bg-surface border border-accent text-offwhite text-xs sm:text-sm font-medium shadow-xl";
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 250ms ease";
    setTimeout(() => toast.remove(), 260);
  }, 2600);
}

function getFilteredProducts() {
  let list = PRODUCTS.slice();

  if (state.onlyFeatured) {
    list = list.filter((p) => p.featured);
  } else if (state.category !== "Semua") {
    list = list.filter((p) => p.category === state.category);
  }

  const q = state.search.trim().toLowerCase();
  if (q) {
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  if (state.sort === "price-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (state.sort === "price-desc") {
    list.sort((a, b) => b.price - a.price);
  } else if (state.sort === "name-asc") {
    list.sort((a, b) => a.name.localeCompare(b.name, "id"));
  }

  return list;
}

function createProductCard(product, compact = false) {
  const isWished = state.wishlist.includes(product.id);

  const card = document.createElement("article");
  card.className = "group rounded-2xl bg-charcoal/95 border border-offwhite/12 hover:border-accent/70 transition overflow-hidden flex flex-col justify-between";

  const topWrap = document.createElement("div");

  const imgBox = document.createElement("div");
  imgBox.className = "relative aspect-[4/5] bg-surface overflow-hidden cursor-pointer";
  imgBox.addEventListener("click", () => openProductModal(product.id));

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  img.loading = "lazy";
  img.className = "w-full h-full object-cover group-hover:scale-105 transition duration-500";

  const badge = document.createElement("span");
  badge.className = "absolute top-3 left-3 px-2.5 py-1 rounded-full bg-charcoal/90 border border-offwhite/15 text-[11px] font-semibold text-accent";
  badge.textContent = product.badge || product.category;

  const wishBtn = document.createElement("button");
  wishBtn.type = "button";
  wishBtn.setAttribute("aria-label", "Simpan ke wishlist");
  wishBtn.className = `absolute top-3 right-3 w-8 h-8 rounded-full border text-xs font-bold flex items-center justify-center transition cursor-pointer ${
    isWished
      ? "bg-accent text-charcoal border-accent"
      : "bg-charcoal/85 text-offwhite border-offwhite/20 hover:border-accent"
  }`;
  wishBtn.textContent = "♥";
  wishBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  });

  imgBox.appendChild(img);
  imgBox.appendChild(badge);
  imgBox.appendChild(wishBtn);

  const infoBox = document.createElement("div");
  infoBox.className = "p-4 space-y-1.5";

  const catEl = document.createElement("p");
  catEl.className = "text-[11px] font-semibold uppercase tracking-wider text-offwhite/60";
  catEl.textContent = product.category;

  const titleEl = document.createElement("h3");
  titleEl.className = "font-display text-base font-bold text-offwhite line-clamp-1 cursor-pointer hover:text-accent transition";
  titleEl.textContent = product.name;
  titleEl.addEventListener("click", () => openProductModal(product.id));

  const priceEl = document.createElement("p");
  priceEl.className = "text-sm font-bold text-accent";
  priceEl.textContent = formatIDR(product.price);

  infoBox.appendChild(catEl);
  infoBox.appendChild(titleEl);
  infoBox.appendChild(priceEl);

  if (!compact) {
    const descEl = document.createElement("p");
    descEl.className = "text-xs text-offwhite/70 line-clamp-2 pt-0.5";
    descEl.textContent = product.description;
    infoBox.appendChild(descEl);
  }

  topWrap.appendChild(imgBox);
  topWrap.appendChild(infoBox);

  const actionRow = document.createElement("div");
  actionRow.className = "px-4 pb-4 pt-1 flex items-center gap-2";

  const detailBtn = document.createElement("button");
  detailBtn.type = "button";
  detailBtn.className = "flex-1 py-2 px-3 rounded-full bg-surface hover:bg-surfaceAlt border border-offwhite/15 text-xs font-semibold text-offwhite transition cursor-pointer";
  detailBtn.textContent = "Detail & Ukuran";
  detailBtn.addEventListener("click", () => openProductModal(product.id));

  const quickAddBtn = document.createElement("button");
  quickAddBtn.type = "button";
  quickAddBtn.className = "py-2 px-3.5 rounded-full bg-accent hover:bg-accent/90 text-charcoal text-xs font-bold transition cursor-pointer";
  quickAddBtn.textContent = "+ Keranjang";
  quickAddBtn.addEventListener("click", () => {
    addToCart(product, product.colors[0], product.sizes[1] || product.sizes[0], 1);
  });

  actionRow.appendChild(detailBtn);
  actionRow.appendChild(quickAddBtn);

  card.appendChild(topWrap);
  card.appendChild(actionRow);
  return card;
}

function renderFeatured() {
  const grid = document.getElementById("featuredGrid");
  if (!grid) return;
  grid.textContent = "";
  const featuredList = PRODUCTS.filter((p) => p.featured).slice(0, 4);
  featuredList.forEach((p) => grid.appendChild(createProductCard(p, true)));
}

function renderCatalog() {
  const grid = document.getElementById("catalogGrid");
  const meta = document.getElementById("catalogMeta");
  const emptyState = document.getElementById("emptyCatalogState");
  if (!grid || !meta || !emptyState) return;

  const list = getFilteredProducts();
  grid.textContent = "";

  const labelCat = state.onlyFeatured ? "Produk Unggulan" : state.category;
  meta.textContent = `Menampilkan ${list.length} produk • Filter: ${labelCat}`;

  if (list.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  list.forEach((p) => grid.appendChild(createProductCard(p, false)));
}

function syncCategoryButtons() {
  document.querySelectorAll(".cat-filter-btn").forEach((btn) => {
    const cat = btn.getAttribute("data-category");
    if (!state.onlyFeatured && cat === state.category) {
      btn.classList.add("active-cat");
    } else {
      btn.classList.remove("active-cat");
    }
  });
}

function setCategoryFilter(category, scrollToCatalog = false) {
  state.onlyFeatured = false;
  state.category = category || "Semua";
  syncCategoryButtons();
  renderCatalog();
  if (scrollToCatalog) {
    const el = document.getElementById("katalog");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
}

/* Modal Detail Produk */
function openProductModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  state.modalProduct = product;
  state.modalColor = product.colors[0];
  state.modalSize = product.sizes.includes("L") ? "L" : product.sizes[0];
  state.modalQty = 1;
  state.modalSpecTab = "material";

  const modal = document.getElementById("productModal");
  document.getElementById("modalProdImg").src = product.image;
  document.getElementById("modalProdImg").alt = product.name;
  document.getElementById("modalProdCat").textContent = product.category;
  document.getElementById("modalProdName").textContent = product.name;
  document.getElementById("modalProdPrice").textContent = formatIDR(product.price);
  document.getElementById("modalProdDesc").textContent = product.description;
  document.getElementById("modalQtyValue").textContent = String(state.modalQty);

  renderModalOptionChips();
  updateModalSpecText();
  syncModalWishlistButton();

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  state.modalProduct = null;
}

function renderModalOptionChips() {
  const product = state.modalProduct;
  if (!product) return;

  const colorWrap = document.getElementById("modalColorOptions");
  colorWrap.textContent = "";
  product.colors.forEach((color) => {
    const btn = document.createElement("button");
    btn.type = "button";
    const active = state.modalColor === color;
    btn.className = `px-3 py-1.5 rounded-full text-xs font-semibold border transition cursor-pointer ${
      active
        ? "bg-accent text-charcoal border-accent"
        : "bg-charcoal text-offwhite border-offwhite/20 hover:border-accent"
    }`;
    btn.textContent = color;
    btn.addEventListener("click", () => {
      state.modalColor = color;
      renderModalOptionChips();
    });
    colorWrap.appendChild(btn);
  });

  const sizeWrap = document.getElementById("modalSizeOptions");
  sizeWrap.textContent = "";
  product.sizes.forEach((size) => {
    const btn = document.createElement("button");
    btn.type = "button";
    const active = state.modalSize === size;
    btn.className = `px-3.5 py-1.5 rounded-full text-xs font-bold border transition cursor-pointer ${
      active
        ? "bg-accent text-charcoal border-accent"
        : "bg-charcoal text-offwhite border-offwhite/20 hover:border-accent"
    }`;
    btn.textContent = size;
    btn.addEventListener("click", () => {
      state.modalSize = size;
      renderModalOptionChips();
    });
    sizeWrap.appendChild(btn);
  });
}

function updateModalSpecText() {
  const product = state.modalProduct;
  if (!product) return;
  const specEl = document.getElementById("modalSpecText");
  if (state.modalSpecTab === "fit") {
    specEl.textContent = product.fit;
  } else if (state.modalSpecTab === "care") {
    specEl.textContent = product.care;
  } else {
    specEl.textContent = product.material;
  }

  document.querySelectorAll(".spec-tab-btn").forEach((btn) => {
    const tab = btn.getAttribute("data-spec-tab");
    if (tab === state.modalSpecTab) {
      btn.classList.add("text-accent", "underline");
      btn.classList.remove("text-offwhite/70");
    } else {
      btn.classList.remove("text-accent", "underline");
      btn.classList.add("text-offwhite/70");
    }
  });
}

function syncModalWishlistButton() {
  const btn = document.getElementById("modalWishlistBtn");
  if (!btn || !state.modalProduct) return;
  const wished = state.wishlist.includes(state.modalProduct.id);
  btn.textContent = wished ? "♥ Tersimpan" : "♥ Simpan";
  btn.className = wished
    ? "py-3 px-4 rounded-full bg-accent text-charcoal border border-accent text-sm font-bold transition cursor-pointer"
    : "py-3 px-4 rounded-full bg-charcoal border border-offwhite/20 hover:border-accent text-offwhite text-sm font-semibold transition cursor-pointer";
}

/* Keranjang & Kalkulasi */
function addToCart(product, color, size, qty) {
  const safeQty = Math.max(1, Number(qty) || 1);
  const existing = state.cart.find(
    (item) => item.id === product.id && item.color === color && item.size === size
  );
  if (existing) {
    existing.qty += safeQty;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color,
      size,
      qty: safeQty
    });
  }
  saveStorage(STORAGE_KEYS.cart, state.cart);
  updateCartUI();
  showToast(`${product.name} (${size}, ${color}) masuk ke keranjang.`);
}

function updateCartItemQty(index, delta) {
  const item = state.cart[index];
  if (!item) return;
  const nextQty = item.qty + delta;
  if (nextQty <= 0) {
    state.cart.splice(index, 1);
  } else {
    item.qty = nextQty;
  }
  saveStorage(STORAGE_KEYS.cart, state.cart);
  updateCartUI();
}

function removeCartItem(index) {
  if (index < 0 || index >= state.cart.length) return;
  state.cart.splice(index, 1);
  saveStorage(STORAGE_KEYS.cart, state.cart);
  updateCartUI();
}

function computeTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  let discount = 0;
  if (subtotal > 0 && state.voucherCode === "URBAN26") {
    discount = Math.round(subtotal * 0.15);
  } else if (subtotal > 0 && state.voucherCode === "AMERIKA10") {
    discount = Math.min(subtotal, 35000);
  }

  const shippingSelect = document.getElementById("shippingZoneSelect");
  const shipping = subtotal > 0 ? Number(shippingSelect?.value || 15000) : 0;
  const total = Math.max(0, subtotal - discount + shipping);
  return { subtotal, discount, shipping, total };
}

function updateCartUI() {
  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cartCount").textContent = String(totalQty);

  const container = document.getElementById("cartItemsContainer");
  container.textContent = "";

  if (state.cart.length === 0) {
    const empty = document.createElement("p");
    empty.className = "text-sm text-offwhite/65 py-8 text-center";
    empty.textContent = "Keranjang masih kosong. Pilih produk American Streetwear favoritmu.";
    container.appendChild(empty);
  } else {
    state.cart.forEach((item, idx) => {
      const row = document.createElement("div");
      row.className = "py-3 flex gap-3 items-center";

      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;
      img.className = "w-16 h-20 rounded-xl object-cover bg-charcoal shrink-0";

      const mid = document.createElement("div");
      mid.className = "flex-1 min-w-0";

      const nameEl = document.createElement("p");
      nameEl.className = "text-sm font-bold text-offwhite truncate";
      nameEl.textContent = item.name;

      const metaEl = document.createElement("p");
      metaEl.className = "text-xs text-offwhite/65";
      metaEl.textContent = `${item.size} • ${item.color}`;

      const priceEl = document.createElement("p");
      priceEl.className = "text-xs font-bold text-accent mt-0.5";
      priceEl.textContent = formatIDR(item.price * item.qty);

      mid.appendChild(nameEl);
      mid.appendChild(metaEl);
      mid.appendChild(priceEl);

      const ctrl = document.createElement("div");
      ctrl.className = "flex flex-col items-end gap-1";

      const qtyBox = document.createElement("div");
      qtyBox.className = "inline-flex items-center rounded-full bg-charcoal border border-offwhite/20 text-xs";

      const minusBtn = document.createElement("button");
      minusBtn.type = "button";
      minusBtn.className = "px-2 py-1 font-bold hover:text-accent cursor-pointer";
      minusBtn.textContent = "-";
      minusBtn.addEventListener("click", () => updateCartItemQty(idx, -1));

      const qtyText = document.createElement("span");
      qtyText.className = "px-2 font-bold";
      qtyText.textContent = String(item.qty);

      const plusBtn = document.createElement("button");
      plusBtn.type = "button";
      plusBtn.className = "px-2 py-1 font-bold hover:text-accent cursor-pointer";
      plusBtn.textContent = "+";
      plusBtn.addEventListener("click", () => updateCartItemQty(idx, 1));

      qtyBox.appendChild(minusBtn);
      qtyBox.appendChild(qtyText);
      qtyBox.appendChild(plusBtn);

      const delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "text-[11px] text-offwhite/55 hover:text-accent cursor-pointer";
      delBtn.textContent = "Hapus";
      delBtn.addEventListener("click", () => removeCartItem(idx));

      ctrl.appendChild(qtyBox);
      ctrl.appendChild(delBtn);

      row.appendChild(img);
      row.appendChild(mid);
      row.appendChild(ctrl);
      container.appendChild(row);
    });
  }

  const { subtotal, discount, shipping, total } = computeTotals();
  document.getElementById("cartSubtotalText").textContent = formatIDR(subtotal);
  document.getElementById("cartDiscountText").textContent = "-" + formatIDR(discount);
  document.getElementById("cartShippingText").textContent = formatIDR(shipping);
  document.getElementById("cartTotalText").textContent = formatIDR(total);
}

/* Wishlist */
function toggleWishlist(productId) {
  const idx = state.wishlist.indexOf(productId);
  if (idx >= 0) {
    state.wishlist.splice(idx, 1);
    showToast("Dihapus dari wishlist.");
  } else {
    state.wishlist.push(productId);
    showToast("Ditambahkan ke wishlist.");
  }
  saveStorage(STORAGE_KEYS.wishlist, state.wishlist);
  updateWishlistUI();
  renderFeatured();
  renderCatalog();
  syncModalWishlistButton();
}

function updateWishlistUI() {
  document.getElementById("wishlistCount").textContent = String(state.wishlist.length);
  const container = document.getElementById("wishlistItemsContainer");
  if (!container) return;
  container.textContent = "";

  if (state.wishlist.length === 0) {
    const empty = document.createElement("p");
    empty.className = "text-sm text-offwhite/65 py-6 text-center";
    empty.textContent = "Belum ada item di wishlist.";
    container.appendChild(empty);
    return;
  }

  state.wishlist.forEach((id) => {
    const prod = PRODUCTS.find((p) => p.id === id);
    if (!prod) return;

    const row = document.createElement("div");
    row.className = "flex items-center justify-between gap-3 p-3 rounded-2xl bg-charcoal border border-offwhite/10";

    const left = document.createElement("div");
    left.className = "flex items-center gap-3 min-w-0";

    const img = document.createElement("img");
    img.src = prod.image;
    img.alt = prod.name;
    img.className = "w-12 h-14 rounded-xl object-cover shrink-0";

    const textWrap = document.createElement("div");
    textWrap.className = "min-w-0";

    const nameEl = document.createElement("p");
    nameEl.className = "text-sm font-bold text-offwhite truncate";
    nameEl.textContent = prod.name;

    const priceEl = document.createElement("p");
    priceEl.className = "text-xs font-bold text-accent";
    priceEl.textContent = formatIDR(prod.price);

    textWrap.appendChild(nameEl);
    textWrap.appendChild(priceEl);
    left.appendChild(img);
    left.appendChild(textWrap);

    const actions = document.createElement("div");
    actions.className = "flex items-center gap-2 shrink-0";

    const buyBtn = document.createElement("button");
    buyBtn.type = "button";
    buyBtn.className = "px-3 py-1.5 rounded-full bg-accent text-charcoal text-xs font-bold cursor-pointer";
    buyBtn.textContent = "+ Keranjang";
    buyBtn.addEventListener("click", () => {
      addToCart(prod, prod.colors[0], prod.sizes[1] || prod.sizes[0], 1);
    });

    const rmBtn = document.createElement("button");
    rmBtn.type = "button";
    rmBtn.className = "px-2.5 py-1.5 rounded-full bg-surface border border-offwhite/15 text-xs text-offwhite hover:text-accent cursor-pointer";
    rmBtn.textContent = "✕";
    rmBtn.addEventListener("click", () => toggleWishlist(prod.id));

    actions.appendChild(buyBtn);
    actions.appendChild(rmBtn);

    row.appendChild(left);
    row.appendChild(actions);
    container.appendChild(row);
  });
}

/* Riwayat Pesanan */
function updateOrdersUI() {
  document.getElementById("orderCountBadge").textContent = String(state.orders.length);
  const container = document.getElementById("ordersListContainer");
  if (!container) return;
  container.textContent = "";

  if (state.orders.length === 0) {
    const empty = document.createElement("p");
    empty.className = "text-sm text-offwhite/65 py-6 text-center";
    empty.textContent = "Belum ada riwayat pesanan tersimpan.";
    container.appendChild(empty);
    return;
  }

  state.orders.slice().reverse().forEach((ord) => {
    const card = document.createElement("div");
    card.className = "p-3.5 rounded-2xl bg-charcoal border border-offwhite/15 space-y-1";

    const top = document.createElement("div");
    top.className = "flex justify-between font-bold text-offwhite";
    const idSpan = document.createElement("span");
    idSpan.textContent = ord.id;
    const totSpan = document.createElement("span");
    totSpan.className = "text-accent";
    totSpan.textContent = formatIDR(ord.total);
    top.appendChild(idSpan);
    top.appendChild(totSpan);

    const dateEl = document.createElement("p");
    dateEl.className = "text-[11px] text-offwhite/60";
    dateEl.textContent = `${ord.date} • ${ord.buyerName}`;

    const itemsEl = document.createElement("p");
    itemsEl.className = "text-xs text-offwhite/80";
    itemsEl.textContent = ord.summary;

    card.appendChild(top);
    card.appendChild(dateEl);
    card.appendChild(itemsEl);
    container.appendChild(card);
  });
}

/* Event Listeners */
function bindEvents() {
  document.querySelectorAll(".nav-cat-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setCategoryFilter(btn.getAttribute("data-nav-cat"), true);
    });
  });

  document.querySelectorAll(".mobile-cat-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setCategoryFilter(btn.getAttribute("data-nav-cat"), true);
      document.getElementById("mobileMenuDrawer").classList.add("hidden");
    });
  });

  document.querySelectorAll(".cat-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setCategoryFilter(btn.getAttribute("data-category"), false);
    });
  });

  document.getElementById("filterFeaturedBtn").addEventListener("click", () => {
    state.onlyFeatured = true;
    state.category = "Semua";
    syncCategoryButtons();
    renderCatalog();
    document.getElementById("katalog").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("searchInput").addEventListener("input", (e) => {
    state.search = e.target.value;
    renderCatalog();
  });

  document.getElementById("sortSelect").addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderCatalog();
  });

  document.getElementById("resetCatalogBtn").addEventListener("click", () => {
    state.category = "Semua";
    state.search = "";
    state.sort = "default";
    state.onlyFeatured = false;
    document.getElementById("searchInput").value = "";
    document.getElementById("sortSelect").value = "default";
    syncCategoryButtons();
    renderCatalog();
  });

  const copyCode = (code) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).catch(() => {});
    }
    document.getElementById("voucherInput").value = code;
    state.voucherCode = code;
    document.getElementById("voucherStatusText").textContent = `Kode ${code} diterapkan.`;
    updateCartUI();
    showToast(`Kode promo ${code} disalin & diterapkan.`);
  };

  document.getElementById("copyPromoBtn").addEventListener("click", () => copyCode("URBAN26"));
  document.getElementById("copyPromoBtn2").addEventListener("click", () => copyCode("AMERIKA10"));

  document.getElementById("applyVoucherBtn").addEventListener("click", () => {
    const raw = document.getElementById("voucherInput").value.trim().toUpperCase();
    const statusEl = document.getElementById("voucherStatusText");
    if (raw === "URBAN26" || raw === "AMERIKA10") {
      state.voucherCode = raw;
      statusEl.textContent = `Voucher ${raw} aktif.`;
      showToast(`Voucher ${raw} berhasil dipasang.`);
    } else {
      state.voucherCode = "";
      statusEl.textContent = "Kode tidak valid. Gunakan URBAN26 atau AMERIKA10.";
      showToast("Kode voucher tidak valid.");
    }
    updateCartUI();
  });

  document.getElementById("shippingZoneSelect").addEventListener("change", () => updateCartUI());

  /* Product Modal */
  document.getElementById("closeProductModal").addEventListener("click", closeProductModal);
  document.getElementById("productModal").addEventListener("click", (e) => {
    if (e.target.id === "productModal") closeProductModal();
  });

  document.getElementById("modalQtyMinus").addEventListener("click", () => {
    if (state.modalQty > 1) {
      state.modalQty -= 1;
      document.getElementById("modalQtyValue").textContent = String(state.modalQty);
    }
  });

  document.getElementById("modalQtyPlus").addEventListener("click", () => {
    state.modalQty += 1;
    document.getElementById("modalQtyValue").textContent = String(state.modalQty);
  });

  document.querySelectorAll(".spec-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.modalSpecTab = btn.getAttribute("data-spec-tab");
      updateModalSpecText();
    });
  });

  document.getElementById("modalAddToCartBtn").addEventListener("click", () => {
    if (!state.modalProduct) return;
    addToCart(state.modalProduct, state.modalColor, state.modalSize, state.modalQty);
    closeProductModal();
  });

  document.getElementById("modalWishlistBtn").addEventListener("click", () => {
    if (!state.modalProduct) return;
    toggleWishlist(state.modalProduct.id);
  });

  /* Cart Drawer */
  const cartDrawer = document.getElementById("cartDrawer");
  document.getElementById("openCartBtn").addEventListener("click", () => {
    updateCartUI();
    cartDrawer.classList.remove("hidden");
    cartDrawer.classList.add("flex");
  });
  document.getElementById("closeCartDrawer").addEventListener("click", () => {
    cartDrawer.classList.add("hidden");
    cartDrawer.classList.remove("flex");
  });
  cartDrawer.addEventListener("click", (e) => {
    if (e.target.id === "cartDrawer") {
      cartDrawer.classList.add("hidden");
      cartDrawer.classList.remove("flex");
    }
  });

  /* Checkout Modal */
  const checkoutModal = document.getElementById("checkoutModal");
  document.getElementById("openCheckoutBtn").addEventListener("click", () => {
    if (state.cart.length === 0) {
      showToast("Keranjang masih kosong.");
      return;
    }
    document.getElementById("checkoutError").classList.add("hidden");
    checkoutModal.classList.remove("hidden");
    checkoutModal.classList.add("flex");
  });
  document.getElementById("closeCheckoutModal").addEventListener("click", () => {
    checkoutModal.classList.add("hidden");
    checkoutModal.classList.remove("flex");
  });

  document.getElementById("checkoutForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const errEl = document.getElementById("checkoutError");
    const buyerName = document.getElementById("buyerName").value.trim();
    const buyerPhone = document.getElementById("buyerPhone").value.trim().replace(/[^0-9+]/g, "");
    const buyerAddress = document.getElementById("buyerAddress").value.trim();
    const buyerNote = document.getElementById("buyerNote").value.trim();

    if (buyerName.length < 2 || buyerPhone.length < 8 || buyerAddress.length < 8) {
      errEl.textContent = "Mohon isi nama, nomor WhatsApp valid, dan alamat lengkap.";
      errEl.classList.remove("hidden");
      return;
    }

    const { subtotal, discount, shipping, total } = computeTotals();
    const orderId = "UW-" + Date.now().toString().slice(-6);
    const itemsLines = state.cart.map(
      (it, i) => `${i + 1}. ${it.name} (${it.size}, ${it.color}) x${it.qty} = ${formatIDR(it.price * it.qty)}`
    );

    const message = [
      `Halo Urban Wear, saya ingin order (${orderId}):`,
      ...itemsLines,
      `Subtotal: ${formatIDR(subtotal)}`,
      `Diskon: -${formatIDR(discount)}`,
      `Ongkir: ${formatIDR(shipping)}`,
      `Total: ${formatIDR(total)}`,
      `Nama: ${buyerName}`,
      `No. WA: ${buyerPhone}`,
      `Alamat: ${buyerAddress}`,
      buyerNote ? `Catatan: ${buyerNote}` : ""
    ]
      .filter(Boolean)
      .join("
");

    state.orders.push({
      id: orderId,
      date: new Date().toLocaleDateString("id-ID"),
      buyerName,
      total,
      summary: state.cart.map((it) => `${it.name} (${it.qty})`).join(", ")
    });
    saveStorage(STORAGE_KEYS.orders, state.orders);
    updateOrdersUI();

    state.cart = [];
    state.voucherCode = "";
    saveStorage(STORAGE_KEYS.cart, state.cart);
    updateCartUI();

    checkoutModal.classList.add("hidden");
    checkoutModal.classList.remove("flex");
    cartDrawer.classList.add("hidden");
    cartDrawer.classList.remove("flex");
    e.target.reset();

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    showToast(`Pesanan ${orderId} dicatat & WhatsApp dibuka.`);
  });

  /* Wishlist Modal */
  const wishlistModal = document.getElementById("wishlistModal");
  document.getElementById("openWishlistBtn").addEventListener("click", () => {
    updateWishlistUI();
    wishlistModal.classList.remove("hidden");
    wishlistModal.classList.add("flex");
  });
  document.getElementById("closeWishlistModal").addEventListener("click", () => {
    wishlistModal.classList.add("hidden");
    wishlistModal.classList.remove("flex");
  });

  /* Size Guide Modal */
  const sizeModal = document.getElementById("sizeGuideModal");
  const openSize = () => {
    sizeModal.classList.remove("hidden");
    sizeModal.classList.add("flex");
  };
  document.getElementById("openSizeGuideBtn").addEventListener("click", openSize);
  document.getElementById("footerSizeBtn").addEventListener("click", openSize);
  document.getElementById("mobileSizeBtn").addEventListener("click", () => {
    document.getElementById("mobileMenuDrawer").classList.add("hidden");
    openSize();
  });
  document.getElementById("closeSizeGuideModal").addEventListener("click", () => {
    sizeModal.classList.add("hidden");
    sizeModal.classList.remove("flex");
  });

  /* Orders Modal */
  const ordersModal = document.getElementById("ordersModal");
  const openOrders = () => {
    updateOrdersUI();
    ordersModal.classList.remove("hidden");
    ordersModal.classList.add("flex");
  };
  document.getElementById("openOrdersBtn").addEventListener("click", openOrders);
  document.getElementById("footerOrdersBtn").addEventListener("click", openOrders);
  document.getElementById("mobileOrdersBtn").addEventListener("click", () => {
    document.getElementById("mobileMenuDrawer").classList.add("hidden");
    openOrders();
  });
  document.getElementById("closeOrdersModal").addEventListener("click", () => {
    ordersModal.classList.add("hidden");
    ordersModal.classList.remove("flex");
  });

  /* Mobile Drawer */
  const mobileDrawer = document.getElementById("mobileMenuDrawer");
  document.getElementById("openMobileMenuBtn").addEventListener("click", () => {
    mobileDrawer.classList.remove("hidden");
  });
  document.getElementById("closeMobileMenuBtn").addEventListener("click", () => {
    mobileDrawer.classList.add("hidden");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeatured();
  renderCatalog();
  updateCartUI();
  updateWishlistUI();
  updateOrdersUI();
  bindEvents();
});
