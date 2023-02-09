const getProgresBar = (percent) => {
    let light = '🌕';
    let dark = '🌑';
    let one_fourth = '🌘';
    let one_half = '🌗';
    let three_fourth = '🌖';

    if (percent === 1) {
        return light.repeat(10);
        
    }
    else{
        numLight = Math.floor(percent*10);
        numDark = 9-numLight;

        let middle = '';
        let remainder = Math.round(((1000*percent)%100)/25);

        switch (remainder) {
            case 0: middle = dark;break;
            case 1: middle = one_fourth;break;
            case 2: middle = one_half;break;
            case 3: middle = three_fourth;break;
            case 4: middle = light;
        }
        progressBar = light.repeat(numLight) + middle + dark.repeat(numDark);

        return progressBar;
    }
}

console.log(getProgresBar(0.9))
console.log(getProgresBar(0.87))
console.log(getProgresBar(0.39))
