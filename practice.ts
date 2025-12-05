import * as readlineSync from "readline-sync"

function generateBill() {
    const items = Number(readlineSync.question("Enter number of items: "))
    let total = 0;
    let highest = 0;
    let discount = 0;

    for(let i = 0; i < items; i++){
        console.log(`Item ${i+1}`);
        const name = readlineSync.question("Enter Name: ");
        const qty = Number(readlineSync.question("Enter Quantity: "));
        const price = Number(readlineSync.question("Enter Price: "));

        let lineTotal = price * qty;

        // 10% discount
        if(lineTotal > 5000){
            lineTotal = lineTotal * 0.90;
            discount++;
        }

        if(lineTotal > highest) {
            highest = lineTotal;
        }

        total += lineTotal;
    }

    console.log("===== Bill Summary ====")
    console.log("Total Bill: ", total)
    console.log("Highest Item Total: ", highest)
    console.log("Discount Count: ", discount)
}

generateBill()