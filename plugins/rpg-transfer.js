const items = ['límite', 'exp', 'cantidadUniéndose'];
const confirmación = {};

async function manejador(_0x1495ac, { conn: _0x3d5b9f, args: _0x2d9681, prefijoUsado: _0x159a3a, comando: _0x2da0e3 }) {
    if (confirmación[_0x1495ac['remitente']]) return _0x3d5b9f['enviarMensaje'](_0x1495ac['chat'], { 'texto': '[❗] Todavía hay fondos en la transferencia, espera un momento.', 'menciones': [_0x1495ac['remitente']] }, { 'citado': _0x1495ac });

    const _0x30e5a2 = global['db']['data']['usuarios'][_0x1495ac['remitente']];
    const _0xd6dde0 = items['filtrar'](_0x514ff1 => _0x514ff1 en _0x30e5a2 && typeof _0x30e5a2[_0x514ff1] == 'número');
    const _0x289862 = ('乂✰Transferir Elementos✰乂\n乂✰límit = diamante ღ\n乂✰exp = experiencia ღ\n乂✰joincount = dólares ღ\n\n✳️ Comando de uso ' + (_0x159a3a + _0x2da0e3) + ' [tipo] [cantidad] [@usuario]\n📌 Ejemplo: ' + (_0x159a3a + _0x2da0e3) + ' exp 65 @' + _0x1495ac['remitente']['split']('@')[0x0] + ' ').recortar();
    const _0x318069 = (_0x2d9681[0x0] || '')['toLowerCase']();

    if (!_0xd6dde0['incluye'](_0x318069)) return _0x3d5b9f['enviarMensaje'](_0x1495ac['chat'], { 'texto': _0x289862, 'menciones': [_0x1495ac['remitente']] }, { 'citado': _0x1495ac });

    const _0x3ec393 = Math['mín'](Número['MÁXIMO_ENTERO'], Math['máx'](0x1, esNúmero(_0x2d9681[0x1]) ? parseInt(_0x2d9681[0x1]) : 0x1)) * 0x1;
    const _0x107049 = _0x1495ac['mencionadoJid'] && _0x1495ac['mencionadoJid'][0x0] ? _0x1495ac['mencionadoJid'][0x0] : _0x2d9681[0x2] ? _0x2d9681[0x2]['reemplazar'](/[@ .+-]/g, '') + '@s.whatsapp.net' : '';

    if (!_0x107049) return _0x3d5b9f['enviarMensaje'](_0x1495ac['chat'], { 'texto': '[❗] Menciona al usuario que quiere hacer la transferencia.', 'menciones': [_0x1495ac['remitente']] }, { 'citado': _0x1495ac });

    if (!(_0x107049 en global['db']['data']['usuarios'])) return _0x3d5b9f['enviarMensaje'](_0x1495ac['chat'], { 'texto': '[❗] El usuario ' + _0x107049 + ' no está en la base de datos.', 'menciones': [_0x1495ac['remitente']] }, { 'citado': _0x1495ac });

    if (_0x30e5a2[_0x318069] * 0x1 < _0x3ec393) return _0x3d5b9f['enviarMensaje'](_0x1495ac['chat'], { 'texto': '[❗] no tienes recursos ' + _0x318069 + ' para transferir', 'menciones': [_0x1495ac['remitente']] }, { 'citado': _0x1495ac });

    const _0x176c8a = ('¿Estás seguro de que deseas transferir ' + _0x3ec393 + ' ' + _0x318069 + ' a @' + (_0x107049 || '')['reemplazar'](/@s\.whatsapp\.net/g, '') + '?\nTienes 60 segundos para confirmar\n\nescribe  si = para aceptar\nno = para cancelar').recortar();

    await _0x3d5b9f['enviarMensaje'](_0x1495ac['chat'], { 'texto': _0x176c8a, 'menciones': [_0x107049] }, { 'citado': _0x1495ac });

    confirmación[_0x1495ac['remitente']] = { 'remitente': _0x1495ac['remitente'], 'a': _0x107049, 'mensaje': _0x1495ac, 'tipo': _0x318069, 'cantidad': _0x3ec393, 'tiempo de espera': setTimeout(() => (_0x3d5b9f['enviarMensaje'](_0x1495ac['chat'], { 'texto': '[❗] El tiempo se agotó, no se recibió respuesta. Transferencia cancelada.', 'menciones': [_0x1495ac['remitente']] }, { 'citado': _0x1495ac }), eliminar confirmación[_0x1495ac['remitente']]), 0x3c * 0x3e8)};
}

manejador['before'] = async _0x47e771 => {
    if (_0x47e771['esBaileys']) return;
    if (!(_0x47e771['remitente'] en confirmación)) return;
    if (!_0x47e771['texto']) return;

    const { 'tiempo de espera': _0x1f2347, 'remitente': _0xbb9e47, 'mensaje': _0x228e04, 'a': _0x4e8ebe, 'tipo': _0x413040, 'cantidad': _0x462b2e } = confirmación[_0x47e771['remitente']];

    if (_0x