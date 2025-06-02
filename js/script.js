const header = document.getElementById('header');
const scrollBtn = document.getElementById('scrollTopBtn');
const langToggle = document.getElementById('langToggle');
const flagIcon = document.getElementById('flagIcon');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

let currentLang = 'vi';
let isShrunk = false;
let isExpanded = true;

// Ngôn ngữ
const detailsPanel = document.querySelector('.artwork-details'); // Biến toàn cục

langToggle.addEventListener('click', () => {
  const viTexts = document.querySelectorAll('.lang.vi');
  const enTexts = document.querySelectorAll('.lang.en');

  if (currentLang === 'vi') {
    viTexts.forEach(el => el.style.display = 'none');
    enTexts.forEach(el => el.style.display = 'inline');
    flagIcon.src = 'https://flagcdn.com/w40/us.png';
    currentLang = 'en';
  } else {
    viTexts.forEach(el => el.style.display = 'inline');
    enTexts.forEach(el => el.style.display = 'none');
    flagIcon.src = 'https://flagcdn.com/w40/vn.png';
    currentLang = 'vi';
  }

  document.documentElement.lang = currentLang;

  // Dispatch event báo ngôn ngữ đã thay đổi
  document.dispatchEvent(new Event('languageChanged'));
});

// Chuyển theme sáng/tối
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeIcon.innerHTML = isDark
    ? '<i class="fa-solid fa-moon" style="color:gold"></i>'   // Sáng (mặt trời)
    : '<i class="fa-solid fa-sun" style="color:gold"></i>'; // Tối (mặt trăng)
});

// Hiệu ứng header thu nhỏ
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollBtn.style.display = 'block';
    if (isExpanded) {
      header.classList.add('shrink');
      isShrunk = true;
      isExpanded = false;
    }
  } else {
    scrollBtn.style.display = 'none';
    header.classList.remove('shrink');
    isShrunk = false;
    isExpanded = true;
  }
});

// Mở lại header khi click
header.addEventListener('click', () => {
  if (isShrunk) {
    header.classList.remove('shrink');
    isShrunk = false;
    isExpanded = true;
  }
});

// responsive
function checkResize() {
  if (window.innerWidth < 990) {
    header.classList.add('shrink');
    header.classList.remove('expand');
    isExpanded = false;
  } else {
    header.classList.remove('shrink');
    header.classList.remove('expand');
    isExpanded = false;
  }
}

window.addEventListener('load', checkResize);
window.addEventListener('resize', checkResize);

header.addEventListener('click', () => {
  if (window.innerWidth < 990) {
    isExpanded = !isExpanded;
    header.classList.toggle('expand', isExpanded);
  }
});

