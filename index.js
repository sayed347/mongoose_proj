require('dotenv').config();
let mongoose=require('mongoose');
const { deleteOne } = require('./Person');
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true},{ useFindAndModify: false });
let PersonModel=require('./Person');

let Person=new PersonModel({
    name:'susan',
    age:18,
    favoriteFoods:['doritos','kfs','chilis']
}
)
Person.save()
.then(doc=>{
    console.log(doc)
})
.catch(err=>{
    console.log(err)
})
let arrayOfObjects=[{name:'achraf',age:23,favoriteFoods:['kfs','kaftagi','macdo']},
{name:'semi',age:15,favoriteFoods:['kfs','hargma','macdo']}
];
PersonModel.create(arrayOfObjects).then(doc=>{console.log(doc)}).catch(err=>{console.log(err)});
PersonModel.findOne({name:'achraf'}).then(docs=>console.log(docs));
PersonModel.findById({_id:'610670c49ac47c0d50479b6e'}).then(docs=>{console.log(docs)}).catch(err=>{console.log(err)})
PersonModel.findById({_id:'610670c49ac47c0d50479b6e'})
    .then((person)=>{
         person.favoriteFoods.push('hamburger');
    person.save()
    })
    .catch(err=>console.log(err))

PersonModel.findOneAndUpdate({name:'susan'},{age:20},{new:true}).then(docs=>{console.log(docs)}).catch(err=>{console.log(err)})
var user_id = '610be67b80c6c89168e872f4';
PersonModel.findByIdAndRemove(user_id).then(docs=>console.log(docs)).catch(err=>console.log(err))
PersonModel.remove({name:'susan'}).then(docs=>console.log(docs)).catch(err=>console.log(err))
PersonModel.find({favoriteFoods:'kfs'}).sort({name:'asc'}).limit(2).select({age:false})
.exec()
.then(docs=>console.log(docs))
.catch(err=>console.log(err))