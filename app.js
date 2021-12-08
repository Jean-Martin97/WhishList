const PRODUCTS = [
    {category: "Photographie", price: "400 €", name: "Objectif Nikkor 85mm", lien: "https://www.fr.fnac.be/Objectif-Reflex-Nikon-AF-S-FX-85mm-f-1-8-Nikkor-Serie-G/a4112365"},
    {category: "Photographie", price: "220 €", name: "Objectif Nikkor 50mm", lien: "https://www.coolblue.be/fr/produit/133084/nikon-af-s-50-mm-f-1-8-g.html"},
    {category: "Photographie", price: "169 €", name: "Objectif Nikkor 35mm", lien: "https://www.mediamarkt.be/fr/product/_nikon-objectif-standard-af-s-dx-nikkor-35mm-f1-8g-jaa132da-1094649.html?gclid=Cj0KCQiAzMGNBhCyARIsANpUkzOpWJZO6vbZJx6fU7zwCm87-zoDKQFAYf6HRoYWwGcF7DMdUUIlSIgaAgfEEALw_wcB&gclsrc=aw.ds"},
    {category: "Photographie", price: "115 €", name: "Flash pour appareil photo millieu de gamme", lien: "https://www.photogalerie.com/flash-speedlite-yongnuo-yn-568ex-iii-pour-nikon?gclid=CjwKCAjwoP6LBhBlEiwAvCcthBMBmEE3jH5iKWEGHmToAoww86tWUCJTp2EOvifsz3TqQ-3lTZ9n4xoCcvIQAvD_BwE"},
    {category: "Photographie", price: "60 €", name: "Flash pour appareil photo bas de gamme", lien: "https://www.amazon.fr/Neewer®-Speedlite-Affichage-Numérique-Standard/dp/B010XCEABO/ref=as_li_ss_tl?__mk_fr_FR=ÅMÅŽÕÑ&keywords=flash+neewer&qid=1581247623&s=electronics&sr=1-12&linkCode=sl1&tag=httpprogresen-21&linkId=88359fb94ba6e30b2eac540cd99512d4&language=fr_FR"},
    {category: "Photographie", price: "30 à 70 €", name: "Filtres 67mm ou 52mm (si objecif 35mm) ou 58mm (si objectif 50mm)", lien: "https://coolblue.be ou https://amazon.fr"},
    {category: "Burreau", price: "70 €", name: "Souris sans fils Logitech G502", lien: "https://www.amazon.fr/Logitech-G502-Lightspeed-Programmables-Ordinateur/dp/B07QKC4WWD/ref=psdc_430335031_t2_B07Y8QWZDW?th=1"},
    {category: "Burreau", price: "500 €", name: "Chaise gaming Secret lab Titan evo 2022", lien: "https://secretlab.eu/fr/products/titan-evo-2022-series?sku=R22SW-CnC"},
    {category: "Alcool", price: "50 €", name: "Don papa", lien: "David Sanna"},
    {category: "Alcool", price: "10 à 50 €", name: "Vin rouge", lien: "Delhaize"},
    {category: "Alcool", price: "15 à 40 €", name: "Verre à bière/rhum", lien: "https://amazon.fr ou Andrien"},
    {category: "Décoration", price: "30 €", name: "Déco mural avec une photo que j'ai réalisé", lien: "https://www.myposter.be/fr/"},
    {category: "Décoration", price: "20 à 100 €", name: "Figurine d'un animé (one piece, naruto, demon slayer, hunter x hunter, tokyo revenger)", lien: "https://amazon.fr ou https://mangahako.com"},
    {category: "Décoration", price: "40 €", name: "cadre d'un animé (one piece, naruto, hunter x hunter, tokyo revenger)", lien: "https://displate.com"},
    {category: "Décoration", price: "50 à 100 €", name: "Lampadaire", lien: "https://www.maisonsdumonde.com/BE/fr/q/lampadaire"},
    {category: "Habits", price: "50 à 100 €", name: "Chaussures", lien: ""},
    {category: "Habits", price: "20 à 80 €", name: "Pull", lien: ""},
    {category: "Habits", price: "20 à 80 €", name: "Chemise", lien: ""},
    {category: "Habits", price: "30 à 80 €", name: "Pantalon jeans", lien: ""},
    {category: "Habits", price: "10 à 30 €", name: "Short de sport", lien: ""},
    {category: "Activités", price: "200 €", name: "Saut en parachute", lien: "https://www.skydivespa.be/fr/offrir"},
    {category: "Activités", price: "50 à 100 €", name: "Tour de circuit avec un pilote", lien: "https://www.sport-decouverte.com/bapteme-pilotage-voiture-de-sport.html"},
    {category: "Activités", price: "130 €", name: "Place pour un grand de F1", lien: ""},
    {category: "Activités", price: "25 à 50 €", name: "Karting entre amis", lien: "Eupen"},
    {category: "Activités", price: "? €", name: "Weekend entre amis", lien: ""},
    {category: "Activités", price: "? €", name: "Weekend avec Lara", lien: ""},
    {category: "Autres", price: "7 €", name: "Manga: Demon slayer tome 2 (et suite), jujutsu kaisen tome 1 (et suite), one piece tome 1 (et suite)", lien: "https://www.fnac.be"},
    {category: "Autres", price: "10 à 30 €", name: "Jeu de société", lien: ""},
    {category: "Autres", price: "10 à 30 €", name: "Jeu à boire", lien: ""},
    {category: "Autres", price: "10 à 30 €", name: "Casse tête en bois", lien: ""}
];

function ProductRow ({products}) {
    let tabLien = products.lien.split(" ")
    for(let i = 0; i < tabLien.length; i++)
    {
        if(tabLien[i].indexOf("https://") >= 0)
            tabLien[i] = <a href={tabLien[i]} target="_blank">{tabLien[i]}</a>
    }

    let tabFinal = []
    for (let i = 0; i < tabLien.length; i++) {
        const element = tabLien[i]
        tabFinal[i*2] = element
        tabFinal[(i*2)+1] = " "
    }
    
    return <tr>
            <td>{products.name}</td>
            <td>{products.price}</td>
            <td>{tabFinal}</td>
    </tr>
    
}

function ProductCategoryRow ({category}) {
    return <tr>
        <th colSpan="3">{category}</th>
    </tr>
}

function ProductTable ({products}) {
    const rows = []
    let lastCategory = null;

    products.forEach(product => {
        if (product.category !== lastCategory) {
            lastCategory = product.category
            rows.push(<ProductCategoryRow key={lastCategory} category={lastCategory}/>)
        }
        rows.push(<ProductRow key={product.name} products={product}/>)
    })

    return <table className="table">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
                <th>Lien</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}

class SearchBar extends React.Component {
    render () {
        return <div>
            <div className="form-group">
                <input className="form-control" placeholder="Rechercher"></input>
            </div>
            <div className="form-check">
                
            </div>
        </div>
    }
}


class FilterableProductTable extends React.Component {
    render () {
        const {products} = this.props
        return <React.Fragment>
            <SearchBar/>
            <ProductTable products={products}/>
        </React.Fragment>
    }
}

ReactDOM.render(
    <FilterableProductTable products={PRODUCTS}/>,
    document.getElementById('app')
)