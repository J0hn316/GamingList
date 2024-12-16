const itemForm = document.getElementById('item-form');
const itemList = document.getElementById('item-list');
const itemInput = document.getElementById('item-input');

function addItem(event) {
  event.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (itemInput.value === '') {
    const p = document.createElement('p');
    p.classList.add('error');
    p.innerText = 'Please add an item';
    itemInput.insertAdjacentElement('afterend', p);
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createBtn('remove-item btn-link text-red');
  li.appendChild(button);

  itemList.appendChild(li);

  itemInput.value = '';
}

function createBtn(classes) {
  const button = document.createElement('button');
  button.className = classes;

  const icon = createIcon('fa-solid fa-skull-crossbones');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

itemForm.addEventListener('submit', addItem);
