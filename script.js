//This project is a Country Menu Showcase, aiming to display various cuisines from different countries. It solves the problem of exploring diverse food options from around the world. Users who are interested in discovering new dishes or planning meals can benefit from this project. It suits food enthusiasts, travelers, and anyone curious about international cuisines. 

//Components:
//- HTML for structuring the webpage
//- CSS for styling the webpage elements
//- JavaScript for dynamic content generation based on user selection

//Libraries/Frameworks:
//- Google Fonts API for importing custom fonts

    function showMenu(country) {
      if (!country) return;
      const menuContainer = document.getElementById('menuContainer');
      menuContainer.innerHTML = '';

      let backgroundImg = '';
      switch (country) {
        case 'South Korea':
          backgroundImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgexGJ9o8yC2yCweB9Hg8OSXo0DIyLy-ae6Q&usqp=CAU';
          break;
        case 'Taiwan':
          backgroundImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS9ufuSowwLTDNXrVSuB81E2BRR7CWIjagLSjI49qsn14mWH5ElU6jER4&s=10';
          break;
        case 'USA':
          backgroundImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVS2t5RsWKc5OyeOa1F8F9Yh9myIlCfKPwng&usqp=CAU';
          break;
        case 'UK':
          backgroundImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1QQsvEbcrDeAE5Ub2YUqNtscbsZGSYypFDiPagzsnPZDYtN8V3HyBpE&s=10';
          break;
        case 'Canada':
          backgroundImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF13Q5317GemNvVspOib_8IkmKxQ93uhfFmAgeFBybNQCjYCSOzSA9abdY&s=10';
          break;
        case 'Japan':
          backgroundImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz036-24u4O6fZj7Zt8ikIU7z5RJ5iFr78kQ&usqp=CAU';
          break;
        case 'China':
          backgroundImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJyyYqm5zrda8s9q78vJYDdTNOK_KdbK1yq7t2V8OdNfFgwiTehm8nrvY&s=10';
          break;
        default:
          break;
      }
      menuContainer.style.backgroundImage = `url(${backgroundImg})`;

      let menuItems = [];
      switch (country) {
        case 'South Korea':
          menuItems = ['Kimchi', 'Bibimbap', 'Bulgogi', 'Tteokbokki'];
          break;
        case 'Taiwan':
          menuItems = ['Beef Noodle Soup', 'Bubble Tea', 'Stinky Tofu', 'Scallion Pancake'];
          break;
        case 'USA':
          menuItems = ['Hamburger', 'Hot Dog', 'Apple Pie', 'Pancakes'];
          break;
        case 'UK':
          menuItems = ['Fish and Chips', 'Shepherd\'s Pie', 'Full English Breakfast', 'Sunday Roast'];
          break;
        case 'Canada':
          menuItems = ['Poutine', 'Maple Syrup', 'Butter Tart', 'Nanaimo Bar'];
          break;
        case 'Japan':
          menuItems = ['Sushi', 'Ramen', 'Tempura', 'Takoyaki'];
          break;
        case 'China':
          menuItems = ['Peking Duck', 'Dim Sum', 'Mapo Tofu', 'Kung Pao Chicken'];
          break;
        default:
          break;
      }

      menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.textContent = item;
        menuContainer.appendChild(menuItem);
      });
    }
  