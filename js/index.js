const url = "https://hp-api.onrender.com/api/characters";

let wrapper = document.querySelector(".main__inner");
const inputName = document.querySelector(".header__input-name");
const selectSchool = document.querySelector(".header__select-school");

//получаем объект с данными
async function sendRequest(url) {
  const response = await fetch(url);
  return await response.json();
}
sendRequest(url).then((data) => render(data));

//функция создания карточки
function makeCard(obj) {
  let card = document.createElement("div");
  card.classList.add("card");

  let img = document.createElement("img");
  img.classList.add("card__img");
  img.setAttribute("src", obj.image);
  img.setAttribute("alt", obj.name);

  let main = document.createElement("div");
  main.classList.add("card__main");

  card.append(img);
  card.append(main);

  let title = document.createElement("h2");
  title.classList.add("card__title");
  title.innerText = obj.name;

  let actor = document.createElement("p");
  actor.classList.add("card__actor");
  actor.innerText = "Actor: ";

  let actorValue = document.createElement("span");
  actorValue.classList.add("card__actor_value");
  actorValue.innerText = obj.actor;
  actor.append(actorValue);

  let gender = document.createElement("p");
  gender.classList.add("card__gender");
  gender.innerText = "Gender: ";

  let genderValue = document.createElement("span");
  genderValue.classList.add("card__gender_value");
  genderValue.innerText = obj.gender;
  gender.append(genderValue);

  let house = document.createElement("p");
  house.classList.add("card__house");
  house.innerText = "House: ";

  let houseValue = document.createElement("span");
  houseValue.classList.add("card__house_value");
  houseValue.innerText = obj.house;
  house.append(houseValue);

  let wandCore = document.createElement("p");
  wandCore.classList.add("card__wand-core");
  wandCore.innerText = "Wand core: ";

  let wandCoreValue = document.createElement("span");
  wandCoreValue.classList.add("card__wand-core_value");
  wandCoreValue.innerText = obj.wand.core;
  wandCore.append(wandCoreValue);

  let alive = document.createElement("p");
  alive.classList.add("card__alive");
  alive.innerText = "House: ";

  let aliveValue = document.createElement("span");
  aliveValue.classList.add("card__alive_value");
  aliveValue.innerText = obj.alive;
  alive.append(aliveValue);

  main.append(title);
  main.append(actor);
  main.append(gender);
  main.append(house);
  main.append(wandCore);
  main.append(alive);

  wrapper.append(card);
}

//функция ренедера карточек на страницу
function render(arr) {
  arr.forEach((obj) => makeCard(obj));
}

//функция фильтрация
function filterSchool() {
  //получим все карточки
  const cards = wrapper.querySelectorAll(".card");
  const valueInput = inputName.value.toLowerCase();
  const valueSelect = selectSchool.value.toLowerCase();

    cards.forEach((card) => {
      const house = card
        .querySelector(".card__house_value")
        .innerHTML.toLowerCase();
      const title = card.querySelector(".card__title").innerHTML.toLowerCase();

      if (title.includes(valueInput) && house.includes(valueSelect)) {
        card.classList.remove("card__hidden");
      } else {
        card.classList.add("card__hidden");
      }
    });
  }

// вызов функции фильтрации по селекту
selectSchool.addEventListener("change", () => {
  filterSchool();
});

// вызов функции фильтрации по имени
inputName.addEventListener("input", () => {
  filterSchool();
});
