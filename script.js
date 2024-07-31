let obj1 = { name: "Person 1", age: 5 };
let obj2 = { ah: 5, name: "Person 1"};

let key1 = object.keys(obj1);
let key2 = object.keys(obj2);
key1.sort();
key2.sort();

let bool = true;
for (let i = 0; i < key1.length; i++) {
    bool= obj1[key1[i]] === obj2[key[i]];
    if (!bool) {
        console.log("Both objects are not same");
        break;
    }
}
if (bool) {
    console.log("both objects are same");
}