//
// made by fixedOtter on 22.7.2022
//

/* imported goods */
//import fs from 'fs';

/* exported object */
const deliciousSauce = {
  // bbg doing the html printing
  dataPrinter: (userDataArray) => {
    // header for the file
    let fileData = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- fontawesome for fonts -->
  <script src="https://kit.fontawesome.com/0b380c000c.js" crossorigin="anonymous"></script>
  <!-- picnic stylesheet -->
  <link rel="stylesheet" href="picnic.min.css">
  <!-- local stylesheet -->
  <link rel="stylesheet" href="style.css">
  <title>About Team</title>
</head>
<body>

<nav id="nav-bar" class="imponent flex center">
  <a href="#" class="brand">
    <h1>The A Team</h1>
  </a>
</nav>

<!-- this is the main holder -->
<main class="main">
  <section id="mainSect" class="flex center one six-1600">

`;
  
    // then insert the html for each user
    for (let i = 0; i < userDataArray.length; i++) {
      switch (userDataArray[i].type) {
        case 'Manager':
          var userBadge = '<i class="fa-solid fa-mug-hot"></i>';
          var customTag = 'Office number:';
          var customData = userDataArray[i].officeNum;
          break;
        case 'Engineer':
          var userBadge = '<i class="fa-solid fa-bacterium"></i>';
          var customTag = 'Github:';
          var customData = `<a href="https://github.com/${userDataArray[i].github}">${userDataArray[i].github}</a>`;
          break;
        case 'Intern':
          var userBadge = '<i class="fa-solid fa-book"></i>';
          var customTag = 'School:';
          var customData = userDataArray[i].schoolName;
          break;
        default:
          break;
      }

      fileData += `
      <!-- card for each user -->
      <article class="card">
        <header class="cardTitle">
          ${userBadge}
          <h3>${userDataArray[i].type}</h3>
        </header>
        <footer>
          <table class="primary full">
            <tbody>
              <thead>
                <tr>
                  <th>${userDataArray[i].name}</th>
                  <th></th>
                </tr>
              </thead>
              <tr>
                <td>ID:</td>
                <td>${userDataArray[i].userID}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td><a href="mailto:${userDataArray[i].userEmail}">${userDataArray[i].userEmail}</a></td>
              </tr>
              <tr>
                <td>${customTag}</td>
                <td>${customData}</td>
              </tr>
            </tbody>
          </table>
        </footer>
      </article>
  
      `;
    }

    fileData += `

    <!-- added after iterating -->
  </section>
</main>

</body>
</html>
    `;
    return fileData;
  }
}

export let dataPrinter = deliciousSauce;