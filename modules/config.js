/**
 * Created by Sinwer on 2017/7/21.
 */

module.exports = {
    CookieInfo: {
        SetCookie: function (_res, _name, _value, _maxAge) {
            _res.cookie(_name, _value, {maxAge: _maxAge, path: '/', httpOnly: true});
        },
        GetCookie: function (_cookie) {
            return {
                wid: _cookie.wid
            }
        }
    }
};