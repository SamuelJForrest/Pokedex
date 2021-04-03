const pokeText = document.querySelector('#poketext');
const pokeBtn = document.querySelector('#pokebtn');
const pokeImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const pokePic = document.querySelector('#pokepic');
const pokeList = document.querySelector('#pokelist');

const prevBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');


// Button to choose a random Pokemon
pokeBtn.addEventListener('click', function(){
    const ranNum = Math.floor(Math.random() * 151) + 1;
    pokePic.src = `${pokeImg}${ranNum}.png`;
    pokeText.textContent = '';
    pokeList.value = `${ranNum}`;
    let pokeName = document.createElement('p');
    let pokeNum = document.createElement('p');
    let pokeType = document.createElement('p');
    let pokeWeak = document.createElement('p');
    let pokeInfo = document.createElement('p');
    pokeName.append("Name: " + pokedex[`${ranNum}` - 1].name);
    pokeNum.append("Number: #" + pokedex[`${ranNum}` - 1].number);
    pokeType.append("Type: " + pokedex[`${ranNum}` - 1].type);
    pokeWeak.append("Weakness: " + pokedex[`${ranNum}` - 1].weaknesses);
    pokeInfo.append(pokedex[`${ranNum}` - 1].info);
    pokeText.append(pokeName);
    pokeText.append(pokeNum);
    pokeText.append(pokeType);
    pokeText.append(pokeWeak);
    pokeInfo.classList.add('textbox');
    pokeText.append(pokeInfo);
});

// Previous Pokemon button
prevBtn.addEventListener('click', function(){
    pokeList.value --;
    pokePic.src = `${pokeImg}${pokeList.value}.png`;
    pokeText.textContent = '';
    let pokeName = document.createElement('p');
    let pokeNum = document.createElement('p');
    let pokeType = document.createElement('p');
    let pokeWeak = document.createElement('p');
    let pokeInfo = document.createElement('p');
    pokeName.append("Name: " + pokedex[`${pokeList.value}` - 1].name);
    pokeNum.append("Number: #" + pokedex[`${pokeList.value}` - 1].number);
    pokeType.append("Type: " + pokedex[`${pokeList.value}` - 1].type);
    pokeWeak.append("Weakness: " + pokedex[`${pokeList.value}` - 1].weaknesses);
    pokeInfo.append(pokedex[`${pokeList.value}` - 1].info);
    pokeText.append(pokeName);
    pokeText.append(pokeNum);
    pokeText.append(pokeType);
    pokeText.append(pokeWeak);
    pokeInfo.classList.add('textbox');
    pokeText.append(pokeInfo);
});

// Pokemon select input
pokeList.addEventListener('change', function(){
    pokePic.src = `${pokeImg}${pokeList.value}.png`;
    pokeText.textContent = '';
    let pokeName = document.createElement('p');
    let pokeNum = document.createElement('p');
    let pokeType = document.createElement('p');
    let pokeWeak = document.createElement('p');
    let pokeInfo = document.createElement('p');
    pokeName.append("Name: " + pokedex[(pokeList.value) - 1].name);
    pokeNum.append("Number: #" + pokedex[(pokeList.value) - 1].number);
    pokeType.append("Type: " + pokedex[(pokeList.value) - 1].type);
    pokeWeak.append("Weakness: " + pokedex[(pokeList.value) - 1].weaknesses);
    pokeInfo.append(pokedex[(pokeList.value) - 1].info);
    pokeText.append(pokeName);
    pokeText.append(pokeNum);
    pokeText.append(pokeType);
    pokeText.append(pokeWeak);
    pokeInfo.classList.add('textbox');
    pokeText.append(pokeInfo);
});

// Next Pokemon button
nextBtn.addEventListener('click', function(){
    pokeList.value ++;
    pokePic.src = `${pokeImg}${pokeList.value}.png`;
    pokeText.textContent = '';
    let pokeName = document.createElement('p');
    let pokeNum = document.createElement('p');
    let pokeType = document.createElement('p');
    let pokeWeak = document.createElement('p');
    let pokeInfo = document.createElement('p');
    pokeName.append("Name: " + pokedex[`${pokeList.value}` - 1].name);
    pokeNum.append("Number: #" + pokedex[`${pokeList.value}` - 1].number);
    pokeType.append("Type: " + pokedex[`${pokeList.value}` - 1].type);
    pokeWeak.append("Weakness: " + pokedex[`${pokeList.value}` - 1].weaknesses);
    pokeInfo.append(pokedex[`${pokeList.value}` - 1].info);
    pokeText.append(pokeName);
    pokeText.append(pokeNum);
    pokeText.append(pokeType);
    pokeText.append(pokeWeak);
    pokeInfo.classList.add('textbox');
    pokeText.append(pokeInfo);
});

