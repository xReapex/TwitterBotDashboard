require('dotenv').config()

let available_key = ["EXPRESS_PORT", "CONSUMER_KEY", "CONSUMER_SECRET", "ACCESS_TOKEN_KEY", "ACCESS_TOKEN_SECRET"];

function isKeyExists(key)
{
    if(available_key.includes(key.toUpperCase()))
    {
        return true;
    }
    return false;
}

function changeEnv(key, value)
{
    if (isKeyExists(key) === false)
    {
        return;
    }
    else{
        process.env[key] = value;
    }
}