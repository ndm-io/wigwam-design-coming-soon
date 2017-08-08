const translator = require('../../translation/exports');

const filters = {
    branding: "branding",
    design: "design"
};

const portfolioItems = [
    {
        alt: "Elegant Chrome & Black Lighting",
        size: "tall",
        filter: filters.branding,
        hoverDesc: "Web / Photo",
        src: "img/a.jpg"
    },
    {
        alt: "Feature Black Table Lamp",
        size: "tall",
        filter: filters.design,
        hoverDesc: "Styling / Web / Design",
        src: "img/b.jpg"
    },
    {
        alt: "Wallpaper Flamingos",
        size: "",
        filter: filters.design,
        hoverDesc: "Photo / Web / Design",
        credit: "Firstlight Photography",
        src: "img/c.jpg"
    },
    {
        alt: "Black & White",
        size: "",
        filter: filters.design,
        hoverDesc: "Web / Design",
        src: "img/d.jpg"
    },
    {
        alt: "Feature Gold Pendant Lighting",
        size: "wide",
        filter: filters.design,
        hoverDesc: "Styling / Web / Design",
        src: "img/e.jpg"
    },
    {
        alt: "Taupe Feature Table Lamp",
        size: "tall",
        filter: filters.design,
        hoverDesc: "Styling / Web / Design",
        src: "img/f.jpg"
    },
    {
        alt: "Statement Wall Light",
        size: "",
        filter: filters.design,
        hoverDesc: "Web / Photo",
        src: "img/unwind-walllight-chrome.jpg"
    },
    {
        alt: "Feather Designer Wallpaper",
        size: "",
        filter: filters.design,
        hoverDesc: "Styling / Photo / Design",
        credit: "Firstlight Photography",
        src: "img/h.jpg"
    },
    {
        alt: "Collection of Designer Wallpaper",
        size: "wide",
        filter: filters.design,
        hoverDesc: "Styling / Photo / Design",
        credit: "Firstlight Photography",
        src: "img/i.jpg"
    },
    {
        alt: "Sculptural Statement Accessories",
        size: "",
        filter: filters.design,
        hoverDesc: "Styling / Web / Design",
        src: "img/j.jpg"
    },
    {
        alt: "Black & Grey Table & Floor Lamp",
        size: "tall",
        filter: filters.design,
        hoverDesc: "Styling / Web / Design",
        src: "img/k.jpg"
    },
    {
        alt: "Black and Gold Metallic",
        size: "",
        filter: filters.design,
        hoverDesc: "Photo / Web",
        src: "img/zoffany-metalics-black-gold.jpg"
    },
    {
        alt: "Sculptural Wall Lights",
        size: "wide",
        filter: filters.design,
        hoverDesc: "Photo / Web",
        src: "img/antique-silver-walllight.jpg"
    }
];

const portfolio = function (language = translator.languages.english) {
    return portfolioItems
        .map(function (item) {
            return Object.assign(item, {filter: translator.translateSingleWord(item.filter, language)});
        });
};

module.exports = portfolio;