const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Cuộn về đầu trang
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Popup functionality
document.addEventListener('DOMContentLoaded', () => {
  const popupOverlay = document.getElementById('popupOverlay');
  const popupClose = document.getElementById('popupClose');
  const timelineItems = document.querySelectorAll('.timeline-item');

  console.log('Found timeline items:', timelineItems.length);

  // Popup data
  const popupData = {
    edu1: {
      image: "./image/about_image/thptmdc.jpg",
      titleVi: 'THPT Mạc Đĩnh Chi',
      titleEn: 'Mac Dinh Chi High School',
      descriptionVi: 'THPT Mạc Đĩnh Chi là nơi em trưởng thành, học được cách suy nghĩ độc lập và phát triển bản thân toàn diện.',
      descriptionEn: 'Mac Dinh Chi High School helped me grow and mature, learn to think independently, and become a more well-rounded person.'
    },
    edu2: {
      image: './image/about_image/ththsaigon.jpg',
      titleVi: 'THTH Sài Gòn',
      titleEn: 'Sài Gòn Pratical Secondary School',
      descriptionVi: 'Những năm học tại Trung học Thực hành Sài Gòn là khoảng thời gian em bắt đầu khám phá bản thân và hình thành những ước mơ đầu tiên.',
      descriptionEn: 'The time I spent at Sai Gon Practical Secondary School was when I began to discover who I was and form my dream for the first time.'
    },
    edu3: {
      image: './image/about_image/khaiminh.jpg',
      titleVi: 'Tiểu học Khai Minh',
      titleEn: 'Khai Minh Primary School',
      descriptionVi: 'Khi còn học ở tiểu học Khai Minh, em đã có nhiều kỷ niệm đẹp và những bài học đầu đời quý giá.',
      descriptionEn: 'When I was studying at Khai Minh Primary School, I had many beautiful memories and learned valuable lessons in my early years. '
    },
    exp1: {
      image: './image/about_image/IELST.jpg',
      titleVi: 'IELTS',
      titleEn: 'IELTS',
      descriptionVi: 'Việc đạt được bằng IELTS không chỉ là một dấu mốc trong học tập mà còn giúp em có thể có được nhiều cơ hội vươn ra thế giới.',
      descriptionEn: "Achieving my IELTS isn't just a big academic step; it also opens up many opportunities for me to reach out to the world.",
    },
    exp2: {
      image: './image/about_image/mindx.png',
      titleVi: 'MindX',
      titleEn: 'MindX',
      descriptionVi: 'Khóa học tại MindX đã giúp em hiểu rõ hơn và rèn luyện các kỹ năng để thiết kế nhân vật.',
      descriptionEn: "MindX's course equipped me with the knowledge and skills needed for character design.",
    },
    exp3: {
      image: './image/about_image/design.png',
      titleVi: 'Thiết kế',
      titleEn: 'Design',
      descriptionVi: 'Kinh nghiệm làm designer trong các dự án nhóm trên lớp đã giúp em có những bước làm quen thực tế đầu tiên với ngành này.',
      descriptionEn: 'Experience from working as a designer in a group for class projects was my first real way to get familiar with this major.',
    }
  };

  function showPopup(popupId) {
    console.log('Showing popup for:', popupId);
    const data = popupData[popupId];
    if (!data) {
      console.log('No data found for:', popupId);
      return;
    }

    // Update popup content
    const titleVi = popupOverlay.querySelector('.popup-title .lang.vi');
    const titleEn = popupOverlay.querySelector('.popup-title .lang.en');
    const descVi = popupOverlay.querySelector('.popup-description .lang.vi');
    const descEn = popupOverlay.querySelector('.popup-description .lang.en');
    const image = popupOverlay.querySelector('.popup-image img');
    const date = popupOverlay.querySelector('.popup-date');

    titleVi.textContent = data.titleVi;
    titleEn.textContent = data.titleEn;
    descVi.textContent = data.descriptionVi;
    descEn.textContent = data.descriptionEn;
    image.src = data.image;
    date.textContent = document.querySelector(`[data-popup="${popupId}"] .date`).textContent;

    // Show popup with animation
    popupOverlay.style.display = 'flex';
    setTimeout(() => {
      popupOverlay.classList.add('active');
    }, 10);

    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
  }

  function hidePopup() {
    console.log('Hiding popup');
    popupOverlay.classList.remove('active');
    setTimeout(() => {
      popupOverlay.style.display = 'none';
    }, 300);

    // Restore body scrolling
    document.body.style.overflow = '';
  }

  // Add click event listeners
  timelineItems.forEach(item => {
    console.log('Adding click listener to:', item.getAttribute('data-popup'));
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      const popupId = item.getAttribute('data-popup');
      console.log('Timeline item clicked:', popupId);
      showPopup(popupId);
    });
  });

  popupClose.addEventListener('click', hidePopup);
  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
      hidePopup();
    }
  });

  // Close popup on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hidePopup();
    }
  });
});

