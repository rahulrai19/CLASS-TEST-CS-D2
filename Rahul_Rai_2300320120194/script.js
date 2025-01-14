document.getElementById('startButton').onclick = function() {
    document.getElementById('modal').style.display = 'block';
}

document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
}

const numBulbsInput = document.getElementById('numBulbs');
const bulbCountDisplay = document.getElementById('bulbCount');

numBulbsInput.oninput = function() {
    bulbCountDisplay.textContent = numBulbsInput.value;
}

document.getElementById('doneButton').onclick = function() {
    const numBulbs = numBulbsInput.value;
    const bulbContainer = document.getElementById('bulbContainer');
    bulbContainer.innerHTML = ''; // Clear previous bulbs

    for (let i = 0; i < numBulbs; i++) {
        const bulbDiv = document.createElement('div');
        bulbDiv.className = 'bulb';
        bulbDiv.innerHTML = `
            <img src="https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png" alt="Bulb" id="bulb${i}">

            <input type="checkbox" id="bulbCheckbox${i}" class="bulbCheckbox">
        `;
        bulbContainer.appendChild(bulbDiv);

        // event listener
        const bulbCheckbox = bulbDiv.querySelector('.bulbCheckbox');
        bulbCheckbox.onchange = function() {
            const bulbImg = bulbDiv.querySelector('img');
            if (bulbCheckbox.checked) {
                bulbImg.src = "https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png";
                
                // Set a timeout to automatically uncheck after 10 seconds
                setTimeout(() => {
                    bulbCheckbox.checked = false; 
                    bulbImg.src = "https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png"; 
                }, 12000); // 12 seconds
            } else {
                bulbImg.src = "https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png";
            }
        }
    }

    document.getElementById('modal').style.display = 'none';
}

document.getElementById('resetButton').onclick = function() {
    document.getElementById('bulbContainer').innerHTML = '';
    numBulbsInput.value = 4; 
    bulbCountDisplay.textContent = 4; 
}