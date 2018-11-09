document.getElementById('button1').addEventListener('click', loadData);
document.getElementById('button2').addEventListener('click', jsonData);
document.getElementById('button3').addEventListener('click', restData);

// Obtain data from TEXT file using fetch
function loadData() {
    fetch('data.txt')
        .then((response) => response.text()
        )
        .then((data) => {
            document.getElementById('result').innerHTML = data;
        })
        .catch((error) => {console.log(error);});
}

// Obtain data from JSON file using fetch
function jsonData() {
    fetch('../employees.json')
        .then((response) => response.json())
        .then((employees) => {
            let employeeData = '';
            employees.forEach((employee) => {
                employeeData += `
                <li>
                    ${employee.name} is a ${employee.job}
                </li>
            `;
            });
            document.getElementById('result').innerHTML = employeeData;
        })
        .catch((error) => {console.log(error);});
}

// Obtain data from REST API using fetch
function restData() {
    fetch('https://picsum.photos/list')
        .then((response) => response.json())
        .then((images) => {
            let imageData = '';
            images.forEach((image) => {
                imageData += `
                    <li>
                        <a target = '_blanks' href="${image.post_url}">Image</a> by ${image.author}
                    </li>
                `;
            });
            document.getElementById('result').innerHTML = imageData;
        })
        .catch((error) => {console.log(error);});
}