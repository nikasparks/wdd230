// if only 
// .style.display

const input = document.querySelector('input');
const list = document.querySelector('ul');
const button = document.querySelector('button');
const main = document.querySelector('main');

button.addEventListener('click',() => {
    let fav = input.value;

    if (fav != ""){
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = fav;
        listItem.appendChild(listBtn);
        listBtn.textContent = '❌';
        list.appendChild(listItem);

        listBtn.addEventListener('click',() => {list.removeChild(listItem);})
        const blank = document.querySelector('p');
        blank.remove('p');
        
    }else{
        const blank = document.createElement('p');
        blank.innerHTML = 'Please enter your favorite chapter from the Book of Mormon.';
        main.appendChild(blank);
    }
    input.focus();
})

    // button.onclick = function() {
    //     let myItem = input.value;
    //     input.value = '';

    //     const listItem = document.createElement('li');
    //     const listText = document.createElement('span');
    //     const listBtn = document.createElement('button');

    //     listItem.appendChild(listText);
    //     listText.textContent = myItem;
    //     listItem.appendChild(listBtn);
    //     listBtn.textContent = 'Delete';
    //     list.appendChild(listItem);

    //     listBtn.onclick = function(e) {
    //       list.removeChild(listItem);
    //"1 Nephi" || fav =="2 Nephi" || fav=="Jacob"|| fav=="Enos"|| fav=="Jarom" || fav=="Omni" ||fav=="Words of Mormon" || fav=="Mosiah" || fav=="Alma" || fav=="Helaman" || fav=="3 Nephi" || fav=="4 Nephi" || fav=="Mormon" || fav=="Ether" || fav=="Moroni"