// Showcase Section Functionality
document.addEventListener('DOMContentLoaded', () => {
  const mainArtwork = document.querySelector('.main-artwork .artwork-image');
  const artworkCard = document.querySelector('.artwork-card');
  const previewItems = document.querySelectorAll('.preview-item');
  const prevButton = document.querySelector('.nav-arrow.prev');
  const nextButton = document.querySelector('.nav-arrow.next');
  const detailsPanel = document.querySelector('.artwork-details');
  const detailsClose = document.querySelector('.details-close');

  // Add 3D tilt effect for main artwork
  artworkCard.addEventListener('mousemove', (e) => {
    const rect = artworkCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    
    artworkCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  });

  artworkCard.addEventListener('mouseleave', () => {
    artworkCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  });

  let currentIndex = 0;
  const artworks = [
    {
      image: './image/1.1.jpg',
      preview: './image/1.1.jpg',
      title: { vi: 'Miyu đáng yêu', en: 'Lovely Miyu' },
      size: { vi: 'Kích thước: 518x1000 cm', en: 'Size: 518x1000 cm' },
      medium: { vi: 'Ứng dụng ibisPaint X', en: 'ibisPaint X application' },
      year: { vi: 'Năm sáng tác: 2022', en: 'Year: 2022' },
      concept: {
        vi: 'Khi 13 tuổi, với mong muốn có một hình nền điện thoại thật đặc biệt, em đã nảy ra ý tưởng tự vẽ một bức ảnh độc đáo làm hình nền điện thoại. Em tự sáng tạo nhân vật và vẽ bức tranh này hoàn toàn theo sở thích cá nhân của em.',
        en: 'When I was 13, I wanted to have a special phone wallpaper so I came up with the idea of ​​drawing a unique picture to use as my phone wallpaper. I created the character and drew this picture completely based on my personal preferences.'
      }
    },
    {
      image: './image/2.13.jpg',
      preview: './image/2.13.jpg',
      title: { vi: 'Chiến Binh Cyberpunk', en: 'Cyberpunk Warrior' },
      size: { vi: 'Kích thước: 1266 x 1728 cm', en: 'Size: 1266 x 1728 cm' },
      medium: { vi: 'Ứng dụng ibisPaint X', en: 'ibisPaint X application' },
      year: { vi: 'Năm sáng tác: 2023', en: 'Year: 2023' },
      concept: {
        vi: 'Đây là bài kết khóa của em tại MindX, với ý tưởng về một thành phố tương lai đang bị tàn phá và nhân vật chính là một thành viên trong tổ chức tên là Merch. Cô đang chiến đấu hết mình để bảo vệ thành phố của mình. Bức tranh này là cách em thể hiện ý tưởng về một thành phố tương lai đang đứng trước bờ vực diệt vong, và một người hùng cô độc chiến đấu để cứu lấy nó. Đây cũng là kết quả em đạt được sau khóa học tại MindX.',
        en: 'This is my final project at MindX, with the idea of ​​a future city being destroyed and the main character is a member of an organization called Merch. She is fighting with all her might to protect her city. This painting is my way of expressing the idea of ​​a future city on the brink of destruction, and a lone hero fighting to save it. This is also the result I achieved after the course at MindX.'
      }
    },
    {
      image: './image/3.1.jpg',
      preview: './image/3.1.jpg',
      title: { vi: 'Giáng sinh <br>an lành', en: 'Merry Christmas' },
      size: { vi: 'Kích thước: 1575 x 2331 cm', en: 'Size: 1575 x 2331 cm' },
      medium: { vi: 'Ứng dụng ibisPaint X', en: 'ibisPaint X application' },
      year: { vi: 'Năm sáng tác: 2024', en: 'Year: 2024' },
      concept: {
        vi: 'Đây là món quà Giáng Sinh đặc biệt em tự tay vẽ tặng bạn em, một bức fanart của Toga Himiko, nhân vật mà bạn ấy luôn hâm mộ. Đồng thời, đây cũng là tác phẩm đầu tay của em sau khóa học ở MindX, cho thấy sự tiến bộ rõ rệt trong kỹ năng vẽ và tô màu của em.',
        en: 'This is a special Christmas gift that I drew myself for my friend, a fanart of Toga Himiko, a character that she has always admired. At the same time, this is also my first work after the course at MindX, showing clear progress in my drawing and coloring skills.'
      }
    },
    {
      image: './image/3.2.jpg',
      preview: './image/3.2.jpg',
      title: { vi: 'Nữ du kích <br>miền nam', en: 'Southern<br>Female guerrilla' },
      size: { vi: 'Kích thước: 1266 x 1728 cm', en: 'Size: 1266 x 1728 cm' },
      medium: { vi: 'Ứng dụng ibisPaint X', en: 'ibisPaint X application' },
      year: { vi: 'Năm sáng tác: 2024', en: 'Year: 2024' },
      concept: {
        vi: 'Nhân dịp kỷ niệm 50 năm Ngày Giải phóng miền Nam 30/4, em đã vẽ hình ảnh nữ du kích miền Nam để bày tỏ lòng tri ân sâu sắc đến những thế hệ đã hy sinh vì độc lập dân tộc. Với tác phẩm này em muốn khắc họa một khía cạnh khác trong vẻ đẹp của họ, bên cạnh sự kiên cường  là nét duyên dáng, đáng yêu đầy nữ tính trong những năm tháng chiến tranh.',
        en: 'On the occasion of the 50th anniversary of the Liberation of the South on April 30, I drew an image of a female guerilla from the South to express my deep gratitude to the generations who sacrificed for national independence. With this work, I want to portray another aspect of their beauty, besides their resilience, there is also the charming, lovely femininity during the war years.'
      }
    }
  ];

  function showArtworkDetails(index) {
    const artwork = artworks[index];
    const currentLang = document.documentElement.lang || 'vi';
    
    const detailsContent = detailsPanel.querySelector('.details-content');
    detailsContent.innerHTML = `
      <h3>${artwork.title[currentLang]}</h3>
      <p>${artwork.size[currentLang]}</p>
      <p>${artwork.medium[currentLang]}</p>
      <p>${artwork.year[currentLang]}</p>
      <p>${artwork.concept[currentLang]}</p>
    `;
    
    detailsPanel.classList.remove('hidden');
    // Trigger reflow
    detailsPanel.offsetHeight;
    detailsPanel.classList.add('active');
  }

  function hideArtworkDetails() {
    detailsPanel.classList.remove('active');
    // Wait for transition to complete before hiding
    setTimeout(() => {
      detailsPanel.classList.add('hidden');
    }, 500);
  }

  function updateMainArtwork(index) {
  
  
    const artwork = artworks[index];
    mainArtwork.src = artwork.image;
    if (index === 0) {
      mainArtwork.style.objectPosition = 'bottom';
    } else if(index ===1){
      mainArtwork.style.objectPosition='top';
    } else{
      mainArtwork.style.objectPosition = ''; // hoặc 'center' nếu muốn rõ ràng
    }
    // Add fade out effect
    mainArtwork.style.opacity = '0';
    artworkCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    
    setTimeout(() => {
      mainArtwork.src = artwork.image;
      mainArtwork.style.opacity = '1';
      currentIndex = index;

      // Update preview states
      previewItems.forEach((item, i) => {
        if (i === index) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }, 300);
  }

  // Add click event to main artwork
  artworkCard.addEventListener('click', () => {
    showArtworkDetails(currentIndex);
  });

  // Initialize preview images
  previewItems.forEach((item, index) => {
    const img = item.querySelector('img');
    img.src = artworks[index].preview;
    
    item.addEventListener('click', () => {
      if (index !== currentIndex) {
        hideArtworkDetails();
        updateMainArtwork(index);
      }
    });
  });

  // Navigation buttons
  prevButton.addEventListener('click', () => {
    hideArtworkDetails();
    const newIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    updateMainArtwork(newIndex);
  });

  nextButton.addEventListener('click', () => {
    hideArtworkDetails();
    const newIndex = (currentIndex + 1) % artworks.length;
    updateMainArtwork(newIndex);
  });

  // Close details panel
  detailsClose.addEventListener('click', hideArtworkDetails);

  // Close details when clicking outside
  detailsPanel.addEventListener('click', (e) => {
    if (e.target === detailsPanel) {
      hideArtworkDetails();
    }
  });

  // Initialize first artwork
  updateMainArtwork(0);
  // Ensure details panel is hidden initially
  detailsPanel.classList.add('hidden');

  // Update details content when language changes
  document.addEventListener('languageChanged', () => {
    if (detailsPanel.classList.contains('active')) {
      showArtworkDetails(currentIndex);
    }
  });
});

