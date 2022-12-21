const PRODUCTS = [
    {category: "Photographie", price: "400 €", name: "Objectif Nikkor 85mm", rate: "4.8", lien: "https://www.kamera-express.be/fr/nikon-af-s-85mm-f-1-8g-occasion-12428113"},
    {category: "Photographie", price: "215 €", name: "Objectif Nikkor 50mm", rate: "4.5", lien: "https://www.amazon.fr/dp/B004Y1AYAC/ref=asc_df_B004Y1AYAC1639512000000/?tag=ledenicheur-amazon-fr-21&creative=22686&creativeASIN=B004Y1AYAC&linkCode=df0&smid=A1X6FK5RDHNB96&th=1"},
    {category: "Photographie", price: "155 €", name: "Objectif Nikkor 35mm", rate: "4.3", lien: "https://www.vandenborre.be/fr/objectif-pour-appareil-photo-reflex-hybride/nikon-af-s-dx-nikkor-35mm-f-1-8g?gclid=Cj0KCQiA1sucBhDgARIsAFoytUsbU_atTsx4FbX4u-gkD4oA-1ZHYC7rv8N68dhcSByzHXNLnwPI8u0aAtPvEALw_wcB"},
    {category: "Photographie", price: "130 €", name: "Flash pour appareil photo millieu de gamme", rate: "4.5", lien: "https://www.photogalerie.com/flash-speedlite-yongnuo-yn-568ex-iii-pour-nikon?gclid=CjwKCAjwoP6LBhBlEiwAvCcthBMBmEE3jH5iKWEGHmToAoww86tWUCJTp2EOvifsz3TqQ-3lTZ9n4xoCcvIQAvD_BwE"},
    {category: "Photographie", price: "40 €", name: "Flash pour appareil photo bas de gamme", rate: "4.2", lien: "https://www.amazon.fr/Neewer®-Speedlite-Affichage-Numérique-Standard/dp/B010XCEABO/ref=as_li_ss_tl?__mk_fr_FR=ÅMÅŽÕÑ&keywords=flash+neewer&qid=1581247623&s=electronics&sr=1-12&linkCode=sl1&tag=httpprogresen-21&linkId=88359fb94ba6e30b2eac540cd99512d4&language=fr_FR"},
    {category: "Photographie", price: "30 à 70 €", name: "Filtres 67mm ou 52mm (si objecif 35mm) ou 58mm (si objectif 50mm)", rate: "3", lien: "https://coolblue.be ou https://amazon.fr"},
    {category: "Alcool", price: "50 €", name: "Rhum Diplomatico", rate: "4", lien: "Luxembourg moins cher"},
    {category: "Alcool", price: "10 à 50 €", name: "Vin rouge", rate: "3", lien: "Cellier"},
    {category: "Alcool", price: "15 à 40 €", name: "Verre à bière/rhum", rate: "4", lien: "https://amazon.fr ou Andrien"},
    {category: "Décoration", price: "30 €", name: "Déco mural avec une photo que j'ai réalisé", rate: "4.6", lien: "https://www.myposter.be/fr/"},
    {category: "Décoration", price: "20 à 100 €", name: "Figurine d'un animé (liste: https://www.listy.fr/l/73342/kbkg7g )", rate: "4.1", lien: "https://amazon.fr ou https://mangahako.com"},
    {category: "Décoration", price: "40 €", name: "Cadre displate (liste: https://www.listy.fr/l/73753/75zjcs )", rate: "4.6", lien: "https://displate.com"},
    {category: "Habits", price: "50 à 110 €", name: "Chaussures (liste: https://www.listy.fr/l/75491/eo4y8w )", rate: "4", lien: ""},
    {category: "Habits", price: "10 à 30 €", name: "Short et t-shirt de sport", rate: "3.8", lien: ""},
    {category: "Activités", price: "25 à 50 €", name: "Karting entre amis", rate: "4.55", lien: "Eupen"},
    {category: "Autres", price: "7 €", name: "Manga (liste: https://www.listy.fr/l/73338/peinrr )", rate: "4.7", lien: "https://www.fnac.be ; Club ; La traversée BD et manga (vervier)"},
    {category: "Autres", price: "10 à 30 €", name: "Jeu de société", rate: "3.78", lien: ""},
    {category: "Autres", price: "10 à 30 €", name: "Casse tête en bois", rate: "3", lien: ""},
    {category: "Autres", price:"34€", name: "Coque de téléphone", rate: "4.5", lien: "https://rhinoshield.fr/collections/artist-one-piece?device=samsung-galaxy-s22&type=solidsuit-android&page=0&limit=12&dcolor=Black&bcolor=black&prod=samsung-galaxy-s22-solidsuit-android-om74"},

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

    let tabName = products.name.split(" ")
    for(let i = 0; i < tabName.length; i++)
    {
        if(tabName[i].indexOf("https://") >= 0)
        tabName[i] = <a href={tabName[i]} target="_blank">{tabName[i]}</a>
    }
    let tabNameFinal = []
    for (let i = 0; i < tabName.length; i++) {
        const element = tabName[i]
        tabNameFinal[i*2] = element
        tabNameFinal[(i*2)+1] = " "
    }


    const starPercentage = (products.rate / 5) * 100
    const starPercentageRounded = `${Math.round(starPercentage /10) * 10}%`
    
    return <tr>
            <td>{products.category}</td>
            <td>{tabNameFinal}</td>
            <td>{products.price}</td>
            <td>
                <div className="stars-outer">
                    <div className="stars-inner" style={{width: starPercentageRounded}}></div>
                </div>
            </td>
            <td>{tabFinal}</td>
    </tr>
    
}

