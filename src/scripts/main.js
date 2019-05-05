console.log("main.js");

{/* <div>
    <section>
        <h3>Name:</h3>
        <h4>Spice Level:</h4>
        <p>Purchased</p>
        <p>Color:</p>
        <button>Edit</button>
        <button>Delete</button>
    </section>
</div> */}
// this isn't js, we're just using it as a reference point as we build

function populatePage(chickenArray) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = chickenArray.map(makeGrid).join("");
    // map through the array to create what we want in the div (a grid)
    document.querySelector("#chicken-cards").append(newDiv);
    // attach it to the DOM
}

const makeGrid = (item, index) => {
    let sold = `<p class="buy">Eat Moar Chix</p>`;
    let purchased = item.purchased;
    if (purchased) {
        sold = `<p class="buy">Your Friends Ate All Of The Tasty Chix</p>`;
    }

    let block = `
    <section id="card--${index}" style="border: 2px solid ${item.color}">
        <h3>#${index + 1} Name: ${item.name}</h3>
        <h4>SpiceLevel: ${item.spicelevel}</h4>
        ${sold}
        <p>Color: ${item.color}</p>
        <button data-edit-id="${item.id}" onClick="handleEdit(this)">Edit</button>
        <button data-delete-id="${item.id}" onClick="handleDelete(this)">Delete</button>
    `
    return block;
}
// note, we built the above block then the function, just put the function above it

getAllChix()
    .then(
        (inventoryFromGetAllChix) => {
            console.log("the chickens", inventoryFromGetAllChix);
            populatePage(inventoryFromGetAllChix);
        }
    )


function handleEdit(chicken) {
    let whichChicken = chicken.getAttribute("data-edit-id");
    console.log("let's edit", whichChicken);
}
function handleDelete(chicken) {
    let whichChicken = chicken.getAttribute("data-edit-id");
    console.log("let's delete", whichChicken);
}