const {default: axios} = require('axios');

const authenticate = async (req, res) =>{
    const {username} = req.body;
    try{
        const r = await axios.put(
            'https://api.chatengine.io/users/', 
            {username: username, secret: username, first_name: username},
            {headers: {"private-key": "f51b9296-4583-4801-9c61-72d625d68088"}}
        );
        return res.status(r.status).json(r.data);
    }catch(e){
        return res.status(e.response.status).json(e.response.data);
    }
}

module.exports = {authenticate}