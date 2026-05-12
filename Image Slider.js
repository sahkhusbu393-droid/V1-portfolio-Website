const images = [
      {
        url: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Fruit-Wallpaper.jpg",
        text: "first Image"
      },
      {
        url: "https://tse3.mm.bing.net/th/id/OIP.a6dt4dBRWg8ktDwBc2pU0QHaFy?pid=Api&P=0&h=220",
        text: "secod Fruit"
      },
      {
        url: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
        text: "thirs img"
      },
      {
        url: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
        text: "fourth images"
      }
    ];

    let index = 0;

    function showImage() {
      document.getElementById("slide-img").src = images[index].url;
      document.getElementById("text-inside").textContent = images[index].text;
    }

    function nextImage() {
      index = (index + 1) % images.length;
      showImage();
    } 

    function prevImage() {
      index = (index - 1 + images.length) % images.length;
      showImage();
    }

    // Start with first image
    showImage();