import mongoose from "mongoose"

export async function connect() {
    try {
        await mongoose.connect('mongodb+srv://mateus:pADPKuHBbsPs7qNJ@cluster0.nmjz3wr.mongodb.net/hero-tickets?retryWrites=true&w=majority')
        console.log('Banco Conectado')
    } catch (error) {
        console.log(error)
    }
}