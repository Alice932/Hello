
document.addEventListener("DOMContentLoaded", () => {

    // ======== Slider with one handle
    
    const priceSlider = document.getElementById('r-slider');

    noUiSlider.create(priceSlider, {
        start: [5000, 10000],
        tooltips: true,
        connect: true,
        padding: 0,
        range: {
            'min': 0,
            'max': 15000
        },
        pips: {
            mode: 'values',
             values: [0,5000,15000],
             // density: 4
        }
    });

    priceSlider.noUiSlider.on('change', (values, handle) => {
        goSearch();
    });

    // ======== Slider with two handles
    
    const discountSlider = document.getElementById('m-slider');

    noUiSlider.create(discountSlider, {
        start: 50,
        tooltips: true,
        connect: [true, false],
        step: 1,
        range: {
            'min': 0,
            'max': 100
        },
        format: {
            to: function (value) {
                return parseInt(value);
            },
            from: function (value) {
                return parseInt(value);
            }
        }
    });

    discountSlider.noUiSlider.on('change', (values, handle) => {
        goSearch();
    });

    // ======== Search filters
    
    function goSearch() {
        let winHref = window.location.href.split('?')[0];
        winHref += `?pricerange=${priceSlider.noUiSlider.get()}`;
        winHref += `&mindiscount=${discountSlider.noUiSlider.get()}`;
        window.location.href = winHref;
    }

    // ======== Slider reset
    
    const resetButton = document.getElementById('reset');
    resetButton.onclick = (e) => {
        priceSlider.noUiSlider.reset();
        discountSlider.noUiSlider.reset();
    };

    // ======== Slider set
    
    const params = new URLSearchParams(window.location.search);
    const minDiscount = params.get("mindiscount");
    const priceRange = params.get("pricerange");

    if (minDiscount) {
        discountSlider.noUiSlider.set(parseInt(minDiscount));
    }
    if (priceRange) {
        priceSlider.noUiSlider.set(priceRange.split(','));
    }
});