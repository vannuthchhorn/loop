// for loop
for(let i = 1; i < provinceCity.length; i++) {
    console.log(provinceCity[i]);
}

// while loop

let i = 1;
while(i < provinceCity.length) {
    console.log(provinceCity[i]);
    i++;
}

// do while loop

let i = 0;
do {
    console.log(provinceCity[i]);
    i++;
}while(i < provinceCity.length);


// for in (loop index)


for (let index in provinceCity) {
    console.log(provinceCity[index]);
}


//for of

for (let province of provinceCity) {
    console.log(province);
}


// for each

provinceCity.forEach(function(item) {
    console.log(item);
});

// anonymous

provinceCity.forEach (item => {
    console.log(item);
});

const province = (item) => {
    console.log(item);
}
provinceCity.forEach(province);