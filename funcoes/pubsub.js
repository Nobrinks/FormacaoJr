const {PubSub} = require('@google-cloud/pubsub');
const instancia = new PubSub();

module.exports = function pubsub(dados, topico){
    if (typeof(dados) !== 'string'){
        dados = JSON.stringify(dados);
    }

    dados = Buffer.from(dados);
    return instancia.topic(topico).publishMessage(dados);
}
