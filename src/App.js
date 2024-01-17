const App = () => {
  return (
    <div>
      <header>
        <div class="button-container">
          <button>Menu</button>
          <button>Hakkında</button>
          <button>Saatler & Lokasyon</button>
        </div>
      </header>
      <main>
        <h1 className="logo-container">Basit Yemekler Restoranı</h1>
        <p className="info-container">
          Basit insanlar için basit yemekler yapıyoruz. Sandviç ister misiniz?
          Tamamdır. Goralı? Hemen geliyor. Ateşte kavrulmuş kuşkonmaz börekleri
          ile yerel kaynaklı balla sırlanmış haşlanmış somon yumurtası? Hadi
          oradan. Caddenin karşısındaki Fantezi Yemek Kafe'yi deneyin.
        </p>
      </main>
      <div class="image-container">
        <div class="image-wrapper">
          <img class="hot-dog" src="images/hotdogs.jpg" />
        </div>
        <div class="image-wrapper">
          <img src="images/sandwich.jpg" />
        </div>
        <div class="image-wrapper">
          <img src="images/hamburger.jpg" />
        </div>
      </div>
      <footer>
        <p>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            Coding Company
          </a>
          ™
        </p>
      </footer>
    </div>
  );
};
export default App;
