
/**
 * FAREWELL CARD CONFIGURATION
 * Edit these values to personalize the digital card.
 */
export const CARD_CONFIG = {
  // Recipient Information
  recipientName: "Quyên",
  senderName: "Từ Chị Hằng ❤️",
  
  // Farewell Message - The specific letter requested
  loveMessage: `Gửi Quyên,
Dù thời gian chúng ta quen biết và làm việc cùng nhau không quá dài, nhưng cũng đủ để để lại trong chị nhiều điều đáng nhớ.
Nhớ ngày đầu em bước vào FT, nhìn style lạnh lùng của em, với tính cách của chị lúc đó, chị đã nghĩ chắc sẽ rất khó để tụi mình trở thành bạn. Chị cũng không nhớ chính xác là mình bắt đầu nói chuyện với nhau từ khi nào nữa. Chỉ biết rằng, càng tiếp xúc, chị càng quý con người của em — bởi năng lượng tích cực mà em mang lại, bởi sự thẳng tính và cá tính có phần mạnh mẽ rất riêng của em. Đôi lúc, trong một vài hoàn cảnh, chị cũng không kiểm soát được lời nói của mình, có thể khiến em hiểu lầm hoặc không vui. Nhưng không sao, mọi chuyện rồi cũng ổn cả rồi kk. Và đến hôm nay, tụi mình vẫn vui vẻ với nhau như vậy.
Bên cạnh vẻ mạnh mẽ bên ngoài, chị biết em là một cô bé rất yếu đuối. Nhất là qua lần em chia sẻ về việc ba em ở trong khu tâm bão và bị ảnh hưởng nặng. Em lo lắng vì không thể liên lạc được với ba, lo rằng ba sẽ không qua khỏi. Khi thấy hình ảnh em khóc, biết hai cha con đã phải hủy chuyến du lịch. Nghe đoạn voice của em và đọc những tin nhắn ba gửi cho em, nước mắt chị cũng đã tuôn ra theo lúc nào không hay. Chị thực sự cảm thấy thương hai cha con vô cùng. 
Chị biết hoàn cảnh của em không được trọn vẹn và hạnh phúc như nhiều bạn khác. Mẹ thương em, mẹ nghiêm khắc, nhưng có lẽ chưa đúng cách và cũng không thật sự phù hợp với tính cách của em, nên hai mẹ con đôi khi khó có thể nói chuyện với nhau một cách hòa hợp để hiểu nhau hơn. Dù vậy, chị mong rằng khi có chuyện gì, em hãy cố gắng ngồi lại, nói chuyện với mẹ thật nhẹ nhàng để cả hai có thể hiểu và cảm thông cho nhau nhiều hơn. Để sau này, em sẽ không phải hối tiếc vì những điều chưa kịp nói. Còn với ba, em hãy thay em gái tâm sự và trò chuyện cùng ba nhiều hơn. Nếu có thời gian, thỉnh thoảng em hãy về thăm ba nhé.
Cảm ơn em đã mang năng lượng tích cực, những tiếng cười nơi công sở đã khiến quãng thời gian làm việc của chị trở nên đáng nhớ.
Chúc em thật nhiều sức khỏe, luôn giữ được năng lượng tích cực này và gặt hái nhiều thành công trên chặng đường sắp tới. Và sớm kiếm được người để em đủ tin tưởng dựa dẫm và có quyền yếu đuối trước họ. Dù chia tay FT nhưng sẽ không chia tay tình bạn. Hy vọng trong tương lai, chúng ta vẫn sẽ có dịp gặp lại nhau.
`,
  
  shortQuote: "Mỗi cuộc gặp gỡ đều là một nhân duyên tốt đẹp.",
  
  // Media URLs - 30 images with varying aspect ratios
  // images: Array.from({ length: 30 }, (_, i) => {
  //   const width = 600;
  //   const height = [400, 600, 800, 900, 1000][i % 5];
  //   return `https://picsum.photos/seed/${i + 100}/${width}/${height}`;
  // }),
  images: Array.from({ length: 23 }, (_, i) => `/images/${i + 1}.jpg`),
  
  // Background Music URL (MP3) - Calm piano/instrumental
  musicUrl: "public/music.mp3",
  
  colors: {
    background: "bg-sky-50",
    accent: "text-sky-600",
    primary: "bg-sky-400",
    secondary: "bg-blue-50"
  },
  
  labels: {
    tapToOpen: "Nhấn để mở thiệp 💙",
    replay: "Xem lại từ đầu",
    pause: "Tạm dừng nhạc",
    play: "Phát nhạc",
    galleryTitle: "Kỷ niệm của tụi mình"
  }
};
