Pour créer un élement React, on utilsera cette syntaxe :

const App = ()=>{ return React.createElement('div',{},'hello world!') }

le but de l'exercice est de restranscire le programme en dessous dans le script
en utilisant la syntaxe ci-dessus.

Vous pouvez rechercher sur la doc, les informations manquantes pour le name,
animal, breed, utilisez ce que vous voulez....

Notez tous ce qui concerne l'utilité de ce flow unidirectionnelle, vous serez
interrogé.

const App = ()=>{

    return
     <Pet name='' animal='' breed=''/>
     <Pet name='' animal='' breed=''/>
     <Pet name='' animal='' breed=''/>

}

const Pet = (props)=>{ return ( <div> <h1>{props.name}</h1>
<h2>{props.animal}</h2> <h3>{props.breed}</h3> </div> ) }
