function doLogin(username, password)
{
    if(username == 'admin' && password == 'admin')
    {
        return true;
    }

    return false;
}