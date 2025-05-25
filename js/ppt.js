const folders = [
    {
      name: { vi: 'Dự án trong lớp', en: 'Project in class' },
      images: [
        {
          src: 'https://www.canva.com/design/DAF5WCEV5gU/WouSJdbI-Ds0HJGuKuU_-g/view?embed',
          short: 'Đối ',
          desc: 'Bài thuyết trình bằng Canva',
          type: 'iframe'
        },
        {
          src: 'https://www.canva.com/design/DAGQ7lR-Qik/ZLRm0hK8zChGBDIKsw8bIw/view?embed',
          short: 'Tiếng thu',
          desc: 'Bài thuyết trình bằng Canva',
          type: 'iframe'
        },
        {
          src: 'https://www.canva.com/design/DAGn5FycCiI/og5ULvJVwvYlLV7yz6gAcw/view?embed',
          short: 'Eva',
          desc: 'Bài thuyết trình bằng Canva',
          type: 'iframe'
        },
        {
          src: 'https://www.canva.com/design/DAGn5Z0x8fk/n4ei6hcFYPF5xl7RzLDKzA/view?embed',
          short: 'Game',
          desc: 'Bài thuyết trình bằng Canva',
          type: 'iframe'
        },
        {
            src: 'https://www.canva.com/design/DAGn5cLgicI/vR9JLeLhArmICem_E6ATDw/view?embed',
            short: 'Hoá 11',
            desc: 'Bài thuyết trình bằng Canva',
            type: 'iframe'
          }
      ]
    }
  ];
  
  

  const images = folders[0].images; // Lấy danh sách bài thuyết trình
  const gallery = document.getElementById('gallery');

  images.forEach((imgObj) => {
    const box = document.createElement('div');
    box.className = 'image-box';

    const iframe = document.createElement('iframe');
    iframe.src = imgObj.src;
    iframe.allowFullscreen = true;

    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = imgObj.short;

    box.appendChild(iframe);
    box.appendChild(label);
    gallery.appendChild(box);
  });