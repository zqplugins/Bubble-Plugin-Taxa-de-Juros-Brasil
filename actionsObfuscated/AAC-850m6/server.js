async function(properties, context){
	function _0x52ca() {
    const _0x48a422 = [
        '1048ytHjDD',
        '15565yuuEIR',
        'cdi',
        'getRatesObject',
        'error',
        'selic',
        '56483nbgYed',
        '622865zakNUl',
        '1606130WpSjKY',
        '275792gTqIOY',
        '5748YrgaVD',
        'ipca',
        '9837DZAUBf',
        '245372sLKMAd',
        '42dBqzFp',
        '9ILJsFY',
        '2WzJDAe'
    ];
    _0x52ca = function () {
        return _0x48a422;
    };
    return _0x52ca();
}
function _0x3e2b(_0x3c65c7, _0x34ab1c) {
    const _0x52ca45 = _0x52ca();
    return _0x3e2b = function (_0x3e2bcf, _0x2bbdcc) {
        _0x3e2bcf = _0x3e2bcf - 0x81;
        let _0x2e30ea = _0x52ca45[_0x3e2bcf];
        return _0x2e30ea;
    }, _0x3e2b(_0x3c65c7, _0x34ab1c);
}
(function (_0x47f8d5, _0x465c75) {
    const _0x33e7a7 = _0x3e2b, _0x45956e = _0x47f8d5();
    while (!![]) {
        try {
            const _0x5b108b = parseInt(_0x33e7a7(0x91)) / 0x1 * (-parseInt(_0x33e7a7(0x8a)) / 0x2) + -parseInt(_0x33e7a7(0x90)) / 0x3 * (parseInt(_0x33e7a7(0x8e)) / 0x4) + -parseInt(_0x33e7a7(0x88)) / 0x5 + -parseInt(_0x33e7a7(0x8f)) / 0x6 * (-parseInt(_0x33e7a7(0x87)) / 0x7) + parseInt(_0x33e7a7(0x81)) / 0x8 * (-parseInt(_0x33e7a7(0x8d)) / 0x9) + parseInt(_0x33e7a7(0x89)) / 0xa + parseInt(_0x33e7a7(0x82)) / 0xb * (parseInt(_0x33e7a7(0x8b)) / 0xc);
            if (_0x5b108b === _0x465c75)
                break;
            else
                _0x45956e['push'](_0x45956e['shift']());
        } catch (_0x3c007e) {
            _0x45956e['push'](_0x45956e['shift']());
        }
    }
}(_0x52ca, 0x28d88));
async function server(_0x460084, _0x1a2f5c) {
    const _0x1add78 = _0x3e2b, _0x27221c = require('selic');
    try {
        const _0x22053f = await _0x27221c[_0x1add78(0x84)]();
        return {
            'selic': _0x22053f[_0x1add78(0x86)],
            'cdi': _0x22053f[_0x1add78(0x83)],
            'ipca': _0x22053f[_0x1add78(0x8c)]
        };
    } catch (_0x52a1a2) {
        console[_0x1add78(0x85)](_0x52a1a2);
        throw _0x52a1a2;
    }
}
	return await server(properties, context);
}