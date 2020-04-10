function binarySearch(stringArray, left, right, st) {
    if (right >= left) {
        let mid = Math.floor(left + (right - left) / 2);
        console.log(right, left, mid);
        if (stringArray[mid].toUpperCase() === st.toUpperCase())
            return mid;
        if (stringArray[mid].toUpperCase() > st.toUpperCase())
            return binarySearch(stringArray, left, mid - 1, st);
        return binarySearch(stringArray, mid + 1, right, st);
    }
    return -1;
}
window.onload = () => {
    const contacts = generateContactArray().sort((a, b) => {
        if (`${a.name} ${a.lastNameM} ${a.lastNameF}` >
            `${b.name} ${b.lastNameM} ${b.lastNameF}`) {
            return 1;
        }
        else {
            return 0;
        }
    });
    const table = document.getElementById("table-body");
    contacts.forEach((contact, index) => {
        var div = document.createElement("div");
        div.classList.add("table-row");
        div.setAttribute("index", `${index}`);
        div.innerHTML = contact.generateHTML();
        table.appendChild(div);
    });
    const searchForm = document.getElementById("search-form");
    const searchbar = document.getElementById("searchbar");
    searchForm.onsubmit = (e) => {
        e.preventDefault();
        onSearch(contacts, searchbar["value"]);
    };
};
class Contact {
    constructor(name, lastNameF, lastNameM, email, image, phone) {
        this.name = name;
        this.lastNameM = lastNameM;
        this.lastNameF = lastNameF;
        this.email = email;
        this.image = image;
        this.phone = phone;
    }
    generateHTML() {
        return `
      <span class="table-cell">${this.name}</span
      ><span class="table-cell">${this.lastNameM}</span
      ><span class="table-cell">${this.lastNameF}</span>
      <span class="table-cell">${this.email}</span
      ><span class="table-cell"
        ><span class="image">
          <img
            alt="Profile image"
            src="${this.image}" /></span></span
      ><span class="table-cell">${this.phone}</span>
    `;
    }
}
function generateContactArray() {
    return [
        new Contact("Manuel", "Ibañez", "Galicia", "m.galicia@hotmail.com", "https://krausefx.com/assets/posts/profilePictures/FelixKrause2014.jpg", "(55) 27890704"),
        new Contact("Ellen", "Ødegaard", "Nuñez", "pinkprincess@gmail.com", "https://i.ytimg.com/vi/7Xu_s1YJhyg/maxresdefault.jpg", "(55) 57814564"),
        new Contact("Julieta", "Muñoz", "González", "jmuñoz@live.com", "https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg", "(55) 44567892"),
        new Contact("Alejandro", "Cervantes", "Gallegos", "dragonking@gmail.com", "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", "(55) 62835103"),
        new Contact("José Antonio", "Rodríguez", "Romero", "toño@gmail.com", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBwRDpymbIBLU9lVMDgRD9w168ZXsc8RnY3_qnNEVNuCuBsAC5&usqp=CAU", "(62) 33192376"),
        new Contact("Agnes", "Simpson", "Sable", "a.sable@gmail.com", "https://miro.medium.com/max/3072/1*o-UCEnQ3VRCrHjI8cx4JBQ.jpeg", "(88) 27381647"),
        new Contact("Kai", "Hunter", "Uroba", "kai@gmail.com", "https://lh3.googleusercontent.com/proxy/EdFWUDhKYcR1BrMg-gFkQQ_FOk7xd2L-e6Rr1mu4BmtOzSOBxeO63D0f1xmia_QvQKft6Ds4hHipSvKT2GCBrmHf3ZHi0BVm81gIdJt3YHrUmKe3Ey_kH3tMuvbnhbGqLhI77CU", "(55) 67381625"),
        new Contact("Franklin", "García", "Márquez", "f.marquez@hotmail.com", "https://miro.medium.com/max/2048/0*0fClPmIScV5pTLoE.jpg", "(46) 72861538"),
        new Contact("Augusto", "Evaristo", "Silva", "evasilva@live.mx", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7wil-aq047k9IPWEabcVVHJrJluvg5MaXBUJ6GmMCgGB8CkEA&usqp=CAU", "(88) 368164655"),
        new Contact("Andrés", "Andrade", "Ibarra", "aibarra@andrade.com", "https://lh3.googleusercontent.com/proxy/_bJ1z0-6ofJezhDat4LSNAW3o6Q-j4heV1vM7zDbCbJYKdHfWWeMBDT5M3Qk9dj7_--ve8gXsJ0kyjIEba82iK7ue9mVKoV-7NAvlBhZABabNsU_60R-Ih6TqQ3Oh9At0sc", "(32) 26173345"),
    ];
}
function findString(contacts, st) {
    const stringArray = contacts.map((contact) => `${contact.name} ${contact.lastNameM} ${contact.lastNameF}`);
    var elements = document.getElementsByClassName("table-row");
    Array.from(elements).forEach((element) => {
        element.classList.remove("found");
    });
    return binarySearch(stringArray, 0, stringArray.length - 1, st);
}
function onSearch(contacts, st) {
    const index = findString(contacts, st);
    var element = document.querySelector(`.table-row[index='${index}']`);
    if (element != null) {
        element.classList.add("found");
        alert("¡Lo encontramos!");
    }
    else {
        alert("¡Lo siento!");
    }
}
