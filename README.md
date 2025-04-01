# Simple VPN detected

## Подключяем скрпт
> Этот скрипт нужно подключить в блоке `<head>`.
```html
<script src="https://cdn.jsdelivr.net/gh/idsila/simple-vpn-detected/app.js"></script>
```

## Подключаем стили
> Эти стили нужно подключить в блоке `<head>`.
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/idsila/simple-vpn-detected/style.css">
```

## Настраиваем детектор
> Этот скрипт нужно подключить в блоке `<body>` ближе к концу.
```html
<script>
  const vpnDetected = new VpnDetected(true, 'average');
  vpnDetected.run()
</script>
```

> new VpnDetected(`preload`, `type`);
> `preload` - принимает значение, `true` или `false` и отвечает за окно проверки VPN.
> `type` - принимает значение, `simple` по умолчанию, `average` и `enhanced`. Отвечает за степень защиты.
- `simple` - если установить это значение, то будет появляться мешающий баннер.
- `average` - если установить это значение, то будет появляться мешающий баннер и удалиться весь другой интерфей.
- `enhanced` - если установить это значение, то человек использующий хотя бы раз на сайте VPN получает блокировку и не сможет её убрать. Даже если выключит VPN и перезагрузит страницу.
