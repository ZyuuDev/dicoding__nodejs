const initialMemoryUsage = process.memoryUsage();
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for (let i = 0; i <= 10000; i++) {

}

const currentMemoryUsage = process.memoryUsage();

console.log(`hai, ${yourName}`);
console.log(`Mode environment : ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

//$env:NODE_ENV = 'development'; node .\process-object\index.js Fairuz