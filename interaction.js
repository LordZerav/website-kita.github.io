window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 0) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.width = '100%';
        navbar.style.zIndex = '1000';
        navbar.style.backgroundColor = 'white';
        navbar.style.borderRadius = '0';
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.position = 'relative';
        navbar.style.borderRadius = '12px';
    }
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.margin = '0'
    }
    else {
        header.style.backgroundColor = 'white';
        header.style.margin = '1.5rem 2rem 1.5rem 2rem';
        header.style.borderRadius = '12px'
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.hidden');

    const observerOptions = {
        root: null,
        threshold: 0.02,
    };

    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealOnScroll, observerOptions);

    hiddenElements.forEach(el => observer.observe(el));
});

const galleryData = [
    {
        src: "https://website-kita.github.io/img/Aglonema ijo.png",
        title: "Aglonema Ijo",
        description: "Aglonema, yang juga dikenal sebagai Chinese Evergreen, adalah tanaman hias populer yang digemari karena daunnya yang menarik dan bervariasi. Aglonema terkenal dengan ketahanannya terhadap kondisi cahaya rendah, membuatnya cocok untuk ditempatkan di dalam ruangan. Tanaman hias berdaun hijau dengan corak yang menarik dan perawatan mudah."
    },
    {
        src: "https://website-kita.github.io/img/Aglonema merah.png",
        title: "Aglonema Merah",
        description: "Tanaman hias dengan daun merah menyala yang memikat."
    },
    {
        src: "https://website-kita.github.io/img/Alocasia silver dragon.png",
        title: "Alocasia Silver Dragon",
        description: "Tanaman hias eksotis dengan daun seperti sisik naga berwarna perak."
    },
    {
        src: "https://website-kita.github.io/img/Anggrek Cymbidium.png",
        title: "Anggrek Cymbidium",
        description: "Bunga anggrek elegan dengan bentuk dan warna yang memukau."
    },
    {
        src: "https://website-kita.github.io/img/Anthurium fautosmirandae.png",
        title: "Anthurium Faustomirandae",
        description: "Tanaman unik dengan daun besar dan tekstur yang tebal."
    },
    {
        src: "https://website-kita.github.io/img/Anthurium luxurians.png",
        title: "Anthurium Luxurians",
        description: "Tanaman berdaun hijau gelap yang mengkilap, cocok untuk dekorasi."
    },
    {
        src: "https://website-kita.github.io/img/Anting putri (2).png",
        title: "Anting Putri",
        description: "Tanaman dengan bunga kecil berwarna putih yang cantik."
    },
    {
        src: "https://website-kita.github.io/img/Anting putri.png",
        title: "Anting Putri",
        description: "Tanaman dengan bunga kecil berwarna putih yang cantik."
    },
    {
        src: "https://website-kita.github.io/img/Bambu kuning.png",
        title: "Bambu Kuning",
        description: "Tanaman bambu dengan batang kuning yang cerah, sering digunakan untuk pagar."
    },
    {
        src: "https://website-kita.github.io/img/Batu pancuran.png",
        title: "Batu Pancuran",
        description: "Ornamen taman berbentuk batu dengan air yang mengalir indah."
    },
    {
        src: "https://website-kita.github.io/img/Bougenville pink.png",
        title: "Bougenville Pink",
        description: "Tanaman berbunga lebat dengan warna pink mencolok."
    },
    {
        src: "https://website-kita.github.io/img/Bougenville red.png",
        title: "Bougenville Red",
        description: "Tanaman berbunga lebat dengan warna merah menyala."
    },
    {
        src: "https://website-kita.github.io/img/Calathea.png",
        title: "Calathea",
        description: "Tanaman dengan corak daun yang indah dan menarik perhatian."
    },
    {
        src: "https://website-kita.github.io/img/Kamboja fosil.png",
        title: "Kamboja Fosil",
        description: "Tanaman unik dengan batang yang berbentuk seperti fosil."
    },
    {
        src: "https://website-kita.github.io/img/Kamboja jepang.png",
        title: "Kamboja Jepang",
        description: "Tanaman dengan bunga cantik dan bentuk batang yang khas."
    },
    {
        src: "https://website-kita.github.io/img/Krokot merah.png",
        title: "Krotok Merah",
        description: "Tanaman dengan daun berwarna merah menyala dan tekstur unik."
    },
    {
        src: "https://website-kita.github.io/img/Paku ekor kuda.png",
        title: "Paku Ekor Kuda",
        description: "Tanaman paku dengan bentuk unik seperti ekor kuda."
    },
    {
        src: "https://website-kita.github.io/img/Pandan bidur.png",
        title: "Pandan Bidur",
        description: "Tanaman hias dengan aroma khas dan daun panjang yang menarik."
    },
    {
        src: "https://website-kita.github.io/img/Philodendron selloum.png",
        title: "Philodendron Selloum",
        description: "Tanaman dengan daun hijau besar yang lebat, cocok untuk dekorasi indoor."
    },
    {
        src: "https://website-kita.github.io/img/Pohon jeruk.png",
        title: "Pohon Jeruk",
        description: "Pohon buah dengan daun hijau lebat dan buah jeruk segar."
    }
];

function renderGallery() {
    const galleryContainer = document.querySelector('.gallery-section > div');
    galleryContainer.innerHTML = '';

    galleryData.forEach((item, index) => {
        const article = document.createElement('article');
        article.innerHTML = `
            <figure>
                <img src="${item.src}" onclick="openPreview('${item.title}', '${item.description}', ${index})">
            </figure>
        `;
        galleryContainer.appendChild(article);
    });
}

function openPreview(title, description, index = 0) {
    const preview = document.getElementById("previewGallery");
    currentIndex = index;
    updatePreviewContent();
    preview.style.display = "flex";
}

function updatePreviewContent() {
    const previewImage = document.getElementById("previewImage");
    const previewTitle = document.getElementById("previewTitle");
    const previewDescription = document.getElementById("previewDescription");

    previewImage.src = galleryData[currentIndex].src;
    previewTitle.textContent = galleryData[currentIndex].title;
    previewDescription.textContent = galleryData[currentIndex].description;
}

// Initialize gallery when page loads
document.addEventListener('DOMContentLoaded', renderGallery);

let currentIndex = 0;

function closePreview() {
    const preview = document.getElementById("previewGallery");
    preview.style.display = "none";
}

function navigateImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = galleryData.length - 1;
    } else if (currentIndex >= galleryData.length) {
        currentIndex = 0;
    }

    openPreview(
        galleryData[currentIndex].title,
        galleryData[currentIndex].description,
        currentIndex
    );
}
