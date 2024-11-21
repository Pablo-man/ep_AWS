import express from 'express'

const app= express()
const PORT= 4000 || process.env.PORT

app.get('/',(req, res) => {
    res.json('hello')
})

app.listen(PORT, ()=>{
    console.log('server on port 4000')
})