function ProductTable ({products, activeSort}) {
    const rows = []
    let lastCategory = null;

    if(activeSort.indexOf("Categorie") >= 0) {
        const sorted = products.sort((a,b) => 
            a.category.toLowerCase() > b.category.toLowerCase() ? 1 : -1
        )
        products = sorted
    }

    if(activeSort.indexOf("Prix-croissant") >= 0) {
        const sorted = products.sort((a,b) => {
            let aPrice = a.price.split(" ")
            let bPrice = b.price.split(" ")
            return parseInt(aPrice[0]) > parseInt(bPrice[0]) ? 1 : -1
        })
        products = sorted
    }

    if(activeSort.indexOf("Prix-decroissant") >= 0) {
        const sorted = products.sort((a,b) => {
            let aPrice = a.price.split(" ")
            let bPrice = b.price.split(" ")
            return parseInt(aPrice[0]) < parseInt(bPrice[0]) ? 1 : -1
        })
        products = sorted
    }

    if(activeSort.indexOf("Rate") >= 0) {
        const sorted = products.sort((a,b) => 
            a.rate < b.rate ? 1 : -1
        )
        products = sorted
    }

    if(activeSort.indexOf("Nom") >= 0) {
        const sorted = products.sort((a,b) => 
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        )
        products = sorted
    }

    products.forEach(product => {
        rows.push(<ProductRow key={product.name} products={product}/>)
    })

    return <table className="table">
        <thead className="main-thead">
            <tr>
            <th className="col-4" style={ {borderRadius: "15px 0 0 0", minWidth:"120px"} }>Catégorie</th>
                <th className="col-4" style={ {minWidth:"190px"} }>Nom</th>
                <th>Prix</th>
                <th className="col-5"  style={ {minWidth:"185px"} }>Note</th>
                <th className="col-1" style={ {borderRadius: "0 15px 0 0", maxWidth: "90px"} }>Lien</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}

class SearchBar extends React.Component {

    constructor (props) {
        super(props)
        this.handelActiveSortChange = this.handelActiveSortChange.bind(this)
    }

    handelActiveSortChange(e) {
        this.props.onActiveSortChange(e.target.value)
    }

    render () {
        const activeSort = this.props
        return <div className="form-floating" style={ {margin: "25px"} }>
            <select defaultValue="Categorie" id="selectFilter" className="form-select" aria-label="Default select example" onChange={this.handelActiveSortChange}>
                <option value="Categorie">Catégorie</option>
                <option value="Nom">Nom</option>
                <option value="Prix-croissant">Prix croissant</option>
                <option value="Prix-decroissant">Prix décroissant</option>
                <option value="Rate">Note</option>
            </select>
            <label htmlFor="selectFilter">Trier par</label>
        </div>
    }
}


class FilterableProductTable extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            activeSort: 'Categorie'
        }
        this.handelActiveSortChange = this.handelActiveSortChange.bind(this)
    }

    handelActiveSortChange (activeSort) {
        this.setState({activeSort})
    }

    render () {
        const {products} = this.props
        return <React.Fragment>
            <SearchBar 
                activeSort={this.state.activeSort}
                onActiveSortChange={this.handelActiveSortChange}
            />
            <ProductTable 
                products={products}
                activeSort={this.state.activeSort}
            />
        </React.Fragment>
    }
}

ReactDOM.render(
    <FilterableProductTable products={PRODUCTS}/>,
    document.getElementById('app')
)