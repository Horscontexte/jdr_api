# jdr_api
A simple node.js / express CRUD API for RolePlaying application (Yes, Cthulhu)
  
. Make sure you have node.js ready  
. Pull the repo and then 'npm install'  
. Then 'node index.js' to start the API

# Models for each endpoint
**Joueur - /joueurs**
```
const JoueurSchema = mongoose.Schema({
    name: String,
    imgurl: String,
    job: String,
    nation: String,
    from: String,
    pm: Number,
    pv: Number,
    stats: {
      for: Number,
      dex: Number,
      int: Number,
      con: Number,
      app: Number,
      pou: Number,
      tai: Number,
      san: Number,
      edu: Number,
      idee: Number,
      conn: Number,

    },
    ecole: String,
    diplome: String,
    sm: Number,
    comp : Array,
    arme: String,
    publish: Boolean,
}
```
**Personnage - /personnages**
```
const PersonnageSchema = mongoose.Schema({
    title: String,
    description: String,
    age: Number,
    job: String,
    imgurl: String,
    stats: {
      app: Number,
      con: Number,
      dex: Number,
      for: Number,
      tai: Number,
      edu: Number,
      int: Number,
      pou: Number,
    },
    comp: String,
    langue: String,
    publish: Boolean,
}
```
**Document - /documents**
```
const DocumentSchema = mongoose.Schema({
    title: String,
    imgurl: String,
    description: String,
    found: String,
    publish: Boolean,
}
```
**Lieu - /lieux**
```
const LieuSchema = mongoose.Schema({
    title: String,
    histoire: String,
    climat: String,
    howto: String,
    imgurl: String,
    hotspot: String,
    publish: Boolean,
}
```
