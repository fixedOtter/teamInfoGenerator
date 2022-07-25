//
// made by fixedOtter on 22.7.2022
//

/* exported object */
const deliciousSauce = {
  // bbg doing the html printing
  dataPrinter: (userDataArray) => {
    // header for the file (everything leading up to the mainSect which holds the employee cards)
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
  
    // NTH: data.map (obj => string) .join('')

    // then inserting the html data for each user
    for (let i = 0; i < userDataArray.length; i++) {
      // first grabbing specifics depending on the userType
      switch (userDataArray[i].type) {
        case 'Manager':
          // setting icon, and office number for manager el
          var userBadge = '<i class="fa-solid fa-mug-hot"></i>';
          var customTag = 'Office number:';
          var customData = userDataArray[i].officeNum;
          break;
        case 'Engineer':
          // setting icon, and github link for engineer el
          var userBadge = '<i class="fa-solid fa-bacterium"></i>';
          var customTag = 'Github:';
          var customData = `<a href="https://github.com/${userDataArray[i].github}">${userDataArray[i].github}</a>`;
          break;
        case 'Intern':
          // setting icon, and school name for intern el
          var userBadge = '<i class="fa-solid fa-book"></i>';
          var customTag = 'School:';
          var customData = userDataArray[i].schoolName;
          break;
        default:
          break;
      }

      // then writing the html card data to the fileData string 
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

    // appending some footer stuff to the fileData so the html tags are closed
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

// exporting this delicious sauce as dataPrinter 
export let dataPrinter = deliciousSauce;