


const animal = {
    name: "Lion",
    scientificName: "Panthera leo",
    habitat: {
      continent: "Africa",
      region: "Savanna"
    },
    characteristics: {
      coat: "golden",
      roar: "loud"
    },
    diet: ["antelopes", "zebras", "buffaloes"]
  }
console.dir(animal)



const cheetah = {
  kingdom: "Animalia",
  family: "Felidae",
  order: "Carnivora"
}
for(const anim in cheetah){
  console.log(anim)
}


for(const property in cheetah){
  console.log(`${property}:${cheetah[property]}`)
}


function filterByType(obj, dataType) {
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
          const value = obj[key];
          if (typeof value === dataType) {
              console.log(`${key}: ${value}`);
          }
      }
  }
}

// Example usage:
const sampleObject = {
  name: "John",
  age: 25,
  isActive: true,
  score: 92.5,
};

console.log("String properties:");
filterByType(sampleObject, "string");

console.log("\nNumber properties:");
filterByType(sampleObject, "number");

console.log("\nBoolean properties:");
filterByType(sampleObject, "boolean");



function shallowCopyObject(originalObject) {
  return Object.assign({}, originalObject);
}

// Example usage:
const originalObject = {
  name: "John",
  age: 25,
  city: "New York"
};

const copiedObject = shallowCopyObject(originalObject);

console.log("Original Object:");
console.log(originalObject);

console.log("\nCopied Object:");
console.log(copiedObject);
