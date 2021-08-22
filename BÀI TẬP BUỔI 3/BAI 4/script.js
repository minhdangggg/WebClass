//4. You are a shepherd who owns a flock of sheep
// Each of your sheep of your flock has varied sizes

//4.1. Create an array to represent the sizes of your flock, and log all of your flock size, 
//expected screen output:
const flockSheep = [5,7,300, 90,24,50,75];
console.log("This is my sheep size: ");
console.log(flockSheep.join("   "));

//4.2. At the end of each month, you have to choose one and only one sheep to shear
// and thus you want to choose the biggest one to maximize your profit.
// Add scripts to search for the biggest sheep in your list:
let maxSize_OfSheep= Math.max(...flockSheep)
console.log("Biggest Sheep is: "+ maxSize_OfSheep);
//4.3. When your biggest sheer, its size will return to the default size, which is 8.
let positionSheep = flockSheep.indexOf(maxSize_OfSheep);
for (let i = 0; i < flockSheep.length; i++) {
  if(i===positionSheep) flockSheep[i]=8;
}
console.log("After sheering: " + flockSheep.join("   "));
 //4.4. In the following month, EVERY sheep in your flock grow,
 // they have their size increased by 50. Log them out
for (let i = 0; i < flockSheep.length; i++) {
    flockSheep[i]+=50;
  }
  console.log("After 1 month: "+ flockSheep.join("   "));
 //4.5. Let’s do this for 4 months (or as long as you want)
 console.log("4.5.");
 for (let m = 0; m <4; m++) {
    console.log("MONTH "+(m+1));
    console.log("After 1 month: "+ flockSheep.join("   "));
    let maxSize= Math.max(...flockSheep)
    console.log("Biggest Sheep is: "+ maxSize);
    let pos= flockSheep.indexOf(maxSize);
    for (let i = 0; i < flockSheep.length; i++) {
        if(i===pos) flockSheep[i]=8;
    }
    console.log("After sheering: " + flockSheep.join("   "));
    for (let i = 0; i < flockSheep.length; i++) {
        flockSheep[i]+=50;
    }
 }
 //4.6. After day by day shearing sheep, you became bored. You want to sell your flock to travel the world.
 // In order to have fair trade, you must now calculate the total size of your sheep
 // and then the expected money you can get from selling your flock, before going to the market.
 // Write a program to calculate the total size of your sheep as well as the money you would have.
 sum=0;
 for (const i in flockSheep) {
     sum+=flockSheep[i];
 }
 console.log("Total size of my flock: " + sum);
 console.log(`I'd get ${sum} * 2 = ${sum*2}$`);
 