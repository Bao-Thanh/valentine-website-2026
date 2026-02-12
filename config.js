// ============================================
// 🌊 HUỲNH NGỌC NHƯ Ý - BLUE WHALE VERSION 🐳
// ============================================

const CONFIG = {
  valentineName: 'Huỳnh Ngọc Như Ý 🌊🐳',

  pageTitle: 'Một điều nhỏ cho Như Ý 🌊',

  floatingEmojis: {
    hearts: ['🌊', '💠', '✨', '⭐', '☁️', '🫧', '💎', '♊', '🔷', 
    '😸', '😹', '🙀', '😿', '😾', '🐱', '🐈‍⬛', '🐈'],
    bears: ['🐳', '🐋', '🌊', '✨', '💠', '♊', '🔹'],
  },

  questions: {
    first: {
      text:
        'Website này anh làm riêng tặng cho Như Ý nha...\n\nMột cô gái rất xinh xắn và vô cùng dễ thương!!! 🌊🐳',
      yesBtn: 'OK!!!🐋',
      noBtn: 'Không tin đâu 😿',
      secretAnswer: 'Tin đi, ai nhìn cũng thấy vậy mà 🌊',
    },

    second: {
      text:
        'Nếu sự dễ thương của Như Ý được xem như là một màu xanh dương... 🌊\n\nThì chắc cả đại dương cũng phải nhường chỗ 🐳🌊',
      startText: 'Thử kéo xem 🌊',
      nextBtn: 'Tiếp nè 🐳',
    },

    third: {
      text:
        'Giữa những ồn ào của cuộc sống, có những người vẫn mang theo một sự dịu dàng rất riêng — Như Ý là một trong số đó 🌊🐳',
      secretText: 'Điều bất ngờ còn ở phía sau nha...', 
      yesBtn: 'Xem tiếp',
      noBtn: 'Dừng lại',
    },
  },

  loveMessages: {
    extreme:
      'Có những người chỉ cần hiện diện thôi cũng đủ làm mọi thứ xung quanh trở nên dịu lại.',
    high: 'Một nét xinh xắn không ồn ào, nhưng đủ khiến người ta phải để tâm.',
    normal: 'Nhẹ nhàng, nhưng rất đặc biệt.',
  },

  celebration: {
    title: 'Gửi Như Ý 🌊🐳',
    message:
      'Biển có thể xanh vì nắng\n\
       Chiều có thể dịu vì mây\n\
       Còn Như Ý nhẹ một nụ cười\n\
       Là đủ làm không gian lắng lại 🌊🐳',
    emojis: '☁️🐳✨🌊',
  },

  colors: {
    backgroundStart: '#4facfe',
    backgroundEnd: '#00c6ff',
    buttonBackground: '#1e90ff',
    buttonHover: '#63b3ff',
    textColor: '#ffffff',
  },

  animations: {
    floatDuration: '15s',
    floatDistance: '50px',
    bounceSpeed: '0.5s',
    heartExplosionSize: 1.5,
  },

  music: {
    enabled: true,
    autoplay: true,
    musicUrl:
      'https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3',
    startText: '🎵 Bật nhạc 🌊',
    stopText: '🔇 Tắt nhạc',
    volume: 0.5,
  },
}

window.VALENTINE_CONFIG = CONFIG
